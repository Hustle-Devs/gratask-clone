import Hero from "@/components/home/hero/Hero";
import PricingPlan from "@/components/home/pricing-table/PricingTable";
import WhyChooseUs from "@/components/home/why-choose-us/WhyChooseUs";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <WhyChooseUs />
      <PricingPlan />
    </div>
  );
}
