import { ThemeToggle } from "@/contexts/theme/theme-togle";
import { DropDown } from "./drop-down";
import { MyPersonSmall } from "../my-person-small";

export function NavBar() {
  return (
    <nav className="fixed w-full px-4 sm:px-8 flex items-center justify-between h-16 lg:hidden border-b z-10 bg-background ">
      <MyPersonSmall />
      <div className="flex gap-2">
        <ThemeToggle />
        <DropDown />
      </div>
    </nav>
  );
}
