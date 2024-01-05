import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}
export function Container({ children }: ContainerProps) {
  return (
    <main className="w-full max-w-4xl min-h-[calc(100vh_-_4rem)] lg:h-screen m-auto mt-16 lg:mt-0 px-8 xl:px-14 pt-8 lg:pt-14 ">
      {children}
    </main>
  );
}
