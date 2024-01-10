import { Metadata } from "next";
import { Container } from "@/components/container";
import { Title } from "@/components/title";
import { Text } from "@/components/text";
import { SubTitle } from "@/components/sub-title";
import { Stacks } from "@/database/database";
import { MyStack } from "@/components/my-stacks/my-stack";
import { ContainerStack } from "@/components/my-stacks/containe-stack";

export const metadata: Metadata = {
  title: "Habilidades",
  description: "Minhas habilidade e tecnologias",
};

export default async function StacksPage() {
  const { frontEnd, backEnd, tools } = Stacks;
  return (
    <Container>
      <Title className="mb-2">Tecnologias e Ferramentas</Title>
      <Text isDifferent={true} clasName="mb-6">
        Aqui estão algumas tecnologias e ferramentas que eu uso no meu dia a dia
        de desenvolvimento. desde front-end até back-end
      </Text>
      <SubTitle className="mb-2">Front end</SubTitle>
      <ContainerStack>
        {frontEnd.map((stack) => (
          <MyStack {...stack} key={stack.name}>
            {stack.name}
          </MyStack>
        ))}
      </ContainerStack>

      <SubTitle className="mb-4">Back end</SubTitle>
      <ContainerStack>
        {backEnd.map((stack) => (
          <MyStack {...stack} key={stack.name}>
            {stack.name}
          </MyStack>
        ))}
      </ContainerStack>

      <SubTitle className="mb-4">Ferramentas</SubTitle>
      <ContainerStack>
        {tools.map((stack) => (
          <MyStack {...stack} key={stack.name}>
            {stack.name}
          </MyStack>
        ))}
      </ContainerStack>
    </Container>
  );
}
