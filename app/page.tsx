import Hero from "@/components/Hero";
import Technology from "@/components/Technology";
import SolutionsGrid from "@/components/SolutionsGrid";
import Products from "@/components/Products";
import TestimonialSlider from "@/components/TestimonialSlider";
import Leadership from "@/components/Leadership";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Hero />
      <main className="flex-1 w-full flex flex-col items-center overflow-x-hidden">
        <Technology />
        <SolutionsGrid />
        <Products />
        <TestimonialSlider />
        <Leadership />
      </main>
    </div>
  );
}
