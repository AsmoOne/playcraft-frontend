import { Header } from '../../components/Header';
import { Intro } from './sections/Intro';

export const Landing = () => {
  return (
    <>
      <div className='font-main bg-intro-background bg-cover h-svh overflow-hidden'>
        <Header />
        <Intro />
      </div>
    </>
  )
}
