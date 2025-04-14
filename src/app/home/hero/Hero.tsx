// export default function Hero() {
//     return (
//       <div className="flex justify-center items-center bg-white dark:bg-black px-6 py-12 min-h-screen font-sans text-black dark:text-white">
//         <div className="gap-16 grid md:grid-cols-2 w-full max-w-7xl">
//           {/* Left Side */}
//           <div className="flex flex-col justify-center space-y-6">
//             <div className="inline-flex items-center bg-gray-200 dark:bg-gray-800 px-4 py-1 rounded-full text-sm">
//               <span className="mr-2">🏆</span> Award Winning Startup 2023
//             </div>
//             <h1 className="font-bold text-4xl md:text-5xl">
//               From <span className="text-black dark:text-white">Chaos</span> to <span className="text-black dark:text-white">Control</span><br />
//               <span className="text-pink-600 dark:text-pink-500">Master Your Tasks</span>
//               <br />with <span className="inline-flex items-center text-black dark:text-white"> <span className="bg-pink-600 mx-2 p-1 rounded-full text-white">➔</span> GTX</span>
//             </h1>
//             <p className="max-w-md text-gray-600 dark:text-gray-400">
//               Sign up for a free trial today and experience the difference. Our intuitive interface, powerful features, and dedicated.
//             </p>
//             <button className="bg-purple-700 hover:bg-purple-800 px-6 py-3 rounded-full w-max font-medium text-white">
//               Start 14 Days Free Trial
//             </button>
//           </div>

//           {/* Right Side - Mock UI */}
//           <div className="flex md:flex-row flex-col gap-4 md:gap-6">
//             {/* Collections Panel */}
//             <div className="flex flex-col bg-gray-100 dark:bg-gray-900 p-6 rounded-2xl w-full md:w-1/2">
//               <h2 className="mb-4 font-semibold text-lg">Collections</h2>
//               <div className="space-y-4">
//                 <div className="bg-gray-200 dark:bg-gray-800 p-3 rounded-lg">
//                   <div className="flex justify-between text-sm">
//                     <span className="font-medium">Remote Office</span>
//                     <span className="text-gray-500 dark:text-gray-400">1/3</span>
//                   </div>
//                   <p className="text-gray-500 text-xs">4 task plus tomorrow.</p>
//                 </div>
//                 <div className="bg-gray-200 dark:bg-gray-800 p-3 rounded-lg">
//                   <div className="flex justify-between text-sm">
//                     <span className="font-medium">Personal</span>
//                     <span className="text-gray-500 dark:text-gray-400">7/10</span>
//                   </div>
//                   <p className="text-gray-500 text-xs">1 task plus today.</p>
//                 </div>
//                 <div className="bg-gray-200 dark:bg-gray-800 p-3 rounded-lg">
//                   <div className="flex justify-between text-sm">
//                     <span className="font-medium">Design</span>
//                     <span className="text-gray-500 dark:text-gray-400">0/3</span>
//                   </div>
//                   <p className="text-gray-500 text-xs">3 task plus rewt week.</p>
//                 </div>
//               </div>
//               <div className="flex items-center mt-4 text-pink-600 dark:text-pink-400 text-sm">
//                 <div className="bg-pink-600 px-3 py-1 rounded-full text-white">Gabriel Julian</div>
//               </div>
//             </div>

//             {/* Dashboard Card */}
//             <div className="bg-gradient-to-br from-purple-300 dark:from-purple-700 to-gray-100 dark:to-black p-6 rounded-2xl w-full md:w-1/2">
//               <h2 className="font-semibold text-lg">Dashboard Desktop</h2>
//               <p className="mb-4 text-gray-600 dark:text-gray-400 text-sm">Design Idea</p>
//               <div className="space-y-4">
//                 <div className="flex justify-between items-center bg-gray-200 dark:bg-gray-800 p-3 rounded-lg">
//                   <span className="font-medium text-black dark:text-white">Create Wireframe</span>
//                   <div className="flex -space-x-2">
//                     <img src="https://i.pravatar.cc/24?img=1" className="border-2 border-white dark:border-black rounded-full w-6 h-6" />
//                     <img src="https://i.pravatar.cc/24?img=2" className="border-2 border-white dark:border-black rounded-full w-6 h-6" />
//                     <img src="https://i.pravatar.cc/24?img=3" className="border-2 border-white dark:border-black rounded-full w-6 h-6" />
//                   </div>
//                 </div>
//                 <div className="bg-gray-200 dark:bg-gray-800 p-3 rounded-lg">
//                   <span className="text-gray-700 dark:text-gray-300">Hi-Fidelity</span>
//                   <p className="text-gray-500 text-xs">#design</p>
//                 </div>
//                 <div className="bg-gray-200 dark:bg-gray-800 p-3 rounded-lg">
//                   <span className="text-gray-700 dark:text-gray-300">Build Component</span>
//                   <p className="text-gray-500 text-xs">#development</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { IoTrophy } from "react-icons/io5";

export default function Hero() {
  return (
    <div>
      <div className="flex items-center container">
        {/* Left Side */}
        <div className="flex flex-col justify-center space-y-6 pt-[150px] pb-[65px] w-1/2">
          <div className="inline-flex justify-center items-center dark:bg-gray-700 py-1 border border-gray-600 rounded-full w-1/2 text-foreground dark:text-primary text-sm">
            <span className="mr-2">
              <IoTrophy />
            </span>{" "}
            Award Winning Startup 2023
          </div>
          <h1 className="md:text-5xl leading-[1.2] tracking-tight">
            From Chaos to Control
            <br />
            <span className="text-primary-600 dark:text-secondary">
              Master Your Tasks
            </span>
            <br />
            <span className="inline-flex items-center gap-2">
              <span>with</span>
              <span className="bg-primary-600 dark:bg-secondary p-2 rounded-full">
                <FaArrowRight className="text-white" />
              </span>
              <span>GTX</span>
            </span>
          </h1>
          <h5 className="max-w-md text-gray-500 dark:text-gray-400">
            Sign up for a free trial today and experience the difference. Our
            intuitive interface, powerful features, and dedicated.
          </h5>

          {/* <button className="bg-purple-700 hover:bg-purple-800 px-6 py-3 rounded-full w-max font-medium text-white">
            Start 14 Days Free Trial
          </button> */}
          <div className="w-1/5">
          <Button variant={"default"}>Start 14 Days Free Trial</Button>
          </div>
        </div>

        {/* Right Side - Images */}
        {/* <div className="flex md:flex-row flex-col gap-4 md:gap-6">
          <div className="rounded-2xl w-full md:w-1/2 overflow-hidden">
            <Image src="/hero-image/collections.png" alt="Collections Preview" width={600} height={400} className="rounded-2xl w-full h-auto" />
          </div>
          <div className="rounded-2xl w-full md:w-1/2 overflow-hidden">
            <Image src="/hero-image/dashboard-desktop.png" alt="Dashboard Preview" width={600} height={400} className="rounded-2xl w-full h-auto" />
          </div>
 
        </div> */}
      </div>
    </div>
  );
}
