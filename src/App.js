import logo from './logo.svg';
import './App.css';
import Nav from './components/navigations/NavBAr/Nav';
import HeaderSlides from './components/slides/header/HeaderSlide';
import Home from './components/Home/Home';
import Footer from './components/footer/Footer';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Logs/Login/Login';
import { useState } from 'react';

function App() {

  const [global, setGlobal] = useState({
    token:""
  })
  let token;
  function tokenExist (data) {
    setGlobal(...global, {token: data})
  }
  console.log(global);
  return (
    <div className="App">
      <header>
        <Nav/>
      </header>
      <Route render={({ location }) => (
            <Switch location={location}>
              <Route exact path='/' render={ () => (<Home token={tokenExist}/>)}/>
              <Route path='/login' component={Login}/>
            </Switch>
      )} />
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
