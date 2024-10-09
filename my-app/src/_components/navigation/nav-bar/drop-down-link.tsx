import { DropdownMenuItem } from "@/_components/ui/dropdown-menu";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps, ElementType, ReactNode } from "react";

interface DropDownLinkProps extends ComponentProps<"a"> {
  children: ReactNode;
  icon: ElementType;
}
export function DropDownLink({
  children,
  icon: Icon,
  ...props
}: DropDownLinkProps) {
  const currentPath = usePathname();
  const { href } = { ...props };
  return (
    <DropdownMenuItem
      className={clsx(
        "group hover:bg-secondary cursor:pointer",
        currentPath == href && "bg-secondary"
      )}
      asChild
    >
      <Link
        href={href ?? "/"}
        prefetch={false}
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
