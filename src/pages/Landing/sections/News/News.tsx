import { Container } from "../../../../components/Layout/Container"
import { NewsCard } from "../../../../components/NewsCard"

export const News = () => {
  return (
    <Container rootClassNames="flex flex-col gap-10">
      <NewsCard />
      <NewsCard />
      <NewsCard />
    </Container>
  )
}
