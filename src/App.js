import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Header from './Components/Header';
import Menu from './Components/Menu';
import Servicios from './Components/Servicios';
import Reserva from './Components/Reserva';
import Contactenos from './Components/Contactenos';
import Nosotros from './Components/Nosotros';
import Compras from './Components/Compras';
import Footer from './Components/Footer' ;
import "./app.css";


function App() {
  return (
    <Router>
      <Header/>
        <Switch>
            <Route exact path ="/" component={Menu}/>
            <Route exact path ="/servicios" component={Servicios}/>
            <Route exact path ="/servicios/reserva" component={Reserva}/>
            <Route exact path ="/contactenos" component={Contactenos}/>
            <Route exact path ="/nosotros" component={Nosotros}/>
            <Route exact path ="/compras" component={Compras}/>
        </Switch>
        <Footer/>
    </Router>
  );
}

export default App;
