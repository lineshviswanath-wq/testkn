import React, { useContext } from "react";
import { HeroSectionWithContact } from "./HeroSectionWithContact";
import { DepositCalculator } from "./DepositCalculator";
import { MicroDepositsSection } from "./MicroDepositsSection";
import { PartnerBanksCard } from "./PartnerBanksCard";
import { ContactSection } from "./ContactSection";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";
import { 
  TrendingUp, 
  Shield, 
  Target, 
  CreditCard, 
  Building2, 
  CheckCircle, 
  ArrowRight,
  Heart,
  Globe,
  Sparkles,
  IndianRupee,
  Clock,
  Users,
  Award,
  Star
} from "lucide-react";
import { NavigationContext } from "../App";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function DabbaSavePage() {
  const { setNavigation } = useContext(NavigationContext);

  const features = [
    {
      icon: TrendingUp,
      title: "Micro Deposits",
      description: "Start with just ₹10/day and build your wealth systematically",
      highlight: "₹10/day",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Shield,
      title: "Bank-Level Security",
      description: "Your deposits are secured in partnered banks with 100% safety guarantee",
      highlight: "100% Safe",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Target,
      title: "Goal-Based Savings",
      description: "Set and achieve your financial goals with automated micro-savings",
      highlight: "Smart Goals",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Building2,
      title: "Multiple Partner Banks",
      description: "Access savings products from multiple partner banks in one place",
      highlight: "8+ Banks",
      color: "from-orange-500 to-red-500"
    }
  ];

  const benefits = [
    {
      title: "Financial Inclusion for All",
      description: "Designed for urban, rural, and household needs across every segment of society",
      icon: Heart,
      stats: "Serving 1M+ families"
    },
    {
      title: "Traditional + Digital",
      description: "Combines the trust of traditional 'Dabba' savings with modern technology",
      icon: Globe,
      stats: "Best of both worlds"
    },
    {
      title: "Flexible & Convenient",
      description: "Daily, weekly, or monthly deposits with omnichannel access",
      icon: Clock,
      stats: "24/7 availability"
    },
    {
      title: "Community Impact",
      description: "Empowering individuals, families, and communities for long-term growth",
      icon: Users,
      stats: "Growing together"
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

  const savingsPlans = [
    {
      name: "Basic Saver",
      dailyAmount: "₹10",
      monthlyTotal: "₹300",
      yearlyTotal: "₹3,650",
      interest: "6.5%",
      features: ["Bank security", "Flexible deposits", "Mobile app access"],
      popular: false
    },
    {
      name: "Smart Saver",
      dailyAmount: "₹25",
      monthlyTotal: "₹750",
      yearlyTotal: "₹9,125",
      interest: "7.0%",
      features: ["Higher interest", "Priority support", "Goal tracking", "Bonus rewards"],
      popular: true
    },
    {
      name: "Super Saver",
      dailyAmount: "₹50",
      monthlyTotal: "₹1,500",
      yearlyTotal: "₹18,250",
      interest: "7.5%",
      features: ["Maximum returns", "Premium support", "Investment options", "Financial advisory"],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - DABBA SAVE Specific */}
      <section className="bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 py-12 md:py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6">
                <Badge className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2">
                  DABBA SAVE - Digital Micro Deposits
                </Badge>
                
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Save <span className="text-green-600">₹10 Today,</span><br />
                  Build <span className="text-blue-600">₹1 Lakh Tomorrow!</span>
                </h1>
                
                <p className="text-xl text-gray-700 leading-relaxed">
                  Transform the traditional "Dabba" savings into a powerful digital wealth-building platform. 
                  Start with micro-deposits as low as ₹10 and watch your money grow with bank-level security.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">₹10</div>
                    <div className="text-sm text-gray-600">Min. Daily</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">7.5%</div>
                    <div className="text-sm text-gray-600">Max. Interest</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">8+</div>
                    <div className="text-sm text-gray-600">Partner Banks</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">100%</div>
                    <div className="text-sm text-gray-600">Bank Safe</div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8"
                  onClick={() => setNavigation({ showSignupModal: true })}
                >
                  Start Saving Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-green-500 text-green-600 hover:bg-green-50"
                >
                  Calculate Returns
                  <TrendingUp className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </motion.div>
            
            {/* Visual */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative bg-white p-8 rounded-3xl shadow-2xl">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full mb-4">
                    <IndianRupee className="w-4 h-4" />
                    <span className="font-semibold">Your Savings Journey</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl">
                    <div>
                      <div className="text-sm text-gray-600">Daily Deposit</div>
                      <div className="text-lg font-bold text-gray-900">₹25</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-600">Monthly Total</div>
                      <div className="text-lg font-bold text-green-600">₹750</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                    <div>
                      <div className="text-sm text-gray-600">After 1 Year</div>
                      <div className="text-lg font-bold text-blue-600">₹9,125</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-600">With Interest</div>
                      <div className="text-lg font-bold text-purple-600">₹9,763</div>
                    </div>
                  </div>
                  
                  <div className="text-center p-4 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-xl">
                    <div className="text-sm opacity-90">Your Financial Growth</div>
                    <div className="text-2xl font-bold">+7% Annual Returns</div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div 
                className="absolute -top-4 -right-4 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white shadow-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Shield className="w-8 h-8" />
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-xl"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                <TrendingUp className="w-8 h-8" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-2 mb-6">
              Why Choose DABBA SAVE?
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Revolutionary Savings Platform
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Experience the perfect blend of traditional savings wisdom and cutting-edge financial technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="p-6 h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white relative overflow-hidden">
                  <motion.div
                    className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${feature.color} opacity-10 rounded-full -mr-10 -mt-10`}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                  
                  <div className="relative z-10">
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                      whileHover={{ rotate: 10 }}
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    <Badge className="bg-gray-100 text-gray-800 mb-3">{feature.highlight}</Badge>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Savings Plans Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Choose Your <span className="text-green-600">Savings Plan</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Start small, dream big. Every rupee counts towards your financial freedom
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {savingsPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <Card className={`p-8 h-full border-2 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden ${
                  plan.popular 
                    ? 'border-green-500 bg-gradient-to-br from-green-50 to-blue-50' 
                    : 'border-gray-200 bg-white'
                }`}>
                  {plan.popular && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <Badge className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-1">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-green-600">{plan.dailyAmount}</span>
                      <span className="text-gray-600 ml-2">per day</span>
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Monthly Total:</span>
                        <span className="font-semibold">{plan.monthlyTotal}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Yearly Total:</span>
                        <span className="font-semibold">{plan.yearlyTotal}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Interest Rate:</span>
                        <span className="font-bold text-green-600">{plan.interest}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      className={`w-full ${
                        plan.popular 
                          ? 'bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600' 
                          : 'bg-gray-900 hover:bg-gray-800'
                      }`}
                    >
                      Start Saving Now
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <DepositCalculator />

      {/* Micro Deposits Section */}
      <MicroDepositsSection />

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-green-50 to-purple-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Impact & Benefits
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              More than just savings - we're building a financially inclusive India
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white">
                  <div className="flex items-start gap-6">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center flex-shrink-0"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      <benefit.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-3">{benefit.description}</p>
                      <Badge className="bg-gradient-to-r from-blue-100 to-green-100 text-blue-800">
                        {benefit.stats}
                      </Badge>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Success Stories
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Real people, real savings, real impact across India
            </p>
          </motion.div>

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
                      <div className="text-xs text-gray-500">in {testimonial.duration}</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              How <span className="text-green-600">DABBA SAVE</span> Works
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Simple steps to start your digital savings journey with traditional trust
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Sign Up",
                description: "Create your DABBA SAVE account in just 2 minutes with basic KYC",
                icon: Users,
                color: "from-green-500 to-emerald-500"
              },
              {
                step: "02", 
                title: "Choose Plan",
                description: "Select your daily deposit amount starting from just ₹10",
                icon: Target,
                color: "from-blue-500 to-cyan-500"
              },
              {
                step: "03",
                title: "Auto Deposit",
                description: "Set up automatic transfers or deposit manually as per your convenience",
                icon: CreditCard,
                color: "from-purple-500 to-pink-500"
              },
              {
                step: "04",
                title: "Watch Grow",
                description: "Track your savings growth with real-time updates and interest calculations",
                icon: TrendingUp,
                color: "from-orange-500 to-red-500"
              }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <motion.div
                    className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center mx-auto shadow-xl`}
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <step.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-xs font-bold text-gray-700">{step.step}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Trust Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Your Money is <span className="text-blue-600">100% Safe</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Built with bank-grade security and regulatory compliance for complete peace of mind
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Bank-Level Security",
                description: "All deposits are secured in FDIC-insured partner banks with 256-bit encryption",
                icon: Shield,
                features: ["FDIC Insured", "256-bit SSL", "Multi-factor Auth", "Fraud Protection"]
              },
              {
                title: "Regulatory Compliance", 
                description: "Fully compliant with RBI guidelines and financial regulations",
                icon: CheckCircle,
                features: ["RBI Approved", "KYC Verified", "AML Compliant", "Regular Audits"]
              },
              {
                title: "Transparent Operations",
                description: "Complete transparency in fees, interest rates, and terms & conditions",
                icon: Award,
                features: ["No Hidden Fees", "Real-time Updates", "Clear Terms", "24/7 Support"]
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{item.description}</p>
                  
                  <ul className="space-y-2">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked <span className="text-green-600">Questions</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Everything you need to know about DABBA SAVE
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                question: "What is the minimum amount I can deposit?",
                answer: "You can start with as little as ₹10 per day. There's no maximum limit, and you can adjust your deposit amount anytime."
              },
              {
                question: "How safe are my deposits?",
                answer: "Your money is 100% safe as all deposits are held in FDIC-insured partner banks. We use bank-grade security with 256-bit encryption."
              },
              {
                question: "Can I withdraw my money anytime?",
                answer: "Yes, you can withdraw your deposited amount anytime. However, early withdrawal may affect your interest earnings."
              },
              {
                question: "What interest rate do I earn?",
                answer: "Interest rates vary from 6.5% to 7.5% annually depending on your chosen plan and deposit duration."
              },
              {
                question: "Are there any hidden fees?",
                answer: "No hidden fees! We believe in complete transparency. All charges, if any, are clearly mentioned upfront."
              },
              {
                question: "How do I track my savings?",
                answer: "You can track your savings in real-time through our mobile app and web dashboard with detailed analytics and growth charts."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full border border-gray-200 hover:border-green-500 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Banks */}
      <PartnerBanksCard />

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-br from-green-500 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Start Your Savings Journey Today!
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
              Join thousands of Indians who are building their financial future with DABBA SAVE. 
              Every great financial journey starts with a single step.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-white text-green-600 hover:bg-gray-100 px-8"
                onClick={() => setNavigation({ showSignupModal: true })}
              >
                Open Your DABBA Account
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-green-600 px-8"
              >
                Download Mobile App
                <Sparkles className="w-5 h-5 ml-2" />
              </Button>
            </div>
            
            <div className="mt-8 flex justify-center items-center gap-8 text-sm opacity-75">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>No Hidden Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>100% Bank Safe</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Start with ₹10</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}