import Image from "next/image";
import containerImg from "@/assets/task-management/Container.png";
import priorityImg from "@/assets/task-management/priority.png";
import successImg from "@/assets/task-management/success.png";

export default function TaskManagementSecond() {
  return (
    <section className="bg-foreground dark:bg-gray-700 mx-auto p-16 rounded-3xl w-full max-w-custom text-white dark:text-primary">
      <div className="flex md:flex-row flex-col items-center md:items-start gap-12">
        {/* Left Side: Image */}
        <div className="flex justify-center md:justify-end order-2 w-full md:w-1/2">
          <Image
            src={containerImg}
            alt="Task UI Preview"
            className="rounded-xl w-full max-w-[400px] h-auto object-contain"
            priority
          />
        </div>

        {/* Right Side: Text and Features */}
        <div className="space-y-6 w-full md:w-1/2">
          <h2 className="font-medium text-3xl md:text-4xl md:text-left text-center leading-snug">
            Task Mastery Made Simple: <br />
            Elevate Your Workflow
          </h2>

          <p className="text-gray-400 text-base md:text-lg md:text-left text-center">
            Encapsulates the essence of our commitment to simplifying your daily
            tasks and enhancing your overall work experience.
          </p>

          <div className="flex gap-5">
            {/* Feature 1 */}
            <div className="flex items-start gap-4">
              <Image
                src={priorityImg}
                alt="Priority Icon"
                height={32}
                width={32}
                className="min-w-[32px]"
              />
              <div className="space-y-2">
                <h4 className="mb-1 text-lg">Collaborative</h4>
                <p className="text-gray-400 text-sm">
                  Gratask's user-friendly interface makes task.
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
              <div className="space-y-2">
                <h4 className="mb-1 text-lg">Real-time Updates</h4>
                <p className="text-gray-400 text-sm">
                  Gratask's user-friendly interface makes task.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
