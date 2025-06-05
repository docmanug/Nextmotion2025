import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GridProps {
  children: ReactNode;
  className?: string;
  cols?: 1 | 2 | 3 | 4 | 5 | 6;
  gap?: "sm" | "md" | "lg";
  items?: "start" | "center" | "end" | "stretch";
  justify?: "start" | "center" | "end" | "between" | "around";
}

const gapClasses = {
  sm: "gap-4 sm:gap-6",
  md: "gap-6 sm:gap-8 lg:gap-12",
  lg: "gap-8 sm:gap-12 lg:gap-16",
};

const colsClasses = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  5: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-5",
  6: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-6",
};

const itemsClasses = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
};

const justifyClasses = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
};

export function Grid({
  children,
  className,
  cols = 3,
  gap = "md",
  items = "stretch",
  justify = "start",
}: GridProps) {
  return (
    <div
      className={cn(
        "grid",
        colsClasses[cols],
        gapClasses[gap],
        itemsClasses[items],
        justifyClasses[justify],
        className
      )}
    >
      {children}
    </div>
  );
} 