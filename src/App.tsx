import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { MicroDepositsSection } from "./components/MicroDepositsSection";
import { NPARepaymentSection } from "./components/NPARepaymentSection";
import { Dashboard } from "./components/Dashboard";
import { Footer } from "./components/Footer";
import { LoginModal } from "./components/LoginModal";
import { SignupModal } from "./components/SignupModal";
import { DemoModal } from "./components/DemoModal";
import { KaniroDesignStudio } from "./components/KaniroDesignStudio";

export type NavigationState = {
  currentView: 'home' | 'dashboard' | 'deposits' | 'repayments' | 'kancx' | 'about' | 'contact';
  showLoginModal: boolean;
  showSignupModal: boolean;
  showDemoModal: boolean;
};

export type NavigationContextType = {
  navigation: NavigationState;
  setNavigation: (state: Partial<NavigationState>) => void;
  scrollToSection: (sectionId: string) => void;
};

export const NavigationContext = React.createContext<NavigationContextType>({
  navigation: { currentView: 'home', showLoginModal: false, showSignupModal: false, showDemoModal: false },
  setNavigation: () => {},
  scrollToSection: () => {},
});

export default function App() {
  const [navigation, setNavigationState] = useState<NavigationState>({
    currentView: 'home',
    showLoginModal: false,
    showSignupModal: false,
    showDemoModal: false,
  });

  const setNavigation = (newState: Partial<NavigationState>) => {
    setNavigationState(prev => ({ ...prev, ...newState }));
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const contextValue: NavigationContextType = {
    navigation,
    setNavigation,
    scrollToSection,
  };

  return (
    <NavigationContext.Provider value={contextValue}>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          {navigation.currentView === 'home' && (
            <>
              <HeroSection />
              <MicroDepositsSection />
              <NPARepaymentSection />
            </>
          )}
          {navigation.currentView === 'dashboard' && <Dashboard />}
          {navigation.currentView === 'deposits' && <MicroDepositsSection />}
          {navigation.currentView === 'repayments' && <NPARepaymentSection />}
          {navigation.currentView === 'kancx' && <KaniroDesignStudio />}
          {navigation.currentView === 'about' && <AboutSection />}
          {navigation.currentView === 'contact' && <ContactSection />}
        </main>
        <Footer />
        
        {/* Modals */}
        <LoginModal />
        <SignupModal />
        <DemoModal />
      </div>
    </NavigationContext.Provider>
  );
}

// About Section Component
function AboutSection() {
  const { setNavigation } = React.useContext(NavigationContext);

  const handleExploreDesignStudio = () => {
    setNavigation({ currentView: 'kancx' });
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">About Kaniro Financial Services</h1>
          
          <div className="prose prose-lg mx-auto max-w-4xl">
            <p className="text-lg text-gray-600 mb-6 text-center">
              Kaniro Financial Services is building an omni-channel digital platform to address two critical gaps 
              in the Indian financial ecosystem: accessible micro-deposits and flexible NPA repayments.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 text-center">Our Mission</h2>
            <p className="text-gray-600 mb-8 text-center max-w-3xl mx-auto">
              To empower Tier 2/3 India with accessible, small-ticket financial services that promote financial 
              inclusion and help build stronger households and communities through innovative digital solutions.
            </p>
            
            {/* Kaniro Goals Platform Section */}
            <div className="not-prose mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Kaniro Goals Platform</h2>
              <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
                Our core financial inclusion platform addressing critical gaps in the Indian banking ecosystem
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 border rounded-xl hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-green-50 to-green-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Micro Deposits</h3>
                  <p className="text-gray-600 mb-4">
                    A comprehensive marketplace for small-ticket savings across multiple partner banks, 
                    enabling financial inclusion starting from just ₹10/day for underserved communities.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Start saving from ₹10/day</li>
                    <li>• Multiple bank partnerships</li>
                    <li>• Automated daily savings</li>
                    <li>• Mobile-first experience</li>
                  </ul>
                </div>

                <div className="p-8 border rounded-xl hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-blue-50 to-blue-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">NPA Repayments</h3>
                  <p className="text-gray-600 mb-4">
                    Flexible daily/weekly repayment solutions for overdue loans, helping customers 
                    improve credit scores while reducing financial stress through manageable payment schedules.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Flexible daily/weekly payments</li>
                    <li>• Credit score improvement</li>
                    <li>• Reduced penalty charges</li>
                    <li>• Stress-free repayment</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Kaniro Design Studio Section */}
            <div className="not-prose mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Kaniro Design Studio</h2>
              <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
                Exclusive design studio for BFSI products, transforming digital banking through design-first methodology 
                and deep understanding of Indian financial market needs
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-6 border rounded-xl hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-purple-50 to-purple-100">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Banking Customer Research</h3>
                  <p className="text-gray-600 text-sm">
                    Deep analysis of banking behaviors, financial needs, and pain points specific to Indian Tier 2/3 customers, 
                    uncovering insights that drive informed design decisions.
                  </p>
                </div>

                <div className="p-6 border rounded-xl hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-indigo-50 to-indigo-100">
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Digital Banking UX Strategy</h3>
                  <p className="text-gray-600 text-sm">
                    Design-thinking driven banking strategies that align digital features with real financial market demands 
                    and customer behavioral patterns for maximum impact.
                  </p>
                </div>

                <div className="p-6 border rounded-xl hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-teal-50 to-teal-100">
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Banking Interface Design</h3>
                  <p className="text-gray-600 text-sm">
                    End-to-end banking product design from concept to interactive prototypes with comprehensive 
                    customer validation loops and usability testing frameworks.
                  </p>
                </div>

                <div className="p-6 border rounded-xl hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-orange-50 to-orange-100">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Banking Design Systems</h3>
                  <p className="text-gray-600 text-sm">
                    Scalable banking design systems ensuring consistency across mobile, web, and omni-channel 
                    banking touchpoints with comprehensive component libraries.
                  </p>
                </div>

                <div className="p-6 border rounded-xl hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-rose-50 to-rose-100">
                  <div className="w-14 h-14 bg-gradient-to-br from-rose-500 to-rose-600 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">BFSI Compliance Design</h3>
                  <p className="text-gray-600 text-sm">
                    Specialized design solutions ensuring regulatory compliance while maintaining excellent user experience 
                    across all banking and financial service touchpoints.
                  </p>
                </div>

                <div className="p-6 border rounded-xl hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-emerald-50 to-emerald-100">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Design Thinking Framework</h3>
                  <p className="text-gray-600 text-sm">
                    Proven methodology for understanding and solving complex banking experience challenges through 
                    systematic design thinking and customer-centered approach.
                  </p>
                </div>
              </div>

              <div className="text-center mt-8">
                <button 
                  onClick={handleExploreDesignStudio}
                  className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Explore Kaniro Design Studio
                </button>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 text-center">Our Impact</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 not-prose">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">450M+</div>
                <div className="text-sm text-gray-600">Target Users in Tier 2/3 India</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">25+</div>
                <div className="text-sm text-gray-600">Banking & NBFC Partnerships</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">₹10</div>
                <div className="text-sm text-gray-600">Minimum Daily Savings Amount</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg">
                <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
                <div className="text-sm text-gray-600">Digital Banking Focus</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-xl mt-8 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Supporting Financial Inclusion</h3>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Kaniro Financial Services is committed to supporting the government's financial inclusion agenda by 
                providing innovative digital solutions that bridge the gap between traditional banking and the unique 
                needs of underserved communities across India.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Contact Section Component
function ContactSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Contact Us</h1>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900">General Inquiries</h3>
                  <p className="text-gray-600">hello@kanirofinance.com</p>
                  <p className="text-gray-600">1800-XXX-XXXX</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Bank Partnerships</h3>
                  <p className="text-gray-600">partners@kanirofinance.com</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Customer Support</h3>
                  <p className="text-gray-600">support@kanirofinance.com</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Location</h3>
                  <p className="text-gray-600">Kakkanad, Kochi, Kerala India</p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}