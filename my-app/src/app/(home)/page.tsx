import { Container } from "@/components/container";
import { Text } from "@/components/text";
import { ThemeToggle } from "@/contexts/theme/theme-togle";

export default function Home() {
  return (
    <Container>
      <h1 className=""> hello world</h1>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
        dignissimos!
      </Text>
      <ThemeToggle />
    </Container>
  );
}
