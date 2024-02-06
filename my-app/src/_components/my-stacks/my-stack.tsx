import { StackType } from "@/_types/type-response";
import Image from "next/image";
import { ReactNode } from "react";
import { Text } from "../text";

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
      className="group backdrop-blur-3xl flex items-center gap-3 h-16 
            bg-secondary dark:bg-secondary/50 hover:bg-primary/15 hover:dark:bg-secondary  p-3 rounded-[.5rem] transition-all"
    >
      <div className="shrink bg-primary/5  dark:bg-secondary/70 p-2 rounded border-primary-foreground dark:group-hover:bg-primary/15 group-hover:bg-primary/30  transition-colors">
        <Image
          width={32}
          height={32}
          alt={children?.toString() ?? ""}
          className="h-8 w-8"
          src={srcImg ?? ""}
        />
      </div>

      <Text clasName="text-xs sm:text-sm">{children}</Text>
    </a>
  );
}
