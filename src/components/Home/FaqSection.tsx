"use client"
import React, { useState } from 'react'

interface FAQItem {
    question: string;
    answer: string;
  }
  
  const faqData: FAQItem[] = [
    {
      question: "How does Cirqura’s recycling process work?",
      answer: "Cirqura’s recycling process involves several steps...",
    },
    {
      question: "How can I schedule a pickup through the app?",
      answer:
        "To schedule a pickup, go to the 'Schedule Pickup' tab in the app...",
    },
    {
      question: "What types of glass can be recycled?",
      answer:
        "The types of glass that can be recycled include bottles, jars, etc.",
    },
    {
      question: "What are the benefits of glass recycling?",
      answer:
        "Recycling glass helps reduce waste and conserves natural resources...",
    },
  ];

const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
      setOpenIndex(openIndex === index ? null : index);
    };


  return (
    <div className="w-[90%] m-auto sm:my-28">
    <div>
      <h1
        className="sm:text-9xl text-7xl font-extrabold text-transparent lg:tracking-wide leading-none"
        style={{ WebkitTextStroke: "1px #d1d5db", marginBottom: "-30px" }}
      >
        SUPPORT
      </h1>
      <h3 className=" uppercase text-4xl font-sans font-bold text-black tracking-[0.2rem] ">
        FAQs
      </h3>
    </div>

    <div className="mt-5 flex sm:flex-row flex-col justify-between">
      <div className="w-full">
        <p className="sm:w-3/5">
          Everything you need to know about the product and billing. Can’t
          find the answer you’re looking for? Please chat to our friendly
          team.
        </p>
      </div>

      <div className="w-full">
        {faqData.map((item, index) => (
          <div key={index} className="py-3">
            <div className="px-5 py-6 bg-[#F9FAFB] rounded-md">
              <button
                className="flex justify-between  w-full text-left text-lg font-semibold text-gray-800"
                onClick={() => toggleFAQ(index)}
              >
                {item.question}
                <span className="text-2xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className=" text-gray-600 text-base">
                  {item.answer}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default FaqSection
