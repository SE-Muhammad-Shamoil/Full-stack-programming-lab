'use client';

import Link from 'next/link';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function LandingPage() {
  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden selection:bg-secondary-fixed selection:text-on-secondary-fixed">
      <NavBar />

      {/* Hero Section */}
      <header className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-24 px-margin-mobile md:px-margin-desktop bg-surface">
        <div className="absolute inset-0 z-0">
          <img alt="Hero background" className="w-full h-full object-cover opacity-60 scale-105" src="https://lh3.googleusercontent.com/aida/AP1WRLssgDPBFndWLS_L7IzKdBus2Q2WdoIPawSXm2MH7MqE2orgMlfy2LAl6_38xHcKbgG0sjgBIWyGc7sRm5aaF23E4tnpkaCA7fNWMxbQkGnIcX13vdCjrJLqJpq6_ZMI2BO6ip4UGivpH89etlvpshgbznLqoh7MjPrYrNkNlDvKRAWkp68KsCnky08HpI3_FX7BWriK--DZ57VnqwBwGSk1YxHCMTLeO5IbKUd0T7WDrd8nNcs-U_1FaTLC"/>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background"></div>
        </div>
        
        <div className="relative z-10 max-w-container-max mx-auto grid md:grid-cols-2 gap-12 items-center w-full animate-fade-in">
          <div className="flex flex-col gap-6 text-center md:text-left">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container/10 text-secondary font-label-sm text-label-sm w-fit mx-auto md:mx-0 border border-secondary/20 shadow-sm">CONCIERGE HEALTHCARE</span>
            <h1 className="font-display text-display text-4xl md:text-5xl leading-tight">Elevate Your Healthcare Experience</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">Bespoke medical management for those who demand the finest clinical expertise combined with uncompromising personal service.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center md:justify-start">
              <Link href="/register" className="px-8 py-4 bg-secondary text-white rounded-xl font-headline-md text-headline-md hover:shadow-[0_0_30px_rgba(0,81,213,0.3)] hover:-translate-y-1 transition-all duration-300 text-center flex items-center justify-center">Get Started</Link>
              <Link href="/login" className="px-8 py-4 bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_4px_20px_0_rgba(0,20,50,0.04)] rounded-xl font-headline-md text-headline-md hover:bg-surface-container/50 transition-all duration-300 text-center">Login</Link>
            </div>
          </div>
          
          <div className="hidden md:flex justify-center items-center">
            <div className="relative w-64 h-64 md:w-72 md:h-72 flex items-center justify-center">
              {/* Glass Floating Element */}
              <div className="w-full h-full bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_4px_20px_0_rgba(0,20,50,0.04)] rounded-[2.5rem] rotate-45 flex items-center justify-center animate-[float_6s_ease-in-out_infinite] shadow-[inset_0_0_10px_rgba(255,255,255,0.8),0_0_20px_rgba(0,81,213,0.2)]">
                <div className="-rotate-45 text-secondary">
                  <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>
                </div>
              </div>
              {/* Ambient Glow */}
              <div className="absolute inset-0 bg-secondary/10 blur-[80px] -z-10 rounded-full"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Bento Grid */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface relative z-10">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Precision Services</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">Our ecosystem is built on the pillars of immediate access, world-class expertise, and frictionless orchestration.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-gutter">
            {/* Feature 1 */}
            <div className="bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_4px_20px_0_rgba(0,20,50,0.04)] p-8 rounded-3xl flex flex-col gap-6 group hover:border-secondary/40 transition-all duration-500 hover:-translate-y-2 animate-fade-in" style={{animationDelay: '100ms'}}>
              <div className="w-16 h-16 rounded-2xl bg-secondary-container/10 flex items-center justify-center shadow-[inset_0_0_10px_rgba(255,255,255,0.8),0_0_20px_rgba(0,81,213,0.2)] transition-transform group-hover:scale-110">
                <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md mb-2">24/7 Access</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Direct, immediate connection to your dedicated care team and elite specialists anytime, anywhere.</p>
              </div>
              <div className="mt-auto pt-4">
                <Link href="/services" className="text-secondary font-label-md flex items-center gap-2 group-hover:gap-3 transition-all">
                  Explore Access <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Link>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_4px_20px_0_rgba(0,20,50,0.04)] p-8 rounded-3xl flex flex-col gap-6 group hover:border-[#4fdbc8]/40 transition-all duration-500 hover:-translate-y-2 animate-fade-in" style={{animationDelay: '200ms'}}>
              <div className="w-16 h-16 rounded-2xl bg-[#4fdbc8]/20 flex items-center justify-center shadow-[inset_0_0_10px_rgba(255,255,255,0.8),0_0_20px_rgba(79,219,200,0.2)] transition-transform group-hover:scale-110">
                <svg className="w-8 h-8 text-[#005048]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md mb-2">Top Specialists</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Exclusive network of the world's leading medical minds, selected for their clinical brilliance and outcomes.</p>
              </div>
              <div className="mt-auto pt-4">
                <Link href="/about" className="text-[#005048] font-label-md flex items-center gap-2 group-hover:gap-3 transition-all">
                  Our Network <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Link>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_4px_20px_0_rgba(0,20,50,0.04)] p-8 rounded-3xl flex flex-col gap-6 group hover:border-[#dae2fd]/60 transition-all duration-500 hover:-translate-y-2 animate-fade-in" style={{animationDelay: '300ms'}}>
              <div className="w-16 h-16 rounded-2xl bg-[#dae2fd] flex items-center justify-center shadow-[inset_0_0_10px_rgba(255,255,255,0.8),0_0_20px_rgba(218,226,253,0.4)] transition-transform group-hover:scale-110">
                <svg className="w-8 h-8 text-[#131b2e]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"/></svg>
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md mb-2">Seamless Booking</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Instant, concierge-level scheduling that respects your time and eliminates administrative friction.</p>
              </div>
              <div className="mt-auto pt-4">
                <Link href="/register/patient" className="text-[#131b2e] font-label-md flex items-center gap-2 group-hover:gap-3 transition-all">
                  Book Now <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop bg-white overflow-hidden relative z-10 border-t border-black/5">
        <div className="max-w-container-max mx-auto relative">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-secondary/5 blur-[120px] rounded-full pointer-events-none"></div>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="animate-fade-in">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Trusted Excellence</h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">Join a community of discerning individuals who have transformed their relationship with health through lifeCore.</p>
            </div>
            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface transition-all">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center hover:shadow-lg transition-all">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-gutter">
            {/* Testimonial 1 */}
            <div className="bg-white p-10 rounded-[2.5rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.04)] border border-surface-container-highest/50 relative animate-fade-in" style={{animationDelay: '100ms'}}>
              <svg className="w-16 h-16 text-secondary/20 absolute top-8 right-8" fill="currentColor" viewBox="0 0 24 24"><path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/></svg>
              <div className="flex gap-1 mb-6 text-secondary">
                {[1,2,3,4,5].map(i => <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}
              </div>
              <p className="font-body-lg text-body-lg text-on-surface mb-8 italic">"lifeCore represents the future of medicine. The level of personalization and the caliber of specialists they provided for my complex surgery was simply unparalleled."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container">
                  <img alt="User avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNxbHeWD-9-tiCy9KZ7PAm7tecywpmRIuXYFqDGQDevvolgN3ODmZiLJ-vdFiIEbZZfMt82JBVilRxFsoYu1Js2j6_UgGF0l_K7xDC5YTNK10ia6mOY1Gbz0a3JOnslF_6grwklaQcsMyV2aqLvlyrECGBLVYqs0vUFXkednmBnk32UW98I4dX3hMz4b0RB41NF8wFgFqtndGyexJBPjAxJu9V1l9zfRHOmjhNfq7gOJtlWl-KX5mBI-lEfVcBNTep9F7qLXq_DLFR"/>
                </div>
                <div>
                  <p className="font-label-md text-label-md text-primary font-bold">Dr. Julian Sterling</p>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">Global Tech Advisor</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-10 rounded-[2.5rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.04)] border border-surface-container-highest/50 relative animate-fade-in" style={{animationDelay: '200ms'}}>
              <svg className="w-16 h-16 text-secondary/20 absolute top-8 right-8" fill="currentColor" viewBox="0 0 24 24"><path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/></svg>
              <div className="flex gap-1 mb-6 text-secondary">
                {[1,2,3,4,5].map(i => <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}
              </div>
              <p className="font-body-lg text-body-lg text-on-surface mb-8 italic">"In high-pressure roles, health often takes a backseat. lifeCore's proactive management saved me weeks of logistics and provided peace of mind for my entire family."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container">
                  <img alt="User avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgTxOaCqCT8qBxfKKWhQkOFhTNKcpzynHdii1ad3KWknZJXj5sJL79mgqNSJcFhwHro_ZO2uQBazPtVmLN36prDfqZW_0MpKtvgVq9mVzxuxvaX8CK3vk4abcjHoQE6owAwlGs_lz_T70ZbIBtsqO--1lVvq9Ifk2dL1mSfhVcNwe1N7H3oFvAiQp-ZOIRyoDq1Eo7fTHOsavqygNkYQGyPrH0S5pCxy3Q4U5S7gKATTOXPyKUec3-SbxGe_8gNseX2dnUEuQrmXU-"/>
                </div>
                <div>
                  <p className="font-label-md text-label-md text-primary font-bold">Elena Rodriguez</p>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">Founder, Altus Capital</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop bg-primary text-white relative z-10">
        <div className="max-w-container-max mx-auto text-center animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl mb-6">Experience the lifeCore Standard</h2>
          <p className="font-body-lg text-body-lg opacity-80 mb-10 max-w-2xl mx-auto">Membership is exclusive and by invitation or application only. Inquire today to begin your elevated healthcare journey.</p>
          <Link href="/register/patient" className="inline-block px-10 py-5 bg-white text-primary rounded-2xl font-headline-md text-headline-md hover:scale-105 transition-transform duration-300 shadow-xl">
            Inquire for Membership
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
