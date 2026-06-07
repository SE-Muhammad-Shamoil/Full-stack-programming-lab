'use client';

import DashboardLayout from '@/components/DashboardLayout';
import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import api from '@/lib/api';
import toast from 'react-hot-toast';

export default function AppointmentsPage() {
  const { user } = useAuth();
  const [appointments, setAppointments] = useState<any[]>([]);
  const [doctors, setDoctors] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ doctor: '', date: '', time: '', reason: '' });
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const apptsRes = await api.get('/appointments');
      setAppointments(apptsRes.data);
      
      if (user?.role === 'Patient' || user?.role === 'Admin') {
        const docsRes = await api.get('/doctors');
        setDoctors(docsRes.data);
      }
    } catch (error) {
      toast.error("Failed to load appointments");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) fetchData();
  }, [user]);

  const handleBook = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post('/appointments', formData);
      toast.success('Appointment booked successfully!');
      setShowModal(false);
      fetchData();
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Failed to book appointment');
    }
  };

  const handleStatusChange = async (id: string, status: string) => {
    try {
      await api.put(`/appointments/${id}`, { status });
      toast.success(`Appointment marked as ${status}`);
      fetchData();
    } catch (error) {
      toast.error('Failed to update status');
    }
  };

  const getStatusBadgeColor = (status: string) => {
    switch(status) {
      case 'Confirmed': return 'bg-success-light text-success border-success/20';
      case 'Pending': return 'bg-warning-light text-warning border-warning/20';
      case 'Rejected': return 'bg-error/10 text-error border-error/20';
      case 'In Treatment': return 'bg-primary/20 text-primary border-primary/30';
      case 'Completed': return 'bg-surface-variant text-on-surface-variant border-outline-variant';
      default: return 'bg-surface-variant text-on-surface-variant';
    }
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 animate-fade-in">
        <div>
          <h1 className="font-display text-display text-primary mb-2">Appointments</h1>
          <p className="font-body-md text-body-md text-on-surface-variant">Manage your scheduling and clinical engagements.</p>
        </div>
        {user?.role === 'Patient' && (
          <button 
            className="bg-primary text-on-primary px-6 py-3 rounded-xl font-label-md hover:bg-primary-hover shadow-lg hover:shadow-[0_0_20px_rgba(0,81,213,0.3)] transition-all flex items-center gap-2"
            onClick={() => setShowModal(true)}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
            Book Appointment
          </button>
        )}
      </div>

      <div className="bg-surface/80 backdrop-blur-xl border border-white/20 rounded-[2rem] shadow-xl overflow-hidden animate-fade-in" style={{animationDelay: '100ms'}}>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b border-white/10 bg-surface-container-lowest/50">
                <th className="p-6 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Date & Time</th>
                <th className="p-6 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
                  {user?.role === 'Patient' ? 'Specialist' : 'Patient'}
                </th>
                <th className="p-6 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Reason</th>
                <th className="p-6 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Status</th>
                {['Admin', 'Doctor'].includes(user?.role || '') && (
                  <th className="p-6 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider text-right">Actions</th>
                )}
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={5} className="p-8 text-center">
                    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
                  </td>
                </tr>
              ) : appointments.length === 0 ? (
                <tr>
                  <td colSpan={5} className="p-12 text-center">
                    <div className="w-16 h-16 bg-surface-container rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-on-surface-variant" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    </div>
                    <p className="font-body-lg text-body-lg text-on-surface">No appointments found</p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">There are currently no records to display.</p>
                  </td>
                </tr>
              ) : (
                appointments.map((appt: any) => (
                  <tr key={appt._id} className="border-b border-white/5 hover:bg-surface-container-lowest/30 transition-colors group">
                    <td className="p-6">
                      <div className="font-label-md text-label-md font-bold text-on-surface">{appt.date}</div>
                      <div className="font-label-sm text-label-sm text-secondary">{appt.time}</div>
                    </td>
                    <td className="p-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container font-bold shadow-sm">
                          {user?.role === 'Patient' ? appt.doctor?.name?.charAt(0) : appt.patient?.name?.charAt(0) || 'U'}
                        </div>
                        <div>
                          <p className="font-label-md text-label-md font-bold text-on-surface">
                            {user?.role === 'Patient' ? `Dr. ${appt.doctor?.name}` : appt.patient?.name}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="p-6">
                      <p className="font-body-sm text-body-sm text-on-surface-variant truncate max-w-xs" title={appt.reason}>
                        {appt.reason}
                      </p>
                    </td>
                    <td className="p-6">
                      <span className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border ${getStatusBadgeColor(appt.status)}`}>
                        {appt.status}
                      </span>
                    </td>
                    {['Admin', 'Doctor'].includes(user?.role || '') && (
                      <td className="p-6 text-right">
                        <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          {appt.status === 'Pending' && (
                            <>
                              <button onClick={() => handleStatusChange(appt._id, 'Confirmed')} className="px-3 py-1.5 bg-primary/10 text-primary font-label-sm rounded-lg hover:bg-primary hover:text-white transition-colors">Approve</button>
                              <button onClick={() => handleStatusChange(appt._id, 'Rejected')} className="px-3 py-1.5 bg-error/10 text-error font-label-sm rounded-lg hover:bg-error hover:text-white transition-colors">Reject</button>
                            </>
                          )}
                          {appt.status === 'Confirmed' && (
                             <button onClick={() => handleStatusChange(appt._id, 'Completed')} className="px-3 py-1.5 bg-secondary/10 text-secondary font-label-sm rounded-lg hover:bg-secondary hover:text-white transition-colors">Mark Completed</button>
                          )}
                        </div>
                      </td>
                    )}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Booking Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-fade-in">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-md" onClick={() => setShowModal(false)}></div>
          <div className="relative z-10 bg-surface border border-white/20 rounded-[2.5rem] shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]">
            
            <div className="bg-gradient-to-r from-primary to-secondary p-8 text-white shrink-0">
              <h2 className="font-display text-3xl mb-2">Book Appointment</h2>
              <p className="opacity-80">Select a specialist and secure your preferred time slot.</p>
            </div>

            <div className="p-8 overflow-y-auto custom-scrollbar flex-1 min-h-0">
              <form onSubmit={handleBook} className="space-y-6">
                {/* Step 1: Doctor */}
                <div className="space-y-2">
                  <label className="font-label-md text-label-md font-bold text-on-surface-variant flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs">1</span>
                    Select Specialist
                  </label>
                  <select 
                    className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl p-4 text-on-surface focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none" 
                    required
                    value={formData.doctor}
                    onChange={e => {
                      setFormData({...formData, doctor: e.target.value, time: '', date: ''});
                    }}
                  >
                    <option value="">-- Choose Specialist --</option>
                    {doctors.map((doc: any) => (
                      <option key={doc.user?._id} value={doc.user?._id}>Dr. {doc.user?.name} — {doc.specialty}</option>
                    ))}
                  </select>
                </div>

                {/* Step 2: Date */}
                {formData.doctor && (
                  <div className="space-y-2 animate-fade-in">
                    <label className="font-label-md text-label-md font-bold text-on-surface-variant flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs">2</span>
                      Select Date
                    </label>
                    <input 
                      type="date" 
                      className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl p-4 text-on-surface focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none" 
                      required 
                      value={formData.date} 
                      onChange={async e => {
                        const newDate = e.target.value;
                        setFormData({...formData, date: newDate, time: ''});
                        if (newDate) {
                          try {
                            const res = await api.get(`/appointments/doctor/${formData.doctor}/availability?date=${newDate}`);
                            setAvailableSlots(res.data.availableSlots);
                          } catch (err) {
                            setAvailableSlots([]);
                          }
                        }
                      }} 
                    />
                  </div>
                )}

                {/* Step 3: Time Slot */}
                {formData.date && (
                  <div className="space-y-2 animate-fade-in">
                    <label className="font-label-md text-label-md font-bold text-on-surface-variant flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs">3</span>
                      Available Time Slots
                    </label>
                    {availableSlots.length > 0 ? (
                      <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 pt-2">
                        {availableSlots.map(slot => (
                          <button
                            key={slot}
                            type="button"
                            className={`py-3 rounded-xl border font-label-sm font-bold transition-all ${
                              formData.time === slot 
                                ? 'bg-secondary border-secondary text-white shadow-[0_0_15px_rgba(0,81,213,0.4)] scale-105' 
                                : 'bg-surface-container-lowest border-outline-variant text-on-surface-variant hover:border-secondary/50 hover:text-secondary'
                            }`}
                            onClick={() => setFormData({...formData, time: slot})}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div className="bg-error/10 border border-error/20 rounded-xl p-4 text-center">
                        <p className="text-sm font-bold text-error">No slots available on this date.</p>
                        <p className="text-xs text-error/80 mt-1">Please select another date or specialist.</p>
                      </div>
                    )}
                  </div>
                )}

                {/* Step 4: Reason */}
                {formData.time && (
                  <div className="space-y-2">
                    <label className="font-label-md text-label-md font-bold text-on-surface-variant flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs">4</span>
                      Reason for Visit
                    </label>
                    <textarea 
                      className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl p-4 text-on-surface focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none resize-none" 
                      required 
                      rows={3} 
                      placeholder="Briefly describe your symptoms or reason for consultation..."
                      value={formData.reason} 
                      onChange={e => setFormData({...formData, reason: e.target.value})}
                    ></textarea>
                  </div>
                )}
              </form>
            </div>
            
            <div className="p-6 border-t border-outline-variant/30 bg-surface-container-lowest/50 flex gap-4 shrink-0">
              <button 
                type="button" 
                className="flex-1 py-4 rounded-xl font-label-md font-bold text-on-surface-variant hover:bg-surface-container border border-transparent hover:border-outline-variant transition-all" 
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button 
                type="submit" 
                onClick={handleBook}
                className="flex-1 py-4 rounded-xl font-label-md font-bold bg-primary text-white shadow-lg hover:shadow-[0_0_20px_rgba(0,20,50,0.3)] hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-none" 
                disabled={!formData.doctor || !formData.date || !formData.time || !formData.reason}
              >
                Confirm Appointment
              </button>
            </div>
            
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}
