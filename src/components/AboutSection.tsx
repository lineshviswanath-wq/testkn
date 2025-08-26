import React, { useContext } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { motion } from "motion/react";
import { 
  TrendingUp, 
  CreditCard, 
  Target, 
  Users, 
  Building2, 
  Zap, 
  Shield, 
  BookOpen,
  Palette,
  BarChart3,
  Lightbulb,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Globe,
  Award,
  Heart
} from "lucide-react";
import { NavigationContext } from "../App";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutSection() {
  const { setNavigation } = useContext(NavigationContext);

  const handleExploreDesignStudio = () => {
    setNavigation({ currentView: 'kancx' });
  };

  const handleGetStarted = () => {
    setNavigation({ showSignupModal: true });
  };

  const platformFeatures = [
    {
      icon: TrendingUp,
      title: "Micro Deposits",
      description: "A comprehensive marketplace for small-ticket savings across multiple partner banks, enabling financial inclusion starting from just ₹10/day for underserved communities.",
      features: ["Start saving from ₹10/day", "Multiple bank partnerships", "Automated daily savings", "Mobile-first experience"],
      gradient: "from-green-500 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-50"
    },
    {
      icon: CreditCard,
      title: "NPA Repayments",
      description: "Flexible daily/weekly repayment solutions for overdue loans, helping customers improve credit scores while reducing financial stress through manageable payment schedules.",
      features: ["Flexible daily/weekly payments", "Credit score improvement", "Reduced penalty charges", "Stress-free repayment"],
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50"
    }
  ];

  const designServices = [
    {
      icon: BarChart3,
      title: "Banking Customer Research",
      description: "Deep analysis of banking behaviors, financial needs, and pain points specific to Indian Tier 2/3 customers, uncovering insights that drive informed design decisions.",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: Zap,
      title: "Digital Banking UX Strategy",
      description: "Design-thinking driven banking strategies that align digital features with real financial market demands and customer behavioral patterns for maximum impact.",
      gradient: "from-indigo-500 to-indigo-600"
    },
    {
      icon: Palette,
      title: "Design System Creation",
      description: "Comprehensive design system development for banking products, creating scalable component libraries and design standards that ensure consistency across all touchpoints.",
      gradient: "from-teal-500 to-teal-600"
    },
    {
      icon: Building2,
      title: "Banking Design Systems",
      description: "Scalable banking design systems ensuring consistency across mobile, web, and omni-channel banking touchpoints with comprehensive component libraries.",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      icon: Shield,
      title: "BFSI Compliance Design",
      description: "Specialized design solutions ensuring regulatory compliance while maintaining excellent user experience across all banking and financial service touchpoints.",
      gradient: "from-rose-500 to-rose-600"
    },
    {
      icon: Lightbulb,
      title: "Design Thinking Framework",
      description: "Proven methodology for understanding and solving complex banking experience challenges through systematic design thinking and customer-centered approach.",
      gradient: "from-emerald-500 to-emerald-600"
    }
  ];

  const impactStats = [
    { value: "450M+", label: "Target Users in Tier 2/3 India", gradient: "from-blue-500 to-blue-600" },
    { value: "25+", label: "Banking & NBFC Partnerships", gradient: "from-green-500 to-green-600" },
    { value: "₹10", label: "Minimum Daily Savings Amount", gradient: "from-purple-500 to-purple-600" },
    { value: "100%", label: "Digital Banking Focus", gradient: "from-orange-500 to-orange-600" }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-green-50/30 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"
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
        className="absolute bottom-40 left-20 w-64 h-64 bg-gradient-to-br from-green-200/30 to-blue-200/30 rounded-full blur-3xl"
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

      <div className="container mx-auto px-4 py-16 relative">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-green-100 text-blue-800 px-4 py-2 rounded-full mb-6 border border-blue-200"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="size-4" />
              </motion.div>
              About Kaniro Financial Services
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
                Empowering Financial
              </span>
              <br />
              <span className="text-gray-900">Inclusion Through Innovation</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Kaniro Financial Services is building an omni-channel digital platform to address two critical gaps 
              in the Indian financial ecosystem: accessible micro-deposits and flexible NPA repayments for Tier 2/3 India.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button 
                className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 px-8 py-3 text-lg shadow-lg hover:shadow-xl group"
                onClick={handleGetStarted}
              >
                Start Your Journey
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight className="size-5 ml-2" />
                </motion.div>
              </Button>
              <Button 
                variant="outline" 
                className="px-8 py-3 text-lg border-blue-200 hover:border-blue-300 hover:bg-blue-50"
                onClick={handleExploreDesignStudio}
              >
                Explore Design Studio
              </Button>
            </motion.div>
          </motion.div>

          {/* Mission Section */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <motion.h2 
                className="text-4xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Our Mission
              </motion.h2>
              <motion.div 
                className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mb-6 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              />
            </div>
            
            <Card className="p-12 bg-gradient-to-br from-white via-blue-50/50 to-green-50/50 border-0 shadow-xl relative overflow-hidden">
              <motion.div
                className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-green-200/20 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: 360,
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-green-200/20 to-blue-200/20 rounded-full blur-xl"
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
              
              <div className="relative z-10 text-center">
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full mb-6"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Heart className="w-8 h-8 text-white" />
                </motion.div>
                <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                  To empower Tier 2/3 India with accessible, small-ticket financial services that promote financial 
                  inclusion and help build stronger households and communities through innovative digital solutions.
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Kaniro Dabba Platform Section */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <motion.h2 
                className="text-4xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  Kaniro Dabba Platform
                </span>
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our core financial inclusion platform addressing critical gaps in the Indian banking ecosystem
              </motion.p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              {platformFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="group"
                >
                  <Card className={`p-8 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br ${feature.bgGradient} relative overflow-hidden`}>
                    <motion.div
                      className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"
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
                    
                    <div className="relative z-10">
                      <motion.div
                        className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                        whileHover={{ rotate: 5 }}
                      >
                        <feature.icon className="w-10 h-10 text-white" />
                      </motion.div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                      <p className="text-gray-700 mb-6 leading-relaxed">{feature.description}</p>
                      
                      <ul className="space-y-3">
                        {feature.features.map((item, idx) => (
                          <motion.li 
                            key={idx}
                            className="flex items-center gap-3 text-gray-700"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <div className={`w-2 h-2 bg-gradient-to-r ${feature.gradient} rounded-full flex-shrink-0`} />
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Kaniro Design Studio Section */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <motion.h2 
                className="text-4xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Kaniro Design Studio
                </span>
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-600 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Exclusive design studio for BFSI products, transforming digital banking through design-first methodology 
                and deep understanding of Indian financial market needs
              </motion.p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {designServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="group"
                >
                  <Card className="p-8 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm relative overflow-hidden h-full">
                    <motion.div
                      className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-100/50 to-indigo-100/50 rounded-full blur-xl"
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: 360,
                      }}
                      transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    
                    <div className="relative z-10">
                      <motion.div
                        className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                        whileHover={{ rotate: 10 }}
                      >
                        <service.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      
                      <h3 className="text-lg font-bold text-gray-900 mb-4">{service.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button 
                className="px-10 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-lg shadow-lg hover:shadow-xl group"
                onClick={handleExploreDesignStudio}
              >
                <Palette className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Explore Kaniro Design Studio
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </motion.div>
          </motion.div>
            
          {/* Impact Stats */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <motion.h2 
                className="text-4xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Our Impact
              </motion.h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {impactStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="p-8 text-center bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-5`}
                      whileHover={{ opacity: 0.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    <div className="relative z-10">
                      <motion.div 
                        className={`text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-3`}
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                      >
                        {stat.value}
                      </motion.div>
                      <div className="text-sm text-gray-600 leading-tight">{stat.label}</div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Financial Inclusion Commitment */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-12 bg-gradient-to-br from-blue-50 via-white to-green-50 border-0 shadow-2xl relative overflow-hidden">
              <motion.div
                className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-200/20 to-green-200/20 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-green-200/20 to-blue-200/20 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: -360,
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <div className="relative z-10 text-center">
                <motion.div
                  className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-green-500 rounded-full mb-8"
                  whileHover={{ scale: 1.1, rotate: 15 }}
                  transition={{ duration: 0.3 }}
                >
                  <Globe className="w-10 h-10 text-white" />
                </motion.div>
                
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Supporting Financial Inclusion</h3>
                <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                  Kaniro Financial Services is committed to supporting the government's financial inclusion agenda by 
                  providing innovative digital solutions that bridge the gap between traditional banking and the unique 
                  needs of underserved communities across India.
                </p>
                
                <motion.div 
                  className="flex flex-wrap justify-center gap-6 mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  {["Digital First", "Inclusive Design", "Affordable Access", "Community Impact"].map((feature, index) => (
                    <motion.div
                      key={feature}
                      className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-sm"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm font-medium text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}