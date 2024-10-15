import { Badge } from "@/_components/ui/badge";
import { Text } from "@/_components/text";
import Image from "next/image";
import { Title } from "@/_components/title";
import { Container } from "@/_components/container";
import { Suspense } from "react";
import { CardSkeleton } from "@/_components/card-project/card-skeleton";
import { CardProjects } from "./_components/cards/card-projects";
import { CardStacks } from "./_components/cards/card-stacks";
import { CardAboutMe } from "./_components/cards/card-about-me";
import { StacksSkeleton } from "@/_components/my-stacks/stacks-skeleton";
import { CardProjectsSkeleton } from "./_components/cards/card-projects-skeleton";

export default function HomePage() {
  const styleBadge =
    "bg-secondary text-foreground rounded hover:bg-primary transition-colors";

  return (
    <Container className="space-y-6">
      <div className="flex  gap-4 h-28 " data-aos="fade-up">
        <Image
          src="/imgs/icon.jpeg"
          alt="my person"
          width={200}
          height={200}
          className="rounded-xl h-28 w-28 object-cover"
        />
        <div className="pt-2 flex flex-col justify-between ">
          <div>
            <Title>Henry Franz</Title>
            <Text isDifferent={true} data-aos="fade-up" className="transitions">
              Desenvolvedor Front-End
            </Text>
            <div className="space-x-1.5">
              <Badge className={styleBadge}>NextJs</Badge>
              <Badge className={styleBadge}>React</Badge>
              <Badge className={styleBadge}>TypeScript</Badge>
              <Badge className={styleBadge}>JavaScript</Badge>
              <Badge className={styleBadge}>NodeJs</Badge>
              <Badge className={styleBadge}>Express</Badge>
            </div>
          </div>
        </div>
      </div>

      <CardAboutMe />
      <CardProjects />

      <Suspense fallback={<StacksSkeleton />}>
        <CardStacks />
      </Suspense>
    </Container>
  );
}
