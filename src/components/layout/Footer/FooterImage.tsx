import Image from "next/image";

import footer from "@/image/footer.png";

export default function Footer() {
  return (
    <div className="bg-[#19171E] mx-auto mt-[-150px] lg:mt-[-360px] w-full lg:h-[320px]">
      {/* Footer Image Start */}
      <Image
        src={footer}
        alt={"footer"}
        width={1570}
        height={26}
        className="mx-auto w-[1500px] lg:h-[320px]"
      />
      {/* Footer Image End */}
    </div>
  );
}
