import { Link } from "lucide-react";
import React from "react";
import Image from "next/image";
import chooseone from "@/image/chooseone.png";
import choosetwo from "@/image/choosetwo.png";
import chooseiconone from "@/image/chooseiconone.png";
import chooseicontwo from "@/image/chooseicontwo.png";
import chooseiconthree from "@/image/chooseiconthree.png";
import chooseiconfour from "@/image/chooseiconfour.png";
const WhyChooseUs = () => {
  return (
    <div className="flex flex-col justify-between items-center mx-auto mt-[65px] mb-[50px] w-full lg:w-[1224px] lg:h-[1207px]">
      {/* First Start */}
      <div>
        <div className="flex justify-center items-center bg-[#19171E] mx-auto border-2 border-white/20 rounded-full w-[188px] h-[40px]">
          <h6>✨ Why Choose Us</h6>
        </div>
        <h3 className="mt-[20px] lg:w-[476px] text-[30px] lg:text-[45px] text-center">
          Why use <span className="text-primary-700">Gratask </span>
        </h3>
        <h3 className="lg:w-[486px] text-[30px] lg:text-[45px] text-center">
          For Task Management
        </h3>
      </div>

      {/* First End */}
      {/* Second Start */}
      <div className="flex lg:flex-row flex-col justify-around items-center gap-[16px] mx-auto mt-[25px] lg:mt-[83px]">
        <button className="bg-[#19171E] border-[#E26EE5] border-2 rounded-full w-[154px] h-[47px] text-[16px]">
          Manage Task
        </button>
        <button className="bg-[#19171E] rounded-full w-[155px] h-[47px] text-[16px]">
          Collaboration
        </button>
        <button className="bg-[#19171E] rounded-full w-[144px] h-[47px] text-[16px]">
          Productivity
        </button>
        <button className="bg-[#19171E] rounded-full w-[133px] h-[47px] text-[16px]">
          Integration
        </button>
      </div>
      {/* Second End */}
      {/* Third Start */}
      <div className="flex lg:flex-row flex-col justify-between items-center gap-[25px] lg:gap-[12px] mx-auto mt-[40px] mb-[25px] lg:h-[382px]">
        {/* Left Side */}
        <div className="relative flex flex-col justify-between items-start bg-[#0E0C12] p-[10px] lg:p-[40px] rounded-tl-[16px] w-[370px] lg:w-[600px] overflow-hidden">
          <Image
            src={chooseone}
            alt="Collections Preview"
            width={520}
            height={172}
            className="mb-[32px]"
          />
          <div className="top-0 left-[-40px] absolute bg-[#E26EE5] blur-3xl rounded-full w-[292px] h-[140px] rotate-21"></div>
          <h4 className="mx-auto lg:ml-0 text-[24px] lg:text-left text-center">
            Manage Task
          </h4>
          <h6 className="mt-[18px] lg:text-left text-center">
            Say goodbye to the chaos of scattered to-do lists and embrace a
            platform that empowers you to take control of your work.
          </h6>
        </div>
        {/* Left Side End */}
        {/* Right Side Start */}
        <div>
          <div className="relative flex flex-col justify-between items-start bg-[#0E0C12] p-[10px] lg:p-[40px] rounded-tr-[16px] w-[370px] lg:w-[600px] overflow-hidden">
            <Image
              src={choosetwo}
              alt="Collections Preview"
              width={520}
              height={172}
              className="mb-[32px]"
            />
            <div className="right-[-100px] bottom-[100px] absolute bg-[#E26EE5] blur-3xl rounded-full w-[292px] h-[140px] rotate-[-21deg]"></div>
            <h4 className="mx-auto lg:ml-0 text-[24px]">Integration</h4>
            <h6 className="mt-[18px] lg:text-left text-center">
              Our intuitive interface, powerful features, and dedicated support
              team are here to help.
            </h6>
          </div>
        </div>
        {/* Right Side End */}
      </div>
      {/* Third End */}
      {/* Fourth Start */}
      <div className="flex lg:flex-row flex-col flex-wrap justify-between items-center gap-[13px] mx-auto lg:mt-[130px]">
        {/* One Start */}
        <div className="flex flex-col justify-around items-center p-[32px] border-2 border-white/10 rounded-[16px] w-[294px] h-[276px]">
          <Image
            src={chooseiconone}
            alt="chooseiconone"
            width={72}
            height={72}
            className=""
          />

          <h3 className="mt-[25px] text-[47px]">3.5m</h3>
          <h6>Worldwide Users</h6>
        </div>
        {/* One End */}
        {/* Two Start */}
        <div className="flex flex-col justify-around items-center p-[32px] border-2 border-white/10 rounded-[16px] w-[294px] h-[276px]">
          <Image
            src={chooseicontwo}
            alt="chooseicontwo"
            width={72}
            height={72}
            className=""
          />

          <h3 className="mt-[25px] text-[47px]">500k</h3>
          <h6>500k Software Download</h6>
        </div>
        {/* Two End */}
        {/* Three Start */}
        <div className="flex flex-col justify-around items-center p-[32px] border-2 border-white/10 rounded-[16px] w-[294px] h-[276px]">
          <Image
            src={chooseiconthree}
            alt="chooseiconthree"
            width={72}
            height={72}
            className=""
          />

          <h3 className="mt-[25px] text-[47px]">85.5% </h3>
          <h6>Efficiency Metrics</h6>
        </div>
        {/* Three End */}
        {/* Four Start */}
        <div className="flex flex-col justify-around items-center p-[32px] border-2 border-white/10 rounded-[16px] w-[294px] h-[276px]">
          <Image
            src={chooseiconfour}
            alt="chooseiconfour"
            width={72}
            height={72}
            className=""
          />

          <h3 className="mt-[25px] text-[47px]">93.3%</h3>
          <h6>Quantifying Productivity</h6>
        </div>
        {/* Four End */}
      </div>
      {/* Fourth End */}
    </div>
  );
};

export default WhyChooseUs;
