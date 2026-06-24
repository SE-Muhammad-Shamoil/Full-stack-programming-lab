'use client';

import { useAuth } from '@/contexts/AuthContext';
import api from '@/lib/api';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import DashboardLayout from '@/components/DashboardLayout';

export default function PatientDashboard() {
  const { user } = useAuth();
  const [appointments, setAppointments] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apptsRes = await api.get('/appointments');
        setAppointments(apptsRes.data);
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    };
    if (user) fetchData();
  }, [user]);

  const upcomingAppts = appointments.filter((a: any) => ['Pending', 'Confirmed'].includes(a.status));
  const nextAppt = upcomingAppts[0];

  return (
    <DashboardLayout>
      <div className="space-y-12">
        {/* Welcome Banner */}
        <section className="mb-12">
          <h2 className="font-display text-display text-primary leading-tight">Welcome back, {user?.name?.split(' ')[0] || 'Patient'}.</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">Your wellness is our priority. You have {upcomingAppts.length} upcoming appointments.</p>
        </section>

          {/* Grid Layout */}
          <div className="grid grid-cols-12 gap-gutter">
            
            {/* Quick Actions (Left Column Top) */}
            <div className="col-span-12 md:col-span-4 space-y-gutter">
              <div className="bg-white/70 backdrop-blur-xl border border-white/40 p-8 rounded-3xl shadow-sm flex flex-col gap-4">
                <h3 className="font-headline-md text-headline-md text-primary mb-2">Quick Actions</h3>
                <Link href="/appointments" className="w-full flex items-center justify-between bg-[#131b2e] text-white p-5 rounded-2xl hover:bg-secondary transition-all group">
                  <span className="font-label-md text-label-md">Book Appointment</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Link>
                <Link href="/medical-history" className="w-full flex items-center justify-between bg-white border border-outline-variant text-primary p-5 rounded-2xl hover:bg-surface-container transition-all group">
                  <span className="font-label-md text-label-md">View Medical History</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                </Link>
              </div>

              {/* Removed Small Information Widget */}
            </div>

            {/* Main Grid Middle & Right */}
            <div className="col-span-12 md:col-span-8 space-y-gutter">
              {/* Upcoming Appointment Card */}
              <div className="bg-white/70 backdrop-blur-xl border border-white/40 p-8 rounded-3xl shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
                
                {nextAppt ? (
                  <>
                    <div className="flex justify-between items-start relative z-10">
                      <div>
                        <span className="bg-[#dbe1ff] text-[#003ea8] px-3 py-1 rounded-full font-label-sm text-label-sm mb-4 inline-block">Upcoming Consultation</span>
                        <h3 className="font-headline-lg text-headline-lg text-primary">Dr. {nextAppt.doctor?.name}</h3>
                        <p className="font-body-md text-body-md text-on-surface-variant">{nextAppt.doctor?.specialization || 'Specialist'}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-headline-md text-headline-md text-primary">{nextAppt.date}</p>
                        <p className="font-label-md text-label-md text-on-surface-variant">{nextAppt.time}</p>
                      </div>
                    </div>
                    {/* Virtual Clinic Removed */}
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center py-8 relative z-10">
                    <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">No upcoming appointments</p>
                    <Link href="/appointments" className="font-label-md text-label-md text-secondary hover:underline">Book an Appointment</Link>
                  </div>
                )}
              </div>

              {/* Health Metrics Bento Grid */}
              <div className="grid grid-cols-2 gap-gutter">
                {/* Blood Pressure Card */}
                <div className="bg-white/70 backdrop-blur-xl border border-white/40 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-center mb-6">
                    <div className="w-12 h-12 bg-error-container/20 rounded-2xl flex items-center justify-center text-error">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" /></svg>
                    </div>
                    <span className="text-on-tertiary-container font-label-sm text-label-sm">Optimal</span>
                  </div>
                  <p className="font-label-md text-label-md text-on-surface-variant">Blood Pressure</p>
                  <div className="flex items-baseline gap-2 mt-1">
                    <h4 className="font-display text-headline-lg text-primary">120/80</h4>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">mmHg</span>
                  </div>
                  <div className="mt-6 h-12 w-full flex items-end gap-1">
                    <div className="bg-secondary/20 h-4 w-full rounded-sm"></div>
                    <div className="bg-secondary/20 h-6 w-full rounded-sm"></div>
                    <div className="bg-secondary/20 h-5 w-full rounded-sm"></div>
                    <div className="bg-secondary h-7 w-full rounded-sm"></div>
                    <div className="bg-secondary/20 h-6 w-full rounded-sm"></div>
                    <div className="bg-secondary/20 h-8 w-full rounded-sm"></div>
                    <div className="bg-secondary/20 h-5 w-full rounded-sm"></div>
                  </div>
                </div>

                {/* Heart Rate Card */}
                <div className="bg-white/70 backdrop-blur-xl border border-white/40 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-center mb-6">
                    <div className="w-12 h-12 bg-[#009485]/10 rounded-2xl flex items-center justify-center text-[#009485]">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </div>
                    <span className="text-on-surface-variant font-label-sm text-label-sm">Resting</span>
                  </div>
                  <p className="font-label-md text-label-md text-on-surface-variant">Heart Rate</p>
                  <div className="flex items-baseline gap-2 mt-1">
                    <h4 className="font-display text-headline-lg text-primary">72</h4>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">bpm</span>
                  </div>
                  <div className="mt-6 h-12 w-full flex items-end gap-1">
                    <div className="bg-[#009485]/40 h-8 w-full rounded-sm"></div>
                    <div className="bg-[#009485]/40 h-7 w-full rounded-sm"></div>
                    <div className="bg-[#009485]/40 h-9 w-full rounded-sm"></div>
                    <div className="bg-[#009485]/40 h-6 w-full rounded-sm"></div>
                    <div className="bg-[#009485]/40 h-7 w-full rounded-sm"></div>
                    <div className="bg-[#009485] h-8 w-full rounded-sm"></div>
                    <div className="bg-[#009485]/40 h-6 w-full rounded-sm"></div>
                  </div>
                </div>
              </div>

            </div>
          </div>
      </div>
    </DashboardLayout>
  );
}
