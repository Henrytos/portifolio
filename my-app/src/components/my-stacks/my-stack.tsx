import { StackType } from "@/types/type-response";
import Image from "next/image";
import { ReactNode } from "react";

interface MyStackProps extends StackType {
  children: ReactNode;
}

export function MyStack(stack: MyStackProps) {
  const { srcDocumentation, srcImg, children } = stack;
  return (
    <a
      href={srcDocumentation}
      target="_blank"
      key={srcImg}
      className="group backdrop-blur-3xl flex items-center gap-2 h-16 
            bg-secondary dark:bg-secondary/50 hover:bg-primary/15 hover:dark:bg-secondary  p-3 rounded-[.5rem] transition-all"
    >
      <div className="bg-primary/5  dark:bg-secondary/70 p-2 rounded border-primary-foreground dark:group-hover:bg-primary/15 group-hover:bg-primary/30  transition-colors">
        <Image
          width={200}
          height={300}
          alt={children?.toString() ?? ""}
          className="h-8 w-8"
          src={srcImg ?? ""}
        />
      </div>

      <span className="text-secondary-foreground font-light antialiased ">
        {children}
      </span>
    </a>
  );
}