import React, { useContext, useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Building2, 
  Clock, 
  Globe, 
  Users, 
  Shield, 
  HeadphonesIcon,
  MessageSquare,
  CheckCircle,
  Star,
  Heart,
  Zap,
  Calendar,
  Twitter,
  Linkedin,
  Instagram,
  Facebook,
  ExternalLink,
  ArrowRight,
  Copy,
  PhoneCall,
  Sparkles,
  TrendingUp,
  Award,
  User
} from "lucide-react";
import { NavigationContext } from "../App";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const contactChannels = [
  {
    icon: PhoneCall,
    title: "Customer Care Helpline",
    description: "24/7 support for all your DIGIDABBA needs",
    primary: "+91 484-2969-888",
    secondary: "Available 24/7 - Toll Free",
    responseTime: "Instant",
    gradient: "from-green-500 to-green-600",
    bgGradient: "from-green-50 to-green-100",
    action: "tel:+914842969888"
  },
  {
    icon: Mail,
    title: "Customer Care Email",
    description: "Get detailed responses to your inquiries",
    primary: "care@digidabba.com",
    secondary: "Available 24/7",
    responseTime: "< 6 hours",
    gradient: "from-blue-500 to-blue-600",
    bgGradient: "from-blue-50 to-blue-100",
    action: "mailto:care@digidabba.com"
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Support",
    description: "Quick queries and instant support",
    primary: "+91 9048-299-888",
    secondary: "Mon-Sat, 9AM-8PM IST",
    responseTime: "< 15 mins",
    gradient: "from-emerald-500 to-emerald-600",
    bgGradient: "from-emerald-50 to-emerald-100",
    action: "https://wa.me/919048299888"
  },
  {
    icon: Building2,
    title: "Partnership Desk",
    description: "Banking & institutional partnerships",
    primary: "partners@kanirofinance.com",
    secondary: "Dedicated relationship manager",
    responseTime: "< 24 hours",
    gradient: "from-purple-500 to-purple-600",
    bgGradient: "from-purple-50 to-purple-100",
    action: "mailto:partners@kanirofinance.com"
  }
];

