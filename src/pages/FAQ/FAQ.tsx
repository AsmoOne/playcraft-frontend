import { Accordion } from "../../components/Accordion";
import { Container } from "../../components/Layout/Container";
import { accordionContent } from "./accordionContent";

export const FAQ = () => {
  return (
    <Container>
      {accordionContent.map(({ title, questions }, index) => (
        <Accordion
          title={title}
          questions={questions}
          key={`${title}-${index}`}
        />
      ))}
    </Container>
  )
}
