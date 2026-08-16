import React, { useState } from 'react';
import { MenuItem, PriceOption } from '../types';
import { createDirectItemWhatsAppLink } from '../utils/whatsapp';
import { X, MessageCircle, Plus, Check, Heart, Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface QuickViewModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onAddToCart: (item: MenuItem, selectedOption: PriceOption, quantity: number) => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  item,
  onClose,
  onAddToCart
}) => {
  if (!item) return null;

  const options = item.priceOptions || [{ label: 'Standard', price: item.basePrice }];
  const [selectedOption, setSelectedOption] = useState<PriceOption>(
    options.find(opt => opt.isPopular) || options[0]
  );
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart(item, selectedOption, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const directWhatsApp = createDirectItemWhatsAppLink(
    item.name,
    selectedOption.label,
    selectedOption.price,
    quantity
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div
        className="relative bg-[#FFF9F5] rounded-xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#F2D0D7] animate-in fade-in zoom-in-95 duration-200"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 hover:bg-white text-[#1E181B] shadow-sm transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-square md:aspect-auto bg-[#FFE8EC]">
            <img
              src={item.image}
              alt={item.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            {item.pureCreamCheese && (
              <div className="absolute bottom-4 left-4 bg-[#18151D] text-[#FF859C] border border-[#FF6584]/30 text-xs font-bold px-3 py-1 rounded-sm shadow-xs">
                100% Pure Cream Cheese
              </div>
            )}
          </div>

          {/* Details */}
          <div className="p-6 md:p-8 flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              {item.marathiHindiTagline && (
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#E8506D]">
                  {item.marathiHindiTagline}
                </span>
              )}

              <h3 className="font-serif font-extrabold text-2xl text-[#1E181B] leading-tight">
                {item.name}
              </h3>

              {/* Exact user description */}
              <div className="bg-[#FFF2F4] border-l-3 border-[#E8506D] p-3 rounded-r-lg">
                <p className="text-xs font-medium text-[#231A1E] italic leading-relaxed">
                  &ldquo;{item.userDescription}&rdquo;
                </p>
              </div>

              <p className="text-xs text-[#665158] leading-relaxed">
                {item.detailedDescription}
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {item.badges.map(b => (
                  <span
                    key={b}
                    className="text-[11px] font-semibold bg-[#FFE8EC] text-[#E8506D] px-2.5 py-0.5 rounded-sm border border-[#FFD0D8]"
                  >
                    ✓ {b}
                  </span>
                ))}
              </div>

              {item.servingSuggestion && (
                <div className="text-[11px] text-[#1E181B] bg-[#FFF2F4] p-2.5 rounded-lg flex items-start gap-1.5 border border-[#F2D0D7]">
                  <Sparkles className="w-3.5 h-3.5 mt-0.5 text-[#E8506D] shrink-0" />
                  <span>{item.servingSuggestion}</span>
                </div>
              )}
            </div>

            {/* Option selector */}
            <div className="space-y-3 pt-2 border-t border-[#F2D0D7]">
              {options.length > 1 && (
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-[#7A666D] block">
                    Choose Portion / Size:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {options.map(opt => (
                      <button
                        key={opt.label}
                        onClick={() => setSelectedOption(opt)}
                        className={`p-2 rounded-lg text-left border text-xs transition-all ${
                          selectedOption.label === opt.label
                            ? 'bg-[#E8506D] text-white border-[#E8506D] shadow-xs'
                            : 'bg-white text-[#1E181B] border-[#F0D5DA] hover:border-[#E8506D]'
                        }`}
                      >
                        <div className="font-bold truncate">{opt.label}</div>
                        <div className="text-[11px] opacity-90">₹{opt.price}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Price & Quantity */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#7A666D] block">
                    Total
                  </span>
                  <span className="font-serif font-black text-2xl text-[#E8506D]">
                    ₹{selectedOption.price * quantity}
                  </span>
                </div>

                <div className="flex items-center bg-[#FAF7F5] border border-[#F0D5DA] rounded-full p-0.5">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-7 h-7 rounded-full flex items-center justify-center font-bold text-[#1E181B] hover:bg-[#F2D0D7]"
                  >
                    -
                  </button>
                  <span className="w-8 text-center text-xs font-bold text-[#1E181B]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-7 h-7 rounded-full flex items-center justify-center font-bold text-[#1E181B] hover:bg-[#F2D0D7]"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* CTAs */}
              <div className="grid grid-cols-2 gap-2.5 pt-1">
                <a
                  href={directWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold py-2.5 px-3 rounded-lg text-xs shadow-xs hover:shadow-sm transition-all text-center"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>WhatsApp Order</span>
                </a>

                <button
                  onClick={handleAdd}
                  className={`flex items-center justify-center gap-2 font-bold py-2.5 px-3 rounded-lg text-xs transition-all ${
                    added
                      ? 'bg-[#2A6E3B] text-white'
                      : 'bg-[#18151D] hover:bg-[#2B2533] text-white shadow-xs hover:shadow-sm border border-[#E8506D]/30'
                  }`}
                >
                  {added ? (
                    <>
                      <Check className="w-4 h-4" /> Added
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4" /> Add to Bag
                    </>
                  )}
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
