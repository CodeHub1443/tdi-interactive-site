import Hero from "@/components/Hero";
import SolutionsGrid from "@/components/SolutionsGrid";
import CaseStudies from "@/components/CaseStudies";
import TestimonialSlider from "@/components/TestimonialSlider";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <main className="flex-1">
        <SolutionsGrid />
        <CaseStudies />
        <TestimonialSlider />
        <CTASection />
      </main>
    </div>
  );
}
