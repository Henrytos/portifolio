import { ReactNode } from "react";

interface CardContainerProps {
  children: ReactNode;
}
export function CardContainer({ children }: CardContainerProps) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-8">
      {children}
    </section>
  );
}
