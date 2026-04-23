'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useEffect } from 'react';

export default function CheckoutPage() {
  const { clearCart } = useCart();

  useEffect(() => {
    // Simulate successful checkout by clearing cart
    clearCart();
  }, []);

  return (
    <div className="min-h-screen bg-pearl flex items-center justify-center p-6 pt-32 pb-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl w-full bg-white rounded-[4rem] p-20 text-center shadow-[0_50px_100px_rgba(0,0,0,0.05)] border border-border/50"
      >
        <div className="w-24 h-24 rounded-full bg-gold/10 text-gold flex items-center justify-center mx-auto mb-12">
          <CheckCircle2 className="w-12 h-12" />
        </div>
        
        <span className="text-gold uppercase tracking-[0.5em] text-[10px] font-bold block mb-8">Order Confirmed</span>
        <h1 className="text-7xl font-serif text-obsidian mb-12 italic leading-tight">
          Your Appreciation <br /> is being <span className="not-italic text-gold">Manifested.</span>
        </h1>
        
        <p className="text-xl text-text-secondary font-light leading-relaxed mb-16 max-w-xl mx-auto italic">
          "The heritage of India is now on its way to you. Our concierge will reach out within 2 hours to confirm white-glove delivery details."
        </p>

        <div className="flex flex-col md:flex-row gap-8 justify-center">
          <Link href="/collections" className="btn-luxe">Continue Gifting</Link>
          <Link href="/" className="flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] font-bold text-text-secondary hover:text-gold transition-all px-10 py-6">
            Return to House <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
