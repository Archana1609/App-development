/*import Home from './Home';
import Login from './Login';
import Reg from './Reg';
import Contact from './Contact';
import About from './About';
import Books from './Books';
import Cart from './Cart';
import BookSearch from './BookSearch';
import Payment from './Payment';
import Success from './Success';
//import {Routes,Route}from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App=()=>{
  return (
    
        <Router>
          <div>
            <Switch>
            <Route exact path="/Login" component={Login} />
        <Route path="/Home" component={Home} />
        <Route path="/Reg" component={Reg} />
        
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/Books" element={<Books/>}/>
        <Route path="/Pay" element={<Payment/>}/>
        <Route path="/success" element={<Success/>}/>
        <Route path="/search" element={<BookSearch/>}/>
        </Switch>
        </div>
      </Router>
    
  );
}

export default App;
*/
import React from 'react';
import {Routes,Route}from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Reg from './Reg';
import Contact from './Contact';
import About from './About';
import Books from './Books';
import Cart from './Cart';
import BookSearch from './BookSearch';
import Payment from './Payment';
import Success from './Success';
import Feedback from './Feedback';

const App=()=>{
  return (
    <div className="app">
    <Routes>
         <Route path="/Login" element={<Login/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/Reg" element={<Reg/>} />
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/Books" element={<Books/>}/>
        <Route path="/Pay" element={<Payment/>}/>
        <Route path="/success" element={<Success/>}/>
        <Route path="/search" element={<BookSearch/>}/>
        <Route path="/feed" element={<Feedback/>}/>
        </Routes>
    </div>
  );
}

export default App;
