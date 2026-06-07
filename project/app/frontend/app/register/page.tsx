'use client';

import Link from 'next/link';

export default function RegisterChoicePage() {
  return (
    <div className="bg-background text-on-surface font-body-md overflow-hidden min-h-screen flex items-center justify-center selection:bg-secondary-fixed selection:text-on-secondary-fixed">
      {/* Background Layer */}
      <div className="fixed inset-0 z-0">
        <img alt="Abstract medical background" className="w-full h-full object-cover opacity-30" src="https://lh3.googleusercontent.com/aida/AP1WRLssgDPBFndWLS_L7IzKdBus2Q2WdoIPawSXm2MH7MqE2orgMlfy2LAl6_38xHcKbgG0sjgBIWyGc7sRm5aaF23E4tnpkaCA7fNWMxbQkGnIcX13vdCjrJLqJpq6_ZMI2BO6ip4UGivpH89etlvpshgbznLqoh7MjPrYrNkNlDvKRAWkp68KsCnky08HpI3_FX7BWriK--DZ57VnqwBwGSk1YxHCMTLeO5IbKUd0T7WDrd8nNcs-U_1FaTLC"/>
        <div className="absolute inset-0 bg-background/80 backdrop-blur-[20px]"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none"></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl px-margin-mobile md:px-margin-desktop py-12 animate-fade-in flex flex-col items-center">
        
        {/* Brand */}
        <Link href="/" className="inline-block mb-12 group">
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-[0_0_20px_rgba(0,81,213,0.3)] group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
            </div>
            <span className="font-headline-md text-headline-md font-bold text-primary tracking-tight">lifeCore</span>
          </div>
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl text-primary mb-4">Choose Your Path</h1>
          <p className="font-body-lg text-on-surface-variant max-w-lg mx-auto">Are you joining us to experience elite concierge healthcare, or to provide it?</p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 w-full max-w-3xl">
          {/* Patient Card */}
          <Link href="/register/patient" className="bg-surface-container-lowest/40 backdrop-blur-xl border border-white/10 p-10 rounded-[2.5rem] shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:bg-surface-container-lowest/60 hover:border-secondary/30 hover:-translate-y-2 transition-all duration-300 group flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-secondary group-hover:text-white text-secondary transition-all shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
            </div>
            <h2 className="font-headline-md text-2xl mb-3 text-on-surface group-hover:text-primary transition-colors">Patient Member</h2>
            <p className="font-body-md text-on-surface-variant leading-relaxed">Book appointments, manage your treatment plans, and access your comprehensive medical records securely.</p>
          </Link>

          {/* Doctor Card */}
          <Link href="/register/doctor" className="bg-surface-container-lowest/40 backdrop-blur-xl border border-white/10 p-10 rounded-[2.5rem] shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:bg-surface-container-lowest/60 hover:border-[#4fdbc8]/30 hover:-translate-y-2 transition-all duration-300 group flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-[#4fdbc8]/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#4fdbc8] group-hover:text-[#003831] text-[#4fdbc8] transition-all shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8 11h-2v2H7v-2H5v-2h2v-2h2v2h2v2zm6 0h-2v2h-2v-2h-2v-2h2v-2h2v2h2v2z"/></svg>
            </div>
            <h2 className="font-headline-md text-2xl mb-3 text-on-surface group-hover:text-[#4fdbc8] transition-colors">Clinical Specialist</h2>
            <p className="font-body-md text-on-surface-variant leading-relaxed">Manage patient schedules, write prescriptions, and record detailed treatment tracking notes.</p>
          </Link>
        </div>

        {/* Footer Link */}
        <div className="mt-12 text-center border-t border-white/10 pt-8 w-full max-w-lg">
          <p className="font-body-md text-on-surface-variant">
            Already have an account? <Link href="/login" className="font-bold text-secondary hover:text-primary transition-colors">Sign in here</Link>
          </p>
        </div>

      </div>
    </div>
  );
}
