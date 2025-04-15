import Link from "next/link";
import Image from "next/image";
import logo from "@/image/logo.png";
import { ArrowRight } from "lucide-react";
import { FaAngleDown } from "react-icons/fa6";

export default function Navbar() {
  return (
    <div className="flex flex-row justify-between items-center bg-[#19171E] mx-auto mt-[40px] mb-[50px] p-[17px] rounded-full w-[380px] md:w-[768px] lg:w-[1224px] lg:h-[84px]">
      <div>
        <Link href={"/"}>
          <Image
            src={logo}
            alt={"logo"}
            width={37}
            height={37}
            className="lg:ml-[16px]"
          />
        </Link>
      </div>

      <nav className="hidden lg:flex flex-row gap-[32] mx-auto">
        <Link
          className="flex flex-row items-center gap-[10px]"
          href={"/all-pages"}
        >
          All Pages <FaAngleDown />{" "}
        </Link>
        <Link href={"/ntegrations"}>Integrations</Link>
        <Link href={"/pricing"}>Pricing</Link>
        <Link href={"/contact"}>Contact</Link>
      </nav>

      <div>
        <button className="flex justify-around items-center bg-accent mx-auto rounded-full w-[207px] h-[48px]">
          Get Started Now <ArrowRight />
        </button>
      </div>
    </div>
  );
}
