import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import AboutTutor from "./components/AboutTutor";
import WhatWeDo from "./components/WhatWeDo";
import Testimonials from "./components/Testimonials";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <NavBar />
      <section id="about">
        <AboutTutor />
      </section>
      <section id="programs">
        <WhatWeDo />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      <Footer />
    </main>
  );
}
