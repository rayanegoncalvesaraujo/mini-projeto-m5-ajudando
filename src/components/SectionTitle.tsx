import React from "react";

type SectionTitleProps = {
  title: string;
  icon?: string;
};

export const SectionTitle = ({ title, icon }: SectionTitleProps) => {
  return (
    <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
      {icon && <span className="mr-2">{icon}</span>}
      {title}
    </h2>
  );
};
