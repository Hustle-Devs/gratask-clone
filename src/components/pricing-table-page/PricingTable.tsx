"use client";
import React, { useState } from "react";
import Image from "next/image";

import pricingicon from "@/image/pricingicon.png";
import pricingplan1 from "@/components/pricing-table-page/image/pricingplan1.png";
import pricingplan2 from "@/components/pricing-table-page/image/pricingplan2.png";
import contact from "@/components/pricing-table-page/image/contact.png";
const PricingPlan = () => {
  // State to track which billing period is selected (quarterly or yearly)
  const [billingPeriod, setBillingPeriod] = useState("quarterly");

  // Plan data for each pricing tier
  const plans = [
    {
      name: "Personal",
      price: "$49",
      features: [
        "Access to essential features",
        "Limited Usage",
        "Basic Reporting",
        "Collaboration with 2 members",
      ],
      featuresDetails: [
        "Basic functionalities that cater to the needs of small businesses or individual users",
      ],
      buttonStyle: " border border-[#B683F9] bg-[#19171E] dark:text-white",
    },
    {
      name: "Business",
      price: "$99",
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
      price: "$199",
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
      <div className="relative mx-auto lg:mb-[80px] w-[380px] lg:w-[1224px] lg:h-[150px] text-center">
        {/* Main heading - Responsive font size */}
        <h2 className="mb-[20px] text-[20px] lg:text-[60px]">Pricing & Plan</h2>
        <h5>
          Sign up for a free trial today and experience the difference. Our
        </h5>
        <h5>intuitive interface, powerful features, and dedicated.</h5>
        <Image
          src={pricingplan1}
          alt="pricingplan1"
          width={96}
          height={96}
          className="hidden top-0 left-[66px] absolute lg:flex size-[96px]"
        />
        <Image
          src={pricingplan2}
          alt="pricingplan2"
          width={96}
          height={96}
          className="hidden top-[90px] left-[1067px] absolute lg:flex size-[96px]"
        />
      </div>

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
            className={`bg-[#0E0C12] dark:text-white rounded-[16px] px-[10px] py-[10px] lg:px-[30px] lg:py-[40px] flex flex-col w-[380px] lg:w-[392px] lg:h-[833px] border-1 border-white/7 ${
              // Special styling for the third card on medium screens
              index === 1 ? " bg-[#19171E]" : ""
            }`}
          >
            {/* Plan name */}
            <div className="flex flex-row items-center">
              <Image
                src={contact}
                alt="contact"
                width={48}
                height={48}
                className="size-[48px]"
              />

              <h5 className="flex justify-center items-center bg-[#18171E] rounded-full w-[115px] h-[47px] text-white text-center">
                {plan.name}
              </h5>
            </div>

            {/* Trial offer text - Responsive font size */}
            <h6 className="mt-[23px] mb-[24px] w-[248px] text-[#D5D4D6]">
              Sign up for a free trial today and experience the difference.
            </h6>

            {/* Price display - Responsive font size */}
            <div className="flex flex-row items-center gap-[8px]">
              <h2 className="text-white">{plan.price}</h2>

              <h6 className="w-[173px]">
                Per user/per month Billed annually at $276
              </h6>
            </div>

            {/* Select plan button - Responsive padding */}

            <div className="mt-[35px] ml-[-11px] lg:ml-[-30px] border-white/7 border-t-1 w-[380px] lg:w-[392px]"></div>

            {/* Features section */}
            <div className="py-[26px]">
              <h5
                className={`mb-3 sm:mb-4 font-medium text-white  ${
                  index === 2 ? "text-left" : ""
                }`}
              >
                {index === 2
                  ? "Everything in Business, Plus:"
                  : "Features Included:"}
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
              <button
                className={`py-2 w-[324px] h-[54px] sm:py-3 px-4 sm:px-6 rounded-full mb-6 sm:mb-8 text-sm sm:text-base text-white ${plan.buttonStyle} `}
              >
                Select Plan
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlan;
