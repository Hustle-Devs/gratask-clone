import Image from "next/image";
import left from "@/assets/integrations/left.png";
import right from "@/assets/integrations/right.png";
import { Button } from "@/components/ui/button";
import IntegrationsGrid from "@/components/integrations/IntegrationsGrid";

export default function IntegrationsSection() {
  return (
    <section className="mx-auto max-w-custom">
      <section className="relative py-12 overflow-hidden text-center">
        <div className="relative">
          {/* Left Image (slightly higher) */}
          <div className="hidden md:block bottom-[60%] left-10 md:left-20 absolute">
            <Image
              src={left}
              alt="Left Icon"
              width={100}
              height={100}
              className=""
            />
          </div>

          {/* Center Content */}

          <div className="mx-auto px-4 max-w-xl text-center">
            <h2 className="mb-4 font-bold text-foreground dark:text-foreground text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Integrations
            </h2>
            <p className="mb-6 text-gray-500 dark:text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl">
              Sign up for a free trial today and experience the difference. Our
              intuitive interface, powerful features, and dedicated.
            </p>
            <button className="bg-accent px-6 py-3 rounded-full font-medium">
              Get started for free
            </button>
          </div>

          {/* Right Image (slightly lower) */}
          <div className="hidden md:block top-[30%] right-10 md:right-20 absolute">
            <Image
              src={right}
              alt="Right Icon"
              width={100}
              height={100}
              className=""
            />
          </div>
        </div>
      </section>
      <IntegrationsGrid/>
    </section>
  );
}
