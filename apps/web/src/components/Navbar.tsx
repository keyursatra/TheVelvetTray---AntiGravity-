'use client';

import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { ShoppingBag, User, Menu, X, Search } from 'lucide-react';
import Link from 'next/link';
import { useState, useRef } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <nav className="fixed w-full z-[100] transition-all duration-700 pt-6 px-6">
      <div 
        className={`max-w-7xl mx-auto px-10 h-20 flex items-center justify-between rounded-full border transition-all duration-700 ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-2xl border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.08)]' 
            : 'bg-transparent border-transparent'
        }`}
      >
        {/* Left: Navigation Links */}
        <div className="hidden md:flex gap-10 items-center">
          <Link href="/studio" className="text-[10px] tracking-[0.4em] uppercase hover:text-gold transition-all font-medium text-obsidian/60 hover:text-obsidian">The Studio</Link>
          <Link href="/collections" className="text-[10px] tracking-[0.4em] uppercase hover:text-gold transition-all font-medium text-obsidian/60 hover:text-obsidian">Collections</Link>
        </div>

        {/* Center: Brand Identity */}
        <Link href="/" className="flex flex-col items-center group">
          <span className={`text-2xl font-serif tracking-[0.3em] uppercase transition-colors duration-700 ${isScrolled ? 'text-obsidian' : 'text-white md:text-obsidian'}`}>The Velvet Tray</span>
          <div className="h-[1px] w-0 group-hover:w-12 bg-gold transition-all duration-700 mt-1" />
        </Link>

        {/* Right: Actions */}
        <div className="hidden md:flex gap-10 items-center text-obsidian">
          <Link href="/corporate" className="text-[10px] tracking-[0.4em] uppercase hover:text-gold transition-all font-medium text-obsidian/60 hover:text-obsidian">Enterprise</Link>
          <div className="flex items-center gap-6 border-l border-border/50 pl-10">
            <Link href="/login" className="p-2 hover:bg-gold/10 rounded-full transition-all">
              <User className={`w-4 h-4 transition-colors ${isScrolled ? 'text-obsidian' : 'text-white md:text-obsidian'}`} />
            </Link>
            <div className="relative p-2 hover:bg-gold/10 rounded-full transition-all cursor-pointer">
              <ShoppingBag className={`w-4 h-4 transition-colors ${isScrolled ? 'text-obsidian' : 'text-white md:text-obsidian'}`} />
              <span className="absolute top-0 right-0 bg-gold text-white text-[7px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold shadow-lg">0</span>
            </div>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-obsidian"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={false}
        animate={isMobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        className={`md:hidden absolute top-28 left-6 right-6 bg-white rounded-3xl p-10 shadow-2xl border border-border/50 ${isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        <div className="flex flex-col gap-8 text-center">
          <Link href="/studio" className="text-xs tracking-[0.5em] uppercase font-bold text-obsidian" onClick={() => setIsMobileMenuOpen(false)}>The Studio</Link>
          <Link href="/collections" className="text-xs tracking-[0.5em] uppercase font-bold text-obsidian" onClick={() => setIsMobileMenuOpen(false)}>Collections</Link>
          <Link href="/corporate" className="text-xs tracking-[0.5em] uppercase font-bold text-obsidian" onClick={() => setIsMobileMenuOpen(false)}>Enterprise</Link>
          <div className="h-[1px] bg-border/50 w-full" />
          <Link href="/login" className="btn-luxe py-4" onClick={() => setIsMobileMenuOpen(false)}>Access House</Link>
        </div>
      </motion.div>
    </nav>
  );
}
