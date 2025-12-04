"use client";
import { cn } from "../../lib/utils";

export const BentoGrid = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-md p-6 bg-surface border border-border justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200 pt-2">
        {icon}
        <div className="font-sans font-bold text-text-primary mb-2 mt-2 text-lg">
          {title}
        </div>
        <div className="font-sans font-normal text-text-secondary text-sm leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  );
};
