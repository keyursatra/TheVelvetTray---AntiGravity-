'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Filter, LayoutGrid, List } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const collections = [
  {
    id: 'c-suite',
    name: 'The C-Suite Collection',
    description: 'Curated exclusivity for the modern leader. Featuring hand-embossed journals and single-origin treats.',
    image: '/collections/c-suite.jpg',
    tag: 'Executive'
  },
  {
    id: 'sustainable',
    name: 'The Eco-Conscious Set',
    description: 'Sustainability meets luxury. Recycled materials, artisanal crafts, and ethical sourcing.',
    image: '/collections/sustainable.jpg',
    tag: 'Sustainable'
  },
  {
    id: 'heritage',
    name: 'The Heritage Trunk',
    description: 'A deep dive into Indian provenance. Bidri work, Pashmina, and Ajrakh stories.',
    image: '/collections/heritage.jpg',
    tag: 'Artisanal'
  },
  {
    id: 'festival',
    name: 'Festival Traditions',
    description: 'Celebrating the spirit of India. Vibrant textiles and traditional craftsmanship.',
    image: '/collections/festival.jpg',
    tag: 'Festive'
  }
];

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-bg-warm">
      {/* Editorial Header */}
      <section className="pt-32 pb-20 px-6 border-b border-border bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-crimson uppercase tracking-[0.4em] text-xs font-bold mb-6 block"
          >
            The Gallery
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif mb-8"
          >
            Curated <span className="italic font-serif">Collections</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed"
          >
            Every hamper is a deliberate assembly of stories, crafts, and flavors. Explore our signature tiers designed for every occasion.
          </motion.p>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="sticky top-0 z-30 bg-bg-warm/80 backdrop-blur-md border-b border-border py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-8">
            <button className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-crimson">
              <Filter className="w-3 h-3" /> Filter By
            </button>
            <div className="hidden md:flex gap-6">
              {['All', 'Executive', 'Sustainable', 'Artisanal', 'Festive'].map(f => (
                <button key={f} className="text-[10px] uppercase tracking-widest text-text-secondary hover:text-crimson transition-colors">{f}</button>
              ))}
            </div>
          </div>
          <div className="flex gap-4">
            <LayoutGrid className="w-4 h-4 text-crimson cursor-pointer" />
            <List className="w-4 h-4 text-text-secondary cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Collections Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            {collections.map((col, i) => (
              <motion.div 
                key={col.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="group"
              >
                <div className="relative aspect-[16/10] mb-8 overflow-hidden rounded-sm bg-bg-muted shadow-2xl shadow-black/5">
                  <Image 
                    src={col.image} 
                    alt={col.name} 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="text-[10px] uppercase tracking-[0.2em] bg-ivory text-text-primary px-4 py-2 border border-border/50">
                      {col.tag}
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div className="max-w-md">
                    <h3 className="text-3xl font-serif mb-4 group-hover:text-crimson transition-colors">{col.name}</h3>
                    <p className="text-text-secondary leading-relaxed mb-8">{col.description}</p>
                    <Link href={`/collections/${col.id}`} className="inline-flex items-center gap-3 text-xs uppercase tracking-widest text-crimson font-bold group/link">
                      Explore Collection <ArrowRight className="w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Inquiry Teaser */}
      <section className="py-24 bg-white border-t border-border">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl mb-8 leading-tight font-serif">Don't see what you're <br /><span className="italic">looking for?</span></h2>
          <p className="text-lg text-text-secondary mb-12">
            Our Studio can craft bespoke hampers tailored specifically to your brand's heritage and budget.
          </p>
          <Link href="/corporate" className="btn-primary">Request Custom Curation</Link>
        </div>
      </section>

      {/* Footer (Simplified) */}
      <footer className="py-20 bg-bg-muted border-t border-border">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Link href="/" className="text-xl font-serif tracking-[0.2em] uppercase text-crimson mb-8 block">The VelvetRay</Link>
          <p className="text-xs uppercase tracking-[0.4em] text-text-secondary">Provenance &bull; Curation &bull; Integrity</p>
        </div>
      </footer>
    </div>
  );
}
