import React, { useContext, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Progress } from "./ui/progress";
import { 
  CreditCard, 
  Calendar, 
  IndianRupee, 
  TrendingDown, 
  CheckCircle,
  ArrowRight,
  Clock,
  Building2,
  ArrowLeft,
  Star,
  Users,
  Calculator,
  Target,
  Award,
  PiggyBank,
  Zap,
  Shield,
  TrendingUp
} from "lucide-react";
import { NavigationContext } from "../App";
import { BankLogo } from "./BankLogos";
import { motion } from "motion/react";

// Bank data with NPA information
const npaPartnerBanks = [
  {
    id: 1,
    name: "State Bank of India",
    shortName: "SBI",
    logoKey: "SBI" as const,
    totalNPAs: "₹45,000Cr",
    activeUsers: "2.1M+",
    averageRecovery: "73%",
    minPayment: 10,
    popular: true,
    description: "India's largest public sector bank with comprehensive NPA recovery programs",
    recoveryTrend: "+5.2%",
    satisfactionRate: 88
  },
  {
    id: 2,
    name: "HDFC Bank",
    shortName: "HDFC",
    logoKey: "HDFC" as const,
    totalNPAs: "₹12,500Cr",
    activeUsers: "850K+",
    averageRecovery: "81%",
    minPayment: 25,
    popular: true,
    description: "Leading private sector bank with digital-first NPA resolution",
    recoveryTrend: "+7.1%",
    satisfactionRate: 92
  },
  {
    id: 3,
    name: "Union Bank of India",
    shortName: "Union Bank",
    logoKey: "Union Bank" as const,
    totalNPAs: "₹28,000Cr",
    activeUsers: "1.5M+",
    averageRecovery: "68%",
    minPayment: 5,
    popular: false,
    description: "Focused on rural and semi-urban NPA recovery with flexible payment options",
    recoveryTrend: "+3.8%",
    satisfactionRate: 85
  },
  {
    id: 4,
    name: "Bank of Baroda",
    shortName: "BOB",
    logoKey: "BOB" as const,
    totalNPAs: "₹35,200Cr",
    activeUsers: "1.2M+",
    averageRecovery: "70%",
    minPayment: 15,
    popular: false,
    description: "Public sector bank with strong presence in agricultural loan NPAs",
    recoveryTrend: "+4.3%",
    satisfactionRate: 82
  },
  {
    id: 5,
    name: "ICICI Bank",
    shortName: "ICICI",
    logoKey: "ICICI" as const,
    totalNPAs: "₹15,800Cr",
    activeUsers: "920K+",
    averageRecovery: "79%",
    minPayment: 20,
    popular: true,
    description: "Technology-driven NPA management with 24/7 payment options",
    recoveryTrend: "+6.5%",
    satisfactionRate: 90
  },
  {
    id: 6,
    name: "Canara Bank",
    shortName: "Canara",
    logoKey: "Canara" as const,
    totalNPAs: "₹22,600Cr",
    activeUsers: "980K+",
    averageRecovery: "65%",
    minPayment: 10,
    popular: false,
    description: "Traditional public sector bank with personalized NPA recovery support",
    recoveryTrend: "+2.9%",
    satisfactionRate: 79
  }
];

const successStories = [
  {
    name: "Ravi Krishnan",
    location: "Kochi, Kerala",
    bank: "SBI",
    originalLoan: "₹25,000",
    recoveredAmount: "₹18,500",
    timeline: "14 months",
    dailyPayment: "₹50",
    quote: "Started with ₹50/day through DigiDabba. SBI's flexible system helped me clear most of my dues!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    improvementScore: "+180 points"
  },
  {
    name: "Meera Nair",
    location: "Thrissur, Kerala",
    bank: "HDFC",
    originalLoan: "₹40,000",
    recoveredAmount: "₹32,000",
    timeline: "18 months",
    dailyPayment: "₹75",
    quote: "HDFC's digital platform made it so easy to track my progress. Credit score improved significantly!",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612d4c3?w=150",
    improvementScore: "+220 points"
  },
  {
    name: "Suresh Kumar",
    location: "Calicut, Kerala",
    bank: "Union Bank",
    originalLoan: "₹15,000",
    recoveredAmount: "₹12,800",
    timeline: "10 months",
    dailyPayment: "₹40",
    quote: "As a daily wage worker, Union Bank's ₹5 minimum was perfect. Slowly but surely cleared my loan!",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
    improvementScore: "+150 points"
  }
];

