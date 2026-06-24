'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import toast from 'react-hot-toast';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        login(data);
        toast.success('Logged in successfully!');
        
        switch (data.role) {
          case 'Admin':
            router.push('/dashboard/admin');
            break;
          case 'Doctor':
            router.push('/dashboard/doctor');
            break;
          default:
            router.push('/dashboard/patient');
        }
      } else {
        toast.error(data.message || 'Login failed');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col md:flex-row overflow-hidden bg-surface text-on-surface selection:bg-secondary-fixed selection:text-on-secondary-fixed">
      {/* Left Side: Login Form */}
      <section className="flex-1 flex flex-col justify-between p-margin-mobile md:p-margin-desktop bg-surface-container-lowest">
        {/* Brand Logo Anchor */}
        <div className="mb-12">
          <span className="font-display text-headline-md font-bold text-primary tracking-tight">lifeCore</span>
        </div>

        {/* Login Container */}
        <div className="w-full max-w-sm mx-auto flex flex-col justify-center flex-grow">
          <div className="mb-8">
            <h1 className="font-display text-headline-lg text-on-background mb-2">Welcome Back</h1>
            <p className="text-on-surface-variant font-body-md">Secure access to your health portal</p>
          </div>

          <form className="space-y-6" onSubmit={handleLogin}>
            <div className="space-y-1.5 group">
              <label className="font-label-md text-label-md text-on-surface-variant group-focus-within:text-secondary transition-colors" htmlFor="email">
                Email Address
              </label>
              <input
                className="w-full h-12 px-4 rounded-lg border border-outline-variant bg-white text-on-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all duration-200"
                id="email"
                name="email"
                placeholder="email@example.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-1.5 group">
              <div className="flex justify-between items-center">
                <label className="font-label-md text-label-md text-on-surface-variant group-focus-within:text-secondary transition-colors" htmlFor="password">
                  Password
                </label>
                <Link className="text-label-sm font-label-sm text-secondary hover:underline transition-all" href="/forgot-password">
                  Forgot Password?
                </Link>
              </div>
              <input
                className="w-full h-12 px-4 rounded-lg border border-outline-variant bg-white text-on-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all duration-200"
                id="password"
                name="password"
                placeholder="••••••••"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              className="w-full h-12 bg-secondary text-on-secondary rounded-lg font-label-md text-label-md hover:bg-secondary-container hover:shadow-lg active:scale-[0.98] transition-all duration-200 disabled:opacity-50"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-on-surface-variant text-label-md">
              New to lifeCore?
              <Link href="/register/patient" className="text-secondary font-bold hover:underline ml-1">
                Register as Patient
              </Link>
              <span className="mx-2 text-outline-variant">|</span>
              <Link href="/register/doctor" className="text-secondary font-bold hover:underline">
                Register as Doctor
              </Link>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 opacity-40">
          <p className="text-label-sm font-label-sm">© 2026 lifeCore Concierge. HIPAA Compliant System.</p>
        </div>
      </section>

      {/* Right Side: Visual Context & Value Prop */}
      <section className="hidden md:flex flex-1 relative items-center justify-center p-12 overflow-hidden bg-surface-container">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            alt="Modern healthcare interior"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRYYSQ44PEr7_UGla0_3hlENOsNuw6tI0UBt4g1lRngkj7zP9uJ7Su0VYBRkmTHdGy1A57zXDL4Q-BtbyOeID6tu3sfex2tI-iT41Z-wdeJo8OG6jfUc9OeUmp4bRNZiyEAryLLtd3Ey57Og1_7TxkcuGEwpOPAwQUC7bVp-9Z7HpF7sMaJsmDnrT0E0HSi6otiGW_caKPDW8QBcLCqXcy9mO9t4ExFJNs7SWXbY8JIpcG0FIjYM5MFpZSRomCap0Zny-4kOAyFISh"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
        </div>

        {/* Glassmorphic Value Card */}
        <div className="relative z-10 bg-white/70 backdrop-blur-xl border border-white/40 shadow-xl rounded-xl p-10 max-w-md w-full animate-fade-in">
          <div className="mb-8">
            <span className="inline-block px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed text-label-sm font-label-sm mb-4 uppercase tracking-wider">
              Premium Care
            </span>
            <h2 className="font-display text-headline-md text-on-background mb-2">lifeCore Concierge</h2>
            <div className="h-1 w-12 bg-secondary rounded-full"></div>
          </div>

          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <div className="bg-white p-2 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-label-md text-label-md text-on-background">24/7 Virtual Consultations</h3>
                <p className="text-on-surface-variant text-label-sm font-normal">Direct access to elite specialists anytime, anywhere.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="bg-white p-2 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <h3 className="font-label-md text-label-md text-on-background">Secure Medical Records</h3>
                <p className="text-on-surface-variant text-label-sm font-normal">State-of-the-art encryption for your health data privacy.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="bg-white p-2 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-label-md text-label-md text-on-background">Personalized Wellness Plans</h3>
                <p className="text-on-surface-variant text-label-sm font-normal">Data-driven roadmaps tailored to your unique biology.</p>
              </div>
            </li>
          </ul>

          <div className="mt-10 pt-8 border-t border-white/40">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-white bg-surface-container-high overflow-hidden">
                  <img className="w-full h-full object-cover" alt="Doctor" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3046H6wGRxIqxWa9H0Rr9su0EAkKcVo7M8LJWodEQA2nvx6iUqszW52Gxyq6d-kiqxpeJwi9TdhHJRKc9DhLU2jMMY2CtLSYAPQdZ4--CvmH3d0mFNjMK1ymTJAf3GWzyYAfB1vtFxq_AUjmqIaHWY75Tse7WohEiw7kM_NXeDpQzY_aus229eDmQdLRDLMrq6CxOg3Xt9Q-o6SGcMTd0YUGbp7XTCEHa01QT7yHJSsBdcl1WVdErI1OuMzO4DMNuJBJKSx0w2HUB" />
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-white bg-surface-container-high overflow-hidden">
                  <img className="w-full h-full object-cover" alt="Doctor 2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBizjGeL2xXFEF4pWCih09j0ZZ3xkCZ3gwRd3PNzRwpM-S4vzXXu5PsJ0lTF2iTSqahzqMHQymvwKK5D8R5Y2vqe7GfJkqycVbuVQ6rgfoiughhSD3kRvekm-hvSsorbmQ0VXwymADlsQ_m_U0qFUJqaQ-mwkwGyjdtiTPRTrBxHN9zqPGZAFfE6WC48F5f3vo9dKF8ll509w1loy3wj1xsn8Cta8PaGQ4DoGiWJdkrRrs5HLvCloz30gEU2sq1dS77Myq6iuxfW0pC" />
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-white bg-secondary flex items-center justify-center text-[10px] text-white font-bold">
                  +40
                </div>
              </div>
              <p className="text-label-sm text-on-surface-variant font-label-sm">Join over 10k members receiving elite care</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
