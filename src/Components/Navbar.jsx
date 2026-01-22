import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from './logo.png';
import { useCart } from './CartContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Destructure all necessary functions from your context
  const { totalItems, isCartOpen, setIsCartOpen, cartItems, updateQuantity, removeFromCart, subtotal } = useCart();

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Collections', id: 'collections' },
    { name: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    if (isOpen || isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen, isCartOpen]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      setIsOpen(false);
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 350);
    }
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 text-white bg-black/10 backdrop-blur-md border-b border-white/5">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-5 flex justify-between items-center relative">
          
          {/* Mobile Hamburger */}
          <button className="lg:hidden flex flex-col items-center justify-center w-8 h-8 z-50" onClick={() => setIsOpen(true)}>
            <span className="w-6 h-[1px] bg-white mb-1.5" />
            <span className="w-6 h-[1px] bg-white mb-1.5" />
            <span className="w-6 h-[1px] bg-white" />
          </button>

          {/* Logo */}
          <div className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 cursor-pointer" onClick={() => scrollToSection('home')}>
            <img src={logo} alt="Logo" className="h-4 md:h-5 brightness-0 invert tracking-[0.5em]" />
          </div>

          {/* Desktop Links */}
          <ul className="hidden lg:flex gap-12 items-center">
            {navLinks.map((link) => (
              <li key={link.name} onClick={() => scrollToSection(link.id)} className="cursor-pointer uppercase text-[10px] tracking-[0.4em] font-light hover:text-zinc-400 transition-all">
                {link.name}
              </li>
            ))}
          </ul>

          {/* Cart Icon Trigger */}
          <button onClick={() => setIsCartOpen(true)} className="text-lg opacity-80 hover:opacity-100 transition-opacity z-50 relative">
            👜 {totalItems > 0 && <span className="absolute -top-2 -right-2 bg-white text-black text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-bold">({totalItems})</span>}
          </button>
        </div>

        {/* ===== MOBILE SIDE MENU ===== */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]" />
              <motion.div initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }} transition={{ type: 'tween', duration: 0.5, ease: [0.19, 1, 0.22, 1] }} className="fixed top-0 left-0 h-screen w-[85%] max-w-[350px] bg-[#0c0c0c] z-[70] p-8 flex flex-col">
                <div className="flex justify-end">
                  <button onClick={() => setIsOpen(false)} className="w-10 h-10 text-white/50 hover:text-white transition-colors text-2xl">✕</button>
                </div>
                <div className="mt-12 flex flex-col gap-8">
                  {navLinks.map((link) => (
                    <button key={link.name} onClick={() => scrollToSection(link.id)} className="text-left text-2xl uppercase tracking-[0.3em] font-extralight text-white/80 hover:text-white transition-colors">{link.name}</button>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>

      {/* ===== CART DRAWER UI ===== */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            {/* Cart Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/80 z-[150] backdrop-blur-md"
            />
            {/* Cart Panel */}
            <motion.div 
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-[160] shadow-2xl p-8 flex flex-col text-black"
            >
              <div className="flex justify-between items-center border-b border-zinc-100 pb-6">
                <h2 className="font-serif text-xl uppercase tracking-widest">Bag ({totalItems})</h2>
                <button onClick={() => setIsCartOpen(false)} className="text-xl p-2">✕</button>
              </div>

              <div className="flex-grow overflow-y-auto py-6">
                {cartItems.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-zinc-400">
                    <p className="font-serif italic text-lg text-center">Your bag is currently empty</p>
                  </div>
                ) : (
                  cartItems.map(item => (
                    <div key={item.id} className="flex gap-4 mb-6 border-b border-zinc-50 pb-6">
                      <img src={item.img} className="w-20 h-24 object-cover bg-zinc-50" alt={item.name} />
                      <div className="flex-grow">
                        <div className="flex justify-between items-start">
                          <h3 className="text-[11px] tracking-widest uppercase font-bold">{item.name}</h3>
                          <button onClick={() => removeFromCart(item.id)} className="text-zinc-400 text-xs">✕</button>
                        </div>
                        <p className="text-xs mt-2 font-medium italic">Rs. {item.price.toLocaleString()}</p>
                        <div className="flex items-center gap-3 mt-4">
                          <button onClick={() => updateQuantity(item.id, -1)} className="w-6 h-6 border border-zinc-200 flex items-center justify-center text-xs">-</button>
                          <span className="text-xs w-4 text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)} className="w-6 h-6 border border-zinc-200 flex items-center justify-center text-xs">+</button>
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