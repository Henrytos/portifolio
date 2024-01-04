import { ThemeToggle } from "@/contexts/theme/theme-togle";
import { DropDown } from "./drop-down";
import Image from "next/image";

export function NavBar() {
  return (
    <nav className="fixed w-full px-4 sm:px-8 flex items-center justify-between h-16 lg:hidden border-b">
      <div className="flex gap-2">
        <Image
          alt="foto de henry"
          src="/imgs/icon.jpeg"
          width={36}
          height={36}
          className="rounded"
        />
        <div>
          <p className="text-sm text-foreground font-medium">Henry Franz</p>
          <p className="text-xs text-muted-foreground  font-light">
            Front-end Developer
          </p>
        </div>
      </div>
      <div className="flex gap-2">
        <ThemeToggle />
        <DropDown />
      </div>
    </nav>
  );
}
