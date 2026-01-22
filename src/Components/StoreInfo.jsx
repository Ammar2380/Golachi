import React from 'react';
import { motion } from 'framer-motion';

const StoreInfo = () => {
  return (
    <section className="flex flex-col md:flex-row min-h-[600px] bg-white overflow-hidden">
      
      {/* Left Content Area: Information Card */}
      <div className="w-full md:w-[45%] lg:w-[40%] flex items-center justify-center p-6 md:p-12 lg:p-16 bg-zinc-50/50 md:bg-white">
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="border border-zinc-200 p-8 md:p-12 lg:p-14 w-full max-w-md bg-white shadow-sm md:shadow-none"
        >
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="font-serif text-2xl md:text-3xl mb-8 text-zinc-800"
          >
            Our Store
          </motion.h3>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="space-y-1 text-[13px] leading-relaxed text-zinc-600 font-light"
          >
            <p className="font-medium text-zinc-800">BAL Aoyama 2F</p>
            <p>2-12-27 Kitaaoyama</p>
            <p>Minatoku, Tokyo, Japan</p>
            
            <p className="pt-6 italic text-zinc-500">By appointment</p>
            
            <p className="pt-4">Mon to Sat: 11am — 7pm</p>
            <p>Sun: Closed</p>
            
            <p className="pt-6 text-zinc-900 font-medium">+81 3 6804 6979</p>
          </motion.div>

          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-10 w-full py-4 bg-[#2e2e2e] text-white text-[10px] tracking-[0.3em] uppercase hover:bg-black transition-all duration-300 shadow-lg md:shadow-none"
          >
            Contact Form
          </motion.button>
        </motion.div>
      </div>

      {/* Right Content Area: Large Store Image */}
      <div className="w-full md:w-[55%] lg:w-[60%] relative h-[450px] md:h-auto overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="h-full w-full"
        >
          <img 
            src="https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1974&auto=format&fit=crop" 
            alt="Yohei Fukuda Store Interior"
            className="absolute inset-0 w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000"
          />
        </motion.div>
        
        {/* Subtle decorative overlay for mobile-to-desktop transition */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent md:hidden" />
      </div>
    </section>
  );
};

export default StoreInfo;