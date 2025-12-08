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
      {[
        {
          label: "Home",
          action: () => window.scrollTo({ top: 0, behavior: "smooth" }),
        },
        { label: "About", action: () => handleScrollTo("about") },
        { label: "Programs", action: () => handleScrollTo("programs") },
        { label: "Reviews", action: () => handleScrollTo("testimonials") },
        { label: "Contact", action: () => handleScrollTo("contact") },
      ].map((item) => (
        <button
          key={item.label}
          onClick={item.action}
          className="
    px-3 py-2 rounded-md 
    text-gray-700 
    border border-transparent
    transition 
    hover:bg-gray-100
    hover:text-gray-900
    hover:border-gray-300 
    focus:outline-none
    focus:ring-2 focus:ring-gray-400
  "
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}
