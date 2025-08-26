import React, { useContext } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ArrowRight, Target, Palette, Layers, Users, Zap, Eye, Lightbulb, Play, Sparkles, Cpu, Globe, Rocket, Award, CheckCircle, Star } from "lucide-react";
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
                    Kaniro Design Studio
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
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <Rocket className="w-6 h-6 text-white" />
                        </motion.div>
                      </motion.div>
                      <h3 className="text-2xl font-bold text-gray-900">Accelerated Success</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Our design thinking methodology enables banking products to reach market in 4-6 months with 90% higher 
                      success rates. Through systematic customer validation and rapid prototyping, we ensure product-market fit 
                      before full development, reducing costs and accelerating revenue generation.
                    </p>
                    <motion.button 
                      onClick={handleLearnFramework}
                      className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn Our Methodology
                      <motion.span
                        className="inline-block ml-2"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      >
                        →
                      </motion.span>
                    </motion.button>
                  </div>
                </motion.div>
              </div>

              <motion.div 
                className="relative"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {/* Animated background elements around the image */}
                <motion.div
                  className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-br from-purple-300/30 to-blue-300/30 rounded-full blur-xl"
                  animate={{
                    scale: [1, 1.4, 1],
                    rotate: 360,
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute -bottom-10 -right-10 w-28 h-28 bg-gradient-to-br from-green-300/30 to-emerald-300/30 rounded-full blur-xl"
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

                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1677506048148-0c914dd8197b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjB0aGlua2luZyUyMHByb2Nlc3MlMjBjcmVhdGl2ZSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NTYyMjI5ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Designer Creative Process"
                  className="w-full rounded-2xl shadow-2xl relative z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl z-20"></div>
                
                {/* Floating design elements */}
                <motion.div 
                  className="absolute top-6 right-6 z-30"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                    >
                      <Sparkles className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-6 left-6 z-30"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl backdrop-blur-sm border border-white/10 flex items-center justify-center">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Cpu className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Design Process Section */}
      <section id="design-process" className="py-20 bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50 relative overflow-hidden">
        {/* Multiple animated background elements */}
        <motion.div
          className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-purple-200/40 to-blue-200/40 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.5, 1],
            x: [0, 50, 0],
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 right-10 w-32 h-32 bg-gradient-to-br from-green-200/40 to-emerald-200/40 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            y: [0, -40, 0],
            rotate: -360,
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-10 left-1/3 w-36 h-36 bg-gradient-to-br from-indigo-200/40 to-purple-200/40 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.4, 1],
            x: [0, -30, 0],
            rotate: 360,
          }}
          transition={{
            duration: 18,
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
                Rapid Go-to-Market Process
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our proven 3-step methodology that accelerates banking product launches from concept to successful market entry
              </motion.p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  number: "1",
                  title: "VALIDATE",
                  description: "Rapid customer discovery, market research, and validation of banking product concepts through systematic design thinking and user feedback loops.",
                  gradient: "from-blue-500 to-blue-600",
                  bgGradient: "from-blue-400/20 to-purple-400/20",
                  delay: 0,
                  icon: Users
                },
                {
                  number: "2", 
                  title: "PROTOTYPE",
                  description: "Fast MVP development and iterative testing with real customers to ensure product-market fit before full development commitment.",
                  gradient: "from-green-500 to-green-600",
                  bgGradient: "from-green-400/20 to-blue-400/20",
                  delay: 0.2,
                  icon: Zap
                },
                {
                  number: "3",
                  title: "LAUNCH", 
                  description: "Strategic market entry with proven customer demand, optimized user experience, and measurable success metrics for sustainable growth.",
                  gradient: "from-purple-500 to-purple-600",
                  bgGradient: "from-purple-400/20 to-red-400/20",
                  delay: 0.4,
                  icon: Rocket
                }
              ].map((step, index) => (
                <motion.div 
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: step.delay }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 relative overflow-hidden">
                    {/* Animated background gradient */}
                    <motion.div 
                      className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${step.gradient}`}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 1, delay: step.delay + 0.5 }}
                    />
                    
                    {/* Floating elements inside card */}
                    <motion.div 
                      className="absolute top-4 right-4"
                      animate={{
                        rotate: 360,
                        scale: [0.8, 1.2, 0.8],
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 2
                      }}
                    >
                      <div className={`w-8 h-8 bg-gradient-to-br ${step.bgGradient} rounded-full opacity-30`} />
                    </motion.div>

                    <div className="flex items-center gap-4 mb-6">
                      <motion.div 
                        className={`w-20 h-20 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative overflow-hidden`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        {/* Animated shine effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          animate={{
                            x: ['-100%', '100%'],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.5
                          }}
                        />
                        <span className="text-white font-bold text-2xl relative z-10">{step.number}</span>
                      </motion.div>
                      
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                        <motion.div
                          className={`w-12 h-12 bg-gradient-to-br ${step.gradient} rounded-lg flex items-center justify-center opacity-20`}
                          animate={{
                            rotate: [0, 360],
                            scale: [1, 1.1, 1],
                          }}
                          transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index
                          }}
                        >
                          <step.icon className="w-6 h-6 text-white" />
                        </motion.div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Floating background element */}
                  <motion.div 
                    className={`absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br ${step.bgGradient} rounded-full blur-xl group-hover:blur-2xl transition-all duration-300 -z-10`}
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: 360,
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 2
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Showcase */}
      <section id="services-showcase" className="py-20 bg-white relative overflow-hidden">
        {/* Animated background patterns */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, rgba(34, 197, 94, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)`
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
                Go-to-Market Design Services
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Comprehensive design solutions that accelerate banking product success from concept to market leadership
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Users,
                  title: "Banking Customer Research",
                  description: "Deep market analysis and customer discovery to identify opportunities and validate banking product concepts before development begins.",
                  gradient: "from-blue-50 to-indigo-50",
                  iconGradient: "from-blue-500 to-indigo-600",
                  textColor: "text-blue-600",
                  hoverColor: "hover:text-blue-700",
                  accentColor: "blue"
                },
                {
                  icon: Zap,
                  title: "Digital Banking UX Strategy", 
                  description: "Strategic UX planning that aligns design decisions with business goals and market demands for maximum product success.",
                  gradient: "from-green-50 to-emerald-50",
                  iconGradient: "from-green-500 to-emerald-600", 
                  textColor: "text-green-600",
                  hoverColor: "hover:text-green-700",
                  accentColor: "green"
                },
                {
                  icon: Layers,
                  title: "Design System Creation",
                  description: "Comprehensive design system development for banking products, creating scalable component libraries and design standards that ensure consistency across all touchpoints.",
                  gradient: "from-purple-50 to-violet-50",
                  iconGradient: "from-purple-500 to-violet-600",
                  textColor: "text-purple-600", 
                  hoverColor: "hover:text-purple-700",
                  accentColor: "purple"
                },
                {
                  icon: Rocket,
                  title: "MVP Development",
                  description: "Rapid development of market-ready banking prototypes with validated features that ensure successful launch and customer traction.",
                  gradient: "from-orange-50 to-red-50",
                  iconGradient: "from-orange-500 to-red-600",
                  textColor: "text-orange-600",
                  hoverColor: "hover:text-orange-700",
                  accentColor: "orange"
                }
              ].map((service, index) => (
                <motion.div 
                  key={index}
                  className={`group p-8 bg-gradient-to-br ${service.gradient} rounded-2xl hover:shadow-xl transition-all duration-500 cursor-pointer relative overflow-hidden border border-transparent hover:border-white`}
                  onClick={handleStartJourney}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  {/* Animated background effects */}
                  <motion.div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-xl`}
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: 360,
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 2
                    }}
                  />
                  
                  <motion.div
                    className={`absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-br ${service.iconGradient} rounded-full opacity-30`}
                    animate={{
                      x: [0, 10, 0],
                      y: [0, -10, 0],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5
                    }}
                  />

                  <div className="relative z-10">
                    <motion.div 
                      className={`w-16 h-16 bg-gradient-to-br ${service.iconGradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative overflow-hidden`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {/* Shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        animate={{
                          x: ['-100%', '100%'],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.7
                        }}
                      />
                      <service.icon className="w-8 h-8 text-white relative z-10" />
                    </motion.div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    
                    <motion.div 
                      className={`flex items-center ${service.textColor} font-semibold ${service.hoverColor} transition-colors group`}
                      whileHover={{ x: 5 }}
                    >
                      <span>Learn More</span>
                      <motion.div
                        className="ml-2"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </motion.div>
                  </div>
                  
                  {/* Corner accent */}
                  <motion.div 
                    className="absolute top-4 right-4 w-12 h-12 bg-white/20 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5
                    }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Enhanced showcase images section */}
            <motion.div 
              className="mt-16 grid md:grid-cols-2 gap-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="relative group overflow-hidden rounded-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1687211980289-ba127aa649e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMGlsbHVzdHJhdGlvbiUyMGFydGlzdGljJTIwYWJzdHJhY3R8ZW58MXx8fHwxNzU2MjIzNDkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Design System Creation"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-bold text-lg">Design System Creation</h4>
                  <p className="text-sm opacity-90">Scalable design systems for banking</p>
                </div>
                
                {/* Floating design element */}
                <motion.div
                  className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30"
                  animate={{
                    rotate: 360,
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>

              <motion.div 
                className="relative group overflow-hidden rounded-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1670222061552-c273834aee0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYXJ0JTIwZGVzaWduJTIwY3JlYXRpdmUlMjB3b3Jrc3BhY2UlMjBpbnNwaXJhdGlvbnxlbnwxfHx8fDE3NTYyMjM0OTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="MVP Development"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-bold text-lg">MVP Development</h4>
                  <p className="text-sm opacity-90">Rapid market-ready solutions</p>
                </div>
                
                {/* Floating design element */}
                <motion.div
                  className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30 flex items-center justify-center"
                  animate={{
                    y: [0, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Star className="w-6 h-6 text-white" />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Design Thinking Framework */}
      <section id="design-thinking-framework" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-slate-800 relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.5, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-blue-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: 360,
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <motion.h2 
                className="text-4xl lg:text-5xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Banking Design Thinking Framework
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-300 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our systematic approach to understanding and solving complex banking experience challenges for rapid market success
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { letter: "E", title: "Empathize", description: "Understanding financial behaviors, banking anxieties, and money management patterns of underserved communities through immersive research.", gradient: "from-blue-400 to-blue-600", icon: Users },
                { letter: "D", title: "Define", description: "Clearly articulating financial challenges and banking accessibility issues specific to target customer segments with precision and clarity.", gradient: "from-green-400 to-green-600", icon: Target },
                { letter: "I", title: "Ideate", description: "Generating innovative digital banking solutions that work within Indian financial ecosystem constraints and regulatory requirements.", gradient: "from-purple-400 to-purple-600", icon: Lightbulb },
                { letter: "P", title: "Prototype", description: "Building testable banking interfaces and customer journey prototypes with comprehensive regulatory compliance considerations.", gradient: "from-orange-400 to-orange-600", icon: Layers },
                { letter: "T", title: "Test", description: "Validating banking solutions with actual customers in real financial scenarios and iterating based on behavioral usage patterns.", gradient: "from-red-400 to-red-600", icon: CheckCircle },
                { letter: "S", title: "Scale", description: "Implementing validated solutions across multiple touchpoints and customer segments while maintaining design consistency and user experience quality.", gradient: "from-indigo-400 to-indigo-600", icon: Rocket }
              ].map((framework, index) => (
                <motion.div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-500 relative overflow-hidden group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  {/* Animated background effects */}
                  <motion.div
                    className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5
                    }}
                  />
                  
                  <motion.div
                    className="absolute top-4 right-4 w-8 h-8 bg-white/10 rounded-full"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3
                    }}
                  />

                  <div className="flex items-center gap-4 mb-6">
                    <motion.div 
                      className={`w-16 h-16 bg-gradient-to-br ${framework.gradient} rounded-2xl flex items-center justify-center relative overflow-hidden`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      {/* Shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        animate={{
                          x: ['-100%', '100%'],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.4
                        }}
                      />
                      <span className="text-white font-bold text-xl relative z-10">{framework.letter}</span>
                    </motion.div>
                    
                    <motion.div
                      className={`w-12 h-12 bg-gradient-to-br ${framework.gradient} rounded-lg flex items-center justify-center opacity-30`}
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.5
                      }}
                    >
                      <framework.icon className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">{framework.title}</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {framework.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.4, 1],
            rotate: 360,
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: -360,
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-4xl lg:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Ready to Accelerate Your Banking Product Launch?
            </motion.h2>
            <motion.p 
              className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Join successful BFSI companies who've achieved 3x faster market entry and 90% higher success rates through our 
              proven design thinking methodology. Transform your banking concepts into market-winning products.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.button 
                onClick={handleStartJourney}
                className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl font-semibold group relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <span className="relative z-10">Accelerate Your Go-to-Market</span>
                <motion.span
                  className="inline-block ml-2 relative z-10"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  →
                </motion.span>
              </motion.button>
              
              <motion.button 
                onClick={handleViewPortfolio}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20 font-semibold relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">View Success Stories</span>
              </motion.button>
            </motion.div>

            {/* Enhanced feature highlights */}
            <motion.div 
              className="grid md:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {[
                { icon: Rocket, title: "3x Faster Launch", description: "Accelerated time-to-market" },
                { icon: Users, title: "90% Success Rate", description: "Proven market validation" },
                { icon: Target, title: "60% Cost Reduction", description: "Efficient development process" }
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-center group hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <motion.div
                    className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4"
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5
                    }}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h4 className="font-semibold text-white mb-2">{feature.title}</h4>
                  <p className="text-blue-100 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

// Add the missing AlertTriangle icon import at the top
const AlertTriangle = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.664-.833-2.464 0L5.732 19.5c-.77.833.192 2.5 1.732 2.5z" />
  </svg>
);