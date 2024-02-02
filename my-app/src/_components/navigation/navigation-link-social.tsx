import { ArrowUpRight } from "lucide-react";
import { ComponentProps, ElementType, ReactNode } from "react";
interface AsideLinkSocialProps extends ComponentProps<"a"> {
  children: ReactNode;
  icon: ElementType;
}
export function NavigationLinkSocial({
  children,
  icon: Icon,
  ...props
}: AsideLinkSocialProps) {
  return (
    <a
      target="_blank"
      {...props}
      className="group flex gap-2 items-center py-2 px-4 bg-background rounded-lg hover:bg-secondary transition-colors"
    >
      <Icon className=" w-4 h-4 group-hover:text-primary" />
      <span className="font-medium text-sm -translate-y-px ">{children}</span>

      <ArrowUpRight className=" ml-auto w-4 h-4 group-hover:text-primary" />
    </a>
  );
}
