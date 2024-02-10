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
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleClick = () => setIsOpen(!isOpen);

  return (
    <Container type="header" rootClassNames={`select-none bg-[rgba(0,0,0,0.4)] transition-all duration-300 ease-in-out backdrop-blur ${isHeaderFixed ? 'bg-[rgba(0,0,0,0.6)] fixed top-0 left-0 right-0 bg-[rgba(0,0,0,0.4)' : ''}`}>
      <div className="flex justify-between py-10">
        <Logo size="small" rootClassNames="z-10" />

        <Navigation isOpen={isOpen} />

        {!isMdScreen && <Burger onClick={toggleClick} isOpen={isOpen} />}
      </div>
    </Container>
  );
};
