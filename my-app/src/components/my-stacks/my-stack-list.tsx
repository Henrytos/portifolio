import { fetchStacks } from "@/services/fetchs";
import { SubTitle } from "../sub-title";
import { ContainerStack } from "./containe-stack";
import { MyStack } from "./my-stack";

export async function MyStackList() {
  const { backEnd, frontEnd, tools } = await fetchStacks();

  return (
    <>
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
    </>
  );
}
