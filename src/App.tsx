import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { HeroSectionWithContact } from "./components/HeroSectionWithContact";

import { DepositCalculator } from "./components/DepositCalculator";
import { MicroDepositsSection } from "./components/MicroDepositsSection";
import { NPARepaymentSection } from "./components/NPARepaymentSection";

import { PartnerBanksCard } from "./components/PartnerBanksCard";
import { DabbaSavePage } from "./components/DabbaSavePage";
import { DabbaPayPage } from "./components/DabbaPayPage";
import { DabbaSavePayPage } from "./components/DabbaSavePayPage";
import { Dashboard } from "./components/Dashboard";
import { Footer } from "./components/Footer";
import { LoginModal } from "./components/LoginModal";
import { SignupModal } from "./components/SignupModal";
import { DemoModal } from "./components/DemoModal";
import { KaniroDesignStudio } from "./components/KaniroDesignStudio";

import { AboutSection } from "./components/AboutSection";

import { ContactSection } from "./components/ContactSection";

export type NavigationState = {
  currentView: 'home' | 'dashboard' | 'deposits' | 'repayments' | 'fintx-studio' | 'about' | 'contact' | 'dabbasave' | 'dabbapay' | 'dabbasavepay';
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
  navigation: { currentView: 'about', showLoginModal: false, showSignupModal: false, showDemoModal: false },
  setNavigation: () => {},
  scrollToSection: () => {},
});

export default function App() {
  const [navigation, setNavigationState] = useState<NavigationState>({
    currentView: 'about',
    showLoginModal: false,
    showSignupModal: false,
    showDemoModal: false,
  });

  const setNavigation = (newState: Partial<NavigationState>) => {
    setNavigationState(prev => ({ ...prev, ...newState }));
  };

  // Auto-scroll to top whenever the current view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [navigation.currentView]);

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
              <DepositCalculator />
              <MicroDepositsSection />
            </>
          )}
          {navigation.currentView === 'dabbasave' && <DabbaSavePage />}
          {navigation.currentView === 'dabbapay' && <DabbaPayPage />}
          {navigation.currentView === 'dabbasavepay' && <DabbaSavePayPage />}
          {navigation.currentView === 'dashboard' && <Dashboard />}
          {navigation.currentView === 'deposits' && <MicroDepositsSection />}
          {navigation.currentView === 'repayments' && <NPARepaymentSection />}
          {navigation.currentView === 'fintx-studio' && <KaniroDesignStudio />}
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