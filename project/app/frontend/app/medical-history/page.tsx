"use client";

import DashboardLayout from '@/components/DashboardLayout';
import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import api from '@/lib/api';
import toast from 'react-hot-toast';

export default function MedicalHistoryPage() {
  const { user } = useAuth();
  const [profile, setProfile] = useState<any>(null);
  const [history, setHistory] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const [profileRes, historyRes] = await Promise.all([
          api.get('/patients/me/profile'),
          api.get(`/treatments/history/${user._id}`)
        ]);
        setProfile(profileRes.data);
        setHistory(historyRes.data);
      } catch (error) {
        toast.error("Failed to load medical profile");
      } finally {
        setLoading(false);
      }
    };
    if (user && user.role === 'Patient') {
      fetchProfile();
    } else {
      setLoading(false);
    }
  }, [user]);

  if (user?.role !== 'Patient') {
    return (
      <DashboardLayout>
        <div className="flex justify-center items-center h-[60vh] animate-fade-in">
          <div className="bg-surface/80 backdrop-blur-xl border border-white/20 p-12 rounded-[2rem] shadow-xl text-center max-w-lg">
            <div className="w-20 h-20 bg-error/10 text-error rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
            </div>
            <h2 className="font-headline-md text-headline-md text-primary mb-2">Access Restricted</h2>
            <p className="font-body-md text-on-surface-variant">The comprehensive medical history view is securely restricted to individual Patient Members.</p>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  // Combine checkups and progress into a single sorted timeline array
  const timelineItems = [];
  if (history?.checkups) {
    history.checkups.forEach((c: any) => timelineItems.push({ ...c, type: 'Checkup', dateObj: new Date(c.createdAt) }));
  }
  if (history?.progress) {
    history.progress.forEach((p: any) => timelineItems.push({ ...p, type: 'Progress', dateObj: new Date(p.createdAt) }));
  }
  timelineItems.sort((a, b) => b.dateObj.getTime() - a.dateObj.getTime());

  return (
    <DashboardLayout>
      <div className="mb-8 animate-fade-in">
        <h1 className="font-display text-display text-primary mb-2">Medical Profile</h1>
        <p className="font-body-md text-body-md text-on-surface-variant">Your complete clinical history and secure health information.</p>
      </div>

      {loading ? (
        <div className="flex justify-center p-12">
          <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : profile ? (
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
          
          {/* Left Column: Vitals & History Summary */}
          <div className="xl:col-span-4 flex flex-col gap-8 animate-fade-in" style={{animationDelay: '100ms'}}>
            
            {/* Vitals Card */}
            <div className="bg-gradient-to-br from-primary to-secondary text-white rounded-[2rem] p-8 shadow-xl relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
              <h3 className="font-headline-md text-xl font-bold mb-6 flex items-center gap-3">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                Core Vitals
              </h3>
              <div className="grid grid-cols-2 gap-6 relative z-10">
                <div>
                  <span className="text-[10px] text-white/70 font-bold uppercase tracking-wider block mb-1">Blood Type</span>
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center font-bold text-xl border border-white/30">
                    {profile.bloodType || 'N/A'}
                  </div>
                </div>
                <div>
                  <span className="text-[10px] text-white/70 font-bold uppercase tracking-wider block mb-1">Age</span>
                  <p className="font-display text-4xl leading-none">{profile.age}</p>
                </div>
              </div>
            </div>

            {/* Conditions & Allergies */}
            <div className="bg-surface/80 backdrop-blur-xl border border-white/20 rounded-[2rem] p-8 shadow-xl">
              <h3 className="font-headline-md text-primary mb-6">Conditions & Allergies</h3>
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider block mb-2">Chronic Illnesses</span>
                  {profile.chronicIllnesses && profile.chronicIllnesses.length > 0 && profile.chronicIllnesses[0] !== 'None' ? (
                    <div className="bg-warning/10 border border-warning/20 p-4 rounded-xl">
                      <p className="text-warning font-medium text-sm">{profile.chronicIllnesses.join(', ')}</p>
                    </div>
                  ) : (
                    <p className="text-on-surface-variant text-sm italic bg-surface-container-lowest p-3 rounded-xl border border-outline-variant/30">No chronic illnesses reported.</p>
                  )}
                </div>
                
                <div>
                  <span className="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider block mb-2">Allergies</span>
                  {profile.allergies && profile.allergies.length > 0 && profile.allergies[0] !== 'None' ? (
                    <div className="flex flex-wrap gap-2">
                      {profile.allergies.map((allergy: string, i: number) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-error/10 text-error border border-error/20 text-xs font-bold uppercase tracking-wider shadow-sm">
                          {allergy.trim()}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="text-on-surface-variant text-sm italic bg-surface-container-lowest p-3 rounded-xl border border-outline-variant/30">No known allergies.</p>
                  )}
                </div>
              </div>
            </div>

            {/* Historical Summaries */}
            <div className="bg-surface/80 backdrop-blur-xl border border-white/20 rounded-[2rem] p-8 shadow-xl">
              <h3 className="font-headline-md text-primary mb-6">Historical Summaries</h3>
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider block mb-2">Past Surgeries</span>
                  <p className="font-body-md text-on-surface bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/30">{profile.pastSurgeries?.join(', ') || 'None'}</p>
                </div>
                <div>
                  <span className="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider block mb-2">Family History</span>
                  <p className="font-body-md text-on-surface bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/30">{profile.familyHistory || 'Not specified'}</p>
                </div>
                {(profile.medicalHistory && profile.medicalHistory !== 'No prior history provided') && (
                  <div>
                    <span className="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider block mb-2">General Clinical Notes</span>
                    <p className="font-body-md text-on-surface bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/30 italic">{profile.medicalHistory}</p>
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* Right Column: Treatment Timeline */}
          <div className="xl:col-span-8 bg-surface/80 backdrop-blur-xl border border-white/20 rounded-[2rem] p-8 shadow-xl animate-fade-in flex flex-col" style={{animationDelay: '200ms'}}>
            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-white/10">
              <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              <h3 className="font-headline-lg text-primary m-0">Treatment & Clinical Encounters</h3>
            </div>
            
            {timelineItems.length > 0 ? (
              <div className="relative pl-6 space-y-8 before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary before:via-secondary before:to-transparent flex-1 overflow-y-auto custom-scrollbar pr-4">
                {timelineItems.map((item: any, idx: number) => (
                  <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    
                    {/* Timeline Node */}
                    <div className="flex items-center justify-center w-8 h-8 rounded-full border-4 border-surface bg-primary shadow-lg text-white absolute left-[-16px] md:left-1/2 md:-translate-x-1/2 group-hover:scale-125 group-hover:bg-secondary transition-all z-10">
                      {item.type === 'Checkup' ? (
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>
                      ) : (
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" /><path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" /></svg>
                      )}
                    </div>
                    
                    {/* Content Card */}
                    <div className="w-[calc(100%-2rem)] md:w-[calc(50%-2rem)] bg-surface-container-lowest/80 backdrop-blur-md p-6 rounded-[1.5rem] border border-white/10 shadow-lg group-hover:-translate-y-1 transition-all group-hover:shadow-[0_8px_30px_rgba(0,81,213,0.15)] group-hover:border-primary/30">
                      <div className="flex justify-between items-center mb-4 pb-3 border-b border-outline-variant/30">
                        <span className="font-label-sm text-[10px] uppercase font-bold tracking-wider text-secondary">
                          {item.dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </span>
                        <span className="font-label-md font-bold text-on-surface">Dr. {item.doctor?.name}</span>
                      </div>
                      
                      {item.type === 'Checkup' ? (
                        <div>
                          <div className="inline-block px-2.5 py-0.5 rounded-md bg-[#4fdbc8]/10 text-[#005048] font-label-sm text-[10px] uppercase tracking-wider mb-4 border border-[#4fdbc8]/20">Physical Checkup</div>
                          
                          <div className="grid grid-cols-2 gap-3 mb-4">
                            <div className="bg-surface-container p-2.5 rounded-lg border border-outline-variant/20">
                              <span className="text-[9px] text-on-surface-variant uppercase font-bold tracking-wider block mb-1">Blood Pressure</span>
                              <span className="font-label-md font-bold text-on-surface">{item.bloodPressure || 'N/A'}</span>
                            </div>
                            <div className="bg-surface-container p-2.5 rounded-lg border border-outline-variant/20">
                              <span className="text-[9px] text-on-surface-variant uppercase font-bold tracking-wider block mb-1">Heart Rate</span>
                              <span className="font-label-md font-bold text-on-surface">{item.heartRate || 'N/A'} <span className="text-[10px] font-normal text-on-surface-variant">bpm</span></span>
                            </div>
                            <div className="bg-surface-container p-2.5 rounded-lg border border-outline-variant/20">
                              <span className="text-[9px] text-on-surface-variant uppercase font-bold tracking-wider block mb-1">Temperature</span>
                              <span className="font-label-md font-bold text-on-surface">{item.temperature || 'N/A'}</span>
                            </div>
                            <div className="bg-surface-container p-2.5 rounded-lg border border-outline-variant/20">
                              <span className="text-[9px] text-on-surface-variant uppercase font-bold tracking-wider block mb-1">Weight</span>
                              <span className="font-label-md font-bold text-on-surface">{item.weight || 'N/A'} <span className="text-[10px] font-normal text-on-surface-variant">kg</span></span>
                            </div>
                          </div>
                          
                          <p className="text-sm text-on-surface-variant italic border-l-2 border-primary/40 pl-3 py-1 bg-surface-container/30 rounded-r-lg">"{item.generalNotes}"</p>
                        </div>
                      ) : (
                        <div>
                          <div className="flex gap-2 mb-4">
                            <span className="inline-block px-2.5 py-0.5 rounded-md bg-secondary/10 text-secondary font-label-sm text-[10px] uppercase tracking-wider border border-secondary/20">{item.visitType}</span>
                            <span className="inline-block px-2.5 py-0.5 rounded-md bg-primary/10 text-primary font-label-sm text-[10px] uppercase tracking-wider border border-primary/20">{item.status}</span>
                          </div>
                          
                          <p className="text-sm text-on-surface-variant mb-4 leading-relaxed">{item.progressNotes}</p>
                          
                          {item.nextFollowUpDate && (
                            <div className="mt-4 pt-3 border-t border-outline-variant/30 flex items-center gap-2">
                              <svg className="w-4 h-4 text-warning" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                              <span className="text-xs text-on-surface font-bold uppercase tracking-wider">Follow-up Recommended: <span className="text-warning">{new Date(item.nextFollowUpDate).toLocaleDateString()}</span></span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center text-center p-12 opacity-60">
                <div className="w-16 h-16 bg-surface-container rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-on-surface-variant" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <p className="font-body-lg text-on-surface">No Clinical History</p>
                <p className="font-body-sm text-on-surface-variant mt-1">There are no documented checkups or treatment records to display.</p>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="bg-surface/80 backdrop-blur-xl border border-white/20 rounded-[2rem] p-12 text-center shadow-xl">
          <p className="text-on-surface-variant">No profile data found. Please complete your registration profiling.</p>
        </div>
      )}
    </DashboardLayout>
  );
}
