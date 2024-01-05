import clsx from "clsx";
import { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
  className?: string;
}
export function Title({ children, className }: TitleProps) {
  const baseStyleTitle =
    "text-3xl/9 font-bold text-secondary-foreground  antialiased";
  return <h1 className={clsx(baseStyleTitle, className)}>{children}</h1>;
}
