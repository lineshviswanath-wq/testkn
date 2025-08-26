import React, { useContext } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ArrowRight, Target, Palette, Layers, Users, Zap, Eye, Lightbulb, Play } from "lucide-react";
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
                  <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 bg-clip-text text-transparent">
                    Kaniro Design Studio
                  </span>
                  <br />
                  <span className="text-2xl md:text-3xl font-medium text-gray-700">Where Banking Meets Beautiful Design</span>
                </motion.h1>
                
                <motion.p 
                  className="text-lg text-gray-600 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Transforming digital banking through design-first methodology. We bridge the critical gap between 
                  banking product delivery and real customer financial needs, creating experiences that truly serve 
                  underserved communities across India.
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
                    <h4 className="font-semibold text-gray-900">Banking UX Design</h4>
                    <p className="text-sm text-gray-600">Customer-centered banking experiences</p>
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
                    50+
                  </motion.div>
                  <div className="text-sm text-gray-600">Banking Projects</div>
                </div>
                <div className="text-center">
                  <motion.div 
                    className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  >
                    15+
                  </motion.div>
                  <div className="text-sm text-gray-600">BFSI Clients</div>
                </div>
                <div className="text-center">
                  <motion.div 
                    className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  >
                    95%
                  </motion.div>
                  <div className="text-sm text-gray-600">User Satisfaction</div>
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
                      <div className="text-xs font-semibold text-gray-900 truncate">Design in Progress</div>
                      <div className="text-xs text-gray-600">Banking UX Research</div>
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
                      <div className="text-xs font-semibold text-gray-900 truncate">Project Complete</div>
                      <div className="text-xs text-gray-600">Mobile Banking App</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-20 bg-white">
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
                The Banking Design Challenge
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Most banking products fail because of fundamental gaps in understanding 
                between what gets delivered and what customers actually need.
              </motion.p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <motion.div 
                  className="p-8 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl border-l-4 border-red-500 relative overflow-hidden"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">The Problem</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Traditional banking interfaces fail to address real user needs and behaviors, 
                    especially in Tier 2/3 India where customers have unique financial patterns, 
                    anxieties, and requirements that conventional design approaches completely miss.
                  </p>
                </motion.div>

                <motion.div 
                  className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border-l-4 border-green-500 relative overflow-hidden"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="absolute top-4 right-4 w-12 h-12 bg-green-200/50 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: -360,
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Solution</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Through banking-focused design thinking, we ensure deep understanding of customer 
                    financial behaviors and build digital banking products with a design-first methodology 
                    that delivers measurable value to underserved communities.
                  </p>
                  <button 
                    onClick={handleLearnFramework}
                    className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl group"
                  >
                    Learn Our Framework
                    <motion.span
                      className="inline-block ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      →
                    </motion.span>
                  </button>
                </motion.div>
              </div>

              <motion.div 
                className="relative"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1544560212-77289e5ea6cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMHNrZXRjaGluZyUyMGNyZWF0aXZlJTIwcHJvY2Vzc3xlbnwxfHx8fDE3NTU2MDc4NDR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Designer Creative Process"
                  className="w-full rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                
                {/* Floating design elements */}
                <motion.div 
                  className="absolute top-6 right-6 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div 
                  className="absolute bottom-6 left-6 w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl blur-sm"
                  animate={{
                    scale: [1, 1.3, 1],
                    rotate: 360,
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process Section */}
      <section id="design-process" className="py-20 bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50">
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
                Our Design-First Process
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                A proven methodology that transforms banking experiences through systematic design thinking
              </motion.p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  number: "1",
                  title: "DESIGN",
                  description: "Banking customer research, financial behavior analysis, and solution ideation for digital banking experiences that truly resonate with users.",
                  gradient: "from-blue-500 to-blue-600",
                  bgGradient: "from-blue-400/20 to-purple-400/20",
                  delay: 0
                },
                {
                  number: "2", 
                  title: "TEST",
                  description: "Banking prototype validation, customer journey testing, and iterative refinement based on real banking user feedback and behavioral insights.",
                  gradient: "from-green-500 to-green-600",
                  bgGradient: "from-green-400/20 to-blue-400/20",
                  delay: 0.2
                },
                {
                  number: "3",
                  title: "BUILD", 
                  description: "Development and deployment of validated banking solutions that truly meet customer financial needs and drive measurable business outcomes.",
                  gradient: "from-purple-500 to-purple-600",
                  bgGradient: "from-purple-400/20 to-red-400/20",
                  delay: 0.4
                }
              ].map((step, index) => (
                <motion.div 
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: step.delay }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 relative overflow-hidden">
                    <motion.div 
                      className={`w-20 h-20 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className="text-white font-bold text-2xl">{step.number}</span>
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  <motion.div 
                    className={`absolute top-4 right-4 w-16 h-16 bg-gradient-to-br ${step.bgGradient} rounded-full blur-xl group-hover:blur-2xl transition-all duration-300`}
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

      {/* Services Showcase */}
      <section id="services-showcase" className="py-20 bg-white">
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
                Digital Banking Design Services
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Comprehensive design solutions tailored for the unique challenges of digital banking
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Users,
                  title: "Banking Customer Research",
                  description: "Deep analysis of banking behaviors, financial needs, and pain points specific to Indian Tier 2/3 customers, uncovering insights that drive design decisions.",
                  gradient: "from-blue-50 to-indigo-50",
                  iconGradient: "from-blue-500 to-indigo-600",
                  textColor: "text-blue-600",
                  hoverColor: "hover:text-blue-700"
                },
                {
                  icon: Zap,
                  title: "Digital Banking UX Strategy", 
                  description: "Design-thinking driven banking strategies that align digital features with real financial market demands and customer behavioral patterns.",
                  gradient: "from-green-50 to-emerald-50",
                  iconGradient: "from-green-500 to-emerald-600", 
                  textColor: "text-green-600",
                  hoverColor: "hover:text-green-700"
                },
                {
                  icon: Layers,
                  title: "Banking Interface Design",
                  description: "End-to-end banking product design from concept to interactive prototypes with comprehensive customer validation loops and usability testing.",
                  gradient: "from-purple-50 to-violet-50",
                  iconGradient: "from-purple-500 to-violet-600",
                  textColor: "text-purple-600", 
                  hoverColor: "hover:text-purple-700"
                },
                {
                  icon: Eye,
                  title: "Banking Design Systems",
                  description: "Scalable banking design systems ensuring consistency across mobile, web, and omni-channel banking touchpoints with comprehensive component libraries.",
                  gradient: "from-orange-50 to-red-50",
                  iconGradient: "from-orange-500 to-red-600",
                  textColor: "text-orange-600",
                  hoverColor: "hover:text-orange-700"
                }
              ].map((service, index) => (
                <motion.div 
                  key={index}
                  className={`group p-8 bg-gradient-to-br ${service.gradient} rounded-2xl hover:shadow-xl transition-all duration-300 cursor-pointer relative overflow-hidden`}
                  onClick={handleStartJourney}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-br ${service.iconGradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <p className={`${service.textColor} font-semibold ${service.hoverColor} transition-colors`}>Learn More →</p>
                  
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
          </div>
        </div>
      </section>

      {/* Design Thinking Framework */}
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
                Our systematic approach to understanding and solving complex banking experience challenges
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { letter: "E", title: "Empathize", description: "Understanding financial behaviors, banking anxieties, and money management patterns of underserved communities through immersive research.", gradient: "from-blue-400 to-blue-600" },
                { letter: "D", title: "Define", description: "Clearly articulating financial challenges and banking accessibility issues specific to target customer segments with precision and clarity.", gradient: "from-green-400 to-green-600" },
                { letter: "I", title: "Ideate", description: "Generating innovative digital banking solutions that work within Indian financial ecosystem constraints and regulatory requirements.", gradient: "from-purple-400 to-purple-600" },
                { letter: "P", title: "Prototype", description: "Building testable banking interfaces and customer journey prototypes with comprehensive regulatory compliance considerations.", gradient: "from-orange-400 to-orange-600" },
                { letter: "T", title: "Test", description: "Validating banking solutions with actual customers in real financial scenarios and iterating based on behavioral usage patterns.", gradient: "from-red-400 to-red-600" },
                { letter: "S", title: "Scale", description: "Implementing validated solutions across multiple touchpoints and customer segments while maintaining design consistency and user experience quality.", gradient: "from-indigo-400 to-indigo-600" }
              ].map((framework, index) => (
                <motion.div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 relative overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-br ${framework.gradient} rounded-2xl flex items-center justify-center mb-6`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-white font-bold text-xl">{framework.letter}</span>
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-4">{framework.title}</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {framework.description}
                  </p>
                  
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
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-4xl lg:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Ready to Transform Banking Experiences?
            </motion.h2>
            <motion.p 
              className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let's collaborate to bridge the gap between traditional banking and customer needs through our proven 
              banking design-first methodology. Transform your banking products into customer-centered financial 
              solutions that truly serve underserved communities.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.button 
                onClick={handleStartJourney}
                className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl font-semibold group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Banking Design Journey
                <motion.span
                  className="inline-block ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  →
                </motion.span>
              </motion.button>
              <motion.button 
                onClick={handleViewPortfolio}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20 font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Our Services
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}