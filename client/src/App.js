import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';


import Admin from './pages/Admin';
import Auth from './pages/Auth';
import Bascket from './pages/Bascket';
import DevicePages from './pages/DevicePages';
import Shop from './pages/Shop';


function App() {
  return (
        <Routes>
            <Route path="/admin" element={<Admin />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/bascket" element={<Bascket />} />
            <Route path="/device" element={<DevicePages />} />
            <Route path="/shop" element={<Shop />} />
        </Routes>
        
  );
}

export default App;
