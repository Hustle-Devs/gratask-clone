import Image from "next/image";

import footer from "@/image/footer.png";

export default function Footer() {
  return (
    <div className="bg-[#19171E] mx-auto mt-[-80px] lg:mt-[-300px] lg:h-[352px]">
      {/* Footer Image Start */}
      <Image
        src={footer}
        alt={"footer"}
        width={1570}
        height={296}
        className="lg:ml-[185px]"
      />
      {/* Footer Image End */}
    </div>
  );
}
