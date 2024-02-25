import { Container } from '../../components/Layout/Container';
import { News } from './sections/News';
import { Players } from './sections/Players';
import { BestWorks } from './sections/BestWorks';
import { Conclusion } from './sections/Conclusion';

export const Landing = () => {
  return (
    <>
      <Container rootClassNames='flex flex-col xl:flex-row justify-between md:pt-20 gap-9 xl:gap-20'>
        <News />

        <div className='flex flex-col gap-20'>
          <Players title='Топ гравців' />
          <Players title='Топ донатерів' />
        </div>
      </Container>

      <BestWorks />

      <Conclusion />
    </>
  )
}
