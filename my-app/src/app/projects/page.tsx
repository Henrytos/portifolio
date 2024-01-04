import { ThemeToggle } from "@/contexts/theme/theme-togle";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Projetos",
  description: "Meus projetos",
};

export default function Home() {
  return (
    <Container>
      <h1 className="text-"> hello world projects ;-;</h1>
      <Button>click</Button>
      <ThemeToggle />
    </Container>
  );
}
