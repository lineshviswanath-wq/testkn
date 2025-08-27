import React, { useContext } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ArrowRight, Target, CreditCard, TrendingUp, Play, Smartphone, Heart, Shield, CheckCircle, Building2, FileCheck, Wifi, Home } from "lucide-react";
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
    <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20 relative overflow-hidden min-h-[90vh] flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-16 items-center max-w-7xl mx-auto">
          {/* Content - 7 columns for better proportion */}
          <div className="lg:col-span-7 space-y-8 relative">
            {/* Animated circular elements on the left side */}
            <motion.div
              className="absolute -left-20 top-0 w-32 h-32 rounded-full bg-gradient-to-br from-blue-400/20 to-green-400/20 blur-2xl"
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
              className="absolute -left-16 top-16 w-24 h-24 rounded-full border-4 border-blue-300/30"
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
              className="absolute -left-12 top-32 w-16 h-16 rounded-full bg-gradient-to-br from-green-500/15 to-blue-500/15"
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

            <div className="space-y-7 relative z-10">
              {/* Kaniro Dabba Badge */}
              <motion.div 
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-green-500 text-white px-5 py-2.5 rounded-full shadow-lg">
                  <Target className="size-4" />
                  <span className="font-medium">DigiDabba - Your Digital Money Box</span>
                </div>
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                DigiDabba –
                <span className="text-blue-600"> Your Digital Money Box</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-700 leading-relaxed font-medium max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Bringing back the trusted habit of the old dabba savings, now reimagined for the digital age.
              </motion.p>

              <motion.p 
                className="text-lg text-gray-600 leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                With DigiDabba, anyone can deposit small amounts daily—just like dropping coins into a dabba at home—and use these deposits to build savings or repay loans with ease. Designed especially for rural India's saving culture, it also empowers urban and young users to adopt a simple, disciplined financial lifestyle.
              </motion.p>

              <motion.p 
                className="text-lg text-gray-600 leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                From micro-deposits to stress-free loan repayments, <span className="font-semibold text-gray-800">DigiDabba bridges the gap in financial inclusion and helps every household take control of its financial journey.</span>
              </motion.p>

              {/* Feature Cards - Moved here after the journey paragraph */}
              <motion.div 
                className="space-y-4 max-w-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <button 
                  onClick={() => scrollToSection('deposits')}
                  className="w-full flex items-center gap-4 p-5 bg-white rounded-2xl border-2 border-gray-100 hover:border-green-200 hover:shadow-lg transition-all duration-300 text-left group hover:scale-[1.02]"
                >
                  <div className="p-3 bg-green-100 rounded-xl group-hover:bg-green-200 transition-colors flex-shrink-0">
                    <TrendingUp className="size-6 text-green-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-900 text-lg">Daily Dabba Deposits</h4>
                    <p className="text-gray-600">Start saving from ₹10/day</p>
                  </div>
                  <ArrowRight className="size-5 text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all flex-shrink-0" />
                </button>
                
                <button 
                  onClick={() => scrollToSection('repayments')}
                  className="w-full flex items-center gap-4 p-5 bg-white rounded-2xl border-2 border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 text-left group hover:scale-[1.02]"
                >
                  <div className="p-3 bg-blue-100 rounded-xl group-hover:bg-blue-200 transition-colors flex-shrink-0">
                    <CreditCard className="size-6 text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-900 text-lg">Stress-Free Repayments</h4>
                    <p className="text-gray-600">Flexible daily/weekly payments</p>
                  </div>
                  <ArrowRight className="size-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all flex-shrink-0" />
                </button>
              </motion.div>

              {/* Individual Safety Feature Cards - Hidden on mobile */}
              <motion.div 
                className="relative z-20 hidden lg:block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="grid grid-cols-2 gap-4 max-w-2xl">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                  >
                    <Card className="p-4 bg-white/80 backdrop-blur-sm border-green-200 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                      <div className="flex items-center gap-3">
                        <motion.div 
                          className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg"
                          animate={{ 
                            rotate: [0, 360],
                            scale: [1, 1.05, 1]
                          }}
                          transition={{ 
                            rotate: {
                              duration: 10, 
                              repeat: Infinity, 
                              ease: "linear"
                            },
                            scale: {
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }
                          }}
                        >
                          <Building2 className="size-5 text-white" />
                        </motion.div>
                        <div>
                          <div className="font-semibold text-gray-900 text-sm">Money Holding in Bank</div>
                          <div className="text-xs text-gray-600">Secure & Protected</div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                  >
                    <Card className="p-4 bg-white/80 backdrop-blur-sm border-blue-200 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                      <div className="flex items-center gap-3">
                        <motion.div 
                          className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg"
                          animate={{ 
                            rotate: [0, -360],
                            scale: [1, 1.05, 1]
                          }}
                          transition={{ 
                            rotate: {
                              duration: 12, 
                              repeat: Infinity, 
                              ease: "linear"
                            },
                            scale: {
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 0.5
                            }
                          }}
                        >
                          <FileCheck className="size-5 text-white" />
                        </motion.div>
                        <div>
                          <div className="font-semibold text-gray-900 text-sm">RBI Compliant</div>
                          <div className="text-xs text-gray-600">Regulatory Approved</div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.1 }}
                  >
                    <Card className="p-4 bg-white/80 backdrop-blur-sm border-purple-200 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                      <div className="flex items-center gap-3">
                        <motion.div 
                          className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg"
                          animate={{ 
                            rotate: [0, 360],
                            scale: [1, 1.05, 1]
                          }}
                          transition={{ 
                            rotate: {
                              duration: 8, 
                              repeat: Infinity, 
                              ease: "linear"
                            },
                            scale: {
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 1
                            }
                          }}
                        >
                          <Wifi className="size-5 text-white" />
                        </motion.div>
                        <div>
                          <div className="font-semibold text-gray-900 text-sm">Omni Channel</div>
                          <div className="text-xs text-gray-600">Multiple Access Points</div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                  >
                    <Card className="p-4 bg-white/80 backdrop-blur-sm border-orange-200 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                      <div className="flex items-center gap-3">
                        <motion.div 
                          className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg"
                          animate={{ 
                            rotate: [0, -360],
                            scale: [1, 1.05, 1]
                          }}
                          transition={{ 
                            rotate: {
                              duration: 14, 
                              repeat: Infinity, 
                              ease: "linear"
                            },
                            scale: {
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 1.5
                            }
                          }}
                        >
                          <Home className="size-5 text-white" />
                        </motion.div>
                        <div>
                          <div className="font-semibold text-gray-900 text-sm">Doorstep Facility</div>
                          <div className="text-xs text-gray-600">At Your Convenience</div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Visual - Split Screen Design - 5 columns for better proportion */}
          <div className="lg:col-span-5 relative flex flex-col justify-center items-center space-y-8">
            {/* Large animated circular background element */}
            <motion.div
              className="absolute inset-0 w-96 h-96 mx-auto rounded-full bg-gradient-to-br from-blue-400/15 to-green-400/15 blur-3xl"
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

            {/* Split Screen Container */}
            <motion.div 
              className="relative z-10 mx-auto w-full max-w-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="relative w-full h-[450px] rounded-3xl shadow-2xl overflow-hidden bg-white">
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
                    {/* Subtle overlay for visual enhancement */}
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/8 to-transparent"></div>
                  </motion.div>

                  {/* Creative Separator */}
                  <div className="relative w-0 flex-shrink-0">
                    {/* Connecting Bridge Design */}
                    <motion.div 
                      className="absolute inset-y-0 -left-5 w-10 bg-gradient-to-b from-green-400 via-blue-400 to-green-400 rounded-full shadow-xl z-10"
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
                    
                    {/* Bridge Symbol */}
                    <motion.div 
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center z-20"
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
                      <Heart className="size-7 text-blue-600" />
                    </motion.div>

                    {/* Connecting dots */}
                    <motion.div 
                      className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-400 rounded-full"
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
                      className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-3 h-3 bg-green-400 rounded-full"
                      animate={{
                        scale: [0.8, 1.3, 0.8],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.75
                      }}
                    />
                  </div>

                  {/* Young Indian Man - Right Side */}
                  <motion.div 
                    className="w-1/2 relative overflow-hidden"
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                  >
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1670408378363-10c1eb4caf41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBtYW4lMjBzbWFydHBob25lJTIweW91bmclMjB1cmJhbiUyMGhhcHB5fGVufDF8fHx8MTc1NjI4ODQzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Young Indian man happily using DigiDabba mobile app"
                      className="w-full h-full object-cover"
                    />
                    {/* Subtle overlay for visual enhancement */}
                    <div className="absolute inset-0 bg-gradient-to-l from-blue-500/8 to-transparent"></div>
                  </motion.div>
                </div>

                {/* Enhanced coin animation elements */}
                <motion.div
                  className="absolute top-6 right-6 w-10 h-10 bg-yellow-400/90 rounded-full shadow-lg z-30 flex items-center justify-center"
                  animate={{
                    y: [0, -25, 0],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                >
                  <span className="text-yellow-800 font-bold text-xs">₹</span>
                </motion.div>
                
                <motion.div
                  className="absolute top-16 right-12 w-8 h-8 bg-orange-400/90 rounded-full shadow-lg z-30 flex items-center justify-center"
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, -180, -360],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  <span className="text-orange-800 font-bold text-xs">₹</span>
                </motion.div>
                
                <motion.div
                  className="absolute top-24 right-16 w-6 h-6 bg-amber-400/90 rounded-full shadow-lg z-30 flex items-center justify-center"
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 360, 720],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5
                  }}
                >
                  <span className="text-amber-800 font-bold text-xs">₹</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Floating Cards - Now responsive and visible on mobile */}
            <motion.div
              className="absolute lg:top-12 lg:-left-8 top-2 left-2 z-20"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              <Card className="p-3 shadow-lg bg-white/95 backdrop-blur max-w-[160px] lg:max-w-[160px] w-[140px] lg:w-auto">
                <div className="flex items-center gap-2">
                  <motion.div 
                    className="w-2.5 h-2.5 bg-green-500 rounded-full flex-shrink-0"
                    animate={{
                      scale: [1, 1.5, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <div className="min-w-0">
                    <div className="text-xs font-semibold text-gray-900 truncate">Traditional Savings</div>
                    <div className="text-xs text-gray-600">Made Digital</div>
                  </div>
                </div>
              </Card>
            </motion.div>
            
            <motion.div
              className="absolute lg:top-96 lg:-right-8 top-2 right-2 z-20"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 2.0 }}
            >
              <Card className="p-3 shadow-lg bg-white/95 backdrop-blur max-w-[160px] lg:max-w-[160px] w-[140px] lg:w-auto">
                <div className="flex items-center gap-2">
                  <motion.div 
                    className="w-2.5 h-2.5 bg-blue-500 rounded-full flex-shrink-0"
                    animate={{
                      scale: [1, 1.5, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  />
                  <div className="min-w-0">
                    <div className="text-xs font-semibold text-gray-900 truncate">Modern Banking</div>
                    <div className="text-xs text-gray-600">Simple & Smart</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}