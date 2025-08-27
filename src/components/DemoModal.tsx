import React, { useContext, useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Play, Pause, TrendingUp, CreditCard, ArrowRight, CheckCircle2 } from 'lucide-react';
import { NavigationContext } from '../App';
import { motion, AnimatePresence } from 'motion/react';

export function DemoModal() {
  const { navigation, setNavigation } = useContext(NavigationContext);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleClose = () => {
    setNavigation({ showDemoModal: false });
    setCurrentSlide(0);
    setIsPlaying(false);
    setProgress(0);
  };

  const handleStart = () => {
    setNavigation({ showSignupModal: true });
    handleClose();
  };

  const slides = [
    {
      id: 'welcome',
      title: 'Welcome to Kaniro Financial Services',
      subtitle: 'Transforming Banking for Tier 2/3 India',
      content: (
        <div className="text-center space-y-6">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-green-500 rounded-full mx-auto flex items-center justify-center">
            <span className="text-white font-bold text-2xl">K</span>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Bridging critical gaps in the Indian financial ecosystem through accessible micro-deposits 
            and flexible NPA repayments designed specifically for underserved communities.
          </p>
          <div className="flex justify-center gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">450M+</div>
              <div className="text-sm text-gray-500">Target Users</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">₹10</div>
              <div className="text-sm text-gray-500">Min Daily Save</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">25+</div>
              <div className="text-sm text-gray-500">Partner Banks</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'problem',
      title: 'The Challenge',
      subtitle: 'Financial Exclusion in Tier 2/3 India',
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-red-50 rounded-lg border-l-4 border-red-400">
              <h3 className="font-semibold text-red-800 mb-3">Current Problems</h3>
              <ul className="space-y-2 text-red-700">
                <li>• Limited access to banking services</li>
                <li>• High minimum balance requirements</li>
                <li>• Rigid loan repayment schedules</li>
                <li>• Poor digital banking experiences</li>
              </ul>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg border-l-4 border-blue-400">
              <h3 className="font-semibold text-blue-800 mb-3">Our Mission</h3>
              <ul className="space-y-2 text-blue-700">
                <li>• Accessible micro-savings for all</li>
                <li>• Flexible repayment options</li>
                <li>• Mobile-first design approach</li>
                <li>• Partnership with trusted banks</li>
              </ul>
            </div>
          </div>
          <div className="text-center">
            <p className="text-lg text-gray-600">
              Empowering financial inclusion through innovative digital solutions
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'microdeposits',
      title: 'Micro Deposits',
      subtitle: 'Start Your Savings Journey with Just ₹10/Day',
      content: (
        <div className="space-y-6">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto flex items-center justify-center mb-4">
              <TrendingUp className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">How Micro Deposits Work</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            <motion.div 
              className="text-center p-4 border rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="font-bold text-green-600">1</span>
              </div>
              <h4 className="font-semibold mb-2">Choose Amount</h4>
              <p className="text-sm text-gray-600">Start with as little as ₹10 per day</p>
            </motion.div>
            
            <motion.div 
              className="text-center p-4 border rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="font-bold text-green-600">2</span>
              </div>
              <h4 className="font-semibold mb-2">Auto-Save</h4>
              <p className="text-sm text-gray-600">Money automatically saved daily</p>
            </motion.div>
            
            <motion.div 
              className="text-center p-4 border rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="font-bold text-green-600">3</span>
              </div>
              <h4 className="font-semibold mb-2">Grow Wealth</h4>
              <p className="text-sm text-gray-600">Watch your savings grow over time</p>
            </motion.div>
          </div>
          
          <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-3">Example: ₹25/Day Savings</h4>
            <div className="grid grid-cols-4 gap-4 text-center">
              <div>
                <div className="font-bold text-green-700">₹750</div>
                <div className="text-xs text-green-600">Per Month</div>
              </div>
              <div>
                <div className="font-bold text-green-700">₹2,250</div>
                <div className="text-xs text-green-600">3 Months</div>
              </div>
              <div>
                <div className="font-bold text-green-700">₹4,500</div>
                <div className="text-xs text-green-600">6 Months</div>
              </div>
              <div>
                <div className="font-bold text-green-700">₹9,125</div>
                <div className="text-xs text-green-600">1 Year</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'npa-repayment',
      title: 'NPA Repayment',
      subtitle: 'Flexible Loan Repayments That Work for You',
      content: (
        <div className="space-y-6">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto flex items-center justify-center mb-4">
              <CreditCard className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Stress-Free Loan Repayment</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Traditional Repayment Issues</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-red-600">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Large monthly payments</span>
                </div>
                <div className="flex items-center gap-2 text-red-600">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Fixed payment dates</span>
                </div>
                <div className="flex items-center gap-2 text-red-600">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>High penalty charges</span>
                </div>
                <div className="flex items-center gap-2 text-red-600">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Credit score damage</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">DigiDabba's Solution</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-green-600">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Daily/weekly payments</span>
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Flexible amounts</span>
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Lower penalties</span>
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Credit score improvement</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-3">Example: ₹10,000 Loan Repayment</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Traditional Way</h5>
                <div className="text-sm space-y-1">
                  <div>Monthly Payment: <span className="font-bold text-red-600">₹1,000</span></div>
                  <div>Frequency: <span className="text-red-600">Fixed monthly</span></div>
                  <div>Stress Level: <span className="text-red-600">High</span></div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h5 className="font-semibold mb-2">DigiDabba Way</h5>
                <div className="text-sm space-y-1">
                  <div>Daily Payment: <span className="font-bold text-green-600">₹35-50</span></div>
                  <div>Frequency: <span className="text-green-600">Flexible</span></div>
                  <div>Stress Level: <span className="text-green-600">Low</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'marketplace',
      title: 'Marketplace Platform',
      subtitle: 'Connecting You with Trusted Financial Partners',
      content: (
        <div className="space-y-6">
          <div className="text-center">
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              DigiDabba operates as a digital marketplace, connecting customers with trusted banks and NBFCs. 
              Your money remains safe with partner institutions while we provide the seamless digital experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-6 border rounded-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏦</span>
              </div>
              <h4 className="font-semibold mb-2">Partner Banks</h4>
              <p className="text-sm text-gray-600">25+ trusted financial institutions</p>
            </div>
            
            <div className="text-center p-6 border rounded-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h4 className="font-semibold mb-2">Secure Funds</h4>
              <p className="text-sm text-gray-600">Your money stays with banks</p>
            </div>
            
            <div className="text-center p-6 border rounded-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h4 className="font-semibold mb-2">Digital Interface</h4>
              <p className="text-sm text-gray-600">Seamless mobile experience</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-3">How It Works</h4>
            <div className="flex items-center justify-between">
              <div className="text-center flex-1">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div className="text-sm">You use DigiDabba app</div>
              </div>
              <ArrowRight className="w-6 h-6 text-gray-400" />
              <div className="text-center flex-1">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div className="text-sm">We connect to banks</div>
              </div>
              <ArrowRight className="w-6 h-6 text-gray-400" />
              <div className="text-center flex-1">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div className="text-sm">Your money stays safe</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      title: 'Ready to Start Your Financial Journey?',
      subtitle: 'Join thousands who are already transforming their financial future',
      content: (
        <div className="text-center space-y-8">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-green-500 rounded-full mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-12 h-12 text-white" />
          </div>
          
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-900">Start Today</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Begin your journey towards financial inclusion with micro-deposits starting at just ₹10/day 
              or manage your loan repayments with flexible daily payments.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 max-w-md mx-auto">
            <div className="p-4 bg-green-50 rounded-lg">
              <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="font-semibold">Start Saving</div>
              <div className="text-sm text-gray-600">From ₹10/day</div>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <CreditCard className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="font-semibold">Manage Loans</div>
              <div className="text-sm text-gray-600">Flexible payments</div>
            </div>
          </div>
          
          <button 
            onClick={handleStart}
            className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get Started Now
            <ArrowRight className="w-5 h-5 ml-2 inline" />
          </button>
        </div>
      )
    }
  ];

  // Auto-advance slides when playing
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          if (currentSlide < slides.length - 1) {
            setCurrentSlide(current => current + 1);
            return 0;
          } else {
            setIsPlaying(false);
            return 100;
          }
        }
        return prev + 2; // 2% every 100ms = 5 seconds per slide
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isPlaying, currentSlide, slides.length]);

  // Don't render if modal should not be shown
  if (!navigation.showDemoModal) return null;

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
      setProgress(0);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
      setProgress(0);
    }
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[95vh] overflow-hidden">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/10 hover:bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Progress Bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200 z-10">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-100"
            style={{ width: `${((currentSlide / slides.length) * 100) + (progress / slides.length)}%` }}
          ></div>
        </div>

        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">DigiDabba Demo</h2>
              <p className="text-blue-100">Micro Deposits & NPA Repayments</p>
            </div>
            <div className="flex items-center gap-4">
              {/* Play/Pause Button */}
              <button
                onClick={togglePlayPause}
                className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-200"
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5" />
                ) : (
                  <Play className="w-5 h-5 ml-0.5" />
                )}
              </button>
              
              {/* Slide Counter */}
              <div className="text-sm bg-white/20 px-3 py-1 rounded-full">
                {currentSlide + 1} / {slides.length}
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 min-h-[400px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {slides[currentSlide].title}
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                {slides[currentSlide].subtitle}
              </p>
              
              <div className="max-w-4xl mx-auto">
                {slides[currentSlide].content}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between p-6 bg-gray-50 border-t">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </button>
          
          {/* Slide Dots */}
          <div className="flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                  setProgress(0);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentSlide
                    ? 'bg-blue-600 w-6'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}