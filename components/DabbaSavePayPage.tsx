import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { 
  PiggyBank, 
  CreditCard, 
  Clock, 
  Shield, 
  ArrowRight, 
  CheckCircle, 
  Calculator,
  Smartphone,
  TrendingUp,
  Zap,
  DollarSign,
  Calendar,
  Target,
  Sparkles,
  Star,
  Heart,
  Circle,
  Plane,
  Hotel,
  ShoppingCart,
  UtensilsCrossed,
  GraduationCap,
  Gift,
  Percent,
  MapPin,
  Users,
  Building2,
  ExternalLink,
  Tag
} from "lucide-react";

// Floating geometric shapes component
const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large floating circles */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-full blur-lg animate-bounce"></div>
      <div className="absolute bottom-32 left-20 w-40 h-40 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-2xl animate-pulse"></div>
      
      {/* Geometric shapes */}
      <div className="absolute top-60 right-10 w-16 h-16 bg-gradient-to-br from-blue-500/30 to-green-500/30 rotate-45 animate-spin-slow"></div>
      <div className="absolute bottom-20 right-40 w-12 h-12 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-lg rotate-12 animate-pulse"></div>
      
      {/* Small floating dots */}
      <div className="absolute top-32 left-1/3 w-3 h-3 bg-blue-500/40 rounded-full animate-ping"></div>
      <div className="absolute top-80 right-1/3 w-2 h-2 bg-green-500/40 rounded-full animate-ping delay-300"></div>
      <div className="absolute bottom-40 left-1/4 w-4 h-4 bg-purple-500/40 rounded-full animate-ping delay-700"></div>
    </div>
  );
};

// Animated counter component
const AnimatedCounter = ({ value, duration = 1000 }: { value: number; duration?: number }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setDisplayValue(Math.floor(progress * value));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [value, duration]);

  return <span>₹{displayValue.toLocaleString()}</span>;
};

// Associates and Marketplace data
const associatePartners = [
  {
    name: "MakeMyTrip",
    category: "Travel & Hotels",
    icon: Plane,
    discount: "Up to 15%",
    description: "Flight bookings, holiday packages, and travel insurance",
    image: "https://images.unsplash.com/photo-1719058180672-8242b44254d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbGlnaHQlMjB0cmF2ZWwlMjBib29raW5nfGVufDF8fHx8MTc1NjUzNDg1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "blue",
    benefits: "Cashback on bookings, Priority support, Flexible cancellation"
  },
  {
    name: "BookMyShow",
    category: "Entertainment",
    icon: Gift,
    discount: "Up to 25%",
    description: "Movie tickets, event bookings, and entertainment experiences",
    image: "https://images.unsplash.com/photo-1644984875410-e11486d2b94f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhvbmxpbmUlMjBzaG9wcGluZyUyMG1hcmtldHBsYWNlfGVufDF8fHx8MTc1NjQzMDM5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "purple",
    benefits: "Exclusive premieres, Group discounts, VIP experiences"
  },
  {
    name: "Zomato",
    category: "Food & Dining",
    icon: UtensilsCrossed,
    discount: "Up to 20%",
    description: "Food delivery, restaurant bookings, and dining experiences",
    image: "https://images.unsplash.com/photo-1730817403334-d723c05591e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZGVsaXZlcnklMjBhcHB8ZW58MXx8fHwxNzU2NTIzOTk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "orange",
    benefits: "Free delivery, Priority orders, Exclusive menu items"
  },
  {
    name: "Byju's",
    category: "Education",
    icon: GraduationCap,
    discount: "Up to 30%",
    description: "Online courses, skill development, and certification programs",
    image: "https://images.unsplash.com/photo-1669607960578-f7d7fd363e5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBsZWFybmluZyUyMG9ubGluZXxlbnwxfHx8fDE3NTY1MzQ4NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "green",
    benefits: "Free trial extensions, Mentorship programs, Career guidance"
  },
  {
    name: "Amazon",
    category: "Shopping",
    icon: ShoppingCart,
    discount: "Up to 10%",
    description: "Online shopping, electronics, and daily essentials",
    image: "https://images.unsplash.com/photo-1561069934-eee225952461?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxyZXRhaWwlMjBkaXNjb3VudCUyMHNob3BwaW5nfGVufDF8fHx8MTc1NjUzNDg3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "indigo",
    benefits: "Prime delivery, Early access sales, Exclusive deals"
  },
  {
    name: "OYO",
    category: "Hotels & Stay",
    icon: Hotel,
    discount: "Up to 35%",
    description: "Hotel bookings, vacation rentals, and business stays",
    image: "https://images.unsplash.com/photo-1517840901100-8179e982acb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGJvb2tpbmd8ZW58MXx8fHwxNzU2NTM0ODU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "pink",
    benefits: "Free upgrades, Late checkout, Complimentary breakfast"
  }
];

