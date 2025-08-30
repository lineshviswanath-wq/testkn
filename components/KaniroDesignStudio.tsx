import React, { useContext } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ArrowRight, Target, Palette, Layers, Users, Zap, Eye, Lightbulb, Play, Sparkles, Cpu, Globe, Rocket, Award, CheckCircle, Star, AlertTriangle, Heart, Trophy, Briefcase, Code, Monitor, Database, Shield, Smartphone, Settings, TrendingUp, Clock, DollarSign, BarChart3, PieChart, LineChart, Calendar, FileText, Search, MessageSquare, Mail, Phone, MapPin, UserCheck, Building2, Banknote, CreditCard, Wallet, PiggyBank } from "lucide-react";
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
                    FINTX STUDIO
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
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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
                          <Rocket className="w-6 h-6 text-white" />
                        </motion.div>
                      </motion.div>
                      <h3 className="text-2xl font-bold text-gray-900">Accelerated Launch</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Our proven design thinking methodology reduces time-to-market by validating concepts early, 
                      ensuring product-market fit, and creating a structured pathway from ideation to successful 
                      market entry with measurable success metrics.
                    </p>
                  </div>
                </motion.div>
              </div>

              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBsYW5uaW5nJTIwc3RyYXRlZ3l8ZW58MXx8fHwxNzU1NTg4MTkxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Business Strategy Planning"
                    className="rounded-2xl shadow-2xl w-full"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Showcase Section */}
      <section id="services-showcase" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <motion.h2 
                className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Our Design Services Portfolio
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                From concept to market success - comprehensive design solutions for the banking industry
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* UX/UI Design */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group relative overflow-hidden"
              >
                <motion.div
                  className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full"
                  animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="relative z-10">
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300"
                    whileHover={{ rotate: 15 }}
                  >
                    <Monitor className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">UX/UI Design</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    User-centered design solutions that transform complex banking processes into intuitive digital experiences. 
                    From mobile apps to web platforms, we craft interfaces that users love.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Mobile Banking</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Web Platforms</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Dashboards</span>
                  </div>
                </div>
              </motion.div>

              {/* Product Strategy */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group relative overflow-hidden"
              >
                <motion.div
                  className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full"
                  animate={{ rotate: -360, scale: [1, 1.1, 1] }}
                  transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="relative z-10">
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300"
                    whileHover={{ rotate: 15 }}
                  >
                    <Target className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Product Strategy</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Strategic product planning that aligns business goals with market needs. We help define product roadmaps, 
                    competitive positioning, and go-to-market strategies.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Market Research</span>
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">Roadmapping</span>
                    <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm">Launch Strategy</span>
                  </div>
                </div>
              </motion.div>

              {/* User Research */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group relative overflow-hidden"
              >
                <motion.div
                  className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full"
                  animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="relative z-10">
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300"
                    whileHover={{ rotate: 15 }}
                  >
                    <Users className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">User Research</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Deep customer insights through comprehensive research methodologies. We uncover user needs, 
                    behaviors, and pain points to inform design decisions.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">Interviews</span>
                    <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">Surveys</span>
                    <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">Analytics</span>
                  </div>
                </div>
              </motion.div>

              {/* Digital Transformation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group relative overflow-hidden"
              >
                <motion.div
                  className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full"
                  animate={{ rotate: -360, scale: [1, 1.1, 1] }}
                  transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="relative z-10">
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300"
                    whileHover={{ rotate: 15 }}
                  >
                    <Zap className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Digital Transformation</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    End-to-end digital transformation services that modernize traditional banking operations. 
                    We bridge the gap between legacy systems and cutting-edge digital experiences.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">Legacy Modernization</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">API Integration</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Cloud Migration</span>
                  </div>
                </div>
              </motion.div>

              {/* Compliance & Security */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group relative overflow-hidden"
              >
                <motion.div
                  className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full"
                  animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                  transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="relative z-10">
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300"
                    whileHover={{ rotate: 15 }}
                  >
                    <Shield className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Compliance & Security</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Design solutions that meet regulatory requirements and security standards. 
                    We ensure your products comply with banking regulations while maintaining excellent user experience.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm">KYC/AML</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Data Privacy</span>
                    <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm">Security UX</span>
                  </div>
                </div>
              </motion.div>

              {/* Training & Workshop */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group relative overflow-hidden"
              >
                <motion.div
                  className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full"
                  animate={{ rotate: -360, scale: [1, 1.1, 1] }}
                  transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="relative z-10">
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300"
                    whileHover={{ rotate: 15 }}
                  >
                    <Lightbulb className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Training & Workshops</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Empower your teams with design thinking methodologies and best practices. 
                    We conduct workshops and training programs to build internal design capabilities.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">Design Thinking</span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">UX Workshops</span>
                    <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">Team Training</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process Section */}
      <section id="design-process" className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <motion.h2 
                className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Our Proven Design Process
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                A systematic approach that transforms ideas into market-ready banking products
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Discover */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center relative group"
              >
                <motion.div 
                  className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-2xl transition-all duration-500"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <Search className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">1. Discover</h3>
                <p className="text-gray-600 leading-relaxed">
                  Deep market research and user interviews to understand customer needs, 
                  pain points, and market opportunities in the banking sector.
                </p>
                <motion.div
                  className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full opacity-20"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.6, 0.2] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>

              {/* Define */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center relative group"
              >
                <motion.div 
                  className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-2xl transition-all duration-500"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <Target className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">2. Define</h3>
                <p className="text-gray-600 leading-relaxed">
                  Synthesize research insights to define clear problem statements, 
                  user personas, and success metrics for the banking product.
                </p>
                <motion.div
                  className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full opacity-20"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.6, 0.2] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                />
              </motion.div>

              {/* Design */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center relative group"
              >
                <motion.div 
                  className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-2xl transition-all duration-500"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <Palette className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">3. Design</h3>
                <p className="text-gray-600 leading-relaxed">
                  Create innovative solutions through iterative design sprints, 
                  prototyping, and user testing to refine the banking experience.
                </p>
                <motion.div
                  className="absolute -top-2 -right-2 w-6 h-6 bg-purple-500 rounded-full opacity-20"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.6, 0.2] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
              </motion.div>

              {/* Deliver */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center relative group"
              >
                <motion.div 
                  className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-2xl transition-all duration-500"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <Rocket className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">4. Deliver</h3>
                <p className="text-gray-600 leading-relaxed">
                  Launch market-ready products with comprehensive go-to-market strategies, 
                  user onboarding, and continuous optimization based on user feedback.
                </p>
                <motion.div
                  className="absolute -top-2 -right-2 w-6 h-6 bg-orange-500 rounded-full opacity-20"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.6, 0.2] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                />
              </motion.div>
            </div>

            {/* Process Flow Visualization */}
            <motion.div 
              className="mt-16 relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center items-center">
                <motion.div
                  className="h-1 bg-gradient-to-r from-blue-500 via-green-500 via-purple-500 to-orange-500 rounded-full"
                  style={{ width: "80%" }}
                  initial={{ width: 0 }}
                  whileInView={{ width: "80%" }}
                  transition={{ duration: 2, delay: 1 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Design Thinking Framework Section */}
      <section id="design-thinking-framework" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <motion.h2 
                className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Design Thinking Framework
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Human-centered innovation methodology specifically adapted for the banking and financial services industry
              </motion.p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="p-6 bg-white rounded-2xl shadow-lg border border-purple-100"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div 
                      className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center"
                      whileHover={{ rotate: 15, scale: 1.1 }}
                    >
                      <Heart className="w-6 h-6 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900">Empathy</h3>
                  </div>
                  <p className="text-gray-600">
                    Understanding customer emotions, motivations, and financial behaviors through deep research and observation.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-white rounded-2xl shadow-lg border border-blue-100"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div 
                      className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center"
                      whileHover={{ rotate: 15, scale: 1.1 }}
                    >
                      <Target className="w-6 h-6 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900">Problem Definition</h3>
                  </div>
                  <p className="text-gray-600">
                    Synthesizing insights to define clear, actionable problem statements that address real customer needs.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="p-6 bg-white rounded-2xl shadow-lg border border-green-100"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div 
                      className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center"
                      whileHover={{ rotate: 15, scale: 1.1 }}
                    >
                      <Lightbulb className="w-6 h-6 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900">Ideation</h3>
                  </div>
                  <p className="text-gray-600">
                    Generating creative solutions through collaborative brainstorming and innovative thinking sessions.
                  </p>
                </motion.div>
              </div>

              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG1lZXRpbmd8ZW58MXx8fHwxNzU1NTg4MTkxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Team Collaboration Meeting"
                    className="rounded-2xl shadow-2xl w-full"
                  />
                </motion.div>
                
                {/* Floating framework cards */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-lg border"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-sm font-semibold">Design Thinking</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-lg border"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-semibold">Innovation</span>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Framework Benefits */}
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <TrendingUp className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Faster Innovation</h3>
                <p className="text-gray-600">
                  Accelerate product development cycles by 3x through structured innovation processes.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <UserCheck className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Customer Validation</h3>
                <p className="text-gray-600">
                  Ensure product-market fit through continuous customer feedback and validation loops.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <DollarSign className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Cost Efficiency</h3>
                <p className="text-gray-600">
                  Reduce development costs by up to 60% through early problem identification and solution validation.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <motion.h2 
                className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Success Stories
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Real results from our design thinking approach in the banking industry
              </motion.p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Case Study 1 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 hover:shadow-xl transition-all duration-500"
              >
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center"
                    whileHover={{ rotate: 15, scale: 1.1 }}
                  >
                    <Smartphone className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Digital Banking App</h3>
                    <p className="text-gray-600">Leading Private Bank</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Redesigned mobile banking experience for Tier 2/3 cities, resulting in 300% increase in user adoption 
                  and 85% reduction in support calls through intuitive design and local language support.
                </p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <motion.div 
                      className="text-2xl font-bold text-blue-600 mb-1"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      300%
                    </motion.div>
                    <div className="text-sm text-gray-600">User Growth</div>
                  </div>
                  <div className="text-center">
                    <motion.div 
                      className="text-2xl font-bold text-green-600 mb-1"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    >
                      85%
                    </motion.div>
                    <div className="text-sm text-gray-600">Less Support</div>
                  </div>
                  <div className="text-center">
                    <motion.div 
                      className="text-2xl font-bold text-purple-600 mb-1"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    >
                      6M
                    </motion.div>
                    <div className="text-sm text-gray-600">Launch Time</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Mobile First</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">Local Language</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">UX Research</span>
                </div>
              </motion.div>

              {/* Case Study 2 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100 hover:shadow-xl transition-all duration-500"
              >
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center"
                    whileHover={{ rotate: 15, scale: 1.1 }}
                  >
                    <PiggyBank className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Micro-Investment Platform</h3>
                    <p className="text-gray-600">FinTech Startup</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Created a gamified micro-investment platform that made investing accessible to first-time users, 
                  achieving 250% higher engagement and successful Series A funding within 8 months of launch.
                </p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <motion.div 
                      className="text-2xl font-bold text-green-600 mb-1"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      250%
                    </motion.div>
                    <div className="text-sm text-gray-600">Engagement</div>
                  </div>
                  <div className="text-center">
                    <motion.div 
                      className="text-2xl font-bold text-emerald-600 mb-1"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    >
                      $2M
                    </motion.div>
                    <div className="text-sm text-gray-600">Funding</div>
                  </div>
                  <div className="text-center">
                    <motion.div 
                      className="text-2xl font-bold text-teal-600 mb-1"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    >
                      8M
                    </motion.div>
                    <div className="text-sm text-gray-600">to Funding</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Gamification</span>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">Micro-Investment</span>
                  <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm">User Onboarding</span>
                </div>
              </motion.div>
            </div>

            {/* Success Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-16 grid md:grid-cols-4 gap-8 text-center"
            >
              <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
                <motion.div
                  className="text-3xl font-bold text-blue-600 mb-2"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  50+
                </motion.div>
                <div className="text-gray-600">Projects Delivered</div>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-100">
                <motion.div
                  className="text-3xl font-bold text-green-600 mb-2"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                >
                  95%
                </motion.div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
                <motion.div
                  className="text-3xl font-bold text-purple-600 mb-2"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                >
                  200%
                </motion.div>
                <div className="text-gray-600">Average ROI</div>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border border-orange-100">
                <motion.div
                  className="text-3xl font-bold text-orange-600 mb-2"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
                >
                  25+
                </motion.div>
                <div className="text-gray-600">Banking Partners</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <motion.h2 
                className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Meet Our Design Experts
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                A diverse team of designers, researchers, and strategists with deep BFSI industry experience
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 text-center group border border-gray-100"
              >
                <motion.div
                  className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white text-2xl font-bold"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  RS
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Rajesh Sharma</h3>
                <p className="text-purple-600 font-semibold mb-4">Lead UX Designer</p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  15+ years in banking UX with expertise in digital transformation and customer journey mapping.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">UX Strategy</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">Banking</span>
                </div>
              </motion.div>

              {/* Team Member 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 text-center group border border-gray-100"
              >
                <motion.div
                  className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white text-2xl font-bold"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  PK
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Priya Khatri</h3>
                <p className="text-green-600 font-semibold mb-4">Design Researcher</p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Specialist in behavioral economics and user research methodologies for financial products.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">User Research</span>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">Behavioral</span>
                </div>
              </motion.div>

              {/* Team Member 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 text-center group border border-gray-100"
              >
                <motion.div
                  className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl font-bold"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  AM
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Arjun Mehta</h3>
                <p className="text-purple-600 font-semibold mb-4">Product Strategist</p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Go-to-market strategy expert with successful FinTech product launches and growth hacking experience.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Strategy</span>
                  <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">Growth</span>
                </div>
              </motion.div>
            </div>

            {/* Team Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-16 grid md:grid-cols-4 gap-8 text-center"
            >
              <div>
                <motion.div
                  className="text-3xl font-bold text-blue-600 mb-2"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  12+
                </motion.div>
                <div className="text-gray-600">Design Experts</div>
              </div>
              
              <div>
                <motion.div
                  className="text-3xl font-bold text-green-600 mb-2"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                >
                  8+
                </motion.div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              
              <div>
                <motion.div
                  className="text-3xl font-bold text-purple-600 mb-2"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                >
                  100+
                </motion.div>
                <div className="text-gray-600">Certifications</div>
              </div>
              
              <div>
                <motion.div
                  className="text-3xl font-bold text-orange-600 mb-2"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
                >
                  15+
                </motion.div>
                <div className="text-gray-600">Awards Won</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-blue-600 to-green-600 relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: 360,
            x: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: -360,
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
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
              Ready to Transform Your Banking Product?
            </motion.h2>
            <motion.p 
              className="text-xl text-white/90 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let's discuss how our design thinking methodology can accelerate your go-to-market success. 
              Book a free consultation to explore possibilities for your banking innovation.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg"
                  className="bg-white text-purple-600 hover:bg-gray-50 px-8 py-4 group shadow-xl hover:shadow-2xl"
                  onClick={handleStartJourney}
                >
                  Start Your Design Journey
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight className="size-5 ml-2" />
                  </motion.div>
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 group"
                  onClick={handleWatchDemo}
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Play className="size-5 mr-2" />
                  </motion.div>
                  Watch Demo
                </Button>
              </motion.div>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              className="mt-12 flex flex-col sm:flex-row gap-8 justify-center items-center text-white/80"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2">
                <Mail className="size-5" />
                <span>design@kaniro.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="size-5" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="size-5" />
                <span>Free Consultation Available</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}