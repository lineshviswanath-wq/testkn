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
  Download,
  Smartphone
} from "lucide-react";
import { NavigationContext } from "../App";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutSection() {
  const { setNavigation } = useContext(NavigationContext);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, 50]);

  const handleProductClick = (product: 'dabbasave' | 'dabbapay' | 'fintx-studio') => {
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
      subtitle: 'Micro Savings & Deposits',
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
      subtitle: 'NPA Repayments & Loans',
      description: 'Flexible daily/weekly repayment solutions for overdue loans, helping customers improve credit scores while reducing financial stress.',
      icon: CreditCard,
      gradient: 'from-blue-500 via-indigo-500 to-purple-500',
      bgGradient: 'from-blue-50 via-indigo-50 to-purple-50',
      features: ['Flexible payments', 'Credit score improvement', 'Reduced penalties', 'Stress-free repayment'],
      color: 'blue'
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
                
                <motion.h1 
                  className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <span className="bg-gradient-to-r from-purple-600 via-pink-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    Empowering Financial
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
                    Inclusion Through Innovation
                  </span>
                </motion.h1>
                
                <motion.p 
                  className="text-xl text-gray-700 leading-relaxed mb-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  We aim to bridge critical gaps in India's financial ecosystem by enabling accessible micro-deposits, 
                  flexible NPA repayments, and intuitive digital-first solutions. Designed to serve urban, rural, and 
                  household needs alike, our approach ensures inclusivity across every segment of society. By empowering 
                  individuals, families, and communities with simple yet powerful financial tools, we foster discipline, 
                  resilience, and long-term growth for all.
                </motion.p>
                
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
                  Our Products
                </span>
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-700 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Three innovative solutions designed to transform the Indian financial landscape
              </motion.p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
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
                      
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
                        <p className="text-lg text-gray-700 font-medium mb-3">{product.subtitle}</p>
                        <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>
                      </div>
                      
                      <ul className="space-y-3 mb-8">
                        {product.features.map((feature, idx) => (
                          <motion.li 
                            key={idx}
                            className="flex items-center gap-3 text-gray-700"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <CheckCircle className="size-5 text-green-600 flex-shrink-0" />
                            {feature}
                          </motion.li>
                        ))}
                      </ul>

                      <Button 
                        className={`w-full bg-gradient-to-r ${product.gradient} hover:opacity-90 group-hover:shadow-lg transition-all duration-300`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleProductClick(product.id as any);
                        }}
                      >
                        Explore {product.name}
                        <ArrowRight className="size-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
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
                <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
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
                Real stories from customers who transformed their financial lives with DABBA
              </motion.p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  className="group"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <Card className="p-8 h-full bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                    <motion.div
                      className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-300/30 to-pink-300/30 rounded-full blur-xl"
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
                    
                    {/* Colorful accent elements for testimonials */}
                    <motion.div
                      className="absolute -top-1 -left-1 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full"
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <motion.div
                      className="absolute -bottom-2 -right-2 w-6 h-6 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-70"
                      animate={{
                        y: [0, -5, 0],
                        x: [0, 3, 0],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    
                    <div className="relative z-10">
                      {/* Rating Stars */}
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
                          <div className="text-xs text-gray-500">Total Saved</div>
                        </div>
                      </div>
                    </div>
                  </Card>
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
            <Card className="p-12 lg:p-16 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 border-0 shadow-2xl relative overflow-hidden">
              {/* Background animations */}
              <motion.div
                className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"
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
              
              <div className="relative z-10 text-center text-white">
                <motion.h2 
                  className="text-4xl lg:text-5xl font-bold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Get in Touch
                  </span>
                </motion.h2>
                
                <motion.p 
                  className="text-xl opacity-90 mb-12 max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Have questions about our financial solutions? Our team is here to help you on your journey to financial freedom.
                </motion.p>

                <motion.div 
                  className="grid md:grid-cols-3 gap-8 mb-12"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mb-4">
                      <Phone className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-lg font-semibold mb-2">Call Us</div>
                    <div className="text-blue-300">{customerCareInfo.phone}</div>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mb-4">
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-lg font-semibold mb-2">Email Us</div>
                    <div className="text-purple-300">{customerCareInfo.email}</div>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mb-4">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-lg font-semibold mb-2">Visit Us</div>
                    <div className="text-green-300">{customerCareInfo.address}</div>
                  </div>
                </motion.div>

                <motion.div 
                  className="text-sm opacity-75"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  Support Hours: {customerCareInfo.hours}
                </motion.div>
              </div>
            </Card>
          </motion.div>

          {/* App Download Section */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <Card className="p-12 lg:p-16 bg-gradient-to-br from-purple-900 via-pink-900 via-blue-900 to-cyan-900 border-0 shadow-2xl relative overflow-hidden">
                {/* Animated Background Elements */}
                <motion.div
                  className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"
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
                  className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: -360,
                  }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Floating Decorative Icons */}
                <motion.div
                  className="absolute top-8 left-8 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Smartphone className="w-6 h-6 text-white/70" />
                </motion.div>
                <motion.div
                  className="absolute bottom-8 right-8 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center"
                  animate={{
                    y: [0, 10, 0],
                    rotate: [0, -360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Download className="w-6 h-6 text-white/70" />
                </motion.div>
                
                <div className="relative z-10 text-center text-white">
                  <motion.div
                    className="inline-flex items-center gap-2 bg-white/20 text-white px-6 py-3 rounded-full mb-8 backdrop-blur-sm"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                      <Download className="size-5" />
                    </motion.div>
                    <span className="font-semibold">
                      Download DUBB App Today
                    </span>
                  </motion.div>
                  
                  <motion.h2 
                    className="text-4xl lg:text-5xl font-bold mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <span className="bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                      Start Your Financial Journey
                    </span>
                  </motion.h2>
                  
                  <motion.p 
                    className="text-xl opacity-90 mb-12 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    Join millions who are building their financial future with DUBB. Start saving from just ₹10/day and watch your money grow.
                  </motion.p>

                  <motion.div 
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    {/* App Store Button */}
                    <motion.a
                      href="#"
                      className="group relative"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-2xl flex items-center gap-4 transition-all duration-300 shadow-2xl">
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                          <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                          </svg>
                        </div>
                        <div className="text-left">
                          <div className="text-xs opacity-80">Download on the</div>
                          <div className="text-lg font-semibold">App Store</div>
                        </div>
                      </div>
                    </motion.a>

                    {/* Google Play Button */}
                    <motion.a
                      href="#"
                      className="group relative"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-2xl flex items-center gap-4 transition-all duration-300 shadow-2xl">
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                            <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92z" fill="#32BBFF"/>
                            <path d="M20.683 10.747l-2.85-1.644-4.040 2.897 4.040 2.897 2.85-1.644a1 1 0 000-1.506z" fill="#32BBFF"/>
                            <path d="M13.792 12L3.61 1.814 17.832 9.103 13.792 12z" fill="#32BBFF"/>
                            <path d="M13.792 12l4.040 2.897L3.61 22.186 13.792 12z" fill="#32BBFF"/>
                          </svg>
                        </div>
                        <div className="text-left">
                          <div className="text-xs opacity-80">GET IT ON</div>
                          <div className="text-lg font-semibold">Google Play</div>
                        </div>
                      </div>
                    </motion.a>
                  </motion.div>

                  <motion.div 
                    className="flex justify-center items-center gap-8 mt-12 text-white/70"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      <span className="text-lg font-semibold">4.8</span>
                      <span className="text-sm">App Rating</span>
                    </div>
                    <div className="h-6 w-px bg-white/30"></div>
                    <div className="flex items-center gap-2">
                      <Download className="w-5 h-5" />
                      <span className="text-lg font-semibold">1M+</span>
                      <span className="text-sm">Downloads</span>
                    </div>
                  </motion.div>
                </div>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}