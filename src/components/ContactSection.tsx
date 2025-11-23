import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

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

    const { error } = await supabase
      .from("inquiry_list")
      .insert([{ name, email_or_phone: contact }]);

    if (error) {
      console.error(error);
      setError("제출 중 오류가 발생했습니다.");
    } else {
      setSuccess(true);
      setName("");
      setContact("");
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
          className="py-3 rounded-lg bg-pink-500 hover:bg-pink-600 text-black transition"
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
