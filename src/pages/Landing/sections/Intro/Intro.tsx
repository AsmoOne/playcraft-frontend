import { useEffect, useState } from "react";
import { Button } from "../../../../components/Button"
import { Container } from "../../../../components/Layout/Container"
import { useBreakpoints } from "../../../../hooks/useBreakpoints";
import { STYLES } from "../../../../utils/constants";

type PropsT = {
  isLanding?: boolean;
  title?: string;
};

export const Intro = ({
  isLanding,
  title = "Таку сторінку не знайдено :(",
}: PropsT) => {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const { isLgScreen } = useBreakpoints();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsHeaderFixed(scrollTop > 150);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container rootClassNames={`${'lg:flex lg:justify-between items-center gap-10 h-full'} ${isHeaderFixed && 'mt-[130px]'}`}>
      <div className={`${isLanding ? 'w-auto' : 'w-full'} text-white md:mt-24 lg:mt-0`}>
        <h1 className={`${STYLES.H1} leading-[0.65] mb-4 ${!isLanding && 'text-center'}`}>{title}</h1>
        {isLanding && (
          <>
            <p className="text-2xl mb-[190px] md:mb-8 leading-tight">Якийсь коротенький текст для уточнення</p>

            <Button variant="primary" rootClassNames="w-full md:w-auto">
              Почати грати
            </Button>
          </>
        )}
      </div>

      {isLgScreen && isLanding ? (
        <img src="/assets/minecraft-player.png" alt="minecraft-player image" className="w-auto h-auto"/>
      ) : null}
    </Container>
  )
}
