import { Metadata } from "next";
import { Container } from "@/_components/container";
import { Title } from "@/_components/title";
import { Text } from "@/_components/text";
import { SubTitle } from "@/_components/sub-title";
import { BookOpenText, Clapperboard, Dumbbell } from "lucide-react";
import { RiNetflixFill } from "react-icons/ri";
import { ListItem } from "./_components/list-item";
import { AnimesFavoites, SeriesFavorites } from "./_components/favortites-list";

export const metadata: Metadata = {
  title: "Sobre min",
  description: "página sobre min",
};

export default function AboutMePage() {
  return (
    <Container className="space-y-4">
      <section className="space-y-2">
        <Title>Sobre min </Title>
        <ul className=" space-y-1">
          <ListItem>
            <span className="font-bold antialiased">Localização: </span>
            <Text isDifferent={true}>São Paulo, Brasil</Text>
          </ListItem>
          <ListItem>
            <span className="font-bold antialiased">Idade: </span>
            <Text isDifferent={true}>17</Text>
          </ListItem>
          <ListItem>
            <span className="font-bold antialiased">Sexo: </span>
            <Text isDifferent={true}>Masculino</Text>
          </ListItem>
          <ListItem>
            <span className="font-bold antialiased">Idiomas: </span>
            <Text isDifferent={true}>
              Portugues, Espanhol <span className="text-xs">(basíco)</span>
            </Text>
          </ListItem>
          <ListItem>
            <span className="font-bold antialiased">Stacks: </span>
            <Text isDifferent={true}>
              NextJs , TailwindCss ,React , TypeScript , NodeJs , Express ,
              JavaScript , Css , Html
            </Text>
          </ListItem>
        </ul>
      </section>
      <section className="space-y-2">
        <SubTitle isDifferent={true}>Olá, um pouco sobre mim:</SubTitle>
        <Text isDifferent={true}>
          Sou apaixonado pelo mundo da tecnologia e pelos benefícios e
          facilidades que ela pode proporcionar na vida das pessoas, sempre
          buscando aprender coisas novas. Sou autodidata e estou constantemente
          aprimorando meus conhecimentos. Atualmente, estou focado em estudar
          desenvolvimento web, com o objetivo de me tornar um desenvolvedor
          Full-Stack.
        </Text>
      </section>
      <section className="space-y-2">
        <SubTitle isDifferent={true}>Formação acadêmica:</SubTitle>
        <Text isDifferent={true}>
          Atualmente, estou cursando o 3º ano do ensino médio técnico em
          desenvolvimento de sistemas e estou em busca de oportunidades de
          trabalho para desenvolver-me profissionalmente e pessoalmente.
        </Text>
      </section>
      <section className="space-y-4">
        <div className="space-y-2">
          <SubTitle isDifferent={true}>Interesses pessoais</SubTitle>
          <Text isDifferent={true}>
            Além da tecnologia, tenho outros interesses pessoais, como animes,
            séries, musculação e jogos.
          </Text>
        </div>
        <article className="space-y-1">
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
          <AnimesFavoites />
        </article>
        <article className="space-y-1">
          <SubTitle className="text-xl flex gap-1">
            <RiNetflixFill /> Assitir series
          </SubTitle>
          <Text isDifferent={true}>
            Gosto muito assistir pricipalmente series de comédia e dormas
            netflix HBO-Max
          </Text>
          <Text isDifferent={true}>Meus favoritos são:</Text>
          <SeriesFavorites />
        </article>
        <article className="space-y-1">
          <SubTitle className="text-xl flex gap-1">
            <Dumbbell /> Fazer musculução
          </SubTitle>
          <Text isDifferent={true}>
            Gosto muito de fazer musculução ajuda a desetressar a cabeça e corpo
            alem de trazer benificios para a saude e estetica
          </Text>
        </article>
      </section>
    </Container>
  );
}
