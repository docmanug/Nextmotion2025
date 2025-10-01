import React, { ReactNode } from "react";

export const processBoldText = (text: string): ReactNode[] => {
  if (!text) return [];

  return text.split("**").map((part, index) =>
    index % 2 === 1
      ? React.createElement(
          "span",
          {
            key: index,
            className: "font-bold text-[#081F4D]",
          },
          part
        )
      : part
  );
};
