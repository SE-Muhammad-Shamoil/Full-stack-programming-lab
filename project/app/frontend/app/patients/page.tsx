"use client";

import DashboardLayout from '@/components/DashboardLayout';
import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import api from '@/lib/api';
import toast from 'react-hot-toast';

export default function PatientsPage() {
  const { user } = useAuth();
  const [patients, setPatients] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const res = await api.get('/patients');
        if (user?.role === 'Doctor') {
           setPatients(res.data.filter((p: any) => p.assignedDoctor?._id === user._id));
        } else {
           setPatients(res.data);
        }
      } catch (error) {
        toast.error("Failed to load patients");
      } finally {
        setLoading(false);
      }
    };
    if (user) fetchPatients();
  }, [user]);

  return (
    <DashboardLayout>
      <div className="mb-8 animate-fade-in">
        <h1 className="font-display text-display text-primary mb-2">Patients Directory</h1>
        <p className="font-body-md text-body-md text-on-surface-variant">Manage and review profiles of your assigned members.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          <div className="col-span-full flex justify-center p-12">
            <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : patients.length === 0 ? (
          <div className="col-span-full bg-surface/80 backdrop-blur-xl border border-white/20 rounded-[2rem] p-12 text-center shadow-xl animate-fade-in">
            <div className="w-20 h-20 bg-surface-container rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
              <svg className="w-10 h-10 text-on-surface-variant" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            </div>
            <h2 className="font-headline-md text-headline-md text-primary mb-2">No Patients Found</h2>
            <p className="font-body-md text-on-surface-variant max-w-md mx-auto">
              You currently do not have any patients assigned to your care.
            </p>
          </div>
        ) : (
          patients.map((patient: any, idx: number) => (
            <div 
              key={patient._id} 
              className="bg-surface/80 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-xl hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all group animate-fade-in"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex gap-4 items-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-display text-xl shadow-[0_0_15px_rgba(0,81,213,0.3)] group-hover:scale-110 transition-transform">
                    {patient.user?.name?.charAt(0) || 'P'}
                  </div>
                  <div>
                    <h3 className="font-headline-md text-xl text-primary font-bold truncate max-w-[150px]">{patient.user?.name}</h3>
                    <p className="font-label-sm text-label-sm text-secondary truncate max-w-[150px]">{patient.user?.email}</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-surface-container-lowest rounded-xl p-3 border border-outline-variant/30 text-center">
                  <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-wider mb-1">Age</p>
                  <p className="font-display text-2xl text-on-surface leading-none">{patient.age}</p>
                </div>
                <div className="bg-surface-container-lowest rounded-xl p-3 border border-outline-variant/30 text-center flex flex-col justify-center">
                  <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-wider mb-1">Blood Type</p>
                  <p className="font-label-lg font-bold text-error">{patient.bloodType || 'N/A'}</p>
                </div>
              </div>

              <div className="mb-6 p-3 rounded-xl bg-primary/5 border border-primary/10 h-24 overflow-y-auto custom-scrollbar">
                <p className="text-[10px] text-primary uppercase font-bold tracking-wider mb-1">Clinical History Summary</p>
                <p className="text-sm text-on-surface-variant italic leading-relaxed">
                  {patient.medicalHistory !== 'No prior history provided' ? patient.medicalHistory : 'No significant clinical history reported.'}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-secondary/10 text-secondary flex items-center justify-center font-bold text-xs">
                  {patient.assignedDoctor?.name ? 'D' : '?'}
                </div>
                <span className="text-xs text-on-surface-variant font-medium">
                  Assigned: <span className="font-bold text-on-surface">Dr. {patient.assignedDoctor?.name || 'Unassigned'}</span>
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </DashboardLayout>
  );
}
