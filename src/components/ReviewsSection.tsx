import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    text: "Good coffee, freshly made cakes and great service and ambience.",
    author: "Verified Reviewer",
    rating: 5,
  },
  {
    text: "The Red Velvet Cake is absolutely divine. Best in Kakinada hands down!",
    author: "Food Enthusiast",
    rating: 5,
  },
  {
    text: "Cozy vibe, amazing cappuccino, and the brownie with ice cream is a must-try.",
    author: "Regular Customer",
    rating: 4,
  },
];

const ReviewsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="reviews" ref={ref} className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-accent tracking-[0.3em] uppercase text-xs font-body mb-4">
            What People Say
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6">
            Guest Reviews
          </h2>
          <div className="gold-divider mb-8" />
          <div className="flex items-center justify-center gap-3">
            <div className="flex gap-1">
              {[1, 2, 3, 4].map((s) => (
                <Star key={s} size={18} className="fill-accent text-accent" />
              ))}
              <Star size={18} className="text-accent fill-accent/40" />
            </div>
            <span className="font-display text-2xl text-foreground">4.2</span>
            <span className="text-muted-foreground text-sm font-body">/ 196 reviews</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="bg-card border border-border p-8 rounded-sm relative"
            >
              <Quote size={28} className="text-accent/20 absolute top-6 right-6" />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: r.rating }).map((_, s) => (
                  <Star key={s} size={14} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="font-body text-foreground/80 leading-relaxed mb-6 italic">
                "{r.text}"
              </p>
              <p className="font-body text-muted-foreground text-xs tracking-widest uppercase">
                — {r.author}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
