// import React from "react";
// import Image from "next/image";
// import check from "@/components/pricing-table-page/image/check.png";
// import cross from "@/components/pricing-table-page/image/cross.png";
// const Features = () => {
//   return (
//     <div className="flex flex-col justify-start items-center mx-auto mt-[50px] lg:mt-[120px] w-[380px] md:w-[768px] lg:w-[1224px]">
//       {/* One */}
//       <div className="flex flex-row justify-between items-center gap-[10px] lg:gap-0 mx-auto border-white/7 border-b-1 w-[380px] md:w-[768px] lg:w-[1224px]">
//         <h3 className="flex justify-center lg:justify-start items-center lg:w-[306px] lg:h-[94px] text-[16px] lg:text-[40px]">
//           Features
//         </h3>

//         <h4 className="flex justify-center items-center mx-auto lg:px-[30px] lg:w-[306px] lg:h-[94px] text-[16px] lg:text-[20px] text-center">
//           Personal
//         </h4>
//         <h4 className="flex justify-center items-center lg:bg-[#19171E] mx-auto lg:px-[30px] lg:rounded-t-[16px] lg:w-[306px] lg:h-[94px] text-[#FA83FF] text-[16px] lg:text-[20px]">
//           Business
//         </h4>
//         <h4 className="flex justify-center items-center mx-auto lg:px-[30px] lg:w-[306px] lg:h-[94px] text-[16px] lg:text-[20px]">
//           Enterprise
//         </h4>
//       </div>
//       {/* Two */}
//       <div className="flex flex-row justify-between items-center gap-[10px] lg:gap-0 mx-auto px-[5px] lg:px-0 border-white/7 border-b-1 w-[380px] md:w-[768px] lg:w-[1224px]">
//         <h4 className="flex justify-center lg:justify-start items-center lg:bg-[#19171E] mx-auto ml-0 lg:px-[30px] w-[40px] lg:w-[306px] lg:h-[94px] text-[#FA83FF] text-[12px] lg:text-[20px]">
//           Core Features
//         </h4>
//         <h4 className="flex justify-center items-center mx-auto lg:px-[30px] border-white/2 border-b-[.5px] lg:w-[306px] lg:h-[94px] text-center"></h4>
//         <h4 className="flex justify-center items-center bg-[#19171E] mx-auto lg:px-[30px] lg:w-[306px] lg:h-[94px] text-[#FA83FF]"></h4>
//         <h4 className="flex justify-center items-center mx-auto lg:px-[30px] border-white/2 border-b-[.5px] lg:w-[306px] lg:h-[94px]"></h4>
//       </div>
//       {/* Three */}
//       <div className="flex flex-row justify-between items-center gap-[10px] lg:gap-0 mx-auto px-[5px] lg:px-0 border-white/7 border-b-1 w-[380px] md:w-[768px] lg:w-[1224px]">
//         <h5 className="flex justify-center lg:justify-start items-center lg:bg-[#19171E] mx-auto ml-0 lg:px-[30px] border-white/7 border-b-1 w-[40px] lg:w-[306px] lg:h-[94px] text-[12px] lg:text-[20px]">
//           Task Creation
//         </h5>
//         <div className="flex justify-center items-center mx-auto ml-[20px] lg:ml-0 lg:px-[30px] border-white/2 border-b-[.5px] lg:w-[306px] lg:h-[94px]">
//           <Image
//             src={check}
//             alt="check"
//             width={44}
//             height={44}
//             className="size-[24px] lg:size-[44px]"
//           />
//         </div>
//         <div className="flex justify-center items-center lg:bg-[#19171E] mx-auto lg:px-[30px] lg:w-[306px] lg:h-[94px] text-[#FA83FF]">
//           <Image
//             src={check}
//             alt="check"
//             width={44}
//             height={44}
//             className="size-[24px] lg:size-[44px]"
//           />
//         </div>
//         <div className="flex justify-center items-center mx-auto lg:px-[30px] border-white/2 border-b-[.5px] lg:w-[306px] lg:h-[94px]">
//           <Image
//             src={check}
//             alt="check"
//             width={44}
//             height={44}
//             className="size-[24px] lg:size-[44px]"
//           />
//         </div>
//       </div>
//       {/* Four */}
//       <div className="flex flex-row justify-between items-center gap-[10px] lg:gap-0 mx-auto px-[5px] lg:px-0 border-white/7 border-b-1 w-[380px] md:w-[768px] lg:w-[1224px]">
//         <h5 className="flex justify-center lg:justify-start items-center lg:bg-[#19171E] mx-auto ml-[5px] lg:ml-0 lg:px-[29px] w-[40px] lg:w-[306px] lg:h-[94px] text-[12px] lg:text-[20px]">
//           Due Dates and Reminders
//         </h5>
//         <div className="flex justify-center items-center mx-auto ml-[15px] lg:ml-0 lg:px-[30px] border-white/7 border-b-1 lg:w-[306px] lg:h-[94px] text-center">
//           <Image
//             src={cross}
//             alt="cross"
//             width={44}
//             height={44}
//             className="size-[24px] lg:size-[44px]"
//           />
//         </div>
//         <div className="flex justify-center items-center lg:bg-[#19171E] mx-auto lg:px-[30px] lg:w-[306px] lg:h-[94px] text-[#FA83FF]">
//           <Image
//             src={check}
//             alt="check"
//             width={44}
//             height={44}
//             className="size-[24px] lg:size-[44px]"
//           />
//         </div>
//         <div className="flex justify-center items-center mx-auto lg:px-[30px] border-white/7 border-b-1 lg:w-[306px] lg:h-[94px]">
//           <Image
//             src={check}
//             alt="check"
//             width={44}
//             height={44}
//             className="size-[24px] lg:size-[44px]"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Features;

