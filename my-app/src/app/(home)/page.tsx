import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/container";
import { Text } from "@/components/text";
import Image from "next/image";
import { Title } from "@/components/title";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import {
  ChevronRight,
  ClipboardList,
  Download,
  Eye,
  FolderClosed,
  Laptop,
} from "lucide-react";
import { Projects, Stacks } from "@/database/database";
import { ShowProject } from "@/components/card-project/show-project";
import { Button } from "@/components/ui/button";
import { MyStack } from "@/components/my-stacks/my-stack";

export default function HomePage() {
  const styleBadge =
    "bg-secondary text-foreground rounded hover:bg-primary transition-colors";
  const myFavoritesProject = Projects.slice(0, 3);
  const myFavoritesStacks = Stacks.frontEnd;
  return (
    <Container className="space-y-6">
      <div className="flex  gap-4 h-28 ">
        <Image
          src="/imgs/icon.jpeg"
          alt="my person"
          width={200}
          height={200}
          className="rounded-xl h-28 w-28 object-cover"
        />
        <div className="pt-2 flex flex-col justify-between ">
          <div>
            <Title>Henry Franz</Title>
            <Text isDifferent={true}>Desenvolvedor Front-End</Text>
          </div>
          <div className="space-x-1.5">
            <Badge className={styleBadge}>NextJs</Badge>
            <Badge className={styleBadge}>React</Badge>
            <Badge className={styleBadge}>TypeScript</Badge>
            <Badge className={styleBadge}>JavaScript</Badge>
            <Badge className={styleBadge}>NodeJs</Badge>
            <Badge className={styleBadge}>Express</Badge>
          </div>
        </div>
      </div>

      <Card className="w-full rounded-[.5rem]">
        <CardHeader className="flex flex-row justify-between">
          <CardTitle className="flex gap-2">
            <ClipboardList /> <span>Sobre min</span>
          </CardTitle>
          <Link
            href="/about-me"
            className="flex items-center text-xs text-primary hover:text-primary/75 hover:underline transition"
          >
            <p>Saber mais</p>
            <ChevronRight size={15} className="translate-y-px" />
          </Link>
        </CardHeader>
        <CardContent className="space-y-3">
          <Text isDifferent={true}>
            Olá, meu nome é Henry, tenho 17 anos e sou desenvolvedor front-end.
            Atualmente estou cursando o 3º ano do ensino médio e estou em busca
            de uma oportunidade de trabalho para que eu possa me desenvolver
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
      <Card className="w-full rounded-[.5rem]">
        <CardHeader className="flex flex-row justify-between">
          <CardTitle className="flex gap-2">
            <FolderClosed /> <span>Projetos</span>
          </CardTitle>
          <Link
            href="/projects"
            className="flex items-center text-xs text-primary hover:text-primary/75 hover:underline transition"
          >
            <p>Saber mais</p>
            <ChevronRight size={15} className="translate-y-px" />
          </Link>
        </CardHeader>
        {myFavoritesProject.map((project, i) => (
          <ShowProject
            {...project}
            key={project.linkRepo}
            isDifferent={+i % 2 != 0}
          />
        ))}
      </Card>
      <Card className="w-full rounded-[.5rem]">
        <CardHeader className="flex flex-row justify-between">
          <CardTitle className="flex gap-2">
            <Laptop /> <span>Tecnologias</span>
          </CardTitle>
          <Link
            href="/stacks"
            className="flex items-center text-xs text-primary hover:text-primary/75 hover:underline transition"
          >
            <p>Saber mais</p>
            <ChevronRight size={15} className="translate-y-px" />
          </Link>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          {myFavoritesStacks.map((stack) => (
            <MyStack {...stack} key={stack.name}>
              {stack.name}
            </MyStack>
          ))}
        </CardContent>
      </Card>
    </Container>
  );
}
