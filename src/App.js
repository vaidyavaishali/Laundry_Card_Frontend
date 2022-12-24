import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './Landing_Page/LandingPage';
import Register from './Landing_Page/Register';
import './App.css';
import CancelAlert from './cancelAlertPopup/CancelAlert';
// import Popup from './OrderSuccessFullyPopup/popup';
import PastOrderPage from './pastOrderPage/PastOrder';
import PastOrderSummery from './PastOrderSummeryPage/PastOrderSummery';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path='/Register' element={<Register />} />
        <Route path="/PastOrderPage" element = {<PastOrderPage />}/>
        <Route path="/summery" element = {<PastOrderSummery />}/>
        <Route path="/cancel/alert" element = {<CancelAlert />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
