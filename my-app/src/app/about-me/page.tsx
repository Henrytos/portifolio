import { Metadata } from "next";
import { Container } from "@/components/container";
import { Title } from "@/components/title";
import { Text } from "@/components/text";
import { ReactNode } from "react";
import { SubTitle } from "@/components/sub-title";

export const metadata: Metadata = {
  title: "Sobre min",
  description: "página sobre min",
};

export function List({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-center gap-3">
      <span className="w-1 h-1 translate-y-px rounded block bg-muted-foreground" />
      <Text clasName="flex gap-2">{children}</Text>
    </li>
  );
}

export default function AboutMePage() {
  return (
    <Container>
      <Title>Sobre min </Title>
      <ul className="mb-5 mt-2 space-y-1">
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
      <SubTitle clasName="mb-2">Olá, um pouco Sobre min</SubTitle>
      <Text isDifferent={true}>
        Sou Apaixonado pelo mundo da tecnologia e seus beneficios e facilidades
        que podem proporcionar para a vida das pessoas ,sempre buscando aprender
        coisas novas. Sou autodidata, e estou sempre buscando aprender coisas
        novas, e aprimorar meus conhecimentos. Atualmente estou estudando sobre
        desenvolvimento web, e estou focado em me tornar um desenvolvedor
        Full-Stack.
      </Text>
      <SubTitle>Formação acadêmica</SubTitle>
      <Text isDifferent={true}>
        Atualmente estou cursando o 3º ano do ensino médio e estou em busca de
        uma oportunidade de trabalho para que eu possa me desenvolver
        profissionalmente e pessoalmente.
      </Text>
      <SubTitle>Interesses pessoais</SubTitle>
      <SubTitle>Hobbies</SubTitle>
    </Container>
  );
}
