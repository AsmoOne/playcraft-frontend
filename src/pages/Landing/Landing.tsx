import { Header } from '../../components/Header';
import { Intro } from './sections/Intro';
import { News } from './sections/News';

export const Landing = () => {
  return (
    <>
      <div className='font-main bg-intro-background bg-bottom bg-cover h-svh overflow-hidden'>
        <Header />
        <Intro />
      </div>

      <News />
    </>
  )
}
