import { ReactNode } from "react";

export function ContainerStack({ children }: { children: ReactNode }) {
  return <div className="grid grid-cols-4 gap-2 mb-6">{children}</div>;
}
