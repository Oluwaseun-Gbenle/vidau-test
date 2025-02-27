"use client";

import { useState } from "react";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import Heading from "./shared/Heading";
import { faqs } from "@/data";

const FAQ = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleAccordion = (index: number) => {
    setOpenIndexes((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((i) => i !== index)
        : [...prevIndexes, index]
    );
  };

  return (
    <div className='px-6 sm:px-12 py-28 text-[#0A0D11]'>
      <Heading text={"Frequently Asked Questions"} className='text-[#0A0D11]' />
      <div className="space-y-4 mt-10 sm:px-16">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full grid grid-cols-[30fr_1fr] gap-4 justify-between items-center px-4 py-5 bg-white rounded-b-none rounded-[14px] text-left font-semibold"
              style={{ boxShadow: "0px 4px 85.31px 0px rgba(0, 0, 0, 0.08)" }}
            >
              {faq.question}
              {openIndexes.includes(index) ? (
                <FiMinusCircle size={28} />
              ) : (
                <FiPlusCircle size={28} />
              )}
            </button>
            {openIndexes.includes(index) && (
              <div className="p-4 bg-white text-[#4B4757]">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
