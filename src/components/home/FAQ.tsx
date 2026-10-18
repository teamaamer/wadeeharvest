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
        "All our products come directly from family farms in Palestine, where olives and dates have been cultivated for thousands of years. We're proud to share these authentic flavours with you.",
    },
    {
      question: "Where do you ship?",
      answer:
        "We ship anywhere in North America. Order online and we'll send it to your door. You can also find us in person at the Peterborough Regional Farmers Market (Saturdays and Wednesdays) and at select local partners like Kit Coffee.",
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
