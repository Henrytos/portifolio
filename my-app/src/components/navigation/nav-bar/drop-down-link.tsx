import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ElementType, ReactNode } from "react";

interface DropDownLinkProps {
  children: ReactNode;
  href: string;
  icon: ElementType;
}
export function DropDownLink({
  href,
  children,
  icon: Icon,
}: DropDownLinkProps) {
  const currentPath = usePathname();
  return (
    <DropdownMenuItem
      className={clsx(
        "group hover:bg-secondary cursor:pointer",
        currentPath == href && "bg-secondary"
      )}
      asChild
    >
      <Link
        href={href}
        className={clsx(
          " w-full flex gap-2 items-center py-2 px-4 bg-background  group-hover:bg-secondary transition-colors ",
          currentPath == href && "bg-secondary"
        )}
      >
        <Icon
          className={clsx(
            "w-4",
            currentPath == href && "text-primary",
            "group-hover:text-primary"
          )}
        />
        <span className="font-semibold text-sm -translate-y-px">
          {children}
        </span>
      </Link>
    </DropdownMenuItem>
  );
}
