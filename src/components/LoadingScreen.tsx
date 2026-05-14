import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] bg-cafe-espresso flex flex-col items-center justify-center"
        >
          {/* Steaming cup */}
          <div className="relative flex flex-col items-center">
            {/* Steam */}
            <div className="flex gap-2 mb-2 h-10">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: [0, 0.8, 0], y: [10, -20, -40] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.6,
                    delay: i * 0.25,
                    ease: "easeOut",
                  }}
                  className="block w-[3px] h-8 rounded-full bg-cafe-gold/60"
                />
              ))}
            </div>
            {/* Cup */}
            <div className="relative">
              <div className="w-16 h-12 rounded-b-3xl rounded-t-md border-2 border-cafe-gold bg-cafe-roast" />
              <div className="absolute right-[-14px] top-2 w-5 h-7 border-2 border-cafe-gold rounded-r-full" />
              <div className="w-20 h-1.5 bg-cafe-gold mx-auto mt-1 rounded-full" />
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="font-display text-cafe-cream text-xl mt-6 tracking-wide"
            >
              Bean Board<span className="text-cafe-gold">.</span>
            </motion.p>
            <p className="text-cafe-cream/40 text-[10px] tracking-[0.3em] uppercase mt-1">
              Brewing experience
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
