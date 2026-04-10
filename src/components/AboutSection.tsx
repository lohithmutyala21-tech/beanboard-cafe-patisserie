import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Coffee, Cake, Utensils } from "lucide-react";

const features = [
  { icon: Coffee, title: "Artisan Coffee", desc: "Carefully sourced beans, expertly brewed to perfection every single time." },
  { icon: Cake, title: "Fresh Patisserie", desc: "Baked fresh daily — from croissants to signature red velvet cakes." },
  { icon: Utensils, title: "Dine-in & Takeaway", desc: "Enjoy in our cozy space or take the experience home with you." },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-accent tracking-[0.3em] uppercase text-xs font-body mb-4">Our Story</p>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6">
            Crafted with Passion
          </h2>
          <div className="gold-divider mb-8" />
          <p className="font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Nestled at Nagamallithota Junction in Kakinada, Bean Board Cafe & Patisserie 
            is your neighbourhood escape for handcrafted coffee, freshly baked treats, and 
            warm conversations. Every cup and every bite tells a story of quality.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="text-center p-8 bg-card rounded-sm border border-border hover:border-accent/30 transition-colors duration-300 group"
            >
              <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center border border-accent/30 rounded-sm group-hover:bg-accent/10 transition-colors">
                <f.icon size={24} className="text-accent" />
              </div>
              <h3 className="font-display text-lg text-foreground mb-3">{f.title}</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
