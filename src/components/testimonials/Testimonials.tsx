"use client";
import { FaArrowRight } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import Link from "next/link";
import Image from "next/image";
import article from "@/image/article.png";

export default function testimonials() {
  useEffect(() => {
    const slider = new Glide(".glide-02", {
      type: "slider",
      focusAt: "center",
      perView: 1,
      autoplay: 3500,
      animationDuration: 700,
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
    <div className="flex flex-col justify-around items-center mx-auto w-full">
      {/* Testimonial Title Start */}
      <div>
        <div className="flex flex-row items-center gap-[10px] bg-[#19171E] mx-auto px-[14px] py-[12px] border-2 border-gray-600 rounded-full w-[152px] h-[43px]">
          <div>
            <FaMessage />
          </div>
          <h6>Testimonials</h6>
        </div>
        <h3 className="mt-[20px] lg:w-[606] text-center lg:leading-[67px]">
          Clients <span className="text-primary-700">Says About </span> Our Task
          Management Tools{" "}
        </h3>
      </div>
      {/* Testimonial Title End */}
      {/* Slider Part Start */}
      <div className="relative w-full glide-02">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden" data-glide-el="track">
          <div className="hidden] relative flex flex-no-wrap p-0 w-full overflow-hidden whitespace-no-wrap [backface-visibility: [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform]">
            {/* First Slide Start */}
            <div className="flex flex-row justify-between items-center lg:p-[30px] border-1 border-gray-400 lg:w-[1054px] lg:h-[332px]">
              <Link href={"/"}>
                <Image
                  src={article}
                  alt={"article"}
                  width={238}
                  height={272}
                  className=""
                />
              </Link>
            </div>
            {/* First Slide End */}
          </div>
        </div>
        {/*    <!-- Indicators --> */}
        <div
          className="bottom-0 absolute flex justify-center items-center gap-2 w-full"
          data-glide-el="controls[nav]"
        >
          <button
            className="group p-4"
            data-glide-dir="=0"
            aria-label="goto slide 1"
          >
            <span className="block bg-white/20 rounded-full focus:outline-none ring-1 ring-slate-700 w-2 h-2 transition-colors duration-300"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=1"
            aria-label="goto slide 2"
          >
            <span className="block bg-white/20 rounded-full focus:outline-none ring-1 ring-slate-700 w-2 h-2 transition-colors duration-300"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=2"
            aria-label="goto slide 3"
          >
            <span className="block bg-white/20 rounded-full focus:outline-none ring-1 ring-slate-700 w-2 h-2 transition-colors duration-300"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=3"
            aria-label="goto slide 4"
          >
            <span className="block bg-white/20 rounded-full focus:outline-none ring-1 ring-slate-700 w-2 h-2 transition-colors duration-300"></span>
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
