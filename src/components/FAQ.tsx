"use client";

import { useState } from "react";
import FadeIn from "./animations/FadeIn";
import StaggerReveal from "./animations/StaggerReveal";

const faqs = [
  {
    question: "What ingredients do you use to make your cakes?",
    answer: "We use carefully selected ingredients, including real butter, quality maida, chocolate, eggs, cocoa powder, and other essential baking ingredients to create delicious, rich, and flavourful homemade treats."
  },
  {
    question: "Do you use oil or margarine in your cakes?",
    answer: "No! We use butter instead of oil or margarine in our cakes. We believe butter helps create a rich flavour and a delicious texture in every bite."
  },
  {
    question: "How can I place an order?",
    answer: "Ordering is simple! Browse our collection, choose your favourite cakes or desserts, and click the WhatsApp order button. You can contact us directly to discuss your order and confirm the details."
  },
  {
    question: "Do you accept customised cake orders?",
    answer: "Yes! We love making cakes for your special occasions. Contact us on WhatsApp to discuss your preferred design, flavour, size, and other customisation requirements."
  },
  {
    question: "How can I know the price and availability of a cake?",
    answer: "Prices and availability may vary depending on the product and customisation. Please message us on WhatsApp, and we will help you with the latest details before you place your order."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-28 bg-[#FAF8F5]">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <FadeIn direction="up">
          <div className="text-center mb-12">
            <span className="text-[#C18861] text-sm font-bold tracking-[0.2em] uppercase mb-3 block">
              Got Questions?
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#3A261D] mb-6">
              Frequently Asked Questions
            </h2>
          </div>
        </FadeIn>

        <StaggerReveal staggerAmount={0.1} direction="up" className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`bg-white rounded-xl border transition-colors duration-300 overflow-hidden ${
                  isOpen ? 'border-[#C18861]' : 'border-[#E5D8CF] hover:border-[#D4B59D]'
                }`}
              >
                <button
                  className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-[#C18861]/50 focus:border-transparent"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                >
                  <h3 className={`font-serif text-lg md:text-xl font-bold transition-colors pr-4 ${isOpen ? 'text-[#C18861]' : 'text-[#3A261D]'}`}>
                    {faq.question}
                  </h3>
                  <div className={`shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#C18861] text-white rotate-180' : 'bg-[#F3EBE6] text-[#3A261D]'}`}>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                <div 
                  className={`px-6 transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 py-0 opacity-0'
                  }`}
                >
                  <p className="text-[#3A261D]/70 text-[15px] md:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </StaggerReveal>
      </div>
    </section>
  );
}
