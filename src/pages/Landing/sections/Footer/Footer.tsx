import { Container } from "../../../../components/Layout/Container";
import { Logo } from "../../../../components/Logo";
import { Navigation } from "./components/Navigation";

export const Footer = () => {
  return (
    <Container type="footer" rootClassNames="flex justify-between my-20">
      <div className="flex flex-col justify-between">
        <div className="">
          <Logo size="large" textColor="black" />

          <div className="mt-10">
            <div className="flex gap-4 mb-4">
              <div className="w-9 h-9 rounded-full bg-slate-300" />
              <div className="w-9 h-9 rounded-full bg-slate-300" />
              <div className="w-9 h-9 rounded-full bg-slate-300" />
              <div className="w-9 h-9 rounded-full bg-slate-300" />
              <div className="w-9 h-9 rounded-full bg-slate-300" />
            </div>

            <p>playcraftua@gmail.com</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col mb-8">
            <a href="#">Політика конфіденційності</a>
            <a href="#">Договір публічної оферти</a>
          </div>
          <span>All rights reserved © 2012-2024</span>
        </div>
      </div>

      <Navigation />
    </Container>
  )
}
