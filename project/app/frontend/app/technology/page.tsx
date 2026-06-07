'use client';

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function TechnologyPage() {
  return (
    <div className="bg-background text-on-background font-body-md antialiased overflow-x-hidden selection:bg-secondary-fixed selection:text-on-secondary-fixed">
      <NavBar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0 z-0">
          <img alt="Technology Background" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8Z0Ka-ai_BdcCme5vYz0f5kymRq7lwgR8qw9oKDJO-JaWzg075AwFL_egJYT2sOK5fmNokCi3lyAhwf19uODzJDFlGvH-_Surf7PiMpMB5RsNIy9Ds2lKPsjoB7AUaG268lpIvrq55iDiyWZhgK82AQTpsFJFwSfXtE10QEdoAYCQZb1A9-OdihrHVuBGc0kGd7H4w5PiUWNCWTHnn2XnTMy0QeKkkEVez94Pz9lxSLwo-65rUCOzRTX5o5r9aLh_8XSwarDzDsC3" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80"></div>
        </div>
        
        <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center animate-fade-in">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary-fixed border border-secondary/30 font-label-md text-label-md mb-6 backdrop-blur-md">
            INFRASTRUCTURE v4.0
          </span>
          <h1 className="font-display text-4xl md:text-6xl text-white mb-6 leading-tight max-w-4xl mx-auto">
            Next-Generation Medical Infrastructure
          </h1>
          <p className="font-body-lg text-body-lg text-white/80 max-w-2xl mx-auto mb-10">
            Where military-grade encryption meets advanced AI diagnostics. We’ve built the digital bedrock of modern concierge care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a className="bg-white text-primary px-8 py-4 rounded-lg font-label-md text-label-md hover:bg-surface-container-low transition-all duration-300 flex items-center justify-center gap-2" href="#features">
              Explore Systems 
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
            </a>
          </div>
        </div>
        
        {/* Scrolling indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-surface relative z-10" id="features">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="mb-20 max-w-2xl animate-fade-in">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Precision Engineering</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">Our technology stack is designed to provide instantaneous data access while maintaining an impenetrable security perimeter.</p>
          </div>
          
          <div className="grid grid-cols-12 gap-gutter">
            {/* Card 1: Telemedicine Grid */}
            <div className="col-span-12 md:col-span-7 bg-white/70 backdrop-blur-2xl border border-white/40 shadow-[0_4px_20px_rgba(0,20,80,0.04)] p-10 rounded-2xl flex flex-col justify-between min-h-[440px] relative overflow-hidden group animate-fade-in" style={{animationDelay: '100ms'}}>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center mb-8 shadow-[0_0_15px_rgba(0,81,213,0.3)]">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-4">Telemedicine Grid</h3>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                  Experience ultra-low latency connection protocols ensuring your virtual consultations are as clear and responsive as an in-person visit. 
                </p>
              </div>
              <div className="relative z-10 flex flex-wrap gap-6 mt-12 pb-4">
                <div className="flex flex-col gap-1 min-w-fit">
                  <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Latency</span>
                  <span className="font-headline-md text-headline-md text-primary">0.02ms</span>
                </div>
                <div className="w-px h-12 bg-outline-variant/30 hidden sm:block"></div>
                <div className="flex flex-col gap-1 min-w-fit">
                  <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Bandwidth</span>
                  <span className="font-headline-md text-headline-md text-primary">10 Gbps</span>
                </div>
                <div className="w-px h-12 bg-outline-variant/30 hidden sm:block"></div>
                <div className="flex flex-col gap-1 min-w-fit">
                  <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Uptime</span>
                  <span className="font-headline-md text-headline-md text-primary">99.99%</span>
                </div>
              </div>
              {/* Decorative Grid Background */}
              <div className="absolute right-0 top-0 w-1/2 h-full opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity duration-700">
                <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
              </div>
            </div>

            {/* Card 2: AI Diagnostics */}
            <div className="col-span-12 md:col-span-5 bg-white/70 backdrop-blur-2xl border border-white/40 shadow-[0_4px_20px_rgba(0,20,80,0.04)] rounded-2xl overflow-hidden flex flex-col group min-h-[440px] animate-fade-in" style={{animationDelay: '200ms'}}>
              <div className="h-1/2 overflow-hidden relative min-h-[220px]">
                <img alt="AI Diagnostics" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsLgG2nwqlnMCPYCrVsCqVt_cZVr4wTKqKBdtwDMRNzpBoYcWwC1xW05JsRAR-clBTcBggwEYu0H2wecHYiLkcTzxaNWrlnRHgm7PIv6EMT3YQDwerKIeSGeDJ8xkb948ZPmjmN9BjRrk2lcSJnISlUvObJqF31wiEPwX_AfhEdEoaypER4dHzBuesqZcN6ExGnOxaOQh4KeIxXYA4k8NZnzzmbD35KU6b1FMKjDMxg5xzA3XKfwASQU_ZZ5VkJk8M2tGBVj5BhzoT"/>
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent"></div>
              </div>
              <div className="p-8 flex flex-col flex-grow bg-white/60 relative z-10">
                <h3 className="font-headline-md text-headline-md text-primary mb-3">AI-Assisted Diagnostics</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Neural-enhanced imaging analysis for early detection and personalized health forecasting.
                </p>
                <div className="mt-auto pt-4">
                  <button className="text-secondary font-label-md text-label-md flex items-center gap-2 group/btn">
                    Learn about AI Protocols 
                    <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3: HIPAA Vault */}
            <div className="col-span-12 md:col-span-5 bg-white/70 backdrop-blur-2xl border border-white/40 shadow-[0_4px_20px_rgba(0,20,80,0.04)] rounded-2xl overflow-hidden flex flex-col group min-h-[440px] animate-fade-in" style={{animationDelay: '300ms'}}>
              <div className="h-1/2 overflow-hidden relative min-h-[220px]">
                <img alt="HIPAA Vault" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3JUvIcVvpuq3mDsU9p6ENWN4iuRAiCsUSOfSwkw1ya-Cv_eUuJ61hwKREUk4Vc-T0ToKdRzEDnVso8JezvNpW8VVPNBBsYl4LKMI3t0QJN4LtLYxhgWhG5Gjixe_rVrlbNqYtOYwEXGl6RDOtjNdfT2FoeKIr-0rfvS_1Hwbvr4AeXWYxrrC9_XeZq6VgGbVQ3ltS-1zQpZJqZFHmf4JKMh7ySieWczZdSUDYqn6kknatpe1QFUimg7Tgf4T1Ch0nTYGkkEOezNTp"/>
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent"></div>
              </div>
              <div className="p-8 flex flex-col flex-grow bg-white/60 relative z-10">
                <h3 className="font-headline-md text-headline-md text-primary mb-3">HIPAA-Compliant Vault</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Secure, encrypted storage for your entire medical history, accessible only by you and your care team.
                </p>
                <div className="mt-auto pt-4">
                  <button className="text-secondary font-label-md text-label-md flex items-center gap-2 group/btn">
                    Security Whitepaper 
                    <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Large Tech Visual Section */}
            <div className="col-span-12 md:col-span-7 bg-primary-container rounded-2xl p-10 flex items-center relative overflow-hidden min-h-[440px] animate-fade-in" style={{animationDelay: '400ms'}}>
              <div className="relative z-10 max-w-sm">
                <span className="text-secondary font-label-sm text-label-sm uppercase tracking-widest block mb-4">Neural Processing</span>
                <h3 className="font-headline-md text-headline-md text-white mb-6">Quantum-Secure Data Architecture</h3>
                <p className="text-on-primary-container font-body-md text-body-md mb-8">
                  Our proprietary data encryption layers are designed to withstand future computational threats, ensuring your privacy remains perpetual.
                </p>
                <div className="flex items-center gap-3 text-white/90">
                  <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  <span className="font-label-md text-label-md">Tier 4 Global Data Centers</span>
                </div>
              </div>
              {/* Atmospheric Effect */}
              <div className="absolute -right-20 top-0 bottom-0 w-2/3 pointer-events-none opacity-40">
                <div className="w-full h-full bg-gradient-to-l from-secondary/30 to-transparent flex items-center justify-center">
                  <div className="w-64 h-64 border-2 border-secondary/20 rounded-full animate-pulse flex items-center justify-center">
                    <div className="w-48 h-48 border border-secondary/40 rounded-full flex items-center justify-center">
                      <div className="w-32 h-32 bg-secondary/10 rounded-full blur-xl"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Prop: Sovereignty */}
      <section className="py-32 bg-white border-y border-outline-variant/20 relative z-10">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col md:flex-row items-center gap-20">
            <div className="w-full md:w-1/2 animate-fade-in">
              <div className="relative">
                <div className="aspect-square bg-white/70 backdrop-blur-2xl border border-white/40 shadow-xl rounded-[2.5rem] flex items-center justify-center p-12 relative z-10">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-secondary-container mb-8 text-on-secondary-container shadow-lg">
                      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" /></svg>
                    </div>
                    <h4 className="font-headline-md text-headline-md text-primary mb-2">Biometric Lock</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">Immutable access controls for sensitive data.</p>
                  </div>
                </div>
                {/* Floating elements */}
                <div className="absolute -top-10 -right-10 bg-white/70 backdrop-blur-xl border border-white/40 p-6 rounded-2xl animate-[float_6s_ease-in-out_infinite] shadow-lg z-20">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 bg-[#4fdbc8] rounded-full animate-pulse"></span>
                    <span className="font-label-md text-label-md text-primary">System Active</span>
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white/70 backdrop-blur-xl border border-white/40 p-4 px-6 rounded-full shadow-xl z-20 animate-[float_8s_ease-in-out_infinite]">
                  <span className="font-label-sm text-label-sm text-secondary">Zero-Knowledge Proofs</span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 animate-fade-in" style={{animationDelay: '200ms'}}>
              <h2 className="font-display text-4xl md:text-5xl leading-tight text-primary font-bold mb-8">100% Data Sovereignty</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-12">
                At lifeCore, we believe you are the sole owner of your biological data. Our systems are built on "Zero Trust" principles, meaning even we cannot access your records without your explicit, temporary authorization.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4 group">
                  <svg className="w-6 h-6 text-secondary mt-1 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <div>
                    <span className="font-label-md text-label-md font-bold text-primary block mb-1">Encrypted Transit</span>
                    <p className="font-body-md text-body-md text-on-surface-variant">256-bit AES encryption from patient portal to clinical terminal.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 group">
                  <svg className="w-6 h-6 text-secondary mt-1 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <div>
                    <span className="font-label-md text-label-md font-bold text-primary block mb-1">Physical Isolation</span>
                    <p className="font-body-md text-body-md text-on-surface-variant">Core records stored on air-gapped server clusters for ultimate safety.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 group">
                  <svg className="w-6 h-6 text-secondary mt-1 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <div>
                    <span className="font-label-md text-label-md font-bold text-primary block mb-1">Right to Erasure</span>
                    <p className="font-body-md text-body-md text-on-surface-variant">Instant, complete purging of digital footprints upon request.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 relative overflow-hidden bg-background">
        {/* Background light shapes */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-secondary-container/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-[#71f8e4]/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center relative z-10 animate-fade-in">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-6">Invested in Your Security</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-12">
              Connect with our technical advisory team to understand how our infrastructure protects your concierge healthcare journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-white px-10 py-5 rounded-lg font-label-md text-label-md hover:opacity-90 transition-all flex items-center justify-center gap-3 group shadow-xl">
                Inquire About Security 
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" /></svg>
              </button>
              <button className="border border-outline px-10 py-5 rounded-lg font-label-md text-label-md hover:bg-surface-container-high transition-all">
                Technical Specs
              </button>
            </div>
            <p className="mt-12 font-label-sm text-label-sm text-outline tracking-widest uppercase">
              lifeCore Concierge Infrastructure © 2026
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
