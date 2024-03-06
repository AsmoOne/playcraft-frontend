import { Container } from "../../components/Layout/Container";
import { MemoizedScreenshotCard } from "../../components/ScreenshotCard";
import { works } from "./works";

export const Screenshots = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-10">
        {works.map((work, index) => (
          <MemoizedScreenshotCard key={work.url} work={work} index={index} />
        ))}
      </div>
    </Container>
  )
}
