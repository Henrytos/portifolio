import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { ComponentProps } from "react";

interface CardLinkProps extends ComponentProps<"a"> {}

export function CardLink({ children, href }: CardLinkProps) {
  return (
    <Link
      href={href ?? "/"}
      className="flex items-center text-xs text-primary hover:text-primary/75 hover:underline transition"
    >
      <span>{children}</span>
      <ChevronRight size={15} className="translate-y-px" />
    </Link>
  );
}
