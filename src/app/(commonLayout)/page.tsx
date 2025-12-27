import CTA from "@/components/modules/Home/CTA";
import Features from "@/components/modules/Home/Features";
import Hero from "@/components/modules/Home/Hero";
import HowItWorks from "@/components/modules/Home/HowItWorks";
import Stats from "@/components/modules/Home/Stats";
import Testimonial from "@/components/modules/Home/Testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Stats />
      <Testimonial />
      <CTA />
    </>
  );
}
