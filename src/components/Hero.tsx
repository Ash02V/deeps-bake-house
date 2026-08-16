import React from 'react';
import { Heart, Sparkles, MessageCircle, Clock, ShieldCheck, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { BAKERY_ADDRESS } from '../data/bakeryData';
import pistachioNutellaImg from '../assets/images/pistachio_nutella_cake_1786865091442.jpg';

interface HeroProps {
  onExploreMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu }) => {
  const directWhatsAppGeneral = `https://wa.me/918855952207?text=${encodeURIComponent('Hello Deeps Bake House! ❤️ I would like to place an order from your menu today.')}`;

  return (
    <section className="relative overflow-hidden bg-[#FFF9F5] border-b border-[#F2DDE1] pt-8 pb-12 sm:pt-10 sm:pb-16 text-[#352A30]">
      {/* Subtle warm backdrop glows */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-72 h-72 rounded-full bg-[#FFE8EC]/70 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-72 h-72 rounded-full bg-[#FFF0E6]/80 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: Geometric Quality Banner & Headline */}
          <div className="lg:col-span-7 bg-[#FFF2F4] p-6 sm:p-10 rounded-2xl border border-[#F2D0D7] flex flex-col justify-between space-y-6 shadow-sm">
            
            <div className="space-y-4">
              {/* Geometric Pill Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-[#18151D] text-[#FF859C] border border-[#FF6584]/30 px-3 py-1 rounded-sm text-[10px] font-bold uppercase tracking-wider shadow-xs">
                  The Quality Promise
                </span>
                <span className="bg-white text-[#E8506D] border border-[#FFCCD5] px-3 py-1 rounded-sm text-[10px] font-bold uppercase tracking-wider shadow-2xs">
                  100% Eggless • Solapur
                </span>
              </div>

              {/* Main Headline */}
              <div className="space-y-3">
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1E181B] leading-tight tracking-tight">
                  Rich, Creamy <br />
                  <span className="text-[#E8506D] italic font-serif font-normal">&amp; No-Guilt Feels.</span>
                </h1>
                <p className="text-base sm:text-lg italic text-[#42333A] font-serif border-l-3 border-[#E8506D] pl-3 py-0.5">
                  &ldquo;Pure Creamcheese. No Maida. No Oil. Rich creamy feels in every bite.&rdquo;
                </p>
                <p className="text-xs sm:text-sm text-[#665158] font-normal leading-relaxed">
                  Handcrafted artisanal cheesecakes, gourmet cookie tins, molten Nutella bombolonis &amp; fluffy donuts. Freshly baked to order in Solapur.
                </p>
              </div>
            </div>

            {/* Geometric 3-Pillar List */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-[#F0D5DA] shadow-xs">
                <div className="w-10 h-10 bg-[#FFEBEF] text-[#E8506D] rounded-full flex items-center justify-center text-lg shrink-0 border border-[#FFD0D8]">
                  🧀
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-xs uppercase text-[#231A1E]">Pure Cream Cheese</h3>
                  <p className="text-[10px] text-[#7A666D]">No oil &amp; no maida</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-[#F0D5DA] shadow-xs">
                <div className="w-10 h-10 bg-[#FEF3C7] text-[#D97706] rounded-full flex items-center justify-center text-lg shrink-0 border border-[#FDE68A]">
                  🌱
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-xs uppercase text-[#231A1E]">100% Eggless</h3>
                  <p className="text-[10px] text-[#7A666D]">Vegetarian goodness</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-[#F0D5DA] shadow-xs">
                <div className="w-10 h-10 bg-[#FFEBEF] text-[#E8506D] rounded-full flex items-center justify-center text-lg shrink-0 border border-[#FFD0D8]">
                  🎁
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-xs uppercase text-[#231A1E]">Luxury Packaging</h3>
                  <p className="text-[10px] text-[#7A666D]">Cookie tins for gifting</p>
                </div>
              </div>
            </div>

            {/* Dashed Order Callout & CTAs */}
            <div className="space-y-3 pt-2">
              <div className="p-3.5 bg-white rounded-xl border-2 border-dashed border-[#E8506D]/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                <div>
                  <p className="text-xs font-bold text-[#1E181B] uppercase tracking-wide">
                    Pre-Orders &amp; Self-Pickup in Solapur
                  </p>
                  <p className="text-[11px] text-[#7A666D]">
                    Mahalaxmi Nilayam, Madhav Nagar • Direct WhatsApp Orders &amp; Fresh Daily Batches
                  </p>
                </div>
                <a
                  href={directWhatsAppGeneral}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#25D366] hover:bg-[#1EBE5D] px-3.5 py-1.5 rounded-full transition-colors shrink-0 shadow-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white" />
                  <span>WhatsApp Order</span>
                </a>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3">
                <a
                  id="hero-whatsapp-order-btn"
                  href={directWhatsAppGeneral}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold px-6 py-3 rounded-full text-xs sm:text-sm shadow-md hover:shadow-lg transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Order on WhatsApp</span>
                </a>

                <button
                  id="hero-explore-menu-btn"
                  onClick={onExploreMenu}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#18151D] hover:bg-[#2B2533] text-white font-bold px-6 py-3 rounded-full text-xs sm:text-sm shadow-md transition-all border border-[#E8506D]/30"
                >
                  <span>Explore Menu (13 Items)</span>
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Geometric Balanced Grid Preview */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            
            {/* Main Featured Display Card */}
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-[#F2D0D7] space-y-3">
              <div className="relative rounded-xl overflow-hidden aspect-4/3 bg-[#FFE8EC]">
                <img
                  src={pistachioNutellaImg}
                  alt="Deeps Bake House Signature Pistachio Nutella Cheesecake"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#E8506D] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm shadow-xs">
                  Solapur Signature
                </div>
                <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-xs text-[#1E181B] text-[11px] font-bold px-3 py-1 rounded-full shadow-xs border border-[#F2D0D7]">
                  Pure Cream Cheese
                </div>
              </div>

              <div className="flex items-center justify-between pt-1">
                <div>
                  <h3 className="font-serif font-bold text-lg text-[#1E181B]">
                    Pistachio &amp; Nutella Baked Cheesecake
                  </h3>
                  <p className="text-xs text-[#7A666D]">
                    From ₹449 • No maida, no oil • 100% Eggless
                  </p>
                </div>
                <a
                  href={`https://wa.me/918855952207?text=${encodeURIComponent('Hi Deeps Bake House! I would like to order your Pistachio Nutella Cheesecake 🍰')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-[#E8506D] text-white hover:bg-[#D63F5C] transition-colors shadow-xs"
                  title="Order on WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Secondary Dual Highlights */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white p-3.5 rounded-xl border border-[#F2D0D7] shadow-2xs flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#FFEBEF] flex items-center justify-center text-xl shrink-0 border border-[#FFD0D8]">
                  🍪
                </div>
                <div>
                  <span className="text-[9px] font-bold uppercase text-[#E8506D] tracking-wider block">7 Flavors</span>
                  <p className="font-serif font-bold text-xs text-[#1E181B]">Luxury Cookie Tins</p>
                </div>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-[#F2D0D7] shadow-2xs flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#FEF3C7] flex items-center justify-center text-xl shrink-0 border border-[#FDE68A]">
                  🍩
                </div>
                <div>
                  <span className="text-[9px] font-bold uppercase text-[#E8506D] tracking-wider block">Italian Style</span>
                  <p className="font-serif font-bold text-xs text-[#1E181B]">Nutella Bombolonis</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
