'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, ShoppingBag, MapPin, Award, ShieldCheck, Globe, Star, Minus, Plus, ChevronRight, Share2, Heart, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState, useRef } from 'react';
import { useCart } from '@/context/CartContext';

const productData: any = {
  'bamboo-origin': {
    id: 'bamboo-origin',
    name: 'The Bamboo Origin',
    price: 9500,
    origin: 'Wayanad, Kerala',
    image: '/products/sustainable-1.png',
    tag: 'Sustainable',
    items: [
      { name: 'Single-origin Bamboo Box', desc: 'Hand-woven by Wayanad artisans.' },
      { name: 'Artisanal Copper Bottle', desc: 'Sand-casted, 99.9% pure copper.' },
      { name: 'Organic Spices', desc: 'Cardamom and Smoked Paprika.' },
      { name: 'Assam Tea', desc: 'First flush, single estate.' }
    ],
    story: 'Sourced from tribal cooperatives in the Western Ghats, this hamper brings the scent of rain-fed hills to your home. Every element is chosen for its minimal ecological footprint and maximum cultural impact.',
    specifications: [
      { label: 'Weight', value: '2.4 kg' },
      { label: 'Dimensions', value: '14 x 10 x 6 in' },
      { label: 'Material', value: 'Natural Bamboo & Copper' }
    ]
  },
  'executive-noir': {
    id: 'executive-noir',
    name: 'The Executive Noir',
    price: 18500,
    origin: 'Urban Craft',
    image: '/products/executive-1.png',
    tag: 'Executive',
    items: [
      { name: 'Leather-bound Journal', desc: 'Italian calfskin, hand-stitched.' },
      { name: 'High-end Fountain Pen', desc: 'Gold nib, custom engraving available.' },
      { name: 'Gourmet Chocolates', desc: '70% Dark Cocoa, single origin.' },
      { name: 'Obsidian Packaging', desc: 'Soft-touch velvet finish.' }
    ],
    story: 'The ultimate tool for the visionaries. Every detail, from the gold-nibbed pen to the dark cocoa, is selected for excellence and command.',
    specifications: [
      { label: 'Weight', value: '3.1 kg' },
      { label: 'Dimensions', value: '16 x 12 x 5 in' },
      { label: 'Material', value: 'Premium Leather & Brass' }
    ]
  },
  'eco-luxe-set': {
    id: 'eco-luxe-set',
    name: 'The Eco-Luxe Ritual',
    price: 12500,
    origin: 'Multiple Regions',
    image: '/products/sustainable-2.png',
    tag: 'Sustainable',
    items: [
      { name: 'Recycled Cotton Textiles', desc: 'Hand-spun.' },
      { name: 'Handcrafted Clay Holders', desc: 'Terracotta craft.' },
      { name: 'Organic Wildflower Honey', desc: 'Forest sourced.' }
    ],
    story: 'A celebration of earth-friendly materials. Featuring hand-spun textiles and raw, organic honey from protected forest clusters.',
    specifications: []
  },
  'emerald-executive': {
    id: 'emerald-executive',
    name: 'The Emerald Executive',
    price: 15000,
    origin: 'Rajasthan',
    image: '/products/rajwadi-mandala.jpg',
    tag: 'Executive',
    items: [
      { name: 'Copper Bottle', desc: 'Hammered finish.' },
      { name: 'Leather Journal', desc: 'Embossed.' }
    ],
    story: 'A fusion of royal Rajasthan craftsmanship and corporate functionality.',
    specifications: []
  },
  'rajwadi-mandala': {
    id: 'rajwadi-mandala',
    name: 'The Rajwadi Mandala',
    price: 22500,
    origin: 'Rajasthan',
    image: '/products/midnight-premier.jpg',
    tag: 'Artisanal',
    items: [
      { name: 'Mandala Box', desc: 'Hand-painted.' },
      { name: 'Gourmet Nuts', desc: 'Premium selection.' }
    ],
    story: 'Inspired by the geometric precision of Rajasthani mandalas, this hamper is a visual and culinary masterpiece.',
    specifications: []
  },
  'midnight-premier': {
    id: 'midnight-premier',
    name: 'The Midnight Premier',
    price: 12500,
    origin: 'Modern Classic',
    image: '/products/emerald-executive.jpg',
    tag: 'Festive',
    items: [
      { name: 'Navy Velvet Box', desc: 'Premium texture.' },
      { name: 'Gold Ribbon', desc: 'Silk finish.' }
    ],
    story: 'A modern take on festive traditions, blending deep velvet textures with classic golden accents.',
    specifications: []
  }
};

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = productData[id as string] || productData['bamboo-origin'];
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useCart();
  const containerRef = useRef(null);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
      image: product.image,
      tag: product.tag
    });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 3000);
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-pearl pt-40 pb-40">
      <div className="max-w-7xl mx-auto px-6">
        <Link href="/collections" className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] font-bold text-text-secondary hover:text-gold transition-all mb-12">
          <ArrowLeft className="w-4 h-4" /> Back to Collections
        </Link>

        <div className="flex flex-col lg:flex-row gap-32 items-start">
          
          {/* Left Side: Product Imagery */}
          <div className="flex-1 w-full space-y-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative aspect-square rounded-[4rem] overflow-hidden shadow-2xl group"
            >
              <Image 
                src={product.image} 
                alt={product.name} 
                fill 
                className="object-cover transition-transform duration-[3s] group-hover:scale-110" 
              />
              <div className="absolute top-10 left-10">
                <span className="px-6 py-3 bg-white/90 backdrop-blur-md text-[9px] uppercase tracking-[0.3em] font-bold text-obsidian rounded-full border border-border shadow-xl">
                  {product.tag} Collection
                </span>
              </div>
              <button className="absolute top-10 right-10 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-obsidian hover:text-crimson transition-colors shadow-xl">
                <Heart className="w-5 h-5" />
              </button>
            </motion.div>

            <div className="grid grid-cols-4 gap-6">
               {[1,2,3,4].map((i) => (
                 <div key={i} className="relative aspect-square rounded-2xl overflow-hidden border border-border/50 opacity-60 hover:opacity-100 transition-opacity cursor-pointer shadow-sm">
                    <Image src={product.image} alt="Thumbnail" fill className="object-cover" />
                 </div>
               ))}
            </div>
          </div>

          {/* Right Side: Product Details */}
          <div className="flex-1 space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gold">
                <MapPin className="w-4 h-4" />
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold">{product.origin}</span>
              </div>
              <h1 className="text-7xl font-serif text-obsidian italic leading-tight">{product.name}</h1>
              <div className="flex items-center gap-6">
                 <span className="text-4xl font-serif text-gold">₹{product.price.toLocaleString()}</span>
                 <div className="h-6 w-[1px] bg-border/50" />
                 <div className="flex items-center gap-1">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />)}
                    <span className="text-[10px] uppercase tracking-widest text-text-secondary ml-2">(24 Reviews)</span>
                 </div>
              </div>
            </div>

            <p className="text-xl text-text-secondary font-light leading-relaxed italic border-l-2 border-gold/20 pl-8">
              "{product.story}"
            </p>

            {/* Included Items */}
            <div className="space-y-8">
              <span className="text-[10px] uppercase tracking-[0.5em] text-obsidian font-bold block">The Assembly</span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {product.items.map((item: any, i: number) => (
                  <div key={i} className="group p-6 bg-white rounded-3xl border border-border/50 hover:border-gold/30 transition-all shadow-sm">
                    <h4 className="font-serif text-lg text-obsidian group-hover:text-gold transition-colors">{item.name}</h4>
                    <p className="text-xs text-text-secondary font-light mt-1 uppercase tracking-widest opacity-60">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-10 space-y-8">
              <div className="flex items-center gap-12">
                <div className="flex items-center gap-8 bg-white px-8 py-4 rounded-full border border-border/50 shadow-sm">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))}><Minus className="w-4 h-4" /></button>
                  <span className="text-xl font-serif w-6 text-center">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)}><Plus className="w-4 h-4" /></button>
                </div>
                <button 
                  onClick={handleAddToCart}
                  className={`btn-luxe flex-grow py-6 rounded-full transition-all duration-500 flex items-center justify-center gap-3 ${isAdded ? 'bg-gold border-gold' : ''}`}
                >
                  {isAdded ? (
                    <><CheckCircle2 className="w-5 h-5" /> Added to Tray</>
                  ) : (
                    <>Add to Tray</>
                  )}
                </button>
              </div>

              <div className="flex gap-12">
                <button className="flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] font-bold text-text-secondary hover:text-gold transition-all">
                  <Share2 className="w-4 h-4" /> Share Detail
                </button>
                <button className="flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] font-bold text-text-secondary hover:text-gold transition-all">
                  <Award className="w-4 h-4" /> Artisan Dossier
                </button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="pt-12 grid grid-cols-2 gap-12 border-t border-border">
              <div className="flex items-center gap-4">
                <ShieldCheck className="w-8 h-8 text-gold/50" />
                <div>
                  <h5 className="text-[10px] uppercase tracking-widest font-bold">Provenance</h5>
                  <p className="text-[9px] text-text-secondary uppercase tracking-widest mt-0.5">Origin Verified</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Globe className="w-8 h-8 text-gold/50" />
                <div>
                  <h5 className="text-[10px] uppercase tracking-widest font-bold">Shipping</h5>
                  <p className="text-[9px] text-text-secondary uppercase tracking-widest mt-0.5">White-Glove Service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
