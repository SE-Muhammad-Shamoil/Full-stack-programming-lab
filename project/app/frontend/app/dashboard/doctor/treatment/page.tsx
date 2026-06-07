'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import api from '@/lib/api';
import toast from 'react-hot-toast';
import Link from 'next/link';

export default function TreatmentPage() {
  const { user } = useAuth();
  const [appointments, setAppointments] = useState<any[]>([]);
  const [selectedAppt, setSelectedAppt] = useState('');
  
  // Checkup Form
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bp, setBp] = useState('');
  const [heartRate, setHeartRate] = useState('');
  const [temp, setTemp] = useState('');
  const [checkupNotes, setCheckupNotes] = useState('');

  // Progress Form
  const [visitType, setVisitType] = useState('Initial');
  const [progressStatus, setProgressStatus] = useState('Stable');
  const [progressNotes, setProgressNotes] = useState('');
  const [nextDate, setNextDate] = useState('');

  useEffect(() => {
    const fetchAppts = async () => {
      try {
        const res = await api.get('/appointments');
        // Only show Confirmed or In Treatment appointments for this doctor
        const validAppts = res.data.filter((a: any) => 
          a.doctor?._id === user?._id && 
          (a.status === 'Confirmed' || a.status === 'In Treatment')
        );
        setAppointments(validAppts);
      } catch (error) {
        toast.error("Failed to load appointments");
      }
    };
    if (user) fetchAppts();
  }, [user]);

  const submitCheckup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedAppt) return toast.error("Please select an appointment");
    
    const appt = appointments.find(a => a._id === selectedAppt);
    try {
      await api.post('/treatments/checkup', {
        appointment: selectedAppt,
        patient: appt.patient._id,
        height, weight, bloodPressure: bp, heartRate, temperature: temp, generalNotes: checkupNotes
      });
      toast.success("Checkup recorded successfully");
      setHeight(''); setWeight(''); setBp(''); setHeartRate(''); setTemp(''); setCheckupNotes('');
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Failed to record checkup");
    }
  };

  const submitProgress = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedAppt) return toast.error("Please select an appointment");
    
    const appt = appointments.find(a => a._id === selectedAppt);
    try {
      await api.post('/treatments/progress', {
        appointment: selectedAppt,
        patient: appt.patient._id,
        visitType, progressNotes, status: progressStatus, nextFollowUpDate: nextDate
      });
      toast.success("Treatment progress updated");
      setProgressNotes(''); setNextDate('');
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Failed to update progress");
    }
  };

  return (
    <div className="bg-background text-on-surface min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        
        <div className="flex items-center gap-4 mb-8">
          <Link href="/dashboard/doctor" className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center hover:bg-secondary/20 transition-colors">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          </Link>
          <h1 className="font-headline-md text-headline-md font-bold text-primary">Treatment & Checkup</h1>
        </div>

        <div className="bg-surface/80 backdrop-blur-md rounded-[2rem] p-8 border border-white/20 shadow-xl">
          <label className="block font-label-md text-label-md mb-2">Select Active Patient Appointment</label>
          <select 
            value={selectedAppt} 
            onChange={(e) => setSelectedAppt(e.target.value)}
            className="w-full bg-background border border-outline rounded-xl px-4 py-3 text-label-md focus:ring-2 focus:ring-secondary outline-none"
          >
            <option value="">-- Select Appointment --</option>
            {appointments.map(a => (
              <option key={a._id} value={a._id}>
                {a.patient?.name} - {a.date} at {a.time} ({a.status})
              </option>
            ))}
          </select>
        </div>

        {selectedAppt && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Physical Checkup Form */}
            <div className="bg-surface/80 backdrop-blur-md rounded-[2rem] p-8 border border-white/20 shadow-xl">
              <h2 className="font-headline-md text-primary mb-6">Physical Checkup</h2>
              <form onSubmit={submitCheckup} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-on-surface-variant mb-1">Height (cm)</label>
                    <input type="text" value={height} onChange={e => setHeight(e.target.value)} className="w-full bg-background border border-outline rounded-xl px-4 py-2 text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs text-on-surface-variant mb-1">Weight (kg)</label>
                    <input type="text" value={weight} onChange={e => setWeight(e.target.value)} className="w-full bg-background border border-outline rounded-xl px-4 py-2 text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs text-on-surface-variant mb-1">Blood Pressure</label>
                    <input type="text" placeholder="120/80" value={bp} onChange={e => setBp(e.target.value)} className="w-full bg-background border border-outline rounded-xl px-4 py-2 text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs text-on-surface-variant mb-1">Heart Rate</label>
                    <input type="text" value={heartRate} onChange={e => setHeartRate(e.target.value)} className="w-full bg-background border border-outline rounded-xl px-4 py-2 text-sm" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-on-surface-variant mb-1">Temperature</label>
                  <input type="text" value={temp} onChange={e => setTemp(e.target.value)} className="w-full bg-background border border-outline rounded-xl px-4 py-2 text-sm" />
                </div>
                <div>
                  <label className="block text-xs text-on-surface-variant mb-1">General Notes *</label>
                  <textarea required value={checkupNotes} onChange={e => setCheckupNotes(e.target.value)} className="w-full bg-background border border-outline rounded-xl px-4 py-2 text-sm h-24" />
                </div>
                <button type="submit" className="w-full bg-secondary text-white font-bold py-3 rounded-xl hover:bg-secondary/90 transition-colors">Record Checkup</button>
              </form>
            </div>

            {/* Treatment Progress Form */}
            <div className="bg-surface/80 backdrop-blur-md rounded-[2rem] p-8 border border-white/20 shadow-xl">
              <h2 className="font-headline-md text-primary mb-6">Treatment Progress</h2>
              <form onSubmit={submitProgress} className="space-y-4">
                <div>
                  <label className="block text-xs text-on-surface-variant mb-1">Visit Type</label>
                  <select value={visitType} onChange={e => setVisitType(e.target.value)} className="w-full bg-background border border-outline rounded-xl px-4 py-2 text-sm">
                    <option value="Initial">Initial</option>
                    <option value="Follow-up">Follow-up</option>
                    <option value="Routine Check">Routine Check</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-on-surface-variant mb-1">Patient Status</label>
                  <select value={progressStatus} onChange={e => setProgressStatus(e.target.value)} className="w-full bg-background border border-outline rounded-xl px-4 py-2 text-sm">
                    <option value="Stable">Stable</option>
                    <option value="Improving">Improving</option>
                    <option value="Deteriorating">Deteriorating</option>
                    <option value="Resolved">Resolved</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-on-surface-variant mb-1">Progress Notes *</label>
                  <textarea required value={progressNotes} onChange={e => setProgressNotes(e.target.value)} className="w-full bg-background border border-outline rounded-xl px-4 py-2 text-sm h-24" />
                </div>
                <div>
                  <label className="block text-xs text-on-surface-variant mb-1">Next Follow-up Date</label>
                  <input type="date" value={nextDate} onChange={e => setNextDate(e.target.value)} className="w-full bg-background border border-outline rounded-xl px-4 py-2 text-sm" />
                </div>
                <button type="submit" className="w-full bg-primary text-white font-bold py-3 rounded-xl hover:bg-primary-hover transition-colors">Update Progress</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
