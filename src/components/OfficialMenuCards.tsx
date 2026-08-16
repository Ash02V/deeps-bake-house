import React from 'react';
import { OFFICIAL_COOKIE_TIN_PRICES, OFFICIAL_CHEESECAKE_PRICES, BAKERY_ADDRESS } from '../data/bakeryData';
import { Sparkles, Heart, MessageCircle, ShoppingBag, CheckCircle, Cake } from 'lucide-react';
import { PriceOption } from '../types';

interface OfficialMenuCardsProps {
  onAddDirectCustom: (name: string, option: PriceOption) => void;
}

export const OfficialMenuCards: React.FC<OfficialMenuCardsProps> = ({ onAddDirectCustom }) => {
  return (
    <section className="py-12 bg-[#FFF9F5] border-t border-b border-[#F2DDE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 bg-[#E8506D] text-white px-3.5 py-1 rounded-sm text-[10px] font-bold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            Official Bake House Cards
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#1E181B]">
            Deep's Signature Price Menus
          </h2>
          <p className="text-xs sm:text-sm text-[#665158]">
            Direct pricing straight from our kitchen flyers. Choose your favorite cheesecake size or luxury cookie tin and order via WhatsApp!
          </p>
        </div>

        {/* The Two Menu Flyers in Side-by-Side Responsive Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          
          {/* Card 1: Official Cookie Tins Menu Card */}
          <div className="bg-white rounded-xl p-6 sm:p-8 border border-[#F2D0D7] shadow-sm relative overflow-hidden flex flex-col justify-between">
            {/* Top flyer header */}
            <div className="text-center space-y-1 pb-4 border-b border-[#F2D0D7]">
              <h3 className="font-serif font-extrabold text-2xl sm:text-3xl text-[#18151D] tracking-wide">
                DEEP'S BAKE HOUSE
              </h3>
              <p className="text-[10px] tracking-widest uppercase font-semibold text-[#7A666D]">
                Good Ingredients • Pure Cream Cheese • Homemade Quality
              </p>
              <div className="pt-2">
                <span className="inline-block bg-[#FFE8EC] text-[#E8506D] font-serif font-bold text-sm sm:text-base uppercase py-1 px-4 rounded-sm tracking-wider border border-[#FFD0D8]">
                  🍪 Cookie Tins Menu (7 Varieties) 🍪
                </span>
              </div>
            </div>

            {/* Cookie Tin Table */}
            <div className="py-4 space-y-2">
              <div className="grid grid-cols-12 text-[10px] font-bold uppercase tracking-wider text-[#7A666D] px-2 pb-1 border-b border-[#F2D0D7]">
                <div className="col-span-6">Flavor Variety</div>
                <div className="col-span-3 text-center">Small Tin</div>
                <div className="col-span-3 text-right">Large Tin</div>
              </div>

              {OFFICIAL_COOKIE_TIN_PRICES.map((row) => (
                <div
                  key={row.flavor}
                  className="grid grid-cols-12 items-center text-xs sm:text-sm p-2 rounded-lg hover:bg-[#FFF5F7] transition-colors gap-1"
                >
                  <div className="col-span-6 font-semibold text-[#1E181B] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E8506D]" />
                    <span className="truncate">{row.flavor}</span>
                  </div>

                  <div className="col-span-3 text-center">
                    <button
                      onClick={() =>
                        onAddDirectCustom(row.flavor, {
                          label: `${row.flavor} (Small Tin)`,
                          price: row.small,
                          weightOrQuantity: 'Small'
                        })
                      }
                      className="inline-flex items-center gap-1 bg-[#FFE8EC] hover:bg-[#E8506D] hover:text-white text-[#E8506D] px-2 py-1 rounded-md text-xs font-bold transition-colors border border-[#FFD0D8]"
                      title="Add Small Tin"
                    >
                      <span>₹{row.small}</span>
                      <ShoppingBag className="w-2.5 h-2.5" />
                    </button>
                  </div>

                  <div className="col-span-3 text-right">
                    <button
                      onClick={() =>
                        onAddDirectCustom(row.flavor, {
                          label: `${row.flavor} (Large Tin)`,
                          price: row.large,
                          weightOrQuantity: 'Large'
                        })
                      }
                      className="inline-flex items-center gap-1 bg-[#18151D] hover:bg-[#2B2533] text-white px-2.5 py-1 rounded-md text-xs font-bold transition-colors shadow-xs border border-[#E8506D]/30"
                      title="Add Large Tin"
                    >
                      <span>₹{row.large}</span>
                      <ShoppingBag className="w-2.5 h-2.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Flyer Footer Info */}
            <div className="pt-3 border-t border-[#F2D0D7] text-center space-y-1.5">
              <p className="text-[11px] text-[#7A666D] font-medium">
                Fresh • Eggless • Homemade • Self Pickup in Solapur
              </p>
              <div className="flex items-center justify-center gap-4 text-xs font-bold text-[#E8506D]">
                <a
                  href={`https://wa.me/918855952207?text=${encodeURIComponent('Hi Deeps Bake House! I would like to order from the Cookie Tins menu 🍪')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#25D366] hover:underline"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-[#25D366]" />
                  <span>WhatsApp Order</span>
                </a>
                <span>•</span>
                <span>@deepsbakehouse</span>
              </div>
            </div>
          </div>

          {/* Card 2: Official Cheesecake Menu Card */}
          <div className="bg-white rounded-xl p-6 sm:p-8 border border-[#F2D0D7] shadow-sm relative overflow-hidden flex flex-col justify-between">
            {/* Top flyer header */}
            <div className="text-center space-y-1 pb-4 border-b border-[#F2D0D7]">
              <h3 className="font-serif font-extrabold text-2xl sm:text-3xl text-[#18151D] tracking-wide">
                DEEP'S BAKE HOUSE
              </h3>
              <p className="text-[10px] tracking-widest uppercase font-semibold text-[#7A666D]">
                All Prices Are For Takeaway Only • Madhav Nagar, Solapur
              </p>
              <div className="pt-2">
                <span className="inline-block bg-[#E8506D] text-white font-serif font-bold text-xs sm:text-sm uppercase px-4 py-1 rounded-sm shadow-xs tracking-wider">
                  Cheesecake Menu (250g Bento Boxes)
                </span>
              </div>
            </div>

            {/* Cheesecake Items Table */}
            <div className="py-4 space-y-2">
              {OFFICIAL_CHEESECAKE_PRICES.map(item => (
                <div
                  key={item.item}
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-[#FFF5F7] transition-colors border-b border-dashed border-[#F2D0D7] last:border-none"
                >
                  <div className="space-y-0.5">
                    <div className="font-serif font-bold text-[#1E181B] text-sm sm:text-base flex items-center gap-2">
                      <Heart className="w-3 h-3 text-[#E8506D] fill-[#E8506D]" />
                      <span>{item.item}</span>
                    </div>
                    <span className="text-[10px] text-[#7A666D] pl-5">Pure Cream Cheese • {item.size} Bento</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="font-serif font-bold text-base sm:text-lg text-[#E8506D]">
                      ₹{item.price}
                    </span>
                    <button
                      onClick={() =>
                        onAddDirectCustom(item.item, {
                          label: `${item.item} (250g Bento)`,
                          price: item.price,
                          weightOrQuantity: '250g'
                        })
                      }
                      className="bg-[#18151D] hover:bg-[#2B2533] text-white px-2.5 py-1.5 rounded-md text-xs font-bold flex items-center gap-1 transition-colors shadow-xs border border-[#E8506D]/30"
                    >
                      <span>Add</span>
                      <ShoppingBag className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Half KG & 1 KG Pre-Order Notice */}
            <div className="bg-[#FFF5F7] rounded-xl p-3.5 border border-[#F2D0D7] space-y-1.5 text-center">
              <div className="flex items-center justify-center gap-2 font-serif font-bold text-xs sm:text-sm text-[#E8506D]">
                <Cake className="w-4 h-4" />
                <span>HALF KG &amp; 1 KG Available on Pre-Order</span>
              </div>
              <p className="text-[11px] text-[#665158]">
                Customizable celebration cakes for Birthdays &amp; Anniversaries! Message us on WhatsApp with 24-48 hrs prior notice.
              </p>
              <a
                href={`https://wa.me/918855952207?text=${encodeURIComponent('Hi Deeps Bake House! I would like to inquire and pre-order a Half KG / 1 KG Cheesecake 🎂✨')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#25D366] hover:underline"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-[#25D366]" />
                <span>Pre-order 1/2 KG &amp; 1 KG via WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
