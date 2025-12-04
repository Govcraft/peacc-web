"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const CardStack = ({
  items,
  offset = 10,
  scaleFactor = 0.06,
  className,
}) => {
  const [cards, setCards] = useState(items);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prevCards) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop());
        return newArray;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={cn("relative h-60 w-60 md:h-72 md:w-96", className)}>
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute h-60 w-60 md:h-72 md:w-96 rounded-3xl bg-surface p-6 shadow-xl border border-border flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -offset,
              scale: 1 - index * scaleFactor,
              zIndex: cards.length - index,
            }}
          >
            <div className="flex-1">
              <p className="text-text-secondary text-sm md:text-base font-medium leading-relaxed">
                {card.content}
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-border">
              <p className="font-semibold text-text-primary">{card.name}</p>
              <p className="text-sm text-primary">{card.designation}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export const Highlight = ({ children, className }) => {
  return (
    <span
      className={cn(
        "font-bold bg-accent-light/20 text-accent px-1 py-0.5 rounded",
        className
      )}
    >
      {children}
    </span>
  );
};
