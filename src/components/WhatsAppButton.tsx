import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useState } from "react";

const PHONE = "919030399718";

const WhatsAppButton = () => {
  const [open, setOpen] = useState(false);

  const link = (msg: string) =>
    `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0 }}
          className="flex flex-col gap-2"
        >
          <a
            href={link("Hi Bean Board, I'd like to place an order.")}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cafe-cream text-cafe-espresso px-5 py-3 text-xs tracking-widest uppercase font-body font-bold rounded-full shadow-xl hover:bg-cafe-gold transition-colors"
          >
            Order on WhatsApp
          </a>
          <a
            href={link("Hi Bean Board, I'd like to reserve a table.")}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cafe-cream text-cafe-espresso px-5 py-3 text-xs tracking-widest uppercase font-body font-bold rounded-full shadow-xl hover:bg-cafe-gold transition-colors"
          >
            Reserve Table
          </a>
        </motion.div>
      )}

      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        animate={{ boxShadow: ["0 0 0 0 rgba(37,211,102,0.5)", "0 0 0 18px rgba(37,211,102,0)"] }}
        transition={{ boxShadow: { repeat: Infinity, duration: 1.8 } }}
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl"
        style={{ backgroundColor: "#25D366" }}
      >
        <MessageCircle size={26} fill="white" strokeWidth={0} />
      </motion.button>
    </div>
  );
};

export default WhatsAppButton;
