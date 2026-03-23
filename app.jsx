import React, { useState, useEffect, useRef } from 'react';
import { Moon, Sun, ShoppingBag, Menu, X } from 'lucide-react';

export default function ZeroFashionPremium() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentCategory, setCurrentCategory] = useState('men');
  const [menuOpen, setMenuOpen] = useState(false);

  const products = {
    men: [
      { id: 1, name: 'Essential Tee (Port)', price: '$30.00', color: '#8B4C52', image: '👕' },
      { id: 2, name: 'Essential Tee (Deep Forest)', price: '$30.00', color: '#1a3d34', image: '👕' },
      { id: 3, name: 'Essential Tee (Sand)', price: '$30.00', color: '#e8dcc8', image: '👕' },
      { id: 4, name: 'Essential Tee (Charcoal)', price: '$30.00', color: '#3a3a3a', image: '👕' },
      { id: 5, name: 'Essential Tee (Washed Indigo)', price: '$30.00', color: '#4a5f7f', image: '👕' },
      { id: 6, name: 'Essential Tee (Black)', price: '$30.00', color: '#000000', image: '👕' },
      { id: 7, name: 'Essential Tee (Heather Gray)', price: '$30.00', color: '#b0b0b0', image: '👕' },
      { id: 8, name: 'Essential Tee (Olive)', price: '$30.00', color: '#556b42', image: '👕' },
    ],
    women: [
      { id: 1, name: 'Elegant Dress (Blush)', price: '$89.00', color: '#e8b4b8', image: '👗' },
      { id: 2, name: 'Premium Blouse (White)', price: '$65.00', color: '#ffffff', image: '👔' },
      { id: 3, name: 'Silk Top (Burgundy)', price: '$75.00', color: '#8B3A3A', image: '👕' },
      { id: 4, name: 'Modal Tee (Cream)', price: '$35.00', color: '#f5f1e8', image: '👕' },
      { id: 5, name: 'Lightweight Top (Sage)', price: '$45.00', color: '#9cab8f', image: '👕' },
      { id: 6, name: 'Classic Shirt (Navy)', price: '$70.00', color: '#1a3a52', image: '👕' },
      { id: 7, name: 'Cotton Tee (Taupe)', price: '$32.00', color: '#a89989', image: '👕' },
      { id: 8, name: 'Luxe Blouse (Black)', price: '$85.00', color: '#1a1a1a', image: '👔' },
    ],
    children: [
      { id: 1, name: 'Kids Essential Tee (Blue)', price: '$24.00', color: '#4a7ba7', image: '👕' },
      { id: 2, name: 'Fun Color Top (Green)', price: '$26.00', color: '#6ba869', image: '👕' },
      { id: 3, name: 'Comfy Tee (Pink)', price: '$25.00', color: '#d898a8', image: '👕' },
      { id: 4, name: 'Play Shirt (Purple)', price: '$24.00', color: '#8b6ba8', image: '👕' },
      { id: 5, name: 'Adventure Tee (Orange)', price: '$26.00', color: '#d97e3a', image: '👕' },
      { id: 6, name: 'Cozy Top (Gray)', price: '$24.00', color: '#8a8a8a', image: '👕' },
      { id: 7, name: 'Playful Shirt (Yellow)', price: '$25.00', color: '#d4a84c', image: '👕' },
      { id: 8, name: 'Cool Tee (Black)', price: '$24.00', color: '#2a2a2a', image: '👕' },
    ],
  };

  const categories = [
    { id: 'men', label: 'Mens' },
    { id: 'women', label: 'Womens' },
    { id: 'children', label: 'Kids' },
  ];

  const getProducts = () => products[currentCategory] || [];

  // Clothing rack visualization component
  const ClothingRack = () => {
    const rackColors = products[currentCategory].map(p => p.color);
    
    return (
      <div className={`relative w-full h-96 flex items-center justify-center overflow-hidden ${
        darkMode ? 'bg-gradient-to-br from-slate-800 to-slate-900' : 'bg-gradient-to-br from-amber-100 via-amber-50 to-amber-100'
      }`}>
        {/* Rack Rod */}
        <div className={`absolute top-20 w-4/5 h-2 rounded-full ${
          darkMode ? 'bg-slate-600' : 'bg-yellow-900/30'
        }`}></div>

        {/* Clothing Items */}
        <div className="flex items-end justify-center gap-2 h-64">
          {rackColors.slice(0, 8).map((color, idx) => (
            <div key={idx} className="flex flex-col items-center animate-fadeIn" style={{ animationDelay: `${idx * 50}ms` }}>
              {/* Hanger */}
              <div className={`w-8 h-6 rounded-t-full border-2 mb-1 ${
                darkMode ? 'border-slate-600' : 'border-yellow-900/40'
              }`}></div>
              
              {/* Shirt */}
              <div 
                className="w-20 h-40 rounded-t-3xl shadow-lg transition-transform hover:scale-105 cursor-pointer"
                style={{ backgroundColor: color }}
              ></div>
            </div>
          ))}
        </div>

        {/* Collection Title */}
        <div className="absolute bottom-6 left-8">
          <h3 className={`text-xl font-light ${
            darkMode ? 'text-white' : 'text-yellow-900'
          }`}>
            {currentCategory === 'men' && 'New Essential Tees'}
            {currentCategory === 'women' && 'New Premium Collection'}
            {currentCategory === 'children' && 'New Kids Collection'}
          </h3>
          <button className={`text-sm font-light mt-2 transition-all ${
            darkMode 
              ? 'text-yellow-400 hover:text-yellow-300' 
              : 'text-yellow-900 hover:text-yellow-800'
          }`}>
            Learn more →
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      darkMode 
        ? 'bg-slate-950' 
        : 'bg-white'
    }`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 border-b transition-colors ${
        darkMode 
          ? 'bg-slate-900/95 border-slate-800' 
          : 'bg-white/95 border-slate-200'
      } backdrop-blur-sm`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className={`text-2xl font-light tracking-widest transition-colors ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              ZERO FASHION
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCurrentCategory(cat.id)}
                className={`text-sm font-light transition-colors relative group ${
                  currentCategory === cat.id
                    ? darkMode ? 'text-white' : 'text-slate-900'
                    : darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat.label}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all group-hover:w-full ${
                  darkMode ? 'bg-yellow-400' : 'bg-yellow-600'
                }`}></span>
                {currentCategory === cat.id && (
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 ${
                    darkMode ? 'bg-yellow-400' : 'bg-yellow-600'
                  }`}></span>
                )}
              </button>
            ))}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition-colors ${
                darkMode 
                  ? 'bg-slate-800 hover:bg-slate-700 text-yellow-400' 
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button className={`hidden md:flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              darkMode
                ? 'bg-slate-800 hover:bg-slate-700 text-white'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
            }`}>
              <ShoppingBag size={18} />
            </button>

            {/* Mobile Menu */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                darkMode 
                  ? 'bg-slate-800 hover:bg-slate-700' 
                  : 'bg-slate-100 hover:bg-slate-200'
              }`}
            >
              {menuOpen ? <X size={20} className={darkMode ? 'text-white' : 'text-slate-900'} /> : <Menu size={20} className={darkMode ? 'text-white' : 'text-slate-900'} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className={`md:hidden border-t transition-colors ${
            darkMode ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-white'
          }`}>
            <nav className="px-6 py-4 space-y-3">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setCurrentCategory(cat.id);
                    setMenuOpen(false);
                  }}
                  className={`block w-full text-left text-sm font-light py-2 transition-colors ${
                    currentCategory === cat.id
                      ? darkMode ? 'text-yellow-400' : 'text-yellow-600'
                      : darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto">
        {/* Hero Clothing Rack */}
        <ClothingRack />

        {/* Category Tabs */}
        <div className={`border-b transition-colors ${
          darkMode ? 'border-slate-800' : 'border-slate-200'
        }`}>
          <div className="flex justify-center gap-8 px-6 py-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCurrentCategory(cat.id)}
                className={`text-sm font-light transition-all relative ${
                  currentCategory === cat.id
                    ? darkMode ? 'text-white' : 'text-slate-900'
                    : darkMode ? 'text-slate-500 hover:text-slate-300' : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                {cat.label}
                {currentCategory === cat.id && (
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 ${
                    darkMode ? 'bg-yellow-400' : 'bg-yellow-600'
                  }`}></span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className={`px-6 py-16 transition-colors ${
          darkMode ? 'bg-slate-950' : 'bg-white'
        }`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {getProducts().map((product, idx) => (
              <div
                key={product.id}
                className="group cursor-pointer animate-fadeIn"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                {/* Product Image */}
                <div 
                  className={`relative w-full aspect-square rounded-lg mb-4 flex items-center justify-center text-6xl transition-all group-hover:scale-105 overflow-hidden ${
                    darkMode ? 'bg-slate-800' : 'bg-slate-100'
                  }`}
                  style={{ backgroundColor: product.color + '15' }}
                >
                  <div 
                    className="w-40 h-56 rounded-t-3xl transition-transform group-hover:scale-110 shadow-md"
                    style={{ backgroundColor: product.color }}
                  ></div>
                </div>

                {/* Product Info */}
                <div className="space-y-2">
                  <h3 className={`text-sm font-light transition-colors ${
                    darkMode ? 'text-white group-hover:text-yellow-400' : 'text-slate-900 group-hover:text-yellow-600'
                  }`}>
                    {product.name}
                  </h3>
                  <p className={`text-sm font-light transition-colors ${
                    darkMode ? 'text-slate-500' : 'text-slate-500'
                  }`}>
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className={`border-t transition-colors ${
        darkMode ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-slate-50'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {[
              { title: 'Shop', items: ['Mens', 'Womens', 'Kids'] },
              { title: 'About', items: ['Story', 'Quality', 'Sustainability'] },
              { title: 'Support', items: ['Contact', 'FAQ', 'Returns'] },
              { title: 'Follow', items: ['Instagram', 'Twitter', 'Pinterest'] }
            ].map((col, idx) => (
              <div key={idx}>
                <h4 className={`text-sm font-light mb-4 transition-colors ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  {col.title}
                </h4>
                <ul className="space-y-2">
                  {col.items.map((item, i) => (
                    <li key={i}>
                      <a href="#" className={`text-sm font-light transition-colors ${
                        darkMode 
                          ? 'text-slate-500 hover:text-white' 
                          : 'text-slate-600 hover:text-slate-900'
                      }`}>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className={`border-t transition-colors pt-8 text-center text-sm font-light ${
            darkMode ? 'border-slate-800 text-slate-500' : 'border-slate-200 text-slate-600'
          }`}>
            <p>&copy; 2024 Zero Fashion. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
