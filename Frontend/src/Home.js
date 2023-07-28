import React from "react";
import { Link } from "react-router-dom";
import './Home.css';
function Home(){
 ;
  function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  
  
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }
  
    return(

        <div className="Home">
        <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <link rel="stylesheet" type="text/css" href="navbar.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary fixed-top">
          <a className="navbar-brand" href="#">Online Book Store  </a>
          <li className="but">
     <button className="openbtn" onClick={openNav}>&#9776;</button>
     </li>
          <button className="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
            <span className="navbar-toggler-close-icon">✕</span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                
              </li>
              <Link to="/Home">
              <button className="homeb">Home</button>
            </Link>
              
              <li className="nav-item">
                <a className="nav-link" href="#" style={{color: 'grey'}}>.</a>
              </li>
              <Link to="/search">
              <button className="homeb">Search</button>
            </Link>
            <li className="nav-item">
                <a className="nav-link" href="#" style={{color: 'grey'}}>.</a>
              </li>
              <Link to="/Books">
              <button className="homeb">Books</button>
            </Link>
              
              <li className="nav-item">
                <a className="nav-link" href="#" style={{color: 'grey'}}>.</a>
              </li>
              <Link to="/About">
              <button className="homeb">About</button>
            </Link>
              
              <li className="nav-item">
                <a className="nav-link" href="#" style={{color: 'grey'}}>.</a>
              </li>
              
             
              <li className="nav-item dropdown user-icon">
                
        
                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                
                  <a className="dropdown-item" href="#" style={{color: 'white'}}>SignUp</a>
                  <a className="dropdown-item" href="#" style={{color: 'white'}}>SignIn</a>
                </div>
              </li>
            </ul>
          </div>
          <div id="mySidepanel" className="sidepanel">
          
<a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>

            
<Link to="/Contact">
              <button className="homeb">Contact Us</button>
            </Link>
           

            <Link to="/feed">
              <button className="homeb">Feedback</button>
            </Link>

<Link to="/Login">
              <button className="homeb">Log out</button>
            </Link>
            
</div>
</nav>
 <img src="https://img.freepik.com/free-vector/online-books-library-e-book-reader-online-bookstore-shopping-concept-flat-icons-illustration-set_126523-478.jpg?w=2000" width = "1500" height = "755"></img>
 </div>
 );
}
export default Home;
