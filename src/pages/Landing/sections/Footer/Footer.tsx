import { Container } from "../../../../components/Layout/Container";
import { Logo } from "../../../../components/Logo";
import { socials } from "../../../../content/socials";
import { useBreakpoints } from "../../../../hooks/useBreakpoints";
import { Navigation } from "./components/Navigation";

export const Footer = () => {
  const { isLgScreen } = useBreakpoints();

  return (
    <Container type="footer" rootClassNames="flex flex-col lg:flex-row justify-between my-20 gap-20">
      <div className="flex flex-col justify-between items-center lg:items-start">
        <div className="">
          <Logo size="large" textColor="black" />

          <div className="mt-10 mb-15">
            <div className="flex items-center gap-4 mb-4">
              {socials.map(({url, icon}, index) => (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center"
                >
                  {icon}
                </a>
              ))}
            </div>

            <a href="mailto:playcraftua@gmail.com" className="flex justify-center lg:justify-start">playcraftua@gmail.com</a>
          </div>
        </div>
        {isLgScreen && (
          <div>
            <div className="flex flex-col mb-8">
              <a href="#">Політика конфіденційності</a>
              <a href="#">Договір публічної оферти</a>
            </div>
            <span>All rights reserved © 2012-2024</span>
          </div>
        )}
      </div>

      <Navigation />
      {!isLgScreen && (
        <div className="mt-15 text-center">
          <div className="flex flex-col mb-8">
            <a href="#">Політика конфіденційності</a>
            <a href="#">Договір публічної оферти</a>
          </div>
          <span>All rights reserved © 2012-2024</span>
        </div>
      )}
    </Container>
  )
}
