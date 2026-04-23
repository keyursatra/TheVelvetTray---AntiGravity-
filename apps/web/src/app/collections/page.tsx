'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Filter, LayoutGrid, List, ShoppingBag, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';

const collections = [
  {
    id: 'c-suite',
    name: 'The C-Suite Collection',
    description: 'Curated exclusivity for the modern leader. Featuring hand-embossed journals, single-origin treats, and premium brass accessories.',
    image: '/collections/c-suite.jpg',
    tag: 'Executive',
    price: 'Starting from ₹15,000'
  },
  {
    id: 'heritage',
    name: 'The Heritage Trunk',
    description: 'A deep dive into Indian provenance. Bidri work, Pashmina, and Ajrakh stories, curated for the true connoisseur of craft.',
    image: '/collections/heritage.jpg',
    tag: 'Artisanal',
    price: 'Starting from ₹22,000'
  },
  {
    id: 'sustainable',
    name: 'The Eco-Conscious Set',
    description: 'Sustainability meets luxury. Recycled materials, artisanal crafts, and ethical sourcing without compromise.',
    image: '/collections/sustainable.jpg',
    tag: 'Sustainable',
    price: 'Starting from ₹9,500'
  },
  {
    id: 'festival',
    name: 'Festival Traditions',
    description: 'Celebrating the spirit of India. Vibrant textiles, traditional craftsmanship, and gourmet heritage flavors.',
    image: '/collections/festival.jpg',
    tag: 'Festive',
    price: 'Starting from ₹12,000'
  }
];

export default function CollectionsPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

  const filteredCollections = activeFilter === 'All' 
    ? collections 
    : collections.filter(c => c.tag === activeFilter);

  return (
    <div ref={containerRef} className="min-h-screen bg-pearl selection:bg-gold selection:text-white">
      {/* Cinematic Hero */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ scale: heroScale, opacity: heroOpacity }} className="absolute inset-0 z-0">
          <Image
            src="/collections/hero.png"
            alt="The Gallery"
            fill
            className="object-cover brightness-75"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-pearl" />
        </motion.div>

        <div className="relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gold uppercase tracking-[0.8em] text-[10px] font-bold mb-8 block"
          >
            The Gallery
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-8xl md:text-9xl font-serif text-white mb-12 italic"
          >
            Curated <span className="not-italic">Collections.</span>
          </motion.h1>
        </div>
      </section>

      {/* Minimalist Filter Bar */}
      <div className="sticky top-28 z-40 px-6 mb-20">
        <div className="max-w-4xl mx-auto flex justify-center items-center bg-white/80 backdrop-blur-xl border border-border/50 py-4 px-10 rounded-full shadow-xl">
          <div className="flex gap-12">
            {['All', 'Executive', 'Sustainable', 'Artisanal', 'Festive'].map(f => (
              <button 
                key={f} 
                onClick={() => setActiveFilter(f)}
                className={`text-[9px] uppercase tracking-[0.4em] transition-all duration-500 relative ${activeFilter === f ? 'text-gold font-bold' : 'text-text-secondary hover:text-obsidian'}`}
              >
                {f}
                {activeFilter === f && (
                  <motion.div layoutId="activeFilter" className="absolute -bottom-2 left-0 right-0 h-[1px] bg-gold" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Collections Grid */}
      <section className="pb-40 px-6">
        <div className="max-w-7xl mx-auto space-y-40">
          {filteredCollections.map((col, i) => (
            <motion.div 
              key={col.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: "circOut" }}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-20 items-center group`}
            >
              <div className="flex-1 relative aspect-[4/3] w-full overflow-hidden rounded-[3rem] shadow-2xl">
                <Image 
                  src={col.image} 
                  alt={col.name} 
                  fill 
                  className="object-cover transition-transform duration-[3s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-obsidian/10 group-hover:bg-transparent transition-colors duration-1000" />
                <div className="absolute top-10 left-10">
                  <span className="px-6 py-3 bg-white/90 backdrop-blur-md text-[9px] uppercase tracking-[0.3em] font-bold text-obsidian rounded-full border border-border shadow-xl">
                    {col.tag}
                  </span>
                </div>
              </div>

              <div className="flex-1 space-y-10 max-w-xl">
                <span className="text-gold font-serif italic text-2xl block">{col.price}</span>
                <h2 className="text-7xl font-serif text-obsidian leading-tight group-hover:text-gold transition-colors duration-700">{col.name}</h2>
                <p className="text-xl text-text-secondary font-light leading-relaxed italic">
                  "{col.description}"
                </p>
                <div className="pt-10">
                  <Link href={`/collections/${col.id}`} className="btn-luxe">
                    Explore Tiers
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bespoke Invitation */}
      <section className="py-40 bg-obsidian text-pearl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/5 skew-x-[-12deg] translate-x-20" />
        <div className="max-w-5xl mx-auto px-10 text-center relative z-10">
          <h2 className="text-6xl font-serif mb-12 leading-tight italic">
            Seeking Something <span className="not-italic text-gold">Bespoke?</span>
          </h2>
          <p className="text-2xl text-pearl/50 font-light leading-relaxed mb-16">
            Our Studio specializes in crafting custom hampers tailored specifically to your unique requirements, regional preferences, and brand heritage.
          </p>
          <Link href="/corporate" className="btn-luxe-outline border-pearl text-pearl hover:bg-pearl hover:text-obsidian">
            Request Custom Curation
          </Link>
        </div>
      </section>
    </div>
  );
}
