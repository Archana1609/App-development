import './App.css';
import './Books.css';
import Reg from './Reg';
import Login from './Login';
import Home from './Home';
import Payment from './Payment';
import './Payment.css';
import './Home.css';
import Cart from './Cart';
import Contact from './Contact';
import About from './About';
import './Cart.css';
import './Contact.css';
import './About.css';
import Books from './Books';
import './Success.css';
import {Routes,Route}from 'react-router-dom';
import Success from './Success';
import Profile from './Profile';
import './Profile.css';
import BookSearch from './BookSearch';
import './Search.css';
const App=()=>{
  return (
    <div className="app">
  <Routes>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Reg" element={<Reg/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/Books" element={<Books/>}/>
        <Route path="/Pay" element={<Payment/>}/>
        <Route path="/success" element={<Success/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/search" element={<BookSearch/>}/>
      </Routes>
    </div>
  );
}

export default App;
/* <Routes>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Reg" element={<Reg/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Cart" element={<Cart/>}/>
      </Routes>*/
      /*<Routes>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Reg" element={<Reg/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/Books" element={<Books/>}/>
        <Route path="/Pay" element={<Payment/>}/>
      </Routes>*/

