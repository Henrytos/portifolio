import { ThemeToggle } from "@/contexts/theme/theme-togle";

export function FooterAsideBar() {
  return (
    <footer className="h-14 mt-auto flex items-center justify-between  border-t border-r px-6">
      <p className="font-light text-sm text-foreground">
        Desevolvindo em por <span className="font-semibold">henry</span> &copy;
        {"   "} {new Date().getFullYear()}
      </p>

      <ThemeToggle />
    </footer>
  );
}
