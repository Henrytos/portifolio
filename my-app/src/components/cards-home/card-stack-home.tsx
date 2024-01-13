import { ChevronRight, Laptop } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";
import { ContainerStack } from "../my-stacks/containe-stack";
import { MyStack } from "../my-stacks/my-stack";
import { fetchStacks } from "@/services/fetchs";

export async function CardStackHome() {
  const { frontEnd } = await fetchStacks();
  return (
    <Card className="w-full rounded-[.5rem]">
      <CardHeader className="flex flex-row justify-between">
        <CardTitle className="flex gap-2">
          <Laptop /> <span>Tecnologias</span>
        </CardTitle>
        <Link
          href="/stacks"
          className="flex items-center text-xs text-primary hover:text-primary/75 hover:underline transition"
        >
          <p>Saber mais</p>
          <ChevronRight size={15} className="translate-y-px" />
        </Link>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2">
        <ContainerStack>
          {frontEnd.map((stack) => (
            <MyStack {...stack} key={stack.name}>
              {stack.name}
            </MyStack>
          ))}
        </ContainerStack>
      </CardContent>
    </Card>
  );
}
