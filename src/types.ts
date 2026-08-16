export interface PriceOption {
  label: string;
  price: number;
  weightOrQuantity?: string;
  isPopular?: boolean;
}

export interface MenuItem {
  id: string;
  name: string;
  marathiHindiTagline?: string;
  category: 'cheesecakes' | 'cookies' | 'donuts' | 'specials' | 'menus';
  userDescription: string;
  detailedDescription: string;
  basePrice: number;
  priceOptions?: PriceOption[];
  image: string;
  badges: string[];
  isEggless: boolean;
  pureCreamCheese?: boolean;
  preOrderOnly?: boolean;
  takeawayOnly?: boolean;
  whatsappMessage: string;
  rating?: number;
  servingSuggestion?: string;
}

export interface CartItem {
  id: string;
  menuItem: MenuItem;
  selectedOption: PriceOption;
  quantity: number;
  customNote?: string;
}

export interface OrderDetails {
  customerName: string;
  customerPhone: string;
  pickupDate: string;
  pickupTime: string;
  customMessageOnCake?: string;
  specialInstructions?: string;
}
