// import { Link } from "lucide-react";
// import React from "react";
// import Image from "next/image";
// import chooseone from "@/image/chooseone.png";
// import choosetwo from "@/image/choosetwo.png";
// import chooseiconone from "@/image/chooseiconone.png";
// import chooseicontwo from "@/image/chooseicontwo.png";
// import chooseiconthree from "@/image/chooseiconthree.png";
// import chooseiconfour from "@/image/chooseiconfour.png";
// const WhyChooseUs = () => {
//   return (
//     <div className="flex flex-col justify-between items-center mx-auto mt-[65px] mb-[50px] w-full lg:w-[1224px] lg:h-[1207px] text-white dark:text-foreground">
//       {/* First Start */}
//       <div>
//         <div className="flex justify-center items-center bg-[#19171E] mx-auto border-2 border-white/20 rounded-full w-[188px] h-[40px] dark:text-foreground">
//           <h6>✨ Why Choose Us</h6>
//         </div>
//         <h3 className="mt-[20px] lg:w-[476px] text-[30px] text-black lg:text-[45px] dark:text-foreground text-center">
//           Why use <span className="text-primary-700">Gratask </span>
//         </h3>
//         <h3 className="lg:w-[486px] text-[30px] text-black lg:text-[45px] dark:text-foreground text-center">
//           For Task Management
//         </h3>
//       </div>

//       {/* First End */}
//       {/* Second Start */}
//       <div className="flex lg:flex-row flex-col justify-around items-center gap-[16px] mx-auto mt-[25px] lg:mt-[83px]">
//         <button className="bg-[#19171E] border-[#E26EE5] border-2 rounded-full w-[154px] h-[47px] text-[16px]">
//           Manage Task
//         </button>
//         <button className="bg-[#19171E] rounded-full w-[155px] h-[47px] text-[16px]">
//           Collaboration
//         </button>
//         <button className="bg-[#19171E] rounded-full w-[144px] h-[47px] text-[16px]">
//           Productivity
//         </button>
//         <button className="bg-[#19171E] rounded-full w-[133px] h-[47px] text-[16px]">
//           Integration
//         </button>
//       </div>
//       {/* Second End */}
//       {/* Third Start */}
//       <div className="flex lg:flex-row flex-col justify-between items-center gap-[25px] lg:gap-[12px] mx-auto mt-[40px] mb-[25px] lg:h-[382px]">
//         {/* Left Side */}
//         <div className="relative flex flex-col justify-between items-start bg-[#0E0C12] p-[10px] lg:p-[40px] rounded-tl-[16px] w-[370px] lg:w-[600px] lg:h-[382px] overflow-hidden">
//           <Image
//             src={chooseone}
//             alt="Collections Preview"
//             width={520}
//             height={172}
//             className="mb-[20px]"
//           />
//           <div className="top-0 left-[-40px] absolute bg-[#E26EE5] blur-3xl rounded-full w-[292px] h-[140px] rotate-21"></div>
//           <h4 className="mx-auto lg:mt-[-18px] lg:ml-0 text-[24px] lg:text-left text-center">
//             Manage Task
//           </h4>
//           <h6 className="mt-[18px] lg:mt-[-18px] lg:text-left text-center">
//             Say goodbye to the chaos of scattered to-do lists and embrace a
//             platform that empowers you to take control of your work.
//           </h6>
//         </div>
//         {/* Left Side End */}
//         {/* Right Side Start */}
//         <div>
//           <div className="relative flex flex-col justify-aeound items-start bg-[#0E0C12] p-[10px] lg:px-[40px] lg:py-0 rounded-tr-[16px] w-[370px] lg:w-[600px] lg:h-[382px] overflow-hidden">
//             <Image
//               src={choosetwo}
//               alt="Collections Preview"
//               width={520}
//               height={231}
//               className=""
//             />
//             <div className="right-[-100px] bottom-[100px] absolute bg-[#E26EE5] blur-3xl rounded-full w-[292px] h-[140px] rotate-[-21deg]"></div>
//             <h4 className="mx-auto mt-[15px] lg:ml-0 text-[24px]">
//               Integration
//             </h4>
//             <h6 className="mt-[18px] lg:text-left text-center">
//               Our intuitive interface, powerful features, and dedicated support
//               team are here to help.
//             </h6>
//           </div>
//         </div>
//         {/* Right Side End */}
//       </div>
//       {/* Third End */}
//       {/* Fourth Start */}
//       <div className="flex lg:flex-row flex-col flex-wrap justify-between items-center gap-[13px] mx-auto lg:mt-[130px] text-black dark:text-foreground">
//         {/* One Start */}
//         <div className="flex flex-col justify-around items-center p-[32px] border-2 dark:border-white/10 rounded-[16px] w-[294px] h-[276px]">
//           <Image
//             src={chooseiconone}
//             alt="chooseiconone"
//             width={72}
//             height={72}
//             className=""
//           />

//           <h3 className="mt-[25px] text-[47px]">3.5m</h3>
//           <h6>Worldwide Users</h6>
//         </div>
//         {/* One End */}
//         {/* Two Start */}
//         <div className="flex flex-col justify-around items-center p-[32px] border-2 dark:border-white/10 rounded-[16px] w-[294px] h-[276px]">
//           <Image
//             src={chooseicontwo}
//             alt="chooseicontwo"
//             width={72}
//             height={72}
//             className=""
//           />

