import logo from './logo.svg';
import './App.css';
import Nav from './components/navigations/NavBAr/Nav';
import HeaderSlides from './components/slides/header/HeaderSlide';
import Home from './components/Home/Home';
import Footer from './components/footer/Footer';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Logs/Login/Login';
import { useState } from 'react';
import { ItemProvider } from './context/ItemContext';
import Register from './components/Logs/Register/Register';
import { UserProvider } from './context/UserContext';
import Shop from './components/Shop/Shop';
import Bracket from './components/bracket/Bracket';



function App() {

  return (
    <ItemProvider>
      <UserProvider>
    <div className="App">
      <header>
        <Nav/>
      </header>
      <Route render={({ location }) => (
            <Switch location={location}>
              <Route exact path='/' render={ () => (<Home/>)}/>
              <Route path='/login' component={Login}/>
              <Route path='/register' component={Register}/>
              <Route path='/shop' component={Shop}/>
              <Route path='/panier' component={Bracket}/>
            </Switch>
      )} />
      <footer>
        <Footer/>
      </footer>
    </div>
    </UserProvider>
    </ItemProvider>
  );
}

export default App;
