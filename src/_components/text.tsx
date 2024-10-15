import clsx from "clsx";
import { ReactNode } from "react";

interface TextProps {
  isDifferent?: boolean;
  className?: string;
  children: ReactNode;
}
export function Text({ children, isDifferent, className }: TextProps) {
  const baseStyle = "text-secundary text-base/5 sm:text-base/7 font-normal";
  return (
    <p
      className={clsx(
        baseStyle,
        isDifferent && "text-secondary-foreground dark:text-muted-foreground ",
        className
      )}
    >
      {children}
    </p>
  );
}
