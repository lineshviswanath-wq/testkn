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
          {navigation.currentView === 'kancx' && <KaniroDesignFirstSection />}
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
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">About Kaniro Financial Services</h1>
          
          <div className="prose prose-lg mx-auto">
            <p className="text-lg text-gray-600 mb-6">
              Kaniro Financial Services is building an omni-channel digital platform to address two critical gaps 
              in the Indian financial ecosystem: accessible micro-deposits and flexible NPA repayments.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              To empower Tier 2/3 India with accessible, small-ticket financial services that promote financial 
              inclusion and help build stronger households and communities.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What We Do</h2>
            <div className="grid md:grid-cols-2 gap-8 not-prose">
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Micro Deposits</h3>
                <p className="text-gray-600">
                  A marketplace for small-ticket savings across multiple banks, starting from just ₹10/day.
                </p>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">NPA Repayments</h3>
                <p className="text-gray-600">
                  Flexible daily/weekly repayment options for overdue loans, helping improve credit scores.
                </p>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Impact</h2>
            <ul className="space-y-2 text-gray-600">
              <li>• Targeting 450M+ Indians in Tier 2/3 towns</li>
              <li>• Partnerships with 25+ banks and NBFCs</li>
              <li>• Focus on financial inclusion and digital banking</li>
              <li>• Supporting government's financial inclusion agenda</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// KaniroDesignFirst Section Component
