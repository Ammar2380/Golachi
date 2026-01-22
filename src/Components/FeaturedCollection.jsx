import React from 'react';
import { motion } from 'framer-motion';

const products = [
  { name: 'TEAL', price: 'Rs. 575,642.30', soldOut: true, img: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4" },
  { name: 'CELESTE', price: 'Rs. 575,642.30', soldOut: true, img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a" },
  { name: 'GUETHE', price: 'Rs. 575,642.30', soldOut: true, img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2" },
  { name: 'EBONY', price: 'Rs. 575,642.30', soldOut: false, img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86" },
];

const FeaturedCollection = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Items appear one after another
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="py-24 px-6 md:px-14 bg-white overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center font-serif text-3xl md:text-4xl mb-16 text-zinc-800 tracking-wide"
      >
        Featured collection
      </motion.h2>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6"
      >
        {products.map((product, i) => (
          <motion.div 
            key={i} 
            variants={itemVariants}
            className="flex flex-col items-center group cursor-pointer"
          >
            {/* Aspect Ratio Container (Rectangle 4:5) */}
            <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#f9f9f9] mb-6">
              {product.soldOut && (
                <motion.div 
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                  className="absolute top-0 right-0 z-10 bg-white px-4 py-1.5 text-[10px] tracking-widest uppercase text-zinc-500 shadow-sm"
                >
                  Sold Out
                </motion.div>
              )}
              
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110"
              />
              
              {/* Subtle hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
            </div>

            {/* Product Details */}
            <h3 className="uppercase tracking-[0.3em] text-[12px] font-medium text-zinc-900 mb-2 transition-colors group-hover:text-zinc-500">
              {product.name}
            </h3>
            <p className="text-[11px] text-zinc-400 font-light tracking-wider">
              {product.price}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default FeaturedCollection;