export const dynamic = "force-dynamic"; 
import Image from "next/image";
import HeroSection from "@/components/hero";

import ContactForm from "@/components/contact-form";
import Skills from "@/components/skill";
import Education from "@/components/education";


export default function Home() {
  return (
    <section className='py-24'>
      <div className="container max-w-9xl">
        <HeroSection />
        <Skills />
        <Education />

        <ContactForm />
        
      </div>
    </section>
  );
}
