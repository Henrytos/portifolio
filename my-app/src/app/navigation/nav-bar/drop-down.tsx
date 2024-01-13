"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  BookOpen,
  FolderDot,
  Github,
  Home,
  Instagram,
  Laptop,
  Linkedin,
  Menu,
} from "lucide-react";
import { NavigationLinkSocial } from "../navigation-link-social";
import { NavigationTitle } from "../navigation-title";

import { DropDownLink } from "./drop-down-link";

export function DropDown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="border px-2">
        <Menu />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-screen">
        <DropDownLink href="/" icon={Home}>
          home
        </DropDownLink>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <NavigationTitle>eu</NavigationTitle>
        </DropdownMenuItem>
        <DropDownLink href="/about-me" icon={BookOpen}>
          Sobre mim
        </DropDownLink>
        <DropDownLink href="/projects" icon={FolderDot}>
          Projetos
        </DropDownLink>
        <DropDownLink href="/stacks" icon={Laptop}>
          Tecnologias
        </DropDownLink>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <NavigationTitle>Redes sociais</NavigationTitle>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <NavigationLinkSocial
            href="https://github.com/Henrytos"
            icon={Github}
          >
            Git Hub
          </NavigationLinkSocial>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <NavigationLinkSocial
            href="https://www.linkedin.com/in/henry-franz-617841245/"
            icon={Linkedin}
          >
            Linkedin
          </NavigationLinkSocial>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <NavigationLinkSocial
            href="https://www.instagram.com/dev_henry16/"
            icon={Instagram}
          >
            Instagram
          </NavigationLinkSocial>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
