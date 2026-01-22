import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from './CartContext';

const products = [
  { 
    id: 1, 
    name: 'TEAL', 
    description: 'A masterpiece of color depth. Hand-finished calf leather with deep patina, achieved through seven layers of individual dye application.',
    details: ['Full-grain Italian Calf', 'Hand-painted Patina', 'Single Leather Sole', 'Beveled Waist'],
    price: 575642.30, 
    soldOut: true, 
    img: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4" 
  },
  { 
    id: 2, 
    name: 'CELESTE', 
    description: 'The Celeste represents the pinnacle of formal elegance. Featuring a unique sapphire pigment finish that shifts under direct light.',
    details: ['Limited Sapphire Polish', 'Closed Channel Stitching', 'Quilted Silk Lining', 'Museum Grade Finish'],
    price: 575642.30, 
    soldOut: true, 
    img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a" 
  },
  { 
    id: 3, 
    name: 'GUETHE', 
    description: 'Signature artisanal wingtip construction. A timeless silhouette re-imagined for the modern collector of fine footwear.',
    details: ['Bespoke Last Shape', 'Hand-punched Broguing', 'Oak Bark Tanned Sole', 'Japanese Craftsmanship'],
    price: 575642.30, 
    soldOut: true, 
    img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2" 
  },
  { 
    id: 4, 
    name: 'EBONY', 
    description: 'Triple-dyed black box calf with a high-shine mirror polish. The essential foundation for any artisanal shoe collection.',
    details: ['Triple-dyed Box Calf', 'Mirror Shine Finish', 'Goodyear Welted', 'Available for Commission'],
    price: 575642.30, 
    soldOut: false, 
    img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86" 
  },
];

const FeaturedCollection = () => {
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Lock scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = selectedProduct ? 'hidden' : 'unset';
  }, [selectedProduct]);

  return (
    <section className="py-32 px-6 md:px-14 bg-white" id="featured">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Header */}
        <div className="mb-20 text-center">
          <span className="block text-[10px] tracking-[0.6em] uppercase text-zinc-400 mb-4 font-light">The Archive</span>
          <h2 className="font-serif text-4xl md:text-5xl text-zinc-900">Featured Works</h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#f8f8f8] mb-6">
                <img src={product.img} alt={product.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                
                {/* Discover Button Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                  <button 
                    onClick={() => setSelectedProduct(product)}
                    className="bg-white text-black px-8 py-3 text-[9px] tracking-[0.3em] uppercase hover:bg-black hover:text-white transition-colors duration-300"
                  >
                    Discover Details
                  </button>
                </div>
              </div>

              <div className="text-center">
                <h3 className="uppercase tracking-[0.4em] text-[11px] mb-2">{product.name}</h3>
                <p className="text-[10px] text-zinc-400">Rs. {product.price.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Overlay */}
        <AnimatePresence>
          {selectedProduct && (
            <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10">
              {/* Backdrop */}
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={() => setSelectedProduct(null)}
                className="absolute inset-0 bg-black/90 backdrop-blur-xl"
              />

              {/* Modal Content */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }}
                className="relative bg-white w-full max-w-5xl h-full max-h-[800px] overflow-hidden flex flex-col md:flex-row shadow-2xl"
              >
                <button 
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-6 right-6 z-30 text-black hover:rotate-90 transition-transform duration-300"
                >
                  ✕
                </button>

                {/* Left: Image */}
                <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden bg-zinc-100">
                  <img src={selectedProduct.img} className="w-full h-full object-cover" alt="" />
                </div>

                {/* Right: Info */}
                <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
                  <span className="text-[10px] tracking-[0.5em] text-zinc-400 uppercase mb-4">Masterpiece No. 0{selectedProduct.id}</span>
                  <h2 className="font-serif text-4xl mb-6">{selectedProduct.name}</h2>
                  <p className="text-zinc-600 text-sm leading-relaxed mb-8 font-light">
                    {selectedProduct.description}
                  </p>

                  <div className="mb-10">
                    <h4 className="text-[10px] tracking-[0.3em] uppercase font-bold mb-4 border-b border-zinc-100 pb-2">Technical Specifications</h4>
                    <ul className="grid grid-cols-2 gap-y-3">
                      {selectedProduct.details.map((detail, i) => (
                        <li key={i} className="text-[11px] text-zinc-500 flex items-center gap-2">
                          <span className="w-1 h-1 bg-zinc-300 rounded-full" /> {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col gap-4">
                    {!selectedProduct.soldOut ? (
                      <button 
                        onClick={() => { addToCart(selectedProduct); setSelectedProduct(null); }}
                        className="w-full bg-black text-white py-5 text-[10px] tracking-[0.4em] uppercase hover:bg-zinc-800 transition-colors"
                      >
                        Request Commission — Rs. {selectedProduct.price.toLocaleString()}
                      </button>
                    ) : (
                      <button className="w-full border border-zinc-200 text-zinc-400 py-5 text-[10px] tracking-[0.4em] uppercase cursor-not-allowed">
                        Sold Out / Archived
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default FeaturedCollection;