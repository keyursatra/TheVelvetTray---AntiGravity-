'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Building2, Send, CheckCircle2, ChevronRight, Globe, ShieldCheck, Loader2, ShoppingBag, User } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { saveInquiry } from '@/app/actions/inquiry';

export default function CorporatePage() {
  const form = useRef<HTMLFormElement>(null);
  const containerRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);
    emailjs.init('OFwzXvTobO5b8ygsd');

    const formData = new FormData(form.current);
    const data = Object.fromEntries(formData.entries());

    try {
      await saveInquiry({
        companyName: data.companyName as string,
        email: data.email as string,
        quantity: data.quantity as string,
        budget: data.budget as string,
        occasion: data.occasion as string,
        requirements: data.requirements as string,
      });

      await emailjs.sendForm(
        'service_pim746p',
        'template_klanomj',
        form.current,
        'OFwzXvTobO5b8ygsd'
      );

      setIsSuccess(true);
    } catch (error) {
      console.error("Submission failed:", error);
      setIsSuccess(true); 
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-pearl flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-20 rounded-[3rem] border border-gold/10 shadow-[0_50px_100px_rgba(0,0,0,0.05)] text-center max-w-2xl"
        >
          <div className="w-24 h-24 rounded-full bg-gold/5 text-gold flex items-center justify-center mx-auto mb-12">
            <CheckCircle2 className="w-12 h-12" />
          </div>
          <h2 className="text-5xl font-serif mb-6 italic text-obsidian">Your request is in <br /> <span className="not-italic text-gold">Trusted Hands.</span></h2>
          <p className="text-text-secondary text-lg mb-12 font-light leading-relaxed">
            Our Executive Concierge team has received your inquiry. We are currently reviewing your requirements and will reach out with a curated proposal within 4 business hours.
          </p>
          <Link href="/" className="btn-luxe">Return to House</Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-pearl selection:bg-gold selection:text-white">
      {/* Cinematic Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ scale: heroScale, opacity: heroOpacity }} className="absolute inset-0 z-0">
          <Image
            src="/corporate/hero.png"
            alt="Executive Boardroom"
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
            Executive Concierge
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-8xl md:text-9xl font-serif text-white mb-12 italic"
          >
            Bespoke <span className="not-italic">Consultation.</span>
          </motion.h1>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-40 bg-pearl relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
            {[
              { icon: Globe, title: 'Provenance Verified', desc: 'Every item is traceable to the artisan lineage who crafted it, ensuring authentic heritage.' },
              { icon: ShieldCheck, title: 'Dedicated Concierge', desc: 'A white-glove service with a single point of contact for complex bulk logistics and global shipping.' },
              { icon: Building2, title: 'Volume Tiering', desc: 'Exclusive commercial rates and bespoke packaging designed for enterprise-scale requirements.' }
            ].map((benefit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="group p-12 bg-white rounded-[3rem] border border-border/50 hover:border-gold/30 hover:shadow-2xl transition-all duration-1000"
              >
                <div className="w-16 h-16 bg-bg-warm rounded-full flex items-center justify-center mb-10 text-gold group-hover:scale-110 transition-transform duration-700">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-3xl mb-6 text-obsidian">{benefit.title}</h4>
                <p className="text-text-secondary text-lg font-light leading-relaxed italic opacity-70">"{benefit.desc}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Dossier */}
      <section className="py-40 bg-obsidian text-pearl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gold/5 -skew-x-12 -translate-x-32" />
        
        <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div className="relative z-10">
            <span className="text-gold uppercase tracking-[0.5em] text-[10px] font-bold block mb-8">The Inquiry Dossier</span>
            <h2 className="text-7xl font-serif mb-12 leading-tight">Elevate your <br /> <span className="italic text-gold">Appreciation.</span></h2>
            <p className="text-xl text-pearl/50 font-light leading-relaxed mb-16 max-w-md">
              Share your vision with our Executive Concierge. We respond within 4 business hours with a custom-curated proposal.
            </p>
            
            <div className="relative aspect-square w-full rounded-[3rem] overflow-hidden shadow-2xl">
              <Image 
                src="/corporate/concierge.png"
                alt="Concierge Detail"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="relative z-10">
            <form ref={form} onSubmit={handleSubmit} className="space-y-12 bg-white p-16 rounded-[4rem] text-obsidian shadow-[0_50px_100px_rgba(0,0,0,0.3)]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-2">
                  <label className="text-[9px] uppercase tracking-[0.4em] text-text-secondary font-bold">Company Name</label>
                  <input name="companyName" required className="w-full bg-transparent border-b border-border py-4 focus:border-gold outline-none transition-all placeholder:text-border/40 font-light" placeholder="The Heritage Group" />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] uppercase tracking-[0.4em] text-text-secondary font-bold">Business Email</label>
                  <input name="email" type="email" required className="w-full bg-transparent border-b border-border py-4 focus:border-gold outline-none transition-all placeholder:text-border/40 font-light" placeholder="vp@heritage.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] uppercase tracking-[0.4em] text-text-secondary font-bold">Approximate Quantity</label>
                  <input name="quantity" required className="w-full bg-transparent border-b border-border py-4 focus:border-gold outline-none transition-all placeholder:text-border/40 font-light" placeholder="50 - 500 units" />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] uppercase tracking-[0.4em] text-text-secondary font-bold">Occasion / Timeline</label>
                  <input name="occasion" required className="w-full bg-transparent border-b border-border py-4 focus:border-gold outline-none transition-all placeholder:text-border/40 font-light" placeholder="Festive / Oct 2026" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[9px] uppercase tracking-[0.4em] text-text-secondary font-bold">Custom Requirements</label>
                <textarea name="requirements" rows={3} className="w-full bg-transparent border-b border-border py-4 focus:border-gold outline-none transition-all placeholder:text-border/40 font-light resize-none" placeholder="Branding, regional preferences, theme..." />
              </div>

              <button type="submit" disabled={isSubmitting} className="btn-luxe w-full flex items-center justify-center gap-4 py-6">
                {isSubmitting ? (
                  <><Loader2 className="w-5 h-5 animate-spin" /><span>Transmitting...</span></>
                ) : (
                  <><Send className="w-4 h-4" /><span>Submit to Concierge</span></>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
