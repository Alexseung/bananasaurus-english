export default function Testimonials() {
  const reviews = [
    {
      quote: "My child loves the lessons — it's like playtime in English!",
      name: "— Parent, Seoul",
    },
    {
      quote: "The teacher makes learning feel so natural and fun!",
      name: "— Parent, Busan",
    },
  ];

  return (
    <section className="py-10 px-8 bg-white border-b border-gray-200 text-center">
      <h2 className="text-2xl font-semibold mb-8">What Parents Say</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {reviews.map((item, i) => (
          <div
            key={i}
            className="p-6 rounded-xl bg-gray-50 border border-gray-200 text-left shadow-sm"
          >
            <p className="text-gray-800">"{item.quote}"</p>
            <span className="block mt-2 font-medium text-gray-600">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
