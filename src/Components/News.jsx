import React from 'react';
import { motion } from 'framer-motion';

const News = () => {
  return (
    <section className="py-24 px-4 md:px-14 bg-white overflow-hidden">
      {/* Animated Section Title */}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center font-serif text-4xl mb-16 text-zinc-800"
      >
        News
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        
        {/* News Item 1: Left Slide & Centered Text */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative group overflow-hidden h-[500px] md:h-[650px] flex items-center justify-center text-center p-8 cursor-pointer"
        >
          <div className="absolute inset-0 z-0 overflow-hidden">
            <motion.img 
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 1.2 }}
              src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1965&auto=format&fit=crop" 
              alt="Shoe widths"
              className="w-full h-full object-cover brightness-[0.65]"
            />
          </div>
          
          <div className="relative z-10 text-white max-w-sm px-4">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-2xl md:text-3xl italic font-serif mb-4 leading-tight tracking-wide"
            >
              "D, E, F and G" widths available
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.9 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-[11px] md:text-xs leading-relaxed tracking-widest font-light uppercase"
            >
              We're pleased to be able to offer our MTO shoes in a variety of widths: D, E, F, and G.
            </motion.p>
          </div>
        </motion.div>

        {/* News Item 2: Right Slide & Bottom Text */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative group overflow-hidden h-[500px] md:h-[650px] flex items-end justify-center text-center p-12 cursor-pointer"
        >
          <div className="absolute inset-0 z-0 overflow-hidden">
            <motion.img 
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 1.2 }}
              src="https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=2070&auto=format&fit=crop" 
              alt="Barrel Tote"
              className="w-full h-full object-cover brightness-[0.75]"
            />
          </div>
          
          <div className="relative z-10 text-white max-w-md">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <h3 className="text-3xl md:text-4xl font-serif mb-4 tracking-tight">Barrel Tote</h3>
              <p className="text-[11px] leading-relaxed tracking-[0.2em] font-light mb-4 uppercase">
                New collaboration with Wild Swans
              </p>
              <div className="w-10 h-[1px] bg-white/50 mx-auto mb-4" />
              <p className="text-[9px] opacity-70 uppercase tracking-[0.3em]">
                Exclusively at our Tokyo store
              </p>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default News;