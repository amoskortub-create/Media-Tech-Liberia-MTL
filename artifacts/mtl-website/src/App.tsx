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

const queryClient = new QueryClient();

function App() {
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
            <Footer />
          </div>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
