import React, { useContext, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Building2, TrendingUp, Calendar, Star, Users, Target, CheckCircle, ArrowRight, Calculator, Heart, Award } from "lucide-react";
import { NavigationContext } from "../App";
import { BankLogo } from "./BankLogos";
import { motion } from "motion/react";

const bankOffers = [
  {
    id: 1,
    bankName: "State Bank of India",
    scheme: "SBI Recurring Deposit",
    logoKey: "SBI" as const,
    minAmount: 100,
    interestRate: 7.25,
    tenure: "1-10 years",
    features: ["Auto-debit facility", "Premature closure allowed", "Loan against RD"],
    rating: 4.5,
    popular: true,
    customers: "2.1M+",
    trustScore: 98
  },
  {
    id: 2,
    bankName: "HDFC Bank",
    scheme: "HDFC Smart RD",
    logoKey: "HDFC" as const,
    minAmount: 500,
    interestRate: 7.10,
    tenure: "6 months - 10 years",
    features: ["NetBanking access", "SMS alerts", "Interest compounded quarterly"],
    rating: 4.4,
    popular: false,
    customers: "1.8M+",
    trustScore: 96
  },
  {
    id: 3,
    bankName: "ICICI Bank",
    scheme: "ICICI Recurring Deposit",
    logoKey: "ICICI" as const,
    minAmount: 200,
    interestRate: 7.00,
    tenure: "6 months - 10 years",
    features: ["Mobile banking", "Auto-renewal", "Nomination facility"],
    rating: 4.3,
    popular: false,
    customers: "1.6M+",
    trustScore: 94
  },
  {
    id: 4,
    bankName: "Union Bank of India",
    scheme: "Union RD Scheme",
    logoKey: "Union Bank" as const,
    minAmount: 10,
    interestRate: 7.35,
    tenure: "6 months - 10 years",
    features: ["Micro deposits from ₹10", "Rural focus", "Agent assisted"],
    rating: 4.2,
    popular: true,
    customers: "1.4M+",
    trustScore: 92
  }
];

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Kochi, Kerala",
    amount: "₹50/day",
    duration: "8 months",
    quote: "Started with just ₹50 daily deposits through DABBA SAVE. My SBI RD has grown to ₹12,500 now!",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612d4c3?w=150"
  },
  {
    name: "Rajesh Kumar",
    location: "Thrissur, Kerala",
    amount: "₹100/day",
    duration: "1 year",
    quote: "The flexibility of daily deposits fits perfectly with my small business income. Highly recommend!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
  },
  {
    name: "Anita Menon",
    location: "Calicut, Kerala",
    amount: "₹25/day",
    duration: "6 months",
    quote: "As a daily wage worker, this is perfect for me. Small amounts, big dreams!",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150"
  }
];

