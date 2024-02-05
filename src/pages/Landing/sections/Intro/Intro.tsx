import { Button } from "../../../../components/Button"
import { Container } from "../../../../components/Layout/Container"
import { useBreakpoints } from "../../../../hooks/useBreakpoints";

export const Intro = () => {
  const { isLgScreen } = useBreakpoints();

  return (
    <Container rootClassNames="lg:flex lg:justify-between items-center gap-10">
      <div className="w-auto text-white md:mt-24 lg:mt-0">
        <h1 className="text-h1-mobile leading-[0.65] lg:text-h1-desktop mb-4">Глобальне оновлення</h1>
        <p className="text-2xl mb-[190px] md:mb-8 leading-tight">Якийсь коротенький текст для уточнення</p>

        <Button variant="primary" rootClassNames="w-full md:w-auto">
          Почати грати
        </Button>
      </div>
      {isLgScreen ? (
        <img src="/assets/minecraft-player.png" alt="minecraft-player image" className="w-auto h-auto"/>
      ) : null}
    </Container>
  )
}