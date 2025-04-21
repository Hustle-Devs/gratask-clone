"use client";
import React, { useState } from "react";

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
      buttonStyle: "border border-purple-400 bg-transparent text-white",
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
      buttonStyle: "bg-purple-600 text-white",
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
      buttonStyle: "border border-purple-400 bg-transparent text-white",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center mx-auto px-4 py-8 sm:py-12 lg:py-16 max-w-7xl">
      {/* Top badge - Responsive sizing */}
      <div className="bg-black mb-3 sm:mb-4 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-white text-sm sm:text-base">
        <span className="flex items-center">💎 Pricing Plan</span>
      </div>

      {/* Main heading - Responsive font size */}
      <h2 className="mb-8 sm:mb-10 lg:mb-12 font-bold text-purple-500 text-2xl sm:text-3xl lg:text-4xl text-center">
        Pricing Plan
      </h2>

      {/* Billing period toggle - Responsive sizing */}
      <div className="inline-flex bg-purple-100 mb-8 sm:mb-10 lg:mb-12 p-1 rounded-full w-full max-w-xs sm:max-w-md">
        <button
          className={`flex-1 text-center px-4 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base transition-all duration-200 ${
            billingPeriod === "quarterly"
              ? "bg-purple-600 text-white"
              : "bg-transparent text-gray-600 hover:bg-purple-50"
          }`}
          onClick={() => setBillingPeriod("quarterly")}
        >
          Quarterly
        </button>
        <button
          className={`flex-1 text-center px-4 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base transition-all duration-200 ${
            billingPeriod === "yearly"
              ? "bg-purple-600 text-white"
              : "bg-transparent text-gray-600 hover:bg-purple-50"
          }`}
          onClick={() => setBillingPeriod("yearly")}
        >
          Yearly
        </button>
      </div>

      {/* Pricing cards container - Responsive grid layout */}
      <div className="gap-4 sm:gap-5 lg:gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
        {/* Map through the plans array to generate pricing cards */}
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`bg-black text-white rounded-lg p-4 sm:p-5 lg:p-6 flex flex-col ${
              // Special styling for the third card on medium screens
              index === 2 ? "md:col-span-2 lg:col-span-1" : ""
            }`}
          >
            {/* Plan name */}
            <div className="mb-3 sm:mb-4">
              <h3 className="font-bold text-base sm:text-lg">{plan.name}</h3>
            </div>

            {/* Trial offer text - Responsive font size */}
            <p className="mb-4 sm:mb-6 text-gray-400 text-xs sm:text-sm">
              Sign up for a free trial today and experience the difference.
            </p>

            {/* Price display - Responsive font size */}
            <div className="mb-1 sm:mb-2">
              <span className="font-bold text-2xl sm:text-3xl lg:text-4xl">
                {plan.price}
              </span>
              <span className="ml-1 text-gray-400 text-xs sm:text-sm">
                /per month
              </span>
            </div>

            {/* Free trial info - Responsive font size */}
            <p className="mb-4 sm:mb-6 text-gray-400 text-xs sm:text-sm">
              For 14 days, no card required.
            </p>

            {/* Select plan button - Responsive padding */}
            <button
              className={`py-2 sm:py-3 px-4 sm:px-6 rounded-full mb-6 sm:mb-8 text-sm sm:text-base transition-all duration-200 ${plan.buttonStyle} hover:opacity-90`}
            >
              Select Plan
            </button>

            {/* Features section */}
            <div className="mt-auto">
              <h4
                className={`mb-3 sm:mb-4 font-medium text-sm sm:text-base ${
                  index === 1 ? "text-left" : ""
                }`}
              >
                {index === 1 ? "Features Included:" : "Plan Features"}
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    {/* Feature icon (purple circle) - Responsive sizing */}
                    <div className="flex flex-shrink-0 justify-center items-center bg-purple-600 mr-2 sm:mr-3 rounded-full w-5 sm:w-6 h-5 sm:h-6">
                      <span className="text-xs">✓</span>
                    </div>
                    {/* Feature text - Responsive font size */}
                    <span className="text-xs sm:text-sm">{feature}</span>
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
