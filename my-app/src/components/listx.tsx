import clsx from "clsx";
import { ReactNode } from "react";

export function List({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className="flex items-center gap-3">
      <span className="w-1 h-1 translate-y-px rounded block bg-muted-foreground" />
      <div className={clsx("flex items-center gap-2", className)}>
        {children}
      </div>
    </span>
  );
}
