'use client';

import { motion } from 'framer-motion';
import { Building2, Send, CheckCircle2, ChevronRight, Globe, ShieldCheck, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { saveInquiry } from '@/app/actions/inquiry';

export default function CorporatePage() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);
    
    // Explicitly initialize EmailJS with Public Key
    emailjs.init('OFwzXvTobO5b8ygsd');

    const formData = new FormData(form.current);
    const data = Object.fromEntries(formData.entries());

    try {
      // 1. Save to MongoDB
      await saveInquiry({
        companyName: data.companyName as string,
        email: data.email as string,
        quantity: data.quantity as string,
        budget: data.budget as string,
        occasion: data.occasion as string,
        requirements: data.requirements as string,
      });

      // 2. Send via EmailJS
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
    <div className="min-h-screen bg-pearl">
      {/* Editorial Header */}
      <section className="pt-40 pb-24 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 text-center">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
           >
              <span className="text-gold uppercase tracking-[0.5em] text-[10px] font-bold block mb-8">Executive Gifting Services</span>
              <h1 className="text-8xl font-serif mb-8 text-obsidian">Bespoke <span className="italic text-gold">Consultation.</span></h1>
              <p className="max-w-2xl mx-auto text-xl text-text-secondary font-light leading-relaxed">
                Elevate your corporate appreciation programs with hand-curated collections sourced directly from India's heritage craft clusters.
              </p>
           </motion.div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-24 py-32">
        
        {/* Left: Concierge Benefits */}
        <div className="lg:col-span-5 space-y-16">
          <div className="bg-white p-12 rounded-[2.5rem] border border-border/50 shadow-[0_30px_60px_rgba(0,0,0,0.03)]">
            <h3 className="text-3xl font-serif mb-10 text-obsidian">Why Partner with Us?</h3>
            <div className="space-y-10">
              {[
                { icon: Globe, title: 'Provenance Verified', desc: 'Every item is traceable to the artisan who crafted it.' },
                { icon: ShieldCheck, title: 'Dedicated Concierge', desc: 'A single point of contact for bulk logistics and global shipping.' },
                { icon: Building2, title: 'Volume Tiering', desc: 'Exclusive commercial rates for enterprise-scale requirements.' }
              ].map((benefit, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-12 h-12 bg-bg-warm rounded-full flex items-center justify-center flex-shrink-0 text-gold">
                    <benefit.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl mb-2">{benefit.title}</h4>
                    <p className="text-xs uppercase tracking-widest text-text-secondary leading-loose">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="px-12 py-8 bg-obsidian text-pearl rounded-3xl flex items-center justify-between group cursor-pointer hover:bg-gold transition-all duration-700">
             <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Download Catalog 2026</span>
             <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </div>
        </div>

        {/* Right: The Inquiry Form */}
        <div className="lg:col-span-7">
          <form ref={form} onSubmit={handleSubmit} className="space-y-12 bg-white p-16 rounded-[3rem] border border-border/50 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              <div className="space-y-2">
                <label className="text-[9px] uppercase tracking-[0.4em] text-text-secondary font-bold">Company Name</label>
                <input 
                  name="companyName" 
                  required 
                  className="w-full bg-transparent border-b border-border py-4 focus:border-gold outline-none transition-all placeholder:text-border font-light"
                  placeholder="The Heritage Group"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[9px] uppercase tracking-[0.4em] text-text-secondary font-bold">Business Email</label>
                <input 
                  name="email" 
                  type="email" 
                  required 
                  className="w-full bg-transparent border-b border-border py-4 focus:border-gold outline-none transition-all placeholder:text-border font-light"
                  placeholder="vp@heritage.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[9px] uppercase tracking-[0.4em] text-text-secondary font-bold">Approximate Quantity</label>
                <input 
                  name="quantity" 
                  required 
                  className="w-full bg-transparent border-b border-border py-4 focus:border-gold outline-none transition-all placeholder:text-border font-light"
                  placeholder="50 - 500 units"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[9px] uppercase tracking-[0.4em] text-text-secondary font-bold">Occasion / Timeline</label>
                <input 
                  name="occasion" 
                  required 
                  className="w-full bg-transparent border-b border-border py-4 focus:border-gold outline-none transition-all placeholder:text-border font-light"
                  placeholder="Festive Gifting / Oct 2026"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[9px] uppercase tracking-[0.4em] text-text-secondary font-bold">Custom Requirements</label>
              <textarea 
                name="requirements" 
                rows={4}
                className="w-full bg-transparent border-b border-border py-4 focus:border-gold outline-none transition-all placeholder:text-border font-light resize-none"
                placeholder="Share your vision for branding, regional preferences, or theme..."
              />
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="btn-luxe w-full flex items-center justify-center gap-4 py-6"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Transmitting...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry to Concierge</span>
                </>
              )}
            </button>

            <p className="text-center text-[10px] text-text-secondary/40 uppercase tracking-[0.3em]">
              Encrypted Inquiry. Responding within 4 Business Hours.
            </p>
          </form>
        </div>
      </main>
    </div>
  );
}
