// import logo from './logo.svg';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import CancelAlert from './cancelAlertPopup/CancelAlert';
// import Popup from './OrderSuccessFullyPopup/popup';
import PastOrderPage from './pastOrderPage/PastOrder';
import PastOrderSummery from './PastOrderSummeryPage/PastOrderSummery';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element = {<PastOrderPage />}/>
        <Route path="/summery" element = {<PastOrderSummery />}/>
        <Route path="/cancel/alert" element = {<CancelAlert />}/>
        {/* <Route path="/success" element = {<Popup />}/> */}
        
      </Routes>

    </div>
  );
}

export default App;
