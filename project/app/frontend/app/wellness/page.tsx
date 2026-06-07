'use client';

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function WellnessPage() {
  return (
    <div className="bg-surface text-on-surface antialiased overflow-x-hidden selection:bg-secondary-fixed selection:text-on-secondary-fixed">
      <NavBar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-24">
        {/* Background Image with Parallax-like feel */}
        <div className="absolute inset-0 z-0">
          <img alt="Wellness Background" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGdCQYANucOA2Y2eQDjx-q3NAZG256TulPdYnG3Xz1fOh8b3KBj3GrEv1eSm-Xip56fAb0coD3cQ9YtHw0OsVmXm7V37ys3VVTy3YLzQIyeQyzdH_2U_o_w9kNYFiDNB9wqz2ukBbZH_NFDnxmwbIhOt95-2VOkSlwrbdrjMlbmkMm8dT37D3Telz3_6u2wvIRENu6G3ADrAjnxp9TLaEmdSnwJUNcSTLQrxPT6OmyzC8woZ_72vYdsWBBRayA-Y_q6zB5yXsRu_xm" style={{ filter: 'brightness(1.05)' }} />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/80 to-surface"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center animate-fade-in">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.04)]">
            <span className="font-label-md text-label-md text-secondary uppercase tracking-widest">LifeCore Concierge</span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl text-primary mb-6 max-w-4xl mx-auto leading-tight">
            Proactive Wellness
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10 opacity-90">
            Moving beyond treating illness to optimizing your total health through precision diagnostics and elite performance protocols.
          </p>
          <div className="flex justify-center gap-4">
            <a className="bg-primary text-on-primary font-label-md text-label-md px-8 py-4 rounded-lg hover:bg-primary/90 transition-all transform hover:-translate-y-0.5 shadow-lg flex items-center gap-2" href="#pillars">
              Explore Pillars
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
            </a>
          </div>
        </div>
      </section>

      {/* Wellness Pillars Section */}
      <section className="py-32 relative bg-surface" id="pillars">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-gutter">
            <div className="max-w-xl animate-fade-in">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Precision Architecture</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">Our holistic approach integrates three core disciplines to ensure longevity, peak mental acuity, and physiological peak performance.</p>
            </div>
            <div className="hidden md:block w-24 h-px bg-outline-variant mb-4 opacity-50"></div>
          </div>
          
          {/* Bento-style/Grid for Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Card 1 */}
            <div className="bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.04)] p-10 rounded-3xl transition-all duration-500 hover:-translate-y-2 group animate-fade-in" style={{animationDelay: '100ms'}}>
              <div className="w-16 h-16 mb-8 flex items-center justify-center bg-white rounded-2xl shadow-sm group-hover:shadow-md transition-shadow">
                <img alt="Biomarker Icon" className="w-10 h-10 object-contain" src="data:image/png;base64,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" />
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-4">Biomarker Tracking</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Real-time monitoring of key health indicators for early intervention and continuous performance refinement.
              </p>
              <div className="mt-8 pt-8 border-t border-black/5 flex items-center text-secondary font-label-md text-label-md opacity-0 group-hover:opacity-100 transition-opacity">
                View Detailed Metrics <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.04)] p-10 rounded-3xl transition-all duration-500 hover:-translate-y-2 group animate-fade-in" style={{animationDelay: '200ms'}}>
              <div className="w-16 h-16 mb-8 flex items-center justify-center bg-white rounded-2xl shadow-sm group-hover:shadow-md transition-shadow">
                <img alt="Nutritional Icon" className="w-10 h-10 object-contain" src="data:image/png;base64,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" />
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-4">Nutritional Architecture</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Data-driven dietary protocols designed for your unique biology, focused on metabolic efficiency and micronutrient density.
              </p>
              <div className="mt-8 pt-8 border-t border-black/5 flex items-center text-[#f59e0b] font-label-md text-label-md opacity-0 group-hover:opacity-100 transition-opacity">
                Explore Protocols <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.04)] p-10 rounded-3xl transition-all duration-500 hover:-translate-y-2 group animate-fade-in" style={{animationDelay: '300ms'}}>
              <div className="w-16 h-16 mb-8 flex items-center justify-center bg-white rounded-2xl shadow-sm group-hover:shadow-md transition-shadow">
                <img alt="Resilience Icon" className="w-10 h-10 object-contain" src="data:image/png;base64,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" />
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-4">Mental Resilience</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Cognitive optimization and stress management for peak performance in high-pressure executive environments.
              </p>
              <div className="mt-8 pt-8 border-t border-black/5 flex items-center text-[#6366f1] font-label-md text-label-md opacity-0 group-hover:opacity-100 transition-opacity">
                Focus Training <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* High-End Details / Visual Break */}
      <section className="py-24 bg-surface-container-lowest overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col md:flex-row items-center gap-16 animate-fade-in">
            <div className="w-full md:w-1/2 relative">
              <div className="aspect-square bg-white/70 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl relative border border-white/40">
                <img className="w-full h-full object-cover" alt="Macro medical setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkXCJZt1jEzvxP6pt30gi1xadqoOuxilecDzBovIletGGYM5e7gYhCXrn-WoEYlRL9aLrQBbIeYlesOxOCSrApF6S7cfNYCxdcRm0C-qOMwuWu76JCTlcd-_bervjuJj34lOcgdh9_Fj0zDO93ojTDmkDNdJgEDUMlaMxGTt7JXQTTmPz9-6v0kiA_rw48zqsWbArIS4zdlUGJtcOoO3UQ4oDdOm6an7yqKCH_g0_BPdTTb2IuFjorLgsp7G7-X-uou91LsARr1iSA"/>
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-white/90 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] rounded-3xl p-6 hidden lg:block hover:scale-105 transition-transform duration-500">
                <span className="font-display text-4xl text-secondary block mb-2">99.8%</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-tighter">Diagnostic Precision Rate</span>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-6">Concierge Experience</h2>
              <div className="space-y-8">
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary-container/10 flex items-center justify-center group-hover:bg-secondary transition-colors duration-300">
                    <svg className="w-6 h-6 text-secondary group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-headline-md text-headline-md text-primary text-xl mb-2">Elite Medical Network</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">Immediate access to the world's leading specialists and proprietary wellness technology.</p>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary-container/10 flex items-center justify-center group-hover:bg-secondary transition-colors duration-300">
                    <svg className="w-6 h-6 text-secondary group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-headline-md text-headline-md text-primary text-xl mb-2">Private Biometric Vault</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">Your health data is secured with military-grade encryption, accessible only by your medical team.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-surface relative z-10">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="relative rounded-[2.5rem] overflow-hidden bg-primary p-12 md:p-20 text-center shadow-2xl">
            {/* Background ambient glow */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-secondary rounded-full mix-blend-screen blur-[100px] opacity-20 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-[#4fdbc8] rounded-full mix-blend-screen blur-[100px] opacity-10 pointer-events-none"></div>
            <div className="relative z-10 animate-fade-in">
              <h2 className="font-display text-4xl md:text-5xl text-white mb-6">Ready to redefine your baseline?</h2>
              <p className="font-body-lg text-body-lg text-white/80 max-w-2xl mx-auto mb-10">
                Join an exclusive cohort of high-performers who prioritize health as their most valuable asset. Limited concierge memberships available.
              </p>
              <Link href="/register/patient" className="inline-block bg-white text-primary font-headline-md text-headline-md px-10 py-5 rounded-xl hover:scale-105 transition-transform duration-300 shadow-xl">
                Start Your Wellness Journey
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
