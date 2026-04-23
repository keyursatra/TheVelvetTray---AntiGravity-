'use client';

import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-pearl py-24 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-20">
          {/* Brand & Mission */}
          <div className="col-span-1 md:col-span-2 space-y-8">
            <Link href="/" className="flex flex-col">
              <span className="text-3xl font-serif tracking-[0.3em] uppercase text-obsidian">The Velvet Tray</span>
              <div className="h-[1px] w-16 bg-gold mt-2" />
            </Link>
            <p className="text-lg text-text-secondary font-light italic leading-relaxed max-w-sm">
              "A sanctuary where heritage craftsmanship meets contemporary design. We curate stories, not just hampers."
            </p>
            <div className="flex gap-6">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <Link key={i} href="#" className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center hover:bg-gold hover:text-white hover:border-gold transition-all duration-500">
                  <Icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <span className="text-[10px] uppercase tracking-[0.5em] text-obsidian font-bold">House Navigation</span>
            <ul className="space-y-4">
              <li><Link href="/studio" className="text-sm text-text-secondary hover:text-gold transition-colors font-light">The Studio Atlas</Link></li>
              <li><Link href="/collections" className="text-sm text-text-secondary hover:text-gold transition-colors font-light">Bespoke Collections</Link></li>
              <li><Link href="/corporate" className="text-sm text-text-secondary hover:text-gold transition-colors font-light">Enterprise Concierge</Link></li>
              <li><Link href="/about" className="text-sm text-text-secondary hover:text-gold transition-colors font-light">Our Provenance</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-8">
            <span className="text-[10px] uppercase tracking-[0.5em] text-obsidian font-bold">Inquiries</span>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <Mail className="w-4 h-4 text-gold flex-shrink-0 mt-1" />
                <span className="text-sm text-text-secondary font-light">curation@thevelvettray.com</span>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-1" />
                <span className="text-sm text-text-secondary font-light">Heritage House, MG Road, <br />South Mumbai - 400001</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] text-text-secondary/40 uppercase tracking-[0.5em]">
            © 2026 The Velvet Tray. Curation of Origin & Excellence.
          </p>
          <div className="flex gap-12 text-[9px] uppercase tracking-[0.4em] text-text-secondary/60">
            <Link href="/terms" className="hover:text-gold">Terms</Link>
            <Link href="/privacy" className="hover:text-gold">Privacy</Link>
            <Link href="/shipping" className="hover:text-gold">Shipping</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
