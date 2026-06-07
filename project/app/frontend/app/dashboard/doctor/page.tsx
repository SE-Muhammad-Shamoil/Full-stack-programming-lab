'use client';

import { useAuth } from '@/contexts/AuthContext';
import api from '@/lib/api';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import toast from 'react-hot-toast';
import DashboardLayout from '@/components/DashboardLayout';

export default function DoctorDashboard() {
  const { user } = useAuth();
  const [appointments, setAppointments] = useState<any[]>([]);
  const [patients, setPatients] = useState<any[]>([]);
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12 || 12;
      const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
      setCurrentTime(`${hours}:${formattedMinutes} ${ampm}`);
      
      const options: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'long', day: 'numeric' };
      setCurrentDate(now.toLocaleDateString('en-US', options));
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [apptsRes, patsRes] = await Promise.all([
          api.get('/appointments'),
          api.get('/patients')
        ]);
        
        const myAppts = apptsRes.data.filter((a: any) => a.doctor?._id === user?._id);
        setAppointments(myAppts);
        
        const myPats = patsRes.data.filter((p: any) => p.assignedDoctor?._id === user?._id);
        setPatients(myPats);
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    };
    if (user) fetchData();
  }, [user]);

  const updateStatus = async (id: string, status: string) => {
    try {
      await api.put(`/appointments/${id}`, { status });
      toast.success(`Appointment marked as ${status}`);
      setAppointments(appointments.map(app => app._id === id ? { ...app, status } : app));
    } catch (error) {
      toast.error('Failed to update status');
    }
  };

  const todayAppts = appointments.filter((a: any) => {
    const d = new Date();
    return a.date === d.toISOString().split('T')[0];
  });

  return (
    <DashboardLayout>
      <div className="space-y-12">
        {/* Welcome Banner */}
          <section className="bg-white/70 backdrop-blur-xl rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8 border border-white/40 shadow-[0_4px_20px_0_rgba(0,20,50,0.04)]">
            <div className="space-y-4">
              <h3 className="font-display text-display text-primary">Good morning, Dr. {user?.name?.split(' ')[0]}.</h3>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                Your clinical focus today is high. You have <span className="text-secondary font-bold">{todayAppts.length} consultations</span> scheduled.
              </p>
              <div className="flex gap-4 pt-4">
                <button className="bg-primary text-on-primary px-6 py-3 rounded-full font-label-md flex items-center gap-2 hover:bg-on-surface-variant transition-all">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  Review Reports
                </button>
                <Link href="/appointments" className="border border-outline text-primary px-6 py-3 rounded-full font-label-md hover:bg-white/50 transition-all flex items-center justify-center">
                  View Calendar
                </Link>
              </div>
            </div>
            <div className="w-full md:w-auto">
              <div className="bg-white/40 rounded-3xl p-6 text-center border border-white/20 shadow-inner">
                <p className="text-secondary font-bold text-headline-md">{currentTime}</p>
                <p className="text-on-surface-variant font-label-sm">{currentDate}</p>
              </div>
            </div>
          </section>

          {/* Bento Grid Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Today's Schedule Card */}
            <section className="lg:col-span-8 bg-white/70 backdrop-blur-xl rounded-[2rem] p-8 border border-white/40 shadow-[0_4px_20px_0_rgba(0,20,50,0.04)]">
              <div className="flex justify-between items-center mb-8">
                <h4 className="font-headline-md text-headline-md text-primary">Today&apos;s Schedule</h4>
                <Link href="/appointments" className="text-secondary font-label-md hover:underline">See full list</Link>
              </div>
              <div className="space-y-4">
                {todayAppts.length === 0 ? (
                  <p className="text-center text-muted py-8">No appointments scheduled for today.</p>
                ) : (
                  todayAppts.map((appt: any) => (
                    <div key={appt._id} className="group flex flex-col md:flex-row items-center justify-between p-5 rounded-2xl bg-white/30 hover:bg-white/60 border border-transparent hover:border-white/40 transition-all gap-4">
                      <div className="flex items-center gap-6 w-full">
                        <span className="font-label-md text-label-md text-on-surface-variant w-20 flex-shrink-0">{appt.time}</span>
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-white font-bold flex-shrink-0">
                            {appt.patient?.name?.charAt(0) || 'P'}
                          </div>
                          <div>
                            <p className="font-label-md text-label-md font-bold text-primary">{appt.patient?.name}</p>
                            <p className="font-label-sm text-[12px] text-on-surface-variant">{appt.reason || 'Consultation'}</p>
                          </div>
                        </div>
                      </div>
                      
                      {appt.status === 'Pending' ? (
                        <div className="flex justify-end gap-2 w-full md:w-auto mt-4 md:mt-0">
                          <button onClick={() => updateStatus(appt._id, 'Confirmed')} className="px-3 py-1 bg-primary text-white font-label-sm rounded-lg hover:bg-primary-hover transition-colors">Approve</button>
                          <button onClick={() => updateStatus(appt._id, 'Rejected')} className="px-3 py-1 bg-error/10 text-error font-label-sm rounded-lg hover:bg-error/20 transition-colors">Reject</button>
                        </div>
                      ) : (
                        <div className="flex justify-end w-full md:w-auto mt-4 md:mt-0">
                          <span className={`px-4 py-2 rounded-full font-label-sm font-bold tracking-wider ${
                            appt.status === 'Confirmed' ? 'bg-[#4fdbc8]/20 text-[#009485]' : 'bg-surface-variant text-on-surface-variant'
                          }`}>
                            {appt.status}
                          </span>
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
            </section>

            {/* Patient Overview Card */}
            <section className="lg:col-span-4 flex flex-col gap-8">
              {/* Total Patients */}
              <div className="bg-white/70 backdrop-blur-xl rounded-[2rem] p-8 border border-white/40 flex-1 flex flex-col justify-between shadow-[0_4px_20px_0_rgba(0,20,50,0.04)]">
                <div>
                  <p className="font-label-md text-label-md text-on-surface-variant mb-2">Total Appointments</p>
                  <h5 className="text-[40px] font-bold text-primary leading-none">{appointments.length}</h5>
                </div>
                <div className="h-16 w-full flex items-end gap-1 mt-6">
                  {/* Simple SVG Sparkline */}
                  <svg className="w-full h-full" viewBox="0 0 100 30" preserveAspectRatio="none">
                    <path d="M0,25 Q15,5 30,20 T60,10 T90,25" fill="none" stroke="#0051d5" strokeWidth="2"></path>
                  </svg>
                </div>
              </div>

              {/* Pending Reports */}
              <div className="bg-white/70 backdrop-blur-xl rounded-[2rem] p-8 border border-white/40 flex-1 bg-secondary text-on-primary shadow-[0_4px_20px_0_rgba(0,20,50,0.04)]">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-label-md text-label-md opacity-80 mb-2">My Patients</p>
                    <h5 className="text-[40px] font-bold leading-none">{patients.length}</h5>
                  </div>
                  <div className="bg-white/20 p-2 rounded-xl">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                  </div>
                </div>
                <p className="font-body-md text-body-md mt-6 opacity-90">Patients assigned to you for ongoing care.</p>
                <Link href="/patients" className="mt-6 w-full flex items-center justify-center bg-white text-secondary font-bold py-3 rounded-xl hover:bg-surface transition-colors">
                  View Directory
                </Link>
              </div>
            </section>
          </div>
      </div>
    </DashboardLayout>
  );
}
