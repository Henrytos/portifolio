import { ReactNode } from "react";

export function ContainerStack({ children }: { children: ReactNode }) {
  return (
    <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
      {children}
    </div>
  );
}
