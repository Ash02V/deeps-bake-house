import React from 'react';
import { Heart, Instagram, MapPin, MessageCircle, Sparkles } from 'lucide-react';
import { BAKERY_INSTAGRAM, BAKERY_ADDRESS, BAKERY_LOCATION_CITY } from '../data/bakeryData';
import bakeryLogoImg from '../assets/images/deeps_exact_logo_1786866939417.jpg';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#120F15] text-white pt-12 pb-8 border-t-4 border-[#E8506D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden border-2 border-[#E8506D] shrink-0 p-0.5 shadow-md">
                <img
                  src={bakeryLogoImg}
                  alt="Deep's Bake House Logo"
                  className="w-full h-full object-cover rounded-full"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-serif font-extrabold text-2xl tracking-wide text-[#FF859C]">
                DEEP'S BAKE HOUSE
              </span>
            </div>
            <p className="text-xs text-[#C5BBC7] max-w-sm leading-relaxed">
              Solapur's beloved home-bakery for artisanal eggless cheesecakes made with pure cream cheese, luxury cookie tins, molten Nutella bombolonis and donuts.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="text-[11px] bg-white/10 text-[#FF859C] border border-[#FF6584]/20 px-2.5 py-1 rounded-sm font-medium">
                100% Pure Cream Cheese
              </span>
              <span className="text-[11px] bg-white/10 text-[#FF859C] border border-[#FF6584]/20 px-2.5 py-1 rounded-sm font-medium">
                100% Eggless
              </span>
            </div>
          </div>

          {/* Quick Menu Links */}
          <div className="md:col-span-3 space-y-3 text-xs">
            <h4 className="font-serif font-bold text-sm text-[#FF859C] uppercase tracking-wider">
              Menu Specialties
            </h4>
            <ul className="space-y-2 text-[#C5BBC7]">
              <li>• Baked Pistachio Nutella Cheesecake</li>
              <li>• Lotus Biscoff Cheesecake (Half KG)</li>
              <li>• Nutella Filled Bombolonis</li>
              <li>• Crunchy Cookie Tins (7 Varieties)</li>
              <li>• Chocolate Spiderweb Donuts</li>
              <li>• Mango Cheesecake (Seasonal)</li>
            </ul>
          </div>

          {/* Contact & Location */}
          <div className="md:col-span-4 space-y-3 text-xs">
            <h4 className="font-serif font-bold text-sm text-[#FF859C] uppercase tracking-wider">
              Contact &amp; Pickup
            </h4>
            <div className="space-y-2 text-[#C5BBC7]">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FF859C] shrink-0 mt-0.5" />
                <span>{BAKERY_ADDRESS}</span>
              </p>
              <p className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-[#FF859C] shrink-0" />
                <a
                  href="https://instagram.com/deepsbakehouse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white font-semibold underline"
                >
                  {BAKERY_INSTAGRAM}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={`https://wa.me/918855952207?text=${encodeURIComponent('Hi Deeps Bake House! ❤️')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white font-semibold text-[#25D366] underline"
                >
                  WhatsApp Order
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#A69AA8] gap-4">
          <p>© {new Date().getFullYear()} Deep's Bake House, Solapur. Handcrafted with love.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-[#E8506D] fill-[#E8506D]" /> for Solapur dessert lovers
          </p>
        </div>

      </div>
    </footer>
  );
};
