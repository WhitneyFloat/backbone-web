"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HeroScrolly } from "@/components/HeroScrolly";
import { OutcomesSection } from "@/components/OutcomesSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { WalkthroughSection } from "@/components/WalkthroughSection";
import { BuildInitiationSection } from "@/components/BuildInitiationSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { LoadingScreen } from "@/components/LoadingScreen";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="min-h-screen">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loader" onLoadingComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <HeroScrolly />
            <OutcomesSection />
            <FeaturesSection />
            <BuildInitiationSection />
            <WalkthroughSection />
            <FAQSection />
            <CTASection />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
