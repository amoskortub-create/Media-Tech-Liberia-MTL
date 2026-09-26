import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import { Navigation } from "./sections/Navigation";
import { Hero } from "./sections/Hero";
import { Capabilities } from "./sections/Capabilities";
import { Services } from "./sections/Services";
import { ViMore } from "./sections/ViMore";
import { AIInfrastructure } from "./sections/AIInfrastructure";
import { DevelopmentProducts } from "./sections/DevelopmentProducts";
import { Security } from "./sections/Security";
import { DeliveryWorkflow } from "./sections/DeliveryWorkflow";
import { Leadership } from "./sections/Leadership";
import { Footer } from "./sections/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { PrivacyPolicy } from "./sections/PrivacyPolicy";

const queryClient = new QueryClient();

function App() {
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
            <Navigation />
            <main>
              <Hero />
              <Capabilities />
              <Services />
              <ViMore />
              <AIInfrastructure />
              <DevelopmentProducts />
              <Security />
              <DeliveryWorkflow />
              <Leadership />
            </main>
            <Footer
              onOpenPrivacy={() => setShowPrivacy(true)}
            />
            <WhatsAppButton />
          </div>

          {/* Legal modals */}
          <AnimatePresence>
            {showPrivacy && (
              <PrivacyPolicy key="privacy" onClose={() => setShowPrivacy(false)} />
            )}
          </AnimatePresence>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
