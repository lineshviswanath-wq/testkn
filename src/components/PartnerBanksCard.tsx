import React, { useState, useEffect } from "react";
import { Card } from "./ui/card";
import { BankLogo, bankLogos } from "./BankLogos";
import { motion } from "motion/react";
import { Building2, CreditCard, TrendingUp, Shield, CheckCircle } from "lucide-react";

// Unified partner banks - no duplicates
const partnerBanks = [
  "SBI", "HDFC", "ICICI", "Union Bank", "BOB", "Canara"
] as const;

export function PartnerBanksCard() {

  return (
    <motion.div
      className="relative z-10 mt-6 w-full max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.5 }}
    >
      <Card className="p-6 sm:p-8 bg-gradient-to-br from-white via-blue-50/20 to-green-50/20 border-2 border-gray-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden w-full">
        {/* Background animations - optimized */}
        <motion.div
          className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-[#22C55E]/10 to-[#1E4A72]/10 rounded-full"
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-[#1E4A72]/10 to-[#22C55E]/10 rounded-full"
          animate={{ rotate: -360, scale: [1, 1.2, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10">
          {/* Header Section */}
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <motion.div
                className="p-3 bg-gradient-to-r from-[#1E4A72] to-[#22C55E] rounded-full"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Building2 className="size-6 text-white" />
              </motion.div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Trusted by <span className="text-[#22C55E]">Leading Banks</span>
              </h3>
            </div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Secure partnerships with RBI-approved banks ensure your funds are protected while you save and repay with confidence
            </p>
          </motion.div>

          {/* Unified Partner Banks Display */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="mb-8"
          >
            {/* Bank Logos Grid - Better space utilization */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 sm:gap-8 justify-items-center mb-8">
              {partnerBanks.map((bankKey, index) => (
                <motion.div
                  key={bankKey}
                  className="group relative"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 1.9 + (index * 0.1)
                  }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <BankLogo 
                    bankKey={bankKey as keyof typeof bankLogos} 
                    size="lg" 
                    className="w-16 h-16 sm:w-20 sm:h-20 shadow-lg group-hover:shadow-2xl transition-all duration-300 border-2 border-white group-hover:border-[#22C55E]/30" 
                  />
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-gray-900 text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap pointer-events-none z-20">
                    {bankLogos[bankKey as keyof typeof bankLogos].name}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Service Features Grid - Better space usage */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2 }}
            className="grid md:grid-cols-2 gap-6 mb-6"
          >
            {/* Deposits Card */}
            <div className="p-6 bg-gradient-to-br from-[#F0FDF4] to-green-50 rounded-2xl border border-[#22C55E]/20 relative overflow-hidden">
              <motion.div
                className="absolute top-0 right-0 w-16 h-16 bg-[#22C55E]/10 rounded-full -mr-8 -mt-8"
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    className="p-3 bg-gradient-to-br from-[#22C55E] to-green-600 rounded-xl"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <TrendingUp className="size-5 text-white" />
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-gray-900">Micro Deposits</h4>
                    <p className="text-sm text-gray-600">Start with just ₹10 daily</p>
                  </div>
                </div>
                <div className="text-sm text-gray-700">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="size-4 text-[#22C55E]" />
                    <span>Up to 7.5% interest rate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-[#22C55E]" />
                    <span>Flexible withdrawal options</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Repayments Card */}
            <div className="p-6 bg-gradient-to-br from-[#E3F2FD] to-blue-50 rounded-2xl border border-[#1E4A72]/20 relative overflow-hidden">
              <motion.div
                className="absolute top-0 right-0 w-16 h-16 bg-[#1E4A72]/10 rounded-full -mr-8 -mt-8"
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    className="p-3 bg-gradient-to-br from-[#1E4A72] to-blue-600 rounded-xl"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <CreditCard className="size-5 text-white" />
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-gray-900">NPA Repayment</h4>
                    <p className="text-sm text-gray-600">Flexible ₹100+ installments</p>
                  </div>
                </div>
                <div className="text-sm text-gray-700">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="size-4 text-[#1E4A72]" />
                    <span>Rebuild credit score fast</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-[#1E4A72]" />
                    <span>No prepayment penalties</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            className="flex items-center justify-center gap-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 2.4 }}
          >
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Shield className="size-5 text-[#22C55E]" />
              </motion.div>
              <span className="text-sm font-medium text-gray-700">RBI Approved</span>
            </div>
            <div className="w-px h-4 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Building2 className="size-5 text-[#1E4A72]" />
              </motion.div>
              <span className="text-sm font-medium text-gray-700">Bank-Grade Security</span>
            </div>
            <div className="w-px h-4 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <CheckCircle className="size-5 text-[#22C55E]" />
              </motion.div>
              <span className="text-sm font-medium text-gray-700">100% Secure</span>
            </div>
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
}