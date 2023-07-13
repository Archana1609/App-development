import React from "react";
import { Link } from "react-router-dom";
function Login(){
    return(
       
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Document</title>
        <link href="main.css" rel="stylesheet" type="text/css" />
        <h1 className="h1-title">    </h1>
        <div className="form">
          <div className="a-group">
            <a href="#sign-in" className="a-sign-in">Login</a>
            <a href="#sign-up" className="a-sign-up">Register</a>
          </div>
          <div className="form-content">
            <div id="sign-in">
              <h1>  </h1>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <a href="#" className="frg-password">Forgot Password?</a>
             
            <Link to="/log">
              <button>Login</button>
            </Link>
            </div>
            <div id="sign-up">
              <h1>  </h1>
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
              <input type="email" placeholder="Email" />
              <input type="mobile number"placeholder="Mobile Number"/>
              <input type="country"placeholder="Country Name"/>
              <input type="password" placeholder="Password" />
              <input type="confirm"placeholder="confirm password"/>
             
              <Link to="/log">
              <button>Register</button>
            </Link>
            </div>
          </div>
        </div>
        
      </div>
    );
}
export default Login;