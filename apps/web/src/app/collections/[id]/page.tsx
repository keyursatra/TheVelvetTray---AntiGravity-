'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, ShoppingBag, User, Globe, ShieldCheck, Award, Sparkles, ChevronRight, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useRef } from 'react';

const collectionData: any = {
  'sustainable': {
    name: 'The Eco-Conscious Set',
    tag: 'Sustainable',
    heroImage: '/collections/sustainable.jpg',
    description: 'Sustainability meets luxury. Recycled materials, artisanal crafts, and ethical sourcing without compromise. Every piece in this collection is designed to leave a minimal footprint while making a maximal impression.',
    products: [
      {
        id: 'bamboo-origin',
        name: 'The Bamboo Origin',
        price: '₹9,500',
        origin: 'Wayanad, Kerala',
        image: '/products/sustainable-1.png',
        items: ['Single-origin Bamboo Box', 'Artisanal Copper Bottle', 'Organic Spices', 'Assam Tea'],
        story: 'Sourced from tribal cooperatives in the Western Ghats, this hamper brings the scent of rain-fed hills to your home.'
      },
      {
        id: 'eco-luxe-set',
        name: 'The Eco-Luxe Ritual',
        price: '₹12,500',
        origin: 'Multiple Regions',
        image: '/products/sustainable-2.png',
        items: ['Recycled Cotton Textiles', 'Handcrafted Clay Holders', 'Organic Wildflower Honey', 'Wood Tray'],
        story: 'A celebration of earth-friendly materials. Featuring hand-spun textiles and raw, organic honey from protected forest clusters.'
      }
    ]
  },
  'c-suite': {
    name: 'The C-Suite Collection',
    tag: 'Executive',
    heroImage: '/collections/c-suite.jpg',
    description: 'Curated exclusivity for the modern leader. Featuring hand-embossed journals, single-origin treats, and premium brass accessories that command respect and appreciation.',
    products: [
      {
        id: 'executive-noir',
        name: 'The Executive Noir',
        price: '₹18,500',
        origin: 'Urban Craft',
        image: '/products/executive-1.png',
        items: ['Leather-bound Journal', 'High-end Fountain Pen', 'Gourmet Chocolates', 'Obsidian Packaging'],
        story: 'The ultimate tool for the visionaries. Every detail, from the gold-nibbed pen to the dark cocoa, is selected for excellence.'
      },
      {
        id: 'emerald-executive',
        name: 'The Emerald Executive',
        price: '₹15,000',
        origin: 'Rajasthan',
        image: '/products/rajwadi-mandala.jpg',
        items: ['Copper Bottle', 'Leather Journal', 'Brass Pen', 'Signature Tray'],
        story: 'A fusion of royal Rajasthan craftsmanship and corporate functionality.'
      }
    ]
  },
  'heritage': {
    name: 'The Heritage Trunk',
    tag: 'Artisanal',
    heroImage: '/collections/heritage.jpg',
    description: 'A deep dive into Indian provenance. Bidri work, Pashmina, and Ajrakh stories, curated for the true connoisseur of craft and history.',
    products: [
      {
        id: 'rajwadi-mandala',
        name: 'The Rajwadi Mandala',
        price: '₹22,500',
        origin: 'Rajasthan',
        image: '/products/midnight-premier.jpg',
        items: ['Mandala Box', 'Gourmet Nuts', 'Preserves', 'Hand-painted Art'],
        story: 'Inspired by the geometric precision of Rajasthani mandalas, this hamper is a visual and culinary masterpiece.'
      }
    ]
  },
  'festival': {
    name: 'Festival Traditions',
    tag: 'Festive',
    heroImage: '/collections/festival.jpg',
    description: 'Celebrating the spirit of India. Vibrant textiles, traditional craftsmanship, and gourmet heritage flavors that bring festive joy to every doorstep.',
    products: [
      {
        id: 'midnight-premier',
        name: 'The Midnight Premier',
        price: '₹12,500',
        origin: 'Modern Classic',
        image: '/products/emerald-executive.jpg',
        items: ['Navy Velvet Box', 'Gold Ribbon', 'Custom Card', 'Assorted Delights'],
        story: 'A modern take on festive traditions, blending deep velvet textures with classic golden accents.'
      }
    ]
  }
};