//           <h3 className="mt-[25px] text-[47px]">500k</h3>
//           <h6>500k Software Download</h6>
//         </div>
//         {/* Two End */}
//         {/* Three Start */}
//         <div className="flex flex-col justify-around items-center p-[32px] border-2 dark:border-white/10 rounded-[16px] w-[294px] h-[276px]">
//           <Image
//             src={chooseiconthree}
//             alt="chooseiconthree"
//             width={72}
//             height={72}
//             className=""
//           />

//           <h3 className="mt-[25px] text-[47px]">85.5% </h3>
//           <h6>Efficiency Metrics</h6>
//         </div>
//         {/* Three End */}
//         {/* Four Start */}
//         <div className="flex flex-col justify-around items-center p-[32px] border-2 dark:border-white/10 rounded-[16px] w-[294px] h-[276px]">
//           <Image
//             src={chooseiconfour}
//             alt="chooseiconfour"
//             width={72}
//             height={72}
//             className=""
//           />

//           <h3 className="mt-[25px] text-[47px]">93.3%</h3>
//           <h6>Quantifying Productivity</h6>
//         </div>
//         {/* Four End */}
//       </div>
//       {/* Fourth End */}
//     </div>
//   );
// };

// export default WhyChooseUs;

// Optimized By Clude
import React from "react";
import Image from "next/image";
import chooseone from "@/image/chooseone.png";
import choosetwo from "@/image/choosetwo.png";
import chooseiconone from "@/image/chooseiconone.png";
import chooseicontwo from "@/image/chooseicontwo.png";
import chooseiconthree from "@/image/chooseiconthree.png";
import chooseiconfour from "@/image/chooseiconfour.png";

const WhyChooseUs = () => {
  const buttons = [
    { text: "Manage Task", isActive: true },
    { text: "Collaboration", isActive: false },
    { text: "Productivity", isActive: false },
    { text: "Integration", isActive: false },
  ];

  const stats = [
    { icon: chooseiconone, value: "3.5m", description: "Worldwide Users" },
    { icon: chooseicontwo, value: "500k", description: "Software Download" },
    {
      icon: chooseiconthree,
      value: "85.5%",
      description: "Efficiency Metrics",
    },
    {
      icon: chooseiconfour,
      value: "93.3%",
      description: "Quantifying Productivity",
    },
  ];

  return (
    <div className="flex flex-col items-center mx-auto my-16 w-full lg:w-[1224px] text-white dark:text-foreground">
      {/* Header Section */}
      <div className="text-center">
        <div className="flex justify-center items-center bg-[#19171E] mx-auto border-2 border-white/20 rounded-full w-[188px] h-10">
          <h6>✨ Why Choose Us</h6>
        </div>
        <h3 className="mt-5 text-[30px] text-black lg:text-[45px] dark:text-foreground">
          Why use <span className="text-primary-700">Gratask </span>
          <br />
          For Task Management
        </h3>
      </div>

      {/* Tab Buttons */}
      <div className="flex flex-wrap justify-center items-center gap-4 mt-6 lg:mt-20">
        {buttons.map((button, index) => (
          <button
            key={index}
            className={`bg-[#19171E] rounded-full px-6 py-3 text-base ${
              button.isActive ? "border-[#E26EE5] border-2" : ""
            }`}
          >
            {button.text}
          </button>
        ))}
      </div>

      {/* Feature Cards */}
      <div className="flex lg:flex-row flex-col justify-between items-center gap-6 mt-10 w-full">
        {/* Manage Task Card */}
        <div className="relative flex flex-col justify-between items-start bg-[#0E0C12] p-4 lg:p-10 rounded-tl-[16px] w-[370px] lg:w-[600px] lg:h-[382px] overflow-hidden">
          <Image
            src={chooseone}
            alt="Manage Task Preview"
            width={520}
            height={172}
            className="mb-5"
          />
          <div className="top-0 left-[-40px] absolute bg-[#E26EE5] blur-3xl rounded-full w-[292px] h-[140px] rotate-12"></div>
          <h4 className="w-full text-[24px] lg:text-left text-center">
            Manage Task
          </h4>
          <h6 className="mt-4 lg:text-left text-center">
            Say goodbye to the chaos of scattered to-do lists and embrace a
            platform that empowers you to take control of your work.
          </h6>
        </div>

        {/* Integration Card */}
        <div className="relative flex flex-col justify-betweenitems-start bg-[#0E0C12] p-4 lg:px-10 lg:py-0 rounded-tr-[16px] w-[370px] lg:w-[600px] lg:h-[382px] overflow-hidden">
          <Image
            src={choosetwo}
            alt="Integration Preview"
            width={520}
            height={231}
          />
          <div className="right-[-100px] bottom-[100px] absolute bg-[#E26EE5] blur-3xl rounded-full w-[292px] h-[140px] -rotate-12"></div>
          <h4 className="w-full text-[24px] lg:text-left text-center">
            Integration
          </h4>
          <h6 className="mt-6 lg:text-left text-center">
            Our intuitive interface, powerful features, and dedicated support
            team are here to help.
          </h6>
        </div>
      </div>

      {/* Stats Section */}
      <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-16 lg:mt-32 text-black dark:text-foreground">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center p-8 border-2 dark:border-white/10 rounded-[16px] w-[294px] h-[276px]"
          >
            <Image
              src={stat.icon}
              alt={`Stat icon ${index + 1}`}
              width={72}
              height={72}
            />
            <h3 className="mt-6 text-[47px]">{stat.value}</h3>
            <h6>{stat.description}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
