"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import currentPhoto from "@/lib/images/currentphoto.png";

const HeroSection = () => {
  return (
    <section id="about" className="lg:py-16 py-10 flex flex-col items-center text-center">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-6 lg:gap-12 ">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center lg:text-left max-w-xl "
        >
          <h1 className="mb-4 text-2xl sm:text-3xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Hello, I&apos;m{" "}
            </span>
            <br />
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
            Based in India. I am passionate about learning new technologies and building 
            web applications. I also have little experience in Machine Learning and Data Science. 
          </p>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <Link
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 to-blue-700 hover:bg-blue-600 text-white text-center"
            >
              Hire Me
            </Link>

            <Link
              href="https://drive.google.com/file/d/1guJN6y6WKFeLlmMgGfcL2rozK-laGs9D/view?usp=drive_link"
              className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 to-blue-700 hover:bg-blue-800 text-white text-center"
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
        >
          <div className="rounded-full bg-[#181818] w-[180px] h-[180px] sm:w-[250px] sm:h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src={currentPhoto}
              alt="hero image"
              className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={380}
              height={380}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
