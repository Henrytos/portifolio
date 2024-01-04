import { Badge } from "@/components/badge";
import { Container } from "@/components/container";
import { Text } from "@/components/text";

export default function Home() {
  return (
    <Container>
      <h1 className=""> hello world</h1>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
        dignissimos!
        <Badge>Javascript</Badge>
      </Text>
    </Container>
  );
}
