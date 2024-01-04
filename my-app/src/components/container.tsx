import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}
export function Container({ children }: ContainerProps) {
  return (
    <main className="w-full max-w-4xl min-h-screen m-auto">{children}</main>
  );
}
