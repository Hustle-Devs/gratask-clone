import Link from "next/link";
import Image from "next/image";
import logo from "@/image/logo.png";
import { ArrowRight } from "lucide-react";

export default function Navbar() {
  return (
    <div className="flex flex-row justify-between items-center bg-gray-800 p-[17px] rounded-full lg:h-[84px] container">
      <Link href={"/"}>
        <Image
          src={logo}
          alt={"logo"}
          width={37}
          height={37}
          className="lg:ml-[16px]"
        />
      </Link>
      <nav className="hidden lg:flex flex-row items-center gap-[32px]">
        <Link href={"/all-pages"}>All Pages</Link>
        <Link href={"/ntegrations"}>Integrations</Link>
        <Link href={"/pricing"}>Pricing</Link>
        <Link href={"/contact"}>Contact</Link>
        <button className="flex justify-around items-center bg-accent mx-auto lg:ml-[66px] rounded-full w-[207px] h-[48px]">
          Get Started Now <ArrowRight />
        </button>
      </nav>
    </div>
  );
}
