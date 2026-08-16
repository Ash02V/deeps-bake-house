import React from 'react';
import { MapPin, Instagram, Clock, ShieldCheck, Heart, Navigation, MessageCircle } from 'lucide-react';
import { BAKERY_ADDRESS, BAKERY_INSTAGRAM, BAKERY_LOCATION_CITY } from '../data/bakeryData';
import bakeryLogoImg from '../assets/images/deeps_exact_logo_1786866939417.jpg';

export const SolapurLocation: React.FC = () => {
  const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Mahalaxmi Nilayam Madhav Nagar Solapur')}`;
  const whatsappLocationInquiry = `https://wa.me/918855952207?text=${encodeURIComponent('Hi Deeps Bake House! Could you please share your live pickup location in Solapur? 📍❤️')}`;

  return (
    <section id="location-section" className="py-12 bg-[#FFF9F5] border-t border-[#F2DDE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#18151D] rounded-2xl p-6 sm:p-10 text-white shadow-xl border-b-4 border-[#E8506D] relative overflow-hidden">
          {/* Subtle background element */}
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-60 h-60 rounded-full bg-[#E8506D]/15 blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xs px-3 py-1 rounded-sm text-[10px] font-bold uppercase tracking-wider text-[#FF859C] border border-white/10">
                <MapPin className="w-3.5 h-3.5" />
                Solapur Self-Pickup &amp; Pre-Orders
              </div>

              <div className="space-y-1.5">
                <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-white">
                  Pick Up Fresh Bakes at Deep's Bake House
                </h2>
                <p className="text-xs sm:text-sm text-[#DFD7DF] max-w-xl font-normal leading-relaxed">
                  We are a boutique home-bakery in Solapur crafting fresh, eggless treats upon order. Drop by our pickup counter or schedule your celebration cake collection.
                </p>
              </div>

              {/* Detailed Address & Timing Box */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                
                {/* Address */}
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-1">
                  <span className="text-[10px] text-[#FF859C] font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" /> Pickup Address
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-white leading-snug">
                    {BAKERY_ADDRESS}
                  </p>
                  <p className="text-[11px] text-[#A69AA8]">Solapur, Maharashtra</p>
                </div>

                {/* Timings & Ordering Notice */}
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-1">
                  <span className="text-[10px] text-[#FEF08A] font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" /> Pre-Order Guidelines
                  </span>
                  <p className="text-[11px] text-[#DFD7DF] leading-relaxed">
                    • <strong>Cookie Tins &amp; Donuts:</strong> Same day / Daily batches<br />
                    • <strong>1/2 KG &amp; 1 KG Cakes:</strong> 24-48 hrs prior notice
                  </p>
                </div>

              </div>

              {/* Quick Actions */}
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={whatsappLocationInquiry}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Get Location on WhatsApp</span>
                </a>

                <a
                  href={mapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-[#18151D] hover:bg-[#FFE8EC] text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full shadow-sm transition-all"
                >
                  <Navigation className="w-4 h-4 text-[#E8506D]" />
                  <span>Open in Google Maps</span>
                </a>
              </div>

            </div>

            {/* Right Contact Card */}
            <div className="lg:col-span-5 bg-white p-6 sm:p-7 rounded-xl shadow-lg border border-[#F2D0D7] space-y-4 text-center text-[#1E181B]">
              <div className="w-20 h-20 rounded-full bg-white mx-auto shadow-md border-2 border-[#E8506D]/40 overflow-hidden flex items-center justify-center p-0.5">
                <img
                  src={bakeryLogoImg}
                  alt="Deep's Bake House Brand Avatar"
                  className="w-full h-full object-cover rounded-full"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="space-y-1">
                <h3 className="font-serif font-bold text-lg text-[#1E181B]">
                  Direct Line to the Baker
                </h3>
                <p className="text-xs text-[#7A666D]">
                  Need a customized birthday theme or corporate cookie tin order? Talk to us directly!
                </p>
              </div>

              <div className="space-y-2 pt-1">
                <a
                  href={`https://wa.me/918855952207?text=${encodeURIComponent('Hi Deeps Bake House! ❤️ I would like to order fresh treats.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white py-2.5 px-4 rounded-lg font-bold text-xs sm:text-sm transition-colors shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>WhatsApp Order</span>
                </a>

                <a
                  href="https://instagram.com/deepsbakehouse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#FFF0F3] hover:bg-[#FFE0E6] text-[#E8506D] py-2.5 px-4 rounded-lg font-semibold text-xs transition-colors border border-[#FFCCD5]"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Follow {BAKERY_INSTAGRAM}</span>
                </a>
              </div>

              <p className="text-[11px] text-[#7A666D] pt-1">
                ❤️ Thank you for supporting our local small business in Solapur!
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
