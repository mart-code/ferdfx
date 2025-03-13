import { useState } from "react";
import { Plus, Minus } from "lucide-react"; // Using Lucide Icons

const faqs = [
  {
    question: "Are you a startup?",
    answer: "Yes! We focus on helping new businesses grow efficiently.",
  },
  {
    question: "Do you offer free consultations?",
    answer: "Absolutely! We offer free 30-minute consultations.",
  },
  {
    question: "Can I customize my plan?",
    answer: "Yes, we provide flexible options tailored to your needs.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col w-full mb-35 items-start sm:items-center gap-8 px-10">
      <p className="uppercase text-[12px] tracking-widest xl:tracking-[10px] p-2 bg-[#04cc04] text-white ">
        Frequently Asked Questions
      </p>
      <h2 className="text-5xl font-semibold sm:text-center overflow-hidden">
        We are here to answer all your questions
      </h2>
      <div className="lg:w-1/2 w-full mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg p-4 w-full cursor-pointer transition-all"
            onClick={(e) => {
              e.preventDefault();
              toggleFAQ(index);
            }}
          >
            <div className="flex justify-between items-center">
              <p className="font-semibold">{faq.question}</p>
              {openIndex === index ? (
                <Minus className="w-5 h-5 text-gray-700" />
              ) : (
                <Plus className="w-5 h-5 text-gray-700" />
              )}
            </div>
            {openIndex === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
