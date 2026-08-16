import React from 'react';
import { Cake, Sparkles, Heart, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { BAKERY_PROMISES } from '../data/bakeryData';

export const BakeryPromises: React.FC = () => {
  return (
    <section className="py-12 bg-[#FFF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-[#E8506D] px-3.5 py-1 rounded-sm shadow-xs">
            Our Quality Standard
          </span>
          <h2 className="font-serif text-3xl font-extrabold text-[#1E181B]">
            Why Solapur Loves Deep's Bake House
          </h2>
          <p className="text-xs sm:text-sm text-[#665158]">
            Every bake is a labor of passion, using authentic baking techniques and the cleanest wholesome ingredients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          
          <div className="p-5 rounded-xl bg-white border border-[#F2D0D7] space-y-3 shadow-sm hover:border-[#E8506D] transition-all">
            <div className="w-12 h-12 rounded-full bg-[#FFEBEF] text-[#E8506D] flex items-center justify-center font-bold text-2xl shadow-xs border border-[#FFD0D8]">
              🧀
            </div>
            <h3 className="font-serif font-bold text-base text-[#1E181B]">
              Pure Cream Cheese
            </h3>
            <p className="text-xs text-[#665158] leading-relaxed">
              Every cheesecake is made with pure cream cheese. <strong className="text-[#1E181B]">No oil used, No maida added</strong>. Just rich, creamy decadence.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-[#F2D0D7] space-y-3 shadow-sm hover:border-[#E8506D] transition-all">
            <div className="w-12 h-12 rounded-full bg-[#FEF3C7] text-[#D97706] flex items-center justify-center font-bold text-2xl shadow-xs border border-[#FDE68A]">
              🌱
            </div>
            <h3 className="font-serif font-bold text-base text-[#1E181B]">
              100% Eggless
            </h3>
            <p className="text-xs text-[#665158] leading-relaxed">
              Every single cookie, donut, bomboloni, and cheesecake is 100% vegetarian and crafted in a clean hygienic home studio.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-[#F2D0D7] space-y-3 shadow-sm hover:border-[#E8506D] transition-all">
            <div className="w-12 h-12 rounded-full bg-[#FFEBEF] text-[#E8506D] flex items-center justify-center font-bold text-2xl shadow-xs border border-[#FFD0D8]">
              🍪
            </div>
            <h3 className="font-serif font-bold text-base text-[#1E181B]">
              Luxury Cookie Tins
            </h3>
            <p className="text-xs text-[#665158] leading-relaxed">
              Golden, crunchy cookies sealed in reusable airtight tins. The ultimate gift for festive seasons, birthdays, or personal treats!
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-[#F2D0D7] space-y-3 shadow-sm hover:border-[#E8506D] transition-all">
            <div className="w-12 h-12 rounded-full bg-[#DCFCE7] text-[#2A6E3B] flex items-center justify-center font-bold text-2xl shadow-xs border border-[#BBF7D0]">
              💬
            </div>
            <h3 className="font-serif font-bold text-base text-[#1E181B]">
              Direct WhatsApp Orders
            </h3>
            <p className="text-xs text-[#665158] leading-relaxed">
              Instant customized WhatsApp ordering. Tell us your custom cake toppers, pickup time, or special instructions with 1-click.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
