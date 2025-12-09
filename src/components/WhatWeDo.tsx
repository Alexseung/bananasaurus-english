export default function WhatWeDo() {
  const programs = [
    {
      title: "Art",
      desc: "Kids learn English naturally through games and interactive fun.",
      img: "/images/art.jpg",
    },
    {
      title: "Cooking",
      desc: "Expressing ideas through art builds confidence and vocabulary.",
      img: "/images/cooking.jpg",
    },
    {
      title: "Science & Math",
      desc: "Hands-on experiments spark curiosity and real-world learning.",
      img: "/images/math.jpg",
    },
    {
      title: "Phonics & Writing",
      desc: "Sing and move to learn pronunciation and rhythm naturally.",
      img: "/images/phonics.jpg",
    },
    {
      title: "Reading & Speaking",
      desc: "Fun stories that expand vocabulary and imagination.",
      img: "/images/reading.jpg",
    },
  ];

  return (
    <section className="py-10 px-4 sm:px-8 bg-gray-50 border-y border-gray-200 text-center text-gray-900">
      <h2 className="text-2xl font-semibold mb-8">What We Do</h2>

      {/* flex-wrap으로 감싸고 justify-center로 가운데 정렬 */}
      <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
        {programs.map((p, i) => (
          <div
            key={i}
            className="p-4 w-full sm:w-1/2 lg:w-1/3 max-w-xs rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition flex flex-col items-center"
          >
            <img
              src={p.img}
              alt={p.title}
              className="h-40 w-full object-cover rounded-lg mb-3"
            />
            <h3 className="font-semibold mb-2 text-lg text-gray-900">
              {p.title}
            </h3>
            <p className="text-gray-700 text-sm">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
