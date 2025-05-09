import FAQ from "@/components/home/faq/Faq";
import Features from "@/components/pricing-table-page/Features";
import PricingTable from "@/components/pricing-table-page/PricingTable";

const page = () => {
  return (
    <div>
      <PricingTable />
      <Features />
      <FAQ />
    </div>
  );
};

export default page;
