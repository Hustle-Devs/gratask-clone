import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { IoTrophy } from "react-icons/io5";
import rightImage from "@/assets/hero-image/right-image.png";

export default function Hero() {
  return (
    <div className="px-4 md:px-0">
      <div className="flex md:flex-row flex-col items-center mx-auto max-w-custom">
        {/* Left Side */}
        <div className="flex flex-col justify-center space-y-6 pt-20 pb-10 w-full md:w-1/2 md:text-left text-center">
          <div className="inline-flex justify-center md:justify-start items-center dark:bg-gray-700 mx-auto md:mx-0 px-3 py-1 border border-gray-600 rounded-full w-fit text-foreground dark:text-primary text-sm">
            <span className="mr-2">
              <IoTrophy />
            </span>
            Award Winning Startup 2023
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight">
            From Chaos to Control
            <br />
            <span className="text-primary-600 dark:text-secondary">
              Master Your Tasks
            </span>
            <br />
            <span className="inline-flex justify-center md:justify-start items-center gap-2">
              <span>with</span>
              <span className="bg-primary-600 dark:bg-secondary p-2 rounded-full">
                <FaArrowRight className="text-white" />
              </span>
              <span>GTX</span>
            </span>
          </h1>

          <h5 className="mx-auto md:mx-0 max-w-md text-gray-500 dark:text-gray-400">
            Sign up for a free trial today and experience the difference. Our
            intuitive interface, powerful features, and dedicated.
          </h5>

          <div className="mx-auto md:mx-0 w-full md:w-1/3">
            <Button variant="default" className="w-full">
              Start 14 Days Free Trial
            </Button>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center md:justify-end mt-10 md:mt-0 w-full md:w-1/2">
          <Image
            src={rightImage}
            alt="Collections Preview"
            width={800}
            height={500}
            className="w-full max-w-[700px] md:max-w-[800px] h-auto"
          />
        </div>
      </div>
    </div>
  );
}
