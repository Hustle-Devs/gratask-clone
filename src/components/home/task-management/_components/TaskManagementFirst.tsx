


import Image from "next/image";
import taskImage from "@/assets/task-management/task.png";
import priorityImg from "@/assets/task-management/priority.png";
import successImg from "@/assets/task-management/success.png";

export default function TaskManagementFirst() {
  return (
    <section className="bg-foreground dark:bg-gray-700 mx-auto p-16 rounded-3xl w-full max-w-custom text-white dark:text-primary">
      <div className="flex md:flex-row flex-col items-center md:items-start gap-12">
        {/* Left Side: Image */}
        <div className="flex justify-center w-full md:w-1/2">
          <Image
            src={taskImage}
            alt="Task UI Preview"
            className="rounded-xl w-full max-w-[400px] h-auto object-contain"
            priority
          />
        </div>

        {/* Right Side: Text and Features */}
        <div className="space-y-6 w-full md:w-1/2">
          <h2 className="font-medium text-3xl md:text-4xl md:text-left text-center leading-snug">
            Discover the Power of <br />
            Gratask Task Management.
          </h2>

          <p className="text-gray-400 text-base md:text-lg md:text-left text-center">
            Gratask's user-friendly interface makes task management a breeze.
            Effortlessly organize your to-do lists, set priorities, and stay on
            top of your daily, weekly, and long-term goals.
          </p>

          <div className="space-y-6">
            {/* Feature 1 */}
            <div className="flex items-start gap-4">
              <Image
                src={priorityImg}
                alt="Priority Icon"
                height={32}
                width={32}
                className="min-w-[32px]"
              />
              <div>
                <h4 className="mb-1 text-lg">
                  Organize Task With Priority
                </h4>
                <p className="text-gray-400 text-sm">
                  Unlock the full potential of efficient task management with
                  Gratask. Sign up for our free trial today and experience.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-4">
              <Image
                src={successImg}
                alt="Success Icon"
                height={32}
                width={32}
                className="min-w-[32px]"
              />
              <div>
                <h4 className="mb-1 text-lg">
                  Manage Daily Meetings Successfully
                </h4>
                <p className="text-gray-400 text-sm">
                  Effortlessly organize your to-do lists. Gratask's user-friendly
                  interface makes task management a breeze.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

