import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/_components/ui/card";
import { ContainerStack } from "@/_components/my-stacks/containe-stack";
import { MyStack } from "@/_components/my-stacks/my-stack";
import { CardLink } from "./card-link";
import { Laptop } from "lucide-react";
import { GetStacksApiResponse } from "@/app/stacks/page";

export async function CardStacks() {


  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/stacks`)
  const { stacksBackEnd, stacksFontEnd, stacksTools } = await data.json() as GetStacksApiResponse

  return (
    <Card className="w-full rounded-[.5rem]">
      <CardHeader className="flex flex-row justify-between">
        <CardTitle className="flex gap-2">
          <Laptop /> <span>Tecnologias</span>
        </CardTitle>
        <CardLink href="/stacks">Saber mais</CardLink>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2">
        <ContainerStack>
          {stacksFontEnd.map((stack) => (
            <MyStack {...stack} key={stack.name}>
              {stack.name}
            </MyStack>
          ))}
        </ContainerStack>
      </CardContent>
    </Card>
  );
}
