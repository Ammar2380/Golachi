import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ['Shoes', 'Accessories', 'Limited Products'];

  return (
    <nav className='absolute top-0 w-full z-50 text-white bg-black/10 backdrop-blur-[2px] border-b border-white/10'>
      <div className='max-w-[1440px] mx-auto px-6 md:px-12 py-4 md:py-6 flex justify-between items-center'>
        
        {/* Mobile Menu Toggle */}
        <button 
          className='lg:hidden text-2xl focus:outline-none'
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'}
        </button>

        {/* Branding - Italic and elegant */}
        <div className='font-serif italic text-xl md:text-2xl tracking-tighter cursor-pointer absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0'>
          Yohei Fukuda
        </div>

        {/* Desktop Navigation */}
        <ul className='hidden lg:flex gap-10 items-center'>
          {navLinks.map((item) => (
            <li 
              key={item} 
              className='cursor-pointer uppercase text-[11px] tracking-[0.3em] font-light hover:opacity-60 transition-opacity'
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Right Side Icons */}
        <div className='flex items-center gap-4 md:gap-6'>
          <div className='flex gap-3 md:gap-4 text-lg cursor-pointer'>
            <span className='hidden sm:inline hover:scale-110 transition-transform'>👤</span>
            <span className='hover:scale-110 transition-transform'>🔍</span>
            <span className='relative hover:scale-110 transition-transform'>
              👜
              <span className='absolute -top-1 -right-1 bg-white text-black text-[8px] w-3 h-3 rounded-full flex items-center justify-center font-bold'>0</span>
            </span>
          </div>
          
          {/* Language Selector */}
          <div className='hidden md:flex items-center gap-2 text-[10px] tracking-widest uppercase border-l border-white/20 pl-6 cursor-pointer'>
            <span className='opacity-80'>🇬🇧 JPY</span>
            <span className='text-[8px]'>▼</span>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 bg-black/95 z-40 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className='flex flex-col items-center justify-center h-full space-y-8'>
          {navLinks.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className='text-xl uppercase tracking-[0.4em] font-light'
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <div className='pt-10 flex gap-8 text-2xl'>
            <span>👤</span>
            <div className='text-sm flex items-center gap-2'>
               🇬🇧 JPY ▼
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;