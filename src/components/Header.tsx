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

  const handleNavClick = (view: 'home' | 'dashboard' | 'deposits' | 'repayments' | 'kancx' | 'about' | 'contact' | 'dabba' | 'blog') => {
    if (view === 'home') {
      setNavigation({ currentView: view });
      // If we're on home page, scroll to top
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
    } else if (view === 'dabba') {
      // Navigate to home page
      setNavigation({ currentView: 'home' });
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
            onClick={() => handleNavClick('dabba')}
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            DigiDabba
          </button>

          <button 
            onClick={() => handleNavClick('kancx')}
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            KanCX
          </button>

          <button 
            onClick={() => handleNavClick('blog')}
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Blog
          </button>

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
            <button 
              onClick={() => {
                handleNavClick('dabba');
                setShowMobileMenu(false);
              }}
              className="block text-gray-600 hover:text-blue-600 transition-colors"
            >
              DigiDabba
            </button>

            <button 
              onClick={() => {
                handleNavClick('kancx');
                setShowMobileMenu(false);
              }}
              className="block text-gray-600 hover:text-blue-600 transition-colors"
            >
              KanCX
            </button>

            <button 
              onClick={() => {
                handleNavClick('blog');
                setShowMobileMenu(false);
              }}
              className="block text-gray-600 hover:text-blue-600 transition-colors"
            >
              Blog
            </button>

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