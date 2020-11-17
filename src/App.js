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
import Bracket from './components/bracket/Bracket';
import Shop from './components/Shop/Views/Femme/Shop';
import User from './components/User/User'
import { TokenProvider } from './context/TokenContext';
import { IsLoggedProvider } from './context/IsLogged';


function App() {

  return (
    <ItemProvider>
      <UserProvider>
        <TokenProvider>
          <IsLoggedProvider>
          <div className="App">
            <header>
              <Nav />
            </header>
            <Route render={({ location }) => (
              <Switch location={location}>
                <Route exact path='/' render={() => (<Home />)} />
                <Route path='/login' render={() => (<Login />)} />
                <Route path='/register' component={Register} />
                <Route exact path='/shop' render={() => (<Shop />)} />
                <Route path='/panier' component={Bracket} />
                <Route path='/user' component={User} />
              </Switch>
            )} />
            <footer>
              <Footer />
            </footer>
          </div>
          </IsLoggedProvider>
        </TokenProvider>
      </UserProvider>
    </ItemProvider>
  );
}

export default App;
