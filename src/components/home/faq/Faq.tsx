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
    <section className="flex justify-center items-center px-6 py-16 min-h-screen">
      <div className="gap-12 grid md:grid-cols-2 w-full max-w-custom">
        {/* Left Content */}
        <div className="space-y-6">
          <button className="flex items-center space-x-2 dark:bg-gray-700 px-4 py-1.5 border border-gray-600 rounded-full text-foreground dark:text-primary text-sm">
            <span>🤔 Frequently Asked Questions</span>
          </button>

          <h2 className="text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight">
            Common{" "}
            <span className="text-primary-600 dark:text-secondary">
              Queries &<br />
              Answers
            </span>{" "}
            About GTX
          </h2>

          <h5 className="mx-auto text-gray-500 dark:text-gray-400">
            Sign up for a free trial today and experience the difference. Our
            intuitive interface, powerful features, and dedicated support.
          </h5>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqItems.map((item, idx) => (
            <AccordionItem
              key={idx}
              value={`item-${idx}`}
              className="dark:bg-gray-700 border border-gray-600 rounded-lg"
            >
              <AccordionTrigger className="hover:bg-white/5 px-6 py-5 font-medium text-foreground dark:text-foreground text-base transition-colors">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-5 text-foreground dark:text-foreground text-sm leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
