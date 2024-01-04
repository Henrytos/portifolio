import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}
export function Container({ children }: ContainerProps) {
  return (
    <main className="w-full max-w-4xl h-[calc(100vh_-_20rem)] lg:min-h-screen    m-auto mt-16 lg:mt-0 px-4">
      {children}
    </main>
  );
}
