import { ReactNode } from "react";

interface TextProps {
  children: ReactNode;
}
export function Text({ children }: TextProps) {
  return (
    <p
      className="text-secondary-foreground
      dark:text-muted-foreground text-base/7 font-normal"
    >
      {children}
    </p>
  );
}
