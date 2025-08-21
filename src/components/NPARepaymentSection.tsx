import React, { useContext, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
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
  Users
} from "lucide-react";
import { NavigationContext } from "../App";
import { BankLogo } from "./BankLogos";

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
    description: "India's largest public sector bank with comprehensive NPA recovery programs"
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
    description: "Leading private sector bank with digital-first NPA resolution"
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
    description: "Focused on rural and semi-urban NPA recovery with flexible payment options"
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
    description: "Public sector bank with strong presence in agricultural loan NPAs"
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
    description: "Technology-driven NPA management with 24/7 payment options"
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
    description: "Traditional public sector bank with personalized NPA recovery support"
  }
];

const repaymentExamples = [
  {
    originalAmount: 50000,
    outstandingAmount: 32000,
    dailyPayment: 100,
    weeklyPayment: 700,
    monthlyPayment: 2800,
    timeToRepay: "11 months"
  }
];

const features = [
  {
    icon: Clock,
    title: "Flexible Schedule",
    description: "Pay daily, weekly, or monthly as per your convenience"
  },
  {
    icon: IndianRupee,
    title: "Any Amount",
    description: "Make payments as low as ₹10 or as much as you can afford"
  },
  {
    icon: TrendingDown,
    title: "Reduce Interest",
    description: "Lower your outstanding balance and save on interest costs"
  },
  {
    icon: CheckCircle,
    title: "Improve Credit",
    description: "Build back your credit score with consistent payments"
  }
];

