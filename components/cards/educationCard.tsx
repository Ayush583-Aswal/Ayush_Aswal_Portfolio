import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { useTheme } from "next-themes";

interface EducationType {
  id: number;
  img: string;
  school: string;
  date: string;
  grade: string;
  desc: string;
  degree: string;
}

const EducationCard = ({ education }: { education: EducationType }) => {
  const { resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === "dark";

  const textPrimary = isDarkMode ? "text-white" : "text-black";
  const textSecondary = isDarkMode ? "text-gray-300" : "text-gray-600";

  return (
    <VerticalTimelineElement
      icon={
        <div
          className="flex items-center justify-center w-full h-full rounded-full"
          style={{
            backgroundColor: isDarkMode ? "#000" : "#fff",
            padding: "5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
          }}
        >
          <img
            width="80%"
            height="80%"
            alt={education.school}
            className="rounded-full object-contain"
            src={education.img}
          />
        </div>
      }
      contentStyle={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        backgroundColor: isDarkMode ? "#111827" : "#fff",
        color: isDarkMode ? "#fff" : "#333",
        boxShadow: isDarkMode
          ? "rgba(23, 92, 230, 0.15) 0px 4px 24px"
          : "rgba(0, 0, 0, 0.1) 0px 4px 24px",
        border: isDarkMode
          ? "1px solid rgba(255, 255, 255, 0.125)"
          : "1px solid rgba(0, 0, 0, 0.125)",
        borderRadius: "8px",
        fontFamily: "Inter, sans-serif",
      }}
      contentArrowStyle={{
        borderRight: isDarkMode
          ? "7px solid rgba(255, 255, 255, 0.3)"
          : "7px solid rgba(0, 0, 0, 0.2)",
      }}
      date={education.date}
    >
      <div className="flex gap-3 items-center">
        <img src={education.img} className="h-12 w-12 rounded-lg mt-1" alt={education.school} />
        <div className="flex flex-col">
          <div className={`text-xl font-semibold leading-tight ${textPrimary}`}>
            {education.school}
          </div>
          <div className={`text-sm font-medium ${textSecondary}`}>
            {education.degree}
          </div>
          <div className={`text-xs ${textSecondary}`}>{education.date}</div>
        </div>
      </div>
      <div className={`font-medium ${textSecondary}`}>
        <b className={`text-gray-800 dark:text-gray-200`}>Grade: </b> {education.grade}
      </div>
      <div className={`text-base font-light leading-relaxed ${textSecondary}`}>
        {education.desc}
      </div>
    </VerticalTimelineElement>
  );
};

export default EducationCard;
