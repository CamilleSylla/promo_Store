import logo from './logo.svg';
import './App.css';
import Nav from './components/navigations/NavBAr/Nav';
import HeaderSlides from './components/slides/header/HeaderSlide';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <header>
        <Nav/>
        <HeaderSlides/>
      </header>
      <Home/>
    </div>
  );
}

export default App;
