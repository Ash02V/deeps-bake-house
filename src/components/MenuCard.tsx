import React, { useState } from 'react';
import { MenuItem, PriceOption } from '../types';
import { MessageCircle, Plus, Check, Info, Sparkles, Heart } from 'lucide-react';
import { createDirectItemWhatsAppLink } from '../utils/whatsapp';

interface MenuCardProps {
  item: MenuItem;
  onAddToCart: (item: MenuItem, selectedOption: PriceOption, quantity: number) => void;
  onQuickView: (item: MenuItem) => void;
}

export const MenuCard: React.FC<MenuCardProps> = ({
  item,
  onAddToCart,
  onQuickView
}) => {
  const options = item.priceOptions || [{ label: 'Standard', price: item.basePrice }];
  const [selectedOption, setSelectedOption] = useState<PriceOption>(
    options.find(opt => opt.isPopular) || options[0]
  );
  const [quantity, setQuantity] = useState(1);
  const [addedAnimation, setAddedAnimation] = useState(false);

  const handleAdd = () => {
    onAddToCart(item, selectedOption, quantity);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1500);
  };

  const whatsappDirectLink = createDirectItemWhatsAppLink(
    item.name,
    selectedOption.label,
    selectedOption.price,
    quantity
  );

  return (
    <div
      id={`menu-item-${item.id}`}
      className="group bg-white rounded-xl overflow-hidden border border-[#F2D0D7] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between hover:border-[#E8506D]"
    >
      {/* Image Container */}
      <div className="relative aspect-4/3 overflow-hidden bg-[#FFE8EC]">
        <img
          src={item.image}
          alt={item.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        
        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
          {item.pureCreamCheese && (
            <span className="bg-[#18151D] text-[#FF859C] border border-[#FF6584]/30 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-sm shadow-xs">
              Pure Cream Cheese
            </span>
          )}
          {item.isEggless && (
            <span className="bg-white/95 backdrop-blur-xs text-[#2A6E3B] border border-[#BCE1C5] text-[10px] font-bold px-2 py-0.5 rounded-sm flex items-center gap-1 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2A6E3B]" />
              100% Eggless
            </span>
          )}
        </div>

        {/* Quick View Button Overlay */}
        <button
          onClick={() => onQuickView(item)}
          className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-xs text-[#E8506D] hover:bg-[#E8506D] hover:text-white p-2 rounded-full shadow-xs transition-all text-xs font-semibold flex items-center gap-1 opacity-90 group-hover:opacity-100 border border-[#F2D0D7]"
          title="Quick Details"
        >
          <Info className="w-4 h-4" />
          <span className="hidden sm:inline text-[11px] pr-1 font-bold">Details</span>
        </button>
      </div>

      {/* Content Section */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        
        {/* Title & Authentic User Description Quote */}
        <div className="space-y-2">
          {item.marathiHindiTagline && (
            <p className="text-[10px] font-bold tracking-wider uppercase text-[#E8506D]">
              {item.marathiHindiTagline}
            </p>
          )}
          
          <h3 className="font-serif font-bold text-lg text-[#1E181B] leading-snug group-hover:text-[#E8506D] transition-colors">
            {item.name}
          </h3>

          {/* Authentic Customer Post Quote */}
          <div className="bg-[#FFF5F7] border-l-3 border-[#E8506D] p-2.5 rounded-r-lg">
            <p className="text-xs text-[#2B1F24] italic font-medium leading-relaxed">
              &ldquo;{item.userDescription}&rdquo;
            </p>
          </div>

          <p className="text-xs text-[#665158] line-clamp-2 leading-relaxed">
            {item.detailedDescription}
          </p>
        </div>

        {/* Option / Portion Selector */}
        {options.length > 1 && (
          <div className="space-y-1.5 pt-1">
            <label className="text-[10px] font-bold uppercase tracking-wider text-[#7A666D] block">
              Select Size / Option:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-1.5">
              {options.map(option => (
                <button
                  key={option.label}
                  type="button"
                  onClick={() => setSelectedOption(option)}
                  className={`text-left px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                    selectedOption.label === option.label
                      ? 'bg-[#E8506D] text-white border-[#E8506D] shadow-xs'
                      : 'bg-white text-[#1E181B] border-[#F0D5DA] hover:border-[#E8506D] hover:bg-[#FFF5F7]'
                  }`}
                >
                  <div className="font-semibold truncate text-[11px]">{option.label}</div>
                  <div className="text-[10px] opacity-90">₹{option.price}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Price & Quantity Bar */}
        <div className="pt-2 border-t border-[#F2D0D7] flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-wider text-[#7A666D] block">
              Price
            </span>
            <div className="flex items-baseline gap-1">
              <span className="font-serif font-extrabold text-xl text-[#E8506D]">
                ₹{selectedOption.price * quantity}
              </span>
              {quantity > 1 && (
                <span className="text-[10px] text-[#7A666D]">
                  (₹{selectedOption.price} × {quantity})
                </span>
              )}
            </div>
          </div>

          {/* Quantity Controls */}
          <div className="flex items-center border border-[#F0D5DA] rounded-full bg-[#FAF7F5] p-0.5">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-[#1E181B] hover:bg-[#F2D0D7] active:scale-95"
            >
              -
            </button>
            <span className="w-7 text-center text-xs font-bold text-[#1E181B]">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-[#1E181B] hover:bg-[#F2D0D7] active:scale-95"
            >
              +
            </button>
          </div>
        </div>

        {/* Action Buttons: Direct WhatsApp + Add to Cart */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          {/* Direct WhatsApp Order */}
          <a
            id={`whatsapp-btn-${item.id}`}
            href={whatsappDirectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold py-2.5 px-3 rounded-xl text-xs shadow-xs hover:shadow-sm transition-all text-center"
            title="Order instantly on WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white shrink-0" />
            <span className="truncate">WhatsApp Order</span>
          </a>

          {/* Add to Cart */}
          <button
            id={`add-cart-btn-${item.id}`}
            type="button"
            onClick={handleAdd}
            className={`flex items-center justify-center gap-1.5 font-bold py-2.5 px-3 rounded-xl text-xs transition-all text-center ${
              addedAnimation
                ? 'bg-[#2A6E3B] text-white'
                : 'bg-[#18151D] hover:bg-[#2B2533] text-white shadow-xs hover:shadow-sm border border-[#E8506D]/30'
            }`}
          >
            {addedAnimation ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Added!</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5" />
                <span className="truncate">Add to Bag</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};
