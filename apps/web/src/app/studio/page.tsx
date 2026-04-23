'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowRight, ShieldCheck, User, Globe, Award } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

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

export default function StudioPage() {
  const [selectedRegion, setSelectedRegion] = useState(regions[0]);

  return (
    <div className="min-h-screen bg-pearl pb-40">
      {/* Editorial Header */}
      <section className="pt-48 pb-32">
        <div className="max-w-7xl mx-auto px-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <span className="text-gold uppercase tracking-[0.6em] text-[10px] font-bold block mb-10">Digital Museum of Provenance</span>
            <h1 className="text-9xl font-serif mb-12 italic text-obsidian leading-[0.8]">The <span className="not-italic">Studio.</span></h1>
            <p className="text-2xl text-text-secondary font-light leading-relaxed italic">
              "We don't just source; we document the lineage of craft."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Museum Atlas Interface */}
      <section className="max-w-screen-2xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-[4rem] border border-border/50 shadow-[0_50px_100px_rgba(0,0,0,0.08)] bg-white">
        
        {/* Left: The Dark Atlas Map */}
        <div className="relative aspect-square lg:aspect-auto bg-obsidian p-20 flex flex-col justify-between overflow-hidden">
           {/* Abstract Gold Grid */}
           <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--color-gold)_1px,_transparent_1px)] bg-[length:40px_40px]" />
           
           <div className="relative z-10">
              <span className="text-gold/40 uppercase tracking-[0.5em] text-[8px] font-bold block mb-4">Atlas Mapping / v.2026</span>
              <h3 className="text-4xl font-serif text-pearl italic">Heritage Clusters</h3>
           </div>

           {/* Stylized Map Point Visual */}
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
                          <span className="text-lg font-serif italic text-gold">4th Generation Masters</span>
                       </div>
                       <div className="space-y-2">
                          <span className="text-[9px] uppercase tracking-[0.5em] text-text-secondary font-bold">Material Sourcing</span>
                          <span className="text-lg font-serif italic text-gold">100% Direct to Artisan</span>
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
      </section>

      {/* Ethics Footer Section */}
      <section className="mt-60 max-w-7xl mx-auto px-6 text-center">
         <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="relative py-32 bg-white rounded-[4rem] border border-gold/10 overflow-hidden"
         >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-[120px]" />
            <Award className="w-16 h-16 text-gold mx-auto mb-10" />
            <h2 className="text-5xl font-serif mb-8 text-obsidian italic italic">"Preservation over Profit."</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto font-light leading-relaxed px-12">
               We believe the world has enough luxury, but not enough provenance. The Studio is our commitment to ensuring that the legacy of Indian craftsmanship survives the era of mass production. Every tray supports a lineage.
            </p>
         </motion.div>
      </section>
    </div>
  );
}
