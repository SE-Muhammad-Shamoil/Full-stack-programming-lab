import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-on-surface font-body-md p-12">
      <div className="max-w-3xl mx-auto space-y-8 bg-surface p-12 rounded-3xl border border-outline-variant shadow-sm">
        <Link href="/" className="text-secondary font-label-md hover:underline mb-8 inline-block">&larr; Back to Home</Link>
        
        <h1 className="font-display text-display text-primary">Terms of Service</h1>
        <p className="font-label-sm text-on-surface-variant uppercase tracking-widest">Effective Date: June 7, 2026</p>
        
        <div className="space-y-6 text-on-surface-variant font-body-lg leading-relaxed mt-8">
          <p>By accessing or using the lifeCore Concierge Systems platform, you agree to be bound by these Terms of Service.</p>
          
          <h3 className="font-headline-md text-primary pt-6">1. Acceptance of Terms</h3>
          <p>You must be at least 18 years old to use this service. By creating an account, you represent that you have the legal capacity to enter into a binding agreement.</p>
          
          <h3 className="font-headline-md text-primary pt-6">2. Medical Disclaimer</h3>
          <p>The content provided on lifeCore is for informational and scheduling purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician.</p>

          <h3 className="font-headline-md text-primary pt-6">3. User Responsibilities</h3>
          <p>You agree to provide accurate and complete information when registering and booking appointments. You are responsible for maintaining the confidentiality of your account credentials.</p>

          <h3 className="font-headline-md text-primary pt-6">4. Termination</h3>
          <p>We reserve the right to suspend or terminate your account if you violate these terms or engage in disruptive behavior on the platform.</p>
        </div>
      </div>
    </div>
  );
}
