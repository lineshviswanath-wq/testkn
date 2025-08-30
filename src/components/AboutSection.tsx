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
            <div className="grid lg:grid-cols-2 gap-12 items-center">
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
                
                {/* Enhanced OneDABBA Introduction Caption */}
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

                      {/* OneDubba - Main brand name */}
                      <motion.div 
                        className="block mb-3 relative"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <span className="relative inline-block">
                          <span className="bg-gradient-to-r from-[#1E4A72] via-[#22C55E] via-blue-600 to-purple-600 bg-clip-text text-transparent font-black">
                            OneDubba
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
                
                {/* Enhanced OneDABBA Description with Visual Elements */}
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
                      <span className="bg-gradient-to-r from-[#1E4A72] via-[#22C55E] to-purple-600 bg-clip-text text-transparent font-bold">OneDABBA</span> brings back the trusted idea of the traditional{" "}
                      <span className="px-2 py-1 bg-gradient-to-r from-orange-100 to-amber-100 rounded-lg font-semibold text-orange-800">"dabba" savings box</span>{" "}
                      in a modern, digital form. It is designed to help individuals and families{" "}
                      <span className="px-2 py-1 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg font-semibold text-green-800">manage money better</span>{" "}
                      in three simple ways.
                    </p>
                  </motion.div>

                  {/* Three Ways Section */}
                  <div className="space-y-6">
                    {/* First Way - Savings */}
                    <motion.div
                      className="relative p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 shadow-md group hover:shadow-xl transition-all duration-300"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      whileHover={{ y: -5 }}
                    >
                      <motion.div
                        className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      >
                        1
                      </motion.div>
                      <div className="flex items-start gap-4">
                        <motion.div
                          className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <TrendingUp className="w-6 h-6 text-white" />
                        </motion.div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-green-800 mb-2">Micro Deposits</h4>
                          <p className="text-green-700 leading-relaxed">
                            It allows you to{" "}
                            <span className="px-2 py-1 bg-green-200 rounded-md font-semibold">save small amounts regularly</span>
                            —turning daily deposits into{" "}
                            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent font-bold">meaningful funds</span>{" "}
                            for your personal goals.
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Second Way - Loan Repayments */}
                    <motion.div
                      className="relative p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 shadow-md group hover:shadow-xl transition-all duration-300"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                      whileHover={{ y: -5 }}
                    >
                      <motion.div
                        className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg"
                        animate={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      >
                        2
                      </motion.div>
                      <div className="flex items-start gap-4">
                        <motion.div
                          className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center"
                          whileHover={{ scale: 1.1, rotate: -5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <CreditCard className="w-6 h-6 text-white" />
                        </motion.div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-blue-800 mb-2">Due Loan Flexible Repayments</h4>
                          <p className="text-blue-700 leading-relaxed">
                            For those struggling with{" "}
                            <span className="px-2 py-1 bg-red-100 rounded-md font-semibold text-red-700">heavy EMIs</span>, 
                            OneDABBA{" "}
                            <span className="px-2 py-1 bg-blue-200 rounded-md font-semibold">partners with banks</span>{" "}
                            to make loan repayments easier by breaking them into{" "}
                            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-bold">smaller, flexible amounts</span>.
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Third Way - Achieve Goals */}
                    <motion.div
                      className="relative p-6 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200 shadow-md group hover:shadow-xl transition-all duration-300"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 1.0 }}
                      whileHover={{ y: -5 }}
                    >
                      <motion.div
                        className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg"
                        animate={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      >
                        3
                      </motion.div>
                      <div className="flex items-start gap-4">
                        <motion.div
                          className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Target className="w-6 h-6 text-white" />
                        </motion.div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-orange-800 mb-2">Achieve Goals</h4>
                          <p className="text-orange-700 leading-relaxed">
                            Use your savings to directly{" "}
                            <span className="px-2 py-1 bg-orange-200 rounded-md font-semibold">pay for and procure</span>{" "}
                            desired items, tours, or services through our{" "}
                            <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent font-bold">partner network</span>
                            —often at{" "}
                            <span className="px-2 py-1 bg-yellow-200 rounded-md font-semibold text-yellow-800">exclusive benefits and discounts</span>.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Final Benefits Section */}
                  <motion.div
                    className="relative p-6 rounded-2xl bg-gradient-to-r from-purple-50 via-pink-50 to-orange-50 border border-purple-200 shadow-lg"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Decorative elements */}
                    <motion.div
                      className="absolute top-2 right-2 w-3 h-3 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-60"
                      animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                      className="absolute bottom-2 left-2 w-2 h-2 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-60"
                      animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    />
                    
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div
                        className="w-14 h-14 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-2xl flex items-center justify-center"
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Heart className="w-7 h-7 text-white" />
                      </motion.div>
                      <div>
                        <h4 className="text-xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                          Complete Control & Peace of Mind
                        </h4>
                        <p className="text-sm text-gray-600">Everything organized in one place</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                      <motion.span
                        className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-purple-700 font-semibold text-sm border border-purple-200"
                        whileHover={{ scale: 1.05, y: -2 }}
                        transition={{ duration: 0.2 }}
                      >
                        All savings organized
                      </motion.span>
                      <motion.span
                        className="px-4 py-2 bg-gradient-to-r from-pink-100 to-orange-100 rounded-full text-pink-700 font-semibold text-sm border border-pink-200"
                        whileHover={{ scale: 1.05, y: -2 }}
                        transition={{ duration: 0.2 }}
                      >
                        Complete control
                      </motion.span>
                      <motion.span
                        className="px-4 py-2 bg-gradient-to-r from-orange-100 to-yellow-100 rounded-full text-orange-700 font-semibold text-sm border border-orange-200"
                        whileHover={{ scale: 1.05, y: -2 }}
                        transition={{ duration: 0.2 }}
                      >
                        Financial discipline
                      </motion.span>
                      <motion.span
                        className="px-4 py-2 bg-gradient-to-r from-green-100 to-teal-100 rounded-full text-green-700 font-semibold text-sm border border-green-200"
                        whileHover={{ scale: 1.05, y: -2 }}
                        transition={{ duration: 0.2 }}
                      >
                        Peace of mind
                      </motion.span>
                    </div>
                  </motion.div>
                </motion.div>
                
                {/* New colorful feature highlights */}
                <motion.div 
                  className="flex flex-wrap gap-3 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 hover:scale-105 transition-transform">
                    <Heart className="w-4 h-4 mr-2" />
                    Omni Channel
                  </Badge>
                  <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 hover:scale-105 transition-transform">
                    <Globe className="w-4 h-4 mr-2" />
                    Multiple Partner Banks
                  </Badge>
                  <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 hover:scale-105 transition-transform">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Innovation First
                  </Badge>
                </motion.div>
              </div>

              {/* Right Visual Content */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {/* Main Hero Image */}
                <motion.div 
                  className="relative z-10"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1666693038485-b3a060067809?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkaWdpdGFsJTIwZGVzaWduJTIwaW50ZXJmYWNlJTIwY29sb3JmdWx8ZW58MXx8fHwxNzU2NDcxMzIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Modern Design Interface"
                    className="w-full h-96 object-cover rounded-3xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-pink-600/20 to-blue-600/30 rounded-3xl" />
                  
                  {/* Floating colorful design elements */}
                  <motion.div 
                    className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-lg"
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.div 
                    className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-green-400 to-cyan-500 rounded-full shadow-lg"
                    animate={{
                      y: [0, -10, 0],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.div 
                    className="absolute top-1/2 -left-6 w-8 h-24 bg-gradient-to-b from-purple-400 to-pink-500 rounded-full shadow-lg"
                    animate={{
                      x: [0, -5, 0],
                      rotate: [0, 10, 0],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>

                {/* Background decorative images */}
                <motion.div 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 opacity-30"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-96 h-96 bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 rounded-full blur-3xl" />
                </motion.div>
                
                {/* Additional colorful background elements */}
                <motion.div 
                  className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-br from-orange-400 to-red-400 rounded-full opacity-20 blur-xl"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    rotate: 360 
                  }}
                  transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div 
                  className="absolute bottom-10 left-10 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full opacity-25 blur-lg"
                  animate={{ 
                    y: [0, -15, 0],
                    x: [0, 10, 0]
                  }}
                  transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Products Section */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <motion.h2 
                className="text-5xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                  Products & Services
                </span>
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-700 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Four innovative solutions designed to transform the Indian financial landscape
              </motion.p>
            </div>
            
            <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="group cursor-pointer"
                  onClick={() => handleProductClick(product.id as any)}
                >
                  <Card className={`p-8 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br ${product.bgGradient} relative overflow-hidden h-full`}>
                    <motion.div
                      className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/20 to-yellow-200/30 rounded-full blur-2xl"
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: 360,
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    
                    {/* Additional floating elements for each card */}
                    <motion.div
                      className={`absolute -top-2 -left-2 w-6 h-6 bg-gradient-to-br ${product.gradient} rounded-full opacity-70`}
                      animate={{
                        y: [0, -8, 0],
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <motion.div
                      className={`absolute -bottom-3 -right-3 w-8 h-8 bg-gradient-to-br ${product.gradient} rounded-full opacity-50`}
                      animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, -180, -360],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    
                    <div className="relative z-10">
                      <motion.div
                        className={`w-20 h-20 bg-gradient-to-br ${product.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                        whileHover={{ rotate: 10 }}
                      >
                        <product.icon className="w-10 h-10 text-white" />
                      </motion.div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.name}</h3>
                      <p className="text-gray-600 text-sm font-semibold mb-4">{product.subtitle}</p>
                      <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>
                      
                      <div className="space-y-3">
                        {product.features.map((feature, idx) => (
                          <motion.div 
                            key={idx} 
                            className="flex items-center gap-3"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 + idx * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                      
                      <motion.div className="mt-6">
                        <Button 
                          className={`w-full bg-gradient-to-r ${product.gradient} text-white hover:scale-105 transition-all duration-300`}
                          onClick={() => handleProductClick(product.id as any)}
                        >
                          Explore {product.name}
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                      </motion.div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Testimonials Section */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <motion.h2 
                className="text-5xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  Success Stories
                </span>
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-700 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Real people, real savings, real impact across India
              </motion.p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <Card className="p-8 h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    <blockquote className="text-gray-700 text-lg leading-relaxed mb-6">
                      "{testimonial.text}"
                    </blockquote>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-bold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.role}</div>
                        <div className="text-sm text-gray-500">{testimonial.location}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-600">{testimonial.savings}</div>
                        <div className="text-xs text-gray-500">saved</div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Partner Banks Section */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <motion.h2 
                className="text-5xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  Trusted Partners
                </span>
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-700 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Partnered with India's leading banks for your financial security
              </motion.p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {partners.map((partner, index) => (
                <motion.div
                  key={partner}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                >
                  <span className="text-gray-700 font-semibold text-center">{partner}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Customer Care Section */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-gradient-to-r from-blue-50 to-green-50 border-0 shadow-xl">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                    We're Here to Help
                  </span>
                </h3>
                <p className="text-gray-700 text-lg">Our customer care team is always ready to assist you</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <Phone className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <div className="font-semibold text-gray-900">Phone</div>
                  <div className="text-gray-600">{customerCareInfo.phone}</div>
                </motion.div>
                
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <Mail className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <div className="font-semibold text-gray-900">Email</div>
                  <div className="text-gray-600">{customerCareInfo.email}</div>
                </motion.div>
                
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <MapPin className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                  <div className="font-semibold text-gray-900">Location</div>
                  <div className="text-gray-600">{customerCareInfo.address}</div>
                </motion.div>
                
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <CheckCircle className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                  <div className="font-semibold text-gray-900">Hours</div>
                  <div className="text-gray-600">{customerCareInfo.hours}</div>
                </motion.div>
              </div>
            </Card>
          </motion.div>

          {/* Download ONE DABBA APP Section */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <motion.h2 
                className="text-5xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="bg-gradient-to-r from-[#1E4A72] via-[#22C55E] to-purple-600 bg-clip-text text-transparent">
                  Download ONE DABBA APP
                </span>
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-700 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Start your financial journey today with our mobile app
              </motion.p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
              {/* App Store Download Button */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ scale: 1.05, y: -3 }}
                className="cursor-pointer w-full sm:w-auto"
                viewport={{ once: true }}
              >
                <Card className="p-4 sm:p-5 bg-gradient-to-r from-gray-900 to-black border-2 border-gray-700/50 hover:border-gray-600/70 hover:shadow-xl transition-all duration-300 relative overflow-hidden touch-manipulation">
                  <motion.div
                    className="absolute top-0 right-0 w-16 h-16 bg-white/5 rounded-full -mr-8 -mt-8"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                  <div className="flex items-center gap-3 relative z-10">
                    <motion.div 
                      className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg"
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
                        ease: "easeInOut"
                      }}
                    >
                      <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                    </motion.div>
                    <div className="min-w-0">
                      <div className="text-xs text-gray-300 uppercase tracking-wide">Download on the</div>
                      <div className="font-bold text-white text-lg">App Store</div>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Google Play Download Button */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ scale: 1.05, y: -3 }}
                className="cursor-pointer w-full sm:w-auto"
                viewport={{ once: true }}
              >
                <Card className="p-4 sm:p-5 bg-gradient-to-r from-green-600 to-green-700 border-2 border-green-500/50 hover:border-green-400/70 hover:shadow-xl transition-all duration-300 relative overflow-hidden touch-manipulation">
                  <motion.div
                    className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full -mr-8 -mt-8"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                  />
                  <div className="flex items-center gap-3 relative z-10">
                    <motion.div 
                      className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg"
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
                        delay: 0.2
                      }}
                    >
                      <svg className="w-6 h-6 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                      </svg>
                    </motion.div>
                    <div className="min-w-0">
                      <div className="text-xs text-green-100 uppercase tracking-wide">Get it on</div>
                      <div className="font-bold text-white text-lg">Google Play</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>

            {/* Additional download info */}
            <motion.div 
              className="text-center mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 text-lg">
                Available for iOS and Android devices. Start saving with just ₹10!
              </p>
              <div className="flex justify-center items-center gap-4 mt-4">
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <span className="text-gray-600 font-medium">4.8 rating</span>
                </div>
                <div className="text-gray-400">•</div>
                <span className="text-gray-600 font-medium">1M+ downloads</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}