const officeLocations = [
  {
    name: "Kochi Headquarters",
    address: "Innovation Campus, Kakkanad",
    city: "Kochi, Kerala 682030",
    country: "India",
    type: "Main Office",
    status: "Operating",
    timezone: "IST (UTC+5:30)",
    phone: "+91 484-XXX-XXXX",
    icon: Building2,
    features: ["Customer Support", "Product Development", "Banking Partnerships"],
    image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb2NoaSUyMGNpdHl8ZW58MXx8fHwxNzU1NTg4MTkxfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    name: "Bangalore Tech Hub",
    address: "Coming Q2 2025",
    city: "Bangalore, Karnataka",
    country: "India", 
    type: "Technology Center",
    status: "Launching Soon",
    timezone: "IST (UTC+5:30)",
    phone: "Coming Soon",
    icon: Zap,
    features: ["Engineering", "AI/ML Development", "Design Studio"],
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5nYWxvcmUlMjBjaXR5fGVufDF8fHx8MTc1NTU4ODE5MXww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    name: "Mumbai Business Center",
    address: "Planned 2025",
    city: "Mumbai, Maharashtra",
    country: "India",
    type: "Business Development",
    status: "Planning",
    timezone: "IST (UTC+5:30)", 
    phone: "Coming Soon",
    icon: TrendingUp,
    features: ["Business Development", "Strategic Partnerships", "Market Expansion"],
    image: "https://images.unsplash.com/photo-1595658658481-d53d3f999875?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdW1iYWklMjBjaXR5fGVufDF8fHx8MTc1NTU4ODE5MXww&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

const teamMembers = [
  {
    name: "Priya Sharma", 
    role: "Customer Success Lead",
    email: "priya@kanirofinance.com",
    expertise: "Customer Onboarding & Support",
    image: "https://images.unsplash.com/photo-1494790108755-2616b332800d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbnxlbnwxfHx8fDE3NTU1ODgxOTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    name: "Rajesh Kumar",
    role: "Technical Support Manager", 
    email: "rajesh@kanirofinance.com",
    expertise: "Platform Integration & Technical Issues",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW58ZW58MXx8fHwxNzU1NTg4MTkxfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    name: "Dr. Anita Menon",
    role: "Partnership Director",
    email: "anita@kanirofinance.com", 
    expertise: "Banking Partnerships & Compliance",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGJ1c2luZXNzfGVufDF8fHx8MTc1NTU4ODE5MXww&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

const supportStats = [
  { 
    value: "< 6h", 
    label: "Avg Response Time", 
    gradient: "from-blue-500 to-blue-600",
    icon: Clock
  },
  { 
    value: "98.5%", 
    label: "Customer Satisfaction", 
    gradient: "from-green-500 to-green-600",
    icon: Heart
  },
  { 
    value: "24/7", 
    label: "Email Support", 
    gradient: "from-purple-500 to-purple-600",
    icon: Mail
  },
  { 
    value: "15+", 
    label: "Support Languages", 
    gradient: "from-orange-500 to-orange-600",
    icon: Globe
  }
];

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/company/kaniro-financial",
    gradient: "from-blue-600 to-blue-700",
    followers: "2.5K"
  },
  {
    name: "Twitter",
    icon: Twitter, 
    url: "https://twitter.com/kanirofinance",
    gradient: "from-sky-500 to-sky-600",
    followers: "1.8K"
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/kanirofinance", 
    gradient: "from-pink-500 to-rose-500",
    followers: "950"
  },
  {
    name: "Facebook",
    icon: Facebook,
    url: "https://facebook.com/kanirofinance",
    gradient: "from-blue-600 to-indigo-600", 
    followers: "1.2K"
  }
];

const faqs = [
  {
    question: "How quickly can I get started with DigiDabba?",
    answer: "You can start immediately after completing our simple 5-minute onboarding process. Our team provides personalized guidance to help you choose the right savings or repayment plan."
  },
  {
    question: "What makes DigiDabba different from traditional banks?",
    answer: "We focus specifically on micro-deposits starting from ₹10 and flexible NPA repayments, designed for Tier 2/3 India with mobile-first experience and culturally relevant solutions."
  },
  {
    question: "How secure are my transactions and personal data?",
    answer: "We use bank-grade encryption and work directly with RBI-approved partner banks. Your funds remain with trusted banking institutions while we provide the digital interface."
  },
  {
    question: "Can businesses partner with DigiDabba for employee benefits?",
    answer: "Yes! We offer corporate partnerships for employee financial wellness programs. Contact our partnership team to discuss custom solutions for your organization."
  },
  {
    question: "What support is available in regional languages?",
    answer: "We provide support in 15+ Indian languages including Hindi, Tamil, Telugu, Malayalam, Kannada, Bengali, Gujarati, Marathi, and more through our multilingual support team."
  },
  {
    question: "How does DigiDabba Design Studio work?",
    answer: "Our design studio offers specialized BFSI design services including banking UX research, design systems, and compliance-focused design solutions. Contact us for a consultation."
  }
];

export function ContactSection() {
  const { setNavigation } = useContext(NavigationContext);
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const handleCopyEmail = async (email: string) => {
    try {
      await navigator.clipboard.writeText(email);
      setCopiedEmail(email);
      setTimeout(() => setCopiedEmail(null), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

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
          {/* Header Section */}
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
                <HeadphonesIcon className="size-4" />
              </motion.div>
              Always Here to Help
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
                Connect With
              </span>
              <br />
              <span className="text-gray-900">Team DigiDabba</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Multiple ways to reach us for support, partnerships, or questions about our financial inclusion platform. 
              We're committed to providing exceptional service across all touchpoints.
            </motion.p>
          </motion.div>

          {/* Enhanced Support Statistics - Premium Display */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose <span className="text-[#22C55E]">DIGIDABBA</span> Support?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our commitment to excellence shows in every interaction and support metric
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.7 + index * 0.15 }}
                  whileHover={{ scale: 1.08, y: -5 }}
                  className="group"
                >
                  <Card className="p-8 text-center bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden h-full">
                    {/* Dynamic background */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-5 group-hover:opacity-10`}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Floating animation elements */}
                    <motion.div
                      className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${stat.gradient} opacity-10 rounded-full -mr-10 -mt-10`}
                      animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                      transition={{ duration: 15 + index * 2, repeat: Infinity, ease: "linear" }}
                    />
                    
                    <div className="relative z-10">
                      {/* Enhanced icon display */}
                      <motion.div
                        className={`w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                        animate={{ 
                          scale: [1, 1.05, 1],
                          boxShadow: [
                            "0 4px 20px rgba(0,0,0,0.1)",
                            "0 8px 30px rgba(0,0,0,0.15)",
                            "0 4px 20px rgba(0,0,0,0.1)"
                          ]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          ease: "easeInOut", 
                          delay: index * 0.3 
                        }}
                      >
                        <stat.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      
                      {/* Value display */}
                      <motion.div 
                        className={`text-4xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-3`}
                        animate={{ scale: [1, 1.02, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                      >
                        {stat.value}
                      </motion.div>
                      
                      {/* Label */}
                      <div className="font-bold text-gray-700 text-lg leading-tight">{stat.label}</div>
                      
                      {/* Decorative line */}
                      <motion.div
                        className={`w-12 h-1 bg-gradient-to-r ${stat.gradient} rounded-full mx-auto mt-4`}
                        animate={{ width: [48, 64, 48] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                      />
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Additional trust messaging */}
            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <div className="inline-flex items-center gap-4 bg-gradient-to-r from-gray-50 to-blue-50 px-8 py-4 rounded-2xl border border-gray-200">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Award className="size-6 text-[#22C55E]" />
                </motion.div>
                <span className="text-gray-700 font-medium">
                  Trusted by <span className="font-bold text-[#1E4A72]">50,000+</span> users across India
                </span>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Star className="size-6 text-yellow-500 fill-current" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Contact Channels - Main Focus */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="text-center mb-16">
              <motion.div
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#1E4A72] to-[#22C55E] text-white px-6 py-3 rounded-full mb-6"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <HeadphonesIcon className="size-5" />
                <span className="font-bold">24/7 Customer Support</span>
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Multiple Ways to <span className="text-[#22C55E]">Connect</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Choose your preferred channel for instant support. Our dedicated team is always ready to help you with deposits, repayments, or any DIGIDABBA questions.
              </p>
            </div>

            {/* Primary Contact Cards - Enhanced Layout */}
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {contactChannels.slice(0, 3).map((channel, index) => (
                <motion.div
                  key={channel.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.9 + index * 0.2 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="group"
                >
                  <Card className="relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 h-full">
                    {/* Dynamic gradient background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${channel.gradient} opacity-95`} />
                    
                    {/* Animated background elements */}
                    <motion.div
                      className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"
                      animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.div
                      className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12"
                      animate={{ rotate: -360, scale: [1, 1.3, 1] }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    />
                    
                    <div className="relative z-10 p-8 text-white h-full flex flex-col">
                      {/* Header with icon and response time */}
                      <div className="flex items-start justify-between mb-6">
                        <motion.div
                          className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300"
                          whileHover={{ rotate: 15 }}
                        >
                          <channel.icon className="w-8 h-8 text-white" />
                        </motion.div>
                        
                        <motion.div
                          className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium"
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
                        >
                          ⚡ {channel.responseTime}
                        </motion.div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-3">{channel.title}</h3>
                        <p className="text-white/90 mb-6 leading-relaxed">{channel.description}</p>
                        
                        {/* Contact details */}
                        <div className="space-y-4 mb-8">
                          <div className="flex items-center justify-between bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                            <span className="font-bold text-lg">{channel.primary}</span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleCopyEmail(channel.primary)}
                              className="text-white hover:bg-white/20 p-2"
                            >
                              {copiedEmail === channel.primary ? (
                                <CheckCircle className="w-5 h-5 text-green-300" />
                              ) : (
                                <Copy className="w-5 h-5" />
                              )}
                            </Button>
                          </div>
                          <div className="flex items-center gap-3 text-white/80">
                            <Clock className="w-5 h-5" />
                            <span className="font-medium">{channel.secondary}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Action button */}
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button 
                          className="w-full bg-white/20 hover:bg-white/30 text-white border-0 backdrop-blur-sm font-bold py-3 text-lg"
                          onClick={() => window.open(channel.action, '_blank')}
                        >
                          Contact Now
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                      </motion.div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Partnership Contact - Special Card */}
            {contactChannels.length > 3 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="max-w-4xl mx-auto"
              >
                <Card className="p-8 bg-gradient-to-r from-purple-50 via-purple-100 to-indigo-50 border border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                  <motion.div
                    className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-200/30 to-indigo-200/30 rounded-full -mr-20 -mt-20"
                    animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  />
                  
                  <div className="relative z-10 grid md:grid-cols-3 gap-8 items-center">
                    <div className="md:col-span-2">
                      <div className="flex items-center gap-4 mb-4">
                        <motion.div
                          className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <Building2 className="w-8 h-8 text-white" />
                        </motion.div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{contactChannels[3].title}</h3>
                          <p className="text-purple-700 font-medium">{contactChannels[3].description}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Mail className="w-5 h-5 text-purple-600" />
                          <span className="font-bold text-gray-900">{contactChannels[3].primary}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Clock className="w-5 h-5 text-purple-600" />
                          <span className="text-gray-700">{contactChannels[3].secondary}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center md:text-right">
                      <Button 
                        className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white border-0 px-8 py-3"
                        onClick={() => window.open(contactChannels[3].action, '_blank')}
                      >
                        Contact Partnership Team
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )}
          </motion.div>

          {/* Office Locations */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Locations</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Growing across India to serve you better. Visit us or connect with our local teams.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {officeLocations.map((office, index) => (
                <motion.div
                  key={office.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm group">
                    <div className="relative h-48 overflow-hidden">
                      <ImageWithFallback
                        src={office.image}
                        alt={office.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge 
                          className={`${
                            office.status === 'Operating' 
                              ? 'bg-green-500 hover:bg-green-600' 
                              : office.status === 'Launching Soon'
                              ? 'bg-orange-500 hover:bg-orange-600'
                              : 'bg-gray-500 hover:bg-gray-600'
                          } text-white border-0`}
                        >
                          {office.status}
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <div className="w-10 h-10 bg-white/90 rounded-lg flex items-center justify-center">
                          <office.icon className="w-5 h-5 text-gray-700" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="font-bold text-gray-900 mb-2">{office.name}</h3>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <MapPin className="w-4 h-4" />
                          <span>{office.address}</span>
                        </div>
                        <div className="text-sm text-gray-600">{office.city}, {office.country}</div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Clock className="w-4 h-4" />
                          <span>{office.timezone}</span>
                        </div>
                        {office.phone !== "Coming Soon" && (
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Phone className="w-4 h-4" />
                            <span>{office.phone}</span>
                          </div>
                        )}
                      </div>
                      
                      <div className="space-y-2 mb-4">
                        <h4 className="text-sm font-medium text-gray-900">Services</h4>
                        <div className="flex flex-wrap gap-1">
                          {office.features.map((feature, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <Badge variant="outline" className="w-full justify-center">
                        {office.type}
                      </Badge>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Team Members */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Connect directly with our experts who are passionate about financial inclusion and customer success.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <Card className="p-6 text-center bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                    <motion.div
                      className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-100/50 to-green-100/50 rounded-full blur-xl"
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
                      <div className="w-20 h-20 mx-auto mb-4 rounded-2xl overflow-hidden">
                        <ImageWithFallback
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <h3 className="font-bold text-gray-900 mb-1">{member.name}</h3>
                      <p className="text-sm text-blue-600 font-medium mb-2">{member.role}</p>
                      <p className="text-xs text-gray-600 mb-4">{member.expertise}</p>
                      
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="w-full"
                        onClick={() => window.open(`mailto:${member.email}`, '_blank')}
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Contact
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Social Media & Community */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Follow Our Journey</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Stay updated with our latest innovations, insights, and community stories across social platforms.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={social.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="p-6 text-center bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
                    <motion.div
                      className={`w-12 h-12 bg-gradient-to-br ${social.gradient} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 10 }}
                    >
                      <social.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    
                    <h3 className="font-bold text-gray-900 mb-2">{social.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">{social.followers} followers</p>
                    
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="w-full group-hover:border-blue-300"
                      onClick={() => window.open(social.url, '_blank')}
                    >
                      Follow
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Quick answers to common questions. Can't find what you're looking for? Reach out to our team directly.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    <h4 className="font-semibold text-gray-900 mb-3">{faq.question}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
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
              
              <div className="relative z-10">
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full mb-6"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Sparkles className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Financial Future?</h3>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  Join thousands of users building financial resilience through our micro-deposit and flexible repayment solutions. 
                  Start your journey today with as little as ₹10.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 px-8 py-3 text-lg shadow-lg hover:shadow-xl"
                    onClick={() => setNavigation({ showSignupModal: true })}
                  >
                    Start Your Journey
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button 
                    variant="outline" 
                    className="px-8 py-3 text-lg border-blue-200 hover:border-blue-300 hover:bg-blue-50"
                    onClick={() => setNavigation({ currentView: 'about' })}
                  >
                    Learn More About Us
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}