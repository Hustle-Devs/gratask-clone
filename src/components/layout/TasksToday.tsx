import Image from "next/image";
import task1 from "@/image/task1.png";
import task2 from "@/image/task2.png";
import task3 from "@/image/task3.png";
export default function HeroSection() {
  return (
    <section className="relative bg-[#0D0C12] mx-auto lg:mt-[300px] mb-[-80px] lg:mb-[-170px] px-[10px] border-1 border-white rounded-[24px] w-[370px] md:w-[768px] lg:w-[1224px] lg:h-[435]">
      {/* Background Gradiant */}
      <div className="hidden lg:top-[70px] lg:right-[70px] absolute lg:flex bg-[#E26EE5] opacity-60 blur-3xl rounded-l-full w-[770px] h-[280px]"></div>

      <div className="flex lg:flex-row flex-col justify-between items-center mx-auto max-w-full">
        {/* Left: Text */}
        <div className="flex flex-col items-center lg:items-start lg:ml-[40px]">
          <h2 className="mx-auto lg:mt-[14px] py-[20px] lg:py-0 w-[350px] md:w-[750px] lg:w-[500px] font-medium text-[30px] md:text-[40px] lg:text-[50px] lg:text-left text-center leading-tight">
            Take Control of{" "}
            <span className="text-primary-700">Your Tasks Today.</span>
          </h2>
          <h5 className="lg:mt-[20px] mb-[20px] lg:mb-[45px] lg:w-[460px] text-[18px] text-gray-300 lg:text-left text-center">
            Unlock the full potential of efficient task management with Gratask.
            Sign up for our free trial today and experience the difference.
          </h5>
          <button className="bg-accent px-6 py-3 rounded-full font-medium">
            Get started for free
          </button>
        </div>

        {/* Right: Dashboard Preview */}
        <div className="z-90 flex md:flex-row lg:flex-row flex-col items-center md:gap-[50px]">
          {/* One */}
          <div className="mt-[90px]">
            <Image
              src={task1}
              alt={"task1"}
              width={160}
              height={265}
              className="lg:mr-[13px]"
            />
          </div>
          {/* One */}
          <div>
            <Image
              src={task2}
              alt={"task2"}
              width={147}
              height={51}
              className="lg:mt-[102px] mb-[32px]"
            />
            <Image
              src={task3}
              alt={"task3"}
              width={243}
              height={245}
              className="lg:m-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
