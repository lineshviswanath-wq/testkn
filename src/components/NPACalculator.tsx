import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";
import { Badge } from "./ui/badge";
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
  Info
} from "lucide-react";
import { motion } from "motion/react";

interface NPACalculation {
  currentLoanAmount: number;
  monthlyRepayment: number;
  totalRepaymentPeriod: number;
  totalInterest: number;
  creditScoreImprovement: number;
  monthlyEMI: number;
  yearlyRepayment: number;
  totalSavings: number;
}

export function NPACalculator() {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [currentInterestRate, setCurrentInterestRate] = useState(18.5);
  const [newInterestRate, setNewInterestRate] = useState(12.5);
  const [repaymentTenure, setRepaymentTenure] = useState(24);
  const [monthlyPayment, setMonthlyPayment] = useState(25000);
  const [calculation, setCalculation] = useState<NPACalculation | null>(null);
  const [activeTab, setActiveTab] = useState<'calculator' | 'projection'>('calculator');

  // Interest rate presets
  const interestPresets = [
    { label: "Current High Rate", value: 18.5, color: "red" },
    { label: "Restructured Rate", value: 15.0, color: "orange" },
    { label: "DUBBAPAY Rate", value: 12.5, color: "green" },
    { label: "Best Case Rate", value: 10.0, color: "blue" }
  ];

  // Calculate NPA repayment details
  const calculateNPADetails = () => {
    // Current EMI calculation at higher interest rate
    const currentMonthlyRate = currentInterestRate / 100 / 12;
    const currentNumPayments = repaymentTenure;
    const currentEMI = (loanAmount * currentMonthlyRate * Math.pow(1 + currentMonthlyRate, currentNumPayments)) / 
                      (Math.pow(1 + currentMonthlyRate, currentNumPayments) - 1);
    
    // New EMI calculation at reduced interest rate
    const newMonthlyRate = newInterestRate / 100 / 12;
    const newEMI = (loanAmount * newMonthlyRate * Math.pow(1 + newMonthlyRate, currentNumPayments)) / 
                   (Math.pow(1 + newMonthlyRate, currentNumPayments) - 1);
    
    // Total amounts
    const currentTotalAmount = currentEMI * currentNumPayments;
    const newTotalAmount = newEMI * currentNumPayments;
    const totalSavings = currentTotalAmount - newTotalAmount;
    
    // Interest calculations
    const currentTotalInterest = currentTotalAmount - loanAmount;
    const newTotalInterest = newTotalAmount - loanAmount;
    
    // Credit score improvement (estimated)
    const creditScoreImprovement = Math.min(120, Math.round((totalSavings / loanAmount) * 200));
    
    const calculationResult: NPACalculation = {
      currentLoanAmount: loanAmount,
      monthlyRepayment: newEMI,
      totalRepaymentPeriod: repaymentTenure,
      totalInterest: newTotalInterest,
      creditScoreImprovement,
      monthlyEMI: newEMI,
      yearlyRepayment: newEMI * 12,
      totalSavings
    };
    
    setCalculation(calculationResult);
  };

  useEffect(() => {
    calculateNPADetails();
  }, [loanAmount, currentInterestRate, newInterestRate, repaymentTenure, monthlyPayment]);

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
            Calculate <span className="text-[#1E4A72]">Loan Due Repayment</span> and 
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
              Compare current loan rates with DUBBAPAY's restructured repayment plans and 
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
                Micro NPA Repayment Calculator
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
                          DUBBAPAY Restructured Rate
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
                                    ? `border-${preset.color}-500 bg-${preset.color}-50` 
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
                                  <div className="text-sm text-gray-600 mb-1">DUBBAPAY EMI</div>
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

                        {/* Total Savings */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                          viewport={{ once: true }}
                        >
                          <Card className="bg-gradient-to-r from-blue-50 to-green-50 border-0 shadow-lg">
                            <CardContent className="p-6 text-center">
                              <h4 className="font-bold text-lg mb-3 flex items-center justify-center gap-2">
                                <Target className="size-5 text-[#22C55E]" />
                                Total Savings with DUBBAPAY
                              </h4>
                              <div className="text-4xl font-black text-[#22C55E] mb-2">
                                {formatCurrency(calculation.totalSavings)}
                              </div>
                              <div className="text-sm text-gray-600 mb-4">
                                Over {repaymentTenure} months repayment period
                              </div>
                              <div className="bg-gradient-to-r from-[#22C55E] to-[#1E4A72] text-white p-3 rounded-lg">
                                <div className="text-sm font-medium">Savings Percentage</div>
                                <div className="text-xl font-bold">
                                  {Math.round((calculation.totalSavings / (loanAmount + (loanAmount * currentInterestRate/100 * repaymentTenure/12))) * 100)}%
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
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Repayment Breakdown */}
                    <Card className="bg-gradient-to-br from-blue-50 to-white border-0 shadow-lg">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <BarChart3 className="size-5 text-[#1E4A72]" />
                          Repayment Breakdown
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-3">
                          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                            <span className="text-gray-600">Principal Amount</span>
                            <span className="font-bold">{formatCurrency(loanAmount)}</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                            <span className="text-gray-600">Total Interest</span>
                            <span className="font-bold text-red-600">{formatCurrency(calculation.totalInterest)}</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                            <span className="text-gray-600">Monthly EMI</span>
                            <span className="font-bold text-green-600">{formatCurrency(calculation.monthlyEMI)}</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                            <span className="text-gray-600">Total Repayment</span>
                            <span className="font-bold text-[#1E4A72]">{formatCurrency(loanAmount + calculation.totalInterest)}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Benefits Summary */}
                    <Card className="bg-gradient-to-br from-green-50 to-white border-0 shadow-lg">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <CheckCircle className="size-5 text-[#22C55E]" />
                          DUBBAPAY Benefits
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                            <CheckCircle className="size-5 text-green-600" />
                            <div>
                              <div className="font-semibold">Reduced Interest Rate</div>
                              <div className="text-sm text-gray-600">
                                From {currentInterestRate}% to {newInterestRate}%
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                            <Shield className="size-5 text-blue-600" />
                            <div>
                              <div className="font-semibold">Credit Score Recovery</div>
                              <div className="text-sm text-gray-600">
                                +{calculation.creditScoreImprovement} point improvement
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                            <TrendingDown className="size-5 text-purple-600" />
                            <div>
                              <div className="font-semibold">Total Savings</div>
                              <div className="text-sm text-gray-600">
                                {formatCurrency(calculation.totalSavings)} over {repaymentTenure} months
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                            <Calendar className="size-5 text-orange-600" />
                            <div>
                              <div className="font-semibold">Flexible Tenure</div>
                              <div className="text-sm text-gray-600">
                                {repaymentTenure} months repayment plan
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              )}

              {/* Action Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 pt-8 border-t"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="flex-1"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    className="w-full bg-gradient-to-r from-[#22C55E] to-[#16A34A] hover:from-[#16A34A] hover:to-[#15803D] text-white shadow-lg h-14 text-lg font-bold"
                  >
                    Start NPA Repayment
                    <ArrowRight className="size-5 ml-2" />
                  </Button>
                </motion.div>
                <motion.div
                  className="flex-1"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    variant="outline" 
                    className="w-full border-2 border-[#1E4A72] text-[#1E4A72] hover:bg-[#1E4A72] hover:text-white h-14 text-lg font-bold"
                  >
                    <Calculator className="size-5 mr-2" />
                    Get Detailed Quote
                  </Button>
                </motion.div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}