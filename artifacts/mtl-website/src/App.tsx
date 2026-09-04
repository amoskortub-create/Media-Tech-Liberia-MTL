import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import { Navigation } from "./sections/Navigation";
import { Hero } from "./sections/Hero";
import { Metrics } from "./sections/Metrics";
import { Capabilities } from "./sections/Capabilities";
import { Services } from "./sections/Services";
import { ViMore } from "./sections/ViMore";
import { ScholarNet } from "./sections/ScholarNet";
import { Security } from "./sections/Security";
import { DeliveryWorkflow } from "./sections/DeliveryWorkflow";
import { Leadership } from "./sections/Leadership";
import { Footer } from "./sections/Footer";
import { DataPolicy } from "./sections/DataPolicy";
import { SLA } from "./sections/SLA";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { PrivacyPolicy } from "./sections/PrivacyPolicy";
import { TermsOfService } from "./sections/TermsOfService";

const queryClient = new QueryClient();

function App() {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showDataPolicy, setShowDataPolicy] = useState(false);
  const [showSLA, setShowSLA] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
            <Navigation />
            <main>
              <Hero />
              <Metrics />
              <Capabilities />
              <Services />
              <ViMore />
              <ScholarNet />
              <Security />
              <DeliveryWorkflow />
              <Leadership />
            </main>
            <Footer
              onOpenPrivacy={() => setShowPrivacy(true)}
              onOpenTerms={() => setShowTerms(true)}
              onOpenDataPolicy={() => setShowDataPolicy(true)}
              onOpenSLA={() => setShowSLA(true)}
            />
            <WhatsAppButton />
          </div>

          {/* Legal modals */}
          <AnimatePresence>
            {showPrivacy && (
              <PrivacyPolicy key="privacy" onClose={() => setShowPrivacy(false)} />
            )}
          </AnimatePresence>
          <AnimatePresence>
            {showTerms && (
              <TermsOfService key="terms" onClose={() => setShowTerms(false)} />
            )}
          </AnimatePresence>
          <AnimatePresence>
            {showDataPolicy && (
              <DataPolicy key="data-policy" onClose={() => setShowDataPolicy(false)} />
            )}
          </AnimatePresence>
          <AnimatePresence>
            {showSLA && (
              <SLA key="sla" onClose={() => setShowSLA(false)} />
            )}
          </AnimatePresence>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
