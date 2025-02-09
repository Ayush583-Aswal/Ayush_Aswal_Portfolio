"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { skills } from "@/lib/constants";

const Skills = () => {
  const { resolvedTheme } = useTheme();
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    if (resolvedTheme !== undefined) {
      setTheme(resolvedTheme);
    }
  }, [resolvedTheme]);

  if (!theme) return null; 

  const textPrimary = theme === "dark" ? "text-white" : "text-black";
  const textSecondary = theme === "dark" ? "text-gray-300" : "text-gray-600";
  const cardBg = theme === "dark" ? "bg-gray-900" : "bg-white";
  const borderColor = theme === "dark" ? "border-gray-600" : "border-gray-300";
  const skillTitleColor = theme === "dark" ? "text-white" : "text-gray-800";
  const skillBorderColor = theme === "dark" ? "border-white" : "border-gray-800";

  return (
    <div id="skills" className="flex flex-col items-center justify-center">
      <div className="relative flex flex-col items-center justify-between max-w-5xl gap-4">
        <h1 className={`text-4xl font-semibold text-center mt-5 ${textPrimary}`}>
          Skills
        </h1>
        <p className={`text-center text-lg max-w-lg ${textSecondary}`}>
          Here are some of my skills on which I have been working for the past 4 years.
        </p>
        <div className="flex flex-wrap justify-center gap-8 mt-8 w-full">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className={`w-full max-w-md p-6 rounded-xl shadow-lg ${cardBg} border-[0.2px] ${borderColor}`}
            >
              <h2 className={`text-2xl font-semibold text-center mb-4 ${skillTitleColor}`}>
                {skill.title}
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                {skill.skills.map((item) => (
                  <div
                    key={item.name}
                    className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border ${skillBorderColor}`}
                  >
                    <img src={item.image} alt={item.name} className="w-6 h-6" />
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
