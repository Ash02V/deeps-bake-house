import React, { useState } from 'react';
import { CartItem, OrderDetails } from '../types';
import { createFullCartWhatsAppLink } from '../utils/whatsapp';
import { BAKERY_ADDRESS } from '../data/bakeryData';
import bakeryLogoImg from '../assets/images/deeps_exact_logo_1786866939417.jpg';
import { X, Trash2, ShoppingBag, MessageCircle, Calendar, Clock, User, Phone, Sparkles, AlertCircle, Copy, Check } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (cartItemId: string, newQty: number) => void;
  onRemoveItem: (cartItemId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  const [orderDetails, setOrderDetails] = useState<OrderDetails>({
    customerName: '',
    customerPhone: '',
    pickupDate: 'Today / Earliest Available',
    pickupTime: 'Evening (5:00 PM - 8:00 PM)',
    customMessageOnCake: '',
    specialInstructions: ''
  });

  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const totalAmount = items.reduce(
    (sum, item) => sum + item.selectedOption.price * item.quantity,
    0
  );

  const fullWhatsAppUrl = createFullCartWhatsAppLink(items, orderDetails, totalAmount);

  const handleCopyMessage = () => {
    // Generate text only
    let itemListText = '';
    items.forEach((item, index) => {
      const itemTotal = item.selectedOption.price * item.quantity;
      itemListText += `${index + 1}. ${item.menuItem.name} (${item.selectedOption.label}) x ${item.quantity} = ₹${itemTotal}\n`;
    });

    const msg = `✨ ORDER FOR DEEPS BAKE HOUSE ✨
Customer: ${orderDetails.customerName || 'Customer'}
Phone: ${orderDetails.customerPhone || 'Via WhatsApp'}
Pickup Date & Time: ${orderDetails.pickupDate} at ${orderDetails.pickupTime}
${orderDetails.customMessageOnCake ? `Cake Inscription: ${orderDetails.customMessageOnCake}\n` : ''}
Items:
${itemListText}
Total: ₹${totalAmount}
Pickup: Mahalaxmi Nilayam, Madhav Nagar, Solapur`;

    navigator.clipboard.writeText(msg);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FFF9F5] shadow-2xl flex flex-col justify-between border-l border-[#F2D0D7]">
          
          {/* Header */}
          <div className="p-5 bg-[#18151D] text-white flex items-center justify-between border-b border-[#E8506D]/30">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center overflow-hidden border border-[#E8506D] shrink-0 p-0.5 shadow-sm">
                <img
                  src={bakeryLogoImg}
                  alt="Deep's Bake House"
                  className="w-full h-full object-cover rounded-full"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg leading-tight text-white">
                  Your Bake House Bag
                </h3>
                <p className="text-xs text-[#FF859C]">
                  {items.length} {items.length === 1 ? 'item' : 'items'} selected
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/15 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-5 space-y-6">
            
            {items.length === 0 ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mx-auto overflow-hidden shadow-md border-2 border-[#E8506D]/40 p-0.5">
                  <img
                    src={bakeryLogoImg}
                    alt="Deep's Bake House"
                    className="w-full h-full object-cover rounded-full"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif font-bold text-lg text-[#1E181B]">
                    Your bag is empty
                  </h4>
                  <p className="text-xs text-[#665158] max-w-xs mx-auto">
                    Select delicious handcrafted cheesecakes, cookie tins or donuts from the menu to build your WhatsApp order!
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="bg-[#E8506D] text-white text-xs font-bold px-6 py-2.5 rounded-lg hover:bg-[#D63F5C] transition-colors shadow-xs"
                >
                  Explore Menu
                </button>
              </div>
            ) : (
              <>
                {/* List of Cart Items */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-1 border-b border-[#F2D0D7]">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#7A666D]">
                      Selected Bakes
                    </span>
                    <button
                      onClick={onClearCart}
                      className="text-[11px] text-[#DC2626] hover:underline flex items-center gap-1 font-medium"
                    >
                      <Trash2 className="w-3 h-3" /> Clear All
                    </button>
                  </div>

                  {items.map(item => (
                    <div
                      key={item.id}
                      className="p-3.5 bg-white rounded-xl border border-[#F2D0D7] flex items-center justify-between gap-3 shadow-xs"
                    >
                      <div className="flex-1 min-w-0 space-y-1">
                        <h4 className="font-serif font-bold text-sm text-[#1E181B] truncate">
                          {item.menuItem.name}
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-[#665158]">
                          <span className="bg-[#FFE8EC] text-[#E8506D] px-2 py-0.5 rounded-md text-[10px] font-semibold border border-[#FFD0D8]">
                            {item.selectedOption.label}
                          </span>
                          <span className="font-bold text-[#E8506D]">
                            ₹{item.selectedOption.price * item.quantity}
                          </span>
                        </div>
                      </div>

                      {/* Quantity Controls & Delete */}
                      <div className="flex items-center gap-2">
                        <div className="flex items-center bg-[#FAF7F5] border border-[#F0D5DA] rounded-full p-0.5">
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-[#1E181B] hover:bg-[#F2D0D7]"
                          >
                            -
                          </button>
                          <span className="w-6 text-center text-xs font-bold text-[#1E181B]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-[#1E181B] hover:bg-[#F2D0D7]"
                          >
                            +
                          </button>
                        </div>

                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="p-1.5 text-[#DC2626] hover:bg-[#FEE2E2] rounded-full transition-colors"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Customer Details Form for WhatsApp message */}
                <div className="space-y-4 pt-2 border-t border-[#F2D0D7]">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#7A666D] block">
                    Order &amp; Pickup Details
                  </span>

                  <div className="space-y-3">
                    <div>
                      <label className="text-xs font-medium text-[#1E181B] flex items-center gap-1.5 mb-1">
                        <User className="w-3.5 h-3.5 text-[#E8506D]" />
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Ashwini Vaddepalli"
                        value={orderDetails.customerName}
                        onChange={e =>
                          setOrderDetails({ ...orderDetails, customerName: e.target.value })
                        }
                        className="w-full bg-white border border-[#F2D0D7] focus:border-[#E8506D] focus:ring-1 focus:ring-[#E8506D] rounded-lg px-3 py-2 text-xs text-[#1E181B] outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="text-xs font-medium text-[#1E181B] flex items-center gap-1 mb-1">
                          <Calendar className="w-3.5 h-3.5 text-[#E8506D]" />
                          Pickup Date
                        </label>
                        <select
                          value={orderDetails.pickupDate}
                          onChange={e =>
                            setOrderDetails({ ...orderDetails, pickupDate: e.target.value })
                          }
                          className="w-full bg-white border border-[#F2D0D7] rounded-lg px-2.5 py-2 text-xs text-[#1E181B] outline-none"
                        >
                          <option value="Today (Fresh Batch)">Today</option>
                          <option value="Tomorrow">Tomorrow</option>
                          <option value="This Weekend">This Weekend</option>
                          <option value="Specific Date (Will mention in chat)">Custom Date</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-xs font-medium text-[#1E181B] flex items-center gap-1 mb-1">
                          <Clock className="w-3.5 h-3.5 text-[#E8506D]" />
                          Pickup Slot
                        </label>
                        <select
                          value={orderDetails.pickupTime}
                          onChange={e =>
                            setOrderDetails({ ...orderDetails, pickupTime: e.target.value })
                          }
                          className="w-full bg-white border border-[#F2D0D7] rounded-lg px-2.5 py-2 text-xs text-[#1E181B] outline-none"
                        >
                          <option value="Morning (11 AM - 1 PM)">11 AM - 1 PM</option>
                          <option value="Afternoon (2 PM - 5 PM)">2 PM - 5 PM</option>
                          <option value="Evening (5 PM - 8 PM)">5 PM - 8 PM</option>
                          <option value="Night (8 PM - 9:30 PM)">8 PM - 9:30 PM</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-medium text-[#1E181B] flex items-center gap-1.5 mb-1">
                        <Sparkles className="w-3.5 h-3.5 text-[#E8506D]" />
                        Message on Cake / Tag (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Happy Birthday Rahul 🎉"
                        value={orderDetails.customMessageOnCake}
                        onChange={e =>
                          setOrderDetails({ ...orderDetails, customMessageOnCake: e.target.value })
                        }
                        className="w-full bg-white border border-[#F2D0D7] focus:border-[#E8506D] rounded-lg px-3 py-2 text-xs text-[#1E181B] outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-medium text-[#1E181B] block mb-1">
                        Special Requests / Notes (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Extra gift ribbon, candle needed, etc."
                        value={orderDetails.specialInstructions}
                        onChange={e =>
                          setOrderDetails({ ...orderDetails, specialInstructions: e.target.value })
                        }
                        className="w-full bg-white border border-[#F2D0D7] focus:border-[#E8506D] rounded-lg px-3 py-2 text-xs text-[#1E181B] outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Pickup Address Alert */}
                <div className="bg-[#FFF2F4] p-3 rounded-xl border border-[#F2D0D7] text-xs text-[#665158] space-y-1">
                  <p className="font-bold text-[#1E181B] flex items-center gap-1">
                    📍 Self Pickup in Solapur:
                  </p>
                  <p className="text-[11px] leading-relaxed">
                    {BAKERY_ADDRESS}
                  </p>
                </div>
              </>
            )}

          </div>

          {/* Footer with Total and Main WhatsApp CTA */}
          {items.length > 0 && (
            <div className="p-5 bg-white border-t border-[#F2D0D7] space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#7A666D] block">Total Estimated Amount</span>
                  <span className="font-serif font-black text-2xl text-[#E8506D]">
                    ₹{totalAmount}
                  </span>
                </div>

                <button
                  onClick={handleCopyMessage}
                  className="flex items-center gap-1 text-xs text-[#E8506D] bg-[#FFE8EC] hover:bg-[#FFD0D8] px-3 py-1.5 rounded-lg font-semibold transition-colors border border-[#FFCCD5]"
                  title="Copy WhatsApp order text"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" /> Copy Text
                    </>
                  )}
                </button>
              </div>

              {/* Huge WhatsApp checkout button */}
              <a
                id="send-cart-whatsapp-btn"
                href={fullWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold py-3 px-4 rounded-xl text-sm shadow-sm hover:shadow-md transition-all transform active:scale-98 text-center"
              >
                <MessageCircle className="w-5 h-5 fill-white shrink-0" />
                <span>WhatsApp Order</span>
              </a>

              <p className="text-[10px] text-center text-[#7A666D]">
                ✨ Clicking opens WhatsApp directly with your pre-formatted order message!
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
