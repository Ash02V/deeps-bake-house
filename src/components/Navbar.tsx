import React from 'react';
import { ShoppingBag, MessageCircle, Instagram, MapPin } from 'lucide-react';
import { BAKERY_INSTAGRAM, BAKERY_LOCATION_CITY } from '../data/bakeryData';
import bakeryLogoImg from '../assets/images/deeps_exact_logo_1786866939417.jpg';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  activeCategory?: string;
  onSelectCategory?: (category: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#18151D] text-white border-b-2 border-[#E8506D] shadow-lg">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo & Name */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3.5 group min-w-0">
            <div className="w-10 h-10 sm:w-13 sm:h-13 rounded-full bg-black text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200 border-2 border-[#E8506D]/60 overflow-hidden shrink-0">
              <img
                src={bakeryLogoImg}
                alt="Deep's Bake House Logo"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="font-serif font-bold text-lg sm:text-2xl md:text-3xl tracking-tight text-[#FF859C] group-hover:text-[#FFAEC0] transition-colors truncate block">
                  Deep's Bake House
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-white tracking-wider font-medium truncate opacity-95">
                Fresh Bakes &amp; Pure Indulgence
              </p>
            </div>
          </a>

          {/* Right Action Icons & Cart */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Instagram Social Icon */}
            <a
              href="https://instagram.com/deepsbakehouse"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-2.5 rounded-full text-white/80 hover:text-white hover:bg-white/10 border border-white/15 transition-all"
              title="Instagram @deepsbakehouse"
            >
              <Instagram className="w-4 h-4" />
            </a>

            {/* WhatsApp Direct */}
            <a
              href={`https://wa.me/918855952207?text=${encodeURIComponent('Hi Deeps Bake House! ❤️ I would like to place an order.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-bold text-white bg-[#25D366] hover:bg-[#1EBE5D] px-3 sm:px-4 py-2 rounded-full shadow-sm transition-all"
              title="Order on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>

            {/* Cart Button */}
            <button
              id="header-cart-button"
              onClick={onOpenCart}
              className="relative flex items-center gap-1.5 sm:gap-2 bg-[#E8506D] hover:bg-[#D63F5C] text-white px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95 border border-[#FF859C]/40"
            >
              <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
              <span className="hidden sm:inline">Bag</span>
              {cartCount > 0 && (
                <span className="bg-white text-[#18151D] text-[11px] sm:text-xs font-black w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full flex items-center justify-center shadow-xs">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
