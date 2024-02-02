import { Button } from "../Button";
import { Container } from "../Layout/Container";
import { Logo } from "../Logo";
import { Navigation } from "./components/Navigation";

export const Header = () => {
  return (
    <Container>
      <div className="flex justify-between py-10">
        <Logo size="small" />

        <div className="flex gap-16">
          <Navigation />

          <Button variant="primary">
            Вхід
          </Button>
        </div>
      </div>
    </Container>
  )
}
