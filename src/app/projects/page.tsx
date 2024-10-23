import { Metadata } from "next";
import { Title } from "@/_components/title";
import { Text } from "@/_components/text";
import { Github } from "lucide-react";
import { SubTitle } from "@/_components/sub-title";
import { CardContainer } from "@/_components/card-project/card-container";
import { Container } from "@/_components/container";
import { CardProjectList } from "@/_components/card-project/card-list";
import { Suspense } from "react";
import { CardSkeleton } from "@/_components/card-project/card-skeleton";

export const metadata: Metadata = {
  title: "Projetos",
  description: "Meus projetos",
};

export interface Project {
  id: string;
  name: string;
  description: string;
  linkPage: string;
  linkRepo: string;
  srcImg: string;
  isFavorite?: boolean;
}

export interface GetProjectsApiResponse {
  projects: Project[]
}

export default function ProjectsPage() {
  return (
    <Container>
      <Title className="mb-2">Meus Projetos</Title>
      <Text className="mb-6">
        Aqui esta algums Projetos que desenvolvi,todos estão no meu
        <a
          href="https://github.com/Henrytos"
          target="_blank"
          className="text-primary underline"
        >
          Git Hub <Github size={18} className="inline -translate-y-0.5" />
        </a>
      </Text>
      <SubTitle className="mb-4">Front-end</SubTitle>
      <CardContainer>
        <Suspense fallback={Array.from({ length: 6 }).map((_, i) => <CardSkeleton key={i} />)}>
          <CardProjectList />
        </Suspense>
      </CardContainer>
    </Container>
  );
}
