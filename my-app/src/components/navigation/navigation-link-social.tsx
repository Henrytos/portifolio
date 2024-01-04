import { ArrowUpRight } from "lucide-react";
import { ElementType } from "react";
interface AsideLinkSocialProps {
  href: string;
  title: string;
  icon: ElementType;
}
export function NavigationLinkSocial({
  title,
  href,
  icon: Icon,
}: AsideLinkSocialProps) {
  return (
    <a
      target="_blank"
      href={href}
      className="group flex gap-2 items-center py-2 px-4 bg-background rounded-lg hover:bg-secondary transition-colors"
    >
      <Icon className=" w-4 h-4 group-hover:text-primary" />
      <span className="font-semibold text-sm -translate-y-px ">{title}</span>

      <ArrowUpRight className=" ml-auto w-4 h-4 group-hover:text-primary" />
    </a>
  );
}
