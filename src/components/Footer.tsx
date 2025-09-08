import React, { useContext } from "react";
import { Building2, Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { NavigationContext } from "../App";
import kaniroLogo from "figma:asset/59a4e87f6f8559c1e33304344c14ed5d1faafe70.png";

export function Footer() {
  const { setNavigation } = useContext(NavigationContext);

  const handleNavClick = (view: 'home' | 'dashboard' | 'deposits' | 'repayments' | 'fintx-studio' | 'about' | 'contact' | 'dabbasave' | 'dabbapay' | 'dabbasavepay') => {
    // Navigate to page (scroll-to-top is handled automatically by App.tsx)
    setNavigation({ currentView: view });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 lg:px-8 xl:px-12 py-12 max-w-[1800px]">
        <div className="grid md:grid-cols-4 xl:grid-cols-4 gap-8 xl:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center">
              <button 
                onClick={() => handleNavClick('about')}
                className="hover:opacity-80 transition-opacity"
              >
                <img 
                  src={kaniroLogo}
                  alt="Kaniro Financial Services"
                  className="h-10 w-auto object-contain filter brightness-0 invert"
                />
              </button>
            </div>
            <p className="text-gray-400 text-sm">
              OneDABBA brings back the trusted idea of the traditional "dabba" savings box in a modern, digital form to help individuals and families manage money better.
            </p>

            {/* Social Media */}
            <div className="flex gap-3">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                <Facebook className="size-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                <Twitter className="size-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                <Linkedin className="size-4" />
              </Button>
            </div>
          </div>

          {/* Main Menu */}
          <div>
            <h4 className="font-semibold mb-4">Products and Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <button 
                  onClick={() => handleNavClick('about')}
                  className="hover:text-white transition-colors text-left"
                >
                  What's Kaniro
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('dabbasave')}
                  className="hover:text-white transition-colors text-left"
                >
                  DABBA SAVE
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('dabbapay')}
                  className="hover:text-white transition-colors text-left"
                >
                  DABBA PAY
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('dabbasavepay')}
                  className="hover:text-white transition-colors text-left"
                >
                  DABBA SAVE & PAY
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('fintx-studio')}
                  className="hover:text-white transition-colors text-left"
                >
                  FINTX STUDIO
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('contact')}
                  className="hover:text-white transition-colors text-left"
                >
                  CONTACT
                </button>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bank Integration</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Agent Network</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Documentation</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Customer Care</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="bg-gradient-to-r from-green-600 to-blue-600 p-3 rounded-lg mb-4">
                <div className="text-white font-semibold text-sm mb-1">24/7 Customer Care</div>
                <div className="flex items-center gap-2 text-white">
                  <Phone className="size-4 flex-shrink-0" />
                  <span className="font-bold">+91 484-2969-888</span>
                </div>
                <div className="text-green-100 text-xs mt-1">Toll Free • Always Available</div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="size-4 flex-shrink-0" />
                <span>care@kaniro.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="size-4 flex-shrink-0" />
                <span>Kochi, Kerala</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="size-4 flex-shrink-0" />
                <span>For Banks: partners@kaniro.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-400">
            © 2025 Kaniro Financial Services. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
}