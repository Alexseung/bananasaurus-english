export default function AboutTutor() {
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center py-20 px-8 bg-white border-b border-gray-100">
      {/* 선생님 사진 자리 */}
      <div className="aspect-square bg-gray-100 rounded-2xl shadow-inner flex items-center justify-center text-gray-400">
        Teacher Photo
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-3">Meet Your Teacher</h2>
        <p className="text-base leading-relaxed text-gray-700">
          Hello! I’m an American English teacher from the state of Kentucky, and
          the oldest of five siblings. I studied at Morehead State University in
          the U.S., where I earned a degree in International Studies with a
          focus on Asia and a minor in Psychology. During college, I was an
          exchange student at Kyungpook National University in Daegu and Normal
          University in China, where I first discovered my passion for teaching
          English. Since moving to Korea in 2018, I have taught English to
          students of all ages — from preschoolers to adults — through both
          hagwon programs and private tutoring. I have over six years of
          experience as a private tutor, and I specialize in creating engaging,
          personalized lessons that help students gain confidence in speaking
          and writing English. I’m passionate about helping students learn in a
          fun, encouraging, and supportive environment, where they can truly
          enjoy the process of learning English.
        </p>
        <ul className="mt-4 text-gray-700 list-disc list-inside space-y-1">
          <li>10+ years teaching experience</li>
          <li>Hands-on learning through play, art, and science</li>
          <li>Personalized lessons for each child</li>
        </ul>
      </div>
    </section>
  );
}
