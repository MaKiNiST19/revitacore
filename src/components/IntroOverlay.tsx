'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function IntroOverlay() {
  const [started, setStarted] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {!started && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: '-10%_scale_0.9' }}
          transition={{ duration: 1.2, ease: [0.83, 0, 0.17, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#F4F4F2] text-[#111]"
          onClick={() => setStarted(true)}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="group cursor-pointer flex flex-col items-center"
          >
            <div className="w-20 h-20 rounded-full border border-black/10 flex items-center justify-center mb-8 relative overflow-hidden transition-transform duration-700 ease-in-out group-hover:scale-110 group-hover:bg-[#111] group-hover:text-white">
              <span className="text-[10px] font-bold uppercase tracking-widest absolute z-10">Başla</span>
              <div className="absolute inset-0 bg-[#FF6A3D] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out -z-0" />
            </div>
            <p className="uppercase tracking-[0.4em] text-[10px] font-bold opacity-40">Revitacore Deneyimi</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
