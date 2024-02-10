import { Container } from "../../../../components/Layout/Container";
import { Logo } from "../../../../components/Logo";
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
            <div className="flex gap-4 mb-4">
              <div className="w-9 h-9 rounded-full bg-slate-300" />
              <div className="w-9 h-9 rounded-full bg-slate-300" />
              <div className="w-9 h-9 rounded-full bg-slate-300" />
              <div className="w-9 h-9 rounded-full bg-slate-300" />
              <div className="w-9 h-9 rounded-full bg-slate-300" />
            </div>

            <a href="mailto:playcraftua@gmail.com" className="text-center lg:text-start">playcraftua@gmail.com</a>
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
