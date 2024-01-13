import { Metadata } from "next";
import { Title } from "@/components/title";
import { Text } from "@/components/text";
import { SubTitle } from "@/components/sub-title";
import { MyStack } from "@/components/my-stacks/my-stack";
import { ContainerStack } from "@/components/my-stacks/containe-stack";
import { fetchStacks } from "@/services/fetchs";
import { Container } from "@/components/container";
import { MyStackList } from "@/components/my-stacks/my-stack-list";
import { Suspense } from "react";
import { StacksSkeleton } from "@/components/my-stacks/stacks-skeleton";

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
