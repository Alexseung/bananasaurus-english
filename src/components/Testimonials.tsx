"use client";

import { useState } from "react";

export default function Testimonials() {
  const reviews = [
    {
      quote:
        "선생님 수업은 제 아들에게 영어에 대한 자신감과 흥미를 제공했어요. 발음을 천천히 정확히 알려주셔서 영어 듣기와 발음이 많이 좋아졌고, 매 수업마다 자세한 피드백을 주셔서 만족스러웠습니다.",
      name: "6살 아들 엄마",
    },
    {
      quote:
        "영어를 처음 접하는 아이들이었는데 미술, 체육, 요리 등 다양한 액티비티로 아이들이 정말 즐겁게 참여했어요. 아이 눈높이에 맞춘 수업 덕분에 외국인에 대한 거부감도 전혀 없었습니다.",
      name: "6살 · 7살 아이 엄마",
    },
    {
      quote:
        "아이가 부끄러움이 많은 편인데, 항상 밝고 재미있게 수업해 주셔서 영어를 좋아하게 되었어요. 준비도 꼼꼼하시고 약속도 잘 지키셔서 엄마로서 신뢰가 갔습니다.",
      name: "7살 아들 엄마",
    },
  ];

  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  const next = () =>
    setIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));

  return (
    <section className="py-12 px-6 bg-white border-b border-gray-200 text-center">
      <h2 className="text-2xl font-semibold mb-6">What Parents Say</h2>

      <div className="relative max-w-2xl mx-auto">
        <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 shadow-sm min-h-[220px] flex flex-col justify-between">
          <p className="text-gray-800 leading-relaxed">
            “{reviews[index].quote}”
          </p>
          <span className="mt-4 font-medium text-gray-600">
            — {reviews[index].name}
          </span>
        </div>

        {/* Controls */}
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={prev}
            className="px-3 py-1 text-sm rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100"
          >
            ←
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {reviews.map((_, i) => (
              <span
                key={i}
                className={`h-2 w-2 rounded-full ${
                  i === index ? "bg-gray-800" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="px-3 py-1 text-sm rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
