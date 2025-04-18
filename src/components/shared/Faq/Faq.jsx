import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const Faq = () => {
  // FAQ data - you can replace these with your own questions and answers
  const faqData = [
    {
      question: "What is MoveZy?",
      answer:
        "MoveZy is a tech-based logistics company operating nationwide and offering end-to-end services like parcel deliveries for SMEs, documents and parcel couriers for individuals and enterprise logistics solutions for corporate companies.",
    },
    {
      question: "What kind of services does MoveZy offer?",
      answer:
        "MoveZy offers a comprehensive range of logistics services including same-day delivery, next-day delivery, nationwide shipping, document courier, parcel delivery, warehousing solutions, and enterprise logistics management for businesses of all sizes.",
    },
    {
      question: "What is the coverage area of MoveZy Delivery?",
      answer:
        "MoveZy Delivery operates nationwide with coverage in all major cities and surrounding areas. Our extensive network ensures timely deliveries to both urban centers and remote locations throughout the country.",
    },
    {
      question: "Want to know about your delivery and logistics charges?",
      answer:
        "Our delivery charges depend on package weight, dimensions, delivery distance, and service type. We offer competitive rates with transparent pricing and no hidden fees. For a detailed quote, please use our pricing calculator or contact our customer service team.",
    },
    {
      question: "How do I track my shipment?",
      answer:
        "You can easily track your shipment by entering your tracking number on our website or mobile app. Real-time updates are provided at every stage of the delivery process, from pickup to final delivery.",
    },
  ];

  return (
    <div className="md:w-2xl lg:w-5xl mx-auto p-6 bg-white rounded-lg">
      <div className="text-center mb-10">
        <h2 className="text-3xl lg:text-4xl font-semibold text-black mb-2">
          Still have questions? We have answers!
        </h2>
        <p className="text-gray-600">
          Take a look at the most commonly asked questions. We are here to help.
        </p>
      </div>

      <Accordion type="single" collapsible className="space-y-4">
        {faqData.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-lg lg:text-xl flex justify-between items-center w-full p-4 text-left text-gray-800 font-medium hover:bg-gray-50 rounded-lg">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-base lg:text-lg p-4 pt-0 text-gray-600">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="mt-10 text-center">
        <p className="text-gray-600 mb-4">
          Didn't find what you're looking for?
        </p>
        <Button className="px-6 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors">
          Contact Support
        </Button>
      </div>
    </div>
  );
};

export default Faq;
