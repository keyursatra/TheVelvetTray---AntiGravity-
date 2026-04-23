'use client';

import { motion } from 'framer-motion';
import { ShoppingBag, Trash2, Plus, Minus, ArrowRight, ShieldCheck, Truck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, subtotal } = useCart();

  const shipping = 500;
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-pearl flex flex-col items-center justify-center p-6 pt-32">
        <div className="w-24 h-24 rounded-full bg-gold/10 flex items-center justify-center mb-10">
          <ShoppingBag className="w-10 h-10 text-gold" />
        </div>
        <h2 className="text-5xl font-serif mb-6 italic">Your Tray is <span className="not-italic text-gold">Empty.</span></h2>
        <p className="text-text-secondary text-lg mb-12 font-light max-w-md text-center italic">
          "A gift unchosen is a story untold. Explore our heritage collections and find the perfect appreciation."
        </p>
        <Link href="/collections" className="btn-luxe">Begin Curation</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pearl pt-40 pb-40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-24 items-start">
          {/* Cart Items List */}
          <div className="flex-grow space-y-12">
            <div className="border-b border-border pb-10">
              <span className="text-gold uppercase tracking-[0.5em] text-[10px] font-bold block mb-4">Your Selection</span>
              <h1 className="text-6xl font-serif italic text-obsidian">The Gifting Tray.</h1>
            </div>

            <div className="space-y-12">
              {items.map((item) => (
                <motion.div 
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col md:flex-row gap-10 items-center bg-white p-8 rounded-[3rem] border border-border/50 shadow-sm"
                >
                  <div className="relative w-40 h-40 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>

                  <div className="flex-grow space-y-4 text-center md:text-left">
                    <div className="space-y-1">
                      <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-gold">{item.tag}</span>
                      <h3 className="text-3xl font-serif text-obsidian italic">{item.name}</h3>
                    </div>
                    <p className="text-lg text-text-secondary font-light">₹{item.price.toLocaleString()}</p>
                  </div>

                  <div className="flex items-center gap-8 px-8 border-x border-border/50">
                    <button onClick={() => updateQuantity(item.id, -1)} className="p-2 hover:bg-gold/10 rounded-full transition-all">
                      <Minus className="w-4 h-4 text-obsidian" />
                    </button>
                    <span className="text-xl font-serif text-obsidian w-6 text-center">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)} className="p-2 hover:bg-gold/10 rounded-full transition-all">
                      <Plus className="w-4 h-4 text-obsidian" />
                    </button>
                  </div>

                  <div className="text-center md:text-right min-w-[120px]">
                    <p className="text-xl font-serif text-obsidian mb-4">₹{(item.price * item.quantity).toLocaleString()}</p>
                    <button onClick={() => removeFromCart(item.id)} className="text-[10px] uppercase tracking-[0.3em] font-bold text-crimson/60 hover:text-crimson flex items-center gap-2 mx-auto md:ml-auto">
                      <Trash2 className="w-3.5 h-3.5" /> Remove
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-[450px] space-y-12">
            <div className="bg-obsidian text-pearl p-12 rounded-[4rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -translate-x-10 -translate-y-10" />
              
              <h2 className="text-4xl font-serif mb-12 italic text-gold">Summary</h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex justify-between text-pearl/60 font-light italic">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-pearl/60 font-light italic">
                  <span>Concierge Shipping</span>
                  <span>₹{shipping.toLocaleString()}</span>
                </div>
                <div className="h-[1px] bg-pearl/10 my-8" />
                <div className="flex justify-between text-2xl font-serif text-gold">
                  <span>Total</span>
                  <span>₹{total.toLocaleString()}</span>
                </div>
              </div>

              <Link href="/checkout" className="btn-luxe w-full py-6 flex items-center justify-center gap-4 bg-gold text-white border-gold hover:bg-white hover:text-obsidian transition-all">
                Proceed to Checkout <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="mt-12 space-y-6">
                <div className="flex items-center gap-4 text-pearl/40 text-[9px] uppercase tracking-[0.3em]">
                  <Truck className="w-4 h-4 text-gold" /> Secure White-Glove Delivery
                </div>
                <div className="flex items-center gap-4 text-pearl/40 text-[9px] uppercase tracking-[0.3em]">
                  <ShieldCheck className="w-4 h-4 text-gold" /> Authenticity Guaranteed
                </div>
              </div>
            </div>

            <div className="p-10 border border-gold/20 rounded-[3rem] bg-gold/5 text-center">
              <p className="text-sm italic text-text-secondary font-light">
                "Curating for an enterprise or a grand celebration? Our concierge offers volume-tiered pricing and bespoke branding."
              </p>
              <Link href="/corporate" className="text-[10px] uppercase tracking-[0.4em] font-bold text-gold mt-6 block hover:underline">
                Explore Corporate Tiers
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
