'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Github, Lock, User, ArrowRight, Loader2, Sparkles } from 'lucide-react';
import { useState } from 'react';

export default function AuthPage() {
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [isLoading, setIsLoading] = useState(false);

  const handleOAuthSignIn = async (provider: string) => {
    setIsLoading(true);
    await signIn(provider, { callbackUrl: '/' });
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-pearl flex items-center justify-center p-6 pt-32 pb-20">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 bg-white rounded-[4rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)] border border-border/50">
        
        {/* Left Side: Brand Narrative */}
        <div className="hidden lg:block relative p-20 bg-obsidian text-pearl overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 skew-x-[-12deg] translate-x-20" />
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-10 h-full flex flex-col justify-between"
          >
            <div>
              <Link href="/" className="flex flex-col mb-12">
                <span className="text-3xl font-serif tracking-[0.3em] uppercase text-pearl">The Velvet Tray</span>
                <div className="h-[1px] w-12 bg-gold mt-2" />
              </Link>
              <h2 className="text-6xl font-serif mb-8 leading-tight italic">
                Welcome to the <br /> <span className="not-italic text-gold">Inner House.</span>
              </h2>
              <p className="text-xl text-pearl/50 font-light leading-relaxed max-w-sm italic">
                "Provenance, Preservation, and Perfection. Join the circle of connoisseurs of Indian heritage craft."
              </p>
            </div>

            <div className="space-y-12">
              <div className="flex items-center gap-6 group cursor-default">
                <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <Sparkles className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest">Early Access</h4>
                  <p className="text-xs text-pearl/40 uppercase tracking-widest mt-1">Limited edition heritage launches.</p>
                </div>
              </div>
              <p className="text-[10px] text-pearl/30 uppercase tracking-[0.5em]">
                © 2026 The Velvet Tray. <br /> Curation of Origin.
              </p>
            </div>
          </motion.div>

          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none grayscale brightness-50">
            <Image 
              src="/studio/hero.png" 
              alt="Background" 
              fill 
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Side: Auth Form */}
        <div className="p-10 md:p-24 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full space-y-12">
            {/* Tab Switcher */}
            <div className="flex justify-center gap-12 border-b border-border pb-6">
              <button 
                onClick={() => setMode('login')}
                className={`text-[10px] uppercase tracking-[0.5em] font-bold transition-all duration-500 relative ${mode === 'login' ? 'text-gold' : 'text-text-secondary hover:text-obsidian'}`}
              >
                Access
                {mode === 'login' && <motion.div layoutId="authTab" className="absolute -bottom-6.5 left-0 right-0 h-[2px] bg-gold" />}
              </button>
              <button 
                onClick={() => setMode('signup')}
                className={`text-[10px] uppercase tracking-[0.5em] font-bold transition-all duration-500 relative ${mode === 'signup' ? 'text-gold' : 'text-text-secondary hover:text-obsidian'}`}
              >
                Initiate
                {mode === 'signup' && <motion.div layoutId="authTab" className="absolute -bottom-6.5 left-0 right-0 h-[2px] bg-gold" />}
              </button>
            </div>

            <div className="text-center">
              <h1 className="text-4xl font-serif text-obsidian italic">
                {mode === 'login' ? 'Continue your Journey.' : 'Begin your Narrative.'}
              </h1>
            </div>

            {/* OAuth Options */}
            <div className="space-y-4">
              <button 
                onClick={() => handleOAuthSignIn('google')}
                className="w-full flex items-center justify-center gap-4 bg-white border border-border py-4 px-6 rounded-full text-[9px] uppercase tracking-[0.4em] font-bold hover:bg-pearl hover:border-gold/30 transition-all group"
              >
                <Image src="https://authjs.dev/img/providers/google.svg" alt="Google" width={18} height={18} />
                <span className="text-obsidian group-hover:text-gold transition-colors">House Access with Google</span>
              </button>
              <button 
                onClick={() => handleOAuthSignIn('github')}
                className="w-full flex items-center justify-center gap-4 bg-obsidian text-pearl py-4 px-6 rounded-full text-[9px] uppercase tracking-[0.4em] font-bold hover:bg-gold transition-all group"
              >
                <Github className="w-4 h-4" />
                <span className="group-hover:text-white transition-colors">Access with GitHub</span>
              </button>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="w-full border-t border-border"></div>
              <span className="absolute bg-white px-6 text-[8px] uppercase tracking-[0.5em] text-text-secondary/50">Or Secure Email</span>
            </div>

            {/* Local Auth Form */}
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              {mode === 'signup' && (
                <div className="space-y-2">
                  <label className="text-[8px] uppercase tracking-[0.5em] text-text-secondary font-bold">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/50" />
                    <input type="text" className="w-full bg-transparent border-b border-border py-4 pl-10 focus:border-gold outline-none transition-all placeholder:text-border/40 font-light" placeholder="Aurobindo Ghose" />
                  </div>
                </div>
              )}
              <div className="space-y-2">
                <label className="text-[8px] uppercase tracking-[0.5em] text-text-secondary font-bold">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/50" />
                  <input type="email" className="w-full bg-transparent border-b border-border py-4 pl-10 focus:border-gold outline-none transition-all placeholder:text-border/40 font-light" placeholder="patron@heritage.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[8px] uppercase tracking-[0.5em] text-text-secondary font-bold">Password</label>
                <div className="relative">
                  <Lock className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/50" />
                  <input type="password" className="w-full bg-transparent border-b border-border py-4 pl-10 focus:border-gold outline-none transition-all placeholder:text-border/40 font-light" placeholder="••••••••" />
                </div>
              </div>

              <button type="submit" className="btn-luxe w-full py-6 rounded-full mt-10">
                {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : (
                  <>
                    <span>{mode === 'login' ? 'Enter the House' : 'Initialize Account'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            <p className="text-center text-[10px] text-text-secondary uppercase tracking-[0.3em] font-light">
              {mode === 'login' ? 'New to the House?' : 'Already a Patron?'} 
              <button 
                onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
                className="text-gold font-bold ml-2 hover:underline"
              >
                {mode === 'login' ? 'Request Invitation' : 'Sign In'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
