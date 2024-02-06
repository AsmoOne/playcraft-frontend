import { Header } from '../../components/Header';
import { Intro } from './sections/Intro';
import { News } from './sections/News';
import { Players } from './sections/Players';

export const Landing = () => {
  return (
    <>
      <div className='font-main bg-intro-background bg-bottom bg-cover h-svh overflow-hidden'>
        <Header />
        <Intro />
      </div>
      <div className='flex justify-between'>
        <News />
        <div className='flex flex-col gap-20'>
          <Players />
          <Players />
        </div>
      </div>
    </>
  )
}
