'use client';

import DashboardLayout from '@/components/DashboardLayout';
import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import api from '@/lib/api';
import toast from 'react-hot-toast';

export default function PrescriptionsPage() {
  const { user } = useAuth();
  const [prescriptions, setPrescriptions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Form
  const [showModal, setShowModal] = useState(false);
  const [patients, setPatients] = useState<any[]>([]);
  const [formData, setFormData] = useState({
    patient: '',
    medicationName: '',
    dosage: '',
    frequency: '',
    duration: '',
    notes: ''
  });

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await api.get('/prescriptions');
      setPrescriptions(res.data);
      
      if (user?.role === 'Doctor') {
        const patsRes = await api.get('/patients');
        setPatients(patsRes.data.filter((p:any) => p.assignedDoctor?._id === user._id));
      }
    } catch (error) {
      toast.error("Failed to load prescriptions");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) fetchData();
  }, [user]);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post('/prescriptions', formData);
      toast.success('Prescription added successfully!');
      setShowModal(false);
      setFormData({
        patient: '', medicationName: '', dosage: '', frequency: '', duration: '', notes: ''
      });
      fetchData();
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Failed to add prescription');
    }
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 animate-fade-in">
        <div>
          <h1 className="font-display text-display text-primary mb-2">Prescriptions</h1>
          <p className="font-body-md text-body-md text-on-surface-variant">Manage and review active medication plans.</p>
        </div>
        {user?.role === 'Doctor' && (
          <button 
            className="bg-secondary text-white px-6 py-3 rounded-xl font-label-md hover:bg-secondary/90 shadow-[0_0_15px_rgba(0,81,213,0.3)] transition-all flex items-center gap-2"
            onClick={() => setShowModal(true)}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
            Write Prescription
          </button>
        )}
      </div>

      {loading ? (
        <div className="flex justify-center p-12">
          <div className="w-10 h-10 border-4 border-secondary border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : prescriptions.length === 0 ? (
        <div className="bg-surface/80 backdrop-blur-xl border border-white/20 rounded-[2rem] p-12 text-center shadow-xl animate-fade-in">
          <div className="w-20 h-20 bg-surface-container rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
            <svg className="w-10 h-10 text-on-surface-variant" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
          </div>
          <h2 className="font-headline-md text-headline-md text-primary mb-2">No Active Prescriptions</h2>
          <p className="font-body-md text-on-surface-variant max-w-md mx-auto">
            {user?.role === 'Doctor' 
              ? "You haven't written any prescriptions for your patients yet."
              : "You currently have no active prescriptions assigned to you."}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 animate-fade-in" style={{animationDelay: '100ms'}}>
          {prescriptions.map((pres: any) => (
            <div key={pres._id} className="bg-surface/80 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-xl hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all group">
              <div className="flex justify-between items-start mb-6">
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary border border-secondary/20 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                  </div>
                  <div>
                    <h3 className="font-headline-md text-xl text-primary font-bold">{pres.medicationName}</h3>
                    <span className="inline-block px-2.5 py-0.5 rounded-md bg-surface-container-highest text-on-surface-variant font-label-sm text-[10px] uppercase tracking-wider mt-1">
                      {pres.duration}
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-surface-container-lowest rounded-xl p-3 border border-outline-variant/30">
                  <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-wider mb-1">Dosage</p>
                  <p className="font-label-md text-on-surface font-semibold">{pres.dosage}</p>
                </div>
                <div className="bg-surface-container-lowest rounded-xl p-3 border border-outline-variant/30">
                  <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-wider mb-1">Frequency</p>
                  <p className="font-label-md text-on-surface font-semibold truncate" title={pres.frequency}>{pres.frequency}</p>
                </div>
              </div>

              {pres.notes && (
                <div className="mb-6 p-3 rounded-xl bg-[#4fdbc8]/10 border border-[#4fdbc8]/20">
                  <p className="text-[10px] text-[#005048] uppercase font-bold tracking-wider mb-1">Physician Notes</p>
                  <p className="text-sm text-[#005048] italic">{pres.notes}</p>
                </div>
              )}

              <div className="pt-4 border-t border-white/10 flex justify-between items-center text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                    {user?.role === 'Doctor' ? pres.patient?.name?.charAt(0) : 'D'}
                  </div>
                  <span className="text-on-surface-variant font-medium">
                    {user?.role === 'Doctor' ? pres.patient?.name : `Dr. ${pres.doctor?.name}`}
                  </span>
                </div>
                <span className="text-xs text-outline font-medium">
                  {new Date(pres.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add Prescription Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-fade-in">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-md" onClick={() => setShowModal(false)}></div>
          <div className="relative bg-surface border border-white/20 rounded-[2.5rem] shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]">
            
            <div className="bg-gradient-to-r from-[#003831] to-[#4fdbc8] p-8 text-white shrink-0">
              <h2 className="font-display text-3xl mb-2">Issue Prescription</h2>
              <p className="opacity-80 text-[#e4f7f4]">Define medication, dosage, and schedule for your patient.</p>
            </div>

            <div className="p-8 overflow-y-auto custom-scrollbar flex-1 min-h-0">
              <form onSubmit={handleAdd} className="space-y-6">
                
                <div className="space-y-2">
                  <label className="font-label-md text-label-md font-bold text-on-surface-variant flex items-center gap-2">
                    Patient Context
                  </label>
                  <select 
                    className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl p-4 text-on-surface focus:ring-2 focus:ring-[#4fdbc8] focus:border-[#4fdbc8] transition-all outline-none" 
                    required
                    value={formData.patient}
                    onChange={e => setFormData({...formData, patient: e.target.value})}
                  >
                    <option value="">-- Select Assigned Patient --</option>
                    {patients.map((pat: any) => (
                      <option key={pat.user?._id} value={pat.user?._id}>{pat.user?.name}</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-label-md text-label-md font-bold text-on-surface-variant">Medication Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl p-4 text-on-surface focus:ring-2 focus:ring-[#4fdbc8] focus:border-[#4fdbc8] transition-all outline-none" 
                      required 
                      placeholder="e.g. Amoxicillin"
                      value={formData.medicationName} 
                      onChange={e => setFormData({...formData, medicationName: e.target.value})} 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-label-md text-label-md font-bold text-on-surface-variant">Dosage</label>
                    <input 
                      type="text" 
                      className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl p-4 text-on-surface focus:ring-2 focus:ring-[#4fdbc8] focus:border-[#4fdbc8] transition-all outline-none" 
                      required 
                      placeholder="e.g. 500mg"
                      value={formData.dosage} 
                      onChange={e => setFormData({...formData, dosage: e.target.value})} 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-label-md text-label-md font-bold text-on-surface-variant">Frequency</label>
                    <input 
                      type="text" 
                      className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl p-4 text-on-surface focus:ring-2 focus:ring-[#4fdbc8] focus:border-[#4fdbc8] transition-all outline-none" 
                      required 
                      placeholder="e.g. Twice a day"
                      value={formData.frequency} 
                      onChange={e => setFormData({...formData, frequency: e.target.value})} 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-label-md text-label-md font-bold text-on-surface-variant">Duration</label>
                    <input 
                      type="text" 
                      className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl p-4 text-on-surface focus:ring-2 focus:ring-[#4fdbc8] focus:border-[#4fdbc8] transition-all outline-none" 
                      required 
                      placeholder="e.g. 7 days"
                      value={formData.duration} 
                      onChange={e => setFormData({...formData, duration: e.target.value})} 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-label-md text-label-md font-bold text-on-surface-variant">Clinical Notes / Instructions</label>
                  <textarea 
                    className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl p-4 text-on-surface focus:ring-2 focus:ring-[#4fdbc8] focus:border-[#4fdbc8] transition-all outline-none resize-none" 
                    rows={3} 
                    placeholder="Take after meals. Avoid alcohol..."
                    value={formData.notes} 
                    onChange={e => setFormData({...formData, notes: e.target.value})}
                  ></textarea>
                </div>
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
                onClick={handleAdd}
                className="flex-1 py-4 rounded-xl font-label-md font-bold bg-[#005048] text-[#e4f7f4] shadow-lg hover:shadow-[0_0_20px_rgba(79,219,200,0.3)] hover:-translate-y-0.5 transition-all disabled:opacity-50" 
                disabled={!formData.patient || !formData.medicationName || !formData.dosage || !formData.frequency || !formData.duration}
              >
                Authorize Prescription
              </button>
            </div>
            
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}
