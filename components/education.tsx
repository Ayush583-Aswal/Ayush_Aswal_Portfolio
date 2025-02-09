'use client'

import React, { useEffect, useState } from "react";
import { education } from "@/lib/constants";
import EducationCard from "@/components/cards/educationCard";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useTheme } from "next-themes";

const Education = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const textSecondary = resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent mismatched rendering during hydration

  return (
    <div className="mt-24 flex flex-col items-center" id="education">
      <div className="relative flex flex-col items-center w-full max-w-5xl gap-12">
        <h2 className="text-4xl text-center font-semibold text-primary dark:text-white">
          Education
        </h2>
        <p className={`text-center text-lg max-w-xl ${textSecondary}`}>
          My education has been a journey of self-discovery and growth. My educational details are as follows.
        </p>

        {/* Apply timeline color based on theme */}
        <VerticalTimeline lineColor={resolvedTheme === "dark" ? "#FFFFFF" : "#000000"}>
          {education.map((edu, index) => (
            <EducationCard key={`education-${index}`} education={edu} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Education;