export default function CollectionDetailPage() {
  const { id } = useParams();
  const collection = collectionData[id as string] || collectionData['sustainable'];
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

  return (
    <div ref={containerRef} className="min-h-screen bg-pearl selection:bg-gold selection:text-white">
      {/* Fixed Navbar */}
      <nav className="fixed w-full z-50 pt-6 px-6">
        <div className="max-w-7xl mx-auto px-10 h-20 flex items-center justify-between bg-white/70 backdrop-blur-2xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.05)] rounded-full">
          <div className="flex gap-10 items-center">
            <Link href="/collections" className="flex items-center gap-2 text-[10px] tracking-[0.4em] uppercase text-obsidian hover:text-gold transition-all">
              <ArrowLeft className="w-3 h-3" /> Back
            </Link>
          </div>

          <Link href="/" className="flex flex-col items-center">
            <span className="text-2xl font-serif tracking-[0.3em] uppercase text-obsidian">The Velvet Tray</span>
            <div className="h-[1px] w-12 bg-gold mt-1" />
          </Link>

          <div className="flex gap-10 items-center text-obsidian">
            <div className="flex items-center gap-6">
              <User className="w-4 h-4 hover:text-gold transition-colors" />
              <div className="relative">
                <ShoppingBag className="w-4 h-4 hover:text-gold transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Cinematic Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ scale: heroScale, opacity: heroOpacity }} className="absolute inset-0 z-0">
          <Image
            src={collection.heroImage}
            alt={collection.name}
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-pearl" />
        </motion.div>

        <div className="relative z-10 text-center px-6">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gold uppercase tracking-[0.8em] text-[10px] font-bold mb-8 block"
          >
            {collection.tag} Collection
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-7xl md:text-9xl font-serif text-white mb-12 italic"
          >
            {collection.name}.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="max-w-2xl mx-auto text-white/70 font-light leading-relaxed italic text-lg"
          >
            "{collection.description}"
          </motion.p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-32">
            <span className="text-gold uppercase tracking-[0.5em] text-[10px] font-bold mb-6 block">Tiered Selection</span>
            <h2 className="text-6xl font-serif italic text-obsidian">Particular Products</h2>
          </div>

          <div className="grid grid-cols-1 gap-40">
            {collection.products.map((product: any, i: number) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-24 items-start`}
              >
                {/* Product Image */}
                <div className="flex-1 w-full group">
                  <div className="relative aspect-square rounded-[4rem] overflow-hidden shadow-2xl">
                    <Image 
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-[3s] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-obsidian/5 group-hover:bg-transparent transition-colors duration-1000" />
                  </div>
                </div>

                {/* Product Details */}
                <div className="flex-1 space-y-12 py-10">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-gold">
                       <MapPin className="w-4 h-4" />
                       <span className="text-[10px] uppercase tracking-[0.4em] font-bold">{product.origin}</span>
                    </div>
                    <h3 className="text-6xl font-serif text-obsidian italic leading-tight">{product.name}</h3>
                    <span className="text-3xl font-serif text-gold block">{product.price}</span>
                  </div>

                  <p className="text-xl text-text-secondary font-light leading-relaxed">
                    {product.story}
                  </p>

                  <div className="space-y-6">
                    <span className="text-[10px] uppercase tracking-[0.5em] text-obsidian font-bold block mb-4">Included in Hamper</span>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {product.items.map((item: string) => (
                        <li key={item} className="flex items-center gap-3 text-text-secondary font-light">
                          <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-10 flex gap-8">
                    <button className="btn-luxe">Add to Tray</button>
                    <button className="flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] font-bold text-text-secondary hover:text-gold transition-all">
                      Custom Inquiry <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Markers */}
      <section className="py-32 bg-obsidian text-pearl border-y border-gold/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          <div className="space-y-6">
            <Globe className="w-10 h-10 text-gold mx-auto" />
            <h4 className="text-2xl font-serif italic">Provenance Verified</h4>
            <p className="text-xs uppercase tracking-widest opacity-50">Traceable to heritage clusters.</p>
          </div>
          <div className="space-y-6">
            <ShieldCheck className="w-10 h-10 text-gold mx-auto" />
            <h4 className="text-2xl font-serif italic">Direct to Artisan</h4>
            <p className="text-xs uppercase tracking-widest opacity-50">100% Ethical & Fair Trade.</p>
          </div>
          <div className="space-y-6">
            <Award className="w-10 h-10 text-gold mx-auto" />
            <h4 className="text-2xl font-serif italic">Museum Quality</h4>
            <p className="text-xs uppercase tracking-widest opacity-50">Uncompromising luxury standards.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-pearl py-24">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
          <span className="text-3xl font-serif tracking-[0.3em] uppercase text-obsidian mb-12">The Velvet Tray</span>
          <div className="flex gap-16 text-[10px] uppercase tracking-[0.4em] text-text-secondary mb-16">
            <Link href="/collections" className="hover:text-gold transition-colors">Collections</Link>
            <Link href="/corporate" className="hover:text-gold transition-colors">Enterprise</Link>
            <Link href="/studio" className="hover:text-gold transition-colors">Studio</Link>
            <Link href="/contact" className="hover:text-gold transition-colors">Inquiry</Link>
          </div>
          <p className="text-[10px] text-text-secondary/40 uppercase tracking-[0.5em] text-center">
            © 2026 The Velvet Tray. <br /> Curation of Origin & Excellence.
          </p>
        </div>
      </footer>
    </div>
  );
}
