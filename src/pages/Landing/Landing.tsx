import { Header } from '../../components/Header';
import { Container } from '../../components/Layout/Container';
import { Intro } from './sections/Intro';
import { News } from './sections/News';
import { Players } from './sections/Players';
import { BestWorks } from './sections/BestWorks';
import { Conclusion } from './sections/Conclusion';
import { Footer } from './sections/Footer';

export const Landing = () => {
  return (
    <>
      <div className='font-main bg-intro-background bg-bottom bg-cover h-svh overflow-hidden'>
        <Header />
        <Intro />
      </div>

      <Container rootClassNames='flex flex-col xl:flex-row justify-between md:pt-20 gap-9 xl:gap-20'>
        <News />

        <div className='flex flex-col gap-20'>
          <Players title='Топ гравців' />
          <Players title='Топ донатерів' />
        </div>
      </Container>

      <BestWorks />

      <Conclusion />

      <Footer />
    </>
  )
}
