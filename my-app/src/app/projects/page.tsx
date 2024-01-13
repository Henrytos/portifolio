import { Metadata } from "next";
import { Title } from "@/components/title";
import { Text } from "@/components/text";
import { Github } from "lucide-react";
import { SubTitle } from "@/components/sub-title";
import { CardConatiner } from "@/components/card-project/card-conatiner";
import { Container } from "@/components/container";
import { CardProjectList } from "@/components/card-project/card-list";

export const metadata: Metadata = {
  title: "Projetos",
  description: "Meus projetos",
};

export default function ProjectsPage() {
  return (
    <Container>
      <Title className="mb-2">Meus Projetos</Title>
      <Text clasName="mb-6">
        Aqui esta algums Projetos que desenvolvi,todos estão no meu{" "}
        <a
          href="https://github.com/Henrytos"
          target="_blank"
          className="text-primary underline"
        >
          Git Hub <Github size={18} className="inline -translate-y-0.5" />
        </a>{" "}
      </Text>
      <SubTitle className="mb-4">Front-end</SubTitle>
      <CardConatiner>
        <CardProjectList />
      </CardConatiner>
    </Container>
  );
}
