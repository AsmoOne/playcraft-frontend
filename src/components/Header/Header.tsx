import { useState, useEffect } from "react";
import { Container } from "../Layout/Container";
import { Logo } from "../Logo";
import { Navigation } from "./components/Navigation";
import { Burger } from "./components/Burger";
import { useBreakpoints } from "../../hooks/useBreakpoints";

export const Header = () => {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { isMdScreen } = useBreakpoints();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsHeaderFixed(scrollTop > 150);
      setIsOpen(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleClick = () => setIsOpen(!isOpen);

  return (
    <div className={`select-none transition-all duration-300 ease-in-out ${isHeaderFixed ? 'bg-[rgba(0,0,0,0.6)] fixed top-0 left-0 right-0 backdrop-blur z-10' : ''}`}>
      <Container type="header">
        <div className="flex justify-between py-6">
          <Logo size="small" rootClassNames="z-10" />

          <Navigation isOpen={isOpen} />

          {!isMdScreen && <Burger onClick={toggleClick} isOpen={isOpen} />}
        </div>
      </Container>
    </div>
  );
};
