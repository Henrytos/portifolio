import { ReactNode } from "react";

interface CardConatinerProps {
  children: ReactNode;
}
export function CardConatiner({ children }: CardConatinerProps) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-10">
      {children}
    </section>
  );
}
