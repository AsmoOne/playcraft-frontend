import { Routes, Route } from 'react-router-dom';
import { Landing } from './pages/Landing';
import { Empty } from './pages/Empty';

import './styles/index.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="*" element={<Empty/>} />
    </Routes>
  )
}

export default App;
