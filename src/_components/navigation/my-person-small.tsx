"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function MyPersonSmall() {
  const currentPath = usePathname();
  return currentPath != "/" ? (
    <>
      <div className="hidden lg:block pl-4 pb-4 mb-4 border-b">
        <div className="flex gap-2">
          <Image
            alt="foto de henry"
            src="/imgs/icon.jpeg"
            width={36}
            height={36}
            className="rounded object-cover"
          />
          <div>
            <p className="text-sm text-foreground font-medium">Henry Franz</p>
            <p className="text-xs text-muted-foreground  font-light">
              Full-stack Developer
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-2 lg:hidden">
        <Image
          alt="foto de henry"
          src="/imgs/icon.jpeg"
          width={36}
          height={36}
          className="rounded object-cover"
        />
        <div>
          <p className="text-sm text-foreground font-medium">Henry Franz</p>
          <p className="text-xs text-muted-foreground  font-light">
            Full-stack Developer
          </p>
        </div>
      </div>
    </>
  ) : (
    <div />
  );
}
