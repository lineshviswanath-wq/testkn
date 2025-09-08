import React, { useContext, useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { NavigationContext } from "../App";
import kaniroLogo from "figma:asset/59a4e87f6f8559c1e33304344c14ed5d1faafe70.png";

export function Header() {
  const { navigation, setNavigation, scrollToSection } = useContext(NavigationContext);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  // Close mobile menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setShowMobileMenu(false);
      }
    }

    if (showMobileMenu) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [showMobileMenu]);

  const handleNavClick = (view: 'home' | 'dashboard' | 'deposits' | 'repayments' | 'fintx-studio' | 'about' | 'contact' | 'dabbasave' | 'dabbapay' | 'dabbasavepay') => {
    if (view === 'deposits' && navigation.currentView === 'home') {
      // If on home page, scroll to deposits section
      scrollToSection('deposits');
    } else if (view === 'repayments' && navigation.currentView === 'home') {
      // If on home page, scroll to repayments section
      scrollToSection('repayments');
    } else {
      // Navigate to page (scroll-to-top is handled automatically by App.tsx)
      setNavigation({ currentView: view });
    }
  };

  const handleLogoClick = () => {
    // Navigate to about page (scroll-to-top is handled automatically by App.tsx)
    setNavigation({ currentView: 'about' });
  };

  const handleLoginClick = () => {
    setNavigation({ showLoginModal: true });
  };



  return (
    <header ref={headerRef} className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-8 xl:px-12 py-3 flex items-center justify-between max-w-[1800px]">
        {/* Logo */}
        <div className="flex items-center">
          <button 
            onClick={handleLogoClick}
            className="hover:opacity-80 transition-opacity"
          >
            <img 
              src={kaniroLogo}
              alt="Kaniro Financial Services"
              className="h-10 w-auto object-contain"
            />
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 xl:gap-12">
          <button 
            onClick={() => handleNavClick('about')}
            className="bg-gradient-to-r from-[#1E4A72] to-[#22C55E] bg-clip-text text-transparent font-bold hover:from-blue-700 hover:to-green-600 transition-all duration-300 px-3 py-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-green-50"
          >
            OneDabba
          </button>

          <button 
            onClick={() => handleNavClick('dabbasave')}
            className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
          >
            Dabba Save
          </button>

          <button 
            onClick={() => handleNavClick('dabbapay')}
            className="text-gray-700 hover:text-green-600 transition-colors font-medium"
          >
            Dabba Pay
          </button>

          <button 
            onClick={() => handleNavClick('dabbasavepay')}
            className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
          >
            Dabba Save & Pay
          </button>

          <button 
            onClick={() => handleNavClick('fintx-studio')}
            className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-bold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 px-3 py-2 rounded-lg hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50"
          >
            Fintx Studio
          </button>



          <button 
            onClick={() => handleNavClick('contact')}
            className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent font-bold hover:from-orange-700 hover:to-red-700 transition-all duration-300 px-3 py-2 rounded-lg hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50"
          >
            Contact
          </button>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="sm" 
            className="hidden md:flex bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-bold hover:from-indigo-700 hover:to-blue-700 transition-all duration-300 px-4 py-2 rounded-lg shadow-md hover:shadow-lg"
            onClick={handleLoginClick}
          >
            LOGIN
          </Button>
          
          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="sm" 
            className="md:hidden"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <Menu className="size-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            <button 
              onClick={() => {
                handleNavClick('about');
                setShowMobileMenu(false);
              }}
              className="block bg-gradient-to-r from-[#1E4A72] to-[#22C55E] bg-clip-text text-transparent font-bold hover:from-blue-700 hover:to-green-600 transition-all duration-300 px-3 py-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-green-50"
            >
              OneDabba
            </button>

            <button 
              onClick={() => {
                handleNavClick('dabbasave');
                setShowMobileMenu(false);
              }}
              className="block text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Dabba Save
            </button>

            <button 
              onClick={() => {
                handleNavClick('dabbapay');
                setShowMobileMenu(false);
              }}
              className="block text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              Dabba Pay
            </button>

            <button 
              onClick={() => {
                handleNavClick('dabbasavepay');
                setShowMobileMenu(false);
              }}
              className="block text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              Dabba Save & Pay
            </button>

            <button 
              onClick={() => {
                handleNavClick('fintx-studio');
                setShowMobileMenu(false);
              }}
              className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-bold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 px-3 py-2 rounded-lg hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50"
            >
              Fintx Studio
            </button>



            <button 
              onClick={() => {
                handleNavClick('contact');
                setShowMobileMenu(false);
              }}
              className="block bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent font-bold hover:from-orange-700 hover:to-red-700 transition-all duration-300 px-3 py-2 rounded-lg hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50"
            >
              Contact
            </button>

            {/* Mobile Login Button */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="w-full justify-start bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-bold hover:from-indigo-700 hover:to-blue-700 transition-all duration-300 px-4 py-2 rounded-lg shadow-md hover:shadow-lg"
              onClick={() => {
                handleLoginClick();
                setShowMobileMenu(false);
              }}
            >
              LOGIN
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}