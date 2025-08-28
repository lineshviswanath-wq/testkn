import { Building2, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Smartphone, Download } from "lucide-react";
import { Button } from "./ui/button";
import kaniroLogo from "figma:asset/59a4e87f6f8559c1e33304344c14ed5d1faafe70.png";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src={kaniroLogo}
                alt="Kaniro Financial Services"
                className="h-10 w-auto object-contain filter brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 text-sm">
              Empowering financial inclusion through accessible micro-deposits and flexible loan repayments for Tier 2/3 India.
            </p>
            {/* App Store Buttons */}
            <div className="space-y-3">
              <p className="text-sm text-gray-300 font-medium">Download DIGIDABBA App</p>
              <div className="flex flex-col gap-2">
                <Button 
                  variant="outline"
                  size="sm" 
                  className="bg-black hover:bg-gray-800 text-white border-gray-600 hover:border-gray-500 flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300"
                >
                  <Smartphone className="size-4" />
                  <div className="text-left">
                    <div className="text-xs text-gray-300">Download on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </Button>
                <Button 
                  variant="outline"
                  size="sm" 
                  className="bg-black hover:bg-gray-800 text-white border-gray-600 hover:border-gray-500 flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300"
                >
                  <Download className="size-4" />
                  <div className="text-left">
                    <div className="text-xs text-gray-300">Get it on</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </Button>
              </div>
            </div>

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

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Micro Deposits</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Recurring Deposits</a></li>
              <li><a href="#" className="hover:text-white transition-colors">NPA Repayments</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Credit Score Improvement</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Financial Planning</a></li>
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
              <li><a href="#" className="hover:text-white transition-colors">Contact Support</a></li>
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
                <span>care@digidabba.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="size-4 flex-shrink-0" />
                <span>Kerala & South India (Phase 1)</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="size-4 flex-shrink-0" />
                <span>For Banks: partners@kanirofinance.com</span>
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