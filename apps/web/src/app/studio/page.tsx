'use client';

import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { MapPin, ArrowRight, ShieldCheck, User, Globe, Award, Sparkles, ScrollText, History, Gem } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef } from 'react';

const regions = [
  {
    id: 'kutch',
    name: 'Kutch, Gujarat',
    craft: 'Heritage Ajrakh',
    description: 'A 16-step hand-block printing process practiced by the Khatri lineage. Every piece is dyed with minerals, roots, and indigo, echoing 400 years of desert wisdom.',
    image: '/collections/c-suite.jpg',
    coordinates: { x: '25%', y: '55%' }
  },
  {
    id: 'kashmir',
    name: 'Srinagar, Kashmir',
    craft: 'Royal Pashmina',
    description: 'Sourced from the high plateaus of Ladakh, our Pashmina is hand-spun and woven on traditional looms, resulting in a texture that is unparalleled in softness.',
    image: '/products/emerald-executive.jpg',
    coordinates: { x: '35%', y: '15%' }
  },
  {
    id: 'wayanad',
    name: 'Wayanad, Kerala',
    craft: 'Bamboo Origin',
    description: 'Working with tribal cooperatives in the Western Ghats, we source single-origin bamboo and spices, ensuring every hamper carries the fresh scent of the rain-fed hills.',
    image: '/products/rajwadi-mandala.jpg',
    coordinates: { x: '45%', y: '85%' }
  },
  {
    id: 'moradabad',
    name: 'Moradabad, UP',
    craft: 'Lineage Brass',
    description: 'Signature sand-casted brass items, hand-polished to a sovereign gold finish by 5th-generation master craftsmen in the city of metals.',
    image: '/products/midnight-premier.jpg',
    coordinates: { x: '55%', y: '35%' }
  }
];

const pillars = [
  {
    title: "Provenance",
    icon: <Globe className="w-6 h-6" />,
    description: "Every item in our collection is traced back to its geographical origin and the hands that shaped it."
  },
  {
    title: "Preservation",
    icon: <History className="w-6 h-6" />,
    description: "We invest in heritage clusters to ensure traditional crafts survive the era of mass production."
  },
  {
    title: "Perfection",
    icon: <Gem className="w-6 h-6" />,
    description: "Our quality standards are uncompromising, blending age-old techniques with modern luxury aesthetics."
  }
];

