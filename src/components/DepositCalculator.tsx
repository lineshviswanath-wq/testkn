import React, { useState, useEffect } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Calculator, TrendingUp, PiggyBank, Target, IndianRupee, Calendar, Percent, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export function DepositCalculator() {
  const [dailyAmount, setDailyAmount] = useState(50);
  const [timePeriod, setTimePeriod] = useState(12); // months
  const [timeUnit, setTimeUnit] = useState<'months' | 'years'>('months');
  const [interestRate, setInterestRate] = useState(7.5); // Editable interest rate
  
  // Calculation results
  const [totalDeposits, setTotalDeposits] = useState(0);
  const [interestEarned, setInterestEarned] = useState(0);
  const [finalAmount, setFinalAmount] = useState(0);

  // Calculate returns
  useEffect(() => {
    const periodInMonths = timeUnit === 'years' ? timePeriod * 12 : timePeriod;
    const totalDays = periodInMonths * 30; // Approximate days per month
    const totalDepositsAmount = dailyAmount * totalDays;
    
    // Simple interest calculation for micro-deposits
    const annualRate = interestRate / 100;
    const periodInYears = periodInMonths / 12;
    const interest = totalDepositsAmount * annualRate * periodInYears;
    const final = totalDepositsAmount + interest;
    
    setTotalDeposits(totalDepositsAmount);
    setInterestEarned(interest);
    setFinalAmount(final);
  }, [dailyAmount, timePeriod, timeUnit, interestRate]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const handleAmountChange = (value: string) => {
    const numValue = parseInt(value) || 0;
    if (numValue >= 10 && numValue <= 1000) {
      setDailyAmount(numValue);
    }
  };

  const handleSliderChange = (value: number[]) => {
    setDailyAmount(value[0]);
  };

  const handleInterestChange = (value: string) => {
    const numValue = parseFloat(value) || 0;
    if (numValue >= 5 && numValue <= 12) {
      setInterestRate(numValue);
    }
  };

  const handleInterestSliderChange = (value: number[]) => {
    setInterestRate(value[0]);
  };

  return (
    <section id="deposit-calculator" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 rounded-full bg-[#22C55E]/10 blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-[#1E4A72]/10 blur-xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1E4A72] to-[#22C55E] text-white px-4 py-2 rounded-full mb-4"
            animate={{ 
              boxShadow: [
                "0 4px 20px rgba(30, 74, 114, 0.3)",
                "0 8px 30px rgba(34, 197, 94, 0.4)",
                "0 4px 20px rgba(30, 74, 114, 0.3)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Calculator className="size-4" />
            <span className="font-bold text-sm">DEPOSIT CALCULATOR</span>
          </motion.div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            See Your Money{" "}
            <span className="bg-gradient-to-r from-[#1E4A72] to-[#22C55E] bg-clip-text text-transparent">
              Grow
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Calculate your potential returns with DIGIDABBA's micro-deposit plan.{" "}
            <span className="font-bold text-[#22C55E]">Start with just ₹10 daily!</span>
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Calculator Input Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="p-6 sm:p-8 bg-white/80 backdrop-blur-sm border-2 border-gray-100 shadow-2xl">
                <div className="space-y-6">
                  {/* Daily Amount Input */}
                  <div className="space-y-4">
                    <Label className="text-base font-bold text-gray-900">
                      Daily Deposit Amount
                    </Label>
                    <div className="space-y-3">
                      <div className="relative">
                        <IndianRupee className="absolute left-3 top-1/2 transform -translate-y-1/2 size-4 text-gray-500" />
                        <Input
                          type="number"
                          value={dailyAmount}
                          onChange={(e) => handleAmountChange(e.target.value)}
                          min="10"
                          max="1000"
                          className="pl-9 text-lg font-bold h-12 bg-gray-50 border-2 border-gray-200 focus:border-[#22C55E]"
                          placeholder="Enter amount"
                        />
                      </div>
                      <div className="px-2">
                        <Slider
                          value={[dailyAmount]}
                          onValueChange={handleSliderChange}
                          max={1000}
                          min={10}
                          step={10}
                          className="w-full"
                        />
                      </div>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>₹10 (Min)</span>
                        <span>₹1,000 (Max)</span>
                      </div>
                    </div>
                  </div>

                  {/* Time Period */}
                  <div className="space-y-4">
                    <Label className="text-base font-bold text-gray-900">
                      Investment Period
                    </Label>
                    <Tabs value={timeUnit} onValueChange={(value) => setTimeUnit(value as 'months' | 'years')}>
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="months" className="font-medium">MONTHS</TabsTrigger>
                        <TabsTrigger value="years" className="font-medium">YEARS</TabsTrigger>
                      </TabsList>
                      <TabsContent value="months" className="space-y-3 mt-4">
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 size-4 text-gray-500" />
                          <Input
                            type="number"
                            value={timePeriod}
                            onChange={(e) => setTimePeriod(parseInt(e.target.value) || 1)}
                            min="1"
                            max="60"
                            className="pl-9 text-lg font-bold h-12 bg-gray-50 border-2 border-gray-200 focus:border-[#1E4A72]"
                          />
                        </div>
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>1 month (Min)</span>
                          <span>60 months (Max)</span>
                        </div>
                      </TabsContent>
                      <TabsContent value="years" className="space-y-3 mt-4">
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 size-4 text-gray-500" />
                          <Input
                            type="number"
                            value={timePeriod}
                            onChange={(e) => setTimePeriod(parseInt(e.target.value) || 1)}
                            min="1"
                            max="5"
                            className="pl-9 text-lg font-bold h-12 bg-gray-50 border-2 border-gray-200 focus:border-[#1E4A72]"
                          />
                        </div>
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>1 year (Min)</span>
                          <span>5 years (Max)</span>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>

                  {/* Interest Rate Input */}
                  <div className="space-y-4">
                    <Label className="text-base font-bold text-gray-900">
                      Interest Rate (Annual)
                    </Label>
                    <div className="space-y-3">
                      <div className="relative">
                        <Percent className="absolute left-3 top-1/2 transform -translate-y-1/2 size-4 text-gray-500" />
                        <Input
                          type="number"
                          value={interestRate}
                          onChange={(e) => handleInterestChange(e.target.value)}
                          min="5"
                          max="12"
                          step="0.1"
                          className="pl-9 text-lg font-bold h-12 bg-gradient-to-r from-[#22C55E]/5 to-[#1E4A72]/5 border-2 border-[#22C55E]/30 focus:border-[#1E4A72]"
                          placeholder="Enter rate"
                        />
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                          <span className="text-sm font-medium text-[#1E4A72] bg-white px-2 py-1 rounded border">
                            + Bonus
                          </span>
                        </div>
                      </div>
                      <div className="px-2">
                        <Slider
                          value={[interestRate]}
                          onValueChange={handleInterestSliderChange}
                          max={12}
                          min={5}
                          step={0.1}
                          className="w-full"
                        />
                      </div>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>5% (Min)</span>
                        <span className="text-[#22C55E] font-medium">7.5% (Recommended)</span>
                        <span>12% (Max)</span>
                      </div>
                      
                      {/* Quick Interest Rate Presets */}
                      <div className="flex gap-2 pt-2">
                        <button
                          onClick={() => setInterestRate(6.5)}
                          className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                            interestRate === 6.5 
                              ? 'bg-[#1E4A72] text-white' 
                              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                          }`}
                        >
                          6.5%
                        </button>
                        <button
                          onClick={() => setInterestRate(7.5)}
                          className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                            interestRate === 7.5 
                              ? 'bg-[#22C55E] text-white' 
                              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                          }`}
                        >
                          7.5% ⭐
                        </button>
                        <button
                          onClick={() => setInterestRate(8.5)}
                          className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                            interestRate === 8.5 
                              ? 'bg-[#1E4A72] text-white' 
                              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                          }`}
                        >
                          8.5%
                        </button>
                        <button
                          onClick={() => setInterestRate(10)}
                          className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                            interestRate === 10 
                              ? 'bg-gradient-to-r from-[#1E4A72] to-[#22C55E] text-white' 
                              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                          }`}
                        >
                          10%
                        </button>
                      </div>
                      
                      {/* Interest Rate Indicator */}
                      <div className="mt-3 p-2 rounded-lg bg-gradient-to-r from-blue-50 to-green-50 border border-blue-100">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-600">Market Comparison:</span>
                          <span className={`font-bold ${
                            interestRate >= 8 ? 'text-green-600' : 
                            interestRate >= 7 ? 'text-blue-600' : 
                            'text-orange-600'
                          }`}>
                            {interestRate >= 8 ? '🔥 Excellent' : 
                             interestRate >= 7 ? '✅ Good' : 
                             '📊 Standard'}
                          </span>
                        </div>
                        <div className="mt-1 w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full transition-all duration-500 ${
                              interestRate >= 8 ? 'bg-gradient-to-r from-green-400 to-green-600' : 
                              interestRate >= 7 ? 'bg-gradient-to-r from-blue-400 to-blue-600' : 
                              'bg-gradient-to-r from-yellow-400 to-orange-500'
                            }`}
                            style={{ width: `${((interestRate - 5) / 7) * 100}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Results Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              {/* Main Results Card */}
              <Card className="p-6 sm:p-8 bg-gradient-to-br from-[#1E4A72] to-[#22C55E] text-white shadow-2xl relative overflow-hidden">
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      className="p-2 bg-white/20 rounded-lg"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Target className="size-6 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold">Your Investment Summary</h3>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    <motion.div 
                      className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="text-2xl sm:text-3xl font-black mb-1">
                        {formatCurrency(finalAmount)}
                      </div>
                      <div className="text-white/80 text-sm font-medium">Final Amount</div>
                    </motion.div>

                    <div className="grid grid-cols-2 gap-3">
                      <motion.div 
                        className="text-center p-3 bg-white/5 rounded-lg"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="text-lg font-bold mb-1">
                          {formatCurrency(totalDeposits)}
                        </div>
                        <div className="text-white/70 text-xs">Total Deposits</div>
                      </motion.div>

                      <motion.div 
                        className="text-center p-3 bg-white/5 rounded-lg"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="text-lg font-bold mb-1 text-green-300">
                          {formatCurrency(interestEarned)}
                        </div>
                        <div className="text-white/70 text-xs">Interest Earned</div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="p-4 bg-[#F0FDF4] border-2 border-[#22C55E]/20 text-center">
                    <PiggyBank className="size-8 text-[#22C55E] mx-auto mb-2" />
                    <div className="text-lg font-bold text-[#1E4A72]">
                      ₹{dailyAmount * (timeUnit === 'years' ? timePeriod * 365 : timePeriod * 30) / 30}/month
                    </div>
                    <div className="text-xs text-gray-600">Monthly Saving</div>
                  </Card>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="p-4 bg-[#E3F2FD] border-2 border-[#1E4A72]/20 text-center">
                    <TrendingUp className="size-8 text-[#1E4A72] mx-auto mb-2" />
                    <div className="text-lg font-bold text-[#1E4A72]">
                      {((interestEarned / totalDeposits) * 100).toFixed(1)}%
                    </div>
                    <div className="text-xs text-gray-600">Total Returns</div>
                  </Card>
                </motion.div>
              </div>

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button
                  className="w-full h-14 bg-gradient-to-r from-[#22C55E] to-[#16A34A] hover:from-[#16A34A] hover:to-[#15803D] text-white font-bold text-lg shadow-xl"
                  size="lg"
                >
                  <span>START YOUR DIGIDABBA JOURNEY</span>
                  <ArrowRight className="size-5 ml-2" />
                </Button>
              </motion.div>

              {/* Dynamic Smart Tip */}
              <motion.div
                className="text-center p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg border border-gray-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <p className="text-sm text-gray-600">
                  💡 <span className="font-semibold text-[#1E4A72]">Smart Tip:</span> 
                  {interestRate >= 8 ? (
                    ` With ${interestRate}% interest, your money grows ${((interestRate - 7.5) * 13.33).toFixed(0)}% faster than the standard rate!`
                  ) : interestRate === 7.5 ? (
                    ` At ${interestRate}% (our recommended rate), ₹${dailyAmount} daily gives you ${formatCurrency(finalAmount)} after ${timePeriod} ${timeUnit}!`
                  ) : (
                    ` Even at ${interestRate}%, daily savings of ₹${dailyAmount} still beats traditional saving methods!`
                  )}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}