import React, { useState, useEffect } from 'react';
import { MenuItem, PriceOption, CartItem } from './types';
import { MENU_ITEMS as itemsData } from './data/bakeryData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuCard } from './components/MenuCard';
import { OfficialMenuCards } from './components/OfficialMenuCards';
import { CartDrawer } from './components/CartDrawer';
import { QuickViewModal } from './components/QuickViewModal';
import { SolapurLocation } from './components/SolapurLocation';
import { BakeryPromises } from './components/BakeryPromises';
import { Footer } from './components/Footer';
import { 
  Search, 
  Sparkles, 
  Heart, 
  Cake, 
  Cookie, 
  Coffee, 
  Star, 
  MessageCircle, 
  Filter,
  CheckCircle2,
  SlidersHorizontal,
  Instagram,
  ShoppingBag
} from 'lucide-react';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [pureCreamCheeseFilter, setPureCreamCheeseFilter] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('deeps_bakehouse_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [quickViewItem, setQuickViewItem] = useState<MenuItem | null>(null);

  // Sync cart to local storage
  useEffect(() => {
    try {
      localStorage.setItem('deeps_bakehouse_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error(e);
    }
  }, [cartItems]);

  const handleAddToCart = (item: MenuItem, selectedOption: PriceOption, quantity: number = 1) => {
    setCartItems(prev => {
      const existingIndex = prev.findIndex(
        ci => ci.menuItem.id === item.id && ci.selectedOption.label === selectedOption.label
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        const newCartItem: CartItem = {
          id: `${item.id}-${selectedOption.label}-${Date.now()}`,
          menuItem: item,
          selectedOption,
          quantity
        };
        return [...prev, newCartItem];
      }
    });
  };

  const handleAddDirectCustom = (name: string, option: PriceOption) => {
    // Find matching item or create a custom item
    const matching = itemsData.find(i => i.name.toLowerCase().includes(name.toLowerCase())) || itemsData[0];
    const customMenuItem: MenuItem = {
      ...matching,
      id: `custom-${name.toLowerCase().replace(/\s+/g, '-')}`,
      name: name,
      userDescription: `Custom Order: ${name}`,
      detailedDescription: `Freshly baked to order from Deeps Bake House menu card.`,
      basePrice: option.price
    };

    handleAddToCart(customMenuItem, option, 1);
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (cartItemId: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(cartItemId);
      return;
    }
    setCartItems(prev =>
      prev.map(item => (item.id === cartItemId ? { ...item, quantity: newQty } : item))
    );
  };

  const handleRemoveItem = (cartItemId: string) => {
    setCartItems(prev => prev.filter(item => item.id !== cartItemId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Filter items
  const filteredItems = itemsData.filter(item => {
    // Category match
    const matchCategory = activeCategory === 'all' || item.category === activeCategory;
    
    // Search query match
    const matchSearch =
      searchQuery.trim() === '' ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.userDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.detailedDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.badges.some(b => b.toLowerCase().includes(searchQuery.toLowerCase()));

    // Pure cream cheese filter
    const matchPure = !pureCreamCheeseFilter || item.pureCreamCheese;

    return matchCategory && matchSearch && matchPure;
  });

  const scrollToMenu = () => {
    const el = document.getElementById('menu-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FFF9F5] text-[#352A30] flex flex-col font-sans selection:bg-[#FFE0E6] selection:text-[#E8506D]">
      
      {/* Top Sticky Navbar */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        activeCategory={activeCategory}
        onSelectCategory={cat => setActiveCategory(cat)}
      />

      {/* Hero Section */}
      <Hero onExploreMenu={scrollToMenu} />

      {/* Main Menu Explorer Section */}
      <main id="menu-section" className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        
        {/* Section Title & Tagline */}
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 bg-[#E8506D] text-white px-3.5 py-1 rounded-sm text-[10px] font-bold uppercase tracking-wider shadow-xs">
            <Heart className="w-3.5 h-3.5 fill-white" />
            Deep's Fresh Menu (13 Items)
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1E181B]">
            Handcrafted With Pure Cream Cheese &amp; Love
          </h2>
          <p className="text-xs sm:text-sm text-[#665158] leading-relaxed">
            No oil used, no maida added in our cheesecakes. Browse our full gallery of cheesecakes, bombolonis, cookie tins, and party donut boxes.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="bg-white p-4 sm:p-5 rounded-xl border border-[#F2D0D7] shadow-sm space-y-4">
          
          {/* Top Bar: Search input + Pure Cream Cheese Toggle */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="relative flex-1 w-full">
              <Search className="w-4 h-4 text-[#8C7B75] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search cheesecakes, cookie tins, donuts, bombolonis..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-[#FAF7F5] border border-[#F2D0D7] focus:border-[#E8506D] focus:ring-1 focus:ring-[#E8506D] rounded-xl text-xs sm:text-sm outline-none text-[#1E181B]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#8C7B75] hover:text-[#E8506D]"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setPureCreamCheeseFilter(!pureCreamCheeseFilter)}
              className={`w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 border transition-all ${
                pureCreamCheeseFilter
                  ? 'bg-[#E8506D] text-white border-[#E8506D] shadow-xs'
                  : 'bg-[#FAF7F5] text-[#1E181B] border-[#F2D0D7] hover:border-[#E8506D]'
              }`}
            >
              <CheckCircle2 className={`w-4 h-4 ${pureCreamCheeseFilter ? 'text-[#FEF08A]' : 'text-[#8C7B75]'}`} />
              <span>Pure Cream Cheese Only</span>
            </button>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {[
              { id: 'all', label: 'All Items', count: itemsData.length },
              { id: 'cheesecakes', label: 'Cheesecakes 🧀', count: itemsData.filter(i => i.category === 'cheesecakes').length },
              { id: 'cookies', label: 'Cookie Tins 🍪', count: itemsData.filter(i => i.category === 'cookies').length },
              { id: 'donuts', label: 'Donuts & Bombolonis 🍩', count: itemsData.filter(i => i.category === 'donuts').length },
              { id: 'specials', label: 'Specials & Platters 🩷', count: itemsData.filter(i => i.category === 'specials').length },
              { id: 'menus', label: 'Menu Cards 📋', count: itemsData.filter(i => i.category === 'menus').length }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-lg text-xs font-bold transition-all shrink-0 ${
                  activeCategory === tab.id
                    ? 'bg-[#18151D] text-white shadow-xs'
                    : 'bg-[#F7EFEF] text-[#4A3933] hover:bg-[#EFE4E4]'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`ml-1.5 px-1.5 py-0.2 rounded-full text-[10px] ${
                  activeCategory === tab.id ? 'bg-[#E8506D] text-white' : 'bg-[#E8D9DE] text-[#4A3933]'
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

        </div>

        {/* Menu Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl border border-[#F2D0D7] p-8 space-y-3">
            <div className="text-3xl">🍰</div>
            <h3 className="font-serif font-bold text-lg text-[#1E181B]">
              No menu items match your search
            </h3>
            <p className="text-xs text-[#7A666D]">
              Try searching for &quot;Nutella&quot;, &quot;Biscoff&quot;, &quot;Cookie&quot;, or reset the category filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
                setPureCreamCheeseFilter(false);
              }}
              className="bg-[#E8506D] text-white text-xs font-bold px-5 py-2 rounded-lg hover:bg-[#D63F5C] transition-colors shadow-xs"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map(item => (
              <MenuCard
                key={item.id}
                item={item}
                onAddToCart={handleAddToCart}
                onQuickView={i => setQuickViewItem(i)}
              />
            ))}
          </div>
        )}

      </main>

      {/* Official Menu Flyers Section */}
      <OfficialMenuCards onAddDirectCustom={handleAddDirectCustom} />

      {/* Bakery Promises & Highlights */}
      <BakeryPromises />

      {/* Solapur Pickup Location & Pre-Order Instructions */}
      <SolapurLocation />

      {/* Mobile Sticky Quick Order & Cart Bar */}
      <div className="md:hidden sticky bottom-0 z-30 bg-[#18151D]/95 backdrop-blur-md border-t border-[#E8506D]/30 px-4 py-2.5 flex items-center justify-between gap-3 shadow-2xl">
        <a
          href={`https://wa.me/918855952207?text=${encodeURIComponent('Hi Deeps Bake House! ❤️ I would like to place an order from your menu.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white py-2.5 px-4 rounded-xl font-bold text-xs shadow-md active:scale-95 transition-all"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>WhatsApp Order</span>
        </a>

        <button
          onClick={() => setIsCartOpen(true)}
          className="flex items-center justify-center gap-2 bg-[#E8506D] text-white py-2.5 px-4 rounded-xl font-bold text-xs shadow-md active:scale-95 transition-all relative border border-[#FF859C]/40"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>Bag</span>
          {totalCartCount > 0 && (
            <span className="bg-white text-[#18151D] text-[10px] font-black w-4.5 h-4.5 rounded-full flex items-center justify-center shadow-xs">
              {totalCartCount}
            </span>
          )}
        </button>
      </div>

      {/* Footer */}
      <Footer />

      {/* Quick View Modal */}
      <QuickViewModal
        item={quickViewItem}
        onClose={() => setQuickViewItem(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Cart & WhatsApp Checkout Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Floating Bottom WhatsApp & Cart Bar for Quick Mobile Access */}
      <div className="fixed bottom-5 right-5 z-40 flex items-center gap-3">
        
        {/* Floating Cart Launcher */}
        {totalCartCount > 0 && (
          <button
            onClick={() => setIsCartOpen(true)}
            className="flex items-center gap-2 bg-[#9B87B5] text-white px-4 py-3 rounded-full shadow-lg hover:bg-[#826DA3] transition-transform active:scale-95 font-bold text-xs sm:text-sm border border-white"
          >
            <span>Order Bag ({totalCartCount})</span>
          </button>
        )}

        {/* Floating WhatsApp Quick Order Button */}
        <a
          href={`https://wa.me/918855952207?text=${encodeURIComponent('Hello Deeps Bake House! ❤️ I would like to order fresh bakes today.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-4 py-3 rounded-full shadow-lg transition-all transform hover:scale-105 active:scale-95 font-bold text-xs sm:text-sm"
          title="Direct WhatsApp Order with Deeps Bake House"
        >
          <MessageCircle className="w-5 h-5 fill-white" />
          <span>WhatsApp Order</span>
        </a>
      </div>

    </div>
  );
}
