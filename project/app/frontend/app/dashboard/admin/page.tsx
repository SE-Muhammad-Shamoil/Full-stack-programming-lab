'use client';

import { useAuth } from '@/contexts/AuthContext';
import api from '@/lib/api';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import toast from 'react-hot-toast';
import DashboardLayout from '@/components/DashboardLayout';

export default function AdminDashboard() {
  const { user } = useAuth();
  const [stats, setStats] = useState({ doctors: 0, patients: 0, appointments: 0 });
  const [recentAppointments, setRecentAppointments] = useState<any[]>([]);
  const [todayAppts, setTodayAppts] = useState<any[]>([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [docs, pats, appts] = await Promise.all([
          api.get('/doctors'),
          api.get('/patients'),
          api.get('/appointments')
        ]);
        setStats({
          doctors: docs.data.length,
          patients: pats.data.length,
          appointments: appts.data.length
        });
        setRecentAppointments(appts.data.slice(0, 5));
        
        const d = new Date().toISOString().split('T')[0];
        setTodayAppts(appts.data.filter((a: any) => a.date === d).slice(0, 5));
      } catch (error) {
        console.error("Failed to fetch stats", error);
      }
    };
    fetchStats();
  }, []);

  const updateStatus = async (id: string, status: string) => {
    try {
      await api.put(`/appointments/${id}`, { status });
      toast.success(`Appointment marked as ${status}`);
      setRecentAppointments(recentAppointments.map(app => app._id === id ? { ...app, status } : app));
    } catch (error) {
      toast.error('Failed to update status');
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-10">
        {/* Welcome Banner */}
        <section className="mb-10">
          <div className="bg-white/70 backdrop-blur-xl border border-white/30 rounded-3xl p-8 flex justify-between items-center shadow-[0_4px_20px_0_rgba(0,20,50,0.04)] animate-fade-in">
            <div className="space-y-2">
              <h3 className="font-display text-primary flex items-center gap-3">
                Welcome, {user?.name || 'Administrator'}
                <span className="inline-flex h-3 w-3 rounded-full bg-[#4fdbc8] animate-pulse"></span>
              </h3>
              <p className="font-body-lg text-on-surface-variant max-w-xl">
                System Overview. <span className="text-secondary font-bold">All systems operating optimally.</span> You have {recentAppointments.length} recent activities requiring review today.
              </p>
            </div>
            <div className="hidden lg:flex gap-4">
              <div className="flex flex-col items-end">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Uptime</span>
                <span className="font-headline-md text-primary font-bold">99.98%</span>
              </div>
              <div className="w-px h-12 bg-black/10"></div>
              <div className="flex flex-col items-end">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Server Load</span>
                <span className="font-headline-md text-primary font-bold">14%</span>
              </div>
            </div>
          </div>
        </section>

        {/* Bento Grid Metrics */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 animate-fade-in">
          {/* Total Patients */}
          <div className="bg-white/70 backdrop-blur-xl border border-white/30 rounded-2xl p-6 shadow-sm transition-transform hover:scale-[1.02] group">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-secondary/10 rounded-xl text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              </div>
              <span className="text-on-tertiary-container text-xs font-bold">+4% vs LW</span>
            </div>
            <div className="space-y-1">
              <p className="font-label-md text-on-surface-variant">Total Patients</p>
              <p className="font-display text-4xl text-primary">{stats.patients}</p>
            </div>
            <div className="mt-4 h-1 w-full bg-secondary/10 rounded-full overflow-hidden">
              <div className="h-full bg-secondary w-3/4 rounded-full"></div>
            </div>
          </div>

          {/* Active Doctors */}
          <div className="bg-white/70 backdrop-blur-xl border border-white/30 rounded-2xl p-6 shadow-sm transition-transform hover:scale-[1.02] group">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-[#4fdbc8]/10 rounded-xl text-[#009485] group-hover:bg-[#4fdbc8] group-hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <span className="text-[#009485] text-xs font-bold">Full Staff</span>
            </div>
            <div className="space-y-1">
              <p className="font-label-md text-on-surface-variant">Active Doctors</p>
              <p className="font-display text-4xl text-primary">{stats.doctors}</p>
            </div>
            <div className="mt-4 flex gap-1 items-end">
              <div className="w-1.5 h-3 bg-secondary/20 rounded-t-sm"></div>
              <div className="w-1.5 h-5 bg-secondary/20 rounded-t-sm"></div>
              <div className="w-1.5 h-8 bg-secondary rounded-t-sm"></div>
              <div className="w-1.5 h-6 bg-secondary rounded-t-sm"></div>
              <div className="w-1.5 h-9 bg-secondary rounded-t-sm"></div>
            </div>
          </div>

          {/* Appointments */}
          <div className="bg-white/70 backdrop-blur-xl border border-white/30 rounded-2xl p-6 shadow-sm transition-transform hover:scale-[1.02] group">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-secondary/10 rounded-xl text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              </div>
              <span className="text-on-surface-variant text-xs font-bold">Total Platform</span>
            </div>
            <div className="space-y-1">
              <p className="font-label-md text-on-surface-variant">Appointments</p>
              <p className="font-display text-4xl text-primary">{stats.appointments}</p>
            </div>
            <div className="mt-4 flex -space-x-2">
              <div className="w-7 h-7 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                <img alt="Doctor" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjJbPOr4gDczER5sjxs2EjCXvz_N_XDlQ1IO2Wy-3H_EazhDEZLCkHEma-gO6MHtp-QauoFuenXEjbCdnzftNWXeZbNKv9ieVm85Ny_U0AJvYMibfbGUTCEh_s5BowPVYUu8iffj9kuAMN-NFN_7AuM8JFL8ShQxwa-aQL_fvUt81ec0AZyEpAeouo1pvX6p14tuyetQmBJL9_j42jwhQm9WObQZ7TLA26dahICvnSwJ5QQGnDjbmoA0_QowZs5O1vFsZjeOGA4dl7"/>
              </div>
              <div className="w-7 h-7 rounded-full border-2 border-white bg-slate-300 overflow-hidden">
                <img alt="Doctor" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3IsDAb-Kgq3fiXH5rUADf2tAoV19X7IhVpULXgKdRIcUpA46TptUw79-lawGjM_Eii-DTlZyoMUjFnjMNlZFp0aOp8S12dawm8C6T_GPf9NePj9xk-3lIdLEMBqKdznV5Lb4jROFnAeDnF6kxHtj_wZmGvMv6tBWp7blt5XgE6QPVqa2c7__dk20CQjlnm0YJillIvk95jfVXe5_kZVK7nBucQL-p43jPmg9RdiJo0kIcOvYvMpzxGzuuJKKTm2PqaGH0Tb0ARV6w"/>
              </div>
              <div className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold text-white bg-secondary">
                  +{Math.max(0, stats.appointments - 2)}
              </div>
            </div>
          </div>

          {/* Pending Approvals */}
          <div className="bg-white/70 backdrop-blur-xl border border-white/30 rounded-2xl p-6 shadow-sm transition-transform hover:scale-[1.02] group">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-error-container/50 rounded-xl text-error group-hover:bg-error group-hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <span className="text-error text-xs font-bold animate-pulse">Critical</span>
            </div>
            <div className="space-y-1">
              <p className="font-label-md text-on-surface-variant">System Status</p>
              <p className="font-display text-4xl text-primary">100%</p>
            </div>
            <div className="mt-4">
              <div className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest mb-1">Time to SLA</div>
              <div className="h-1 w-full bg-black/10 rounded-full overflow-hidden">
                <div className="h-full bg-error w-1/4 rounded-full"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activity List (Span 2) */}
          <section className="lg:col-span-2">
            <div className="bg-white/70 backdrop-blur-xl border border-white/30 rounded-3xl overflow-hidden shadow-[0_4px_20px_0_rgba(0,20,50,0.04)]">
              <div className="p-6 border-b border-black/5 flex justify-between items-center">
                <h4 className="font-headline-md text-primary">Recent Appointments</h4>
                <Link href="/appointments" className="text-secondary font-label-md text-label-md hover:underline">View All History</Link>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-black/5">
                    <tr>
                      <th className="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">Patient</th>
                      <th className="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">Doctor</th>
                      <th className="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">Time</th>
                      <th className="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">Status</th>
                      <th className="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-black/5">
                    {recentAppointments.length === 0 ? (
                      <tr>
                        <td colSpan={4} className="px-6 py-8 text-center text-on-surface-variant font-body-md">No recent appointments found.</td>
                      </tr>
                    ) : (
                      recentAppointments.map((appt: any) => (
                        <tr key={appt._id} className="hover:bg-white/40 transition-colors">
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-primary-container text-white flex items-center justify-center font-bold text-xs">
                                {appt.patient?.name?.charAt(0) || 'P'}
                              </div>
                              <span className="font-body-md text-on-surface font-medium">{appt.patient?.name}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <span className="font-body-md text-on-surface-variant">Dr. {appt.doctor?.name}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${appt.status === 'Confirmed' ? 'bg-success-light text-success' : appt.status === 'Pending' ? 'bg-warning-light text-warning' : 'bg-surface-variant text-on-surface-variant'}`}>
                              {appt.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right">
                            {appt.status === 'Pending' && (
                              <div className="flex justify-end gap-2">
                                <button onClick={() => updateStatus(appt._id, 'Confirmed')} className="px-3 py-1 bg-primary text-white font-label-sm rounded-lg hover:bg-primary-hover transition-colors">Approve</button>
                                <button onClick={() => updateStatus(appt._id, 'Rejected')} className="px-3 py-1 bg-error/10 text-error font-label-sm rounded-lg hover:bg-error/20 transition-colors">Reject</button>
                              </div>
                            )}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Side Card: Quick Insights */}
          <section className="space-y-6">
            {/* Today's Active Appointments */}
            <div className="bg-white/70 backdrop-blur-xl border border-white/30 rounded-3xl p-6 shadow-sm">
              <h5 className="font-headline-md text-primary mb-6">Today's Active Flow</h5>
              <div className="space-y-4">
                {todayAppts.length === 0 ? (
                  <p className="text-center text-on-surface-variant text-sm py-4">No active appointments today.</p>
                ) : (
                  todayAppts.map((appt: any) => (
                    <div key={`today-${appt._id}`} className="flex items-center justify-between p-3 rounded-2xl bg-white/40 border border-white/20">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                          {appt.patient?.name?.charAt(0) || 'P'}
                        </div>
                        <div>
                          <div className="font-label-md text-on-surface font-bold">{appt.patient?.name}</div>
                          <div className="text-[10px] text-on-surface-variant uppercase font-medium">Dr. {appt.doctor?.name} • {appt.time}</div>
                        </div>
                      </div>
                      <span className={`h-2 w-2 rounded-full ${appt.status === 'Confirmed' ? 'bg-[#4fdbc8] shadow-[0_0_8px_rgba(79,219,200,0.6)]' : 'bg-warning'}`}></span>
                    </div>
                  ))
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </DashboardLayout>
  );
}
