'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Compass, ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-pearl flex flex-col items-center justify-center p-6 text-center pt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-12"
      >
        <div className="w-24 h-24 rounded-full bg-gold/10 flex items-center justify-center mx-auto text-gold">
          <Compass className="w-10 h-10" />
        </div>
        
        <div className="space-y-6">
          <span className="text-gold uppercase tracking-[0.8em] text-[10px] font-bold">Error 404</span>
          <h1 className="text-8xl font-serif italic text-obsidian">Lost in <br /> <span className="not-italic">Provenance.</span></h1>
          <p className="text-xl text-text-secondary font-light max-w-md mx-auto italic leading-relaxed">
            "The path you seek is currently unmapped. Let our concierge guide you back to the collection."
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 justify-center pt-10">
          <Link href="/collections" className="btn-luxe">
            Discover Collections
          </Link>
          <Link href="/" className="btn-luxe-outline border-obsidian/20 hover:bg-obsidian hover:text-pearl">
            Return to House
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
