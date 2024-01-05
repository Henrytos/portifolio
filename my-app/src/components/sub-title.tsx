import clsx from "clsx";
import { ReactNode } from "react";

interface SubTitleProps {
  children: ReactNode;
  clasName: string;
}
export function SubTitle({ children, clasName }: SubTitleProps) {
  const baseStyleSubTitle =
    "text-2xl/8 font-bold text-secondary-foreground antialiased";
  return <h2 className={clsx(baseStyleSubTitle, clasName)}>{children}</h2>;
}