function KaniroDesignFirstSection() {
  const { setNavigation, scrollToSection } = React.useContext(NavigationContext);

  const handleStartJourney = () => {
    setNavigation({ currentView: 'contact' });
  };

  const handleViewProcess = () => {
    scrollToSection('design-process');
  };

  const handleViewPortfolio = () => {
    scrollToSection('services-showcase');
  };

  const handleLearnFramework = () => {
    scrollToSection('design-thinking-framework');
  };



  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1730206562928-0efd62560435?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzdHVkaW8lMjB3b3Jrc3BhY2UlMjBjcmVhdGl2ZXxlbnwxfHx8fDE3NTU1ODgxOTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Design Studio"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative container mx-auto px-4 py-20 flex items-center min-h-[80vh]">
          <div className="max-w-4xl text-white">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm mb-6 border border-white/20">
              Digital Banking Experience Design
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Kaniro Design Studio
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-blue-100 mb-8 max-w-3xl leading-relaxed">
              Transforming digital banking through design-first methodology. We bridge the critical gap between 
              banking product delivery and real customer financial needs in the Indian market.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleStartJourney}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                Start Your Design Journey
              </button>
              <button 
                onClick={handleViewProcess}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                View Our Process
              </button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-xl"></div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                The Banking Design Challenge
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Most banking products fail because of fundamental gaps in understanding 
                between what gets delivered and what customers actually need.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="p-8 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl border-l-4 border-red-500">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">The Problem</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Traditional banking interfaces fail to address real user needs and behaviors, 
                    especially in Tier 2/3 India where customers have unique financial patterns, 
                    anxieties, and requirements that conventional design approaches completely miss.
                  </p>
                </div>

                <div className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border-l-4 border-green-500">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Solution</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Through banking-focused design thinking, we ensure deep understanding of customer 
                    financial behaviors and build digital banking products with a design-first methodology 
                    that delivers measurable value to underserved communities.
                  </p>
                  <button 
                    onClick={handleLearnFramework}
                    className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Learn Our Framework
                  </button>
                </div>
              </div>

              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1544560212-77289e5ea6cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMHNrZXRjaGluZyUyMGNyZWF0aXZlJTIwcHJvY2Vzc3xlbnwxfHx8fDE3NTU2MDc4NDR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Designer Creative Process"
                  className="w-full rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                {/* Floating design elements */}
                <div className="absolute top-6 right-6 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"></div>
                <div className="absolute bottom-6 left-6 w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl blur-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process Section */}
      <section id="design-process" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Our Design-First Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A proven methodology that transforms banking experiences through systematic design thinking
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="relative group">
                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                    <span className="text-white font-bold text-2xl">1</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">DESIGN</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Banking customer research, financial behavior analysis, and solution ideation 
                    for digital banking experiences that truly resonate with users.
                  </p>
                </div>
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              </div>

              <div className="relative group">
                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                    <span className="text-white font-bold text-2xl">2</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">TEST</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Banking prototype validation, customer journey testing, and iterative refinement 
                    based on real banking user feedback and behavioral insights.
                  </p>
                </div>
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              </div>

              <div className="relative group">
                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                    <span className="text-white font-bold text-2xl">3</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">BUILD</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Development and deployment of validated banking solutions that truly meet 
                    customer financial needs and drive measurable business outcomes.
                  </p>
                </div>
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-purple-400/20 to-red-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section id="services-showcase" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Digital Banking Design Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive design solutions tailored for the unique challenges of digital banking
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="group p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl hover:shadow-xl transition-all duration-300 cursor-pointer" onClick={handleStartJourney}>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Banking Customer Research</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Deep analysis of banking behaviors, financial needs, and pain points specific 
                  to Indian Tier 2/3 customers, uncovering insights that drive design decisions.
                </p>
                <p className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">Learn More →</p>
              </div>

              <div className="group p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl hover:shadow-xl transition-all duration-300 cursor-pointer" onClick={handleStartJourney}>
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Digital Banking UX Strategy</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Design-thinking driven banking strategies that align digital features with 
                  real financial market demands and customer behavioral patterns.
                </p>
                <p className="text-green-600 font-semibold group-hover:text-green-700 transition-colors">Learn More →</p>
              </div>

              <div className="group p-8 bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl hover:shadow-xl transition-all duration-300 cursor-pointer" onClick={handleStartJourney}>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Banking Interface Design</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  End-to-end banking product design from concept to interactive prototypes 
                  with comprehensive customer validation loops and usability testing.
                </p>
                <p className="text-purple-600 font-semibold group-hover:text-purple-700 transition-colors">Learn More →</p>
              </div>

              <div className="group p-8 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl hover:shadow-xl transition-all duration-300 cursor-pointer" onClick={handleStartJourney}>
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Banking Design Systems</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Scalable banking design systems ensuring consistency across mobile, web, 
                  and omni-channel banking touchpoints with comprehensive component libraries.
                </p>
                <p className="text-orange-600 font-semibold group-hover:text-orange-700 transition-colors">Learn More →</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Thinking Framework */}
      <section id="design-thinking-framework" className="py-20 bg-gradient-to-br from-gray-900 to-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Banking Design Thinking Framework
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our systematic approach to understanding and solving complex banking experience challenges
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-white font-bold text-xl">E</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Empathize</h3>
                <p className="text-gray-300 leading-relaxed">
                  Understanding financial behaviors, banking anxieties, and money management 
                  patterns of underserved communities through immersive research.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-white font-bold text-xl">D</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Define</h3>
                <p className="text-gray-300 leading-relaxed">
                  Clearly articulating financial challenges and banking accessibility issues 
                  specific to target customer segments with precision and clarity.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-white font-bold text-xl">I</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Ideate</h3>
                <p className="text-gray-300 leading-relaxed">
                  Generating innovative digital banking solutions that work within Indian 
                  financial ecosystem constraints and regulatory requirements.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-white font-bold text-xl">P</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Prototype</h3>
                <p className="text-gray-300 leading-relaxed">
                  Building testable banking interfaces and customer journey prototypes 
                  with comprehensive regulatory compliance considerations.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-white font-bold text-xl">T</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Test</h3>
                <p className="text-gray-300 leading-relaxed">
                  Validating banking solutions with actual customers in real financial 
                  scenarios and iterating based on behavioral usage patterns.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Scale</h3>
                <p className="text-gray-300 leading-relaxed">
                  Implementing validated solutions across multiple touchpoints and customer 
                  segments while maintaining design consistency and user experience quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Banking Experiences?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Let's collaborate to bridge the gap between traditional banking and customer needs through our proven 
              banking design-first methodology. Transform your banking products into customer-centered financial 
              solutions that truly serve underserved communities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={handleStartJourney}
                className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl font-semibold"
              >
                Start Your Banking Design Journey
              </button>
              <button 
                onClick={handleViewPortfolio}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20 font-semibold"
              >
                View Our Services
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
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
                  <p className="text-gray-600">Kerala & South India (Phase 1)</p>
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