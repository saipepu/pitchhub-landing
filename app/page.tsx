import Image from "next/image";
import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import PainPoint from "./_components/PainPoint";
import Feature from "./_components/Feature";
import FAQs from "./_components/FAQs";
import Footer from "./_components/Footer";
import Testimonial from "./_components/Testimonial";
import Contact from "./_components/Contact";

export default function Home() {
  return (
    <div className="w-full flex flex-col justify-start items-center gap-[56px]">
      <Navbar />
      <Hero />
      <PainPoint />
      <Feature />
      <FAQs />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}
