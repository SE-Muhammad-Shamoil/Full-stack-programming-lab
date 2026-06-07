'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function NavBar() {
  const navRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        navRef.current?.classList.add('shadow-md', 'py-3');
        navRef.current?.classList.remove('py-4');
      } else {
        navRef.current?.classList.remove('shadow-md', 'py-3');
        navRef.current?.classList.add('py-4');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav ref={navRef} className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 bg-surface/80 backdrop-blur-xl border-b border-surface-container-highest/20 transition-all duration-300">
      <Link href="/" className="font-display text-headline-md md:text-display tracking-tight text-primary">LifeCore</Link>
      <div className="hidden md:flex items-center gap-gutter">
        <Link href="/wellness" className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors">Wellness</Link>
        <Link href="/technology" className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors">Technology</Link>
        <Link href="/services" className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors">Services</Link>
        <Link href="/about" className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors">About</Link>
      </div>
      <div className="flex items-center gap-4">
        <Link href="/login" className="font-label-md text-label-md text-primary hover:text-secondary transition-colors hidden sm:block">
          Login
        </Link>
        <Link href="/register/patient" className="bg-primary text-on-primary px-6 py-2.5 rounded-full font-label-md text-label-md hover:opacity-90 transition-all duration-300 active:scale-95 shadow-lg">
          Register
        </Link>
      </div>
    </nav>
  );
}
