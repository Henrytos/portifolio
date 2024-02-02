import { SubTitle } from "../sub-title";
import { ContainerStack } from "./containe-stack";

export function StacksSkeleton() {
  return (
    <>
      <SubTitle className="mb-2">Front end</SubTitle>
      <ContainerStack>
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="group backdrop-blur-3xl flex items-center gap-3 h-16 
            bg-secondary dark:bg-secondary/50 hover:bg-primary/15 hover:dark:bg-secondary  p-3 rounded-[.5rem] transition-all"
          >
            <div className="shrink bg-primary/5  dark:bg-secondary/70 p-2 rounded border-primary-foreground dark:group-hover:bg-primary/15 group-hover:bg-primary/30  transition-colors">
              <div className="h-8 w-8" />
            </div>

            <div className="text-xs sm:text-sm" />
          </div>
        ))}
      </ContainerStack>
    </>
  );
}
