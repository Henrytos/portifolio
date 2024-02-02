import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps, ElementType, ReactNode } from "react";

interface AsideLinkProps extends ComponentProps<"a"> {
  children: ReactNode;
  icon: ElementType;
}

export function NavigationLink({
  children,
  icon: Icon,
  ...props
}: AsideLinkProps) {
  const { href } = { ...props };
  const currentPath = usePathname();
  const linkActive = href == currentPath;

  return (
    <Link
      href={href ?? ""}
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
      <span className="font-medium text-sm -translate-y-px">{children}</span>
    </Link>
  );
}
