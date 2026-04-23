'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Globe, Instagram, Twitter, Loader2 } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-pearl pt-40 pb-40 selection:bg-gold selection:text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-start">
          
          {/* Left Side: Contact Information */}
          <div className="space-y-20">
            <div className="space-y-8">
              <span className="text-gold uppercase tracking-[0.6em] text-[10px] font-bold block mb-4">Connect with the House</span>
              <h1 className="text-8xl font-serif text-obsidian italic leading-[0.85]">Let's <br /> <span className="not-italic">Talk.</span></h1>
              <p className="text-xl text-text-secondary font-light max-w-md italic leading-relaxed">
                "Whether it's a bespoke commission or a curious inquiry about provenance, our concierge is at your service."
              </p>
            </div>

            <div className="space-y-12">
              <div className="flex items-start gap-8 group">
                <div className="w-16 h-16 rounded-full bg-white border border-border/50 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all duration-700 shadow-sm">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-text-secondary font-bold">Email the Studio</span>
                  <p className="text-2xl font-serif italic text-obsidian">concierge@thevelvettray.com</p>
                </div>
              </div>

              <div className="flex items-start gap-8 group">
                <div className="w-16 h-16 rounded-full bg-white border border-border/50 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all duration-700 shadow-sm">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-text-secondary font-bold">Visit the House</span>
                  <p className="text-2xl font-serif italic text-obsidian">Heritage House, MG Road, <br />South Mumbai - 400001</p>
                </div>
              </div>
            </div>

            <div className="pt-20 border-t border-border/50">
               <span className="text-[9px] uppercase tracking-[0.5em] text-text-secondary font-bold block mb-8">Follow our Narrative</span>
               <div className="flex gap-10">
                  <Instagram className="w-6 h-6 text-obsidian hover:text-gold transition-colors cursor-pointer" />
                  <Twitter className="w-6 h-6 text-obsidian hover:text-gold transition-colors cursor-pointer" />
                  <Globe className="w-6 h-6 text-obsidian hover:text-gold transition-colors cursor-pointer" />
               </div>
            </div>
          </div>

          {/* Right Side: Inquiry Form */}
          <div className="relative">
            <div className="absolute inset-0 border border-gold/10 -translate-x-10 translate-y-10 rounded-[4rem]" />
            <form 
              onSubmit={handleSubmit}
              className="relative z-10 bg-white p-12 md:p-20 rounded-[4rem] shadow-2xl border border-border/50 space-y-12"
            >
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20 space-y-8"
                >
                  <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center mx-auto text-gold">
                    <Send className="w-8 h-8" />
                  </div>
                  <h3 className="text-4xl font-serif italic text-obsidian">Message Received.</h3>
                  <p className="text-lg text-text-secondary font-light max-w-sm mx-auto italic leading-relaxed">
                    "Our concierge will review your inquiry and respond with the attention it deserves within 4 business hours."
                  </p>
                  <button onClick={() => setIsSuccess(false)} className="btn-luxe py-4 rounded-full">New Message</button>
                </motion.div>
              ) : (
                <>
                  <div className="space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-2">
                        <label className="text-[9px] uppercase tracking-[0.4em] text-text-secondary font-bold">Your Name</label>
                        <input required className="w-full bg-transparent border-b border-border py-4 focus:border-gold outline-none transition-all placeholder:text-border/40 font-light" placeholder="Vikram Seth" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] uppercase tracking-[0.4em] text-text-secondary font-bold">Email Address</label>
                        <input required type="email" className="w-full bg-transparent border-b border-border py-4 focus:border-gold outline-none transition-all placeholder:text-border/40 font-light" placeholder="vikram@house.com" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[9px] uppercase tracking-[0.4em] text-text-secondary font-bold">Subject</label>
                      <select className="w-full bg-transparent border-b border-border py-4 focus:border-gold outline-none transition-all font-light appearance-none cursor-pointer">
                        <option>General Inquiry</option>
                        <option>Bespoke Commission</option>
                        <option>Artisan Collaboration</option>
                        <option>Press & Media</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[9px] uppercase tracking-[0.4em] text-text-secondary font-bold">Message</label>
                      <textarea required rows={4} className="w-full bg-transparent border-b border-border py-4 focus:border-gold outline-none transition-all placeholder:text-border/40 font-light resize-none" placeholder="How can we elevate your appreciation?" />
                    </div>
                  </div>

                  <button 
                    disabled={isSubmitting}
                    className="btn-luxe w-full py-6 rounded-full flex items-center justify-center gap-4 group"
                  >
                    {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : (
                      <>
                        <Send className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                        <span>Dispatch Message</span>
                      </>
                    )}
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
