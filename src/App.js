import logo from './logo.svg';
import './App.css';
import Nav from './components/navigations/NavBAr/Nav';
import HeaderSlides from './components/slides/header/HeaderSlide';
import Home from './components/Home/Home';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <header>
        <Nav/>
      </header>
      <HeaderSlides/>
      <Home/>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
