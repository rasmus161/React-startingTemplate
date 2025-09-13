import { Container } from "../GenaralUi";
import { Button } from "../buttons";
export function ShowContainer() {
  return (
    <>
      <Container className="bg-gray-200 rounded-lg">
        <Button className="bg-gray-300 hover:bg-gray-400 ">show Button</Button>
      </Container>
      <Container className="bg-gray-200 "></Container>
    </>
  );
}
