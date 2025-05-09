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
  );
}
