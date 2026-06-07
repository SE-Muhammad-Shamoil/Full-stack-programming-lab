"use client";

import Sidebar from './Sidebar';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return (
      <div className="flex h-screen items-center justify-center bg-background">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  // Determine role-specific styling for the header
  const isDoctor = user.role === 'Doctor';
  const isAdmin = user.role === 'Admin';
  const isPatient = user.role === 'Patient';

  const roleConfig = {
    Doctor: { themeColor: 'text-secondary', iconBg: 'bg-secondary', hoverColor: 'hover:text-secondary' },
    Admin: { themeColor: 'text-primary', iconBg: 'bg-primary', hoverColor: 'hover:text-primary' },
    Patient: { themeColor: 'text-[#4fdbc8]', iconBg: 'bg-[#4fdbc8]', hoverColor: 'hover:text-[#4fdbc8]' }
  }[user.role] || { themeColor: 'text-primary', iconBg: 'bg-primary', hoverColor: 'hover:text-primary' };

  // Helper to format the title based on the pathname
  const getPageTitle = () => {
    const path = pathname.split('/').pop() || 'Dashboard';
    if (path === 'admin' || path === 'doctor' || path === 'patient') return `${user.role} Dashboard`;
    return path.charAt(0).toUpperCase() + path.slice(1).replace('-', ' ');
  };

  return (
    <div className="bg-background text-on-surface font-body-md overflow-hidden min-h-screen selection:bg-secondary-fixed selection:text-on-secondary-fixed">
      {/* Background Layer (Unified for all portals) */}
      <div className="fixed inset-0 z-0">
        <img alt="Abstract medical background" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida/AP1WRLssgDPBFndWLS_L7IzKdBus2Q2WdoIPawSXm2MH7MqE2orgMlfy2LAl6_38xHcKbgG0sjgBIWyGc7sRm5aaF23E4tnpkaCA7fNWMxbQkGnIcX13vdCjrJLqJpq6_ZMI2BO6ip4UGivpH89etlvpshgbznLqoh7MjPrYrNkNlDvKRAWkp68KsCnky08HpI3_FX7BWriK--DZ57VnqwBwGSk1YxHCMTLeO5IbKUd0T7WDrd8nNcs-U_1FaTLC"/>
        <div className="absolute inset-0 bg-background/40 backdrop-blur-[10px]"></div>
      </div>

      <div className="relative z-10 flex w-full h-screen">
        {/* Unified Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <main className="flex-1 ml-64 flex flex-col h-screen relative">
          
          {/* Unified Top AppBar */}
          <header className="sticky top-0 w-full z-40 bg-surface/60 backdrop-blur-xl shadow-sm flex justify-between items-center px-8 h-20 border-b border-white/10 shrink-0">
            <div className="flex items-center gap-8">
              <h2 className="font-headline-md text-xl font-extrabold text-primary hidden md:block">
                {getPageTitle()}
              </h2>
            </div>
            
            <div className="flex items-center gap-6">
              {/* Search / Global Actions */}
              <div className="hidden lg:flex relative items-center bg-white/40 border border-white/20 px-4 py-2 rounded-full backdrop-blur-sm shadow-inner transition-all focus-within:bg-white/60 focus-within:border-primary/40">
                <svg className="w-4 h-4 text-on-surface-variant mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                <input 
                  className="bg-transparent border-none focus:ring-0 text-sm w-48 lg:w-64 outline-none placeholder:text-on-surface-variant/70 font-medium" 
                  placeholder="Search..." 
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && searchQuery.trim()) {
                      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
                    }
                  }}
                />
              </div>
              
              <div className="flex items-center gap-4">
                <button className={`text-on-surface-variant ${roleConfig.hoverColor} transition-transform hover:scale-110 relative group`}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                  <span className={`absolute top-0 right-0 w-2 h-2 rounded-full border-2 border-surface ${roleConfig.iconBg}`}></span>
                </button>
                
                <div className="flex items-center gap-3 pl-4 border-l border-white/20">
                  <div className="text-right hidden sm:block">
                    <p className="font-label-md text-sm font-bold text-on-surface leading-tight">
                      {isDoctor ? `Dr. ${user.name}` : user.name}
                    </p>
                    <p className="font-label-sm text-[10px] text-on-surface-variant uppercase tracking-wider">
                      {user.role}
                    </p>
                  </div>
                  <div className={`w-10 h-10 rounded-xl border border-white/50 shadow-lg flex items-center justify-center font-bold text-white text-lg ${roleConfig.iconBg}`}>
                    {user.name?.charAt(0) || 'U'}
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Scrollable Page Content */}
          <div className="flex-1 overflow-y-auto custom-scrollbar p-8">
            <div className="max-w-[1600px] mx-auto">
              {children}
            </div>
            
            {/* Unified Footer */}
            <footer className="mt-12 text-on-surface-variant font-label-sm text-[11px] flex flex-col md:flex-row justify-between items-center py-6 border-t border-white/10 opacity-70">
              <p>© 2026 lifeCore Concierge Systems. All Rights Reserved.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <Link href="/status" className="hover:text-primary transition-colors">System Status: Optimal</Link>
                <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
                <Link href="/support" className="hover:text-primary transition-colors">Support Center</Link>
              </div>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}
