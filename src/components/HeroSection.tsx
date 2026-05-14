import { motion } from "framer-motion";
import { MapPin, Clock, Star } from "lucide-react";
import heroBg from "@/assets/cafe-storefront.jpeg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Bean Board Cafe interior"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cafe-espresso/70 via-cafe-espresso/50 to-cafe-espresso/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-cafe-gold tracking-[0.3em] uppercase text-xs md:text-sm font-body mb-6"
        >
          Cafe & Patisserie
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl text-cafe-cream font-medium leading-tight text-shadow-hero"
        >
          Bean Board
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-24 h-[1px] bg-cafe-gold mx-auto my-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="font-body text-cafe-cream/70 text-base md:text-lg max-w-xl mx-auto leading-relaxed"
        >
          Where artisan coffee meets freshly baked patisserie.<br />
          A haven for flavour lovers in the heart of Kakinada.
        </motion.p>

        {/* Info badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-10"
        >
          <div className="flex items-center gap-2 text-cafe-cream/60 text-sm">
            <Star size={14} className="text-cafe-gold" />
            <span>4.2 · 196 Reviews</span>
          </div>
          <div className="w-[1px] h-4 bg-cafe-cream/20 hidden md:block" />
          <div className="flex items-center gap-2 text-cafe-cream/60 text-sm">
            <Clock size={14} className="text-cafe-gold" />
            <span>Open · Closes 10:50 PM</span>
          </div>
          <div className="w-[1px] h-4 bg-cafe-cream/20 hidden md:block" />
          <div className="flex items-center gap-2 text-cafe-cream/60 text-sm">
            <MapPin size={14} className="text-cafe-gold" />
            <span>Kakinada, AP</span>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#menu"
            className="bg-cafe-gold text-cafe-espresso px-8 py-3 text-sm tracking-widest uppercase font-body font-bold hover:bg-cafe-gold-light transition-colors duration-300"
          >
            Explore Signature Menu
          </a>
          <a
            href="#contact"
            className="border border-cafe-cream/30 text-cafe-cream px-8 py-3 text-sm tracking-widest uppercase font-body hover:border-cafe-gold hover:text-cafe-gold transition-colors duration-300"
          >
            Visit Our Cafe
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-[1px] h-8 bg-cafe-gold/40"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
