import { Button } from "../../../../components/Button";
import { NewsCard } from "../../../../components/NewsCard";

export const News = () => {
  return (
    <section className="-mt-15 md:mt-0 w-full max-w-[680px]">
      <h2 className="text-h2-mobile font-main mb-7 md:mb-10 md:text-h2-desktop">
        Останні новини
      </h2>

      <div className="flex flex-col gap-10 mb-8">
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>

      <Button variant="primary">
        Переглянути більше
      </Button>
    </section>
  )
}
