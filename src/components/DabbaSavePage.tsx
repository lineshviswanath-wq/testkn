import React, { useContext } from "react";
import { DepositCalculator } from "./DepositCalculator";
import { MicroDepositsSection } from "./MicroDepositsSection";
import { PartnerBanksCard } from "./PartnerBanksCard";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";
import { 
  Shield, 
  Globe, 
  ChartBar,
  ArrowRight,
  Star,
  Heart,
  Clock,
  Users,
  TrendingUp,
  Target,
  Building2,
  CheckCircle
} from "lucide-react";
import { NavigationContext } from "../App";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import traditionalWomanImage from 'figma:asset/decac79dca6d59d08036f68a49340c1f1266a194.png';
import modernWomanImage from 'figma:asset/281ffd1be72ff11b0062589b2520af17d0f3ff37.png';

export function DabbaSavePage() {
  const { setNavigation } = useContext(NavigationContext);

  const benefits = [
    {
      title: "Financial Inclusion for All",
      description: "Designed for urban, rural, and household needs across every segment of society",
      icon: Heart,
      stats: "Serving 1M+ families",
      gradient: "from-red-500 to-pink-500",
      bgGradient: "from-red-50 to-pink-50"
    },
    {
      title: "Traditional + Digital",
      description: "Combines the trust of traditional 'Dabba' savings with modern technology",
      icon: Globe,
      stats: "Best of both worlds",
      gradient: "from-blue-500 to-green-500",
      bgGradient: "from-blue-50 to-green-50"
    },
    {
      title: "Flexible & Convenient",
      description: "Daily, weekly, or monthly deposits with omnichannel access",
      icon: Clock,
      stats: "24/7 availability",
      gradient: "from-purple-500 to-blue-500",
      bgGradient: "from-purple-50 to-blue-50"
    },
    {
      title: "Community Impact",
      description: "Empowering individuals, families, and communities for long-term growth",
      icon: Users,
      stats: "Growing together",
      gradient: "from-green-500 to-teal-500",
      bgGradient: "from-green-50 to-teal-50"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Indore, Madhya Pradesh",
      role: "Teacher",
      text: "DABBA SAVE helped me save ₹25,000 in just 8 months with small daily deposits. Perfect for my salary schedule!",
      rating: 5,
      savings: "₹25,000",
      duration: "8 months"
    },
    {
      name: "Ravi Kumar",
      location: "Coimbatore, Tamil Nadu", 
      role: "Small Business Owner",
      text: "Starting with just ₹10 per day, I built an emergency fund that saved my business during tough times.",
      rating: 5,
      savings: "₹18,000",
      duration: "6 months"
    },
    {
      name: "Sunita Devi",
      location: "Patna, Bihar",
      role: "Homemaker",
      text: "The traditional Dabba concept with modern security gives me peace of mind. My family's future is secure!",
      rating: 5,
      savings: "₹32,000",
      duration: "12 months"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Enhanced with Beautiful Gradients */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 md:py-20">
        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-green-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 40, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Header Badge */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Badge className="bg-gradient-to-r from-green-600 via-green-500 to-emerald-500 text-white px-6 py-3 text-sm font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-0">
                <motion.span
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    background: 'linear-gradient(90deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0.3) 100%)',
                    backgroundSize: '200% 100%',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text'
                  }}
                >
                  ⭐ DABBA SAVE - Your Digital Saving Star ⭐
                </motion.span>
              </Badge>
            </motion.div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
            {/* Left Content */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Main Title */}
              <div>
                <motion.h1 
                  className="text-5xl lg:text-7xl font-bold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <motion.span
                    className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent"
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    style={{
                      backgroundSize: '200% 100%'
                    }}
                  >
                    DABBA SAVE
                  </motion.span>
                </motion.h1>
                
                <motion.h2 
                  className="text-2xl lg:text-4xl font-medium text-gray-800 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Where{" "}
                  <motion.span 
                    className="inline-block bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent font-bold"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 2, -2, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    ₹10
                  </motion.span>{" "}
                  Starts Your<br />
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Financial Future!
                  </span>
                </motion.h2>
              </div>

              {/* Description */}
              <div className="space-y-4">
                <p className="text-lg text-gray-600 leading-relaxed">
                  <span className="font-semibold text-gray-900">Traditional Dabba Savings meets Modern Technology →</span><br />
                  <span className="font-semibold text-gray-900">Your Secure Tomorrow!</span>
                </p>
                
                <p className="text-base text-gray-600 leading-relaxed">
                  Unlike traditional Recurring Deposits that are often designed for fixed monthly payments, <span className="font-semibold text-blue-600">DABBA SAVE introduces the first-of-its-kind daily micro-deposit plan</span>. You can start small, deposit flexibly every day, and steadily build your financial future without the burden of heavy commitments.
                </p>
                
                <p className="text-base text-gray-600 leading-relaxed">
                  From micro-deposits to comprehensive financial solutions, DABBA SAVE empowers every household to achieve smart financial security through inclusion and simple, worry-free investments. And with <span className="font-semibold text-green-600">all deposits secured in partnered banks</span>, your money is <span className="font-bold text-gray-900">100% safe—guaranteed</span>.
                </p>
                
                <p className="text-base text-gray-600 leading-relaxed font-medium">
                  Just like the traditional dabba in every household of olden days, where small coins turned into big savings, <span className="font-semibold text-orange-600">DABBA SAVE brings back that trusted habit—now transformed digitally for today's world</span>.
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block"
                >
                  <Button 
                    size="lg"
                    className="relative overflow-hidden bg-gradient-to-r from-green-600 via-green-500 to-emerald-500 hover:from-green-700 hover:via-green-600 hover:to-emerald-600 text-white px-10 py-6 text-lg font-medium rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 group border-0"
                    onClick={() => setNavigation({ showSignupModal: true })}
                  >
                    {/* Animated background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                      animate={{
                        x: ['-100%', '100%']
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                    <span className="relative z-10 flex items-center">
                      🚀 Start Your Micro Deposit
                      <motion.div
                        animate={{
                          x: [0, 5, 0]
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <ArrowRight className="w-5 h-5 ml-3 group-hover:ml-4 transition-all duration-300" />
                      </motion.div>
                    </span>
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Images - Single Frame with Left-Right Layout */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                {/* Enhanced Background with Multiple Gradients */}
                <motion.div
                  className="absolute -inset-8 bg-gradient-to-br from-orange-100 via-blue-100 to-green-100 rounded-3xl"
                  animate={{
                    scale: [1, 1.03, 1],
                    rotate: [0, 1, -1, 0]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Glowing border effect */}
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-orange-400 via-blue-400 to-green-400 rounded-3xl blur-sm opacity-30"
                  animate={{
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Enhanced Frame Container */}
                <motion.div
                  className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20"
                  whileHover={{ 
                    scale: 1.02,
                    y: -5,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  {/* Horizontal Image Layout */}
                  <div className="grid grid-cols-2 gap-6 items-center">
                    {/* Traditional Woman - Left Side */}
                    <motion.div
                      className="relative"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    >
                      <div className="relative">
                        <ImageWithFallback 
                          src={traditionalWomanImage}
                          alt="Traditional Indian woman in beautiful saree saving money in clay pot - representing traditional Dabba savings wisdom and cultural heritage"
                          className="w-full h-auto object-cover rounded-2xl"
                        />
                        
                        {/* Traditional Badge */}
                        <motion.div 
                          className="absolute -top-3 -left-3 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full shadow-lg z-10"
                          animate={{
                            y: [0, -3, 0]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <span className="text-xs font-medium">Traditional</span>
                        </motion.div>

                        {/* Floating Pot Icon */}
                        <motion.div
                          className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-lg z-10"
                          animate={{
                            rotate: [0, 10, -10, 0],
                            scale: [1, 1.1, 1]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <span className="text-white text-sm">🏺</span>
                        </motion.div>
                      </div>
                    </motion.div>

                    {/* Modern Woman - Right Side */}
                    <motion.div
                      className="relative"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      <div className="relative">
                        <ImageWithFallback 
                          src={modernWomanImage}
                          alt="Modern young woman with glasses using smartphone for digital banking - representing the future of secure, convenient financial services"
                          className="w-full h-auto object-cover rounded-2xl"
                        />
                        
                        {/* Modern Badge */}
                        <motion.div 
                          className="absolute -top-3 -right-3 bg-gradient-to-r from-blue-500 to-green-500 text-white px-3 py-1 rounded-full shadow-lg z-10"
                          animate={{
                            y: [0, -3, 0]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                          }}
                        >
                          <span className="text-xs font-medium">Digital</span>
                        </motion.div>
                        
                        {/* Phone Notification Animation */}
                        <motion.div 
                          className="absolute top-4 right-4 w-3 h-3 bg-green-500 rounded-full shadow-lg z-10"
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [1, 0.7, 1]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />

                        {/* Floating Phone Icon */}
                        <motion.div
                          className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-br from-blue-400 to-green-500 rounded-full flex items-center justify-center shadow-lg z-10"
                          animate={{
                            rotate: [0, -10, 10, 0],
                            scale: [1, 1.1, 1]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1.5
                          }}
                        >
                          <span className="text-white text-sm">📱</span>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Central Connection Arrow */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-orange-500 via-green-500 to-blue-500 p-3 rounded-full shadow-xl z-20"
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      rotate: {
                        duration: 8,
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
                      className="bg-white rounded-full p-2"
                      animate={{
                        rotate: [0, -360]
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      <ArrowRight className="w-4 h-4 text-green-600" />
                    </motion.div>
                  </motion.div>


                </motion.div>

                {/* Floating Decorative Elements Outside Frame */}
                <motion.div
                  className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white shadow-lg"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <span className="text-lg">₹</span>
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -right-4 w-10 h-10 bg-gradient-to-br from-blue-400 to-green-500 rounded-full flex items-center justify-center text-white shadow-lg"
                  animate={{
                    y: [0, 10, 0],
                    rotate: [0, -180, -360]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                >
                  <span className="text-lg">💰</span>
                </motion.div>

                <motion.div
                  className="absolute top-1/4 -right-6 w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white shadow-lg"
                  animate={{
                    x: [0, 10, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  <span className="text-sm">🚀</span>
                </motion.div>

                <motion.div
                  className="absolute bottom-1/4 -left-6 w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white shadow-lg"
                  animate={{
                    x: [0, -10, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                >
                  <span className="text-sm">✨</span>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Section - Features and Apps */}
          <motion.div 
            className="mt-12 space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Enhanced Trust Section */}
            <div className="text-center mb-12">
              <motion.h3 
                className="text-2xl lg:text-3xl font-bold mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  Your Trust, Our Responsibility
                </span>
              </motion.h3>
              
              {/* Enhanced Three Feature Cards */}
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {/* Bank-Level Security */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -10,
                    scale: 1.03,
                  }}
                >
                  <Card className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10"
                      animate={{
                        opacity: [0, 0.3, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-4">
                        <motion.div 
                          className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg"
                          whileHover={{ rotate: 10, scale: 1.1 }}
                        >
                          <Shield className="w-7 h-7 text-white" />
                        </motion.div>
                        <h4 className="font-bold text-gray-900 text-lg">Bank-Level Security</h4>
                      </div>
                      <p className="text-gray-700 font-medium">🏛️ 100% Bank Guarantee</p>
                    </div>
                  </Card>
                </motion.div>

                {/* Omni-channel */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -10,
                    scale: 1.03,
                  }}
                >
                  <Card className="p-8 bg-gradient-to-br from-orange-50 to-red-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10"
                      animate={{
                        opacity: [0, 0.3, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                      }}
                    />
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-4">
                        <motion.div 
                          className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg"
                          whileHover={{ rotate: -10, scale: 1.1 }}
                        >
                          <Globe className="w-7 h-7 text-white" />
                        </motion.div>
                        <h4 className="font-bold text-gray-900 text-lg">Omni-channel</h4>
                      </div>
                      <p className="text-gray-700 font-medium">⏰ Anytime Financial Services</p>
                    </div>
                  </Card>
                </motion.div>

                {/* Overview Service */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -10,
                    scale: 1.03,
                  }}
                >
                  <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"
                      animate={{
                        opacity: [0, 0.3, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                      }}
                    />
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-4">
                        <motion.div 
                          className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg"
                          whileHover={{ rotate: 10, scale: 1.1 }}
                        >
                          <ChartBar className="w-7 h-7 text-white" />
                        </motion.div>
                        <h4 className="font-bold text-gray-900 text-lg">Overview Service</h4>
                      </div>
                      <p className="text-gray-700 font-medium">📊 Summary of Your Services</p>
                    </div>
                  </Card>
                </motion.div>
              </div>
            </div>

            {/* Enhanced Download Apps */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline" 
                  className="bg-gradient-to-r from-gray-800 to-gray-900 text-white border-0 hover:from-gray-700 hover:to-gray-800 px-8 py-4 h-auto shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl"
                >
                  <div className="flex items-center gap-4">
                    <motion.div 
                      className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg"
                      whileHover={{ rotate: 10 }}
                    >
                      <span className="text-gray-900 font-bold text-lg">🍎</span>
                    </motion.div>
                    <div className="text-left">
                      <div className="text-xs text-gray-300">Download on the</div>
                      <div className="font-semibold text-lg">App Store</div>
                    </div>
                  </div>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline" 
                  className="bg-gradient-to-r from-green-600 to-emerald-600 text-white border-0 hover:from-green-500 hover:to-emerald-500 px-8 py-4 h-auto shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl"
                >
                  <div className="flex items-center gap-4">
                    <motion.div 
                      className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg"
                      whileHover={{ rotate: -10 }}
                    >
                      <span className="text-green-600 font-bold text-lg">▶</span>
                    </motion.div>
                    <div className="text-left">
                      <div className="text-xs text-green-100">GET IT ON</div>
                      <div className="font-semibold text-lg">Google Play</div>
                    </div>
                  </div>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Calculator Section */}
      <DepositCalculator />

      {/* Micro Deposits Section */}
      <MicroDepositsSection />

      {/* Enhanced Benefits Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
          <motion.div
            className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-green-400/20 rounded-full blur-3xl"
            animate={{
              x: [0, 200, 0],
              y: [0, -100, 0]
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-br from-green-400/20 to-purple-400/20 rounded-full blur-3xl"
            animate={{
              x: [0, -150, 0],
              y: [0, 80, 0]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 10
            }}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl lg:text-6xl font-bold mb-6"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                background: 'linear-gradient(90deg, #1E4A72, #22C55E, #8B5CF6, #1E4A72)',
                backgroundSize: '300% 100%',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}
            >
              Impact & Benefits
            </motion.h2>
            <motion.p 
              className="text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              More than just savings - we're building a{" "}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent font-bold">
                financially inclusive India
              </span>
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.03,
                  y: -10,
                  rotateY: 5
                }}
                className="group"
              >
                <Card className={`p-10 h-full border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-gradient-to-br ${benefit.bgGradient} relative overflow-hidden`}>
                  {/* Animated background overlay */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />
                  
                  {/* Floating particles */}
                  <motion.div
                    className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full opacity-50"
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5
                    }}
                  />
                  
                  <div className="flex items-start gap-8 relative z-10">
                    <motion.div
                      className={`w-20 h-20 bg-gradient-to-br ${benefit.gradient} rounded-3xl flex items-center justify-center flex-shrink-0 shadow-xl`}
                      whileHover={{ 
                        rotate: 15, 
                        scale: 1.15,
                        boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.3)"
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <benefit.icon className="w-10 h-10 text-white" />
                    </motion.div>
                    
                    <div className="flex-1">
                      <motion.h3 
                        className="text-2xl font-bold text-gray-900 mb-4"
                        whileHover={{ scale: 1.05 }}
                      >
                        {benefit.title}
                      </motion.h3>
                      <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                        {benefit.description}
                      </p>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge className={`bg-gradient-to-r ${benefit.gradient} text-white px-4 py-2 text-sm font-medium shadow-lg`}>
                          ✨ {benefit.stats}
                        </Badge>
                      </motion.div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Success Stories Section */}
      <section className="relative py-20 bg-gradient-to-br from-white via-blue-50/30 to-green-50/30 overflow-hidden">
        {/* Floating background elements */}
        <motion.div
          className="absolute top-1/3 right-0 w-64 h-64 bg-gradient-to-br from-green-400/10 to-blue-400/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl lg:text-6xl font-bold mb-6"
              style={{
                background: 'linear-gradient(90deg, #22C55E, #1E4A72, #8B5CF6, #22C55E)',
                backgroundSize: '300% 100%',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              🌟 Success Stories 🌟
            </motion.h2>
            <motion.p 
              className="text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Real people, real savings, real impact across{" "}
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent font-bold">
                India 🇮🇳
              </span>
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -15,
                  rotateY: 5,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                className="group cursor-pointer"
              >
                <Card className="p-10 h-full border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-gradient-to-br from-white via-blue-50/50 to-green-50/50 relative overflow-hidden">
                  {/* Animated background gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  
                  {/* Floating sparkle effect */}
                  <motion.div
                    className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                      rotate: [0, 180, 360]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5
                    }}
                  />
                  
                  <div className="relative z-10">
                    <motion.div 
                      className="flex gap-1 mb-6"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0, rotate: -180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          transition={{ duration: 0.5, delay: (index * 0.1) + (i * 0.1) }}
                        >
                          <Star className="w-6 h-6 fill-yellow-400 text-yellow-400 drop-shadow-sm" />
                        </motion.div>
                      ))}
                    </motion.div>
                    
                    <blockquote className="text-gray-700 text-lg leading-relaxed mb-8 font-medium">
                      <span className="text-2xl text-green-500">"</span>
                      {testimonial.text}
                      <span className="text-2xl text-green-500">"</span>
                    </blockquote>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <motion.div 
                          className="font-bold text-gray-900 text-lg"
                          whileHover={{ scale: 1.05 }}
                        >
                          {testimonial.name}
                        </motion.div>
                        <div className="text-sm text-gray-600 font-medium">{testimonial.role}</div>
                        <div className="text-sm text-gray-500">{testimonial.location}</div>
                      </div>
                      <motion.div 
                        className="text-right"
                        whileHover={{ scale: 1.1 }}
                      >
                        <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                          {testimonial.savings}
                        </div>
                        <div className="text-xs text-gray-500 font-medium">in {testimonial.duration}</div>
                      </motion.div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Banks Section */}
      <PartnerBanksCard />
    </div>
  );
}