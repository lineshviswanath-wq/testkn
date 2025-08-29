import React, { useContext } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ArrowRight, Target, CreditCard, TrendingUp, Smartphone, Heart, Shield, CheckCircle, Building2, FileCheck, Wifi, Home, IndianRupee, Clock, MapPin, Download, Phone, Mail, MessageSquare, Truck, Monitor, Apple, PlayCircle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { NavigationContext } from "../App";
import { motion } from "motion/react";
import traditionalWomanImage from 'figma:asset/6899df7d374f88acab934a33705661d095642433.png';
import modernWomanImage from 'figma:asset/dd107ca8c90ae09a1bbd14cb0c10b9299c986ed1.png';

export function HeroSectionWithContact() {
  const { setNavigation, scrollToSection } = useContext(NavigationContext);

  return (
    <section className="bg-gradient-to-br from-blue-50 to-green-50 py-8 sm:py-12 md:py-16 lg:py-20 relative overflow-hidden min-h-screen flex items-center">
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-16 items-start max-w-7xl mx-auto">
          {/* Content - Mobile-first approach */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 md:space-y-8 relative order-1 lg:order-1">
            <div className="space-y-4 sm:space-y-5 md:space-y-7 relative z-10">
              {/* DigiDabba Badge */}
              <motion.div 
                className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div 
                  className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-[#1E4A72] to-[#22C55E] text-white px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 md:py-3.5 rounded-full shadow-xl text-xs sm:text-sm md:text-base"
                  animate={{ 
                    boxShadow: [
                      "0 4px 20px rgba(30, 74, 114, 0.3)",
                      "0 8px 30px rgba(30, 74, 114, 0.5)",
                      "0 4px 20px rgba(30, 74, 114, 0.3)"
                    ],
                    scale: [1, 1.02, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  >
                    <Target className="size-3 sm:size-4 md:size-5" />
                  </motion.div>
                  <span className="font-bold tracking-wide text-xs sm:text-sm md:text-base">DABBA SAVE - Your Digital Money Box</span>
                </motion.div>
              </motion.div>
              
              {/* Main Heading */}
              <motion.h1 
                className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-black text-gray-900 leading-[1.05] sm:leading-[1.1] text-center lg:text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="block mb-1 sm:mb-2">
                  <span className="bg-gradient-to-r from-[#1E4A72] to-[#22C55E] bg-clip-text text-transparent">
                    DABBA SAVE
                  </span>
                </span>
                <span className="block text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-gray-800 leading-tight">
                  Where 
                  <span className="text-[#22C55E] font-black"> ₹10 </span>
                  Starts Your 
                  <span className="text-[#1E4A72] font-black"> Financial Future! </span>
                </span>
              </motion.h1>
              
              {/* Subtitle */}
              <motion.div 
                className="space-y-3 sm:space-y-4 max-w-2xl text-center lg:text-left mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed font-semibold">
                  Traditional <span className="text-[#1E4A72] font-bold">Dabba Savings</span> meets 
                  <span className="text-[#22C55E] font-bold"> Modern Technology</span> = 
                  <span className="text-gray-900 font-bold"> Your Secure Tomorrow!</span>
                </p>
              </motion.div>

              {/* CTA Button */}
              <motion.div 
                className="space-y-3 sm:space-y-4 md:space-y-5 max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <motion.button 
                  onClick={() => scrollToSection('deposits')}
                  className="w-full flex items-center gap-3 sm:gap-4 md:gap-5 p-4 sm:p-5 md:p-6 bg-gradient-to-r from-[#22C55E] to-[#16A34A] text-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-2xl hover:shadow-green-200 transition-all duration-500 text-left group relative overflow-hidden touch-manipulation"
                  whileHover={{ scale: 1.02, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div 
                    className="p-2.5 sm:p-3 md:p-4 bg-white/20 rounded-lg sm:rounded-xl md:rounded-2xl group-hover:bg-white/30 transition-colors flex-shrink-0 backdrop-blur-sm"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  >
                    <TrendingUp className="size-5 sm:size-6 md:size-7 text-white" />
                  </motion.div>
                  <div className="flex-1 min-w-0 relative z-10">
                    <h4 className="font-black text-white text-base sm:text-lg md:text-xl mb-1">Start Your Micro Deposit</h4>
                    <div className="text-green-100 text-xs sm:text-sm md:text-base space-y-0.5 sm:space-y-1">
                      <div className="font-semibold">Start with just ₹10 daily deposits</div>
                    </div>
                  </div>
                  <ArrowRight className="size-4 sm:size-5 md:size-6 text-white flex-shrink-0" />
                </motion.button>
              </motion.div>
            </div>
          </div>

          {/* Visual Section with Contact Cards */}
          <div className="lg:col-span-5 relative flex flex-col justify-center items-center space-y-8 order-2 lg:order-2 pt-4 sm:pt-6 lg:pt-8">
            {/* Hero Image Container */}
            <motion.div 
              className="relative z-10 mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mobile-safe-area"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="relative w-full h-[340px] sm:h-[420px] lg:h-[480px] rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden bg-white">
                <div className="flex w-full h-full">
                  <motion.div 
                    className="relative w-1/2 h-full overflow-hidden"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                  >
                    <img
                      src={traditionalWomanImage}
                      alt="Traditional savings"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <motion.div 
                    className="relative w-1/2 h-full overflow-hidden"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                  >
                    <img
                      src={modernWomanImage}
                      alt="Modern digital savings"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Contact Information Cards - DUBBAPAY Style */}
            <motion.div 
              className="w-full max-w-md mx-auto mt-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.9 }}
            >
              {/* Contact Section Header */}
              <motion.div 
                className="text-center mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.0 }}
              >
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  <span className="text-[#22C55E]">Get Support</span>
                </h3>
                <p className="text-sm text-gray-600">We're here to help you succeed</p>
              </motion.div>

              {/* Contact Cards Grid - Clean Minimal Style */}
              <div className="space-y-3">
                {/* CALL US */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 2.1 }}
                  whileHover={{ scale: 1.01, y: -1 }}
                  className="cursor-pointer"
                >
                  <Card 
                    className="p-4 bg-white border border-gray-200 hover:border-[#22C55E] hover:shadow-lg transition-all duration-300 group"
                    onClick={() => window.open('tel:+914842969888', '_blank')}
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#22C55E]/10 rounded-xl flex items-center justify-center group-hover:bg-[#22C55E] transition-colors duration-300">
                        <Phone className="w-5 h-5 text-[#22C55E] group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900 text-sm">Call Us</div>
                        <div className="font-bold text-gray-900 text-base">+91 484-2969-888</div>
                        <div className="text-xs text-gray-500">Toll Free • 24/7</div>
                      </div>
                      <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowRight className="w-4 h-4 text-[#22C55E]" />
                      </div>
                    </div>
                  </Card>
                </motion.div>

                {/* EMAIL US */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 2.2 }}
                  whileHover={{ scale: 1.01, y: -1 }}
                  className="cursor-pointer"
                >
                  <Card 
                    className="p-4 bg-white border border-gray-200 hover:border-[#1E4A72] hover:shadow-lg transition-all duration-300 group"
                    onClick={() => window.open('mailto:care@dabbasave.com', '_blank')}
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#1E4A72]/10 rounded-xl flex items-center justify-center group-hover:bg-[#1E4A72] transition-colors duration-300">
                        <Mail className="w-5 h-5 text-[#1E4A72] group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900 text-sm">Email Us</div>
                        <div className="font-bold text-gray-900 text-base">care@dabbasave.com</div>
                        <div className="text-xs text-gray-500">Response in under 6h</div>
                      </div>
                      <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowRight className="w-4 h-4 text-[#1E4A72]" />
                      </div>
                    </div>
                  </Card>
                </motion.div>

                {/* WHATSAPP US */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 2.3 }}
                  whileHover={{ scale: 1.01, y: -1 }}
                  className="cursor-pointer"
                >
                  <Card 
                    className="p-4 bg-white border border-gray-200 hover:border-[#25D366] hover:shadow-lg transition-all duration-300 group"
                    onClick={() => window.open('https://wa.me/919048299888', '_blank')}
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#25D366]/10 rounded-xl flex items-center justify-center group-hover:bg-[#25D366] transition-colors duration-300">
                        <MessageSquare className="w-5 h-5 text-[#25D366] group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900 text-sm">WhatsApp Us</div>
                        <div className="font-bold text-gray-900 text-base">+91 904-829-9888</div>
                        <div className="text-xs text-gray-500">Instant Chat • Available Now</div>
                      </div>
                      <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowRight className="w-4 h-4 text-[#25D366]" />
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </div>

              {/* Separator Line */}
              <motion.div 
                className="flex justify-center my-6"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.8, delay: 2.4 }}
              >
                <div className="h-px w-24 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
              </motion.div>

              {/* App Store Download Buttons */}
              <div className="grid grid-cols-1 gap-3 mt-4">
                {/* App Store Download Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 2.5 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="cursor-pointer"
                >
                  <Card className="p-3 bg-gradient-to-r from-gray-900 to-black border border-gray-700 hover:border-gray-600 hover:shadow-lg transition-all duration-300 touch-manipulation">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                        <Apple className="w-5 h-5 text-black" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs text-gray-300 uppercase tracking-wide">Download on the</div>
                        <div className="font-bold text-white text-sm">App Store</div>
                      </div>
                    </div>
                  </Card>
                </motion.div>

                {/* Google Play Download Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 2.6 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="cursor-pointer"
                >
                  <Card className="p-3 bg-gradient-to-r from-green-600 to-green-700 border border-green-500 hover:border-green-400 hover:shadow-lg transition-all duration-300 touch-manipulation">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                        <PlayCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs text-green-100 uppercase tracking-wide">Get it on</div>
                        <div className="font-bold text-white text-sm">Google Play</div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}