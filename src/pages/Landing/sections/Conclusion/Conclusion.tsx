import { Button } from "../../../../components/Button";
import { Container } from "../../../../components/Layout/Container";
import { Timer } from "./components/Timer";

import { STYLES } from "../../../../utils/constants";

export const Conclusion = () => {
  return (
    <section className="flex items-center bg-conclusion-background bg-no-repeat bg-cover h-[650px] lg:h-[750px] w-full mt-20">
      <Container rootClassNames="flex flex-col lg:flex-row items-center lg:justify-between gap-15 lg:gap-20 h-auto">
        <div className="flex flex-col items-center w-full">
          <h2 className={STYLES.H2}>Сервер існує:</h2>
          <Timer />
        </div>

        <div className="h-[2px] w-full max-w-[500px] lg:h-[500px] lg:w-[2px] rounded bg-black opacity-50" />

        <div className="flex flex-col items-center lg:w-full">
          <h2 className="font-main text-h2-mobile lg:text-h2-desktop mb-10 text-center">Cтати учасником проекту</h2>
          <Button variant="primary" rootClassNames="w-full">Приєднатись</Button>
        </div>
      </Container>
    </section>
  )
}
