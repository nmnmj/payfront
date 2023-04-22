import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Paymentsuccess from './components/Paymentsuccess';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/success" element={<Paymentsuccess />} />
        </Routes>

    </div>
  );
}

export default App;
