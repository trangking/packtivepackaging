import { CTASection } from "@/components/CTASection";
import { HeroSection } from "@/components/home/HeroSection";
import { FAQSection } from "@/components/home/FAQSection";
import { PortfolioSection } from "@/components/home/PortfolioSection";
import { ProductCategorySection } from "@/components/home/ProductCategorySection";
import { TrustSection } from "@/components/home/TrustSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ProductCategorySection />
      <TrustSection />
      <PortfolioSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
