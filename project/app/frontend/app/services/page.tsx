'use client';

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div className="bg-background text-on-background font-body-md antialiased overflow-x-hidden selection:bg-secondary-fixed selection:text-on-secondary-fixed">
      <NavBar />

      {/* Section 1: Hero */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0 z-0">
          <img alt="Premium Medical Aesthetics" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBe9yXSl8iwSfQ5vcZ9IyD3oHM4qLrSmia3viH9KCw8v0AriPYtutXLF8mma6AfP3L60hdyupY5epEvKfyRPvdOgd9HNr7Tf8Rx1oxRMlK-owThWeYq11XILjWadoywlBex92P7Wlg0pxAJkM4MnOcE983bbPbE-MwPnB0MNTFg_cRpq7UQ1qU38zTe7MLYPfGNZdwu0YydoE4Y0PJp36qXddLye5D8ir0odFT0D4w2OftVS9EEs7MjtSPXpd1AoyUzJ-PobpNqTAsQ" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-surface"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl px-margin-mobile md:px-margin-desktop space-y-base animate-fade-in">
          <span className="font-label-md text-label-md text-secondary tracking-[0.2em] uppercase mb-4 block">Excellence in Care</span>
          <h1 className="font-display text-5xl md:text-7xl text-primary tracking-tight mb-6">
            Uncompromising <br/>Medical Care
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto opacity-90">
            A comprehensive suite of concierge services tailored to your exact specifications, delivered with clinical precision and human warmth.
          </p>
        </div>
      </section>

      {/* Section 2: Service Cards */}
      <section className="py-32 px-margin-mobile md:px-margin-desktop relative bg-surface z-10">
        <div className="max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Card 1 */}
            <div className="bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_4px_24px_-1px_rgba(0,0,0,0.04)] p-10 rounded-2xl group transition-all duration-500 hover:-translate-y-2 hover:border-secondary/20 hover:shadow-[0_20px_40px_-10px_rgba(0,81,213,0.08)] animate-fade-in" style={{animationDelay: '100ms'}}>
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-8 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-500">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-4">24/7 Virtual Access</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Instant connection to your dedicated care team and elite specialists anytime, anywhere. Experience healthcare without boundaries.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_4px_24px_-1px_rgba(0,0,0,0.04)] p-10 rounded-2xl group transition-all duration-500 hover:-translate-y-2 hover:border-secondary/20 hover:shadow-[0_20px_40px_-10px_rgba(0,81,213,0.08)] animate-fade-in" style={{animationDelay: '200ms'}}>
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-8 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-500">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-4">Global Specialist Network</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Priority access to the world's leading medical minds, selected for their clinical brilliance and outcomes. Your health, globalized.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_4px_24px_-1px_rgba(0,0,0,0.04)] p-10 rounded-2xl group transition-all duration-500 hover:-translate-y-2 hover:border-secondary/20 hover:shadow-[0_20px_40px_-10px_rgba(0,81,213,0.08)] animate-fade-in" style={{animationDelay: '300ms'}}>
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-8 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-500">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-4">Executive Health Assessments</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Comprehensive diagnostic screenings and preventative protocols designed for high-performance lifestyles. Optimization through data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Feature Highlight */}
      <section className="py-32 bg-white overflow-hidden relative z-10">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col md:flex-row items-center gap-20">
            {/* Image Side */}
            <div className="w-full md:w-1/2 relative animate-fade-in">
              <div className="absolute -inset-4 bg-secondary/5 blur-3xl rounded-full"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-surface-variant/20 aspect-square">
                <img alt="Precision Diagnostics Interface" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUKabjoDeNR7ZNsQU6BKz_j6n0B0ZYIu_8BPRzQv71OKMPTvmzXeWwT7VmNj3aTARjMcQy6NNQE5m9CJ_GMhsO0PbPjSD91Ix_xzX-UMvGw9BelG3D5_5V9W1vEu4pfsiK1NLLeNZgz_VyQtqQnl8x_UdjzDfrt_84OiKAExCH2dm3r2Qsn_3AhwgQw3bPo5O7v61525oH8sK19_xKcSoEInTeZkBSRQVUeydW7v5lY1VnRyCVFCqd5pulG0yNXckRpRvzxjUBodPH" />
              </div>
            </div>
            {/* Content Side */}
            <div className="w-full md:w-1/2 space-y-8 animate-fade-in" style={{animationDelay: '200ms'}}>
              <div>
                <span className="font-label-md text-label-md text-secondary tracking-widest uppercase mb-4 block">The Cornerstone</span>
                <h2 className="font-headline-lg text-4xl md:text-5xl md:leading-[1.2] text-primary mb-6">The Annual Assessment</h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
                  Our proprietary assessment protocol goes beyond traditional medicine. We leverage cutting-edge genomics, high-resolution imaging, and functional biomarkers to create your unique biological blueprint.
                </p>
              </div>
              <ul className="space-y-6">
                <li className="flex items-start gap-4 group">
                  <svg className="w-6 h-6 text-secondary mt-1 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <div>
                    <span className="font-label-md text-label-md text-primary font-bold block mb-1">Whole-Genome Sequencing</span>
                    <p className="text-on-surface-variant text-sm">Identifying future risks with predictive precision.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 group">
                  <svg className="w-6 h-6 text-secondary mt-1 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <div>
                    <span className="font-label-md text-label-md text-primary font-bold block mb-1">Advanced Metabolic Profiling</span>
                    <p className="text-on-surface-variant text-sm">Real-time data on nutrition and hormonal optimization.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 group">
                  <svg className="w-6 h-6 text-secondary mt-1 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <div>
                    <span className="font-label-md text-label-md text-primary font-bold block mb-1">Elite Cardiac Screenings</span>
                    <p className="text-on-surface-variant text-sm">Non-invasive, AI-enhanced cardiovascular mapping.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Call to Action */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface relative z-10">
        <div className="max-w-container-max mx-auto">
          <div className="relative overflow-hidden bg-primary rounded-[2.5rem] p-16 md:p-24 text-center shadow-2xl animate-fade-in">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4fdbc8]/10 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
            
            <div className="relative z-10">
              <h2 className="font-display text-4xl md:text-5xl text-white mb-8">Ready to elevate your healthcare journey?</h2>
              <p className="font-body-lg text-body-lg text-white/80 max-w-xl mx-auto mb-12">
                Admission to lifeCore Concierge is limited to maintain our unparalleled standard of individual attention and care precision.
              </p>
              <Link href="/register/patient" className="inline-block bg-white text-primary font-headline-md text-headline-md px-12 py-5 rounded-full hover:scale-105 transition-all duration-300 shadow-xl">
                Inquire for Membership
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
