import { Coffee } from "lucide-react";

const Footer = () => (
  <footer className="bg-cafe-roast py-12 px-6">
    <div className="max-w-6xl mx-auto text-center">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Coffee size={18} className="text-cafe-gold" />
        <span className="font-display text-lg text-cafe-cream tracking-wide">
          Bean Board<span className="text-cafe-gold">.</span>
        </span>
      </div>
      <p className="font-body text-cafe-cream/40 text-xs tracking-widest uppercase">
        Cafe & Patisserie · Kakinada, Andhra Pradesh
      </p>
      <div className="w-12 h-[1px] bg-cafe-gold/20 mx-auto my-6" />
      <p className="font-body text-cafe-cream/30 text-xs">
        © {new Date().getFullYear()} Bean Board Cafe & Patisserie. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
