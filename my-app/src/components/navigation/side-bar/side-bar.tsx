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

export function SideBar() {
  const currentPath = usePathname();
  return (
    <div className="hidden lg:block w-full max-w-72 bg-background/45 ">
      <aside className="min-h-[calc(100vh_-_3.5rem)] text-foreground border-r pt-4 ">
        {currentPath != "/" && (
          <div className="pl-4 pb-4 mb-4 border-b">
            {" "}
            <MyPersonSmall />
          </div>
        )}

        <nav className="px-3">
          <NavigationLink href="/" icon={Home}>
            Início
          </NavigationLink>

          <NavigationTitle>Eu</NavigationTitle>
          <NavigationLink href="/about-me" icon={BookOpen}>
            Sobre min
          </NavigationLink>
          <NavigationLink href="/projects" icon={FolderDot}>
            Projetos
          </NavigationLink>
          <NavigationLink href="/stacks" icon={Laptop}>
            Tecnologias
          </NavigationLink>

          <NavigationTitle>Redes Socias</NavigationTitle>
          <NavigationLinkSocial
            href="https://github.com/Henrytos"
            icon={Github}
          >
            Git Hub
          </NavigationLinkSocial>
          <NavigationLinkSocial
            href="https://www.linkedin.com/in/henry-franz-617841245/"
            icon={Linkedin}
          >
            Linkedin
          </NavigationLinkSocial>
          <NavigationLinkSocial
            href="https://www.instagram.com/dev_henry16/"
            icon={Instagram}
          >
            Instagram
          </NavigationLinkSocial>
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
