
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import PastOrderPage from './pastOrderPage/PastOrder';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PastOrderPage />
      </BrowserRouter>

    </div>
  );
}
// import PastOrderPage from './pastOrderPage/PastOrder';

export default App;
