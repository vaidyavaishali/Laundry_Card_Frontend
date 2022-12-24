import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './Landing_Page/LandingPage';
import Register from './Landing_Page/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path='/Register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;