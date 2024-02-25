import { Routes, Route, useLocation } from 'react-router-dom';

import { Header } from './components/Header';
import { Intro } from './pages/Landing/sections/Intro';
import { Footer } from './pages/Landing/sections/Footer';

import { routes, titles } from './utils/routes';

import './styles/index.css';

function App() {
  const location = useLocation();

  const isLanding = location.pathname === '/';

  return (
    <>
      <div className='font-main bg-intro-background bg-bottom bg-cover h-svh overflow-hidden flex flex-col'>
        <Header />
        <Intro isLanding={isLanding} title={titles[location.pathname as keyof typeof titles]} />
      </div>

      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>

      <Footer />
    </>
  )
}

export default App;
