import { HeroScrolly } from "@/components/HeroScrolly";
import { OutcomesSection } from "@/components/OutcomesSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroScrolly />
      <OutcomesSection />
      <FeaturesSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
