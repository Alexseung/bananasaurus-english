export default function AboutTutor() {
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center py-20 px-8 bg-white border-b border-gray-100">
      {/* 선생님 사진 자리 */}
      <div className="aspect-square bg-gray-100 rounded-2xl shadow-inner flex items-center justify-center text-gray-400">
        Teacher Photo
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-2">Meet Your Teacher</h2>

        {/* 한 줄 핵심 요약 */}
        <p className="text-lg font-medium text-gray-900 mb-4">
          🇺🇸 American Native English Teacher · 6+ Years of Experience in Korea
        </p>

        {/* English Introduction */}
        <p className="text-base leading-relaxed text-gray-700">
          Hello! I’m an American English teacher from Kentucky. I studied
          International Studies with a focus on Asia and a minor in Psychology
          at Morehead State University. After participating in exchange programs
          in Daegu and China, I discovered my passion for teaching English.
          Since moving to Korea in 2018, I’ve taught students of all ages
          through hagwon programs and private tutoring, creating engaging and
          personalized lessons that build confidence in speaking and writing.
        </p>

        {/* Korean Introduction Card */}
        <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-4">
          <p className="text-base leading-relaxed text-gray-700">
            저는 미국 켄터키주 출신의 원어민 영어 선생님입니다. 2018년부터
            한국에 거주하며 유치원생부터 성인까지 다양한 연령의 학생들을 가르쳐
            왔고, 학원 수업과 개인 과외를 포함해 6년 이상의 과외 경험이
            있습니다. 아이 수준에 맞춘 재미있는 수업으로 영어 말하기와 쓰기에
            대한 자신감을 키워주며, 즐겁고 따뜻한 분위기에서 수업을 진행합니다.
          </p>
        </div>

        {/* Key Points */}
        <ul className="mt-6 text-gray-700 space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-lg">✔</span>
            <span>6+ years of teaching & private tutoring experience</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-lg">✔</span>
            <span>Fun, engaging lessons tailored to each child’s level</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-lg">✔</span>
            <span>Confidence-building focus on speaking and writing</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
