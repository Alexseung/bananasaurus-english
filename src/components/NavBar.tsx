import { useEffect, useState } from "react";

export default function NavBar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`hidden sm:flex bg-white border-b border-gray-200 justify-center gap-6 p-4 transition-all duration-300 ${
        isSticky
          ? "fixed top-0 left-0 w-full shadow-md z-50 backdrop-blur-sm bg-white/90"
          : "relative"
      }`}
    >
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="px-3 py-2 rounded"
      >
        Home
      </button>
      <button
        onClick={() => handleScrollTo("about")}
        className="px-3 py-2 rounded"
      >
        About
      </button>
      <button
        onClick={() => handleScrollTo("programs")}
        className="px-3 py-2 rounded"
      >
        Programs
      </button>
      <button
        onClick={() => handleScrollTo("testimonials")}
        className="px-3 py-2 rounded"
      >
        Reviews
      </button>
      <button
        onClick={() => handleScrollTo("contact")}
        className="px-3 py-2 rounded"
      >
        Contact
      </button>
    </nav>
  );
}
