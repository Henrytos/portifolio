import Link from "next/link";
import { ElementType } from "react";
interface AsideLinkProps {
  href: string;
  title: string;
  icon: ElementType;
}
export function AsideLink({ title, href, icon: Icon }: AsideLinkProps) {
  return (
    <Link
      href={href}
      className="group flex gap-2 items-center py-2 px-4 bg-background rounded-md hover:bg-secondary transition-colors"
    >
      <Icon className="w-4  group-hover:text-primary" />
      <span className="font-semibold text-sm -translate-y-px">{title}</span>
    </Link>
  );
}
