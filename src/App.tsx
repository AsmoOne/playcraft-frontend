import { Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Intro } from './pages/Landing/sections/Intro';
import { Footer } from './pages/Landing/sections/Footer';

import { Empty } from './pages/Empty';
import { Landing } from './pages/Landing';
import { Rules } from './pages/Rules';

import './styles/index.css';

function App() {
  const location = useLocation();

  const isLanding = location.pathname === '/';

  const titles = {
    '/': 'Глобальне оновлення',
    '/rules': 'Правила'
  }

  return (
    <>
      <div className='font-main bg-intro-background bg-bottom bg-cover h-svh overflow-hidden flex flex-col'>
        <Header />
        <Intro isLanding={isLanding} title={titles[location.pathname as keyof typeof titles]} />
      </div>

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<Empty/>} />
        <Route path="/rules" element={<Rules/>} />
      </Routes>

      <Footer />
    </>
  )
}

export default App;
