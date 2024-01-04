import { ThemeToggle } from "@/contexts/theme/theme-togle";
import { DropDown } from "./drop-down";

export function NavBar() {
  return (
    <nav className="fixed w-full px-4 flex items-center justify-between h-16 lg:hidden border-b">
      <h1>logo</h1>
      <div className="flex gap-2">
        <ThemeToggle />
        <DropDown />
      </div>
    </nav>
  );
}
