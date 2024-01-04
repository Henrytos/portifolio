import { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
}
export function Title({ children }: TitleProps) {
  return <h1 className="text-3xl/9 font-bold text-primary">{children}</h1>;
}
