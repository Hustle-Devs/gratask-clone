"use client";
import React, { useState } from "react";
import Image from "next/image";

import pricingicon from "@/image/pricingicon.png";

const PricingPlan = () => {
  // State to track which billing period is selected (quarterly or yearly)
  const [billingPeriod, setBillingPeriod] = useState("quarterly");

  // Plan data for each pricing tier
  const plans = [
    {
      name: "Personal",
      price: "$99",
      features: [
        "Access to essential features",
        "Limited Usage",
        "Basic Reporting",
        "Collaboration with 2 members",
      ],
      buttonStyle: "border border-[#B683F9] bg-[#19171E] dark:text-white",
    },
    {
      name: "Business",
      price: "$105",
      features: [
        "Advanced Task Management",
        "Enterprise-level Collaboration",
        "Customizable dashboards",
        "Collaboration with unlimited member",
      ],
      buttonStyle: " bg-[#613FE7] dark:text-white",
    },
    {
      name: "Select Plan",
      price: "$175",
      features: [
        "Full Suite of Features",
        "Advanced Reporting & Analytics",
        "Priority consideration",
        "Collaboration with 50 members",
      ],
      buttonStyle: "border border-[#B683F9] bg-[#19171E] dark:text-white",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center mx-auto mt-[165px] mb-[50px] w-[380px] md:w-[768px] lg:w-[1224px]">
      {/* Top badge - Responsive sizing */}
      <div className="flex justify-center items-center bg-[#19171E] mb-[23px] border-1 border-white/20 rounded-full w-[148px] h-[40px] text-[16px] text-white text-center">
        <h6>🔖 Pricing Plan </h6>
      </div>

      {/* Main heading - Responsive font size */}
      <h3 className="mb-[47px] w-[380px] lg:w-[650px] text-[20px] lg:text-[45px] text-center">
        Premium <span className="text-primary-700">Pricing Plan</span>{" "}
        Innovator's Choice Packages{" "}
      </h3>

      {/* Billing period toggle - Responsive sizing */}
      <div className="inline-flex items-center bg-black dark:bg-gradient-to-r dark:from-[#613FE7] dark:to-[#613FE70] mb-[35px] p-1 px-[8px] border-[#A076F9]/50 border-1 rounded-full w-[240px] h-[70px]">
        <button
          className={`flex-1 w-[120px] h-[53px] text-center  rounded-full text-[16px] p-4  transition-all duration-200 ${
            billingPeriod === "quarterly"
              ? "bg-white dark:bg-[#613FE7] dark:text-white"
              : "bg-transparent text-white "
          }`}
          onClick={() => setBillingPeriod("quarterly")}
        >
          Quarterly
        </button>
        <button
          className={`flex-1 w-[120px] h-[53px] text-center  rounded-full text-[16px] p-4  transition-all duration-200 ${
            billingPeriod === "yearly"
              ? "bg-white dark:bg-[#613FE7] dark:text-white"
              : "bg-transparent text-white"
          }`}
          onClick={() => setBillingPeriod("yearly")}
        >
          Yearly
        </button>
      </div>

      {/* Pricing cards container - Responsive grid layout */}
      <div className="flex lg:flex-row flex-col flex-wrap justify-around items-center gap-[24px] mx-auto w-[380px] lg:w-[1224px]">
        {/* Map through the plans array to generate pricing cards */}
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`bg-[#0E0C12] dark:text-white rounded-[16px] px-[10px] py-[10px] lg:px-[30px] lg:py-[40px] flex flex-col w-[380px] lg:w-[551px] lg:h-[693px] border-1 border-white/7 ${
              // Special styling for the third card on medium screens
              index === 1 ? " bg-[#19171E]" : ""
            }`}
          >
            {/* Plan name */}

            <h5 className="flex justify-center items-center bg-[#18171E] rounded-full w-[115px] h-[47px] text-white text-center">
              {plan.name}
            </h5>

            {/* Trial offer text - Responsive font size */}
            <h6 className="mt-[23px] mb-[36px] text-[#D5D4D6]">
              Sign up for a free trial today and experience the difference.
            </h6>

            {/* Price display - Responsive font size */}
            <h3 className="text-[55px] text-white">
              {plan.price}

              <span className="text-[#D5D4D6] text-[16px]">/per month</span>
            </h3>

            {/* Free trial info - Responsive font size */}
            <h6 className="mt-[4px] mb-[36px] text-white">
              For 14 days, no card required.
            </h6>

            {/* Select plan button - Responsive padding */}
            <button
              className={`py-2 sm:py-3 px-4 sm:px-6 rounded-full mb-6 sm:mb-8 text-sm sm:text-base text-white ${plan.buttonStyle} `}
            >
              Select Plan
            </button>

            <div className="ml-[-11px] lg:ml-[-30px] border-white/7 border-t-1 w-[380px] lg:w-[551px]"></div>

            {/* Features section */}
            <div className="py-[26px]">
              <h5
                className={`mb-3 sm:mb-4 font-medium text-white  ${
                  index === 1 ? "text-left" : ""
                }`}
              >
                {index === 1 ? "Features Included:" : "Plan Features"}
              </h5>
              <ul className="space-y-[10px] lg:space-y-[12px] mt-[22px]">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    {/* Icon */}
                    <Image
                      src={pricingicon}
                      alt="pricingicon"
                      width={32}
                      height={32}
                      className="mr-[16px]"
                    />
                    {/* Feature text - Responsive font size */}
                    <span className="text-white text-xs sm:text-sm">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlan;
