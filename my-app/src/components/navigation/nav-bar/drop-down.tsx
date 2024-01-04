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
  Settings,
} from "lucide-react";
import { NavigationLinkSocial } from "../navigation-link-social";
import { NavigationTitle } from "../navigation-title";

import { DropDownLink } from "./drop-down-link";

export function DropDown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="border px-2">
        <Settings />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-screen">
        <DropDownLink href="/" icon={Home}>
          home
        </DropDownLink>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
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
            title="Git hub"
          />
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <NavigationLinkSocial
            href="https://www.linkedin.com/in/henry-franz-617841245/"
            icon={Linkedin}
            title="Linkedin"
          />
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <NavigationLinkSocial
            href="https://www.instagram.com/dev_henry16/"
            icon={Instagram}
            title="Instagram"
          />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
