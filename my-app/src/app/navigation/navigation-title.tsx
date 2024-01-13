import { ReactNode } from "react";

interface NavigationTitleProps {
  children: ReactNode;
}
export function NavigationTitle({ children }: NavigationTitleProps) {
  return (
    <p className="text-zinc-500 text-sm font-semibold pl-4 pb-2 pt-4">
      {children}
    </p>
  );
}
