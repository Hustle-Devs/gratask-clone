"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "What is Gratask and how does it help with task management?",
    answer:
      "Gratask is an advanced task management Software as a Service (SaaS) designed to streamline workflows, enhance collaboration, and boost productivity. It provides an intuitive platform for organizing tasks, managing projects, and facilitating team communication.",
  },
  {
    question: "What features does Gratask offer for task management?",
    answer:
      "Gratask offers task assignment, deadlines, project tracking, team messaging, and analytics features for efficient task management.",
  },
  {
    question: "What support options are available if I encounter any issues?",
    answer:
      "24/7 email and chat support are available, along with an extensive knowledge base and onboarding assistance.",
  },
  {
    question: "What happens to my data if I decide to cancel my subscription?",
    answer:
      "Your data will be securely stored for 30 days after cancellation, allowing you to export or recover your information if needed.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, Gratask offers a 14-day free trial with full access to all features, no credit card required.",
  },
];

export default function FAQ() {
  return (
    <section className="flex justify-center items-center lg:mb-[-240px] px-6 py-16">
      <div className="flex flex-col items-center gap-12 mx-auto w-full max-w-custom">
        {/* Left Content */}
        <div className="flex flex-col space-y-6 mx-auto w-full max-w-custom">
          <button className="flex items-center space-x-2 dark:bg-gray-700 mx-auto px-4 py-1.5 border border-gray-600 rounded-full w-[250px] h-[45px] text-foreground dark:text-primary text-sm">
            <span>🤔 Frequently Asked Questions</span>
          </button>

          <h2 className="mx-auto text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight">
            Common{" "}
            <span className="text-primary-600 dark:text-secondary">
              Queries &<br />
              Answers
            </span>{" "}
            About GTX
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="dark:bg-gray-700 border border-gray-600 rounded-lg lg:w-[808px]"
              >
                <AccordionTrigger className="hover:bg-white/5 px-6 py-5 font-medium text-foreground dark:text-foreground text-base transition-colors">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="mt-[10px] px-6 pb-5 text-foreground dark:text-foreground text-sm leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
