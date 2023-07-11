import React from "react";
function Home(){
    return(
        <div>
        <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <link rel="stylesheet" type="text/css" href="navbar.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary fixed-top">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
            <span className="navbar-toggler-close-icon">✕</span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#" style={{color: 'white'}}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{color: 'white'}}>About</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" style={{color: 'white'}} id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Services
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#" style={{color: 'white'}}>Service 1</a>
                  <a className="dropdown-item" href="#" style={{color: 'white'}}>Service 2</a>
                  <a className="dropdown-item" href="#" style={{color: 'white'}}>Other Services</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{color: 'white'}}>Contact</a>
              </li>
              <li className="nav-item dropdown user-icon">
                <a className="nav-link" href="#" style={{color: 'rgb(240, 233, 233)'}} id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="fa fa-user fa-bounce" />
                </a>
                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                  <a className="dropdown-item" href="#" style={{color: 'white'}}>SignUp</a>
                  <a className="dropdown-item" href="#" style={{color: 'white'}}>SignIn</a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
}
export default Home;
