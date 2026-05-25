import { Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import { Navigation } from "./sections/Navigation";
import { Hero } from "./sections/Hero";
import { Metrics } from "./sections/Metrics";
import { Capabilities } from "./sections/Capabilities";
import { ViMore } from "./sections/ViMore";
import { ScholarNet } from "./sections/ScholarNet";
import { Leadership } from "./sections/Leadership";
import { Footer } from "./sections/Footer";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <div className="min-h-screen bg-background text-foreground font-sans dark selection:bg-primary/30">
            <Navigation />
            <main>
              <Hero />
              <Metrics />
              <Capabilities />
              <ViMore />
              <ScholarNet />
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
