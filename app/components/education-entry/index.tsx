'use client'

import React from "react";

interface EducationEntryProps {
  title: string;
  university: string;
  time: string;
  gpa: number;
}

const EducationEntry: React.FC<EducationEntryProps> = ({
  title,
  university,
  time,
  gpa
}) => {
  return (
    <div className="w-full max-w-lg" key={title}>
      <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
        
        <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white">
          {title}
        </h3>

        <p className="text-lg text-neutral-700 dark:text-neutral-300 mt-1 font-medium">
          {university}
        </p>

        <div className="mt-4 text-sm text-neutral-600 dark:text-neutral-400 space-y-1">
          <p>{time}</p>
          <p className="font-semibold">GPA: {gpa}</p>
        </div>

      </div>
    </div>
  );
};

export default EducationEntry;
export type { EducationEntryProps };
