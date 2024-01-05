import { ThemeToggle } from "@/contexts/theme/theme-togle";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Habilidades",
  description: "Minhas habilidade e tecnologias",
};

export default function StacksPage() {
  return (
    <Container>
      <h1 className="text-muted-foreground"> hello world stcks</h1>
      <Button>click</Button>
      <ThemeToggle />
    </Container>
  );
}
