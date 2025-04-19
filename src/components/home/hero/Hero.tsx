import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { IoTrophy } from "react-icons/io5";
import rightImage from "@/assets/hero-image/right-image.png";
import arrow from "@/assets/hero-image/arrow.png";

export default function Hero() {
  return (
    <div className="relative mb-10 px-4 md:px-6 lg:px-8 w-full overflow-hidden">
      {/* Left Content in container */}
      <div className="z-10 relative flex md:flex-row justify-between items-center mx-auto max-w-custom min-h-[550px]">
        <div className="flex items-center w-full md:w-1/2">
          <div className="flex flex-col justify-center space-y-6 md:text-left text-center">
            <div className="inline-flex justify-center md:justify-start items-center dark:bg-gray-700 mx-auto md:mx-0 px-3 py-1 border border-gray-600 rounded-full w-fit text-foreground dark:text-primary text-sm">
              <span className="mr-2">
                <IoTrophy />
              </span>
              Award Winning Startup 2023
            </div>

            <h1 className="font-manrope text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight">
              From Chaos to Control
              <br />
              <span className="text-primary-600 dark:text-secondary">
                Master Your Tasks
              </span>
              <br />
              <span className="inline-flex justify-center md:justify-start items-center gap-2">
                <span>with</span>
                <Image
                  src={arrow}
                  alt="Arrow Icon"
                  width={800}
                  height={500}
                  className="w-[40] max-w-[700px] md:max-w-[800px] h-auto"
                />
                <span>GTX</span>
              </span>
            </h1>

            <h5 className="mx-auto md:mx-0 max-w-md font-manrope text-gray-500 dark:text-gray-400">
              Sign up for a free trial today and experience the difference. Our
              intuitive interface, powerful features, and dedicated.
            </h5>

            <div className="mx-auto md:mx-0 w-full md:w-1/2">
              <Button variant="default" className="px-4 py-2 w-full">
                Start 14 Days Free Trial
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Right image outside container */}
      {/* Right image responsive */}
      <div className="top-0 md:top-1/2 right-0 z-0 md:absolute relative w-full md:w-[50vw] max-w-[700px] md:-translate-y-1/2">
        <Image
          src={rightImage}
          alt="Hero Image"
          width={800}
          height={500}
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
}

