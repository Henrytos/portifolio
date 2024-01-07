import { Metadata } from "next";
import { Container } from "@/components/container";
import { Title } from "@/components/title";
import { Text } from "@/components/text";
import { ReactNode, useRef } from "react";
import { SubTitle } from "@/components/sub-title";
import { BookOpenText, Clapperboard, Dumbbell } from "lucide-react";
import { RiNetflixFill } from "react-icons/ri";
import Image from "next/image";
import clsx from "clsx";

export const metadata: Metadata = {
  title: "Sobre min",
  description: "página sobre min",
};

export function List({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className="flex items-center gap-3">
      <span className="w-1 h-1 translate-y-px rounded block bg-muted-foreground" />
      <div className={clsx("flex items-center gap-2", className)}>
        {children}
      </div>
    </span>
  );
}
export default function AboutMePage() {
  return (
    <Container className="space-y-4">
      <section className="space-y-2">
        <Title>Sobre min </Title>
        <ul className=" space-y-1">
          <List>
            <span className="font-bold antialiased">Localização: </span>
            <Text isDifferent={true}>São Palo, Brasil</Text>
          </List>
          <List>
            <span className="font-bold antialiased">Idade: </span>
            <Text isDifferent={true}>17</Text>
          </List>
          <List>
            <span className="font-bold antialiased">Sexo: </span>
            <Text isDifferent={true}>Henry Frnaz</Text>
          </List>
          <List>
            <span className="font-bold antialiased">Idiomas: </span>
            <Text isDifferent={true}>
              Portugues, Espanhol <span className="text-xs">(basíco)</span>{" "}
            </Text>
          </List>
          <List>
            <span className="font-bold antialiased">Stacks: </span>
            <Text isDifferent={true}>
              NextJs , TailwindCss ,React , TypeScript , NodeJs , Express ,
              JavaScript , Css , Html
            </Text>
          </List>
        </ul>
      </section>
      <section>
        <SubTitle isDifferent={true}>Olá, um pouco Sobre min</SubTitle>
        <Text isDifferent={true}>
          Sou Apaixonado pelo mundo da tecnologia e seus beneficios e
          facilidades que podem proporcionar para a vida das pessoas ,sempre
          buscando aprender coisas novas. Sou autodidata, e estou sempre
          buscando aprender coisas novas, e aprimorar meus conhecimentos.
          Atualmente estou estudando sobre desenvolvimento web, e estou focado
          em me tornar um desenvolvedor Full-Stack.
        </Text>
      </section>
      <section>
        <SubTitle isDifferent={true}>Formação acadêmica</SubTitle>
        <Text isDifferent={true}>
          Atualmente estou cursando o 3º ano do ensino médio tecnico em
          desenvolviemento de sistemas e estou em busca de uma oportunidade de
          trabalho para que eu possa me desenvolver profissionalmente e
          pessoalmente.
        </Text>
      </section>

      <section>
        <SubTitle isDifferent={true}>Interesses pessoais</SubTitle>
      </section>
      <section className="space-y-4">
        <SubTitle isDifferent={true}>Hobbies</SubTitle>

        <article>
          <SubTitle className="text-xl flex gap-3">
            <span className="flex gap-1">
              <Clapperboard /> Assitir Animes
            </span>
            <span>/</span>
            <span className="flex gap-1">
              <BookOpenText />
              Ler mangás
            </span>
          </SubTitle>
          <Text isDifferent={true}>
            Sou um grande fã de animes e mangás, e sempre que posso estou
            assistindo ou lendo algum.
          </Text>
          <Text isDifferent={true}>Meus favoritos são:</Text>
          <ul
            className=" space-y-1 grid  
          grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-5"
          >
            <li className="space-y-2">
              <List>
                <span className="font-bold antialiased">SouSou no frieren</span>
              </List>
              <Image
                src="/imgs/about-me/snf.jpeg"
                width={400}
                height={400}
                className="w-full  object-cover"
                alt="SouSou no frieren"
              />
            </li>
            <li className="space-y-2">
              <List>
                <span className="font-bold antialiased">Jujustsu kaisen</span>
              </List>
              <Image
                src="/imgs/about-me/jk.jpeg"
                width={400}
                height={400}
                className="w-full  object-cover"
                alt="Jujustsu kaisen"
              />
            </li>

            <li className="space-y-2">
              <List>
                <span className="font-bold antialiased">Blue lock</span>
              </List>
              <Image
                src="/imgs/about-me/bl.jpeg"
                width={400}
                height={400}
                className="w-full  object-cover"
                alt="Blue lock"
              />
            </li>
          </ul>
        </article>
        <article>
          <SubTitle className="text-xl flex gap-1">
            <RiNetflixFill /> Assitir series
          </SubTitle>
          <Text isDifferent={true}>
            Gosto muito assistir pricipalmente series de comédia e dormas
            netflix HBO-Max
          </Text>
          <Text isDifferent={true}>Meus favoritos são:</Text>
          <ul className=" space-y-1">
            <List>The Big Bang theory </List>
            <List>Supernatural</List>
            <List>YuYu Hakusho</List>
          </ul>
        </article>
        <article>
          <SubTitle className="text-xl flex gap-1">
            <Dumbbell /> Fazer musculução
          </SubTitle>
          <Text isDifferent={true}>
            Gosto muito de fazer musculução ajuda a desetressar a cabeça e corpo
            alemde trazer benificios para a saude e estetica
          </Text>
        </article>
      </section>
    </Container>
  );
}
