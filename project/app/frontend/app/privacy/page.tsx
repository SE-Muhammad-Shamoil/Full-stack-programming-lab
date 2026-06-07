import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-on-surface font-body-md p-12">
      <div className="max-w-3xl mx-auto space-y-8 bg-surface p-12 rounded-3xl border border-outline-variant shadow-sm">
        <Link href="/" className="text-secondary font-label-md hover:underline mb-8 inline-block">&larr; Back to Home</Link>
        
        <h1 className="font-display text-display text-primary">Privacy Policy</h1>
        <p className="font-label-sm text-on-surface-variant uppercase tracking-widest">Effective Date: June 7, 2026</p>
        
        <div className="space-y-6 text-on-surface-variant font-body-lg leading-relaxed mt-8">
          <p>Welcome to lifeCore Concierge Systems. We are committed to protecting your personal health information and privacy. This policy outlines how we collect, use, and secure your data.</p>
          
          <h3 className="font-headline-md text-primary pt-6">1. Information We Collect</h3>
          <p>We collect information that you provide directly to us, such as when you create an account, update your medical history, or book an appointment. This includes personal identifiers (name, email) and protected health information (PHI).</p>
          
          <h3 className="font-headline-md text-primary pt-6">2. How We Use Your Information</h3>
          <p>Your data is used exclusively to provide medical services, facilitate communication with healthcare providers, and improve the lifeCore platform. We do not sell your personal data to third parties.</p>

          <h3 className="font-headline-md text-primary pt-6">3. Data Security</h3>
          <p>We implement industry-standard security measures, including encryption and strict access controls, to protect your PHI in compliance with HIPAA regulations.</p>

          <h3 className="font-headline-md text-primary pt-6">4. Contact Us</h3>
          <p>If you have any questions about this Privacy Policy, please contact our Data Protection Officer at privacy@lifecore.com.</p>
        </div>
      </div>
    </div>
  );
}
