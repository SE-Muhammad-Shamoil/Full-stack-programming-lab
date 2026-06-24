'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/auth/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, newPassword }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Password updated successfully! Please sign in.');
        router.push('/login');
      } else {
        toast.error(data.message || 'Failed to reset password');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col md:flex-row overflow-hidden bg-surface text-on-surface selection:bg-secondary-fixed selection:text-on-secondary-fixed">
      {/* Left Side: Reset Password Form */}
      <section className="flex-1 flex flex-col justify-between p-margin-mobile md:p-margin-desktop bg-surface-container-lowest">
        {/* Brand Logo Anchor */}
        <div className="mb-12">
          <Link href="/">
            <span className="font-display text-headline-md font-bold text-primary tracking-tight">lifeCore</span>
          </Link>
        </div>

        {/* Form Container */}
        <div className="w-full max-w-sm mx-auto flex flex-col justify-center flex-grow">
          <div className="mb-8">
            <h1 className="font-display text-headline-lg text-on-background mb-2">Reset Password</h1>
            <p className="text-on-surface-variant font-body-md">Enter your email and choose a new password</p>
          </div>

          <form className="space-y-6" onSubmit={handleResetPassword}>
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
              <label className="font-label-md text-label-md text-on-surface-variant group-focus-within:text-secondary transition-colors" htmlFor="newPassword">
                New Password
              </label>
              <input
                className="w-full h-12 px-4 rounded-lg border border-outline-variant bg-white text-on-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all duration-200"
                id="newPassword"
                name="newPassword"
                placeholder="••••••••"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>

            <button
              className="w-full h-12 bg-secondary text-on-secondary rounded-lg font-label-md text-label-md hover:bg-secondary-container hover:shadow-lg active:scale-[0.98] transition-all duration-200 disabled:opacity-50"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? 'Updating...' : 'Update Password'}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-on-surface-variant text-label-md">
              Remembered your password?
              <Link href="/login" className="text-secondary font-bold hover:underline ml-1">
                Sign In
              </Link>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 opacity-40">
          <p className="text-label-sm font-label-sm">© 2026 lifeCore Concierge. HIPAA Compliant System.</p>
        </div>
      </section>

      {/* Right Side: Visual Context */}
      <section className="hidden md:flex flex-1 relative items-center justify-center p-12 overflow-hidden bg-surface-container">
        <div className="absolute inset-0 z-0">
          <img
            alt="Modern healthcare interior"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRYYSQ44PEr7_UGla0_3hlENOsNuw6tI0UBt4g1lRngkj7zP9uJ7Su0VYBRkmTHdGy1A57zXDL4Q-BtbyOeID6tu3sfex2tI-iT41Z-wdeJo8OG6jfUc9OeUmp4bRNZiyEAryLLtd3Ey57Og1_7TxkcuGEwpOPAwQUC7bVp-9Z7HpF7sMaJsmDnrT0E0HSi6otiGW_caKPDW8QBcLCqXcy9mO9t4ExFJNs7SWXbY8JIpcG0FIjYM5MFpZSRomCap0Zny-4kOAyFISh"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
        </div>
      </section>
    </main>
  );
}
