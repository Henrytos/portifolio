import { Metadata } from "next";
import { Title } from "@/_components/title";
import { Text } from "@/_components/text";
import { Container } from "@/_components/container";
import { MyStackList } from "@/_components/my-stacks/my-stack-list";
import { Suspense } from "react";
import { StacksSkeleton } from "@/_components/my-stacks/stacks-skeleton";

export const metadata: Metadata = {
  title: "Habilidades",
  description: "Minhas habilidade e tecnologias",
};

export default function StacksPage() {
  return (
    <Container>
      <Title className="mb-2">Tecnologias e Ferramentas</Title>
      <Text isDifferent={true} clasName="mb-6">
        Aqui estão algumas tecnologias e ferramentas que eu uso no meu dia a dia
        de desenvolvimento. desde front-end até back-end
      </Text>
      <Suspense fallback={<StacksSkeleton />}>
        <MyStackList />
      </Suspense>
    </Container>
  );
}
