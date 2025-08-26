import React, { useContext } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ArrowRight, Target, CreditCard, TrendingUp, Play } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { NavigationContext } from "../App";
import { motion } from "motion/react";

export function HeroSection() {
  const { setNavigation, scrollToSection } = useContext(NavigationContext);

  const handleStartJourney = () => {
    setNavigation({ showSignupModal: true });
  };

  const handleWatchDemo = () => {
    setNavigation({ showDemoModal: true });
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 to-green-50 py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 relative">
            {/* Animated circular elements on the left side */}
            <motion.div
              className="absolute -left-20 top-0 w-32 h-32 rounded-full bg-gradient-to-br from-blue-400/30 to-green-400/30 blur-2xl"
              animate={{
                rotate: 360,
                scale: [1, 1.3, 1],
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
              className="absolute -left-16 top-16 w-24 h-24 rounded-full border-4 border-blue-300/40"
              animate={{
                rotate: -360,
                scale: [1, 1.2, 1],
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
              className="absolute -left-12 top-32 w-16 h-16 rounded-full bg-gradient-to-br from-green-500/20 to-blue-500/20"
              animate={{
                rotate: 360,
                scale: [0.8, 1.4, 0.8],
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

            <div className="space-y-6 relative z-10">
              {/* Financial Inclusion Platform Badge */}
              <motion.div 
                className="flex items-center gap-3 mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                  <Target className="size-4" />
                  Financial Inclusion Platform
                </div>
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Bridging the Gap in
                <span className="text-blue-600"> Financial Inclusion</span>
                <br />
                <span className="text-2xl md:text-3xl font-medium text-gray-700">through Digital Banking Innovation</span>
              </motion.h1>
              
              <motion.p 
                className="text-lg text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Empowering Tier 2/3 India with accessible micro-deposits and flexible NPA repayments. 
                Transform your financial journey with daily savings and stress-free loan repayments.
              </motion.p>
            </div>

            {/* Key Features */}
            <motion.div 
              className="grid sm:grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button 
                onClick={() => scrollToSection('deposits')}
                className="flex items-center gap-3 p-4 bg-white rounded-lg border hover:shadow-md transition-shadow text-left group"
              >
                <div className="p-2 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors">
                  <TrendingUp className="size-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Micro Deposits</h4>
                  <p className="text-sm text-gray-600">Start saving from ₹10/day</p>
                </div>
              </button>
              
              <button 
                onClick={() => scrollToSection('repayments')}
                className="flex items-center gap-3 p-4 bg-white rounded-lg border hover:shadow-md transition-shadow text-left group"
              >
                <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                  <CreditCard className="size-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">NPA Repayments</h4>
                  <p className="text-sm text-gray-600">Flexible daily/weekly payments</p>
                </div>
              </button>
            </motion.div>

            {/* CTA */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button 
                className="bg-blue-600 hover:bg-blue-700 px-6 py-3 group"
                onClick={handleStartJourney}
              >
                Start Your Journey
                <ArrowRight className="size-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                className="px-6 py-3 group"
                onClick={handleWatchDemo}
              >
                <Play className="size-4 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="flex items-center gap-8 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <div className="text-center">
                <motion.div 
                  className="text-2xl font-bold text-blue-600"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  450M+
                </motion.div>
                <div className="text-sm text-gray-600">Target Users</div>
              </div>
              <div className="text-center">
                <motion.div 
                  className="text-2xl font-bold text-green-600"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  ₹10+
                </motion.div>
                <div className="text-sm text-gray-600">Min. Daily Savings</div>
              </div>
              <div className="text-center">
                <motion.div 
                  className="text-2xl font-bold text-blue-600"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  25+
                </motion.div>
                <div className="text-sm text-gray-600">Partner Banks</div>
              </div>
            </motion.div>
          </div>

          {/* Visual */}
          <div className="relative lg:pl-8">
            {/* Large animated circular background element */}
            <motion.div
              className="absolute inset-0 w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-blue-400/20 to-green-400/20 blur-3xl"
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
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
            
            {/* Secondary animated ring */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full border-4 border-blue-300/30"
              animate={{
                rotate: -360,
                scale: [1, 1.2, 1],
              }}
              transition={{
                rotate: {
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear"
                },
                scale: {
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            />

            {/* Main Image Container */}
            <motion.div 
              className="relative z-10 mx-auto max-w-sm lg:max-w-md"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1681826291722-70bd7e9e6fc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBiYW5raW5nJTIwYXBwfGVufDF8fHx8MTc1NTQwMDEyMHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Mobile Banking App"
                className="rounded-2xl shadow-2xl w-full"
              />
            </motion.div>
            
            {/* Floating Cards - Better positioned to avoid overlap */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <Card className="absolute top-8 left-0 lg:left-4 p-3 shadow-lg bg-white/95 backdrop-blur z-20 max-w-[140px] hidden sm:block">
                <div className="flex items-center gap-2">
                  <motion.div 
                    className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"
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
                    <div className="text-xs font-semibold text-gray-900 truncate">Daily Savings</div>
                    <div className="text-xs text-gray-600">₹25 saved today</div>
                  </div>
                </div>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <Card className="absolute bottom-12 right-0 lg:right-4 p-3 shadow-lg bg-white/95 backdrop-blur z-20 max-w-[140px] hidden sm:block">
                <div className="flex items-center gap-2">
                  <motion.div 
                    className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"
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
                    <div className="text-xs font-semibold text-gray-900 truncate">Loan Payment</div>
                    <div className="text-xs text-gray-600">₹100 repaid</div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Mobile-only cards positioned below image */}
            <div className="flex justify-between gap-4 mt-6 sm:hidden">
              <Card className="p-3 shadow-lg bg-white/95 backdrop-blur flex-1">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                  <div className="min-w-0">
                    <div className="text-xs font-semibold text-gray-900">Daily Savings</div>
                    <div className="text-xs text-gray-600">₹25 saved today</div>
                  </div>
                </div>
              </Card>
              
              <Card className="p-3 shadow-lg bg-white/95 backdrop-blur flex-1">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                  <div className="min-w-0">
                    <div className="text-xs font-semibold text-gray-900">Loan Payment</div>
                    <div className="text-xs text-gray-600">₹100 repaid</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}