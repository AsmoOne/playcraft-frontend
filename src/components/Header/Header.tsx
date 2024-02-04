import { useState } from "react";

import { Container } from "../Layout/Container";
import { Logo } from "../Logo";
import { Navigation } from "./components/Navigation";
import { Burger } from "./components/Burger";
import { useBreakpoints } from "../../hooks/useBreakpoints";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { isMdScreen } = useBreakpoints();

  const toggleClick = () => setIsOpen(!isOpen);

  return (
    <header>
      <Container>
        <div className="flex justify-between py-10">
          <Logo size="small" />

          <Navigation isOpen={isOpen} />

          {!isMdScreen && <Burger onClick={toggleClick} isOpen={isOpen} />}
        </div>
      </Container>
    </header>
  )
}