export default function StudioPage() {
  const [selectedRegion, setSelectedRegion] = useState(regions[0]);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

  return (
    <div ref={containerRef} className="min-h-screen bg-pearl selection:bg-gold selection:text-white">
      {/* Cinematic Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ scale: heroScale, opacity: heroOpacity }} className="absolute inset-0 z-0">
          <Image
            src="/studio/hero.png"
            alt="The Studio Workspace"
            fill
            className="object-cover brightness-[0.8]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-pearl" />
        </motion.div>

        <div className="relative z-10 text-center px-6">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-gold uppercase tracking-[0.8em] text-[10px] font-bold mb-8 block"
          >
            Where Heritage Meets Modernity
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-8xl md:text-[12rem] font-serif text-white mb-12 leading-[0.8] italic"
          >
            The <br /> <span className="not-italic">Studio.</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="h-16 w-[1px] bg-white/30" />
            <span className="text-[8px] uppercase tracking-[0.5em] text-white/60">Scroll to Reveal the Story</span>
          </motion.div>
        </div>
      </section>

      {/* The Vision Section (About) */}
      <section className="py-40 bg-pearl relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <span className="text-gold uppercase tracking-[0.5em] text-[10px] font-bold mb-8 block">Our Narrative</span>
              <h2 className="text-7xl font-serif text-obsidian mb-12 leading-tight">
                A Curated <span className="italic">Legacy</span> of Indian Craft.
              </h2>
              <div className="space-y-8 text-xl text-text-secondary font-light leading-relaxed">
                <p>
                  The Velvet Tray was born from a simple observation: in the world of luxury gifting, the soul of the craft was often lost in mass production.
                </p>
                <p>
                  We set out to create a sanctuary where heritage craftsmanship meets contemporary design. Our studio is not just a workspace; it is a repository of stories, a bridge between generations of artisans and the global connoisseur.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <Image 
                src="/studio/craft.png"
                alt="Artisan detail"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-white/20 inset-8 rounded-[2rem]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Pillars */}
      <section className="py-40 bg-obsidian text-pearl">
        <div className="max-w-7xl mx-auto px-10">
          <div className="text-center mb-32">
            <span className="text-gold uppercase tracking-[0.5em] text-[10px] font-bold mb-6 block">Our Ethos</span>
            <h2 className="text-6xl font-serif italic text-white">Three Pillars of Excellence</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-pearl/5 rounded-full flex items-center justify-center mx-auto mb-10 border border-pearl/10 group-hover:border-gold/50 group-hover:bg-gold/10 transition-all duration-700">
                  <div className="text-gold">{pillar.icon}</div>
                </div>
                <h3 className="text-3xl font-serif mb-6 text-white group-hover:text-gold transition-colors">{pillar.title}</h3>
                <p className="text-pearl/50 font-light leading-relaxed px-4">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Atlas (Refined Map) */}
      <section className="py-40 bg-pearl overflow-hidden">
        <div className="max-w-7xl mx-auto px-10 mb-32 flex justify-between items-end">
          <div>
            <span className="text-gold uppercase tracking-[0.5em] text-[10px] font-bold mb-6 block">The Sourcing Atlas</span>
            <h2 className="text-7xl font-serif text-obsidian italic leading-tight">Mapping Provenance.</h2>
          </div>
          <p className="text-xl text-text-secondary font-light max-w-md italic mb-4">
            "We don't just source; we document the lineage of craft across the Indian subcontinent."
          </p>
        </div>

        <div className="max-w-screen-2xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-[4rem] border border-border/50 shadow-[0_50px_100px_rgba(0,0,0,0.08)] bg-white overflow-hidden">
          {/* Left: The Dark Atlas Map */}
          <div className="relative aspect-square lg:aspect-auto bg-obsidian p-20 flex flex-col justify-between overflow-hidden">
             <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--color-gold)_1px,_transparent_1px)] bg-[length:40px_40px]" />
             
             <div className="relative z-10">
                <span className="text-gold/40 uppercase tracking-[0.5em] text-[8px] font-bold block mb-4">Atlas Mapping / v.2026</span>
                <h3 className="text-4xl font-serif text-pearl italic">Heritage Clusters</h3>
             </div>

             <div className="absolute inset-0 flex items-center justify-center grayscale opacity-10 pointer-events-none scale-150">
                 <Globe className="w-full h-full text-gold" strokeWidth={0.5} />
             </div>

             {regions.map((region) => (
               <motion.button
                 key={region.id}
                 onClick={() => setSelectedRegion(region)}
                 className={`absolute z-20 group transition-all duration-1000 ${selectedRegion.id === region.id ? 'scale-125' : 'hover:scale-110'}`}
                 style={{ left: region.coordinates.x, top: region.coordinates.y }}
               >
                 <div className={`w-3 h-3 rounded-full border border-white shadow-2xl transition-all duration-700 ${selectedRegion.id === region.id ? 'bg-gold ring-8 ring-gold/10' : 'bg-pearl group-hover:bg-gold'}`} />
                 <motion.div 
                   initial={false}
                   animate={{ opacity: selectedRegion.id === region.id ? 1 : 0 }}
                   className="absolute left-6 top-1/2 -translate-y-1/2 px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/10 text-[9px] uppercase tracking-[0.4em] text-pearl whitespace-nowrap"
                 >
                   {region.name}
                 </motion.div>
               </motion.button>
             ))}

             <div className="relative z-10 flex gap-4 mt-auto">
                {regions.map((region) => (
                  <button 
                    key={region.id}
                    onClick={() => setSelectedRegion(region)}
                    className={`w-12 h-1 text-[8px] uppercase tracking-widest transition-all duration-700 ${selectedRegion.id === region.id ? 'bg-gold' : 'bg-pearl/10 hover:bg-gold/30'}`}
                  />
                ))}
             </div>
          </div>

          {/* Right: The Artisan Dossier */}
          <div className="p-24 flex flex-col justify-center bg-white">
             <AnimatePresence mode="wait">
                <motion.div
                  key={selectedRegion.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.8, ease: "circOut" }}
                  className="space-y-12"
                >
                   <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group">
                      <Image 
                        src={selectedRegion.image} 
                        alt={selectedRegion.craft} 
                        fill 
                        className="object-cover transition-transform duration-[3s] group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-obsidian/10 mix-blend-multiply" />
                      <div className="absolute top-8 left-8">
                         <div className="bg-white/90 backdrop-blur-md px-6 py-2 rounded-full flex items-center gap-3 border border-border shadow-xl">
                            <Award className="w-4 h-4 text-gold" />
                            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-obsidian">Artisan Verified</span>
                         </div>
                      </div>
                   </div>

                   <div>
                      <h2 className="text-7xl font-serif text-obsidian mb-6 leading-tight">{selectedRegion.craft}</h2>
                      <p className="text-xl text-text-secondary font-light leading-relaxed mb-12 italic">
                        {selectedRegion.description}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-16 pt-12 border-t border-border">
                         <div className="space-y-2">
                            <span className="text-[9px] uppercase tracking-[0.5em] text-text-secondary font-bold">Lineage Status</span>
                            <span className="text-lg font-serif italic text-gold">Master Craftsmen</span>
                         </div>
                         <div className="space-y-2">
                            <span className="text-[9px] uppercase tracking-[0.5em] text-text-secondary font-bold">Material Sourcing</span>
                            <span className="text-lg font-serif italic text-gold">Direct & Ethical</span>
                         </div>
                      </div>
                   </div>

                   <div className="flex gap-8 items-center pt-8">
                      <Link href="/collections" className="btn-luxe">Experience the Craft</Link>
                      <button className="text-[10px] uppercase tracking-[0.4em] text-text-secondary hover:text-gold transition-colors font-bold flex items-center gap-3 group">
                         View Dossier <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                      </button>
                   </div>
                </motion.div>
             </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Preservation Section */}
      <section className="py-40 bg-obsidian text-pearl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-crimson/5 skew-x-[-12deg] translate-x-32" />
        <div className="max-w-7xl mx-auto px-10 text-center relative z-10">
          <Award className="w-16 h-16 text-gold mx-auto mb-10" />
          <h2 className="text-6xl font-serif mb-12 italic">"Preservation over Profit."</h2>
          <p className="text-2xl text-pearl/60 max-w-4xl mx-auto font-light leading-relaxed">
            Every Velvet Tray hamper is more than a gift; it is a direct investment in the cultural preservation of India's heritage clusters. We partner with artisans to ensure their crafts remain viable in the modern world.
          </p>
          <div className="mt-20 flex justify-center gap-12">
            <div className="flex flex-col items-center">
              <span className="text-5xl font-serif text-gold mb-2">12+</span>
              <span className="text-[10px] uppercase tracking-[0.3em] opacity-50">Craft Clusters</span>
            </div>
            <div className="w-[1px] h-20 bg-pearl/10" />
            <div className="flex flex-col items-center">
              <span className="text-5xl font-serif text-gold mb-2">250+</span>
              <span className="text-[10px] uppercase tracking-[0.3em] opacity-50">Artisan Families</span>
            </div>
            <div className="w-[1px] h-20 bg-pearl/10" />
            <div className="flex flex-col items-center">
              <span className="text-5xl font-serif text-gold mb-2">100%</span>
              <span className="text-[10px] uppercase tracking-[0.3em] opacity-50">Fair Trade</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 bg-pearl">
        <div className="max-w-7xl mx-auto px-10 text-center">
          <h2 className="text-7xl font-serif text-obsidian mb-12 leading-tight">
            Ready to Discover <br /> <span className="italic">Origin?</span>
          </h2>
          <Link href="/collections" className="btn-luxe">
            Explore Collections
          </Link>
        </div>
      </section>
    </div>
  );
}

function ShoppingBag({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>
    </svg>
  );
}
