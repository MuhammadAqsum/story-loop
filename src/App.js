
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Storysection from "./components/Storysection";
import Pricing from "./components/Pricing";
import FreshContent from "./components/FreshContent";
import Slidercomponent from './components/Slider';
import Content from './components/Content';
import Profile from './components/Profile';
import File from './components/File';
import Collections from './components/Collections';
import Recipts from './components/Recipts';
import Cart from './components/Cart';
import Purchases from './components/Purchases';
import Price from './components/Price';
function App() {
  return (
    <div className="App">

<Router>
          <Routes>
            <Route path="/" element={<><Header/><Slidercomponent/><Content/> <FreshContent/><Pricing/><Storysection/><Footer/></>} />
            <Route path="/profile" element={<><Header/><Profile/><Footer/></>} />
            <Route path="/files" element={<><Header/><File/><Footer/></>} />
            <Route path="/collections" element={<><Header/><Collections/><Footer/></>} />
            <Route path="/recipts" element={<><Header/><Recipts/><Footer/></>} />
            <Route path="/cart" element={<><Header/><Cart/><Footer/></>} />
            <Route path="/purchases" element={<><Header/><Purchases/><Footer/></>} />
            <Route path="/pricing" element={<><Header/><Price/><Footer/></>} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
