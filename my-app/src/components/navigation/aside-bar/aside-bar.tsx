"use client";
import {
  BookOpen,
  FolderDot,
  Github,
  Home,
  Instagram,
  Laptop,
  Linkedin,
} from "lucide-react";
import { NavigationLink } from "../navigation-link";
import { NavigationLinkSocial } from "../navigation-link-social";
import { ThemeToggle } from "@/contexts/theme/theme-togle";
import { NavigationTitle } from "../navigation-title";
import { usePathname } from "next/navigation";
import { MyPersonSmall } from "../my-person-small";

export function AsideBar() {
  const currentPath = usePathname();
  return (
    <div className="hidden lg:block w-full max-w-72 bg-background/45">
      <aside className="min-h-[calc(100vh_-_3.5rem)] text-foreground border-r pt-4 ">
        {currentPath != "/" && (
          <div className="pl-4 pb-4 mb-4 border-b">
            {" "}
            <MyPersonSmall />
          </div>
        )}

        <nav className="px-3">
          <NavigationLink
            currentPath={currentPath}
            href="/"
            icon={Home}
            title="Início"
          />

          <NavigationTitle>Eu</NavigationTitle>
          <NavigationLink
            currentPath={currentPath}
            href="/about-me"
            icon={BookOpen}
            title="Sobre mim"
          />
          <NavigationLink
            currentPath={currentPath}
            href="/projects"
            icon={FolderDot}
            title="Projetos"
          />
          <NavigationLink
            currentPath={currentPath}
            href="/stacks"
            icon={Laptop}
            title="Tecnologias"
          />

          <NavigationTitle>Redes Socias</NavigationTitle>
          <NavigationLinkSocial
            href="https://github.com/Henrytos"
            icon={Github}
            title="Git hub"
          />
          <NavigationLinkSocial
            href="https://www.linkedin.com/in/henry-franz-617841245/"
            icon={Linkedin}
            title="Linkedin"
          />
          <NavigationLinkSocial
            href="https://www.instagram.com/dev_henry16/"
            icon={Instagram}
            title="Instagram"
          />
        </nav>
      </aside>
      <div className="h-14 mt-auto flex items-center justify-between  border-t border-r px-6">
        <p className="font-light text-sm text-foreground">
          Desevolvindo em por <span className="font-semibold">henry</span>{" "}
          &copy;{"   "} {new Date().getFullYear()}
        </p>

        <ThemeToggle />
      </div>
    </div>
  );
}
