import { Metadata } from "next";
import { Container } from "@/components/container";
import { fetchStacks } from "@/services/fetch";
import { StackResponseType } from "@/types/type-response";
import { Title } from "@/components/title";
import { Text } from "@/components/text";
import Image from "next/image";
import { SubTitle } from "@/components/sub-title";

export const metadata: Metadata = {
  title: "Habilidades",
  description: "Minhas habilidade e tecnologias",
};

export default async function StacksPage() {
  const Stacks: StackResponseType = await fetchStacks();
  const { frontEnd, backEnd, tools } = Stacks;
  return (
    <Container>
      <Title className="mb-2">Tecnologias e Ferramentas</Title>
      <Text isDifferent={true} clasName="mb-6">
        Aqui estão algumas tecnologias e ferramentas que eu uso no meu dia a dia
        de desenvolvimento. desde front-end até back-end
      </Text>
      <SubTitle clasName="mb-2">Front end</SubTitle>
      <div className="grid grid-cols-4 gap-2 mb-6">
        {frontEnd.map((stack) => (
          <a
            href={stack.srcDocumentation}
            target="_blank"
            key={stack.srcImg}
            className="group backdrop-blur-3xl flex items-center gap-2 h-16 
            bg-secondary dark:bg-secondary/50 hover:bg-primary/15 hover:dark:bg-secondary  p-3 rounded-[.5rem] transition-all"
          >
            <div className="bg-primary/5  dark:bg-secondary/70 p-2 rounded border-primary-foreground dark:group-hover:bg-primary/15 group-hover:bg-primary/30  transition-colors">
              <Image
                width={10}
                height={10}
                alt={stack.name}
                className="h-8 w-8"
                src={stack.srcImg}
              />
            </div>

            <span className="text-secondary-foreground font-light antialiased ">
              {stack.name}
            </span>
          </a>
        ))}
      </div>

      <SubTitle clasName="mb-4">Back end</SubTitle>
    </Container>
  );
}
