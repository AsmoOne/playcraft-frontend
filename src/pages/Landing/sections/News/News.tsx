import { Container } from "../../../../components/Layout/Container";
import { NewsCard } from "../../../../components/NewsCard";

export const News = () => {
  return (
    <Container rootClassNames="-mt-15 md:pt-20">
      <h2 className="text-h2-mobile font-main mb-7 md:mb-10 md:text-h2-desktop">
        Останні новини
      </h2>

      <div className="flex flex-col gap-10">
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </Container>
  )
}
