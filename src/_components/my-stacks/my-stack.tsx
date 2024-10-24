
import Image from "next/image";
import { ReactNode } from "react";
import { Text } from "../text";

interface MyStackProps {
  srcImg: string;
  children: ReactNode;
}

export function MyStack(stack: MyStackProps) {
  const { srcImg, children } = stack;

  return (
    <span
      className="group backdrop-blur-3xl flex items-center gap-3 h-16 
            bg-secondary dark:bg-secondary/50 hover:bg-primary/15 hover:dark:bg-secondary  p-3 rounded-[.5rem] transition-all"
    >
      <span className="shrink bg-primary/5  dark:bg-secondary/70 p-2 rounded border-primary-foreground dark:group-hover:bg-primary/15 group-hover:bg-primary/30  transition-colors">
        <Image
          width={32}
          height={32}
          alt="imagem de stack"
          className="h-8 w-8"
          src={srcImg}
        />
      </span>

      <Text className="text-xs sm:text-sm">{children}</Text>
    </span>
  );
}
