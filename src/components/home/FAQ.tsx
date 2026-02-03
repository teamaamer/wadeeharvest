import { Accordion } from "@/components/ui/Accordion";

export function FAQ() {
  const faqs = [
    {
      question: "Is the olive oil spicy or peppery?",
      answer:
        "Yes! Our extra virgin olive oil has a pleasant peppery finish, which is a sign of high-quality, fresh olive oil rich in antioxidants. This peppery note is characteristic of premium cold-pressed oils.",
    },
    {
      question: "How should I store the olive oil?",
      answer:
        "Store in a cool, dark place away from direct sunlight and heat. Keep the bottle tightly sealed. Properly stored, our olive oil maintains its quality for up to 18 months from bottling.",
    },
    {
      question: "Are the dates pitted?",
      answer:
        "Our Medjool dates contain pits. We recommend checking each date before consuming. The pits are easy to remove and keeping them in helps preserve freshness and flavor.",
    },
    {
      question: "Where exactly are these products sourced from?",
      answer:
        "All our products come directly from our family farm in Wadi Fuqin, Palestine. This fertile village has been cultivating olives and dates for thousands of years, and we're proud to share these authentic flavours with Canada.",
    },
    {
      question: "Do you ship across Canada?",
      answer:
        "We are preparing to launch Canada-wide shipping very soon! Currently, you can find us at the Peterborough Regional Farmers Market (Saturdays and Wednesdays) and select local partners like Kit Coffee. Sign up for our email list to be notified when online ordering launches.",
    },
  ];

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-2">
          {faqs.map((faq) => (
            <Accordion key={faq.question} title={faq.question}>
              {faq.answer}
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}
