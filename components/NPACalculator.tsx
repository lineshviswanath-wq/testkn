import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { 
  Calculator, 
  TrendingDown, 
  CreditCard, 
  Shield, 
  Target,
  CheckCircle,
  AlertTriangle,
  IndianRupee,
  Calendar,
  BarChart3,
  Percent,
  ArrowRight,
  RefreshCw,
  Info,
  Clock,
  TrendingUp,
  DollarSign,
  Award
} from "lucide-react";
import { motion } from "motion/react";

interface MicroRepaymentCalculation {
  currentLoanAmount: number;
  monthlyRepayment: number;
  totalRepaymentPeriod: number;
  totalInterest: number;
  creditScoreImprovement: number;
  monthlyEMI: number;
  yearlyRepayment: number;
  totalSavings: number;
  dailyAmount: number;
  weeklyAmount: number;
  yearlyProjection: {
    totalPaid: number;
    interestSaved: number;
    principalReduction: number;
  };
}

export function NPACalculator() {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [currentInterestRate, setCurrentInterestRate] = useState(18.5);
  const [newInterestRate, setNewInterestRate] = useState(12.5);
  const [repaymentTenure, setRepaymentTenure] = useState(24);
  const [monthlyPayment, setMonthlyPayment] = useState(25000);
  const [calculation, setCalculation] = useState<MicroRepaymentCalculation | null>(null);
  const [activeTab, setActiveTab] = useState<'calculator' | 'projection'>('calculator');
  const [repaymentType, setRepaymentType] = useState<'daily' | 'weekly' | 'monthly'>('daily');
  const [microAmount, setMicroAmount] = useState(100);

  // Interest rate presets
  const interestPresets = [
    { label: "Current High Rate", value: 18.5, color: "red" },
    { label: "Restructured Rate", value: 15.0, color: "orange" },
    { label: "DABBA PAY Rate", value: 12.5, color: "green" },
    { label: "Best Case Rate", value: 10.0, color: "blue" }
  ];

  // Calculate micro repayment details
  const calculateMicroRepaymentDetails = () => {
    // Current EMI calculation at higher interest rate
    const currentMonthlyRate = currentInterestRate / 100 / 12;
    const currentNumPayments = repaymentTenure;
    const currentEMI = (loanAmount * currentMonthlyRate * Math.pow(1 + currentMonthlyRate, currentNumPayments)) / 
                      (Math.pow(1 + currentMonthlyRate, currentNumPayments) - 1);
    
    // New EMI calculation at reduced interest rate
    const newMonthlyRate = newInterestRate / 100 / 12;
    const newEMI = (loanAmount * newMonthlyRate * Math.pow(1 + newMonthlyRate, currentNumPayments)) / 
                   (Math.pow(1 + newMonthlyRate, currentNumPayments) - 1);
    
    // Calculate micro repayment based on frequency
    let dailyAmount = microAmount;
    let weeklyAmount = microAmount;
    let monthlyEquivalent = 0;
    
    if (repaymentType === 'daily') {
      monthlyEquivalent = microAmount * 30; // Average days per month
      weeklyAmount = microAmount * 7;
    } else if (repaymentType === 'weekly') {
      monthlyEquivalent = microAmount * 4.33; // Average weeks per month
      dailyAmount = microAmount / 7;
    } else {
      monthlyEquivalent = microAmount;
      dailyAmount = microAmount / 30;
      weeklyAmount = microAmount / 4.33;
    }
    
    // Total amounts
    const currentTotalAmount = currentEMI * currentNumPayments;
    const newTotalAmount = newEMI * currentNumPayments;
    const totalSavings = currentTotalAmount - newTotalAmount;
    
    // Interest calculations
    const currentTotalInterest = currentTotalAmount - loanAmount;
    const newTotalInterest = newTotalAmount - loanAmount;
    
    // Credit score improvement (estimated)
    const creditScoreImprovement = Math.min(120, Math.round((totalSavings / loanAmount) * 200));
    
    // Yearly projection calculations
    const yearlyPaid = monthlyEquivalent * 12;
    const yearlyInterestReduction = (currentInterestRate - newInterestRate) / 100 * loanAmount;
    const yearlyPrincipalReduction = yearlyPaid - (loanAmount * newInterestRate / 100);
    
    const calculationResult: MicroRepaymentCalculation = {
      currentLoanAmount: loanAmount,
      monthlyRepayment: monthlyEquivalent,
      totalRepaymentPeriod: repaymentTenure,
      totalInterest: newTotalInterest,
      creditScoreImprovement,
      monthlyEMI: newEMI,
      yearlyRepayment: yearlyPaid,
      totalSavings,
      dailyAmount,
      weeklyAmount,
      yearlyProjection: {
        totalPaid: yearlyPaid,
        interestSaved: yearlyInterestReduction,
        principalReduction: Math.max(0, yearlyPrincipalReduction)
      }
    };
    
    setCalculation(calculationResult);
  };

  useEffect(() => {
    calculateMicroRepaymentDetails();
  }, [loanAmount, currentInterestRate, newInterestRate, repaymentTenure, monthlyPayment, repaymentType, microAmount]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const handleReset = () => {
    setLoanAmount(500000);
    setCurrentInterestRate(18.5);
    setNewInterestRate(12.5);
    setRepaymentTenure(24);
    setMonthlyPayment(25000);
    setRepaymentType('daily');
    setMicroAmount(100);
  };

  return (
    <section id="npa-calculator" className="py-16 bg-gradient-to-br from-blue-50 to-green-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <motion.div
        className="absolute top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-400/10 to-green-400/10 rounded-full blur-3xl"
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
        className="absolute bottom-20 -left-20 w-32 h-32 bg-gradient-to-br from-green-400/10 to-blue-400/10 rounded-full blur-3xl"
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
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Calculator className="size-5" />
            </motion.div>
            <span className="font-bold text-lg">DABBA PAY Micro Repayment Calculator</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Calculate <span className="text-[#1E4A72]">Micro Repayments - Due Loans</span> and 
            <span className="text-[#22C55E]"> Benefits</span>
          </motion.h2>
          
          <motion.div 
            className="space-y-4 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-600">
              Compare current loan rates with DABBA PAY's restructured repayment plans and 
              <span className="font-semibold text-[#1E4A72]"> discover potential savings</span> and financial benefits.
            </p>
          </motion.div>
        </motion.div>

        {/* Calculator Interface */}
        <motion.div 
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl">
            <CardHeader className="text-center pb-6">
              <div className="flex justify-center gap-2 mb-4">
                <Button
                  variant={activeTab === 'calculator' ? 'default' : 'outline'}
                  onClick={() => setActiveTab('calculator')}
                  className={activeTab === 'calculator' ? 'bg-[#1E4A72] hover:bg-[#1E4A72]/90' : ''}
                >
                  <Calculator className="size-4 mr-2" />
                  Calculator
                </Button>
                <Button
                  variant={activeTab === 'projection' ? 'default' : 'outline'}
                  onClick={() => setActiveTab('projection')}
                  className={activeTab === 'projection' ? 'bg-[#22C55E] hover:bg-[#22C55E]/90' : ''}
                >
                  <BarChart3 className="size-4 mr-2" />
                  Projection
                </Button>
              </div>
              <CardTitle className="flex items-center justify-center gap-2">
                <TrendingDown className="size-6 text-[#1E4A72]" />
                Micro Repayments - Due Loans Calculator
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleReset}
                    className="ml-2"
                  >
                    <RefreshCw className="size-4" />
                  </Button>
                </motion.div>
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-8">
              {activeTab === 'calculator' && (
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Input Controls */}
                  <div className="space-y-6">
                    {/* Micro Repayment Section */}
                    <motion.div 
                      className="space-y-4 p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border-2 border-orange-200"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center justify-between">
                        <Label className="text-lg font-bold text-orange-800 flex items-center gap-2">
                          <DollarSign className="size-5 text-orange-600" />
                          Micro Repayment Plan
                        </Label>
                        <Badge className="bg-orange-200 text-orange-800">
                          DABBA PAY Special
                        </Badge>
                      </div>
                      
                      <Tabs value={repaymentType} onValueChange={(value) => setRepaymentType(value as 'daily' | 'weekly' | 'monthly')}>
                        <TabsList className="grid w-full grid-cols-3">
                          <TabsTrigger value="daily" className="text-sm">Daily</TabsTrigger>
                          <TabsTrigger value="weekly" className="text-sm">Weekly</TabsTrigger>
                          <TabsTrigger value="monthly" className="text-sm">Monthly</TabsTrigger>
                        </TabsList>
                        
                        <TabsContent value="daily" className="space-y-3 mt-4">
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium text-orange-700">Daily Amount</span>
                              <Badge variant="outline" className="bg-orange-50 border-orange-300">
                                {formatCurrency(microAmount)}/day
                              </Badge>
                            </div>
                            <Slider
                              value={[microAmount]}
                              onValueChange={(value) => setMicroAmount(value[0])}
                              max={1000}
                              min={50}
                              step={25}
                              className="w-full"
                            />
                            <div className="flex justify-between text-xs text-orange-600">
                              <span>₹50/day</span>
                              <span>₹1,000/day</span>
                            </div>
                          </div>
                        </TabsContent>
                        
                        <TabsContent value="weekly" className="space-y-3 mt-4">
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium text-orange-700">Weekly Amount</span>
                              <Badge variant="outline" className="bg-orange-50 border-orange-300">
                                {formatCurrency(microAmount)}/week
                              </Badge>
                            </div>
                            <Slider
                              value={[microAmount]}
                              onValueChange={(value) => setMicroAmount(value[0])}
                              max={7000}
                              min={350}
                              step={175}
                              className="w-full"
                            />
                            <div className="flex justify-between text-xs text-orange-600">
                              <span>₹350/week</span>
                              <span>₹7,000/week</span>
                            </div>
                          </div>
                        </TabsContent>
                        
                        <TabsContent value="monthly" className="space-y-3 mt-4">
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium text-orange-700">Monthly Amount</span>
                              <Badge variant="outline" className="bg-orange-50 border-orange-300">
                                {formatCurrency(microAmount)}/month
                              </Badge>
                            </div>
                            <Slider
                              value={[microAmount]}
                              onValueChange={(value) => setMicroAmount(value[0])}
                              max={30000}
                              min={1500}
                              step={750}
                              className="w-full"
                            />
                            <div className="flex justify-between text-xs text-orange-600">
                              <span>₹1,500/month</span>
                              <span>₹30,000/month</span>
                            </div>
                          </div>
                        </TabsContent>
                      </Tabs>
                      
                      {calculation && (
                        <div className="grid grid-cols-3 gap-2 mt-4">
                          <div className="text-center p-2 bg-white rounded-lg">
                            <div className="text-xs text-gray-600">Daily</div>
                            <div className="text-sm font-bold text-orange-600">₹{Math.round(calculation.dailyAmount)}</div>
                          </div>
                          <div className="text-center p-2 bg-white rounded-lg">
                            <div className="text-xs text-gray-600">Weekly</div>
                            <div className="text-sm font-bold text-orange-600">₹{Math.round(calculation.weeklyAmount)}</div>
                          </div>
                          <div className="text-center p-2 bg-white rounded-lg">
                            <div className="text-xs text-gray-600">Monthly</div>
                            <div className="text-sm font-bold text-orange-600">₹{Math.round(calculation.monthlyRepayment)}</div>
                          </div>
                        </div>
                      )}
                    </motion.div>

                    {/* Loan Amount */}
                    <motion.div 
                      className="space-y-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center justify-between">
                        <Label className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                          <IndianRupee className="size-5 text-[#1E4A72]" />
                          Outstanding Loan Amount
                        </Label>
                        <Badge variant="outline" className="bg-blue-50">
                          {formatCurrency(loanAmount)}
                        </Badge>
                      </div>
                      <div className="space-y-3">
                        <Slider
                          value={[loanAmount]}
                          onValueChange={(value) => setLoanAmount(value[0])}
                          max={5000000}
                          min={50000}
                          step={25000}
                          className="w-full"
                        />
                        <Input
                          type="number"
                          value={loanAmount}
                          onChange={(e) => setLoanAmount(Number(e.target.value))}
                          className="text-center font-semibold"
                        />
                        <div className="flex justify-between text-sm text-gray-500">
                          <span>₹50K</span>
                          <span>₹50L</span>
                        </div>
                      </div>
                    </motion.div>

                    {/* Current Interest Rate */}
                    <motion.div 
                      className="space-y-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center justify-between">
                        <Label className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                          <AlertTriangle className="size-5 text-red-500" />
                          Current Loan Interest Rate
                        </Label>
                        <Badge variant="destructive">
                          {currentInterestRate}% p.a.
                        </Badge>
                      </div>
                      <div className="space-y-3">
                        <Slider
                          value={[currentInterestRate]}
                          onValueChange={(value) => setCurrentInterestRate(value[0])}
                          max={30}
                          min={15}
                          step={0.5}
                          className="w-full"
                        />
                        <Input
                          type="number"
                          value={currentInterestRate}
                          onChange={(e) => setCurrentInterestRate(Number(e.target.value))}
                          className="text-center font-semibold"
                          step="0.5"
                        />
                      </div>
                    </motion.div>

                    {/* New Interest Rate */}
                    <motion.div 
                      className="space-y-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center justify-between">
                        <Label className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                          <CheckCircle className="size-5 text-[#22C55E]" />
                          DABBA PAY Restructured Rate
                        </Label>
                        <Badge className="bg-green-100 text-green-800">
                          {newInterestRate}% p.a.
                        </Badge>
                      </div>
                      <div className="space-y-3">
                        <Slider
                          value={[newInterestRate]}
                          onValueChange={(value) => setNewInterestRate(value[0])}
                          max={20}
                          min={8}
                          step={0.5}
                          className="w-full"
                        />
                        <div className="grid grid-cols-2 gap-2">
                          {interestPresets.map((preset) => (
                            <motion.div
                              key={preset.value}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => setNewInterestRate(preset.value)}
                                className={`w-full text-xs ${
                                  newInterestRate === preset.value 
                                    ? 'border-green-500 bg-green-50' 
                                    : ''
                                }`}
                              >
                                {preset.label}
                                <br />
                                <span className="font-bold">{preset.value}%</span>
                              </Button>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>

                    {/* Repayment Tenure */}
                    <motion.div 
                      className="space-y-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center justify-between">
                        <Label className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                          <Calendar className="size-5 text-[#1E4A72]" />
                          Repayment Tenure
                        </Label>
                        <Badge variant="outline">
                          {repaymentTenure} months ({Math.round(repaymentTenure/12*10)/10} years)
                        </Badge>
                      </div>
                      <div className="space-y-3">
                        <Slider
                          value={[repaymentTenure]}
                          onValueChange={(value) => setRepaymentTenure(value[0])}
                          max={60}
                          min={6}
                          step={6}
                          className="w-full"
                        />
                        <div className="flex justify-between text-sm text-gray-500">
                          <span>6 months</span>
                          <span>5 years</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Results Display */}
                  <div className="space-y-6">
                    {calculation && (
                      <>
                        {/* Yearly Projection */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.1 }}
                          viewport={{ once: true }}
                        >
                          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-0 shadow-lg">
                            <CardContent className="p-6">
                              <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                                <Calendar className="size-5 text-purple-600" />
                                Yearly Projection with Micro Repayment
                              </h4>
                              <div className="grid grid-cols-3 gap-4">
                                <div className="text-center p-4 bg-white rounded-lg">
                                  <div className="text-sm text-gray-600 mb-1">Total Paid</div>
                                  <div className="text-xl font-bold text-purple-600">
                                    {formatCurrency(calculation.yearlyProjection.totalPaid)}
                                  </div>
                                  <div className="text-xs text-gray-500">Per Year</div>
                                </div>
                                <div className="text-center p-4 bg-white rounded-lg">
                                  <div className="text-sm text-gray-600 mb-1">Interest Saved</div>
                                  <div className="text-xl font-bold text-green-600">
                                    {formatCurrency(calculation.yearlyProjection.interestSaved)}
                                  </div>
                                  <div className="text-xs text-gray-500">Annually</div>
                                </div>
                                <div className="text-center p-4 bg-white rounded-lg">
                                  <div className="text-sm text-gray-600 mb-1">Principal Reduced</div>
                                  <div className="text-xl font-bold text-blue-600">
                                    {formatCurrency(calculation.yearlyProjection.principalReduction)}
                                  </div>
                                  <div className="text-xs text-gray-500">Per Year</div>
                                </div>
                              </div>
                              <div className="mt-4 p-3 bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg">
                                <div className="text-sm text-purple-700 font-medium">
                                  💡 Benefit: With {repaymentType} payments of ₹{microAmount}, you save {formatCurrency(calculation.yearlyProjection.interestSaved)} in interest annually!
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>

                        {/* Monthly EMI Comparison */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          viewport={{ once: true }}
                        >
                          <Card className="bg-gradient-to-r from-red-50 to-green-50 border-0 shadow-lg">
                            <CardContent className="p-6">
                              <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                                <CreditCard className="size-5 text-[#1E4A72]" />
                                Monthly EMI Comparison
                              </h4>
                              <div className="grid grid-cols-2 gap-4">
                                <div className="text-center p-4 bg-red-100 rounded-lg">
                                  <div className="text-sm text-gray-600 mb-1">Current High EMI</div>
                                  <div className="text-xl font-bold text-red-600">
                                    {formatCurrency((loanAmount * (currentInterestRate/100/12) * Math.pow(1 + currentInterestRate/100/12, repaymentTenure)) / (Math.pow(1 + currentInterestRate/100/12, repaymentTenure) - 1))}
                                  </div>
                                </div>
                                <div className="text-center p-4 bg-green-100 rounded-lg">
                                  <div className="text-sm text-gray-600 mb-1">DABBA PAY EMI</div>
                                  <div className="text-xl font-bold text-green-600">
                                    {formatCurrency(calculation.monthlyEMI)}
                                  </div>
                                </div>
                              </div>
                              <div className="mt-4 text-center">
                                <div className="text-sm text-gray-600">Monthly Savings</div>
                                <div className="text-2xl font-bold text-[#22C55E]">
                                  {formatCurrency(((loanAmount * (currentInterestRate/100/12) * Math.pow(1 + currentInterestRate/100/12, repaymentTenure)) / (Math.pow(1 + currentInterestRate/100/12, repaymentTenure) - 1)) - calculation.monthlyEMI)}
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>

                        {/* Total Savings and Comparison */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                          viewport={{ once: true }}
                        >
                          <Card className="bg-gradient-to-r from-green-50 to-orange-50 border-0 shadow-lg">
                            <CardContent className="p-6">
                              <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                                <Target className="size-5 text-[#22C55E]" />
                                Micro Repayment vs Traditional EMI
                              </h4>
                              <div className="grid grid-cols-2 gap-4 mb-4">
                                <div className="text-center p-4 bg-red-100 rounded-lg">
                                  <div className="text-sm text-gray-600 mb-1">Traditional EMI</div>
                                  <div className="text-xl font-bold text-red-600">
                                    {formatCurrency(calculation.monthlyEMI)}
                                  </div>
                                  <div className="text-xs text-red-500">Fixed Monthly</div>
                                </div>
                                <div className="text-center p-4 bg-orange-100 rounded-lg">
                                  <div className="text-sm text-gray-600 mb-1">Micro Payment</div>
                                  <div className="text-xl font-bold text-orange-600">
                                    {formatCurrency(calculation.monthlyRepayment)}
                                  </div>
                                  <div className="text-xs text-orange-500">Flexible {repaymentType}</div>
                                </div>
                              </div>
                              
                              <div className="text-center p-4 bg-gradient-to-r from-[#22C55E] to-[#1E4A72] text-white rounded-lg">
                                <div className="text-sm font-medium mb-1">Total Interest Savings</div>
                                <div className="text-2xl font-bold">
                                  {formatCurrency(calculation.totalSavings)}
                                </div>
                                <div className="text-xs opacity-90">
                                  Over {repaymentTenure} months | {Math.round((calculation.totalSavings / (loanAmount + (loanAmount * currentInterestRate/100 * repaymentTenure/12))) * 100)}% savings
                                </div>
                              </div>
                              
                              <div className="mt-4 grid grid-cols-2 gap-2">
                                <div className="text-center p-2 bg-green-50 rounded">
                                  <div className="text-xs text-gray-600">Flexibility</div>
                                  <div className="text-sm font-bold text-green-600">High</div>
                                </div>
                                <div className="text-center p-2 bg-blue-50 rounded">
                                  <div className="text-xs text-gray-600">Stress Level</div>
                                  <div className="text-sm font-bold text-blue-600">Low</div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>

                        {/* Credit Score Impact */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.4 }}
                          viewport={{ once: true }}
                        >
                          <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-0 shadow-lg">
                            <CardContent className="p-6">
                              <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                                <Shield className="size-5 text-purple-600" />
                                Credit Score Recovery
                              </h4>
                              <div className="text-center">
                                <div className="text-3xl font-bold text-purple-600 mb-2">
                                  +{calculation.creditScoreImprovement} Points
                                </div>
                                <div className="text-sm text-gray-600 mb-4">
                                  Expected improvement in 12-18 months
                                </div>
                                <div className="bg-purple-100 p-3 rounded-lg">
                                  <div className="text-xs text-purple-700">
                                    <Info className="size-4 inline mr-1" />
                                    Structured repayment improves credit history
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      </>
                    )}
                  </div>
                </div>
              )}

              {activeTab === 'projection' && calculation && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  {/* Micro Repayment Benefits Summary */}
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-0 shadow-lg">
                      <CardHeader className="pb-4">
                        <CardTitle className="flex items-center gap-2 text-orange-800">
                          <Clock className="size-5" />
                          Payment Flexibility
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="text-center p-3 bg-white rounded-lg">
                          <div className="text-2xl font-bold text-orange-600">
                            {repaymentType === 'daily' ? '365' : repaymentType === 'weekly' ? '52' : '12'}
                          </div>
                          <div className="text-sm text-gray-600">Payments per year</div>
                        </div>
                        <div className="text-xs text-orange-700 text-center">
                          Spread payments to match your income flow
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-gradient-to-br from-green-50 to-green-100 border-0 shadow-lg">
                      <CardHeader className="pb-4">
                        <CardTitle className="flex items-center gap-2 text-green-800">
                          <TrendingUp className="size-5" />
                          Interest Benefits
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="text-center p-3 bg-white rounded-lg">
                          <div className="text-2xl font-bold text-green-600">
                            {(currentInterestRate - newInterestRate).toFixed(1)}%
                          </div>
                          <div className="text-sm text-gray-600">Rate reduction</div>
                        </div>
                        <div className="text-xs text-green-700 text-center">
                          Lower interest rate with DABBA PAY
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-0 shadow-lg">
                      <CardHeader className="pb-4">
                        <CardTitle className="flex items-center gap-2 text-blue-800">
                          <Award className="size-5" />
                          Credit Recovery
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="text-center p-3 bg-white rounded-lg">
                          <div className="text-2xl font-bold text-blue-600">
                            +{calculation.creditScoreImprovement}
                          </div>
                          <div className="text-sm text-gray-600">Credit points</div>
                        </div>
                        <div className="text-xs text-blue-700 text-center">
                          Rebuild your financial health gradually
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Micro Repayment Analysis */}
                    <Card className="bg-gradient-to-br from-orange-50 to-white border-0 shadow-lg">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <BarChart3 className="size-5 text-orange-600" />
                          Micro Repayment Analysis
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-3">
                          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                            <span className="text-gray-600">Loan Amount</span>
                            <span className="font-bold">{formatCurrency(loanAmount)}</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                            <span className="text-gray-600">{repaymentType.charAt(0).toUpperCase() + repaymentType.slice(1)} Payment</span>
                            <span className="font-bold text-orange-600">₹{microAmount}</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                            <span className="text-gray-600">Yearly Total</span>
                            <span className="font-bold text-green-600">{formatCurrency(calculation.yearlyRepayment)}</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                            <span className="text-gray-600">Interest Saved/Year</span>
                            <span className="font-bold text-blue-600">{formatCurrency(calculation.yearlyProjection.interestSaved)}</span>
                          </div>
                        </div>
                        
                        <div className="p-3 bg-gradient-to-r from-orange-100 to-orange-50 rounded-lg">
                          <div className="text-sm font-medium text-orange-800 mb-2">Payment Breakdown:</div>
                          <div className="grid grid-cols-3 gap-2 text-xs">
                            <div className="text-center">
                              <div className="font-bold">Daily</div>
                              <div>₹{Math.round(calculation.dailyAmount)}</div>
                            </div>
                            <div className="text-center">
                              <div className="font-bold">Weekly</div>
                              <div>₹{Math.round(calculation.weeklyAmount)}</div>
                            </div>
                            <div className="text-center">
                              <div className="font-bold">Monthly</div>
                              <div>₹{Math.round(calculation.monthlyRepayment)}</div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* DABBA PAY Benefits */}
                    <Card className="bg-gradient-to-br from-green-50 to-white border-0 shadow-lg">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <CheckCircle className="size-5 text-[#22C55E]" />
                          DABBA PAY Advantages
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                            <CheckCircle className="size-5 text-green-600" />
                            <div>
                              <div className="font-semibold">Interest Rate Reduction</div>
                              <div className="text-sm text-gray-600">
                                From {currentInterestRate}% to {newInterestRate}% p.a.
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                            <Clock className="size-5 text-orange-600" />
                            <div>
                              <div className="font-semibold">Flexible Payment Schedule</div>
                              <div className="text-sm text-gray-600">
                                Pay {repaymentType} as per your income flow
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                            <Shield className="size-5 text-blue-600" />
                            <div>
                              <div className="font-semibold">Credit Score Improvement</div>
                              <div className="text-sm text-gray-600">
                                +{calculation.creditScoreImprovement} points estimated
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                            <TrendingDown className="size-5 text-purple-600" />
                            <div>
                              <div className="font-semibold">Total Interest Savings</div>
                              <div className="text-sm text-gray-600">
                                {formatCurrency(calculation.totalSavings)} over loan tenure
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-4 p-4 bg-gradient-to-r from-[#22C55E] to-[#1E4A72] text-white rounded-lg">
                          <div className="text-center">
                            <div className="text-sm font-medium mb-1">Why Choose Micro Repayments?</div>
                            <div className="text-xs opacity-90">
                              Lower financial stress • Better cash flow management • Gradual debt reduction
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Call to Action */}
                  <Card className="bg-gradient-to-r from-orange-50 to-green-50 border-0 shadow-xl">
                    <CardContent className="p-8 text-center">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Ready to Transform Your Loan Repayment?
                      </h3>
                      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                        Start your micro repayment journey with DABBA PAY and experience the flexibility of paying {repaymentType} amounts 
                        while saving {formatCurrency(calculation.yearlyProjection.interestSaved)} annually in interest.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-8 py-3">
                          Start DABBA PAY Plan
                          <ArrowRight className="size-4 ml-2" />
                        </Button>
                        <Button variant="outline" className="border-2 border-[#1E4A72] text-[#1E4A72] hover:bg-[#1E4A72] hover:text-white px-8 py-3">
                          Calculate Different Scenarios
                          <Calculator className="size-4 ml-2" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {/* CTA Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-center pt-8"
              >
                <Button
                  className="bg-gradient-to-r from-[#1E4A72] to-[#22C55E] hover:from-[#1E4A72]/90 hover:to-[#22C55E]/90 text-white px-8 py-4 text-lg font-semibold shadow-xl"
                  size="lg"
                >
                  <span>Start Your DABBA PAY Journey</span>
                  <ArrowRight className="size-5 ml-2" />
                </Button>
                <p className="text-sm text-gray-600 mt-4 max-w-md mx-auto">
                  Begin your path to financial freedom with structured micro-repayments and expert guidance.
                </p>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}