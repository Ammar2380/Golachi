import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from './logo.png';
import { useCart } from './CartContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { totalItems, isCartOpen, setIsCartOpen, cartItems, updateQuantity, removeFromCart, subtotal } = useCart();

  const navLinks = [
    { name: 'home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Collections', id: 'collections' },
    { name: 'Contact', id: 'contact' }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  // Variants for staggered link animation
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <>
      <nav className='fixed top-0 w-full z-50 text-white bg-black/20 backdrop-blur-md border-b border-white/10'>
        <div className='max-w-[1440px] mx-auto px-6 md:px-12 py-4 md:py-6 flex justify-between items-center'>
          
          {/* Mobile Menu Toggle - Higher z-index to stay above overlay */}
          <button className='lg:hidden text-2xl z-[60] relative w-8 h-8 flex items-center justify-center' onClick={() => setIsOpen(!isOpen)}>
            <motion.span animate={isOpen ? { rotate: 45, y: 2 } : { rotate: 0, y: 0 }} className="absolute h-[1px] w-6 bg-white translate-y-[-4px]" />
            <motion.span animate={isOpen ? { opacity: 0 } : { opacity: 1 }} className="absolute h-[1px] w-6 bg-white" />
            <motion.span animate={isOpen ? { rotate: -45, y: -2 } : { rotate: 0, y: 0 }} className="absolute h-[1px] w-6 bg-white translate-y-[4px]" />
          </button>

          <div className='cursor-pointer absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0'>
            <img src={logo} alt="Yohei Fukuda" className='h-5 md:h-6 object-contain brightness-0 invert' />
          </div>

          {/* Desktop Nav */}
          <ul className='hidden lg:flex gap-10 items-center'>
            {navLinks.map((link) => (
              <li 
                key={link.name} 
                onClick={() => scrollToSection(link.id)}
                className='cursor-pointer uppercase text-[11px] tracking-[0.3em] font-light hover:opacity-60 transition-all duration-300'
              >
                {link.name}
              </li>
            ))}
          </ul>

          {/* Cart Icon */}
          <div className='flex items-center'>
            <button 
              onClick={() => setIsCartOpen(true)}
              className='relative hover:scale-110 transition-transform text-lg'
            >
              <span className="opacity-80">👜</span>
              {totalItems > 0 && (
                <span className='absolute -top-2 -right-2 bg-white text-black text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold'>
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Full-Screen Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='fixed inset-0 bg-[#121212] z-50 flex flex-col items-center justify-center'
            >
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className='flex flex-col items-center gap-10'
              >
                {navLinks.map((link) => (
                  <motion.button 
                    key={link.name} 
                    variants={itemVariants}
                    onClick={() => scrollToSection(link.id)}
                    className='text-2xl uppercase tracking-[0.4em] font-light text-white/90 hover:text-white transition-colors'
                  >
                    {link.name}
                  </motion.button>
                ))}
              </motion.div>
              
              {/* Optional: Brand Detail at bottom of menu */}
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 0.3 }} 
                transition={{ delay: 0.8 }}
                className="absolute bottom-12 uppercase text-[9px] tracking-[0.5em]"
              >
                Tokyo — Japan
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* --- CART DRAWER --- */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl p-8 flex flex-col text-black"
            >
              <div className="flex justify-between items-center border-b border-zinc-100 pb-6">
                <h2 className="font-serif text-xl uppercase tracking-widest">Bag ({totalItems})</h2>
                <button onClick={() => setIsCartOpen(false)} className="text-xl p-2">✕</button>
              </div>

              <div className="flex-grow overflow-y-auto py-6">
                {cartItems.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-zinc-400">
                    <p className="font-serif italic text-lg">Your bag is empty</p>
                    <button onClick={() => setIsCartOpen(false)} className="mt-4 text-[10px] tracking-widest uppercase underline text-black">Shop Collections</button>
                  </div>
                ) : (
                  cartItems.map(item => (
                    <div key={item.id} className="flex gap-4 mb-6 border-b border-zinc-50 pb-6">
                      <img src={item.img} className="w-20 h-24 object-cover bg-zinc-50" alt="" />
                      <div className="flex-grow">
                        <div className="flex justify-between items-start">
                          <h3 className="text-[11px] tracking-widest uppercase font-bold">{item.name}</h3>
                          <button onClick={() => removeFromCart(item.id)} className="text-zinc-400 text-xs">✕</button>
                        </div>
                        <p className="text-[10px] text-zinc-500 mt-1 italic">MTO Selection</p>
                        <p className="text-xs mt-2">Rs. {item.price.toLocaleString()}</p>
                        <div className="flex items-center gap-3 mt-4">
                          <button onClick={() => updateQuantity(item.id, -1)} className="w-6 h-6 border border-zinc-200 flex items-center justify-center">-</button>
                          <span className="text-xs w-4 text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)} className="w-6 h-6 border border-zinc-200 flex items-center justify-center">+</button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {cartItems.length > 0 && (
                <div className="border-t border-zinc-100 pt-6 space-y-4">
                  <div className="flex justify-between text-sm tracking-widest uppercase">
                    <span>Subtotal</span>
                    <span className="font-bold">Rs. {subtotal.toLocaleString()}</span>
                  </div>
                  <button className="w-full bg-black text-white py-4 text-[10px] tracking-[0.3em] uppercase hover:bg-zinc-800 transition-all">
                    Proceed to Checkout
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;