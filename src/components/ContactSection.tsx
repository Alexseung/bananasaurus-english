import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!name.trim() || !contact.trim()) {
      setError("모든 항목을 입력해주세요.");
      return;
    }

    // 이메일 & 전화번호 정규식
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^01[016789]-?\d{3,4}-?\d{4}$/;

    const isValidContact = emailRegex.test(contact) || phoneRegex.test(contact);

    if (!isValidContact) {
      setError("올바른 이메일 또는 전화번호를 입력해주세요.");
      return;
    }

    try {
      await addDoc(collection(db, "inquiry_list"), {
        name,
        email_or_phone: contact,
        created_at: new Date(),
      });

      setSuccess(true);
      setName("");
      setContact("");
    } catch (err) {
      console.error(err);
      setError("제출 중 오류가 발생했습니다.");
    }
  };

  return (
    <section className="py-20 px-8 bg-pink-100 text-gray-800 text-center border-t border-gray-200">
      <h2 className="text-2xl font-semibold mb-4">무료 체험 수업, 상담 신청</h2>
      <p className="max-w-lg mx-auto mb-6">
        아이가 즐겁게 영어를 배우는 수업을 직접 경험해보세요! 아래 정보를
        남겨주시면 연락드리겠습니다.
      </p>

      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto flex flex-col gap-4"
      >
        <input
          type="text"
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-3 rounded-lg border border-gray-300"
        />

        <input
          type="text"
          placeholder="연락처 (이메일 또는 전화번호)"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          className="p-3 rounded-lg border border-gray-300"
        />

        <button
          type="submit"
          className="py-3 rounded-lg bg-pink-400 hover:bg-pink-500 text-black transition"
        >
          신청하기
        </button>

        {error && <p className="text-sm text-red-600">{error}</p>}
        {success && (
          <p className="text-sm text-green-600">
            문의가 성공적으로 전송되었습니다!
          </p>
        )}
      </form>
    </section>
  );
}
