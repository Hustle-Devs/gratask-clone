'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqItems = [
  {
    question: 'What is Gratask and how does it help with task management?',
    answer: 'Gratask is an advanced task management Software as a Service (SaaS) designed to streamline workflows, enhance collaboration, and boost productivity. It provides an intuitive platform for organizing tasks, managing projects, and facilitating team communication.',
  },
  {
    question: 'What features does Gratask offer for task management?',
    answer: 'Gratask offers task assignment, deadlines, project tracking, team messaging, and analytics features for efficient task management.',
  },
  {
    question: 'What support options are available if I encounter any issues?',
    answer: '24/7 email and chat support are available, along with an extensive knowledge base and onboarding assistance.',
  },
  {
    question: 'What happens to my data if I decide to cancel my subscription?',
    answer: 'Your data will be securely stored for 30 days after cancellation, allowing you to export or recover your information if needed.',
  },
  {
    question: 'Is there a free trial available?',
    answer: 'Yes, Gratask offers a 14-day free trial with full access to all features, no credit card required.',
  },
];

export default function FAQ() {
  return (
    <section className="flex justify-center items-center bg-[#0e0c12] px-6 py-16 min-h-screen">
      <div className="gap-12 grid md:grid-cols-2 w-full max-w-7xl">
        
        {/* Left Content */}
        <div className="space-y-6">
          <button className="flex items-center space-x-2 bg-white/5 px-4 py-1.5 border border-white/10 rounded-full text-white/80 text-sm">
            <span>🧠 Frequently Asked Questions</span>
          </button>

          <h2 className="font-bold text-white text-4xl md:text-5xl">
            Common <span className="text-[#d678f8]">Queries &<br />Answers</span> About GTX
          </h2>

          <p className="max-w-md text-white/60 text-base">
            Sign up for a free trial today and experience the difference. Our intuitive interface, powerful features, and dedicated support.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqItems.map((item, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`} className="border border-white/10 rounded-lg">
              <AccordionTrigger className="hover:bg-white/5 px-6 py-5 font-medium text-white text-base transition-colors">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-5 text-white/70 text-sm leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

      </div>
    </section>
  );
}
