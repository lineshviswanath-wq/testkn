import React, { useContext } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ArrowRight, Target, CreditCard, TrendingUp, Smartphone, Heart, Shield, CheckCircle, Building2, FileCheck, Wifi, Home, IndianRupee, Clock, MapPin, Download, Phone, Mail, MessageSquare, Truck, App } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { NavigationContext } from "../App";
import { motion } from "motion/react";
import traditionalWomanImage from 'figma:asset/6899df7d374f88acab934a33705661d095642433.png';
import modernWomanImage from 'figma:asset/dd107ca8c90ae09a1bbd14cb0c10b9299c986ed1.png';

export function HeroSection() {
  const { setNavigation, scrollToSection } = useContext(NavigationContext);

  return (
    <section className="bg-gradient-to-br from-blue-50 to-green-50 py-12 md:py-20 relative overflow-hidden min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start max-w-7xl mx-auto">
          {/* Content - Mobile-first approach */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 relative order-2 lg:order-1">
            {/* Animated circular elements - Hide on mobile for performance */}
            <motion.div
              className="absolute -left-20 top-0 w-32 h-32 rounded-full bg-gradient-to-br from-blue-400/20 to-green-400/20 blur-2xl hidden lg:block"
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{
                rotate: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                },
                scale: {
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            />
            
            <motion.div
              className="absolute -left-16 top-16 w-24 h-24 rounded-full border-4 border-blue-300/30 hidden lg:block"
              animate={{
                rotate: -360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: {
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                },
                scale: {
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            />

            <motion.div
              className="absolute -left-12 top-32 w-16 h-16 rounded-full bg-gradient-to-br from-green-500/15 to-blue-500/15 hidden lg:block"
              animate={{
                rotate: 360,
                scale: [0.8, 1.3, 0.8],
              }}
              transition={{
                rotate: {
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear"
                },
                scale: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            />

            <div className="space-y-5 md:space-y-7 relative z-10">
              {/* DigiDabba Badge - Professional with Kaniro colors */}
              <motion.div 
                className="flex items-center justify-center lg:justify-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div 
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#1E4A72] to-[#22C55E] text-white px-4 sm:px-6 py-3 sm:py-3.5 rounded-full shadow-xl text-sm sm:text-base"
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
                    <Target className="size-4 sm:size-5" />
                  </motion.div>
                  <span className="font-bold tracking-wide">DIGIDABBA - Your Digital Money Box</span>
                </motion.div>
              </motion.div>
              
              {/* Main Heading - Professional with impact */}
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black text-gray-900 leading-[1.1] text-center lg:text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="block mb-2">
                  <span className="bg-gradient-to-r from-[#1E4A72] to-[#22C55E] bg-clip-text text-transparent">
                    DIGIDABBA
                  </span>
                </span>
                <span className="block text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-gray-800 leading-tight">
                  Where 
                  <span className="text-[#22C55E] font-black"> ₹10 </span>
                  Starts Your 
                  <span className="text-[#1E4A72] font-black"> Financial Future! </span>
                </span>
              </motion.h1>
              
              {/* Enhanced Subtitle - Customer focused */}
              <motion.div 
                className="space-y-4 max-w-2xl text-center lg:text-left mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed font-semibold">
                  Traditional <span className="text-[#1E4A72] font-bold">Dabba Savings</span> meets 
                  <span className="text-[#22C55E] font-bold"> Modern Technology</span> = 
                  <span className="text-gray-900 font-bold"> Your Secure Tomorrow!</span>
                </p>
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                  <span className="font-semibold text-[#1E4A72]">Just ₹10 daily</span> can transform your financial journey. 
                  Watch how small steps lead to <span className="font-bold text-[#22C55E]">big dreams!</span>
                </p>
              </motion.div>

              {/* Enhanced Feature Cards with Kaniro branding */}
              <motion.div 
                className="space-y-4 sm:space-y-5 max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <motion.button 
                  onClick={() => scrollToSection('deposits')}
                  className="w-full flex items-center gap-4 sm:gap-5 p-5 sm:p-6 bg-gradient-to-r from-[#22C55E] to-[#16A34A] text-white rounded-2xl sm:rounded-3xl shadow-2xl hover:shadow-green-200 transition-all duration-500 text-left group relative overflow-hidden"
                  whileHover={{ scale: 1.03, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Animated background pattern */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                    animate={{ x: [-100, 300] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  />
                  
                  <motion.div 
                    className="p-3 sm:p-4 bg-white/20 rounded-xl sm:rounded-2xl group-hover:bg-white/30 transition-colors flex-shrink-0 backdrop-blur-sm"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  >
                    <TrendingUp className="size-6 sm:size-7 text-white" />
                  </motion.div>
                  <div className="flex-1 min-w-0 relative z-10">
                    <h4 className="font-black text-white text-lg sm:text-xl mb-1">DIGIDABBA Micro Deposit</h4>
                    <div className="text-green-100 text-sm sm:text-base space-y-1">
                      <div className="font-semibold">Start with just ₹10 daily deposits</div>
                      <div className="font-medium">Up to 7.5% interest + bonus rewards!</div>
                    </div>
                  </div>
                  <motion.div
                    animate={{ x: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ArrowRight className="size-5 sm:size-6 text-white flex-shrink-0" />
                  </motion.div>
                </motion.button>
                
                <motion.button 
                  onClick={() => scrollToSection('repayments')}
                  className="w-full flex items-center gap-4 sm:gap-5 p-5 sm:p-6 bg-gradient-to-r from-[#1E4A72] to-[#1E40AF] text-white rounded-2xl sm:rounded-3xl shadow-2xl hover:shadow-blue-200 transition-all duration-500 text-left group relative overflow-hidden"
                  whileHover={{ scale: 1.03, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Animated background pattern */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                    animate={{ x: [-100, 300] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1 }}
                  />
                  
                  <motion.div 
                    className="p-3 sm:p-4 bg-white/20 rounded-xl sm:rounded-2xl group-hover:bg-white/30 transition-colors flex-shrink-0 backdrop-blur-sm"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <CreditCard className="size-6 sm:size-7 text-white" />
                  </motion.div>
                  <div className="flex-1 min-w-0 relative z-10">
                    <h4 className="font-black text-white text-lg sm:text-xl mb-1">DIGIDABBA Micro Loan Repayment</h4>
                    <div className="text-blue-100 text-sm sm:text-base space-y-1">
                      <div className="font-semibold">Flexible repayment from just ₹100</div>
                      <div className="font-medium">Clear dues fast - Rebuild credit score!</div>
                    </div>
                  </div>
                  <motion.div
                    animate={{ x: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  >
                    <ArrowRight className="size-5 sm:size-6 text-white flex-shrink-0" />
                  </motion.div>
                </motion.button>
              </motion.div>

              {/* Trust & Safety Features with Kaniro branding */}
              <motion.div 
                className="relative z-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="mb-4 text-center lg:text-left">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    <span className="text-[#22C55E]">Your Trust, Our Responsibility</span>
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-5 max-w-2xl mx-auto lg:mx-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    whileHover={{ scale: 1.05, y: -3 }}
                  >
                    <Card className="p-4 sm:p-5 bg-gradient-to-br from-[#F0FDF4] to-green-50 border-2 border-[#22C55E]/30 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                      <motion.div
                        className="absolute top-0 right-0 w-16 h-16 bg-[#22C55E]/10 rounded-full -mr-8 -mt-8"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                      />
                      <div className="flex items-center gap-3 relative z-10">
                        <motion.div 
                          className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#22C55E] to-green-600 rounded-2xl flex items-center justify-center shadow-xl"
                          animate={{ 
                            scale: [1, 1.1, 1],
                            boxShadow: [
                              "0 4px 20px rgba(34, 197, 94, 0.3)",
                              "0 8px 30px rgba(34, 197, 94, 0.5)",
                              "0 4px 20px rgba(34, 197, 94, 0.3)"
                            ]
                          }}
                          transition={{ 
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <Building2 className="size-6 text-white" />
                        </motion.div>
                        <div className="min-w-0">
                          <div className="font-bold text-gray-900 text-sm sm:text-base">Bank-Level Security</div>
                          <div className="text-xs sm:text-sm text-[#22C55E] font-medium">100% Safe & Guaranteed</div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    whileHover={{ scale: 1.05, y: -3 }}
                  >
                    <Card className="p-4 sm:p-5 bg-gradient-to-br from-[#E3F2FD] to-blue-50 border-2 border-[#1E4A72]/30 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                      <motion.div
                        className="absolute top-0 right-0 w-16 h-16 bg-[#1E4A72]/10 rounded-full -mr-8 -mt-8"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                      />
                      <div className="flex items-center gap-3 relative z-10">
                        <motion.div 
                          className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#1E4A72] to-blue-600 rounded-2xl flex items-center justify-center shadow-xl"
                          animate={{ 
                            scale: [1, 1.1, 1],
                            boxShadow: [
                              "0 4px 20px rgba(30, 74, 114, 0.3)",
                              "0 8px 30px rgba(30, 74, 114, 0.5)",
                              "0 4px 20px rgba(30, 74, 114, 0.3)"
                            ]
                          }}
                          transition={{ 
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.5
                          }}
                        >
                          <FileCheck className="size-6 text-white" />
                        </motion.div>
                        <div className="min-w-0">
                          <div className="font-bold text-gray-900 text-sm sm:text-base">Rebuild Credit Score</div>
                          <div className="text-xs sm:text-sm text-[#1E4A72] font-medium">Restore Financial Health</div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>

                  {/* Omnichannel Doorstep Service Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.1 }}
                    whileHover={{ scale: 1.05, y: -3 }}
                  >
                    <Card className="p-4 sm:p-5 bg-gradient-to-br from-[#FFF7ED] to-orange-50 border-2 border-orange-300/30 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                      <motion.div
                        className="absolute top-0 right-0 w-16 h-16 bg-orange-400/10 rounded-full -mr-8 -mt-8"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                      />
                      <div className="flex items-center gap-3 relative z-10">
                        <motion.div 
                          className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-xl"
                          animate={{ 
                            scale: [1, 1.1, 1],
                            boxShadow: [
                              "0 4px 20px rgba(249, 115, 22, 0.3)",
                              "0 8px 30px rgba(249, 115, 22, 0.5)",
                              "0 4px 20px rgba(249, 115, 22, 0.3)"
                            ]
                          }}
                          transition={{ 
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1.0
                          }}
                        >
                          <Truck className="size-6 text-white" />
                        </motion.div>
                        <div className="min-w-0">
                          <div className="font-bold text-gray-900 text-sm sm:text-base">Omnichannel Doorstep</div>
                          <div className="text-xs sm:text-sm text-orange-600 font-medium">Service at Your Doorstep</div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>

                  {/* Download App Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    whileHover={{ scale: 1.05, y: -3 }}
                  >
                    <Card className="p-4 sm:p-5 bg-gradient-to-br from-[#F3E8FF] to-purple-50 border-2 border-purple-300/30 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                      <motion.div
                        className="absolute top-0 right-0 w-16 h-16 bg-purple-400/10 rounded-full -mr-8 -mt-8"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      />
                      <div className="flex items-center gap-3 relative z-10">
                        <motion.div 
                          className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl"
                          animate={{ 
                            scale: [1, 1.1, 1],
                            boxShadow: [
                              "0 4px 20px rgba(147, 51, 234, 0.3)",
                              "0 8px 30px rgba(147, 51, 234, 0.5)",
                              "0 4px 20px rgba(147, 51, 234, 0.3)"
                            ]
                          }}
                          transition={{ 
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1.5
                          }}
                        >
                          <Download className="size-6 text-white" />
                        </motion.div>
                        <div className="min-w-0">
                          <div className="font-bold text-gray-900 text-sm sm:text-base">Download Our App</div>
                          <div className="text-xs sm:text-sm text-purple-600 font-medium flex items-center gap-1">
                            <span>📱 App Store</span>
                            <span>•</span>
                            <span>🏪 Google Play</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>

            </div>
          </div>

          {/* Visual Section - Enhanced and Mobile optimized */}
          <div className="lg:col-span-5 relative flex flex-col justify-start items-center space-y-6 order-1 lg:order-2 lg:pt-8">
            {/* Subtle background animation - No blur */}
            <motion.div
              className="absolute inset-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto rounded-full bg-gradient-to-br from-blue-400/8 to-green-400/8"
              animate={{
                rotate: 360,
                scale: [1, 1.05, 1],
              }}
              transition={{
                rotate: {
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear"
                },
                scale: {
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            />

            {/* Hero Image Container - Mobile responsive */}
            <motion.div 
              className="relative z-10 mx-auto w-full max-w-sm sm:max-w-md lg:max-w-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="relative w-full h-[340px] sm:h-[420px] lg:h-[480px] rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden bg-white">
                {/* Split Screen Layout - Traditional to Digital Transition */}
                <div className="flex w-full h-full">
                  {/* Traditional Savings Side */}
                  <motion.div 
                    className="relative w-1/2 h-full overflow-hidden"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                  >
                    <img
                      src={traditionalWomanImage}
                      alt="Traditional Indian woman in saree putting coins in traditional clay savings pot (dabba)"
                      className="w-full h-full object-cover object-center hover:scale-[1.02] transition-transform duration-500"
                      style={{ 
                        imageRendering: 'auto',
                        WebkitImageRendering: 'high-quality',
                        msInterpolationMode: 'bicubic'
                      }}
                    />
                    {/* Clean border separator */}
                    <div className="absolute top-0 right-0 w-0.5 h-full bg-white/40"></div>
                  </motion.div>

                  {/* Modern Banking Side */}
                  <motion.div 
                    className="relative w-1/2 h-full overflow-hidden"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                  >
                    <img
                      src={modernWomanImage}
                      alt="Modern woman with glasses using smartphone for digital banking and financial transactions"
                      className="w-full h-full object-cover object-center hover:scale-[1.02] transition-transform duration-500"
                      style={{ 
                        imageRendering: 'auto',
                        WebkitImageRendering: 'high-quality',
                        msInterpolationMode: 'bicubic'
                      }}
                    />
                  </motion.div>
                </div>

                {/* Enhanced Floating Badge - Traditional Savings */}
                <motion.div 
                  className="absolute top-4 left-4 bg-[#22C55E] text-white px-3 py-2 rounded-lg shadow-lg text-xs font-bold z-30 border border-white/30"
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  style={{ 
                    boxShadow: '0 4px 12px rgba(34, 197, 94, 0.3)'
                  }}
                >
                  <div className="text-center leading-tight">
                    <div className="font-bold text-white">Traditional Savings</div>
                    <div className="text-green-100 font-medium text-[10px] mt-0.5">Dabba Culture</div>
                  </div>
                </motion.div>

                {/* Enhanced Floating Badge - Modern Banking */}
                <motion.div 
                  className="absolute bottom-4 right-4 bg-[#1E4A72] text-white px-3 py-2 rounded-lg shadow-lg text-xs font-bold z-30 border border-white/30"
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  style={{ 
                    boxShadow: '0 4px 12px rgba(30, 74, 114, 0.3)'
                  }}
                >
                  <div className="text-center leading-tight">
                    <div className="font-bold text-white">Digital Banking</div>
                    <div className="text-blue-100 font-medium text-[10px] mt-0.5">Smart & Secure</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Beautiful Contact Cards Section - Below Image Area */}
            <motion.div 
              className="mt-8 space-y-6 w-full max-w-sm sm:max-w-md lg:max-w-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              {/* Contact Header */}
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.7 }}
              >
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1E4A72] to-[#22C55E] text-white px-4 py-2 rounded-full mb-3">
                  <Phone className="size-4" />
                  <span className="font-bold text-sm">24/7 Customer Support</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Need Help? <span className="text-[#22C55E]">We're Here!</span>
                </h3>
                <p className="text-gray-600 text-sm">Instant support for all your DIGIDABBA needs</p>
              </motion.div>

              {/* Contact Cards Vertical Layout */}
              <div className="space-y-4">
                {/* Phone Support Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.8 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group cursor-pointer"
                  onClick={() => window.open('tel:+914842969888', '_self')}
                >
                  <Card className="p-5 bg-gradient-to-br from-[#22C55E] to-green-600 text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden h-full">
                    <motion.div
                      className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full -mr-8 -mt-8"
                      animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    />
                    
                    <div className="relative z-10 text-center">
                      <motion.div
                        className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <Phone className="size-6 text-white" />
                      </motion.div>
                      <h4 className="font-bold text-white mb-1">Call Us</h4>
                      <p className="text-green-100 text-sm font-medium mb-2">+91 484-2969-888</p>
                      <div className="text-xs text-green-100">Toll Free • 24/7</div>
                    </div>
                  </Card>
                </motion.div>

                {/* Email Support Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.9 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group cursor-pointer"
                  onClick={() => window.open('mailto:care@digidabba.com', '_self')}
                >
                  <Card className="p-5 bg-gradient-to-br from-[#1E4A72] to-blue-600 text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden h-full">
                    <motion.div
                      className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full -mr-8 -mt-8"
                      animate={{ rotate: -360, scale: [1, 1.3, 1] }}
                      transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    />
                    
                    <div className="relative z-10 text-center">
                      <motion.div
                        className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <Mail className="size-6 text-white" />
                      </motion.div>
                      <h4 className="font-bold text-white mb-1">Email Us</h4>
                      <p className="text-blue-100 text-sm font-medium mb-2">care@digidabba.com</p>
                      <div className="text-xs text-blue-100">Response in under 6h</div>
                    </div>
                  </Card>
                </motion.div>

                {/* WhatsApp Support Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 2.0 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group cursor-pointer"
                  onClick={() => window.open('https://wa.me/919048299888', '_blank')}
                >
                  <Card className="p-5 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden h-full">
                    <motion.div
                      className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full -mr-8 -mt-8"
                      animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                      transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                    />
                    
                    <div className="relative z-10 text-center">
                      <motion.div
                        className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300"
                        animate={{ scale: [1, 1.08, 1] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <MessageSquare className="size-6 text-white" />
                      </motion.div>
                      <h4 className="font-bold text-white mb-1">WhatsApp Us</h4>
                      <p className="text-emerald-100 text-sm font-medium mb-2">+91 904-829-9888</p>
                      <div className="text-xs text-emerald-100">Instant Chat • Available Now</div>
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