const features = [
  {
    icon: Clock,
    title: "Flexible Schedule",
    description: "Pay daily, weekly, or monthly as per your convenience",
    color: "blue"
  },
  {
    icon: IndianRupee,
    title: "Any Amount",
    description: "Make payments as low as ₹5 or as much as you can afford",
    color: "green"
  },
  {
    icon: TrendingDown,
    title: "Reduce Interest",
    description: "Lower your outstanding balance and save on interest costs",
    color: "purple"
  },
  {
    icon: CheckCircle,
    title: "Improve Credit",
    description: "Build back your credit score with consistent payments",
    color: "orange"
  }
];

export function NPARepaymentSection() {
  const { setNavigation } = useContext(NavigationContext);
  const [selectedBank, setSelectedBank] = useState<typeof npaPartnerBanks[0] | null>(null);
  const [selectedPayment, setSelectedPayment] = useState('daily');
  const [customAmount, setCustomAmount] = useState('');
  const [currentStory, setCurrentStory] = useState(0);

  const handleBankSelect = (bank: typeof npaPartnerBanks[0]) => {
    setSelectedBank(bank);
  };

  const handleBackToBanks = () => {
    setSelectedBank(null);
    setSelectedPayment('daily');
    setCustomAmount('');
  };

  const handleStartRepayment = () => {
    setNavigation({ showSignupModal: true });
  };

  const handleCalculate = () => {
    if (customAmount) {
      alert(`For ₹${customAmount} payments with ${selectedBank?.name}, you'll need approximately ${Math.ceil(32000 / parseInt(customAmount))} payments to clear the loan.`);
    } else {
      alert('Please enter an amount to calculate.');
    }
  };

  const handleBankLogin = () => {
    alert(`${selectedBank?.name} login portal would open here. This is a demo version.`);
  };

  const handleIntegrationGuide = () => {
    alert('Integration guide for banks would be displayed here.');
  };

  // Auto-rotate success stories
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStory((prev) => (prev + 1) % successStories.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Circular progress component
  const CircularProgress = ({ percentage, color = "blue", size = 120 }: { percentage: number, color?: string, size?: number }) => {
    const radius = (size - 8) / 2;
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div className="relative inline-flex items-center justify-center">
        <svg width={size} height={size} className="transform -rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#e5e7eb"
            strokeWidth="8"
            fill="transparent"
          />
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={`var(--color-${color}-500)`}
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`text-2xl font-bold text-${color}-600`}>{percentage}%</span>
        </div>
      </div>
    );
  };

  // Bank Selection View
  if (!selectedBank) {
    return (
      <section id="repayments" className="py-16 bg-gray-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-red-50/30"></div>
        <motion.div
          className="absolute top-32 -left-20 w-48 h-48 bg-gradient-to-br from-red-400/10 to-blue-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 270, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-32 -right-20 w-40 h-40 bg-gradient-to-br from-blue-400/10 to-green-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 90, 0],
          }}
          transition={{
            duration: 20,
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
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#1E4A72] to-[#22C55E] text-white px-6 py-3 rounded-full mb-6 shadow-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              animate={{
                boxShadow: [
                  "0 4px 20px rgba(30, 74, 114, 0.3)",
                  "0 8px 30px rgba(30, 74, 114, 0.5)",
                  "0 4px 20px rgba(30, 74, 114, 0.3)"
                ]
              }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <CreditCard className="size-5" />
              </motion.div>
              <span className="font-bold text-lg">DIGIDABBA Loan Repayment Platform</span>
            </motion.div>
            
            <motion.h2 
              className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-[#1E4A72]">End Loan Stress!</span> 
              <span className="text-[#22C55E]"> Choose Your Bank</span>
            </motion.h2>
            
            <motion.div 
              className="space-y-4 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-xl lg:text-2xl text-gray-700 font-semibold">
                Start <span className="text-[#22C55E] font-bold">easy EMIs</span> with 
                <span className="text-[#1E4A72] font-bold"> just ₹5/day!</span>
              </p>
              <p className="text-lg text-gray-600">
                Choose your bank and start flexible loan repayment. With India's 
                <span className="font-semibold text-[#1E4A72]"> major banks </span> offering 
                <span className="font-bold text-[#22C55E]"> dedicated NPA recovery programs!</span>
              </p>
            </motion.div>
          </motion.div>

          {/* Platform Statistics */}
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
                value: "6+", 
                color: "[#1E4A72]", 
                suffix: "",
                subtitle: "Verified Partners" 
              },
              { 
                icon: Users, 
                label: "Active Users", 
                value: "8.2M", 
                color: "[#22C55E]", 
                suffix: "+",
                subtitle: "Satisfied Customers" 
              },
              { 
                icon: Target, 
                label: "Average Recovery", 
                value: "73", 
                color: "purple", 
                suffix: "%",
                subtitle: "Successful Repayment" 
              },
              { 
                icon: TrendingUp, 
                label: "Success Rate", 
                value: "87", 
                color: "orange", 
                suffix: "%",
                subtitle: "Proven Results" 
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
                    rotate: { duration: 15, repeat: Infinity, ease: "linear", delay: index * 0.5 },
                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 },
                    boxShadow: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }
                  }}
                >
                  <stat.icon className="size-8 text-white" />
                </motion.div>
                <motion.div 
                  className="text-3xl font-black text-gray-900 mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  animate={{ scale: [1, 1.05, 1] }}
                >
                  {stat.value}{stat.suffix}
                </motion.div>
                <div className="font-bold text-gray-700 text-sm mb-1">{stat.label}</div>
                <div className="text-xs text-gray-500 font-medium">{stat.subtitle}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bank Selection Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {npaPartnerBanks.map((bank, index) => (
              <motion.div
                key={bank.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Card 
                  className="relative border hover:shadow-2xl transition-all duration-500 cursor-pointer group overflow-hidden" 
                  onClick={() => handleBankSelect(bank)}
                >
                  {/* Gradient background on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-50 to-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={false}
                  />

                  {bank.popular && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 500, delay: index * 0.1 }}
                    >
                      <Badge className="absolute -top-2 right-4 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 z-10 shadow-lg">
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          🔥 Popular
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
                          <BankLogo bankKey={bank.logoKey} size="lg" />
                        </motion.div>
                        <div>
                          <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                            {bank.name}
                          </CardTitle>
                          <p className="text-sm text-gray-600">{bank.shortName}</p>
                        </div>
                      </div>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <ArrowRight className="size-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                      </motion.div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4 relative z-10">
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {bank.description}
                    </p>

                    {/* Recovery Rate Visualization */}
                    <div className="flex items-center justify-center py-4">
                      <CircularProgress 
                        percentage={parseInt(bank.averageRecovery)} 
                        color="green" 
                        size={100} 
                      />
                    </div>

                    {/* Key Stats */}
                    <div className="grid grid-cols-2 gap-4">
                      <motion.div 
                        className="text-center p-3 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200"
                        whileHover={{ scale: 1.05 }}
                      >
                        <motion.div 
                          className="text-lg font-bold text-green-600"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 500, delay: index * 0.1 + 0.5 }}
                          viewport={{ once: true }}
                        >
                          ₹{bank.minPayment}
                        </motion.div>
                        <div className="text-xs text-gray-600 font-medium">Min Payment</div>
                      </motion.div>
                      <motion.div 
                        className="text-center p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200"
                        whileHover={{ scale: 1.05 }}
                      >
                        <motion.div 
                          className="text-lg font-bold text-blue-600"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 500, delay: index * 0.1 + 0.6 }}
                          viewport={{ once: true }}
                        >
                          {bank.satisfactionRate}%
                        </motion.div>
                        <div className="text-xs text-gray-600 font-medium">Satisfaction</div>
                      </motion.div>
                    </div>

                    {/* Additional Info */}
                    <div className="space-y-2">
                      <motion.div 
                        className="flex items-center gap-2 text-sm text-gray-600 p-2 bg-gray-50 rounded-lg"
                        whileHover={{ backgroundColor: "#F9FAFB" }}
                      >
                        <IndianRupee className="size-4 text-red-500" />
                        <span>Total NPAs: {bank.totalNPAs}</span>
                      </motion.div>
                      <motion.div 
                        className="flex items-center gap-2 text-sm text-gray-600 p-2 bg-gray-50 rounded-lg"
                        whileHover={{ backgroundColor: "#F9FAFB" }}
                      >
                        <Users className="size-4 text-blue-500" />
                        <span>Active Users: {bank.activeUsers}</span>
                      </motion.div>
                      <motion.div 
                        className="flex items-center gap-2 text-sm text-gray-600 p-2 bg-gray-50 rounded-lg"
                        whileHover={{ backgroundColor: "#F9FAFB" }}
                      >
                        <TrendingUp className="size-4 text-green-500" />
                        <span>Recovery Trend: {bank.recoveryTrend}</span>
                      </motion.div>
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 group-hover:from-blue-700 group-hover:to-blue-800 text-white shadow-lg">
                        Start Repayment
                        <motion.div
                          className="ml-2"
                          animate={{ x: [0, 3, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ArrowRight className="size-4" />
                        </motion.div>
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Success Stories Section */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Success Stories</h3>
            <Card className="max-w-3xl mx-auto bg-gradient-to-br from-green-50 to-blue-50 border-0 shadow-xl">
              <CardContent className="p-8">
                <motion.div
                  key={currentStory}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <motion.img
                      src={successStories[currentStory].avatar}
                      alt={successStories[currentStory].name}
                      className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                      whileHover={{ scale: 1.1 }}
                    />
                    <div className="flex-1">
                      <blockquote className="text-lg text-gray-700 italic mb-4">
                        "{successStories[currentStory].quote}"
                      </blockquote>
                      <div className="flex flex-wrap items-center gap-4 text-sm">
                        <div>
                          <div className="font-semibold text-gray-900">{successStories[currentStory].name}</div>
                          <div className="text-gray-600">{successStories[currentStory].location}</div>
                        </div>
                        <div className="flex flex-wrap gap-3">
                          <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                            {successStories[currentStory].bank}
                          </Badge>
                          <Badge variant="secondary" className="bg-green-100 text-green-700">
                            {successStories[currentStory].dailyPayment}/day
                          </Badge>
                          <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                            Credit {successStories[currentStory].improvementScore}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">
                        {successStories[currentStory].recoveredAmount}
                      </div>
                      <div className="text-sm text-gray-600">Recovered</div>
                      <div className="text-xs text-gray-500 mt-1">
                        in {successStories[currentStory].timeline}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Story navigation dots */}
                <div className="flex justify-center mt-6 space-x-2">
                  {successStories.map((_, index) => (
                    <motion.button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentStory ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                      onClick={() => setCurrentStory(index)}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Bottom Info */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-gradient-to-r from-blue-50 to-green-50 border-0 shadow-xl relative overflow-hidden max-w-4xl mx-auto">
              {/* Background pattern */}
              <motion.div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: "radial-gradient(circle at 2px 2px, #3B82F6 1px, transparent 0)",
                  backgroundSize: "30px 30px"
                }}
                animate={{
                  backgroundPosition: ["0px 0px", "30px 30px", "0px 0px"]
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              <div className="space-y-6 relative z-10">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <PiggyBank className="size-16 text-blue-600 mx-auto mb-4" />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-gray-900">
                  Why Choose DigiDabba for NPA Repayments?
                </h3>
                
                <div className="grid md:grid-cols-4 gap-6 text-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-3xl font-bold text-blue-600">6+</div>
                    <div className="text-sm text-gray-600">Partner Banks</div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-3xl font-bold text-green-600">73%</div>
                    <div className="text-sm text-gray-600">Avg Recovery Rate</div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-3xl font-bold text-purple-600">8M+</div>
                    <div className="text-sm text-gray-600">Active Users</div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-3xl font-bold text-orange-600">87%</div>
                    <div className="text-sm text-gray-600">Success Rate</div>
                  </motion.div>
                </div>
                
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Flexible payments starting from ₹5/day • Real-time bank updates • Improve your credit score • 24/7 support
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    );
  }

  // Bank-Specific Repayment View
  return (
    <section id="repayments" className="py-16 bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-green-50/30"></div>
      <motion.div
        className="absolute top-20 -left-16 w-32 h-32 bg-gradient-to-br from-green-400/10 to-blue-400/10 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.4, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header with Back Button */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="ghost" 
              onClick={handleBackToBanks}
              className="mb-4 hover:bg-blue-50 group"
            >
              <motion.div
                animate={{ x: [0, -3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowLeft className="size-4 mr-2" />
              </motion.div>
              Back to Banks
            </Button>
          </motion.div>
          
          <div className="text-center">
            <motion.div 
              className="inline-flex items-center gap-3 bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <BankLogo bankKey={selectedBank.logoKey} size="sm" />
              </motion.div>
              <span className="font-medium">{selectedBank.name} NPA Repayment</span>
            </motion.div>
            
            <motion.h2 
              className="text-3xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Flexible Loan Repayments Made Easy
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Start your repayment journey with {selectedBank.name}. Make payments as low as ₹{selectedBank.minPayment}/day 
              and rebuild your financial standing with our flexible payment options.
            </motion.p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Calculator/Demo */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Card className="p-6 border-2 border-blue-100 shadow-xl">
              <CardHeader className="px-0 pb-4">
                <CardTitle className="flex items-center gap-2">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  >
                    <Calculator className="size-5 text-green-600" />
                  </motion.div>
                  Repayment Calculator - {selectedBank.shortName}
                </CardTitle>
                <p className="text-sm text-gray-600">
                  See how flexible payments can help clear your dues with {selectedBank.name}
                </p>
              </CardHeader>
              
              <CardContent className="px-0 space-y-6">
                {/* Bank-specific Info with animations */}
                <motion.div 
                  className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-200 rounded-lg"
                  whileHover={{ scale: 1.02 }}
                >
                  <h4 className="font-medium text-blue-800 mb-3 flex items-center gap-2">
                    <Shield className="size-4" />
                    {selectedBank.name} - Recovery Stats
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <CircularProgress 
                        percentage={parseInt(selectedBank.averageRecovery)} 
                        color="blue" 
                        size={80} 
                      />
                      <div className="text-xs text-blue-700 mt-2">Recovery Rate</div>
                    </div>
                    <div className="space-y-2">
                      <div>
                        <span className="text-gray-600 text-xs">Active Users:</span>
                        <div className="font-semibold text-blue-700">{selectedBank.activeUsers}</div>
                      </div>
                      <div>
                        <span className="text-gray-600 text-xs">Satisfaction:</span>
                        <div className="font-semibold text-blue-700">{selectedBank.satisfactionRate}%</div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Example Scenario with progress */}
                <motion.div 
                  className="p-4 bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-lg"
                  whileHover={{ scale: 1.02 }}
                >
                  <h4 className="font-medium text-red-800 mb-3 flex items-center gap-2">
                    <Target className="size-4" />
                    Example Scenario
                  </h4>
                  <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                    <div>
                      <span className="text-gray-600">Original Loan:</span>
                      <div className="font-semibold text-red-700">₹50,000</div>
                    </div>
                    <div>
                      <span className="text-gray-600">Outstanding:</span>
                      <div className="font-semibold text-red-700">₹32,000</div>
                    </div>
                  </div>
                  <div className="mb-2 text-xs text-gray-600">Progress towards clearance:</div>
                  <Progress value={64} className="h-2" />
                  <div className="text-xs text-gray-600 mt-1">64% cleared (₹18,000 paid)</div>
                </motion.div>

                {/* Payment Options with enhanced UI */}
                <div className="space-y-4">
                  <h4 className="font-medium text-gray-900 flex items-center gap-2">
                    <Zap className="size-4 text-yellow-500" />
                    Choose Your Payment Plan:
                  </h4>
                  
                  <div className="grid gap-3">
                    {[
                      { 
                        id: 'daily', 
                        title: 'Daily Payment', 
                        amount: Math.max(selectedBank.minPayment, 100), 
                        period: 'day', 
                        timeline: '~11 months',
                        recommended: true,
                        color: 'green'
                      },
                      { 
                        id: 'weekly', 
                        title: 'Weekly Payment', 
                        amount: Math.max(selectedBank.minPayment * 7, 700), 
                        period: 'week', 
                        timeline: '~11 months',
                        recommended: false,
                        color: 'blue'
                      },
                      { 
                        id: 'monthly', 
                        title: 'Monthly Payment', 
                        amount: Math.max(selectedBank.minPayment * 30, 2800), 
                        period: 'month', 
                        timeline: '~11 months',
                        recommended: false,
                        color: 'purple'
                      }
                    ].map((option) => (
                      <motion.div 
                        key={option.id}
                        className={`flex items-center justify-between p-4 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
                          selectedPayment === option.id 
                            ? `bg-${option.color}-50 border-${option.color}-200 shadow-lg` 
                            : 'hover:bg-gray-50 border-gray-200'
                        }`} 
                        onClick={() => setSelectedPayment(option.id)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center gap-3">
                          <motion.input 
                            type="radio" 
                            name="payment" 
                            id={option.id} 
                            className={`text-${option.color}-600`}
                            checked={selectedPayment === option.id}
                            onChange={() => setSelectedPayment(option.id)}
                            whileHover={{ scale: 1.1 }}
                          />
                          <label htmlFor={option.id} className="cursor-pointer">
                            <div className="font-medium flex items-center gap-2">
                              {option.title}
                              {option.recommended && (
                                <motion.span
                                  animate={{ scale: [1, 1.1, 1] }}
                                  transition={{ duration: 2, repeat: Infinity }}
                                  className="text-xs text-green-600"
                                >
                                  ⭐
                                </motion.span>
                              )}
                            </div>
                            <div className="text-sm text-gray-600">
                              ₹{option.amount}/{option.period} • Clear in {option.timeline}
                            </div>
                          </label>
                        </div>
                        {option.recommended && (
                          <Badge variant="secondary" className="bg-green-100 text-green-700 font-medium">
                            Recommended
                          </Badge>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Custom Amount with visual feedback */}
                <motion.div 
                  className="space-y-3"
                  whileHover={{ scale: 1.01 }}
                >
                  <h4 className="font-medium text-gray-900">Or Enter Custom Amount (Min: ₹{selectedBank.minPayment}):</h4>
                  <div className="flex gap-2">
                    <Input 
                      placeholder={`Enter amount (min ₹${selectedBank.minPayment})...`}
                      className="flex-1 border-2 focus:border-blue-400" 
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      type="number"
                      min={selectedBank.minPayment}
                    />
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button variant="outline" onClick={handleCalculate}>
                        Calculate
                      </Button>
                    </motion.div>
                  </div>
                  {customAmount && parseInt(customAmount) >= selectedBank.minPayment && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 bg-blue-50 rounded-lg border border-blue-200"
                    >
                      <div className="text-sm text-blue-700">
                        Estimated clearance: <span className="font-bold">
                          {Math.ceil(32000 / parseInt(customAmount))} payments
                        </span>
                      </div>
                    </motion.div>
                  )}
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg py-3" 
                    onClick={handleStartRepayment}
                  >
                    Start Repayment with {selectedBank.shortName}
                    <motion.div
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="size-4" />
                    </motion.div>
                  </Button>
                </motion.div>
              </CardContent>
            </Card>

            {/* Benefits with animations */}
            <motion.div
              whileHover={{ scale: 1.01 }}
            >
              <Card className="p-6 bg-gradient-to-br from-green-50 to-blue-50 border-0 shadow-xl">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Award className="size-5 text-yellow-500" />
                  Why Choose {selectedBank.name}?
                </h3>
                <div className="space-y-3">
                  {[
                    `Minimum payment as low as ₹${selectedBank.minPayment}/day`,
                    `${selectedBank.averageRecovery} average recovery rate`,
                    `Trusted by ${selectedBank.activeUsers} users`,
                    `Real-time updates to bank's system`,
                    `${selectedBank.satisfactionRate}% customer satisfaction rate`
                  ].map((benefit, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center gap-3 text-sm"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      >
                        <CheckCircle className="size-4 text-green-600 flex-shrink-0" />
                      </motion.div>
                      <span>{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </motion.div>

          {/* Features Grid */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <Star className="size-6 text-yellow-500" />
              Platform Features
            </h3>
            
            <div className="grid gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <Card className="p-4 hover:shadow-lg transition-all duration-300 border-2 border-gray-100">
                    <div className="flex items-start gap-4">
                      <motion.div 
                        className={`p-3 bg-${feature.color}-100 rounded-lg flex-shrink-0`}
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: index }}
                      >
                        <feature.icon className={`size-5 text-${feature.color}-600`} />
                      </motion.div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Bank Integration */}
            <motion.div
              whileHover={{ scale: 1.01 }}
            >
              <Card className="p-6 bg-white border-2 border-blue-100 shadow-lg">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Building2 className="size-5 text-blue-600" />
                  Bank Integration - {selectedBank.name}
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  Direct integration with {selectedBank.name} systems for real-time NPA tracking and recovery updates.
                </p>
                <div className="flex gap-3">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button variant="outline" size="sm" onClick={handleBankLogin}>
                      {selectedBank.shortName} Login
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button variant="outline" size="sm" onClick={handleIntegrationGuide}>
                      Integration Guide
                    </Button>
                  </motion.div>
                </div>
              </Card>
            </motion.div>

            {/* Success Stories */}
            <motion.div
              whileHover={{ scale: 1.01 }}
            >
              <Card className="p-6 bg-gradient-to-br from-yellow-50 to-orange-50 border-0 shadow-xl">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Star className="size-5 text-yellow-600" />
                  Success Stories - {selectedBank.name}
                </h4>
                <div className="space-y-4">
                  {[
                    {
                      quote: `Started with ₹${selectedBank.minPayment * 5}/day payments at ${selectedBank.shortName}. Cleared my ₹15,000 loan in 8 months!`,
                      author: "Rajesh K., Small Trader, Kerala"
                    },
                    {
                      quote: `${selectedBank.name}'s flexible system helped me pay weekly. No more stress about lump sum EMIs.`,
                      author: "Priya S., Daily Wage Worker, Tamil Nadu"
                    }
                  ].map((story, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                    >
                      <blockquote className="text-sm text-gray-700 italic mb-2">
                        "{story.quote}"
                      </blockquote>
                      <div className="text-xs text-gray-600">- {story.author}</div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}