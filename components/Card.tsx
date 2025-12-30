import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  padding?: "default" | "custom";
}

export const Card = ({
  children,
  className,
  padding = "default",
}: CardProps) => {
  return (
    <div
      className={cn(
        "relative bg-white shadow-[0_0_10px_0_#d1d7da] box-border caret-transparent rounded-[25px]",
        padding === "default" ? "p-[3%]" : "",
        className
      )}
    >
      {children}
    </div>
  );
};
