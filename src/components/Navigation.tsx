'use client';
import { motion } from 'framer-motion';

export default function Navigation() {
  return (
    <motion.div 
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 p-1 bg-white/60 backdrop-blur-xl border border-black/5 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.05)]"
    >
      {['Ürünler', 'Sertifikalar', 'Bilgi Bankası', 'İletişim'].map((item) => (
        <button 
          key={item}
          className="px-6 py-2.5 text-[11px] font-bold uppercase tracking-[0.15em] text-black/70 rounded-full hover:bg-black hover:text-white transition-all duration-300"
        >
          {item}
        </button>
      ))}
    </motion.div>
  );
}
