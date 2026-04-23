'use client';

import { motion } from 'framer-motion';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { Chrome } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left Side: Editorial Image */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <Image 
          src="/products/emerald-executive.jpg"
          alt="The Velvet Tray Entrance"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-crimson/10 mix-blend-multiply" />
        <div className="absolute bottom-12 left-12 z-10 text-ivory">
          <h2 className="text-4xl font-serif mb-2">The Art of Appreciation</h2>
          <p className="text-sm uppercase tracking-widest opacity-80">Curation of Origin & Excellence</p>
        </div>
      </div>

      {/* Right Side: Login Form */}
      <div className="w-full lg:w-1/2 bg-bg-warm flex items-center justify-center p-8 md:p-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full text-center"
        >
          <Link href="/" className="inline-block mb-12">
            <span className="text-3xl font-serif tracking-[0.2em] uppercase text-crimson block">The Velvet Tray</span>
            <span className="text-[10px] tracking-[0.4em] uppercase text-text-secondary mt-1">Gifting Commerce</span>
          </Link>

          <h1 className="text-3xl font-serif mb-4 text-text-primary">Welcome Back</h1>
          <p className="text-text-secondary mb-12 italic">Sign in to manage your collections, track orders, and explore the Studio Atlas.</p>

          <div className="space-y-4">
            <button 
              onClick={() => signIn('google', { callbackUrl: '/' })}
              className="w-full flex items-center justify-center gap-3 bg-white border border-border py-4 px-6 rounded-none text-sm uppercase tracking-widest hover:bg-bg-muted transition-all group"
            >
              <Image src="https://authjs.dev/img/providers/google.svg" alt="Google" width={20} height={20} />
              <span className="group-hover:text-crimson transition-colors">Continue with Google</span>
            </button>
            
            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-border"></div></div>
              <div className="relative flex justify-center text-xs uppercase"><span className="bg-bg-warm px-4 text-text-secondary tracking-widest">Enterprise Access Only</span></div>
            </div>

            <Link href="/corporate" className="block text-[10px] uppercase tracking-widest text-text-secondary hover:text-crimson transition-colors mt-8">
              Need a corporate account? <span className="underline">Inquire here</span>
            </Link>
          </div>

          <div className="mt-24 pt-8 border-t border-border">
            <p className="text-[10px] text-text-secondary uppercase tracking-[0.2em]">
              © 2026 The Velvet Tray. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
