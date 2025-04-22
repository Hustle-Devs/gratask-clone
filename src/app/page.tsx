import ClientLogo from "@/components/home/client-logo/ClientLogo";
import Hero from "@/components/home/hero/Hero";
import PricingPlan from "@/components/home/pricing-table/PricingTable";
import TaskManagementHome from "@/components/home/task-management/TaskManagement";

import WhyChooseUs from "@/components/home/why-choose-us/WhyChooseUs";
import Testimonials from "@/components/testimonials/Testimonials";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <ClientLogo />
      <WhyChooseUs />
      <TaskManagementHome />
      <PricingPlan />
      <Testimonials />
    </div>
  );
}
