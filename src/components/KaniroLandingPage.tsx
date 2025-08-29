import React, { useContext } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ArrowRight, Target, TrendingUp, Shield, Users, Award, CheckCircle, Smartphone, CreditCard, PiggyBank, Banknote, Building2, Star, Download, Apple, PlayCircle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { NavigationContext } from "../App";
import { motion } from "motion/react";

export function KaniroLandingPage() {
  const { setNavigation, scrollToSection } = useContext(NavigationContext);

  const stats = [
    { value: "10,000+", label: "Happy Customers", icon: Users },
    { value: "₹50 Cr+", label: "Deposits Managed", icon: TrendingUp },
    { value: "99.9%", label: "Security Rate", icon: Shield },
    { value: "24/7", label: "Support Available", icon: Award },
  ];

  const features = [
    { icon: Shield, title: "Bank-Grade Security", desc: "Your funds stay with partner banks" },
    { icon: Smartphone, title: "Mobile-First Design", desc: "Optimized for Indian users" },
    { icon: Building2, title: "RBI Compliant", desc: "Fully regulated financial services" },
    { icon: Target, title: "Tier 2/3 Focus", desc: "Designed for underserved communities" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
            {/* Content */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              {/* Brand Badge */}
              <motion.div 
                className="flex items-center justify-center lg:justify-start"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div 
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#1E4A72] to-[#22C55E] text-white px-6 py-3 rounded-full shadow-xl"
                  animate={{ 
                    boxShadow: [
                      "0 4px 20px rgba(30, 74, 114, 0.3)",
                      "0 8px 30px rgba(30, 74, 114, 0.5)",
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
                    <Target className="size-5" />
                  </motion.div>
                  <span className="font-bold tracking-wide">KANIRO FINANCIAL SERVICES</span>
                </motion.div>
              </motion.div>
              
              {/* Main Heading */}
              <motion.div
                className="space-y-4 text-center lg:text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 leading-tight">
                  <span className="block mb-2">
                    <span className="bg-gradient-to-r from-[#1E4A72] to-[#22C55E] bg-clip-text text-transparent">
                      Financial Freedom
                    </span>
                  </span>
                  <span className="block text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800">
                    For Every Indian Family
                  </span>
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Bridging the gap in India's financial ecosystem with 
                  <span className="text-[#1E4A72] font-bold"> innovative micro-deposits</span> and 
                  <span className="text-[#22C55E] font-bold"> smart repayment solutions</span>
                </p>
              </motion.div>

              {/* Stats */}
              <motion.div 
                className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <div className="w-8 h-8 mx-auto mb-2 text-[#1E4A72]">
                      <stat.icon className="w-full h-full" />
                    </div>
                    <div className="font-black text-lg text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Hero Image */}
            <div className="lg:col-span-5 relative">
              <motion.div 
                className="relative z-10 rounded-3xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1612943680768-d82060323fd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmYW1pbHklMjBmaW5hbmNpYWwlMjBwbGFubmluZyUyMG1vZGVybiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU2NDY4NjY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Kaniro Financial Services - Empowering Indian Families"
                  className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900">
              Our <span className="text-[#1E4A72]">Solutions</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Two powerful platforms designed to transform your financial journey
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* DUBBASAVE Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="cursor-pointer"
              onClick={() => setNavigation({ currentView: 'dubbasave' })}
            >
              <Card className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 hover:border-[#22C55E] transition-all duration-500 group h-full">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-[#22C55E] rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      <PiggyBank className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-gray-900">DUBBASAVE</h3>
                      <p className="text-[#22C55E] font-semibold">Digital Money Box</p>
                    </div>
                  </div>
                  
                  <div className="aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-green-100 to-green-200">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1660970781103-ba6749cb9ce3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwc2F2aW5ncyUyMG1vbmV5JTIwZ3Jvd3RoJTIwY2hhcnR8ZW58MXx8fHwxNzU2NDY4NjcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="DUBBASAVE - Digital Savings"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      Traditional Dabba savings meets modern technology. Start your financial journey with micro-deposits as low as ₹10.
                    </p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-[#22C55E]" />
                        <span>Minimum ₹10 daily deposits</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-[#22C55E]" />
                        <span>Bank-grade security</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-[#22C55E]" />
                        <span>Flexible withdrawal options</span>
                      </div>
                    </div>

                    <Button 
                      className="w-full bg-gradient-to-r from-[#22C55E] to-green-600 hover:from-green-600 hover:to-[#22C55E] text-white font-bold py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                      onClick={(e) => {
                        e.stopPropagation();
                        setNavigation({ currentView: 'dubbasave' });
                      }}
                    >
                      <span>Explore DUBBASAVE</span>
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* DUBBAPAY Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="cursor-pointer"
              onClick={() => setNavigation({ currentView: 'dubbapay' })}
            >
              <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 hover:border-[#1E4A72] transition-all duration-500 group h-full">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-[#1E4A72] rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      <CreditCard className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-gray-900">DUBBAPAY</h3>
                      <p className="text-[#1E4A72] font-semibold">Smart Repayment Solutions</p>
                    </div>
                  </div>
                  
                  <div className="aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1559067341-04a52c7d06d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2FuJTIwcmVwYXltZW50JTIwZmluYW5jaWFsJTIwc29sdXRpb258ZW58MXx8fHwxNzU2NDY4Njc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="DUBBAPAY - Loan Repayment Solutions"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      Transform your loan repayment experience with our innovative micro-NPA solutions and flexible payment options.
                    </p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-[#1E4A72]" />
                        <span>Micro-NPA repayment plans</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-[#1E4A72]" />
                        <span>Flexible payment schedules</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-[#1E4A72]" />
                        <span>Credit score improvement</span>
                      </div>
                    </div>

                    <Button 
                      className="w-full bg-gradient-to-r from-[#1E4A72] to-blue-600 hover:from-blue-600 hover:to-[#1E4A72] text-white font-bold py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                      onClick={(e) => {
                        e.stopPropagation();
                        setNavigation({ currentView: 'dubbapay' });
                      }}
                    >
                      <span>Explore DUBBAPAY</span>
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900">
              Why Choose <span className="text-[#22C55E]">Kaniro</span>?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built specifically for the Indian financial ecosystem with cutting-edge technology
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="p-6 text-center bg-white border border-gray-200 hover:border-[#22C55E] hover:shadow-xl transition-all duration-300 h-full">
                  <div className="w-12 h-12 mx-auto mb-4 p-3 bg-gradient-to-br from-[#1E4A72] to-[#22C55E] rounded-xl">
                    <feature.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-[#1E4A72] to-[#22C55E]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            className="space-y-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
              Ready to Transform Your Financial Future?
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Join thousands of families who have already started their journey with Kaniro Financial Services
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button 
                size="lg"
                className="bg-white text-[#1E4A72] hover:bg-gray-100 font-bold px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                onClick={() => setNavigation({ currentView: 'dubbasave' })}
              >
                <PiggyBank className="w-5 h-5 mr-2" />
                Start Saving with DUBBASAVE
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#1E4A72] font-bold px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                onClick={() => setNavigation({ currentView: 'dubbapay' })}
              >
                <CreditCard className="w-5 h-5 mr-2" />
                Manage Loans with DUBBAPAY
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* App Download */}
            <div className="pt-8 border-t border-white/20">
              <p className="text-white/80 mb-4">Download our mobile apps</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="cursor-pointer"
                >
                  <Card className="p-3 bg-black border border-gray-700 hover:border-gray-600 transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                        <Apple className="w-5 h-5 text-black" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-300 uppercase tracking-wide">Download on the</div>
                        <div className="font-bold text-white text-sm">App Store</div>
                      </div>
                    </div>
                  </Card>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="cursor-pointer"
                >
                  <Card className="p-3 bg-green-600 border border-green-500 hover:border-green-400 transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                        <PlayCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <div className="text-xs text-green-100 uppercase tracking-wide">Get it on</div>
                        <div className="font-bold text-white text-sm">Google Play</div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}