import React from "react";
import Image from "next/image";
import check from "@/components/pricing-table-page/image/check.png";
import cross from "@/components/pricing-table-page/image/cross.png";

const Features = () => {
  // Data structure for feature rows
  const features = [
    {
      title: "Core Features",
      isCategory: true,
      values: ["", "", ""],
    },
    {
      title: "Task Creation",
      values: [true, true, true],
    },
    {
      title: "Due Dates and Reminders",
      values: [false, true, true],
    },
    {
      title: "Amazing Stuff",
      isCategory: true,
      values: ["", "", ""],
    },
    {
      title: "Automation and Workflow",
      values: [true, true, true],
    },
    {
      title: "Integration Capabilities",
      values: [false, false, true],
    },
    {
      title: "Collaboration Tools",
      values: [true, false, true],
    },
    {
      title: "Task Dependencies",
      values: [false, true, true],
    },
    {
      title: "Cool Features",
      isCategory: true,
      values: ["", "", ""],
    },
    {
      title: "Security Measures",
      values: [false, true, true],
    },
    {
      title: "Live Collaboration",
      values: [true, false, true],
    },
    {
      title: "Scalability ",
      values: [true, false, true],
      textClass: "text-left ml-[-10px]",
    },
    {
      title: "Customer Support",
      values: [false, true, true],
    },
  ];

  // Column titles with button styles
  const plans = [
    {
      name: "Personal",
      highlight: false,
      buttonClass: "bg-white/10 hover:bg-white/20 md:ml-[65px] lg:ml-[-10px]",
    },
    {
      name: "Business",
      highlight: true,
      buttonClass:
        "bg-[#613FE7] text-white hover:bg-[#FB9BFF] lg:h-[48px] md:ml-[10px] ml-[-60px] lg:ml-0 py-[5px]  ",
    },
    {
      name: "Enterprise",
      highlight: false,
      buttonClass:
        "bg-white/10 hover:bg-white/20 ml-[-60px] lg:ml-0 md:ml-[20px]",
    },
  ];

  return (
    <div className="flex flex-col justify-start items-center mx-auto mt-[50px] lg:mt-[120px] py-[5px] lg:py-0 border-1 border-white lg:border-none w-[380px] md:w-[768px] lg:w-[1224px]">
      {/* Header Row */}
      <div className="flex flex-row justify-between items-center gap-[10px] lg:gap-0 lg:bg-transparent mx-auto px-[5px] lg:px-0 py-[10px] lg:py-0 border-1 border-white/7 border-b-1 border-b-black lg:border-none w-[370px] md:w-[768px] lg:w-[1224px] bg-accent-50">
        <h3 className="flex justify-center lg:justify-start items-center lg:w-[306px] lg:h-[94px] text-[16px] lg:dark:text-white lg:text-[40px] dark:text-black">
          Features
        </h3>

        {plans.map((plan, index) => (
          <h4
            key={plan.name}
            className={`flex dark:text-black lg:dark:text-white justify-center items-center mx-auto lg:px-[30px] lg:w-[306px] lg:h-[94px] text-[16px] lg:text-[20px]  ${
              plan.highlight
                ? "lg:bg-[#19171E] lg:rounded-t-[16px] text-[#FA83FF]"
                : "text-center"
            }`}
          >
            {plan.name}
          </h4>
        ))}
      </div>

      {/* Feature Rows */}
      {features.map((feature, rowIndex) => (
        <div
          key={`feature-${rowIndex}`}
          className="flex flex-row justify-between items-center gap-[10px] lg:gap-0 lg:bg-transparent mx-auto px-[5px] lg:px-0 py-[5px] lg:py-0 border-white/7 border-b-1 w-[370px] md:w-[768px] lg:w-[1224px] bg-accent-50"
        >
          <h5
            className={`flex text-black lg:text-white justify-start lg:justify-start lg:items-center  lg:bg-[#19171E] mx-auto  ${
              rowIndex > 0 ? "ml-[0px]" : "ml-0"
            }  lg:ml-0 lg:px-[30px] w-[70px] lg:w-[306px] lg:h-[94px] text-[10px] lg:text-[18px] ${
              feature.isCategory
                ? "text-[#FA83FF] text-[12px] lg:text-[20px]"
                : ""
            }`}
          >
            {feature.title}
          </h5>

          {feature.values.map((value, columnIndex) => (
            <div
              key={`value-${rowIndex}-${columnIndex}`}
              className={` flex justify-center items-center mx-auto ${
                rowIndex > 0 && columnIndex === 0 ? "ml-[-10px] lg:ml-0" : ""
              } lg:px-[30px] ${
                plans[columnIndex].highlight
                  ? "lg:bg-[#19171E] text-[#FA83FF] "
                  : ""
              } ${
                !feature.isCategory
                  ? "lg:border-black lg:dark:border-white/1 lg:border-b-[.5px]"
                  : "lg:border-black lg:dark:border-white/7 lg:border-b-[2px]"
              } lg:w-[306px] lg:h-[94px]`}
            >
              {!feature.isCategory && (
                <Image
                  src={value ? check : cross}
                  alt={value ? "check" : "cross"}
                  width={44}
                  height={44}
                  className="size-[24px] lg:size-[44px]"
                />
              )}
            </div>
          ))}
        </div>
      ))}

      {/* Select Plan Buttons Row */}
      <div className="flex flex-row justify-between items-center gap-[10px] lg:gap-0 mx-auto mt-[5px] px-[5px] lg:px-0 w-[380px] md:w-[768px] lg:w-[1224px]">
        <div className="lg:w-[306px]">{/* Empty cell for alignment */}</div>

        {plans.map((plan, index) => (
          <div
            key={`plan-button-${index}`}
            className={`ml-[72px] lg:ml-0 flex justify-center items-center mx-auto lg:h-[94px] lg:w-[306px] ${
              plan.highlight ? "lg:bg-[#19171E] lg:rounded-b-[16px] " : ""
            }`}
          >
            <button
              className={`lg:py-3 lg:px-6 w-[70px] lg:w-[274px] text-[10px] lg:text-[16px]  rounded-full font-medium transition-colors duration-200 ${plan.buttonClass} lg:h-[54px] border-1 border-[#B683F9] py-[5px]`}
            >
              Select Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
