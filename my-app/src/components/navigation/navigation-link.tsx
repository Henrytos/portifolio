import clsx from "clsx";
import Link from "next/link";
import { ElementType } from "react";

interface AsideLinkProps {
  href: string;
  title: string;
  curretPath: string;
  icon: ElementType;
}

export function NavigationLink({
  title,
  href,
  icon: Icon,
  curretPath,
}: AsideLinkProps) {
  const linkActive = href == curretPath;
  return (
    <Link
      href={href}
      className={clsx(
        "group flex gap-2 items-center py-2 px-4 bg-background  hover:bg-secondary transition-colors ",
        linkActive && "bg-secondary"
      )}
    >
      <Icon
        className={clsx(
          "w-4",
          linkActive && "text-primary",
          "group-hover:text-primary"
        )}
      />
      <span className="font-semibold text-sm -translate-y-px">{title}</span>
    </Link>
  );
}
