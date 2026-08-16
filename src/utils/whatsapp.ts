import { CartItem, OrderDetails } from '../types';
import { BAKERY_PHONE, BAKERY_ADDRESS } from '../data/bakeryData';

export function createDirectItemWhatsAppLink(
  itemName: string,
  selectedOptionLabel: string,
  price: number,
  quantity: number = 1,
  customNote?: string
): string {
  const text = `👋 *Hello Deeps Bake House!* 🍰
I would like to place an order from your menu:

📌 *Item:* ${itemName}
⚖️ *Size / Option:* ${selectedOptionLabel}
🔢 *Quantity:* ${quantity}
💰 *Estimated Price:* ₹${price * quantity}
${customNote ? `📝 *Note / Customization:* ${customNote}\n` : ''}
📍 *Pickup Location:* Solapur (${BAKERY_ADDRESS})

Please let me know the availability and payment details! ❤️`;

  return `https://wa.me/91${BAKERY_PHONE}?text=${encodeURIComponent(text)}`;
}

export function createFullCartWhatsAppLink(
  items: CartItem[],
  orderDetails: OrderDetails,
  totalAmount: number
): string {
  let itemListText = '';
  items.forEach((item, index) => {
    const itemTotal = item.selectedOption.price * item.quantity;
    itemListText += `${index + 1}. *${item.menuItem.name}*\n   • Option: ${item.selectedOption.label} (${item.selectedOption.weightOrQuantity || ''})\n   • Qty: ${item.quantity} × ₹${item.selectedOption.price} = ₹${itemTotal}${item.customNote ? `\n   • Note: ${item.customNote}` : ''}\n\n`;
  });

  const message = `✨ *NEW ORDER REQUEST - Deeps Bake House* ✨
-------------------------------------
👤 *Customer Name:* ${orderDetails.customerName || 'Customer'}
📞 *Phone Number:* ${orderDetails.customerPhone || 'Via WhatsApp'}
📅 *Preferred Date:* ${orderDetails.pickupDate || 'Earliest available'}
⏰ *Pickup Time:* ${orderDetails.pickupTime || 'Standard pickup'}
${orderDetails.customMessageOnCake ? `🎂 *Cake Message:* "${orderDetails.customMessageOnCake}"\n` : ''}${orderDetails.specialInstructions ? `📝 *Special Requests:* ${orderDetails.specialInstructions}\n` : ''}
🛍️ *ORDER DETAILS:*
-------------------------------------
${itemListText}-------------------------------------
💵 *Total Estimated Amount:* ₹${totalAmount}
📍 *Pickup At:* Mahalaxmi Nilayam, Madhav Nagar, Solapur

Please confirm my order and share payment instructions! Thank you! ❤️🧁`;

  return `https://wa.me/91${BAKERY_PHONE}?text=${encodeURIComponent(message)}`;
}
