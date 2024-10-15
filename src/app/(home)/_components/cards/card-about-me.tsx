import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/_components/ui/card";
import { ClipboardList, Download, Eye } from "lucide-react";
import { CardLink } from "./card-link";
import { Text } from "@/_components/text";
import { Button } from "@/_components/ui/button";

export function CardAboutMe() {
  return (
    <Card className="w-full rounded-[.5rem]">
      <CardHeader className="flex flex-row justify-between">
        <CardTitle className="flex gap-2">
          <ClipboardList /> <span>Sobre min</span>
        </CardTitle>
        <CardLink href="/about-me">Saber mais</CardLink>
      </CardHeader>
      <CardContent className="space-y-3">
        <Text isDifferent={true}>
          Olá, meu nome é Henry, tenho 17 anos e sou desenvolvedor front-end.
          Atualmente estou cursando o 3º ano do ensino médio e estou em busca de
          uma oportunidade de trabalho para que eu possa me desenvolver
          profissionalmente e pessoalmente.
        </Text>
        <div className="flex gap-2 flex-wrap">
          <Button asChild className="rounded-[.5rem]">
            <a href="/doc/henry-franz.pdf" download={true}>
              <span className="antialiased text-sm ">Meu curriculo</span>
              <Download size={20} className="ml-1" />
            </a>
          </Button>
          <Button asChild className="rounded-[.5rem]">
            <a href="/doc/henry-franz.pdf" download={false}>
              <span className="antialiased text-sm ">Meu curriculo</span>
              <Eye size={20} className="ml-1" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
