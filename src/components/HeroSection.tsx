import React, { useContext } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ArrowRight, Target, CreditCard, TrendingUp, Play } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { NavigationContext } from "../App";

export function HeroSection() {
  const { setNavigation, scrollToSection } = useContext(NavigationContext);

  const handleStartJourney = () => {
    setNavigation({ showSignupModal: true });
  };

  const handleWatchDemo = () => {
    setNavigation({ showDemoModal: true });
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 to-green-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                <Target className="size-4" />
                Financial Inclusion Platform
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Bridging the Gap in
                <span className="text-blue-600"> Financial Inclusion</span>
                <br />
                <span className="text-2xl md:text-3xl font-medium text-gray-700">through Digital Banking Innovation</span>
              </h1>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Empowering Tier 2/3 India with accessible micro-deposits and flexible NPA repayments. 
                Transform your financial journey with daily savings and stress-free loan repayments.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid sm:grid-cols-2 gap-4">
              <button 
                onClick={() => scrollToSection('deposits')}
                className="flex items-center gap-3 p-4 bg-white rounded-lg border hover:shadow-md transition-shadow text-left"
              >
                <div className="p-2 bg-green-100 rounded-lg">
                  <TrendingUp className="size-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Micro Deposits</h4>
                  <p className="text-sm text-gray-600">Start saving from ₹10/day</p>
                </div>
              </button>
              
              <button 
                onClick={() => scrollToSection('repayments')}
                className="flex items-center gap-3 p-4 bg-white rounded-lg border hover:shadow-md transition-shadow text-left"
              >
                <div className="p-2 bg-blue-100 rounded-lg">
                  <CreditCard className="size-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">NPA Repayments</h4>
                  <p className="text-sm text-gray-600">Flexible daily/weekly payments</p>
                </div>
              </button>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-blue-600 hover:bg-blue-700 px-6 py-3"
                onClick={handleStartJourney}
              >
                Start Your Journey
                <ArrowRight className="size-4 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                className="px-6 py-3"
                onClick={handleWatchDemo}
              >
                <Play className="size-4 mr-2" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">450M+</div>
                <div className="text-sm text-gray-600">Target Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">₹10+</div>
                <div className="text-sm text-gray-600">Min. Daily Savings</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">25+</div>
                <div className="text-sm text-gray-600">Partner Banks</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative lg:pl-8">
            {/* Main Image Container */}
            <div className="relative z-10 mx-auto max-w-sm lg:max-w-md">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1681826291722-70bd7e9e6fc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBiYW5raW5nJTIwYXBwfGVufDF8fHx8MTc1NTQwMDEyMHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Mobile Banking App"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            
            {/* Floating Cards - Better positioned to avoid overlap */}
            <Card className="absolute top-8 left-0 lg:left-4 p-3 shadow-lg bg-white/95 backdrop-blur z-20 max-w-[140px] hidden sm:block">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                <div className="min-w-0">
                  <div className="text-xs font-semibold text-gray-900 truncate">Daily Savings</div>
                  <div className="text-xs text-gray-600">₹25 saved today</div>
                </div>
              </div>
            </Card>
            
            <Card className="absolute bottom-12 right-0 lg:right-4 p-3 shadow-lg bg-white/95 backdrop-blur z-20 max-w-[140px] hidden sm:block">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                <div className="min-w-0">
                  <div className="text-xs font-semibold text-gray-900 truncate">Loan Payment</div>
                  <div className="text-xs text-gray-600">₹100 repaid</div>
                </div>
              </div>
            </Card>

            {/* Mobile-only cards positioned below image */}
            <div className="flex justify-between gap-4 mt-6 sm:hidden">
              <Card className="p-3 shadow-lg bg-white/95 backdrop-blur flex-1">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                  <div className="min-w-0">
                    <div className="text-xs font-semibold text-gray-900">Daily Savings</div>
                    <div className="text-xs text-gray-600">₹25 saved today</div>
                  </div>
                </div>
              </Card>
              
              <Card className="p-3 shadow-lg bg-white/95 backdrop-blur flex-1">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                  <div className="min-w-0">
                    <div className="text-xs font-semibold text-gray-900">Loan Payment</div>
                    <div className="text-xs text-gray-600">₹100 repaid</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}