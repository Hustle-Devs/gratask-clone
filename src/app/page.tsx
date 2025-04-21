import ClientLogo from "@/components/home/client-logo/ClientLogo";
import Hero from "@/components/home/hero/Hero";
import WhyChooseUs from "@/components/home/why-choose-us/WhyChooseUs";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <ClientLogo />
      <WhyChooseUs />
    </div>
  );
}
