"use client";

import DashboardLayout from '@/components/DashboardLayout';
import { useEffect, useState } from 'react';
import api from '@/lib/api';
import toast from 'react-hot-toast';

export default function DoctorsPage() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await api.get('/doctors');
        setDoctors(res.data);
      } catch (error) {
        toast.error("Failed to load doctors");
      } finally {
        setLoading(false);
      }
    };
    fetchDoctors();
  }, []);

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="heading-lg m-0">Doctors Directory</h1>
        <p className="text-muted">Browse our expert healthcare professionals.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          <p className="text-muted">Loading...</p>
        ) : doctors.length === 0 ? (
          <p className="text-muted">No doctors found.</p>
        ) : (
          doctors.map((doc: any) => (
            <div key={doc._id} className="card flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                    Dr
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary m-0">{doc.user?.name}</h3>
                    <p className="text-sm text-accent font-medium">{doc.specialty}</p>
                  </div>
                </div>
                <div className="mb-2 text-sm flex gap-2">
                  <span className="text-muted font-medium w-24">Email:</span> 
                  <span className="truncate">{doc.user?.email}</span>
                </div>
                <div className="mb-2 text-sm flex gap-2">
                  <span className="text-muted font-medium w-24">Contact:</span> 
                  <span>{doc.contactInfo}</span>
                </div>
                <div className="mb-2 text-sm flex gap-2">
                  <span className="text-muted font-medium w-24">Availability:</span> 
                  <span>{doc.availability}</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </DashboardLayout>
  );
}
