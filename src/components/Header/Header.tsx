import { useState } from "react";

import { Container } from "../Layout/Container";
import { Logo } from "../Logo";
import { Navigation } from "./components/Navigation";
import { Burger } from "./components/Burger";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleClick = () => setIsOpen(!isOpen);

  return (
    <header>
      <Container>
        <div className="flex justify-between py-10">
          <Logo size="small" />

          <Navigation isOpen={isOpen} />

          <Burger onClick={toggleClick} isOpen={isOpen} />
        </div>
      </Container>
    </header>
  )
}