export function DabbaSavePayPage() {
  const [savingsAmount, setSavingsAmount] = useState("100");
  const [frequency, setFrequency] = useState("daily");
  const [paymentFrequency, setPaymentFrequency] = useState("quarterly");
  const [isCalculating, setIsCalculating] = useState(false);

  const calculateSavings = () => {
    const amount = parseFloat(savingsAmount) || 0;
    let dailyAmount = 0;
    
    switch (frequency) {
      case "daily":
        dailyAmount = amount;
        break;
      case "weekly":
        dailyAmount = amount / 7;
        break;
      case "monthly":
        dailyAmount = amount / 30;
        break;
    }

    const monthlyTotal = dailyAmount * 30;
    const quarterlyTotal = monthlyTotal * 3;
    const halfYearlyTotal = monthlyTotal * 6;
    const yearlyTotal = monthlyTotal * 12;

    return {
      monthly: monthlyTotal,
      quarterly: quarterlyTotal,
      halfYearly: halfYearlyTotal,
      yearly: yearlyTotal
    };
  };

  const savings = calculateSavings();

  // Trigger calculation animation
  const handleInputChange = (value: string) => {
    setSavingsAmount(value);
    setIsCalculating(true);
    setTimeout(() => setIsCalculating(false), 500);
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section with Advanced Gradients */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-purple-50 via-pink-50 to-green-50 overflow-hidden">
        <FloatingShapes />
        
        {/* Animated background pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-green-600/5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)`
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in-up">
              <Badge className="mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 text-white px-6 py-3 text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Sparkles className="mr-2 h-4 w-4" />
                Smart Savings + Auto Payments
              </Badge>
            </div>
            
            <div className="animate-fade-in-up delay-200">
              <h1 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 mb-8 leading-tight">
                DABBA SAVE & PAY
              </h1>
            </div>
            
            <div className="animate-fade-in-up delay-400">
              <p className="text-xl lg:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
                Save small amounts daily or weekly into your digital dabba, and let it automatically pay your loan dues quarterly, half-yearly, or yearly. 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 font-semibold"> No dues? Use it for any other payments!</span>
              </p>
            </div>
            
            <div className="animate-fade-in-up delay-600">
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 hover:from-blue-700 hover:via-purple-700 hover:to-green-700 text-white px-10 py-6 text-lg font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                  <PiggyBank className="mr-3 h-6 w-6" />
                  Start Your DABBA
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-10 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <Calculator className="mr-3 h-6 w-6" />
                  Calculate Savings
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section with Enhanced Visuals */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/20 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 px-4 py-2">
              Simple Process
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              How DABBA SAVE & PAY Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A simple 3-step process that automates your savings and payments
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Step 1 */}
            <div className="group relative">
              <Card className="border-2 border-blue-100 hover:border-blue-300 transition-all duration-500 transform group-hover:scale-105 group-hover:-translate-y-2 shadow-lg hover:shadow-2xl bg-gradient-to-br from-white to-blue-50/30">
                <CardHeader className="text-center relative">
                  <div className="mx-auto w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-500 transform group-hover:rotate-12">
                    <PiggyBank className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xs">1</span>
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">Save Regularly</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    Set up daily, weekly, or monthly micro-savings. Even ₹50 per day adds up quickly!
                  </p>
                  <Badge variant="outline" className="text-blue-600 border-blue-300 bg-blue-50 px-4 py-2">
                    <Star className="mr-2 h-4 w-4" />
                    Flexible Amounts
                  </Badge>
                </CardContent>
              </Card>
            </div>

            {/* Step 2 */}
            <div className="group relative">
              <Card className="border-2 border-green-100 hover:border-green-300 transition-all duration-500 transform group-hover:scale-105 group-hover:-translate-y-2 shadow-lg hover:shadow-2xl bg-gradient-to-br from-white to-green-50/30">
                <CardHeader className="text-center relative">
                  <div className="mx-auto w-20 h-20 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-500 transform group-hover:rotate-12">
                    <Clock className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xs">2</span>
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">Auto Schedule</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    Choose quarterly, half-yearly, or yearly automatic payments to your loan accounts.
                  </p>
                  <Badge variant="outline" className="text-green-600 border-green-300 bg-green-50 px-4 py-2">
                    <Zap className="mr-2 h-4 w-4" />
                    Set & Forget
                  </Badge>
                </CardContent>
              </Card>
            </div>

            {/* Step 3 */}
            <div className="group relative">
              <Card className="border-2 border-purple-100 hover:border-purple-300 transition-all duration-500 transform group-hover:scale-105 group-hover:-translate-y-2 shadow-lg hover:shadow-2xl bg-gradient-to-br from-white to-purple-50/30">
                <CardHeader className="text-center relative">
                  <div className="mx-auto w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-500 transform group-hover:rotate-12">
                    <CreditCard className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xs">3</span>
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">Smart Payments</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    If no loan dues exist, use your saved amount for bills, EMIs, or any other payments.
                  </p>
                  <Badge variant="outline" className="text-purple-600 border-purple-300 bg-purple-50 px-4 py-2">
                    <Heart className="mr-2 h-4 w-4" />
                    Flexible Use
                  </Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Savings Calculator Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-green-600/5"></div>
        <FloatingShapes />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3">
                <Calculator className="mr-2 h-4 w-4" />
                Interactive Calculator
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                Smart Savings Calculator
              </h2>
              <p className="text-xl text-gray-600">
                See how your small savings add up over time with real-time calculations
              </p>
            </div>

            <Card className="border-2 border-blue-200 shadow-2xl overflow-hidden bg-gradient-to-br from-white to-blue-50/50">
              <CardHeader className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <CardTitle className="text-3xl text-center relative z-10 py-2">
                  Calculate Your DABBA Savings
                </CardTitle>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
              </CardHeader>
              <CardContent className="p-10">
                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Enhanced Input Section */}
                  <div className="space-y-8">
                    <div className="group">
                      <label className="block text-lg font-semibold text-gray-800 mb-4">
                        Savings Amount
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl font-semibold">₹</span>
                        <Input
                          type="number"
                          value={savingsAmount}
                          onChange={(e) => handleInputChange(e.target.value)}
                          className={`pl-12 text-xl py-4 border-2 transition-all duration-300 ${
                            isCalculating 
                              ? 'border-purple-300 bg-purple-50' 
                              : 'border-gray-200 hover:border-blue-300 focus:border-blue-500'
                          } rounded-xl shadow-sm hover:shadow-md focus:shadow-lg`}
                          placeholder="100"
                        />
                      </div>
                    </div>

                    <div className="group">
                      <label className="block text-lg font-semibold text-gray-800 mb-4">
                        Savings Frequency
                      </label>
                      <Select value={frequency} onValueChange={setFrequency}>
                        <SelectTrigger className="text-lg py-4 border-2 border-gray-200 hover:border-blue-300 focus:border-blue-500 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="daily" className="text-lg py-3">Daily</SelectItem>
                          <SelectItem value="weekly" className="text-lg py-3">Weekly</SelectItem>
                          <SelectItem value="monthly" className="text-lg py-3">Monthly</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="group">
                      <label className="block text-lg font-semibold text-gray-800 mb-4">
                        Payment Frequency
                      </label>
                      <Select value={paymentFrequency} onValueChange={setPaymentFrequency}>
                        <SelectTrigger className="text-lg py-4 border-2 border-gray-200 hover:border-blue-300 focus:border-blue-500 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="quarterly" className="text-lg py-3">Quarterly (3 months)</SelectItem>
                          <SelectItem value="halfyearly" className="text-lg py-3">Half-yearly (6 months)</SelectItem>
                          <SelectItem value="yearly" className="text-lg py-3">Yearly (12 months)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Enhanced Results Section */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Your Savings Projection</h3>
                    
                    <div className="space-y-6">
                      <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-50 to-blue-100 p-6 border border-blue-200 hover:border-blue-300 transition-all duration-300 transform hover:scale-105">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700 font-medium text-lg">Monthly Total</span>
                          <span className="font-bold text-blue-600 text-2xl">
                            <AnimatedCounter value={savings.monthly} />
                          </span>
                        </div>
                        <div className="absolute top-0 right-0 w-20 h-20 bg-blue-200/30 rounded-full -translate-y-10 translate-x-10"></div>
                      </div>
                      
                      <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-green-50 to-green-100 p-6 border border-green-200 hover:border-green-300 transition-all duration-300 transform hover:scale-105">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700 font-medium text-lg">Quarterly Total</span>
                          <span className="font-bold text-green-600 text-2xl">
                            <AnimatedCounter value={savings.quarterly} />
                          </span>
                        </div>
                        <div className="absolute top-0 right-0 w-20 h-20 bg-green-200/30 rounded-full -translate-y-10 translate-x-10"></div>
                      </div>
                      
                      <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-50 to-purple-100 p-6 border border-purple-200 hover:border-purple-300 transition-all duration-300 transform hover:scale-105">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700 font-medium text-lg">Half-yearly Total</span>
                          <span className="font-bold text-purple-600 text-2xl">
                            <AnimatedCounter value={savings.halfYearly} />
                          </span>
                        </div>
                        <div className="absolute top-0 right-0 w-20 h-20 bg-purple-200/30 rounded-full -translate-y-10 translate-x-10"></div>
                      </div>
                      
                      <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-green-600 p-6 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-lg">Yearly Total</span>
                          <span className="font-bold text-3xl">
                            <AnimatedCounter value={savings.yearly} />
                          </span>
                        </div>
                        <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12"></div>
                        <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-8 -translate-x-8"></div>
                      </div>
                    </div>

                    <div className="mt-8 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-2xl shadow-lg">
                      <div className="flex items-center mb-3">
                        <Target className="h-6 w-6 text-yellow-600 mr-3" />
                        <span className="font-bold text-yellow-800 text-lg">Smart Tip</span>
                      </div>
                      <p className="text-yellow-800 text-lg leading-relaxed">
                        Your {paymentFrequency === 'quarterly' ? 'quarterly' : paymentFrequency === 'halfyearly' ? 'half-yearly' : 'yearly'} payment amount will be{' '}
                        <span className="font-bold text-xl">
                          ₹{(paymentFrequency === 'quarterly' ? savings.quarterly :
                          paymentFrequency === 'halfyearly' ? savings.halfYearly :
                          savings.yearly).toLocaleString()}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Associates & Marketplace Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/20 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3">
              <Building2 className="mr-2 h-4 w-4" />
              Partner Marketplace
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Associates</span> & Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Use your DABBA savings to pay for your goals - flights, hotels, education, shopping, and more with exclusive discounts!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {associatePartners.map((partner, index) => {
              const colorClasses = {
                blue: {
                  border: "border-blue-200 hover:border-blue-400",
                  background: "bg-gradient-to-br from-blue-50 to-blue-100",
                  accent: "text-blue-600",
                  discount: "bg-blue-600"
                },
                purple: {
                  border: "border-purple-200 hover:border-purple-400",
                  background: "bg-gradient-to-br from-purple-50 to-purple-100",
                  accent: "text-purple-600",
                  discount: "bg-purple-600"
                },
                orange: {
                  border: "border-orange-200 hover:border-orange-400",
                  background: "bg-gradient-to-br from-orange-50 to-orange-100",
                  accent: "text-orange-600",
                  discount: "bg-orange-600"
                },
                green: {
                  border: "border-green-200 hover:border-green-400",
                  background: "bg-gradient-to-br from-green-50 to-green-100",
                  accent: "text-green-600",
                  discount: "bg-green-600"
                },
                indigo: {
                  border: "border-indigo-200 hover:border-indigo-400",
                  background: "bg-gradient-to-br from-indigo-50 to-indigo-100",
                  accent: "text-indigo-600",
                  discount: "bg-indigo-600"
                },
                pink: {
                  border: "border-pink-200 hover:border-pink-400",
                  background: "bg-gradient-to-br from-pink-50 to-pink-100",
                  accent: "text-pink-600",
                  discount: "bg-pink-600"
                }
              };

              const currentColors = colorClasses[partner.color];

              return (
                <div key={index} className="group">
                  <Card className={`border-2 ${currentColors.border} transition-all duration-500 transform group-hover:scale-105 group-hover:-translate-y-2 shadow-lg hover:shadow-2xl ${currentColors.background} h-full overflow-hidden`}>
                    <div className="relative h-48">
                      <ImageWithFallback
                        src={partner.image}
                        alt={partner.name}
                        className="w-full h-full object-cover"
                      />
                      <div className={`absolute top-4 right-4 ${currentColors.discount} text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg`}>
                        {partner.discount} OFF
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-12 h-12 ${currentColors.background} rounded-xl flex items-center justify-center border-2 ${currentColors.border}`}>
                          <partner.icon className={`h-6 w-6 ${currentColors.accent}`} />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 text-lg">{partner.name}</h3>
                          <p className={`text-sm ${currentColors.accent} font-medium`}>{partner.category}</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">{partner.description}</p>
                      
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <Tag className={`h-4 w-4 ${currentColors.accent}`} />
                          <span className="text-sm text-gray-700 font-medium">Benefits:</span>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed pl-6">{partner.benefits}</p>
                      </div>
                      
                      <Button className={`w-full mt-4 ${currentColors.discount} hover:opacity-90 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300`}>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Explore Deals
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>

          {/* Marketplace Benefits Summary */}
          <div className="mt-16 max-w-4xl mx-auto">
            <Card className="border-2 border-purple-200 bg-gradient-to-r from-purple-50 via-pink-50 to-purple-50 shadow-2xl overflow-hidden">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                      DABBA SAVE & PAY Marketplace Benefits
                    </span>
                  </h3>
                  <p className="text-gray-600 text-lg">Save smart, spend smarter with exclusive partner discounts</p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Percent className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Up to 35% Savings</h4>
                    <p className="text-gray-600 text-sm">Exclusive discounts across all partner categories</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">50+ Partners</h4>
                    <p className="text-gray-600 text-sm">Growing network of trusted brands and services</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Secure Payments</h4>
                    <p className="text-gray-600 text-sm">Bank-grade security for all marketplace transactions</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Key Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/30 to-transparent"></div>
        <FloatingShapes />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 px-4 py-2">
              Premium Features
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              Why Choose DABBA SAVE & PAY?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Smart features designed to make saving and payments effortless
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              { icon: Zap, title: "Automated Payments", desc: "Set once and forget. Your savings automatically pay your loan dues on schedule.", color: "blue", delay: "0" },
              { icon: Shield, title: "Secure & Safe", desc: "Bank-grade security ensures your savings and payments are always protected.", color: "green", delay: "100" },
              { icon: Target, title: "Flexible Goals", desc: "Use for loan payments, bills, EMIs, or any financial goal you set.", color: "purple", delay: "200" },
              { icon: Smartphone, title: "Mobile First", desc: "Manage everything from your phone with our intuitive mobile interface.", color: "blue", delay: "300" },
              { icon: TrendingUp, title: "Smart Analytics", desc: "Track your savings progress and payment history with detailed insights.", color: "green", delay: "400" },
              { icon: DollarSign, title: "No Hidden Fees", desc: "Transparent pricing with no surprise charges or hidden fees.", color: "purple", delay: "500" }
            ].map((feature, index) => {
              const colorClasses = {
                blue: {
                  border: "border-blue-100 hover:border-blue-300",
                  background: "bg-gradient-to-br from-white to-blue-50/30",
                  icon: "bg-gradient-to-br from-blue-600 to-blue-700"
                },
                green: {
                  border: "border-green-100 hover:border-green-300", 
                  background: "bg-gradient-to-br from-white to-green-50/30",
                  icon: "bg-gradient-to-br from-green-600 to-green-700"
                },
                purple: {
                  border: "border-purple-100 hover:border-purple-300",
                  background: "bg-gradient-to-br from-white to-purple-50/30", 
                  icon: "bg-gradient-to-br from-purple-600 to-purple-700"
                }
              };
              
              return (
                <div key={index} className="group animate-fade-in-up">
                  <Card className={`border-2 ${colorClasses[feature.color].border} transition-all duration-500 transform group-hover:scale-105 group-hover:-translate-y-2 shadow-lg hover:shadow-2xl ${colorClasses[feature.color].background} h-full`}>
                    <CardContent className="p-8">
                      <div className={`w-16 h-16 ${colorClasses[feature.color].icon} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-500 transform group-hover:rotate-12`}>
                        <feature.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="font-bold text-gray-900 mb-4 text-xl">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Use Cases Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-50/20 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3">
              <Circle className="mr-2 h-4 w-4" />
              Versatile Solution
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              Perfect For Every Situation
            </h2>
            <p className="text-xl text-gray-600">
              Whether you have loans or not, DABBA SAVE & PAY adapts to your needs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* With Loans Card */}
            <div className="group">
              <Card className="border-2 border-green-200 bg-white shadow-2xl hover:shadow-3xl transition-all duration-500 transform group-hover:scale-105 group-hover:-translate-y-2 overflow-hidden h-full">
                <CardHeader className="bg-gradient-to-r from-green-50 to-green-100 relative">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-green-200/30 rounded-full -translate-y-12 translate-x-12"></div>
                  <CardTitle className="text-2xl font-bold text-gray-900 relative z-10">
                    <CheckCircle className="inline-block w-8 h-8 text-green-600 mr-3" />
                    With Outstanding Loans
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <p className="text-gray-600 text-lg leading-relaxed">
                      Perfect for those managing existing loans who want to automate their repayment process and never miss a due date.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">Automatic quarterly, half-yearly, or yearly loan payments</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">Improve credit score through consistent payments</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">Reduce financial stress with automated saving</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">Build emergency fund while paying loans</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Without Loans Card */}
            <div className="group">
              <Card className="border-2 border-blue-200 bg-white shadow-2xl hover:shadow-3xl transition-all duration-500 transform group-hover:scale-105 group-hover:-translate-y-2 overflow-hidden h-full">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 relative">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-blue-200/30 rounded-full -translate-y-12 translate-x-12"></div>
                  <CardTitle className="text-2xl font-bold text-gray-900 relative z-10">
                    <Heart className="inline-block w-8 h-8 text-blue-600 mr-3" />
                    No Outstanding Loans
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <p className="text-gray-600 text-lg leading-relaxed">
                      Ideal for building savings habits and achieving financial goals like travel, education, or major purchases through our partner marketplace.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">Save for travel, education, and dream purchases</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">Enjoy exclusive discounts on partner marketplace</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">Build wealth through consistent micro-savings</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">Create emergency fund for financial security</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-green-600 relative overflow-hidden">
        <FloatingShapes />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl lg:text-5xl font-black mb-8 leading-tight">
              Ready to Transform Your Financial Future?
            </h2>
            <p className="text-xl lg:text-2xl mb-12 opacity-90 leading-relaxed">
              Join thousands of users who are already saving smarter and achieving their goals with DABBA SAVE & PAY
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-10 py-6 text-lg font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                <PiggyBank className="mr-3 h-6 w-6" />
                Start Your DABBA Today
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-10 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Users className="mr-3 h-6 w-6" />
                Explore Marketplace
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}