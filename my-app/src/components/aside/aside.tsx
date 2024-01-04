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
import { AsideLink } from "./aside-link";
import { AsideLinkSocial } from "./aside-link-social";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/contexts/theme/theme-togle";

export function Aside() {
  const curretPath = usePathname();
  return (
    <div className="w-full max-w-80">
      <aside className="min-h-[calc(100vh_-_3.5rem)] flex flex-col gap-4   p-3 text-foreground border-r ">
        <AsideLink
          href="/"
          icon={Home}
          title="Início"
          curretPath={curretPath}
        />
        <div>
          <p className="text-zinc-500 text-sm font-semibold pl-4 pb-1">Eu</p>
          <AsideLink
            href="/about-me"
            icon={BookOpen}
            title="Sobre mim"
            curretPath={curretPath}
          />
          <AsideLink
            href="/projects"
            icon={FolderDot}
            title="Projetos"
            curretPath={curretPath}
          />
          <AsideLink
            href="/stacks"
            icon={Laptop}
            title="Tecnologias"
            curretPath={curretPath}
          />
        </div>
        <div>
          <p className="text-zinc-500 text-sm font-semibold pl-4 pb-1">
            Redes Socias
          </p>
          <AsideLinkSocial
            href="https://github.com/Henrytos"
            icon={Github}
            title="Git hub"
          />
          <AsideLinkSocial
            href="https://www.linkedin.com/in/henry-franz-617841245/"
            icon={Linkedin}
            title="Linkedin"
          />
          <AsideLinkSocial
            href="https://www.instagram.com/dev_henry16/"
            icon={Instagram}
            title="Instagram"
          />
        </div>
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
