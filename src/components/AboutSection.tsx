import React, { useContext, useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { motion, useScroll, useTransform } from "motion/react";
import { 
  TrendingUp, 
  CreditCard, 
  Palette,
  ArrowRight,
  Sparkles,
  Globe,
  Heart,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Star,
  Smartphone,
  Target
} from "lucide-react";
import { NavigationContext } from "../App";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import exampleImage from 'figma:asset/9489f96b15b87cee30f1a666b4bc7d85674f2dbf.png';

export function AboutSection() {
  const { setNavigation } = useContext(NavigationContext);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, 50]);

  const handleProductClick = (product: 'dabbasave' | 'dabbapay' | 'dabbasavepay' | 'fintx-studio') => {
    setNavigation({ currentView: product });
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const products = [
    {
      id: 'dabbasave',
      name: 'DABBA SAVE',
      subtitle: 'Micro Deposit',
      description: 'A comprehensive marketplace for small-ticket savings across multiple partner banks, enabling financial inclusion starting from just ₹10/day.',
      icon: TrendingUp,
      gradient: 'from-emerald-500 via-green-500 to-teal-500',
      bgGradient: 'from-emerald-50 via-green-50 to-teal-50',
      features: ['Start from ₹10/day', 'Multiple bank partnerships', 'Automated savings', 'Mobile-first'],
      color: 'green'
    },
    {
      id: 'dabbapay',
      name: 'DABBA PAY',
      subtitle: 'Micro Repay for Due Loans',
      description: 'Flexible daily/weekly repayment solutions for overdue loans, helping customers improve credit scores while reducing financial stress.',
      icon: CreditCard,
      gradient: 'from-blue-500 via-indigo-500 to-purple-500',
      bgGradient: 'from-blue-50 via-indigo-50 to-purple-50',
      features: ['Flexible payments', 'Credit score improvement', 'Reduced penalties', 'Stress-free repayment'],
      color: 'blue'
    },
    {
      id: 'dabbasavepay',
      name: 'DABBA PAY & SAVE',
      subtitle: 'Complete Financial Solution',
      description: 'Save small amounts in your digital DABBA and let it auto-manage loan repayments or power your personal goals. Coming soon: smart marketplace partnerships for convenient, personalized options.',
      icon: Smartphone,
      gradient: 'from-orange-500 via-red-500 to-pink-500',
      bgGradient: 'from-orange-50 via-red-50 to-pink-50',
      features: ['All-in-one platform', 'Savings + Payments', 'Complete financial control', 'Unified experience'],
      color: 'orange'
    },
    {
      id: 'fintx-studio',
      name: 'FINTX STUDIO',
      subtitle: 'Banking Design & UX',
      description: 'Exclusive design studio for BFSI products, transforming digital banking through design-first methodology and deep market understanding.',
      icon: Palette,
      gradient: 'from-purple-500 via-pink-500 to-orange-500',
      bgGradient: 'from-purple-50 via-pink-50 to-orange-50',
      features: ['BFSI expertise', 'Design systems', 'UX research', 'Digital transformation'],
      color: 'purple'
    }
  ];

  const customerCareInfo = {
    phone: '+91 484-2969-888',
    email: 'support@kaniro.in',
    address: 'Kochi, Kerala, India',
    hours: '9 AM - 6 PM IST (Mon-Fri)'
  };

  const testimonials = [
    {
      name: "Ravi Kumar",
      location: "Coimbatore, Tamil Nadu",
      role: "Small Business Owner",
      text: "DABBA SAVE helped me start saving just ₹10 per day. Now I have built an emergency fund that saved my business during tough times.",
      rating: 5,
      savings: "₹18,000"
    },
    {
      name: "Priya Sharma",
      location: "Indore, Madhya Pradesh",
      role: "Teacher",
      text: "The micro-deposit feature is perfect for my salary. I can save small amounts regularly without feeling the pinch in my monthly budget.",
      rating: 5,
      savings: "₹25,000"
    },
    {
      name: "Arun Nair",
      location: "Kochi, Kerala",
      role: "Auto Driver",
      text: "DABBA PAY helped me clear my loan with small daily payments. No more stress about big EMIs!",
      rating: 5,
      savings: "₹50,000"
    }
  ];

  const partners = [
    "State Bank of India", "HDFC Bank", "ICICI Bank", "Axis Bank", 
    "Kotak Mahindra", "Yes Bank", "IndusInd Bank", "Federal Bank"
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <motion.div
        className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-purple-300/40 to-pink-300/40 rounded-full blur-3xl"
        style={{ y: y1 }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: 360,
          x: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-40 left-20 w-64 h-64 bg-gradient-to-br from-blue-300/40 to-cyan-300/40 rounded-full blur-3xl"
        style={{ y: y2 }}
        animate={{
          scale: [1, 1.3, 1],
          rotate: -360,
          y: [0, -30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Additional floating elements */}
      <motion.div
        className="absolute top-1/3 left-10 w-20 h-20 bg-gradient-to-br from-green-400/30 to-emerald-400/30 rounded-full blur-xl"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-16 w-32 h-32 bg-gradient-to-br from-orange-400/30 to-red-400/30 rounded-full blur-2xl"
        animate={{
          y: [0, 15, 0],
          x: [0, -15, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* New colorful geometric shapes */}
      <motion.div
        className="absolute top-60 left-1/4 w-16 h-16 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full blur-lg"
        animate={{
          rotate: 360,
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-1/3 w-24 h-24 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-xl"
        animate={{
          y: [0, -25, 0],
          rotate: -360,
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-4 py-16 relative">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Content */}
              <div className="text-left lg:text-left">
                <motion.div
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 text-purple-800 px-6 py-3 rounded-full mb-8 border border-purple-200"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="size-5 text-pink-600" />
                  </motion.div>
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-semibold">
                    Welcome to Kaniro Financial Services
                  </span>
                </motion.div>
                
                {/* Enhanced OneDabba Introduction Caption */}
                <motion.div 
                  className="mb-12 relative"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.1 }}
                >
                  {/* Decorative background elements */}
                  <motion.div
                    className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-green-500/10 to-purple-500/10 rounded-3xl blur-xl"
                    animate={{
                      scale: [1, 1.05, 1],
                      rotate: [0, 1, 0],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Main caption container */}
                  <motion.div 
                    className="relative z-10 text-center lg:text-left"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Main heading with stunning effects */}
                    <motion.h1 
                      className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] relative"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    >
                      {/* Kaniro Introducing text */}
                      <motion.div 
                        className="block mb-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                      >
                        <span className="text-gray-700 font-bold text-xl md:text-2xl lg:text-3xl">
                          <span className="bg-gradient-to-r from-[#1E4A72] to-[#22C55E] bg-clip-text text-transparent">Kaniro</span> Introducing{" "}
                        </span>
                      </motion.div>

                      {/* OneDabba - Main brand name */}
                      <motion.div 
                        className="block mb-3 relative"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <span className="relative inline-block">
                          <span className="bg-gradient-to-r from-[#1E4A72] via-[#22C55E] via-blue-600 to-purple-600 bg-clip-text text-transparent font-black">
                            OneDabba
                          </span>
                          {/* Animated underline */}
                          <motion.div
                            className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-[#1E4A72] via-[#22C55E] to-purple-600 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 1.2, delay: 0.8 }}
                          />
                          {/* Sparkle effects */}
                          <motion.div
                            className="absolute -top-2 -right-4 text-yellow-400"
                            animate={{
                              scale: [1, 1.3, 1],
                              rotate: [0, 180, 360],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            <Star className="size-6 fill-current" />
                          </motion.div>
                        </span>
                      </motion.div>

                      {/* Tagline */}
                      <motion.div 
                        className="block text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                      >
                        <span className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
                          Redefining Financial Independence
                        </span>
                        <br />
                        <span className="text-gray-700">
                          for{" "}
                          <span className="bg-gradient-to-r from-[#22C55E] via-emerald-600 to-teal-600 bg-clip-text text-transparent font-black">
                            Everyone!
                          </span>
                        </span>
                      </motion.div>

                      {/* Floating decorative elements */}
                      <motion.div
                        className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-[#1E4A72]/20 to-[#22C55E]/20 rounded-full blur-xl hidden lg:block"
                        animate={{
                          y: [0, -10, 0],
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
                        className="absolute -bottom-4 -right-6 w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-lg hidden lg:block"
                        animate={{
                          x: [0, 5, 0],
                          y: [0, -8, 0],
                          scale: [1, 1.3, 1],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 1
                        }}
                      />
                    </motion.h1>

                    {/* Success metrics or highlights */}
                    <motion.div 
                      className="flex flex-wrap gap-4 justify-center lg:justify-start mt-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 1.0 }}
                    >
                      <motion.div
                        className="flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 px-4 py-2 rounded-full border border-green-200 shadow-sm"
                        whileHover={{ scale: 1.05, y: -2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <CheckCircle className="size-4 text-green-600" />
                        <span className="text-sm font-semibold text-green-800">Revolutionary Platform</span>
                      </motion.div>
                      <motion.div
                        className="flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 px-4 py-2 rounded-full border border-blue-200 shadow-sm"
                        whileHover={{ scale: 1.05, y: -2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Heart className="size-4 text-blue-600" />
                        <span className="text-sm font-semibold text-blue-800">Financial Freedom</span>
                      </motion.div>
                      <motion.div
                        className="flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full border border-purple-200 shadow-sm"
                        whileHover={{ scale: 1.05, y: -2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Globe className="size-4 text-purple-600" />
                        <span className="text-sm font-semibold text-purple-800">For Everyone</span>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </motion.div>
                
                {/* Enhanced OneDabba Description with Visual Elements */}
                <motion.div 
                  className="mb-12 space-y-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {/* Main Introduction */}
                  <motion.div 
                    className="relative p-6 rounded-2xl bg-gradient-to-r from-blue-50 via-green-50 to-purple-50 border border-gray-200 shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="absolute -top-1 -left-1 w-4 h-4 bg-gradient-to-br from-[#1E4A72] to-[#22C55E] rounded-full"
                      animate={{ scale: [1, 1.2, 1], rotate: 360 }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <p className="text-lg text-gray-800 leading-relaxed">
                      <span className="bg-gradient-to-r from-[#1E4A72] via-[#22C55E] to-purple-600 bg-clip-text text-transparent font-bold">OneDabba</span> brings back the trusted idea of the traditional{" "}
                      <span className="px-2 py-1 bg-gradient-to-r from-orange-100 to-amber-100 rounded-lg font-semibold text-orange-800">"dabba" savings box</span>{" "}
                      in a modern, digital form. It is designed to help individuals and families{" "}
                      <span className="px-2 py-1 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg font-semibold text-green-800">manage money better</span>{" "}
                      in three simple ways.
                    </p>
                  </motion.div>
                </motion.div>
              </div>

              {/* Right Content - New Interactive Visual Elements */}
              <div className="space-y-8">
                {/* Enhanced App Store Download Buttons */}
                <motion.div 
                  className="space-y-4"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="text-center mb-6">
                    <motion.h3 
                      className="text-xl font-bold bg-gradient-to-r from-[#1E4A72] to-[#22C55E] bg-clip-text text-transparent mb-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                    >
                      Download OneDabba
                    </motion.h3>
                    <p className="text-sm text-gray-600">Available on all platforms</p>
                  </div>

                  {/* App Store Button */}
                  <motion.button
                    className="w-full bg-gradient-to-r from-[#1E4A72] via-[#1E4A72] to-[#22C55E] text-white py-4 px-6 rounded-2xl flex items-center gap-4 shadow-2xl hover:shadow-3xl transition-all duration-300 group relative overflow-hidden border border-[#22C55E]/20"
                    whileHover={{ scale: 1.02, y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-[#22C55E]/20 to-transparent"
                      animate={{
                        x: ['-100%', '100%']
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                    
                    {/* Background glow */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#22C55E]/10 to-[#1E4A72]/10 rounded-2xl blur-xl"
                      animate={{
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    
                    <div className="relative z-10 w-12 h-12 bg-gradient-to-br from-white to-[#E3F2FD] rounded-2xl flex items-center justify-center shadow-lg border border-[#22C55E]/30">
                      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.83 22.75C21.51 23.52 21.05 24.27 20.42 25.01C19.56 26.03 18.84 26.76 18.26 27.21C17.41 27.89 16.48 28.24 15.47 28.26C14.79 28.26 13.99 28.06 13.07 27.65C12.13 27.24 11.26 27.04 10.46 27.04C9.61 27.04 8.71 27.24 7.77 27.65C6.82 28.06 6.07 28.28 5.51 28.3C4.55 28.35 3.54 28.03 2.48 27.33C1.84 26.88 1.08 26.11 0.21 25.02C-0.71 23.86 -1.47 22.53 -2.07 21.02C-2.71 19.42 -3.03 17.86 -3.03 16.34C-3.03 14.57 -2.63 13.06 -1.83 11.81C-1.18 10.8 -0.32 10.01 0.74 9.44C1.8 8.87 2.94 8.57 4.16 8.54C4.88 8.54 5.84 8.76 7.04 9.19C8.22 9.62 8.95 9.84 9.23 9.84C9.51 9.84 10.32 9.59 11.64 9.1C12.9 8.64 13.95 8.44 14.8 8.47C17.12 8.55 18.86 9.41 20.01 11.06C17.98 12.26 16.97 14.01 17 16.31C17.02 18.2 17.67 19.8 18.95 21.09C19.55 21.7 20.21 22.17 20.93 22.51C20.82 22.74 20.7 22.95 20.58 23.16L21.83 22.75Z" fill="url(#appleKaniroGradient)"/>
                        <path d="M15.76 6.69C14.82 7.75 13.56 8.41 11.97 8.63C11.76 7.05 12.32 5.37 13.65 4.34C14.54 3.29 15.95 2.57 17.89 2.33C18.09 3.95 17.54 5.5 15.76 6.69Z" fill="url(#appleKaniroGradient)"/>
                        <defs>
                          <linearGradient id="appleKaniroGradient" x1="0" y1="0" x2="1" y2="1">
                            <stop stopColor="#1E4A72" />
                            <stop offset="1" stopColor="#22C55E" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div className="flex-1 text-left relative z-10">
                      <div className="text-xs text-white/80 font-medium">Download on the</div>
                      <div className="text-lg font-bold text-white">App Store</div>
                    </div>
                    <motion.div
                      className="relative z-10"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ArrowRight className="w-5 h-5 text-[#22C55E]" />
                    </motion.div>
                  </motion.button>

                  {/* Google Play Button */}
                  <motion.button
                    className="w-full bg-gradient-to-r from-[#22C55E] via-[#22C55E] to-[#1E4A72] text-white py-4 px-6 rounded-2xl flex items-center gap-4 shadow-2xl hover:shadow-3xl transition-all duration-300 group relative overflow-hidden border border-[#1E4A72]/20"
                    whileHover={{ scale: 1.02, y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-[#1E4A72]/20 to-transparent"
                      animate={{
                        x: ['-100%', '100%']
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 1
                      }}
                    />
                    
                    {/* Background glow */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#1E4A72]/10 to-[#22C55E]/10 rounded-2xl blur-xl"
                      animate={{
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                      }}
                    />
                    
                    <div className="relative z-10 w-12 h-12 bg-gradient-to-br from-white to-[#F0FDF4] rounded-2xl flex items-center justify-center shadow-lg border border-[#1E4A72]/30">
                      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.214 2.122L16.092 14.001L4.215 25.881C3.953 25.732 3.699 25.513 3.456 25.228C2.718 24.376 2.285 23.276 2.285 22.097V5.905C2.285 4.726 2.718 3.626 3.456 2.774C3.699 2.489 3.953 2.270 4.214 2.122Z" fill="#1E4A72"/>
                        <path d="M24.133 12.546L19.757 10.349L16.092 14.001L19.757 17.653L24.133 15.456C25.108 14.976 25.714 13.987 25.714 12.883C25.714 11.779 25.108 10.790 24.133 12.546Z" fill="#22C55E"/>
                        <path d="M16.092 14.001L19.757 10.349L4.215 2.122C4.764 1.827 5.385 1.827 5.935 2.122L16.092 14.001Z" fill="#1E4A72"/>
                        <path d="M16.092 14L4.215 25.881L19.757 17.653L16.092 14Z" fill="#22C55E"/>
                      </svg>
                    </div>
                    <div className="flex-1 text-left relative z-10">
                      <div className="text-xs text-white/80 font-medium">Get it on</div>
                      <div className="text-lg font-bold text-white">Google Play</div>
                    </div>
                    <motion.div
                      className="relative z-10"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    >
                      <ArrowRight className="w-5 h-5 text-[#1E4A72]" />
                    </motion.div>
                  </motion.button>

                  {/* Coming Soon Badge */}
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#E3F2FD] via-white to-[#F0FDF4] px-4 py-2 rounded-full border border-[#22C55E]/30 shadow-sm">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <Sparkles className="w-4 h-4 text-[#22C55E]" />
                      </motion.div>
                      <span className="text-sm font-medium bg-gradient-to-r from-[#1E4A72] to-[#22C55E] bg-clip-text text-transparent">
                        Coming Soon - Beta Testing
                      </span>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Lady Image Section - Moved from Complete Control section */}
                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <motion.div
                    className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 p-2 max-w-md mx-auto"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Decorative background elements */}
                    <motion.div
                      className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#22C55E]/30 to-green-400/30 rounded-full blur-3xl"
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: 360,
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <motion.div
                      className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-[#1E4A72]/30 to-blue-400/30 rounded-full blur-2xl"
                      animate={{
                        scale: [1, 1.3, 1],
                        rotate: -360,
                      }}
                      transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    
                    <div className="relative z-10 rounded-2xl overflow-hidden">
                      <ImageWithFallback 
                        src={exampleImage}
                        alt="Happy woman holding money and OneDabba savings box"
                        className="w-full h-auto object-cover"
                      />
                    </div>

                    {/* Floating elements */}
                    <motion.div
                      className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-[#22C55E] to-green-600 rounded-2xl flex items-center justify-center shadow-lg"
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 5, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <Sparkles className="w-8 h-8 text-white" />
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* How OneDabba Works - Three Key Features */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-center mb-12">
              <motion.h2 
                className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 bg-gradient-to-r from-[#1E4A72] via-[#22C55E] to-purple-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                How OneDabba Works
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-600 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Three simple ways to transform your financial life with OneDabba
              </motion.p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Feature 1 - Micro Deposits */}
              <motion.div
                className="relative group"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <motion.div
                  className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 rounded-3xl p-8 h-full border border-green-200 shadow-lg relative overflow-hidden"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Background decoration */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-2xl"
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
                  
                  {/* Number badge */}
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-[#22C55E] to-green-600 rounded-2xl flex items-center justify-center mb-6 text-white font-black text-xl shadow-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    1
                  </motion.div>

                  <h3 className="text-xl font-bold text-gray-800 mb-4">Micro Deposits</h3>
                  <p className="text-gray-700 leading-relaxed">
                    It allows you to save small amounts regularly—turning daily deposits into meaningful funds for your personal goals.
                  </p>

                  {/* Decorative icon */}
                  <motion.div
                    className="absolute bottom-4 right-4 text-green-300"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <TrendingUp className="w-8 h-8" />
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Feature 2 - Due Loan Flexible Repayments */}
              <motion.div
                className="relative group"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.div
                  className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl p-8 h-full border border-blue-200 shadow-lg relative overflow-hidden"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Background decoration */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-2xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: -360,
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Number badge */}
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-[#1E4A72] to-blue-600 rounded-2xl flex items-center justify-center mb-6 text-white font-black text-xl shadow-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    2
                  </motion.div>

                  <h3 className="text-xl font-bold text-gray-800 mb-4">Due Loan Flexible Repayments</h3>
                  <p className="text-gray-700 leading-relaxed">
                    For those struggling with heavy EMIs, OneDabba partners with banks to make loan repayments easier by breaking them into smaller, flexible amounts.
                  </p>

                  {/* Decorative icon */}
                  <motion.div
                    className="absolute bottom-4 right-4 text-blue-300"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  >
                    <CreditCard className="w-8 h-8" />
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Feature 3 - Achieve Goals */}
              <motion.div
                className="relative group"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <motion.div
                  className="bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 rounded-3xl p-8 h-full border border-orange-200 shadow-lg relative overflow-hidden"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Background decoration */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-orange-400/20 to-pink-400/20 rounded-full blur-2xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: 360,
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Number badge */}
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 text-white font-black text-xl shadow-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    3
                  </motion.div>

                  <h3 className="text-xl font-bold text-gray-800 mb-4">Achieve Goals</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Use your savings to directly pay for and procure desired items, tours, or services through our partner network—often at exclusive benefits and discounts.
                  </p>

                  {/* Decorative icon */}
                  <motion.div
                    className="absolute bottom-4 right-4 text-orange-300"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  >
                    <Target className="w-8 h-8" />
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>



          {/* Products Section */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-center mb-12">
              <motion.h2 
                className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 bg-gradient-to-r from-[#1E4A72] via-[#22C55E] to-purple-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Our Solutions
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-600 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Choose from our comprehensive suite of financial tools designed to empower your financial journey
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product, index) => {
                const IconComponent = product.icon;
                return (
                  <motion.div
                    key={product.id}
                    className="group relative"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 * index }}
                  >
                    <motion.div
                      className={`relative h-full p-6 rounded-3xl bg-gradient-to-br ${product.bgGradient} border border-gray-200 shadow-lg cursor-pointer overflow-hidden`}
                      whileHover={{ scale: 1.05, y: -10 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleProductClick(product.id as any)}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Background gradient animation */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                      />
                      
                      {/* Floating icon container */}
                      <motion.div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-4 relative`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                        
                        {/* Glow effect */}
                        <motion.div
                          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${product.gradient} blur-xl opacity-50`}
                          animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.3, 0.6, 0.3]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      </motion.div>

                      <div className="relative z-10">
                        <motion.h3 
                          className="text-lg font-bold text-gray-800 mb-1"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                        >
                          {product.name}
                        </motion.h3>
                        <motion.p 
                          className="text-sm text-gray-600 mb-3"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                        >
                          {product.subtitle}
                        </motion.p>
                        <motion.p 
                          className="text-sm text-gray-700 mb-4 line-clamp-3"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                        >
                          {product.description}
                        </motion.p>

                        {/* Features list */}
                        <motion.div 
                          className="space-y-1 mb-4"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                        >
                          {product.features.slice(0, 2).map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-2">
                              <CheckCircle className="w-3 h-3 text-green-500" />
                              <span className="text-xs text-gray-600">{feature}</span>
                            </div>
                          ))}
                        </motion.div>

                        {/* CTA button */}
                        <motion.div
                          className="flex items-center gap-2 text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors"
                          whileHover={{ x: 5 }}
                        >
                          <span>Learn More</span>
                          <ArrowRight className="w-4 h-4" />
                        </motion.div>
                      </div>

                      {/* Decorative elements */}
                      <motion.div
                        className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-60"
                        animate={{
                          scale: [1, 1.2, 1],
                          rotate: 360
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.2
                        }}
                      />
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Testimonials Section */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="text-center mb-12">
              <motion.h2 
                className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 bg-gradient-to-r from-[#1E4A72] via-[#22C55E] to-purple-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Success Stories
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-600 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Real people, real results. See how OneDabba is transforming lives across India
              </motion.p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <motion.div
                className="bg-gradient-to-br from-white via-purple-50 to-blue-50 rounded-3xl p-8 shadow-2xl border border-purple-200"
                key={activeTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-shrink-0">
                    <motion.div
                      className="w-20 h-20 rounded-full bg-gradient-to-br from-[#1E4A72] to-[#22C55E] flex items-center justify-center text-white text-2xl font-bold"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      {testimonials[activeTestimonial].name.charAt(0)}
                    </motion.div>
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <motion.p 
                      className="text-lg text-gray-800 mb-4 italic"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      "{testimonials[activeTestimonial].text}"
                    </motion.p>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                        {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      
                      <p className="font-semibold text-gray-900">{testimonials[activeTestimonial].name}</p>
                      <p className="text-sm text-gray-600">{testimonials[activeTestimonial].role}</p>
                      <p className="text-sm text-gray-500">{testimonials[activeTestimonial].location}</p>
                      
                      <motion.div
                        className="inline-flex items-center gap-2 mt-2 px-3 py-1 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full"
                        whileHover={{ scale: 1.05 }}
                      >
                        <span className="text-sm font-semibold text-green-800">Saved: {testimonials[activeTestimonial].savings}</span>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Testimonial navigation dots */}
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === activeTestimonial ? 'bg-[#22C55E]' : 'bg-gray-300'
                    }`}
                    onClick={() => setActiveTestimonial(index)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Partner Banks Section */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="text-center mb-12">
              <motion.h2 
                className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 bg-gradient-to-r from-[#1E4A72] via-[#22C55E] to-purple-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Trusted Partners
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-600 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                We partner with India's leading banks to bring you the best financial products
              </motion.p>
            </div>

            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              {partners.map((partner, index) => (
                <motion.div
                  key={partner}
                  className="bg-white rounded-2xl p-4 shadow-lg border border-gray-200 flex items-center justify-center min-h-[80px]"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="text-sm font-semibold text-gray-700 text-center">{partner}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 bg-gradient-to-r from-[#1E4A72] via-[#22C55E] to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              Get in Touch
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              Have questions? We're here to help you on your financial journey
            </motion.p>

            <motion.div
              className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <motion.div
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Phone className="w-8 h-8 text-[#22C55E] mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800 mb-2">Call Us</h3>
                <p className="text-gray-600">{customerCareInfo.phone}</p>
                <p className="text-sm text-gray-500 mt-1">{customerCareInfo.hours}</p>
              </motion.div>

              <motion.div
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Mail className="w-8 h-8 text-[#22C55E] mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800 mb-2">Email Us</h3>
                <p className="text-gray-600">{customerCareInfo.email}</p>
                <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
              </motion.div>

              <motion.div
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <MapPin className="w-8 h-8 text-[#22C55E] mx-auto mb-3" />
                <h3 className="font-semibold text-gray-800 mb-2">Visit Us</h3>
                <p className="text-gray-600">{customerCareInfo.address}</p>
                <p className="text-sm text-gray-500 mt-1">Monday to Friday</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}