export function MicroDepositsSection() {
  const { setNavigation } = useContext(NavigationContext);
  const [selectedBank, setSelectedBank] = useState<number | null>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleStartRD = (bankName: string) => {
    setNavigation({ showSignupModal: true });
  };

  const handleLearnMore = (bankName: string) => {
    alert(`Learn more about ${bankName} offerings. In a real app, this would open a detailed view.`);
  };

  const handleNotifyMe = () => {
    alert("You'll be notified when new bank schemes are available!");
  };

  const calculateMaturity = (amount: number, rate: number, months: number) => {
    const monthlyRate = rate / 100 / 12;
    const maturity = amount * months * (1 + monthlyRate * (months + 1) / 2);
    return Math.round(maturity);
  };

  // Auto-rotate testimonials
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="deposits" className="py-16 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 via-transparent to-blue-50/30"></div>
      <motion.div
        className="absolute top-20 -right-20 w-40 h-40 bg-gradient-to-br from-green-400/10 to-blue-400/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute bottom-20 -left-20 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-green-400/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#22C55E] to-[#16A34A] text-white px-6 py-3 rounded-full mb-6 shadow-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            animate={{
              boxShadow: [
                "0 4px 20px rgba(34, 197, 94, 0.3)",
                "0 8px 30px rgba(34, 197, 94, 0.5)",
                "0 4px 20px rgba(34, 197, 94, 0.3)"
              ]
            }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <TrendingUp className="size-5" />
            </motion.div>
            <span className="font-bold text-lg">DABBA SAVE Deposit Marketplace</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Compare <span className="text-[#22C55E]">15+ Banks</span> and Choose the 
            <span className="text-[#1E4A72]"> Best Offer!</span>
          </motion.h2>
          
          <motion.div 
            className="space-y-4 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-xl lg:text-2xl text-gray-700 font-semibold">
              Start your <span className="text-[#22C55E] font-bold">golden future</span> with 
              <span className="text-[#1E4A72] font-bold"> just ₹10/day!</span>
            </p>
            <p className="text-lg text-gray-600">
              Compare all verified bank schemes and choose the 
              <span className="font-semibold text-[#1E4A72]"> perfect recurring deposit </span> 
              that matches your financial goals.
            </p>
          </motion.div>
        </motion.div>

        {/* Enhanced Statistics Row with customer focus */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {[
            { 
              icon: Building2, 
              label: "Trusted Banks", 
              value: "15+", 
              color: "[#1E4A72]",
              subtitle: "Verified Partners" 
            },
            { 
              icon: Users, 
              label: "Happy Customers", 
              value: "8.2M+", 
              color: "[#22C55E]",
              subtitle: "Satisfied Families" 
            },
            { 
              icon: Target, 
              label: "Success Rate", 
              value: "94%", 
              color: "purple",
              subtitle: "Guaranteed Returns" 
            },
            { 
              icon: Award, 
              label: "Customer Rating", 
              value: "4.4★", 
              color: "orange",
              subtitle: "Excellent Service" 
            }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.08, y: -8 }}
              className="text-center p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl border-2 border-gray-100 hover:shadow-2xl transition-all duration-500"
            >
              <motion.div
                className={`w-16 h-16 bg-gradient-to-br from-${stat.color}-400 to-${stat.color}-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                  boxShadow: [
                    `0 4px 20px rgba(59, 130, 246, 0.2)`,
                    `0 8px 30px rgba(59, 130, 246, 0.4)`,
                    `0 4px 20px rgba(59, 130, 246, 0.2)`
                  ]
                }}
                transition={{ 
                  rotate: { duration: 12, repeat: Infinity, ease: "linear", delay: index * 0.5 },
                  scale: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 },
                  boxShadow: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }
                }}
              >
                <stat.icon className="size-8 text-white" />
              </motion.div>
              <motion.div 
                className="text-3xl font-black text-gray-900 mb-2"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.1 }}
              >
                {stat.value}
              </motion.div>
              <div className="font-bold text-gray-700 text-sm mb-1">{stat.label}</div>
              <div className="text-xs text-gray-500 font-medium">{stat.subtitle}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bank Offers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {bankOffers.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              onHoverStart={() => setSelectedBank(offer.id)}
              onHoverEnd={() => setSelectedBank(null)}
            >
              <Card className="relative border hover:shadow-2xl transition-all duration-500 overflow-hidden group">
                {/* Gradient background on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />
                
                {offer.popular && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, delay: index * 0.1 }}
                  >
                    <Badge className="absolute -top-2 right-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 z-10 shadow-lg">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        ⭐ Popular Choice
                      </motion.div>
                    </Badge>
                  </motion.div>
                )}
                
                <CardHeader className="pb-4 relative z-10">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <BankLogo bankKey={offer.logoKey} size="md" />
                      </motion.div>
                      <div>
                        <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                          {offer.bankName}
                        </CardTitle>
                        <p className="text-sm text-gray-600">{offer.scheme}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Star className="size-4 text-yellow-500 fill-current" />
                      </motion.div>
                      <span className="text-sm font-medium">{offer.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4 relative z-10">
                  {/* Key Details with enhanced animations */}
                  <div className="grid grid-cols-2 gap-4">
                    <motion.div 
                      className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200"
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.div 
                        className="text-2xl font-bold text-green-600"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 500, delay: index * 0.1 + 0.3 }}
                        viewport={{ once: true }}
                      >
                        {offer.interestRate}%
                      </motion.div>
                      <div className="text-xs text-gray-600 font-medium">Interest Rate</div>
                    </motion.div>
                    <motion.div 
                      className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200"
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.div 
                        className="text-2xl font-bold text-blue-600"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 500, delay: index * 0.1 + 0.4 }}
                        viewport={{ once: true }}
                      >
                        ₹{offer.minAmount}
                      </motion.div>
                      <div className="text-xs text-gray-600 font-medium">Min. Amount</div>
                    </motion.div>
                  </div>

                  {/* Additional Info */}
                  <div className="grid grid-cols-2 gap-4">
                    <motion.div 
                      className="text-center p-3 bg-gray-50 rounded-lg"
                      whileHover={{ scale: 1.05, backgroundColor: "#F3F4F6" }}
                    >
                      <div className="text-lg font-bold text-purple-600">{offer.customers}</div>
                      <div className="text-xs text-gray-600">Customers</div>
                    </motion.div>
                    <motion.div 
                      className="text-center p-3 bg-gray-50 rounded-lg"
                      whileHover={{ scale: 1.05, backgroundColor: "#F3F4F6" }}
                    >
                      <div className="text-lg font-bold text-orange-600">{offer.trustScore}%</div>
                      <div className="text-xs text-gray-600">Trust Score</div>
                    </motion.div>
                  </div>

                  {/* Tenure */}
                  <motion.div 
                    className="flex items-center gap-2 text-sm text-gray-600 p-3 bg-gray-50 rounded-lg"
                    whileHover={{ backgroundColor: "#F9FAFB" }}
                  >
                    <Calendar className="size-4 text-blue-500" />
                    <span>Tenure: {offer.tenure}</span>
                  </motion.div>

                  {/* Features */}
                  <div className="space-y-3">
                    <div className="text-sm font-medium text-gray-900 flex items-center gap-2">
                      <CheckCircle className="size-4 text-green-500" />
                      Key Features:
                    </div>
                    <ul className="space-y-2">
                      {offer.features.map((feature, featureIndex) => (
                        <motion.li 
                          key={featureIndex} 
                          className="text-sm text-gray-600 flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + featureIndex * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ x: 5 }}
                        >
                          <motion.div 
                            className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: featureIndex * 0.2 }}
                          />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Savings Projection */}
                  <motion.div 
                    className="p-3 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border border-blue-200"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="text-sm font-medium text-gray-900 mb-2 flex items-center gap-2">
                      <Calculator className="size-4 text-blue-500" />
                      1-Year Projection (₹100/day):
                    </div>
                    <div className="text-lg font-bold text-green-600">
                      ₹{calculateMaturity(100, offer.interestRate, 12).toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-600">
                      Investment: ₹36,500 + Interest: ₹{(calculateMaturity(100, offer.interestRate, 12) - 36500).toLocaleString()}
                    </div>
                  </motion.div>

                  {/* Actions */}
                  <div className="flex gap-3 pt-2">
                    <motion.div 
                      className="flex-1"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg group"
                        onClick={() => handleStartRD(offer.bankName)}
                      >
                        Start DABBA SAVE
                        <motion.div
                          className="ml-2"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ArrowRight className="size-4" />
                        </motion.div>
                      </Button>
                    </motion.div>
                    <motion.div 
                      className="flex-1"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        variant="outline" 
                        className="w-full border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 group"
                        onClick={() => handleLearnMore(offer.bankName)}
                      >
                        Learn More
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Customer Testimonials */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">What Our Customers Say</h3>
          <Card className="max-w-2xl mx-auto bg-gradient-to-br from-blue-50 to-green-50 border-0 shadow-xl">
            <CardContent className="p-8">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <motion.img
                  src={testimonials[currentTestimonial].avatar}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-lg"
                  whileHover={{ scale: 1.1 }}
                />
                <blockquote className="text-lg text-gray-700 italic mb-4">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                <div className="font-semibold text-gray-900">{testimonials[currentTestimonial].name}</div>
                <div className="text-sm text-gray-600">{testimonials[currentTestimonial].location}</div>
                <div className="text-sm text-green-600 font-medium mt-2">
                  Saving {testimonials[currentTestimonial].amount} for {testimonials[currentTestimonial].duration}
                </div>
              </motion.div>

              {/* Testimonial dots */}
              <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                    onClick={() => setCurrentTestimonial(index)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="p-8 bg-gradient-to-r from-blue-50 to-green-50 border-0 shadow-xl relative overflow-hidden">
            {/* Background pattern */}
            <motion.div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: "radial-gradient(circle at 1px 1px, #3B82F6 1px, transparent 0)",
                backgroundSize: "20px 20px"
              }}
              animate={{
                backgroundPosition: ["0px 0px", "20px 20px", "0px 0px"]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            <div className="space-y-6 relative z-10">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Heart className="size-12 text-red-500 mx-auto mb-4" />
              </motion.div>
              
              <h3 className="text-2xl font-bold text-gray-900">
                Can't find what you're looking for?
              </h3>
              <p className="text-gray-600 max-w-md mx-auto">
                We're constantly adding new bank partners. Get notified when new schemes become available.
              </p>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline" 
                  className="border-2 border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300 px-8 py-3 shadow-lg"
                  onClick={handleNotifyMe}
                >
                  <motion.div
                    animate={{ rotate: [0, 15, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="mr-2"
                  >
                    🔔
                  </motion.div>
                  Notify Me
                </Button>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}