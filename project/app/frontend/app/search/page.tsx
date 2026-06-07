'use client';

import DashboardLayout from '@/components/DashboardLayout';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import api from '@/lib/api';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const { user } = useAuth();
  
  const [results, setResults] = useState<{patients: any[], doctors: any[]}>({ patients: [], doctors: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      if (!query || !user) {
        setLoading(false);
        return;
      }
      
      setLoading(true);
      try {
        const [docsRes, patsRes] = await Promise.all([
          api.get('/doctors').catch(() => ({ data: [] })),
          api.get('/patients').catch(() => ({ data: [] }))
        ]);
        
        const lowerQuery = query.toLowerCase();
        
        const matchedDocs = docsRes.data.filter((d: any) => 
          d.name?.toLowerCase().includes(lowerQuery) || 
          d.specialization?.toLowerCase().includes(lowerQuery)
        );
        
        const matchedPats = patsRes.data.filter((p: any) => 
          p.name?.toLowerCase().includes(lowerQuery) ||
          p.email?.toLowerCase().includes(lowerQuery)
        );

        setResults({
          doctors: user.role === 'Patient' ? matchedDocs : (user.role === 'Admin' ? matchedDocs : []),
          patients: user.role === 'Doctor' ? matchedPats : (user.role === 'Admin' ? matchedPats : [])
        });
      } catch (error) {
        console.error("Search failed", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchResults();
  }, [query, user]);

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="font-display text-display text-primary">Search Results</h1>
        <p className="font-body-md text-on-surface-variant">Showing results for: <span className="font-bold text-secondary">"{query}"</span></p>
      </div>

      {loading ? (
        <div className="flex justify-center p-12">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="space-y-8">
          {/* Doctors Section */}
          {results.doctors.length > 0 && (
            <section className="bg-white/70 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-sm">
              <h3 className="font-headline-md text-primary mb-6">Doctors ({results.doctors.length})</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.doctors.map(doc => (
                  <div key={doc._id} className="p-4 rounded-2xl bg-white border border-outline-variant flex items-center gap-4 hover:shadow-md transition-all">
                    <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container font-bold text-lg">
                      {doc.name?.charAt(0) || 'D'}
                    </div>
                    <div>
                      <h4 className="font-label-md font-bold text-primary">Dr. {doc.name}</h4>
                      <p className="font-label-sm text-on-surface-variant">{doc.specialization}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Patients Section */}
          {results.patients.length > 0 && (
            <section className="bg-white/70 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-sm">
              <h3 className="font-headline-md text-primary mb-6">Patients ({results.patients.length})</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.patients.map(pat => (
                  <div key={pat._id} className="p-4 rounded-2xl bg-white border border-outline-variant flex items-center gap-4 hover:shadow-md transition-all">
                    <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-bold text-lg">
                      {pat.name?.charAt(0) || 'P'}
                    </div>
                    <div>
                      <h4 className="font-label-md font-bold text-primary">{pat.name}</h4>
                      <p className="font-label-sm text-on-surface-variant">{pat.email}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {!loading && results.doctors.length === 0 && results.patients.length === 0 && (
            <div className="text-center p-12 bg-white/70 backdrop-blur-xl border border-white/20 rounded-3xl">
              <p className="font-body-lg text-on-surface-variant mb-4">No results found for your search.</p>
              <Link href="/dashboard/admin" className="text-secondary hover:underline font-label-md">Return to Dashboard</Link>
            </div>
          )}
        </div>
      )}
    </DashboardLayout>
  );
}
