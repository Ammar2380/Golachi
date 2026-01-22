import React from 'react';
import { motion } from 'framer-motion';

const OrderProcess = () => {
  return (
    <section className="relative h-[70vh] md:h-[80vh] flex items-center bg-zinc-950 overflow-hidden">
      
      {/* Background Image with Parallax Scale Animation */}
      <motion.div 
        initial={{ scale: 1.2, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0 brightness-[0.6]"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1512436991641-6745cdb1723f')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-6 md:px-16">
        <div className="max-w-4xl">
          
          {/* Animated Heading */}
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-white text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight mb-6"
          >
            Order and Process
          </motion.h2>
          
          {/* Animated Paragraph */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-white/80 text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-2xl mb-10"
          >
            From Bespoke shoes to our Ready to Wear collection, each shoe is made 
            with the same approach to craftsmanship, quality, and elegance that 
            defines the Yohei Fukuda workshop.
          </motion.p>

          {/* Animated Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <button className="group relative px-10 py-4 border border-white/50 text-white text-[10px] tracking-[0.4em] uppercase overflow-hidden transition-all duration-500 hover:border-white">
              <span className="relative z-10 group-hover:text-black transition-colors duration-500">
                Brand Website
              </span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Interactive Navigation Arrows */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        whileHover={{ opacity: 1, x: -5 }}
        className="absolute inset-y-0 left-4 hidden md:flex items-center text-white text-4xl cursor-pointer transition-all"
      >
        ‹
      </motion.div>
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        whileHover={{ opacity: 1, x: 5 }}
        className="absolute inset-y-0 right-4 hidden md:flex items-center text-white text-4xl cursor-pointer transition-all"
      >
        ›
      </motion.div>

      {/* Bottom Progress Bar (Visual Detail) */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 2, ease: "linear" }}
          className="h-full bg-white/40"
        />
      </div>
    </section>
  );
};

export default OrderProcess;