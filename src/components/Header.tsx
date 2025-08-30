import React, { useContext, useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { Menu, Phone } from "lucide-react";
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
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
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
        <nav className="hidden md:flex items-center gap-6">
          <button 
            onClick={() => handleNavClick('about')}
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            What's Kaniro
          </button>

          <button 
            onClick={() => handleNavClick('dabbasave')}
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            DABBA SAVE
          </button>

          <button 
            onClick={() => handleNavClick('dabbapay')}
            className="text-gray-600 hover:text-green-600 transition-colors"
          >
            DABBA PAY
          </button>

          <button 
            onClick={() => handleNavClick('dabbasavepay')}
            className="text-gray-600 hover:text-purple-600 transition-colors"
          >
            DABBA SAVE & PAY
          </button>

          <button 
            onClick={() => handleNavClick('fintx-studio')}
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            FINTX STUDIO
          </button>



          <button 
            onClick={() => handleNavClick('contact')}
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            CONTACT
          </button>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Customer Care - Prominent display */}
          <a 
            href="tel:+914842969888"
            className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-green-600 to-blue-600 text-white px-3 py-2 rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 text-sm font-medium"
          >
            <Phone className="size-4" />
            +91 484-2969-888
          </a>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="hidden md:flex"
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
              className="block text-gray-600 hover:text-blue-600 transition-colors"
            >
              What's Kaniro
            </button>

            <button 
              onClick={() => {
                handleNavClick('dabbasave');
                setShowMobileMenu(false);
              }}
              className="block text-gray-600 hover:text-blue-600 transition-colors"
            >
              DABBA SAVE
            </button>

            <button 
              onClick={() => {
                handleNavClick('dabbapay');
                setShowMobileMenu(false);
              }}
              className="block text-gray-600 hover:text-green-600 transition-colors"
            >
              DABBA PAY
            </button>

            <button 
              onClick={() => {
                handleNavClick('dabbasavepay');
                setShowMobileMenu(false);
              }}
              className="block text-gray-600 hover:text-purple-600 transition-colors"
            >
              DABBA SAVE & PAY
            </button>

            <button 
              onClick={() => {
                handleNavClick('fintx-studio');
                setShowMobileMenu(false);
              }}
              className="block text-gray-600 hover:text-blue-600 transition-colors"
            >
              FINTX STUDIO
            </button>



            <button 
              onClick={() => {
                handleNavClick('contact');
                setShowMobileMenu(false);
              }}
              className="block text-gray-600 hover:text-blue-600 transition-colors"
            >
              CONTACT
            </button>

            {/* Mobile Customer Care */}
            <a 
              href="tel:+914842969888"
              className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-blue-600 text-white px-3 py-2 rounded-lg text-sm font-medium"
              onClick={() => setShowMobileMenu(false)}
            >
              <Phone className="size-4" />
              Customer Care: +91 484-2969-888
            </a>

            {/* Mobile Login Button */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="w-full justify-start"
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