import clsx from "clsx";
import { ReactNode } from "react";

interface TextProps {
  isDifferent?: boolean;
  clasName?: string;
  children: ReactNode;
}
export function Text({ children, isDifferent, clasName }: TextProps) {
  const baseStyle = "text-secundary text-base/5 sm:text-base/7 font-normal";
  return (
    <p
      className={clsx(
        baseStyle,
        clasName,
        isDifferent && "text-secondary-foreground dark:text-muted-foreground "
      )}
    >
      {children}
    </p>
  );
}
