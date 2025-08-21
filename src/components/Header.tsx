import React, { useContext, useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { Menu, ChevronDown } from "lucide-react";
import { NavigationContext } from "../App";

export function Header() {
  const { navigation, setNavigation, scrollToSection } = useContext(NavigationContext);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
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

  const handleNavClick = (view: 'home' | 'dashboard' | 'deposits' | 'repayments' | 'kancx' | 'about' | 'contact') => {
    if (view === 'home') {
      setNavigation({ currentView: view });
      // If we're on home page, scroll to top
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
    } else if (view === 'deposits' && navigation.currentView === 'home') {
      // If on home page, scroll to deposits section
      scrollToSection('deposits');
    } else if (view === 'repayments' && navigation.currentView === 'home') {
      // If on home page, scroll to repayments section
      scrollToSection('repayments');
    } else {
      // Navigate to dedicated page
      setNavigation({ currentView: view });
    }
    setActiveDropdown(null); // Close dropdown after navigation
  };

  const handleLogoClick = () => {
    setNavigation({ currentView: 'home' });
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
  };

  const handleLoginClick = () => {
    setNavigation({ showLoginModal: true });
  };

  const handleGetStartedClick = () => {
    setNavigation({ showSignupModal: true });
  };

  return (
    <header ref={headerRef} className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <button 
            onClick={handleLogoClick}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">K</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Kaniro Financial Services</span>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {/* Micro Deposit & Repayment Dropdown */}
          <div className="relative">
            <button 
              className="flex items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors"
              onMouseEnter={() => setActiveDropdown('sapa')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              Micro Deposit & Repayment
              <ChevronDown className="size-4" />
            </button>
            
            {activeDropdown === 'sapa' && (
              <div 
                className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
                onMouseEnter={() => setActiveDropdown('sapa')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button 
                  onClick={() => handleNavClick('deposits')}
                  className="w-full text-left px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors"
                >
                  Micro Deposits
                </button>
                <button 
                  onClick={() => handleNavClick('repayments')}
                  className="w-full text-left px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors"
                >
                  NPA Repayments
                </button>
              </div>
            )}
          </div>

          {/* Digital Banking Experience Services Dropdown */}
          <div className="relative">
            <button 
              className="flex items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors"
              onMouseEnter={() => setActiveDropdown('design')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              Digital Banking Experience Services
              <ChevronDown className="size-4" />
            </button>
            
            {activeDropdown === 'design' && (
              <div 
                className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
                onMouseEnter={() => setActiveDropdown('design')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button 
                  onClick={() => handleNavClick('kancx')}
                  className="w-full text-left px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors"
                >
                  Kaniro Design Studio
                </button>
              </div>
            )}
          </div>

          <button 
            onClick={() => handleNavClick('about')}
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => handleNavClick('contact')}
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Contact
          </button>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            size="sm" 
            className="hidden md:flex"
            onClick={handleLoginClick}
          >
            Login
          </Button>
          <Button 
            size="sm" 
            className="bg-blue-600 hover:bg-blue-700"
            onClick={handleGetStartedClick}
          >
            Get Started
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
            {/* Micro Deposit & Repayment Section */}
            <div>
              <div className="font-semibold text-gray-900 mb-2">Micro Deposit & Repayment</div>
              <div className="pl-4 space-y-2">
                <button 
                  onClick={() => {
                    handleNavClick('deposits');
                    setShowMobileMenu(false);
                  }}
                  className="block text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Micro Deposits
                </button>
                <button 
                  onClick={() => {
                    handleNavClick('repayments');
                    setShowMobileMenu(false);
                  }}
                  className="block text-gray-600 hover:text-blue-600 transition-colors"
                >
                  NPA Repayments
                </button>
              </div>
            </div>

            {/* Digital Banking Experience Services Section */}
            <div>
              <div className="font-semibold text-gray-900 mb-2">Digital Banking Experience Services</div>
              <div className="pl-4 space-y-2">
                <button 
                  onClick={() => {
                    handleNavClick('kancx');
                    setShowMobileMenu(false);
                  }}
                  className="block text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Kaniro Design Studio
                </button>
              </div>
            </div>

            {/* Other Navigation Items */}
            <button 
              onClick={() => {
                handleNavClick('about');
                setShowMobileMenu(false);
              }}
              className="block text-gray-600 hover:text-blue-600 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => {
                handleNavClick('contact');
                setShowMobileMenu(false);
              }}
              className="block text-gray-600 hover:text-blue-600 transition-colors"
            >
              Contact
            </button>

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
              Login
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}