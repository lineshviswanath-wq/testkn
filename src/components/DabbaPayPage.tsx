import React, { useContext } from "react";
import { motion } from "motion/react";
import { NPARepaymentSection } from "./NPARepaymentSection";
import { NPACalculator } from "./NPACalculator";
import { NavigationContext } from "../App";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import dubbaPayWomanImage from 'figma:asset/e73a6ac8067bab17eeaa5405833df34d81eb2b80.png';
import { 
  ArrowRight, 
  Shield, 
  CreditCard, 
  Target, 
  TrendingUp, 
  Users, 
  CheckCircle, 
  Star, 
  Award,
  Building2,
  FileCheck,
  Zap,
  Heart,
  Download,
  PlayCircle,
  Apple,
  AlertTriangle,
  DollarSign,
  Calendar,
  BarChart3,
  Percent,
  RefreshCw,
  Monitor,
  Truck,
  Headphones,
  Clock
} from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

export function DabbaPayPage() {
  const { setNavigation, scrollToSection } = useContext(NavigationContext);

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Hero Section */}
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
                className="absolute -left-12 top-32 w-16 h-16 rounded-full bg-gradient-to-br from-red-500/15 to-blue-500/15 hidden lg:block"
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
                {/* DABBA PAY Badge - Professional with Kaniro colors */}
                <motion.div 
                  className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <motion.div 
                    className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-[#1E4A72] to-orange-600 text-white px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 md:py-3.5 rounded-full shadow-xl text-xs sm:text-sm md:text-base"
                    animate={{ 
                      boxShadow: [
                        "0 4px 20px rgba(30, 74, 114, 0.3)",
                        "0 8px 30px rgba(234, 88, 12, 0.5)",
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
                      <Heart className="size-3 sm:size-4 md:size-5 text-yellow-300" />
                    </motion.div>
                    <span className="font-bold tracking-wide text-xs sm:text-sm md:text-base">DABBA PAY - Flexible Loan Repayment</span>
                  </motion.div>
                </motion.div>
                
                {/* Main Heading - Professional with impact */}
                <motion.h1 
                  className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-black text-gray-900 leading-[1.05] sm:leading-[1.1] text-center lg:text-left"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <span className="block mb-1 sm:mb-2">
                    <span className="bg-gradient-to-r from-orange-600 to-[#1E4A72] bg-clip-text text-transparent">
                      DABBA PAY
                    </span>
                  </span>
                  <span className="block text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-gray-800 leading-tight">
                    Transform Your 
                    <span className="text-orange-600 font-black"> Loan Stress </span>
                    Into 
                    <span className="text-[#22C55E] font-black"> Financial Freedom! </span>
                  </span>
                </motion.h1>
                
                {/* Enhanced Subtitle - Customer focused */}
                <motion.div 
                  className="space-y-3 sm:space-y-4 max-w-2xl text-center lg:text-left mx-auto lg:mx-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed font-semibold">
                    From <span className="text-orange-600 font-bold">High EMI Burden</span> to 
                    <span className="text-[#22C55E] font-bold"> Micro Repayments</span> = 
                    <span className="text-gray-900 font-bold"> Your Path to Freedom!</span>
                  </p>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
                    <span className="font-semibold text-[#1E4A72]">Start with just ₹100/day and build your way to financial freedom</span>—flexible daily, weekly, or monthly repayments that fit your income!
                  </p>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
                    Supporting low-income families, daily wage workers, small businesses, and MSMEs with <span className="font-bold text-[#1E4A72]">micro-repayment solutions</span> as part of India's <span className="font-semibold text-[#22C55E]">Financial Inclusion Program.</span>
                  </p>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
                    <span className="font-bold text-orange-600">All repayments are reflected in real time on loan accounts, ensuring 100% compliance, trust, and transparency</span>
                  </p>
                </motion.div>

                {/* Enhanced Feature Card - Single focused CTA */}
                <motion.div 
                  className="space-y-3 sm:space-y-4 md:space-y-5 max-w-2xl mx-auto lg:mx-0"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  <motion.button 
                    onClick={() => scrollToSection('npa-calculator')}
                    className="w-full flex items-center gap-3 sm:gap-4 md:gap-5 p-4 sm:p-5 md:p-6 bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-2xl hover:shadow-orange-200 transition-all duration-500 text-left group relative overflow-hidden touch-manipulation"
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
                      <Target className="size-5 sm:size-6 md:size-7 text-white" />
                    </motion.div>
                    <div className="flex-1 min-w-0 relative z-10">
                      <h4 className="font-black text-white text-base sm:text-lg md:text-xl mb-1">Start Your Micro Loan Repayment Plan</h4>
                      <div className="text-orange-100 text-xs sm:text-sm md:text-base space-y-0.5 sm:space-y-1">
                        <div className="font-semibold">Start with ₹100/day and scale as per your income</div>
                        <div className="font-medium">Flexible daily/weekly/monthly options!</div>
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

                {/* Trust & Recovery Features with Kaniro branding */}
                <motion.div 
                  className="relative z-20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <div className="mb-4 sm:mb-6 text-center lg:text-left">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                      <span className="text-orange-600">Your Financial Freedom, Our Mission</span>
                    </h3>
                  </div>
                  
                  {/* Row 1: Bank-Level Security + Rebuild Credit Score */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4 max-w-4xl mx-auto lg:mx-0">
                    {/* Bank-Level Security */}
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

                    {/* Rebuild Credit Score */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 1.0 }}
                      whileHover={{ scale: 1.05, y: -3 }}
                    >
                      <Card className="p-3 sm:p-4 md:p-5 bg-gradient-to-br from-[#E3F2FD] to-blue-50 border-2 border-[#1E4A72]/30 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                        <motion.div
                          className="absolute top-0 right-0 w-16 h-16 bg-[#1E4A72]/10 rounded-full -mr-8 -mt-8"
                          animate={{ rotate: -360 }}
                          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                        />
                        <div className="flex items-center gap-3 relative z-10">
                          <motion.div 
                            className="flex-shrink-0 w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-[#1E4A72] to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg"
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
                            <FileCheck className="size-5 sm:size-6 text-white" />
                          </motion.div>
                          <div className="min-w-0">
                            <div className="font-bold text-gray-900 text-xs sm:text-sm md:text-base">Rebuild Credit Score</div>
                            <div className="text-xs sm:text-sm text-[#1E4A72] font-medium">Restore Financial Health</div>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  </div>

                  {/* Row 2: Omnichannel + Doorstep Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-10 max-w-4xl mx-auto lg:mx-0">
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8 max-w-4xl mx-auto lg:mx-0">
                    {/* App Store Download Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 1.7 }}
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
                              delay: 1.7
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
                      transition={{ duration: 0.8, delay: 1.8 }}
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
                              delay: 1.8
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

            {/* Visual Elements - Happy Customer with DABBA PAY App */}
            <div className="lg:col-span-5 relative order-2 lg:order-2 flex flex-col items-center justify-start py-8 space-y-6">
              <motion.div
                className="relative flex items-center justify-center w-full max-w-lg mx-auto"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                {/* Happy Customer with DABBA PAY App */}
                <motion.div 
                  className="relative z-10 flex items-center justify-center w-full"
                  animate={{ 
                    y: [0, -8, 0],
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <ImageWithFallback
                    src={dubbaPayWomanImage}
                    alt="Happy customer using DABBA PAY app for loan repayment"
                    className="w-full h-auto max-w-md rounded-2xl shadow-2xl border-4 border-white"
                  />
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-6 -left-6 bg-gradient-to-r from-[#22C55E] to-green-600 text-white px-4 py-2 rounded-full shadow-xl text-sm font-bold"
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  ₹100/day
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -right-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full shadow-xl text-sm font-bold"
                  animate={{ 
                    rotate: [0, -5, 5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                >
                  EMI Free!
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* NPA Calculator Section */}
      <NPACalculator />

      {/* NPA Repayment Section */}
      <NPARepaymentSection />
    </div>
  );
}