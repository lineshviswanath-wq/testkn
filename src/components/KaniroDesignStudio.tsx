import React, { useContext } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ArrowRight, Target, Palette, Layers, Users, Zap, Eye, Lightbulb, Play, Sparkles, Cpu, Globe, Rocket, Award, CheckCircle, Star, AlertTriangle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { NavigationContext } from "../App";
import { motion } from "motion/react";

export function KaniroDesignStudio() {
  const { setNavigation, scrollToSection } = useContext(NavigationContext);

  const handleStartJourney = () => {
    setNavigation({ currentView: 'contact' });
  };

  const handleWatchDemo = () => {
    setNavigation({ showDemoModal: true });
  };

  const handleViewProcess = () => {
    scrollToSection('design-process');
  };

  const handleViewPortfolio = () => {
    scrollToSection('services-showcase');
  };

  const handleLearnFramework = () => {
    scrollToSection('design-thinking-framework');
  };

  return (
    <>
      {/* Creative Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-green-50 py-16 relative overflow-hidden min-h-[90vh] flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6 relative">
              {/* Animated design elements on the left side */}
              <motion.div
                className="absolute -left-24 top-0 w-40 h-40 rounded-2xl bg-gradient-to-br from-purple-400/30 to-pink-400/30 blur-2xl"
                animate={{
                  rotate: [0, 180, 360],
                  scale: [1, 1.2, 1],
                  borderRadius: ["20px", "50%", "20px"],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div
                className="absolute -left-20 top-20 w-32 h-32 bg-gradient-to-br from-blue-400/40 to-indigo-400/40 rounded-full border-4 border-blue-300/50"
                animate={{
                  rotate: -360,
                  scale: [0.8, 1.3, 0.8],
                  x: [0, 20, 0],
                }}
                transition={{
                  rotate: {
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                  },
                  scale: {
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  },
                  x: {
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              />

              <motion.div
                className="absolute -left-16 top-40 w-24 h-24 bg-gradient-to-br from-green-500/20 to-emerald-500/20 transform rotate-45"
                animate={{
                  rotate: [45, 225, 45],
                  scale: [0.6, 1.4, 0.6],
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <motion.div
                className="absolute -left-12 top-64 w-16 h-16 rounded-full bg-gradient-to-br from-orange-500/30 to-red-500/30"
                animate={{
                  scale: [0.5, 1.8, 0.5],
                  rotate: 360,
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <div className="space-y-6 relative z-10">
                {/* Badge with animated elements */}
                <motion.div 
                  className="flex items-center gap-3 mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-800 px-4 py-2 rounded-full border border-purple-200">
                    <motion.div
                      animate={{
                        rotate: 360,
                        scale: [1, 1.3, 1],
                      }}
                      transition={{
                        rotate: {
                          duration: 4,
                          repeat: Infinity,
                          ease: "linear"
                        },
                        scale: {
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }
                      }}
                    >
                      <Palette className="size-4" />
                    </motion.div>
                    Digital Banking Experience Design
                    
                    {/* Small animated design element in badge */}
                    <motion.div
                      className="ml-2 w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center"
                      animate={{
                        rotate: 360,
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        rotate: {
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear"
                        },
                        scale: {
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }
                      }}
                    >
                      <motion.div
                        className="w-2 h-2 rounded-full bg-white"
                        animate={{
                          scale: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
                
                <motion.h1 
                  className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 bg-clip-text text-transparent block mb-2">
                    KanCX
                  </span>
                  <span className="text-2xl md:text-3xl font-medium text-gray-700 block leading-relaxed">
                    Design Thinking Meets Go-to-Market Success
                  </span>
                </motion.h1>
                
                <motion.p 
                  className="text-lg text-gray-600 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Our proven design thinking methodology accelerates banking product launches from concept to market. 
                  We eliminate costly iterations and ensure product-market fit through systematic customer-centered design, 
                  helping BFSI companies achieve successful market entry 3x faster than traditional approaches.
                </motion.p>
              </div>

              {/* Key Design Areas */}
              <motion.div 
                className="grid sm:grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <button 
                  onClick={() => scrollToSection('services-showcase')}
                  className="flex items-center gap-3 p-4 bg-white/80 backdrop-blur-sm rounded-lg border border-purple-200 hover:shadow-lg transition-all duration-300 text-left group"
                >
                  <div className="p-2 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg group-hover:from-purple-200 group-hover:to-purple-300 transition-all duration-300">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Layers className="size-5 text-purple-600" />
                    </motion.div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Fast Market Entry</h4>
                    <p className="text-sm text-gray-600">Rapid validation & launch strategies</p>
                  </div>
                </button>
                
                <button 
                  onClick={() => scrollToSection('design-thinking-framework')}
                  className="flex items-center gap-3 p-4 bg-white/80 backdrop-blur-sm rounded-lg border border-green-200 hover:shadow-lg transition-all duration-300 text-left group"
                >
                  <div className="p-2 bg-gradient-to-br from-green-100 to-green-200 rounded-lg group-hover:from-green-200 group-hover:to-green-300 transition-all duration-300">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Lightbulb className="size-5 text-green-600" />
                    </motion.div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Design Thinking</h4>
                    <p className="text-sm text-gray-600">Innovation through empathy</p>
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
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-6 py-3 group shadow-lg hover:shadow-xl"
                  onClick={handleStartJourney}
                >
                  Start Design Journey
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight className="size-4 ml-2" />
                  </motion.div>
                </Button>
                <Button 
                  variant="outline" 
                  className="px-6 py-3 group border-purple-200 hover:border-purple-300 hover:bg-purple-50"
                  onClick={handleWatchDemo}
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Play className="size-4 mr-2" />
                  </motion.div>
                  Watch Our Process
                </Button>
              </motion.div>

              {/* Creative Stats */}
              <motion.div 
                className="flex items-center gap-8 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                <div className="text-center">
                  <motion.div 
                    className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    3x
                  </motion.div>
                  <div className="text-sm text-gray-600">Faster Launch</div>
                </div>
                <div className="text-center">
                  <motion.div 
                    className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  >
                    90%
                  </motion.div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <motion.div 
                    className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  >
                    60%
                  </motion.div>
                  <div className="text-sm text-gray-600">Cost Reduction</div>
                </div>
              </motion.div>
            </div>

            {/* Visual Side with Creative Elements */}
            <div className="relative lg:pl-8">
              {/* Multiple animated creative background elements */}
              <motion.div
                className="absolute inset-0 w-96 h-96 mx-auto rounded-full bg-gradient-to-br from-purple-400/20 via-blue-400/20 to-green-400/20 blur-3xl"
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                  background: [
                    "radial-gradient(circle, rgba(147, 51, 234, 0.2), rgba(59, 130, 246, 0.2), rgba(34, 197, 94, 0.2))",
                    "radial-gradient(circle, rgba(59, 130, 246, 0.2), rgba(34, 197, 94, 0.2), rgba(147, 51, 234, 0.2))",
                    "radial-gradient(circle, rgba(34, 197, 94, 0.2), rgba(147, 51, 234, 0.2), rgba(59, 130, 246, 0.2))"
                  ]
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
                  },
                  background: {
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              />
              
              {/* Secondary creative rings */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border-4 border-purple-300/30"
                animate={{
                  rotate: -360,
                  scale: [1, 1.2, 1],
                  borderColor: ["rgba(147, 51, 234, 0.3)", "rgba(59, 130, 246, 0.3)", "rgba(34, 197, 94, 0.3)"]
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
                  },
                  borderColor: {
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              />

              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-xl border-2 border-blue-400/40"
                animate={{
                  rotate: 360,
                  scale: [0.8, 1.3, 0.8],
                  borderRadius: ["12px", "50%", "12px"]
                }}
                transition={{
                  rotate: {
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear"
                  },
                  scale: {
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  },
                  borderRadius: {
                    duration: 8,
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
                  src="https://images.unsplash.com/photo-1730206562928-0efd62560435?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzdHVkaW8lMjB3b3Jrc3BhY2UlMjBjcmVhdGl2ZXxlbnwxfHx8fDE3NTU1ODgxOTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Design Studio Creative Workspace"
                  className="rounded-2xl shadow-2xl w-full"
                />
              </motion.div>
              
              {/* Floating Creative Cards */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <Card className="absolute top-8 left-0 lg:left-4 p-3 shadow-lg bg-white/95 backdrop-blur z-20 max-w-[150px] hidden sm:block border border-purple-200">
                  <div className="flex items-center gap-2">
                    <motion.div 
                      className="w-3 h-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex-shrink-0"
                      animate={{
                        scale: [1, 1.5, 1],
                        rotate: 360,
                      }}
                      transition={{
                        scale: {
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        },
                        rotate: {
                          duration: 4,
                          repeat: Infinity,
                          ease: "linear"
                        }
                      }}
                    />
                    <div className="min-w-0">
                      <div className="text-xs font-semibold text-gray-900 truncate">Go-to-Market</div>
                      <div className="text-xs text-gray-600">Design Strategy</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
              >
                <Card className="absolute bottom-12 right-0 lg:right-4 p-3 shadow-lg bg-white/95 backdrop-blur z-20 max-w-[150px] hidden sm:block border border-green-200">
                  <div className="flex items-center gap-2">
                    <motion.div 
                      className="w-3 h-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex-shrink-0"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                      }}
                    />
                    <div className="min-w-0">
                      <div className="text-xs font-semibold text-gray-900 truncate">Market Success</div>
                      <div className="text-xs text-gray-600">BFSI Launch</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Problem & Solution Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-red-100/50 to-orange-100/50 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: 360,
            x: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-br from-green-100/50 to-emerald-100/50 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: -360,
            y: [0, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <motion.h2 
                className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                The Go-to-Market Challenge in BFSI
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Most banking products fail to achieve successful market entry due to disconnected design processes 
                and lack of customer validation before launch.
              </motion.p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <motion.div 
                  className="p-8 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl border-l-4 border-red-500 relative overflow-hidden group hover:shadow-xl transition-all duration-500"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Animated background elements */}
                  <motion.div
                    className="absolute top-4 right-4 w-12 h-12 bg-red-200/50 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: 360,
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.div
                    className="absolute bottom-4 left-4 w-8 h-8 bg-orange-200/50 rounded-xl"
                    animate={{
                      rotate: [0, 45, 0],
                      scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <motion.div
                        className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <AlertTriangle className="w-6 h-6 text-white" />
                        </motion.div>
                      </motion.div>
                      <h3 className="text-2xl font-bold text-gray-900">Slow Market Entry</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Traditional banking product development takes 12-18 months to reach market, with high failure rates 
                      due to inadequate customer validation and misaligned product-market fit. This results in wasted resources 
                      and missed opportunities in the competitive BFSI landscape.
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border-l-4 border-green-500 relative overflow-hidden group hover:shadow-xl transition-all duration-500"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Animated background elements */}
                  <motion.div
                    className="absolute top-6 right-6 w-16 h-16 bg-green-200/50 rounded-full"
                    animate={{
                      scale: [1, 1.3, 1],
                      rotate: -360,
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.div
                    className="absolute bottom-6 left-6 w-10 h-10 bg-emerald-200/50 rounded-lg"
                    animate={{
                      rotate: [0, 180, 360],
                      scale: [0.9, 1.1, 0.9],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.5
                    }}
                  />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <motion.div
                        className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        >
                          <Target className="w-6 h-6 text-white" />
                        </motion.div>
                      </motion.div>
                      <h3 className="text-2xl font-bold text-gray-900">KanCX Solution</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Our integrated design thinking framework reduces time-to-market by 60% while ensuring 90% success rates. 
                      Through systematic customer validation, rapid prototyping, and go-to-market alignment, we help BFSI companies 
                      launch products that customers actually want and need.
                    </p>
                  </div>
                </motion.div>
              </div>

              <div className="relative">
                <motion.div
                  className="relative z-10"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMGRlc2lnbiUyMGZpbmFuY2V8ZW58MXx8fHwxNzU1NTg4MjM5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Team collaboration in fintech design"
                    className="rounded-2xl shadow-2xl"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}