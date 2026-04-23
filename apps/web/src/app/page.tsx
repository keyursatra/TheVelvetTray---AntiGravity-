'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Search, ShoppingBag, User, MapPin, Gift, Building2, Globe } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

const hampers = [
  {
    id: 'emerald-executive',
    name: 'The Emerald Executive',
    price: '₹18,500',
    origin: 'Multiple Regions',
    items: ['Copper Bottle', 'Leather Journal', 'Brass Pen'],
    tier: 'Signature Collection',
    image: '/products/rajwadi-mandala.jpg'
  },
  {
    id: 'rajwadi-mandala',
    name: 'The Rajwadi Mandala',
    price: '₹12,500',
    origin: 'Rajasthan',
    items: ['Mandala Box', 'Gourmet Nuts', 'Preserves'],
    tier: 'Royal Selection',
    image: '/products/midnight-premier.jpg'
  },
  {
    id: 'midnight-premier',
    name: 'The Midnight Premier',
    price: '₹9,500',
    origin: 'Urban Craft',
    items: ['Navy Velvet Box', 'Gold Ribbon', 'Custom Card'],
    tier: 'Modern Classic',
    image: '/products/emerald-executive.jpg'
  }
];

export default function HomePage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);

  return (
    <div ref={containerRef} className="min-h-screen flex flex-col selection:bg-gold selection:text-white">
      {/* Cinematic Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ scale: heroScale }} className="absolute inset-0 z-0">
          <Image
            src="/hero-main-new.jpg"
            alt="The VelvetRay Signature"
            fill
            className="object-cover brightness-75 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-pearl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, letterSpacing: '0.1em' }}
          animate={{ opacity: 1, letterSpacing: '0.3em' }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative z-10 text-center"
        >
          <span className="text-gold uppercase tracking-[0.6em] text-[10px] font-bold mb-8 block">Curation of Origin</span>
          <h1 className="text-8xl md:text-[10rem] font-serif text-white mb-12 leading-[0.85] italic">
            Velvet <br /> <span className="not-italic">Tray.</span>
          </h1>
          <div className="flex gap-8 justify-center mt-12">
            <Link href="/collections" className="btn-luxe">
              Discover Collections
            </Link>
            <Link href="/studio" className="btn-luxe-outline border-white text-white hover:bg-white hover:text-obsidian">
              The Atlas
            </Link>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
          <div className="h-16 w-[1px] bg-gradient-to-b from-gold/50 to-transparent" />
          <span className="text-[8px] uppercase tracking-[0.4em] text-obsidian/40">Scroll to Explore</span>
        </div>
      </section>

      {/* Signature Showcase */}
      <section className="py-40 bg-pearl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-32">
            <h2 className="text-7xl font-serif mb-6">Signature <span className="italic">Collections</span></h2>
            <div className="w-24 h-[1px] bg-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {hampers.map((hamper, i) => (
              <motion.div
                key={hamper.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link href={`/products/${hamper.id}`}>
                  <div className="relative aspect-[3/4] mb-10 overflow-hidden bg-[#EAE8E5] rounded-3xl">
                    <Image
                      src={hamper.image}
                      alt={hamper.name}
                      fill
                      className="object-cover transition-transform duration-[2s] scale-105 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-obsidian/10 group-hover:bg-transparent transition-colors duration-700" />
                    <div className="absolute bottom-6 left-6 z-10">
                      <span className="px-4 py-2 bg-white/90 backdrop-blur-md text-[9px] uppercase tracking-[0.3em] font-bold text-obsidian rounded-full">
                        {hamper.tier}
                      </span>
                    </div>
                  </div>
                  <div className="text-center px-4">
                    <h3 className="text-3xl font-serif mb-2 group-hover:text-gold transition-colors">{hamper.name}</h3>
                    <p className="text-[10px] uppercase tracking-[0.4em] text-text-secondary mb-6">{hamper.origin}</p>
                    <span className="text-lg font-light tracking-widest text-obsidian/70">{hamper.price}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Sourcing Ethos - Obsidian Section */}
      <section className="py-40 bg-obsidian text-pearl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/5 skew-x-[-12deg] translate-x-20" />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative z-10">
            <span className="text-gold uppercase tracking-[0.5em] text-[10px] font-bold block mb-8">Direct Artisan Partnerships</span>
            <h2 className="text-7xl font-serif mb-10 leading-tight">Every tray is a <span className="italic text-gold">Masterpiece.</span></h2>
            <p className="text-xl text-pearl/60 font-light leading-relaxed mb-12 max-w-xl">
              We skip the middlemen to partner directly with heritage artisans in the Western Ghats, Kutch, and Kashmir. This isn't just gifting; it's a direct investment in cultural preservation.
            </p>
            <div className="grid grid-cols-2 gap-12 border-t border-pearl/10 pt-12">
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-gold">
                  <Globe className="w-6 h-6" />
                  <span className="text-3xl font-serif italic">Traceable</span>
                </div>
                <p className="text-xs uppercase tracking-widest opacity-50">Sourced from 12 heritage clusters.</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-gold">
                  <ShieldCheck className="w-6 h-6" />
                  <span className="text-3xl font-serif italic">Ethical</span>
                </div>
                <p className="text-xs uppercase tracking-widest opacity-50">100% Fair-trade guaranteed.</p>
              </div>
            </div>
          </div>

          <div className="relative aspect-square">
            <div className="absolute inset-0 border border-gold/30 translate-x-8 translate-y-8 rounded-[3rem]" />
            <Image
              src="/collections/c-suite.jpg"
              alt="Artisan Craftsmanship"
              fill
              className="object-cover rounded-[3rem]"
            />
          </div>
        </div>
      </section>

      {/* Bespoke CTA */}
      <section className="py-40 bg-pearl">
        <div className="max-w-7xl mx-auto px-10 text-center">
          <h2 className="text-7xl font-serif text-obsidian mb-12 leading-tight">
            Seeking Something <br /> <span className="italic">Unique?</span>
          </h2>
          <Link href="/contact" className="btn-luxe">
            Inquire for Bespoke Curation
          </Link>
        </div>
      </section>
    </div>
  );
}

function ShieldCheck({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
