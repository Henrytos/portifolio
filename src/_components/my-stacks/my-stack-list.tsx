import React from "react";
import { SubTitle } from "../sub-title";
import { ContainerStack } from "./containe-stack";
import { MyStack } from "./my-stack";
import { GetStacksApiResponse } from "@/app/stacks/page";

export async function MyStackList() {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/stacks`)
  const { stacksBackEnd, stacksFontEnd, stacksTools } = await data.json() as GetStacksApiResponse


  return (
    <div className="space-y-10">
      <section>
        <SubTitle className="mb-2">Front end</SubTitle>
        <ContainerStack>
          {stacksFontEnd.map((stack) => (
            <MyStack srcImg={stack.srcImg} key={stack.name}>
              {stack.name}
            </MyStack>
          ))}
        </ContainerStack>

      </section>
      <section>
        <SubTitle className="mb-4">Back end</SubTitle>
        <ContainerStack>
          {stacksBackEnd.map((stack) => (
            <MyStack srcImg={stack.srcImg} key={stack.name}>
              {stack.name}
            </MyStack>
          ))}
        </ContainerStack>
      </section>

      <section>
        <SubTitle className="mb-4">Ferramentas</SubTitle>
        <ContainerStack>
          {stacksTools.map((stack) => (
            <MyStack srcImg={stack.srcImg} key={stack.name}>
              {stack.name}
            </MyStack>
          ))}
        </ContainerStack>
      </section>
    </div>
  );
}
