import Image from "next/image";

import footer from "@/image/footer.png";

export default function Footer() {
  return (
    <div className="bg-[#19171E] mt-[-80px] lg:mt-[-300px] lg:mr-0">
      {/* Footer Image Start */}
      <Image
        src={footer}
        alt={"footer"}
        width={1570}
        height={330}
        className="lg:ml-[335px]"
      />
      {/* Footer Image End */}
    </div>
  );
}
