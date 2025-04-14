import Link from "next/link";
import Image from "next/image";
import logo from "@/image/logo.png";
import { ArrowRight } from "lucide-react";

export default function Navbar() {
  return (
    <div className="flex flex-row lg:justify-between items-center bg-gray-800 mx-auto mt-[40px] p-[17px] rounded-full w-[390px] md:w-[768px] lg:w-[1224px] lg:h-[84px]">
      <Link href={"/"}>
        <Image
          src={logo}
          alt={"logo"}
          width={37}
          height={37}
          className="lg:ml-[16px]"
        />
      </Link>
      <nav className="hidden lg:flex flex-row items-center gap-[98px] mr-0">
        <div className="flex flex-row- gap-[32] w-[395px]">
          <Link href={"/all-pages"}>All Pages</Link>
          <Link href={"/ntegrations"}>Integrations</Link>
          <Link href={"/pricing"}>Pricing</Link>
          <Link href={"/contact"}>Contact</Link>
        </div>
        <button className="flex justify-around items-center bg-accent mx-auto rounded-full w-[207px] h-[48px]">
          Get Started Now <ArrowRight />
        </button>
      </nav>
      <button className="lg:hidden flex justify-around items-center bg-accent mx-auto mr-0 rounded-full w-[207px] h-[48px]">
        Get Started Now <ArrowRight />
      </button>
    </div>
  );
}