export function NPARepaymentSection() {
  const { setNavigation } = useContext(NavigationContext);
  const [selectedBank, setSelectedBank] = useState<typeof npaPartnerBanks[0] | null>(null);
  const [selectedPayment, setSelectedPayment] = useState('daily');
  const [customAmount, setCustomAmount] = useState('');

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

  // Bank Selection View
  if (!selectedBank) {
    return (
      <section id="repayments" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full mb-4">
              <CreditCard className="size-4" />
              NPA Repayment Platform
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Select Your Bank for NPA Repayment
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose your bank to start flexible loan repayments. Our platform supports major Indian banks 
              with dedicated NPA recovery programs and flexible payment options.
            </p>
          </div>

          {/* Bank Selection Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {npaPartnerBanks.map((bank) => (
              <Card key={bank.id} className="relative border hover:shadow-lg transition-shadow cursor-pointer group" onClick={() => handleBankSelect(bank)}>
                {bank.popular && (
                  <Badge className="absolute -top-2 right-4 bg-green-500 hover:bg-green-600 z-10">
                    Popular
                  </Badge>
                )}
                
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <BankLogo bankKey={bank.logoKey} size="lg" />
                      <div>
                        <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                          {bank.name}
                        </CardTitle>
                        <p className="text-sm text-gray-600">{bank.shortName}</p>
                      </div>
                    </div>
                    <ArrowRight className="size-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {bank.description}
                  </p>

                  {/* Key Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-lg font-bold text-blue-600">{bank.averageRecovery}</div>
                      <div className="text-xs text-gray-600">Recovery Rate</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-lg font-bold text-green-600">₹{bank.minPayment}</div>
                      <div className="text-xs text-gray-600">Min Payment</div>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <IndianRupee className="size-4" />
                      <span>Total NPAs: {bank.totalNPAs}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users className="size-4" />
                      <span>Active Users: {bank.activeUsers}</span>
                    </div>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700 group-hover:bg-blue-700">
                    Start Repayment
                    <ArrowRight className="size-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom Info */}
          <div className="text-center">
            <Card className="p-6 bg-gradient-to-r from-blue-50 to-green-50 border-0 max-w-3xl mx-auto">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">
                  Why Choose Kaniro for NPA Repayments?
                </h3>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">6+</div>
                    <div className="text-sm text-gray-600">Partner Banks</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">73%</div>
                    <div className="text-sm text-gray-600">Avg Recovery Rate</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">8M+</div>
                    <div className="text-sm text-gray-600">Active Users</div>
                  </div>
                </div>
                <p className="text-gray-600">
                  Flexible payments starting from ₹5/day • Real-time bank updates • Improve your credit score
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  // Bank-Specific Repayment View
  return (
    <section id="repayments" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header with Back Button */}
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={handleBackToBanks}
            className="mb-4 hover:bg-blue-50"
          >
            <ArrowLeft className="size-4 mr-2" />
            Back to Banks
          </Button>
          
          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-4">
              <BankLogo bankKey={selectedBank.logoKey} size="sm" />
              <span className="font-medium">{selectedBank.name} NPA Repayment</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Flexible Loan Repayments Made Easy
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Start your repayment journey with {selectedBank.name}. Make payments as low as ₹{selectedBank.minPayment}/day 
              and rebuild your financial standing with our flexible payment options.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Calculator/Demo */}
          <div className="space-y-6">
            <Card className="p-6">
              <CardHeader className="px-0 pb-4">
                <CardTitle className="flex items-center gap-2">
                  <IndianRupee className="size-5 text-green-600" />
                  Repayment Calculator - {selectedBank.shortName}
                </CardTitle>
                <p className="text-sm text-gray-600">
                  See how flexible payments can help clear your dues with {selectedBank.name}
                </p>
              </CardHeader>
              
              <CardContent className="px-0 space-y-6">
                {/* Bank-specific Info */}
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-2">
                    {selectedBank.name} - Recovery Stats
                  </h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Avg Recovery Rate:</span>
                      <div className="font-semibold text-blue-700">{selectedBank.averageRecovery}</div>
                    </div>
                    <div>
                      <span className="text-gray-600">Active Users:</span>
                      <div className="font-semibold text-blue-700">{selectedBank.activeUsers}</div>
                    </div>
                  </div>
                </div>

                {/* Example Scenario */}
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <h4 className="font-medium text-red-800 mb-2">Example Scenario</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Original Loan:</span>
                      <div className="font-semibold text-red-700">₹50,000</div>
                    </div>
                    <div>
                      <span className="text-gray-600">Outstanding:</span>
                      <div className="font-semibold text-red-700">₹32,000</div>
                    </div>
                  </div>
                </div>

                {/* Payment Options */}
                <div className="space-y-4">
                  <h4 className="font-medium text-gray-900">Choose Your Payment Plan:</h4>
                  
                  <div className="grid gap-3">
                    <div className={`flex items-center justify-between p-3 border rounded-lg cursor-pointer transition-colors ${
                      selectedPayment === 'daily' ? 'bg-green-50 border-green-200' : 'hover:bg-green-50'
                    }`} onClick={() => setSelectedPayment('daily')}>
                      <div className="flex items-center gap-3">
                        <input 
                          type="radio" 
                          name="payment" 
                          id="daily" 
                          className="text-green-600" 
                          checked={selectedPayment === 'daily'}
                          onChange={() => setSelectedPayment('daily')}
                        />
                        <label htmlFor="daily" className="cursor-pointer">
                          <div className="font-medium">Daily Payment</div>
                          <div className="text-sm text-gray-600">₹{Math.max(selectedBank.minPayment, 100)}/day • Clear in ~11 months</div>
                        </label>
                      </div>
                      <Badge variant="secondary" className="bg-green-100 text-green-700">
                        Recommended
                      </Badge>
                    </div>
                    
                    <div className={`flex items-center justify-between p-3 border rounded-lg cursor-pointer transition-colors ${
                      selectedPayment === 'weekly' ? 'bg-blue-50 border-blue-200' : 'hover:bg-blue-50'
                    }`} onClick={() => setSelectedPayment('weekly')}>
                      <div className="flex items-center gap-3">
                        <input 
                          type="radio" 
                          name="payment" 
                          id="weekly" 
                          checked={selectedPayment === 'weekly'}
                          onChange={() => setSelectedPayment('weekly')}
                        />
                        <label htmlFor="weekly" className="cursor-pointer">
                          <div className="font-medium">Weekly Payment</div>
                          <div className="text-sm text-gray-600">₹{Math.max(selectedBank.minPayment * 7, 700)}/week • Clear in ~11 months</div>
                        </label>
                      </div>
                    </div>
                    
                    <div className={`flex items-center justify-between p-3 border rounded-lg cursor-pointer transition-colors ${
                      selectedPayment === 'monthly' ? 'bg-blue-50 border-blue-200' : 'hover:bg-blue-50'
                    }`} onClick={() => setSelectedPayment('monthly')}>
                      <div className="flex items-center gap-3">
                        <input 
                          type="radio" 
                          name="payment" 
                          id="monthly" 
                          checked={selectedPayment === 'monthly'}
                          onChange={() => setSelectedPayment('monthly')}
                        />
                        <label htmlFor="monthly" className="cursor-pointer">
                          <div className="font-medium">Monthly Payment</div>
                          <div className="text-sm text-gray-600">₹{Math.max(selectedBank.minPayment * 30, 2800)}/month • Clear in ~11 months</div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Custom Amount */}
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900">Or Enter Custom Amount (Min: ₹{selectedBank.minPayment}):</h4>
                  <div className="flex gap-2">
                    <Input 
                      placeholder={`Enter amount (min ₹${selectedBank.minPayment})...`}
                      className="flex-1" 
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      type="number"
                      min={selectedBank.minPayment}
                    />
                    <Button variant="outline" onClick={handleCalculate}>
                      Calculate
                    </Button>
                  </div>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={handleStartRepayment}>
                  Start Repayment with {selectedBank.shortName}
                  <ArrowRight className="size-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card className="p-6 bg-gradient-to-br from-green-50 to-blue-50 border-0">
              <h3 className="font-semibold text-gray-900 mb-4">Why Choose {selectedBank.name}?</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <CheckCircle className="size-4 text-green-600 flex-shrink-0" />
                  <span>Minimum payment as low as ₹{selectedBank.minPayment}/day</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <CheckCircle className="size-4 text-green-600 flex-shrink-0" />
                  <span>{selectedBank.averageRecovery} average recovery rate</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <CheckCircle className="size-4 text-green-600 flex-shrink-0" />
                  <span>Trusted by {selectedBank.activeUsers} users</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <CheckCircle className="size-4 text-green-600 flex-shrink-0" />
                  <span>Real-time updates to bank's system</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Features Grid */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900">Platform Features</h3>
            
            <div className="grid gap-4">
              {features.map((feature, index) => (
                <Card key={index} className="p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-blue-100 rounded-lg flex-shrink-0">
                      <feature.icon className="size-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Bank Integration */}
            <Card className="p-6 bg-white border">
              <h4 className="font-semibold text-gray-900 mb-3">Bank Integration - {selectedBank.name}</h4>
              <p className="text-sm text-gray-600 mb-4">
                Direct integration with {selectedBank.name} systems for real-time NPA tracking and recovery updates.
              </p>
              <div className="flex gap-3">
                <Button variant="outline" size="sm" onClick={handleBankLogin}>
                  {selectedBank.shortName} Login
                </Button>
                <Button variant="outline" size="sm" onClick={handleIntegrationGuide}>
                  Integration Guide
                </Button>
              </div>
            </Card>

            {/* Success Stories */}
            <Card className="p-6 bg-gradient-to-br from-yellow-50 to-orange-50 border-0">
              <h4 className="font-semibold text-gray-900 mb-3">Success Stories - {selectedBank.name}</h4>
              <div className="space-y-3">
                <blockquote className="text-sm text-gray-700 italic">
                  "Started with ₹{selectedBank.minPayment * 5}/day payments at {selectedBank.shortName}. Cleared my ₹15,000 loan in 8 months!"
                </blockquote>
                <div className="text-xs text-gray-600">- Rajesh K., Small Trader, Kerala</div>
                
                <blockquote className="text-sm text-gray-700 italic">
                  "{selectedBank.name}'s flexible system helped me pay weekly. No more stress about lump sum EMIs."
                </blockquote>
                <div className="text-xs text-gray-600">- Priya S., Daily Wage Worker, Tamil Nadu</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}