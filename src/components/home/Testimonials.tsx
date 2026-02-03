export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah M.",
      location: "Toronto, ON",
      text: "The olive oil is incredible! You can really taste the quality and authenticity. It's become a staple in our kitchen.",
      rating: 5,
    },
    {
      name: "Ahmed K.",
      location: "Ottawa, ON",
      text: "Finally, authentic Palestinian products in Canada! The dates remind me of home. Highly recommend.",
      rating: 5,
    },
    {
      name: "Jennifer L.",
      location: "Peterborough, ON",
      text: "Love supporting local businesses that bring unique, quality products. The gift set was perfect for my foodie friend!",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
          What Our Customers Say
        </h2>
        <p className="text-center text-muted mb-12">
          (Placeholder testimonials)
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-surface p-6 rounded-lg border border-border"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-muted mb-4 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
