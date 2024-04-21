import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import AddEdit from './components/AddEdit';
import View from './components/View';
import HomeBody from './pages/HomeBody';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import Borrowers from './components/Borrowers';
import AboutPage from './pages/AboutPage';
import Contact from './pages/Contact';
import Investors from './pages/Investors';

const App = () => {
  return (
    <div className="App">

      <BrowserRouter >
        <Routes>
          <Route path="/" element={< HomeBody />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/update/:id" element={<AddEdit />} />
          <Route path="/view/:id" element={<View />} />
          <Route path="/borrowers" element={<Borrowers />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/investor" element={<Investors/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
