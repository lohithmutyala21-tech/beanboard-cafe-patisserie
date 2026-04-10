import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={ref} className="section-padding bg-cafe-espresso">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-cafe-gold tracking-[0.3em] uppercase text-xs font-body mb-4">
            Find Us
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-cafe-cream mb-6">
            Visit Bean Board
          </h2>
          <div className="w-16 h-[2px] bg-cafe-gold mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex gap-4">
              <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center border border-cafe-gold/30 rounded-sm">
                <MapPin size={18} className="text-cafe-gold" />
              </div>
              <div>
                <h4 className="font-display text-cafe-cream mb-1">Address</h4>
                <p className="font-body text-cafe-cream/60 text-sm leading-relaxed">
                  No. 67-15-32A, Satya Complex,<br />
                  Nagamallithota Junction, Pithapuram Road,<br />
                  Kakinada, Andhra Pradesh 533003
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center border border-cafe-gold/30 rounded-sm">
                <Phone size={18} className="text-cafe-gold" />
              </div>
              <div>
                <h4 className="font-display text-cafe-cream mb-1">Phone</h4>
                <a href="tel:09030399718" className="font-body text-cafe-cream/60 text-sm hover:text-cafe-gold transition-colors">
                  090303 99718
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center border border-cafe-gold/30 rounded-sm">
                <Clock size={18} className="text-cafe-gold" />
              </div>
              <div>
                <h4 className="font-display text-cafe-cream mb-1">Hours</h4>
                <p className="font-body text-cafe-cream/60 text-sm">
                  Open Daily · Until 10:50 PM
                </p>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Bean+Board+Cafe+Kakinada"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-cafe-gold text-cafe-espresso px-6 py-3 text-sm tracking-widest uppercase font-body font-bold hover:bg-cafe-gold-light transition-colors duration-300"
            >
              <Navigation size={14} />
              Get Directions
            </a>
          </motion.div>

          {/* Map embed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="w-full aspect-[4/3] rounded-sm overflow-hidden border border-cafe-gold/10"
          >
            <iframe
              title="Bean Board Cafe Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.123!2d82.2350!3d16.9650!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDU3JzU0LjAiTiA4MsKwMTQnMDYuMCJF!5e0!3m2!1sen!2sin!4v1690000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
