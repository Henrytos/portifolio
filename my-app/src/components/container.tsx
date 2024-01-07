import clsx from "clsx";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}
export function Container({ children, className }: ContainerProps) {
  const baseStyleContainer =
    "w-full max-w-4xl min-h-[calc(100vh_-_4rem)] lg:h-screen m-auto mt-16 lg:mt-0  xl:px-14 pt-8 lg:pt-14  sm:px-8 px-3";
  return (
    <main className={clsx(baseStyleContainer, className)}>{children}</main>
  );
}
