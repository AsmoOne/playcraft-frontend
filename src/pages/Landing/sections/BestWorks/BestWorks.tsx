import { Container } from "../../../../components/Layout/Container";
import { MemoizedScreenshotCard } from "../../../../components/ScreenshotCard";

import { STYLES } from "../../../../utils/constants";
import { works } from "../../../Screenshots/works";

export const BestWorks = () => {
  const lastWorks = works.slice(0, 5);

  return (
    <Container rootClassNames="pt-20">
      <h2 className={`${STYLES.H2} mb-7 md:mb-10`}>
        Найкращі роботи
      </h2>

      <div className="flex flex-wrap gap-16 lg:justify-center">
        {lastWorks.map((work, index) => (
          <MemoizedScreenshotCard key={`${index}-${work.url}`} work={work} index={index} />
        ))}
      </div>
    </Container>
  )
}
