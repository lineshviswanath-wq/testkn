import React, { useContext } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ArrowRight, Target, CreditCard, TrendingUp, Play, Smartphone, Heart, Shield, CheckCircle, Building2, FileCheck, Wifi, Home, Users, IndianRupee, Star, Award, Clock, MapPin } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { NavigationContext } from "../App";
import { motion } from "motion/react";
import traditionalDabbaWoman from 'figma:asset/07f91250c3121b441bd1934b094b1e4d5d69dfb6.png';

export function HeroSection() {
  const { setNavigation, scrollToSection } = useContext(NavigationContext);

  const handleStartJourney = () => {
    setNavigation({ showSignupModal: true });
  };

  const handleWatchDemo = () => {
    setNavigation({ showDemoModal: true });
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 to-green-50 py-12 md:py-20 relative overflow-hidden min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
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

              {/* Customer-focused descriptions with Kaniro branding */}
              <motion.div 
                className="space-y-5 max-w-2xl text-center lg:text-left mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div className="p-5 bg-gradient-to-r from-[#E3F2FD] to-[#F0FDF4] rounded-2xl border-l-4 border-[#1E4A72] shadow-lg">
                  <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-medium">
                    <span className="font-bold text-[#1E4A72]">Rural or urban, every family member</span> can now create their own digital dabba! 
                    <span className="font-semibold text-[#22C55E]">Save small amounts daily</span> and 
                    watch how it builds into a <span className="font-bold text-gray-900">substantial fund!</span>
                  </p>
                </div>

                <div className="p-5 bg-gradient-to-r from-[#F0FDF4] to-[#E3F2FD] rounded-2xl border-l-4 border-[#22C55E] shadow-lg">
                  <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-medium">
                    <span className="font-bold text-[#22C55E]">Troubled with loan dues or NPA threats?</span> Is it causing your credit score to drop and blocking further financial assistance? 
                    <span className="font-semibold text-[#1E4A72]">Repay in easy installments</span> and 
                    <span className="font-bold text-gray-900"> rebuild your financial standing!</span>
                  </p>
                </div>
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
                    <h4 className="font-black text-white text-lg sm:text-xl mb-1">Digital Savings Account</h4>
                    <div className="text-green-100 text-sm sm:text-base space-y-1">
                      <div className="font-semibold">Use DIGIDABBA Micro Deposit</div>
                      <div className="font-medium">Start with just ₹10 - Up to 7.5% interest + rewards!</div>
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
                    <h4 className="font-black text-white text-lg sm:text-xl mb-1">NPA & Loan Recovery</h4>
                    <div className="text-blue-100 text-sm sm:text-base space-y-1">
                      <div className="font-semibold">Use DIGIDABBA Flexible Due Loan Repayments</div>
                      <div className="font-medium">Clear dues from ₹100 - Rebuild credit score fast!</div>
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 max-w-2xl mx-auto lg:mx-0">
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

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.1 }}
                    whileHover={{ scale: 1.05, y: -3 }}
                  >
                    <Card className="p-4 sm:p-5 bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-purple-300/30 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                      <motion.div
                        className="absolute top-0 right-0 w-16 h-16 bg-purple-200/20 rounded-full -mr-8 -mt-8"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
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
                            delay: 1
                          }}
                        >
                          <Wifi className="size-6 text-white" />
                        </motion.div>
                        <div className="min-w-0">
                          <div className="font-bold text-gray-900 text-sm sm:text-base">24x7 Access</div>
                          <div className="text-xs sm:text-sm text-purple-700 font-medium">Anytime, Anywhere</div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    whileHover={{ scale: 1.05, y: -3 }}
                  >
                    <Card className="p-4 sm:p-5 bg-gradient-to-br from-orange-50 to-yellow-50 border-2 border-orange-300/30 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                      <motion.div
                        className="absolute top-0 right-0 w-16 h-16 bg-orange-200/20 rounded-full -mr-8 -mt-8"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
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
                            delay: 1.5
                          }}
                        >
                          <Home className="size-6 text-white" />
                        </motion.div>
                        <div className="min-w-0">
                          <div className="font-bold text-gray-900 text-sm sm:text-base">Doorstep Service</div>
                          <div className="text-xs sm:text-sm text-orange-700 font-medium">Home Assistance</div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Visual Section - Enhanced and Mobile optimized */}
          <div className="lg:col-span-5 relative flex flex-col justify-center items-center space-y-6 order-1 lg:order-2">
            {/* Background animation - Reduced on mobile */}
            <motion.div
              className="absolute inset-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto rounded-full bg-gradient-to-br from-blue-400/15 to-green-400/15 blur-3xl"
              animate={{
                rotate: 360,
                scale: [1, 1.08, 1],
              }}
              transition={{
                rotate: {
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear"
                },
                scale: {
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            />

            {/* Split Screen Container - Mobile responsive */}
            <motion.div 
              className="relative z-10 mx-auto w-full max-w-sm sm:max-w-md lg:max-w-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="relative w-full h-[300px] sm:h-[380px] lg:h-[450px] rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden bg-white">
                {/* Split Screen Images */}
                <div className="flex h-full">
                  {/* Traditional Indian Woman - Left Side */}
                  <motion.div 
                    className="w-1/2 relative overflow-hidden"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    <img
                      src={traditionalDabbaWoman}
                      alt="Indian woman in traditional yellow saree putting coin in red clay dabba pot - authentic traditional savings culture"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/8 to-transparent"></div>
                  </motion.div>

                  {/* Creative Separator - Mobile responsive */}
                  <div className="relative w-0 flex-shrink-0">
                    <motion.div 
                      className="absolute inset-y-0 -left-3 sm:-left-4 lg:-left-5 w-6 sm:w-8 lg:w-10 bg-gradient-to-b from-green-400 via-blue-400 to-green-400 rounded-full shadow-xl z-10"
                      animate={{
                        background: [
                          "linear-gradient(to bottom, #22C55E, #3B82F6, #22C55E)",
                          "linear-gradient(to bottom, #3B82F6, #22C55E, #3B82F6)",
                          "linear-gradient(to bottom, #22C55E, #3B82F6, #22C55E)"
                        ]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    
                    {/* Bridge Symbol - Mobile responsive */}
                    <motion.div 
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white rounded-full shadow-xl flex items-center justify-center z-20"
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 360]
                      }}
                      transition={{
                        scale: {
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        },
                        rotate: {
                          duration: 8,
                          repeat: Infinity,
                          ease: "linear"
                        }
                      }}
                    >
                      <Heart className="size-5 sm:size-6 lg:size-7 text-blue-600" />
                    </motion.div>

                    {/* Connecting dots - Responsive */}
                    <motion.div 
                      className="absolute top-1/4 left-1/2 -translate-x-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-blue-400 rounded-full"
                      animate={{
                        scale: [0.8, 1.3, 0.8],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <motion.div 
                      className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full"
                      animate={{
                        scale: [0.8, 1.3, 0.8],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.8
                      }}
                    />
                  </div>

                  {/* Modern Digital Interface - Right Side */}
                  <motion.div 
                    className="w-1/2 relative overflow-hidden"
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                  >
                    <div className="w-full h-full bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 flex items-center justify-center relative">
                      {/* Phone mockup interface */}
                      <div className="relative w-4/5 h-4/5 bg-white rounded-2xl shadow-2xl p-4">
                        {/* Status bar */}
                        <div className="flex justify-between items-center mb-4 text-xs">
                          <span className="font-bold text-gray-800">9:41</span>
                          <div className="flex gap-1">
                            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                            <div className="w-1 h-1 bg-gray-800 rounded-full"></div>
                          </div>
                        </div>
                        
                        {/* App interface */}
                        <div className="space-y-3">
                          <div className="text-center">
                            <div className="w-12 h-12 bg-gradient-to-br from-[#1E4A72] to-[#22C55E] rounded-full mx-auto mb-2 flex items-center justify-center">
                              <span className="text-white text-xs font-bold">D</span>
                            </div>
                            <div className="text-xs font-bold text-gray-800">DIGIDABBA</div>
                          </div>
                          
                          <div className="bg-green-100 rounded-lg p-3">
                            <div className="text-xs text-green-800 font-medium">Today's Savings</div>
                            <div className="text-sm font-bold text-green-900">₹50</div>
                          </div>
                          
                          <div className="bg-blue-100 rounded-lg p-3">
                            <div className="text-xs text-blue-800 font-medium">Total Balance</div>
                            <div className="text-sm font-bold text-blue-900">₹12,850</div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Digital elements */}
                      <motion.div
                        className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <motion.div
                        className="absolute bottom-6 left-4 w-6 h-6 bg-white/20 rounded-full"
                        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.8, 0.3] }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-l from-blue-500/8 to-transparent"></div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Financial Growth Visualization - Added below split screen */}
            <motion.div 
              className="mt-8 relative z-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-6 border border-blue-100 shadow-lg max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
                <div className="text-center mb-4">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Your Financial Journey</h4>
                  <p className="text-sm text-gray-600">Watch your money grow with DIGIDABBA</p>
                </div>
                
                <div className="flex items-center justify-between">
                  {/* Starting Point */}
                  <motion.div 
                    className="text-center flex-1"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.5 }}
                  >
                    <motion.div 
                      className="w-12 h-12 bg-red-100 rounded-full mx-auto mb-2 flex items-center justify-center"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <span className="text-red-600 font-bold text-lg">₹0</span>
                    </motion.div>
                    <span className="text-xs text-gray-600 font-medium">Start Today</span>
                  </motion.div>
                  
                  {/* Arrow */}
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="mx-2"
                  >
                    <ArrowRight className="size-4 text-blue-500" />
                  </motion.div>
                  
                  {/* Progress Point */}
                  <motion.div 
                    className="text-center flex-1"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.7 }}
                  >
                    <motion.div 
                      className="w-12 h-12 bg-yellow-100 rounded-full mx-auto mb-2 flex items-center justify-center"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    >
                      <span className="text-yellow-600 font-bold text-sm">₹3.6K</span>
                    </motion.div>
                    <span className="text-xs text-gray-600 font-medium">100 Days</span>
                  </motion.div>
                  
                  {/* Arrow */}
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                    className="mx-2"
                  >
                    <ArrowRight className="size-4 text-green-500" />
                  </motion.div>
                  
                  {/* End Goal */}
                  <motion.div 
                    className="text-center flex-1"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.9 }}
                  >
                    <motion.div 
                      className="w-12 h-12 bg-green-100 rounded-full mx-auto mb-2 flex items-center justify-center"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    >
                      <span className="text-green-600 font-bold text-sm">₹38K+</span>
                    </motion.div>
                    <span className="text-xs text-gray-600 font-medium">1 Year</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.1 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-full shadow-xl font-bold text-lg group relative overflow-hidden"
                  onClick={handleStartJourney}
                >
                  {/* Animated background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                    animate={{ x: [-100, 200] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                  
                  Start Your Journey
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="ml-2"
                  >
                    <ArrowRight className="size-5" />
                  </motion.div>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-green-200 text-green-700 hover:bg-green-50 hover:border-green-300 px-8 py-3 rounded-full shadow-lg font-bold text-lg group"
                  onClick={handleWatchDemo}
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="mr-2"
                  >
                    <Play className="size-5" />
                  </motion.div>
                  Watch Demo
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}