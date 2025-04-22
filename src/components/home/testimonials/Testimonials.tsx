"use client";
import { FaArrowRight } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import Link from "next/link";
import Image from "next/image";
import article from "@/image/article.png";
import profile1 from "@/image/profile1.png";
import profile2 from "@/image/profile2.png";
import notion from "@/image/notion.png";

export default function Testimonials() {
  useEffect(() => {
    const slider = new Glide(".glide-02", {
      type: "slider",
      focusAt: "center",
      perView: 1,
      autoplay: 4000,
      animationDuration: 2000,
      gap: 0,
      classes: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <div className="flex flex-col justify-around items-center mx-auto mt-[65px] w-full">
      {/* Testimonial Title Start */}
      <div>
        <div className="flex flex-row items-center gap-[10px] bg-[#19171E] mx-auto px-[14px] py-[12px] border-2 border-gray-600 rounded-full w-[152px] h-[43px]">
          <div>
            <FaMessage />
          </div>
          <h6>Testimonials</h6>
        </div>
        <h3 className="mt-[20px] lg:w-[606] text-[30px] lg:text-[45px] text-center leading-[40px] lg:leading-[67px]">
          Clients <span className="text-primary-700">Says About </span> Our Task
          Management Tools{" "}
        </h3>
      </div>
      {/* Testimonial Title End */}
      {/* Slider Part Start */}
      <div className="relative mt-[30px] lg:mt-[70px] w-[380px] lg:w-[1224px] glide-02">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden" data-glide-el="track">
          <div className="relative flex flex-no-wrap p-0 w-full overflow-hidden whitespace-no-wrap [backface-visibility: [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform]">
            {/* First Slide Start */}
            <div className="flex flex-row justify-between items-center lg:p-[30px] border-1 border-gray-400 w-[380px] lg:w-[850px] h-[332px]">
              <div>
                <Link href={"/"}>
                  <Image
                    src={article}
                    alt={"article"}
                    width={238}
                    height={272}
                    className="ml-[10px] lg:ml-0 w-[100px] lg:w-[238px] h-[120px] lg:h-[272px]"
                  />
                </Link>
              </div>
              <div className="flex flex-col justify-center px-[24px] border-gray-400 border-l-2 w-[250px] lg:w-[586px] h-[250px] lg:h-[272px]">
                <h6 className="w-[210px] lg:w-[558px] lg:text-left text-center">
                  The reporting and analytics features are invaluable for making
                  strategic decisions. A fantastic investment for any
                  organization.
                </h6>
                <div className="flex flex-row justify-between items-center mt-[46px]">
                  {/* Left */}
                  <div className="flex flex-row items-center gap-[8px]">
                    <Link href={"/"}>
                      <Image
                        src={profile2}
                        alt={"profile2"}
                        width={56}
                        height={56}
                        className=""
                      />
                    </Link>
                    <div>
                      <h5>Alien Donald</h5>
                      <p className="mt-10px">Product Manager</p>
                    </div>
                  </div>
                  {/* Right */}
                  <div>
                    <Link href={"/"}>
                      <Image
                        src={notion}
                        alt={"notion"}
                        width={86}
                        height={32}
                        className="hidden lg:flex"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* First Slide End */}
            {/* Second Slide Start */}
            <div className="flex flex-row justify-between items-center lg:p-[30px] border-1 border-gray-400 w-[380px] lg:w-[850px] h-[332px]">
              <div>
                <Link href={"/"}>
                  <Image
                    src={article}
                    alt={"article"}
                    width={238}
                    height={272}
                    className="ml-[10px] lg:ml-0 w-[100px] lg:w-[238px] h-[120px] lg:h-[272px]"
                  />
                </Link>
              </div>
              <div className="flex flex-col justify-center px-[24px] border-gray-400 border-l-2 w-[250px] lg:w-[586px] h-[250px] lg:h-[272px]">
                <h6 className="w-[210px] lg:w-[558px] lg:text-left text-center">
                  Being a small business owner, time is of the essence. [Product
                  Name] has been a lifesaver in helping us organize projects,
                  communicate effectively, and keep everyone on the same page.
                </h6>
                <div className="flex flex-row justify-between items-center mt-[46px]">
                  {/* Left */}
                  <div className="flex flex-row items-center gap-[8px]">
                    <Link href={"/"}>
                      <Image
                        src={profile1}
                        alt={"profile1"}
                        width={56}
                        height={56}
                        className=""
                      />
                    </Link>
                    <div>
                      <h5>Isabela Inaya</h5>
                      <p className="mt-10px">Product Manager</p>
                    </div>
                  </div>
                  {/* Right */}
                  <div>
                    <Link href={"/"}>
                      <Image
                        src={notion}
                        alt={"notion"}
                        width={86}
                        height={32}
                        className="hidden lg:flex"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Second Slide End */}
            {/* Third Slide Start */}
            <div className="flex flex-row justify-between items-center lg:p-[30px] border-1 border-gray-400 w-[380px] lg:w-[850px] h-[332px]">
              <div>
                <Link href={"/"}>
                  <Image
                    src={article}
                    alt={"article"}
                    width={238}
                    height={272}
                    className="ml-[10px] lg:ml-0 w-[100px] lg:w-[238px] h-[120px] lg:h-[272px]"
                  />
                </Link>
              </div>
              <div className="flex flex-col justify-center px-[24px] border-gray-400 border-l-2 w-[250px] lg:w-[586px] h-[250px] lg:h-[272px]">
                <h6 className="w-[210px] lg:w-[558px] lg:text-left text-center">
                  The reporting and analytics features are invaluable for making
                  strategic decisions. A fantastic investment for any
                  organization.
                </h6>
                <div className="flex flex-row justify-between items-center mt-[46px]">
                  {/* Left */}
                  <div className="flex flex-row items-center gap-[8px]">
                    <Link href={"/"}>
                      <Image
                        src={profile1}
                        alt={"profile1"}
                        width={56}
                        height={56}
                        className=""
                      />
                    </Link>
                    <div>
                      <h5>Alien Donald</h5>
                      <p className="mt-10px">Product Manager</p>
                    </div>
                  </div>
                  {/* Right */}
                  <div>
                    <Link href={"/"}>
                      <Image
                        src={notion}
                        alt={"notion"}
                        width={86}
                        height={32}
                        className="hidden lg:flex"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Third Slide End */}
          </div>
        </div>
        {/*    <!-- Indicators --> */}
        <div
          className="bottom-0 absolute flex justify-center items-center gap-2 w-full"
          data-glide-el="controls[nav]"
        >
          <button
            className="group p-4 text-accent-700"
            data-glide-dir="=0"
            aria-label="goto slide 1"
          >
            <span className="block rounded-full focus:outline-none ring-1 ring-slate-700 w-2 h-2 transition-colors duration-300 bg-accent-500"></span>
          </button>
          <button
            className="group p-4 text-accent-600"
            data-glide-dir="=1"
            aria-label="goto slide 2"
          >
            <span className="block rounded-full focus:outline-none ring-1 ring-slate-700 w-2 h-2 transition-colors duration-300 bg-accent-600"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=2"
            aria-label="goto slide 3"
          >
            <span className="block rounded-full focus:outline-none ring-1 ring-slate-700 w-2 h-2 transition-colors duration-300 bg-accent-700"></span>
          </button>
        </div>
      </div>
      {/* Slider Part End */}
      <div className="flex flex-row items-center gap-[12] mt-[35px]">
        <h6>Read our customer stories</h6>
        <div>
          <FaArrowRight />
        </div>
      </div>
    </div>
  );
}
