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
import { AboutSection } from "./components/AboutSection";
import { BlogSection } from "./components/BlogSection";
import { ContactSection } from "./components/ContactSection";

export type NavigationState = {
  currentView: 'home' | 'dashboard' | 'deposits' | 'repayments' | 'kancx' | 'about' | 'contact' | 'blog' | 'dabba';
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
          {navigation.currentView === 'dabba' && (
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
          {navigation.currentView === 'blog' && <BlogSection />}
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