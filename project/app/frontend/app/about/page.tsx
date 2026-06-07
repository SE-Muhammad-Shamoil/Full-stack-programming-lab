'use client';

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden antialiased selection:bg-secondary-fixed selection:text-on-secondary-fixed">
      <NavBar />

      {/* Hero Section */}
      <section className="relative min-h-[921px] flex items-center bg-tertiary overflow-hidden px-margin-mobile md:px-margin-desktop pt-24">
        <div className="absolute inset-0 z-0">
          <img alt="Redefining Medical Excellence" className="w-full h-full object-cover opacity-40 mix-blend-luminosity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrudTv3OZNjAAG86Jqf762VG1v4C5mUzDBic6N9sJZzXS7qrvluJDLw3-88Qr1iK4xbff68nKuE8EPymtDxIlXFM_I2pYNKXJQG-jQGzVSJsUGfg4nGPC11P2TGQS4Xa78zpoBufM27f6UmS_py6qwacZn86d45aIOkivunAY4KDQhaCzEhQZY31bxbeRGgnwAq720sBW6_qoPGpSWkf240brcYuB772uYiDN2snwR4X1FBV_n_c4zJtK5PScVsT6vSIoAiM0MlySM"/>
          <div className="absolute inset-0 bg-gradient-to-t from-tertiary via-transparent to-tertiary/80"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary/10 via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-container-max mx-auto w-full animate-fade-in">
          <div className="max-w-3xl space-y-base">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#71f8e4]/30 bg-[#71f8e4]/10 text-[#71f8e4] font-label-sm uppercase tracking-widest animate-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-[#71f8e4] drop-shadow-[0_0_8px_rgba(113,248,228,0.6)]"></span>
              Elite Concierge
            </span>
            <h1 className="font-display text-5xl md:text-[64px] text-white leading-tight mb-4">
              Redefining <span className="text-[#b4c5ff]">Medical Excellence</span>
            </h1>
            <p className="font-body-lg text-outline-variant max-w-2xl text-white/80">
              A sanctuary of elite care, built on a foundation of uncompromised precision and exclusive service. We bridge the gap between advanced technology and human-centric empathy.
            </p>
            <div className="pt-8 flex flex-wrap gap-gutter">
              <button className="bg-secondary text-white px-8 py-4 rounded-lg font-label-md hover:bg-secondary/90 transition-all transform hover:-translate-y-1 shadow-lg shadow-secondary/20">
                Explore Our Philosophy
              </button>
              <button className="border border-outline-variant text-white px-8 py-4 rounded-lg font-label-md hover:bg-white/10 transition-all backdrop-blur-sm">
                Request a Private Tour
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* The lifeCore Difference */}
      <section className="py-24 bg-surface px-margin-mobile md:px-margin-desktop relative overflow-hidden z-10">
        <div className="max-w-container-max mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="relative animate-fade-in">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#71f8e4]/5 rounded-full blur-[80px]"></div>
            <img alt="The lifeCore Difference" className="relative z-10 rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJXqcKDTfHl1gkaYg_Xef5RBout0aPcL8UlZhvpAeancg7dC1zlV4CvaEYjHq9yu732AesTOl--7fn6vqbTDhhRMWjmMvtobE8jtbN5Acd09EQp1Srxj1IM3M1rTariFF0zZJlOeVilJyKf5-u2-peRPCOcIAAmuwHPvGlVpm0N869wlwEp0xSdeQRy3fb7d2AEJio-9Qqifn6kkR3_txtXFfJ5ebBPfLOaiUALMbWPLy5JXWMtJEMGEAuowRGQd3j8XwiJ4LjFrye"/>
            <div className="absolute -bottom-8 -right-8 bg-white/70 backdrop-blur-xl border border-white/30 p-6 rounded-2xl shadow-xl z-20 max-w-[240px]">
              <svg className="w-8 h-8 text-secondary mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
              <p className="font-label-md text-on-surface">Precision Molecular Analysis as Standard Protocol.</p>
            </div>
          </div>
          <div className="space-y-8 animate-fade-in" style={{animationDelay: '200ms'}}>
            <div className="space-y-4">
              <h2 className="font-headline-lg text-headline-lg text-primary">The lifeCore Difference</h2>
              <div className="w-16 h-1 bg-secondary rounded-full"></div>
            </div>
            <div className="space-y-12">
              <div className="flex gap-6 items-start group">
                <div className="p-3 rounded-xl bg-surface-container-high group-hover:bg-secondary/10 transition-colors">
                  <svg className="w-8 h-8 text-secondary group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md mb-2">Zero Compromise</h3>
                  <p className="font-body-md text-on-surface-variant">We reject the status quo of high-volume medicine. Each member receives an exhaustive, individual-first approach where time is never an obstacle to diagnostic depth.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start group">
                <div className="p-3 rounded-xl bg-surface-container-high group-hover:bg-secondary/10 transition-colors">
                  <svg className="w-8 h-8 text-secondary group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" /></svg>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md mb-2">Holistic Precision</h3>
                  <p className="font-body-md text-on-surface-variant">Integrating epigenetic mapping, lifestyle data, and specialist consultation into a singular, cohesive health strategy designed for longevity.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-24 bg-surface-container-low relative z-10">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Card 1 */}
            <div className="bg-white/70 backdrop-blur-xl border border-white/30 p-10 rounded-3xl flex flex-col items-center text-center group hover:bg-white transition-all duration-500 shadow-sm hover:shadow-xl hover:-translate-y-2 animate-fade-in" style={{animationDelay: '100ms'}}>
              <div className="mb-6 p-4 rounded-full bg-secondary/5 text-secondary group-hover:scale-110 group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              </div>
              <h4 className="font-display text-[42px] text-primary mb-2">99.8%</h4>
              <p className="font-label-md text-secondary uppercase tracking-widest font-bold">Diagnostic Accuracy</p>
              <div className="mt-4 w-12 h-0.5 bg-outline-variant/30 group-hover:w-full group-hover:bg-secondary transition-all duration-700"></div>
            </div>
            {/* Card 2 */}
            <div className="bg-white/70 backdrop-blur-xl border border-white/30 p-10 rounded-3xl flex flex-col items-center text-center group hover:bg-white transition-all duration-500 shadow-sm hover:shadow-xl hover:-translate-y-2 animate-fade-in" style={{animationDelay: '200ms'}}>
              <div className="mb-6 p-4 rounded-full bg-secondary/5 text-secondary group-hover:scale-110 group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
              </div>
              <h4 className="font-display text-[42px] text-primary mb-2">24/7</h4>
              <p className="font-label-md text-secondary uppercase tracking-widest font-bold">Global Access</p>
              <div className="mt-4 w-12 h-0.5 bg-outline-variant/30 group-hover:w-full group-hover:bg-secondary transition-all duration-700"></div>
            </div>
            {/* Card 3 */}
            <div className="bg-white/70 backdrop-blur-xl border border-white/30 p-10 rounded-3xl flex flex-col items-center text-center group hover:bg-white transition-all duration-500 shadow-sm hover:shadow-xl hover:-translate-y-2 animate-fade-in" style={{animationDelay: '300ms'}}>
              <div className="mb-6 p-4 rounded-full bg-secondary/5 text-secondary group-hover:scale-110 group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h4 className="font-display text-[42px] text-primary mb-2">Top 1%</h4>
              <p className="font-label-md text-secondary uppercase tracking-widest font-bold">Specialists Only</p>
              <div className="mt-4 w-12 h-0.5 bg-outline-variant/30 group-hover:w-full group-hover:bg-secondary transition-all duration-700"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Team */}
      <section className="py-32 bg-white px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="max-w-container-max mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-gutter mb-20 animate-fade-in">
            <div className="max-w-2xl">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Board of Medical Directors</h2>
              <p className="font-body-md text-on-surface-variant">The architects of our clinical protocols, bringing decades of experience from the world's leading research institutions.</p>
            </div>
            <div className="hidden md:block">
              <div className="flex gap-2">
                <button className="p-3 border border-outline-variant rounded-full hover:bg-secondary hover:text-white hover:border-secondary transition-all">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button className="p-3 border border-outline-variant rounded-full hover:bg-secondary hover:text-white hover:border-secondary transition-all">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Profile 1 */}
            <div className="group animate-fade-in" style={{animationDelay: '100ms'}}>
              <div className="relative overflow-hidden rounded-3xl aspect-[4/5] bg-surface-container-highest mb-6 shadow-lg group-hover:shadow-xl transition-all duration-500">
                <img alt="Dr. Julian Vance" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAd6ClKBGhxSF6BEHWpOVUMmbPsAEdw3cHt5a2xKGz7IUuMO_QmQw-HBgPQUUDdig4UhMSRf_ufaOc0kulBSOma6MFCB3mEbu0UrPC-s2pa9nhelI4oaTgBMVZOrnZpaii7uCctSqoF-ElPXgViWsfrShtdOo4bEX1SgmvVXwcRCjrqRmQ2Go2tn644BdNQOGleyJ5yU2ZdN7cVqWHaHs731zTYAIrUCpXnONwB7T1r0t3AQOTYuApj7FTnkrqMcfRK2HV5b_EZaT76"/>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-white">
                  <p className="font-label-sm uppercase tracking-widest mb-2 text-[#71f8e4]">Genomics Expert</p>
                  <p className="font-body-md italic text-white/90">"Precision is the quiet foundation of transformative healthcare."</p>
                </div>
              </div>
              <h4 className="font-headline-md text-headline-md text-primary">Dr. Julian Vance</h4>
              <p className="font-label-md text-secondary mb-2">Chief of Medical Strategy</p>
              <p className="font-body-md text-on-surface-variant">Former Head of Research at NeoGen Institute.</p>
            </div>
            
            {/* Profile 2 */}
            <div className="group animate-fade-in" style={{animationDelay: '200ms'}}>
              <div className="relative overflow-hidden rounded-3xl aspect-[4/5] bg-surface-container-highest mb-6 shadow-lg group-hover:shadow-xl transition-all duration-500">
                <img alt="Dr. Elena Rossi" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2WNldLDpfr7M1f1g_S3l8Fgkc_x6-R306UQnC8029Bba2wugdTq7zw0HY148c27U49i43zsR0ROivapD47V4tpf4mrdluTIIoVgn2QZDLYYSJRDsFVmMb3e_ZuWXLIK0paEz__mhEyjGIWXO6t70c_MqhADxmPNIg1jnIpWitCr_132lLbs4J_LMcqyklOOAzMMp5tHyaqKn6rPjSB7on5BmwQdO7iYooqi1iYHpFQBKRfZXgzFvMQXnzQLzBz1dznRPevGwricTU"/>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-white">
                  <p className="font-label-sm uppercase tracking-widest mb-2 text-[#71f8e4]">Cardiology Pioneer</p>
                  <p className="font-body-md italic text-white/90">"We don't just extend life; we optimize every single moment."</p>
                </div>
              </div>
              <h4 className="font-headline-md text-headline-md text-primary">Dr. Elena Rossi</h4>
              <p className="font-label-md text-secondary mb-2">Director of Clinical Excellence</p>
              <p className="font-body-md text-on-surface-variant">Recipient of the 2022 Global Innovation Award.</p>
            </div>
            
            {/* Profile 3 */}
            <div className="group animate-fade-in" style={{animationDelay: '300ms'}}>
              <div className="relative overflow-hidden rounded-3xl aspect-[4/5] bg-surface-container-highest mb-6 shadow-lg group-hover:shadow-xl transition-all duration-500">
                <img alt="Marcus Thorne" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-cwqzwnBVn4OQam2INsU76g9v0esr5sFoynWZncdwpxTDKRQr3rSiZHHD9UMu00yEq1VZQQMFn1PBYs7id8We44lIMAFcWyBUIQb5CIBKolj5IddKJzOYP_y5ajQqErAZkoDmY7C1H1Zx8U0L7cNg9a53rz9_cOuP-RLOWUiwgQdfl3Ede3jlsB_3vjnd1QSVOlvJFdFKX8vFrVuTMg1RCzr-ek0IvjaSqq0DsZE1MupC8U_0UJn88HlKTISbR4SgTVSfvSt-Tp0A"/>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-white">
                  <p className="font-label-sm uppercase tracking-widest mb-2 text-[#71f8e4]">Operational Visionary</p>
                  <p className="font-body-md italic text-white/90">"The service must be as flawless as the science it supports."</p>
                </div>
              </div>
              <h4 className="font-headline-md text-headline-md text-primary">Marcus Thorne</h4>
              <p className="font-label-md text-secondary mb-2">Managing Director</p>
              <p className="font-body-md text-on-surface-variant">Global Hospitality &amp; Logistics Specialist.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-margin-mobile md:px-margin-desktop bg-surface relative z-10">
        <div className="max-w-container-max mx-auto">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-primary-container p-12 md:p-24 text-center shadow-2xl animate-fade-in">
            {/* Abstract Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#71f8e4]/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <h2 className="font-display text-white text-[48px] md:text-[64px] leading-tight">Redefine your baseline</h2>
              <p className="font-body-lg text-on-primary-container text-white/80">Secure your invitation to join an exclusive network where healthcare is tailored to your unique biological signature.</p>
              <div className="pt-4">
                <Link href="/register/patient" className="inline-flex bg-white text-primary px-12 py-5 rounded-full font-label-md hover:scale-105 transition-all items-center gap-3 shadow-xl mx-auto group">
                  Inquire for Membership
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
