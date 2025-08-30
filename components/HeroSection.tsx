import React, { useContext } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ArrowRight, Target, CreditCard, TrendingUp, Smartphone, Heart, Shield, CheckCircle, Building2, FileCheck, Wifi, Home, IndianRupee, Clock, MapPin, Download, Phone, Mail, MessageSquare, Truck, Monitor, Apple, PlayCircle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { NavigationContext } from "../App";
import { motion } from "motion/react";
import traditionalWomanImage from 'figma:asset/6899df7d374f88acab934a33705661d095642433.png';
import modernWomanImage from 'figma:asset/dd107ca8c90ae09a1bbd14cb0c10b9299c986ed1.png';

export function HeroSection() {
  const { setNavigation, scrollToSection } = useContext(NavigationContext);

  return (
    <section className="bg-gradient-to-br from-blue-50 to-green-50 py-8 sm:py-12 md:py-16 lg:py-20 relative overflow-hidden min-h-screen flex items-center">
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-16 items-start max-w-7xl mx-auto">
          {/* Content - Mobile-first approach */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 md:space-y-8 relative order-1 lg:order-1">
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

            <div className="space-y-4 sm:space-y-5 md:space-y-7 relative z-10">
              {/* DigiDabba Badge - Professional with Kaniro colors */}
              <motion.div 
                className="flex items-center justify-start gap-2 sm:gap-3"
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
              
              {/* Main Heading - Professional with impact */}
              <motion.h1 
                className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-black text-gray-900 leading-[1.05] sm:leading-[1.1] text-left"
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
              
              {/* Enhanced Subtitle - Customer focused */}
              <motion.div 
                className="space-y-3 sm:space-y-4 max-w-2xl text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed font-semibold">
                  Traditional <span className="text-[#1E4A72] font-bold">Dabba Savings</span> meets 
                  <span className="text-[#22C55E] font-bold"> Modern Technology</span> = 
                  <span className="text-gray-900 font-bold"> Your Secure Tomorrow!</span>
                </p>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
                  <span className="font-semibold text-[#1E4A72]">Small savings today, life-changing tomorrow</span>—start with <span className="font-bold text-[#22C55E]">₹10!</span>
                </p>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
                  From micro-deposits to comprehensive financial solutions, <span className="font-bold text-[#1E4A72]">DABBA SAVE</span> empowers every household—urban, rural, or homemaker—driving true financial inclusion with <span className="font-semibold text-[#22C55E]">simple, worry-free money management.</span>
                </p>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
                  <span className="font-bold text-[#1E4A72]">All deposits are secured in partnered banks, guaranteeing 100% safety</span>
                </p>
              </motion.div>

              {/* Enhanced Feature Cards with Kaniro branding */}
              <motion.div 
                className="space-y-3 sm:space-y-4 md:space-y-5 max-w-2xl"
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
                  {/* Animated background pattern */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                    animate={{ x: [-100, 300] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  />
                  
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
                      <div className="font-medium">Up to 7.5% interest + bonus rewards!</div>
                    </div>
                  </div>
                  <motion.div
                    animate={{ x: [0, 6, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ArrowRight className="size-4 sm:size-5 md:size-6 text-white flex-shrink-0" />
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
                <div className="mb-4 sm:mb-6 text-left">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    <span className="text-[#22C55E]">Your Trust, Our Responsibility</span>
                  </h3>
                </div>
                
                {/* Row 1: Bank Level Security */}
                <div className="max-w-md mb-3 sm:mb-4">
                  {/* Bank Level Security */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    whileHover={{ scale: 1.05, y: -3 }}
                  >
                    <Card className="p-3 sm:p-4 md:p-5 bg-gradient-to-br from-[#F0FDF4] to-green-50 border-2 border-[#22C55E]/30 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                      <motion.div
                        className="absolute top-0 right-0 w-16 h-16 bg-[#22C55E]/10 rounded-full -mr-8 -mt-8"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                      />
                      <div className="flex items-center gap-3 relative z-10">
                        <motion.div 
                          className="flex-shrink-0 w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-[#22C55E] to-green-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg"
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
                          <Building2 className="size-5 sm:size-6 text-white" />
                        </motion.div>
                        <div className="min-w-0">
                          <div className="font-bold text-gray-900 text-xs sm:text-sm md:text-base">Bank-Level Security</div>
                          <div className="text-xs sm:text-sm text-[#22C55E] font-medium">100% Safe & Guaranteed</div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </div>

                {/* Row 2: Omnichannel + Doorstep Service */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-10 max-w-4xl">
                  {/* Omnichannel */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.1 }}
                    whileHover={{ scale: 1.05, y: -3 }}
                  >
                    <Card className="p-3 sm:p-4 md:p-5 bg-gradient-to-br from-[#FFF7ED] to-orange-50 border-2 border-orange-300/30 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                      <motion.div
                        className="absolute top-0 right-0 w-16 h-16 bg-orange-400/10 rounded-full -mr-8 -mt-8"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                      />
                      <div className="flex items-center gap-3 relative z-10">
                        <motion.div 
                          className="flex-shrink-0 w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg"
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
                          <Monitor className="size-5 sm:size-6 text-white" />
                        </motion.div>
                        <div className="min-w-0">
                          <div className="font-bold text-gray-900 text-xs sm:text-sm md:text-base">Omnichannel</div>
                          <div className="text-xs sm:text-sm text-orange-600 font-medium">Digital and Physical Channels</div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>

                  {/* Doorstep Service */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    whileHover={{ scale: 1.05, y: -3 }}
                  >
                    <Card className="p-3 sm:p-4 md:p-5 bg-gradient-to-br from-[#ECFCCB] to-lime-50 border-2 border-lime-300/30 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                      <motion.div
                        className="absolute top-0 right-0 w-16 h-16 bg-lime-400/10 rounded-full -mr-8 -mt-8"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                      />
                      <div className="flex items-center gap-3 relative z-10">
                        <motion.div 
                          className="flex-shrink-0 w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-lime-500 to-lime-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg"
                          animate={{ 
                            scale: [1, 1.1, 1],
                            boxShadow: [
                              "0 4px 20px rgba(132, 204, 22, 0.3)",
                              "0 8px 30px rgba(132, 204, 22, 0.5)",
                              "0 4px 20px rgba(132, 204, 22, 0.3)"
                            ]
                          }}
                          transition={{ 
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1.2
                          }}
                        >
                          <Truck className="size-5 sm:size-6 text-white" />
                        </motion.div>
                        <div className="min-w-0">
                          <div className="font-bold text-gray-900 text-xs sm:text-sm md:text-base">Doorstep Service</div>
                          <div className="text-xs sm:text-sm text-lime-600 font-medium">Executive at your Doorstep</div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </div>

                {/* Separator Line */}
                <motion.div 
                  className="flex justify-center mb-8 mt-6"
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1.25 }}
                >
                  <div className="h-px w-48 bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
                </motion.div>

                {/* Row 3: App Store + Google Play Download Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8 max-w-4xl">
                  {/* App Store Download Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.3 }}
                    whileHover={{ scale: 1.05, y: -3 }}
                    className="cursor-pointer"
                  >
                    <Card className="p-3 sm:p-4 md:p-5 bg-gradient-to-r from-gray-900 to-black border-2 border-gray-700/50 hover:border-gray-600/70 hover:shadow-xl transition-all duration-300 relative overflow-hidden touch-manipulation">
                      <motion.div
                        className="absolute top-0 right-0 w-16 h-16 bg-white/5 rounded-full -mr-8 -mt-8"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      />
                      <div className="flex items-center gap-2 sm:gap-3 relative z-10">
                        <motion.div 
                          className="flex-shrink-0 w-10 sm:w-12 h-10 sm:h-12 bg-white rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg"
                          animate={{ 
                            scale: [1, 1.05, 1],
                            boxShadow: [
                              "0 4px 20px rgba(255, 255, 255, 0.2)",
                              "0 8px 30px rgba(255, 255, 255, 0.3)",
                              "0 4px 20px rgba(255, 255, 255, 0.2)"
                            ]
                          }}
                          transition={{ 
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1.3
                          }}
                        >
                          <Apple className="size-5 sm:size-6 text-black" />
                        </motion.div>
                        <div className="min-w-0">
                          <div className="text-xs text-gray-300 uppercase tracking-wide">Download on the</div>
                          <div className="font-bold text-white text-sm sm:text-base md:text-lg">App Store</div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>

                  {/* Google Play Download Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.4 }}
                    whileHover={{ scale: 1.05, y: -3 }}
                    className="cursor-pointer"
                  >
                    <Card className="p-3 sm:p-4 md:p-5 bg-gradient-to-r from-green-600 to-green-700 border-2 border-green-500/50 hover:border-green-400/70 hover:shadow-xl transition-all duration-300 relative overflow-hidden touch-manipulation">
                      <motion.div
                        className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full -mr-8 -mt-8"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                      />
                      <div className="flex items-center gap-2 sm:gap-3 relative z-10">
                        <motion.div 
                          className="flex-shrink-0 w-10 sm:w-12 h-10 sm:h-12 bg-white rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg"
                          animate={{ 
                            scale: [1, 1.05, 1],
                            boxShadow: [
                              "0 4px 20px rgba(255, 255, 255, 0.2)",
                              "0 8px 30px rgba(255, 255, 255, 0.3)",
                              "0 4px 20px rgba(255, 255, 255, 0.2)"
                            ]
                          }}
                          transition={{ 
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1.4
                          }}
                        >
                          <PlayCircle className="size-5 sm:size-6 text-green-600" />
                        </motion.div>
                        <div className="min-w-0">
                          <div className="text-xs text-green-100 uppercase tracking-wide">Get it on</div>
                          <div className="font-bold text-white text-sm sm:text-base md:text-lg">Google Play</div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </div>

              </motion.div>

            </div>
          </div>

          {/* Visual Section - Enhanced and Mobile optimized */}
          <div className="lg:col-span-5 relative flex flex-col justify-start items-center space-y-4 sm:space-y-6 order-2 lg:order-2 pt-4 sm:pt-6 lg:pt-8">
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
              className="relative z-10 mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mobile-safe-area"
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
                    <div className="text-green-100 font-medium">Dabba Concept</div>
                  </div>
                </motion.div>

                {/* Enhanced Floating Badge - Digital Banking */}
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
                    <div className="text-blue-100 font-medium">Modern Technology</div>
                  </div>
                </motion.div>

                {/* Arrow transition */}
                <motion.div 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.6 }}
                >
                  <motion.div 
                    className="bg-white rounded-full p-3 shadow-xl border-2 border-gray-100"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      boxShadow: [
                        "0 4px 20px rgba(0, 0, 0, 0.1)",
                        "0 8px 30px rgba(0, 0, 0, 0.2)",
                        "0 4px 20px rgba(0, 0, 0, 0.1)"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <motion.div
                      animate={{ x: [0, 6, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <ArrowRight className="size-5 text-gray-700" />
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}