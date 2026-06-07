'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full py-8 px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-gutter bg-white border-t border-black/10 relative z-10">
      <div className="flex flex-col gap-2 text-center md:text-left">
        <div className="font-headline-md text-headline-md text-primary font-bold">LifeCore</div>
        <p className="font-label-md text-label-md text-on-surface-variant">© 2026 LifeCore Concierge. All Rights Reserved.</p>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        <Link href="#" className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors">HIPAA Compliance</Link>
        <Link href="#" className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors">Privacy Policy</Link>
        <Link href="#" className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors">Terms of Service</Link>
        <Link href="#" className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors">Security</Link>
      </div>
    </footer>
  );
}
