import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import storefront from "@/assets/cafe-storefront.jpeg";
import interiorBar from "@/assets/cafe-interior-bar.jpeg";
import lounge from "@/assets/cafe-lounge.jpeg";
import counter from "@/assets/cafe-counter.jpeg";
import cup from "@/assets/cafe-cup.jpeg";

const photos = [
  { src: storefront, alt: "Bean Board Cafe storefront", className: "md:col-span-2 md:row-span-2 aspect-[4/3]" },
  { src: counter, alt: "Espresso counter with Tempesta machine", className: "aspect-square" },
  { src: cup, alt: "Bean Board signature cappuccino", className: "aspect-square" },
  { src: interiorBar, alt: "Cafe interior bar seating", className: "aspect-[4/3]" },
  { src: lounge, alt: "Warmly lit lounge area", className: "aspect-[4/3]" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" ref={ref} className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-accent tracking-[0.3em] uppercase text-xs font-body mb-4">
            Step Inside
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6">
            A Glimpse of Bean Board
          </h2>
          <div className="gold-divider" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {photos.map((p, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className={`relative overflow-hidden rounded-sm group cursor-pointer ${p.className}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-cafe-espresso/0 group-hover:bg-cafe-espresso/20 transition-colors duration-500" />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
