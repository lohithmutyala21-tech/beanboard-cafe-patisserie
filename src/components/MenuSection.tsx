import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import rockyRoad from "@/assets/menu-rocky-road.jpg";
import redVelvet from "@/assets/menu-red-velvet.jpg";
import hotChocolate from "@/assets/menu-hot-chocolate.jpg";
import pasta from "@/assets/menu-pasta.jpg";
import cappuccino from "@/assets/cafe-cup.jpeg";
import brownie from "@/assets/menu-brownie.jpg";

const menuItems = [
  { name: "Rocky Road Pastry", tag: "Popular", image: rockyRoad },
  { name: "Red Velvet Cake", tag: "Signature", image: redVelvet },
  { name: "Belgian Hot Chocolate", tag: "Favourite", image: hotChocolate },
  { name: "Chicken Alfredo Pasta", tag: "Chef's Pick", image: pasta },
  { name: "Cappuccino", tag: "Classic", image: cappuccino },
  { name: "Brownie with Ice Cream", tag: "Indulgent", image: brownie },
];

const MenuSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="menu" ref={ref} className="section-padding bg-cafe-espresso">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-cafe-gold tracking-[0.3em] uppercase text-xs font-body mb-4">
            Our Offerings
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-cafe-cream mb-6">
            Menu Highlights
          </h2>
          <div className="w-16 h-[2px] bg-cafe-gold mx-auto mb-8" />
          <p className="font-body text-cafe-cream/60 max-w-xl mx-auto">
            From artisan pastries to savoury delights — each dish is crafted to delight.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="group relative overflow-hidden rounded-sm cursor-pointer"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-cafe-espresso/90 via-cafe-espresso/20 to-transparent flex flex-col justify-end p-6">
                <span className="text-cafe-gold text-[10px] tracking-[0.25em] uppercase font-body mb-1">
                  {item.tag}
                </span>
                <h3 className="font-display text-lg text-cafe-cream group-hover:text-cafe-gold transition-colors duration-300">
                  {item.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="text-center mt-10 text-cafe-cream/40 text-sm font-body"
        >
          ₹200 – ₹400 per person · Dine-in · Takeaway · No-contact Delivery
        </motion.p>
      </div>
    </section>
  );
};

export default MenuSection;
