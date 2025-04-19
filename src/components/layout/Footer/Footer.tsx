import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import Image from "next/image";
import footerlogo from "@/image/footerlogo.png";

import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-[#19171E] mb-[50px] border-primary-700 border-t-4 w-full">
      <div className="mx-auto py-[100px] lg:py-[332px] w-[390px] md:w-[768px] lg:w-[1224px]">
        <div className="flex lg:flex-row flex-col lg:justify-start items-center lg:items-start lg:gap-[217px] lg:mr-[218px] lg:w-[1224px]">
          {/* Left Start */}
          <div className="flex flex-col justify-between items-center lg:items-start gap-[12px] w-[247px] text-white">
            {/* logo */}
            <Link href={""}>
              <Image
                src={footerlogo}
                alt={"footerlogo"}
                width={40}
                height={40}
              />
            </Link>
            <h6 className="lg:w-[248px] lg:text-left text-center leading-[27px]">
              Sign up for a free trial today and experience the difference.
            </h6>

            {/* Icons */}
            <div className="flex flex-row justify-center lg:justify-around gap-[20px] lg:mt-[48px] mb-[50px] lg:mb-0 size-[14px]">
              <Link href={"/"}>
                <FaFacebookF />
              </Link>
              <Link href={"/"}>
                <FaTwitter />
              </Link>
              <Link href={"/"}>
                <FaInstagram />
              </Link>
              <Link href={"/"}>
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
          {/* Left End */}
          {/* Right Start */}
          <div className="flex lg:flex-row flex-col gap-[50px] lg:gap-[80px] text-white">
            {/* Features & Integrations Start */}
            <div className="flex flex-row gap-[100px] lg:gap-[115px]">
              {/* Features */}
              <div className="flex flex-col">
                <h5 className="mb-[35px] text-primary-700">Features</h5>
                <Link href={"/"} className="text-[16px]">
                  Manage Task
                </Link>
                <Link href={"/"} className="mt-[15px] mb-[15px] text-[16px]">
                  Productivity
                </Link>
                <Link href={"/"} className="mb-[15px] text-[16px]">
                  Collaboration
                </Link>
                <Link href={"/"} className="text-[16px]">
                  Integration
                </Link>
              </div>
              {/* Integrations */}
              <div className="flex flex-col">
                <h5 className="mb-[35px] text-primary-700">Integrations</h5>
                <Link href={"/"} className="text-[16px]">
                  Notion
                </Link>
                <Link href={"/"} className="mt-[15px] mb-[15px] text-[16px]">
                  Monday
                </Link>
                <Link href={"/"} className="mb-[15px] text-[16px]">
                  Clickup
                </Link>
                <Link href={"/"} className="text-[16px]">
                  Google
                </Link>
              </div>
            </div>
            {/* Features & Integrations End */}
            {/* Resources & Resources Start */}
            <div className="flex flex-row gap-[100px] lg:gap-[115px]">
              {/* Resources */}
              <div className="flex flex-col">
                <h5 className="mb-[35px] text-primary-700">Resources</h5>
                <Link href={"/"} className="text-[16px]">
                  Guideline
                </Link>
                <Link href={"/"} className="mt-[15px] text-[16px]">
                  Newsroom
                </Link>
              </div>
              {/* Resources */}
              <div className="flex flex-col">
                <h5 className="mb-[35px] text-primary-700">Resources</h5>
                <Link href={"/"} className="text-[16px]">
                  Testimonials
                </Link>
                <Link href={"/"} className="mt-[15px] mb-[15px] text-[16px]">
                  About
                </Link>
                <Link href={"/"} className="text-[16px]">
                  Contact
                </Link>
              </div>
            </div>
            {/* Resources & Resources End */}
          </div>
          {/* Right End */}
        </div>
      </div>
    </div>
  );
}
