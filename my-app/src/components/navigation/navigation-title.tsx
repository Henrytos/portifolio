import { ReactNode } from "react";

interface NavigationTitleProps {
  children: ReactNode;
}
export function NavigationTitle({ children }: NavigationTitleProps) {
  return (
    <p className="text-zinc-500 text-sm font-semibold pl-4 pb-1">{children}</p>
  );
}
