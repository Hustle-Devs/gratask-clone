import Image from "next/image";

type IntegrationCardProps = {
  name: string;
  logo: string;
  description: string;
};

export default function IntegrationCard({ name, logo, description }: IntegrationCardProps) {
  return (
    <div className="bg-[#18171E] shadow-sm hover:shadow-md p-10 rounded-2xl h-auto text-white transition">
      <div>
        <Image src={logo} alt={name} width={150} height={10} className="pb-4" />
      </div>
        <p className="text-gray-400 text-balance">{description}</p>
      <button className="mt-6 py-3 border border-purple-500 rounded-full w-1/2 hover:text-white transition cursor-pointer">
        Try Connect
      </button>
 
    </div>
    // <div className="flex flex-col justify-between bg-[#15121F] shadow hover:shadow-lg p-6 border hover:border-purple-600 border-transparent rounded-xl text-white transition duration-300">
    //   {/* Top: Logo + Name */}
    //   <div className="flex items-center space-x-3 mb-4">
    //     <Image src={logo} alt={name} width={32} height={32} />
    //     <h3 className="font-semibold text-xl capitalize">{name}</h3>
    //   </div>

    //   {/* Middle: Description */}
    //   <p className="mb-6 text-gray-400 text-sm">{description}</p>

    //   {/* Bottom: Button */}
    //   <button className="hover:bg-purple-600 mt-auto px-5 py-2 border border-purple-500 rounded-full text-white text-sm transition-all">
    //     Try Connect
    //   </button>
    // </div>
  );
}
