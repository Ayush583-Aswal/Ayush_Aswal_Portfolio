  "use client";
  import React from "react";
  import Image from "next/image";
  import { TypeAnimation } from "react-type-animation";
  import { motion } from "framer-motion";
  import Link from "next/link";
  import currentPhoto from "@/lib/images/currentphoto.jpg";

  const HeroSection = () => {
    return (
      <section id="about" className="lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
          >
            <h1 className="mb-4 text-lg sm:text-xl lg:text-7xl lg:leading-normal font-extrabold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                Hello, I&apos;m{" "}
              </span>
              <br></br>
              <TypeAnimation
                sequence={[
                  "Ayush",
                  1000,
                  "Web Developer",
                  1000,
                  "Full-Stack Dev",
                  1000,
                  "Software Engineer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <p className="text-[#777] text-base sm:text-lg mb-6 lg:text-xl">
              based in India. I am passionate about learning new technologies and building 
              web applications. I also have little experience on Machine Learning and Data Science. 
            </p>
            <div>
              <Link
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 to-blue-700 hover:bg-blue-600 text-white"
              >
                Hire Me
              </Link>

              <Link
                href="https://drive.google.com/file/d/1guJN6y6WKFeLlmMgGfcL2rozK-laGs9D/view?usp=drive_link"
                className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 to-blue-700 hover:bg-blue-800 text-white mt-3"
              >
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                  Download CV
                </span>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-4 place-self-center mt-4 lg:mt-0"
          >
            <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
              <Image
                src={currentPhoto} 
                alt="hero image"
                className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                width={300}
                height={300}
              />
            </div>
          </motion.div>
        </div>
      </section>
    );
  };

  export default HeroSection;
