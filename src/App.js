import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import HomeHero from './pages/HomeBody';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const App = () => {
  return (
    <div className="App">
      <BrowserRouter >
        <Routes>
          <Route path="/" element={< HomeHero/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
