import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './styles/App.css';
import Tarifs from './pages/Tarifs';
import Contact from './pages/Contact';
import Decouvrir from './pages/Decouvrir';
import logo from "./images/logo-yanis-quad.webp" 

function App() {

  return (
    <>
      <BrowserRouter>
      <Header logo={logo} />
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Tarifs' element={<Tarifs/>}/>
      <Route path='/Decouvrir' element={<Decouvrir/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='*' element={<Home/>}/>
      </Routes>
      <Footer logo={logo} />
      </BrowserRouter>

    </>
  );
}

export default App;
