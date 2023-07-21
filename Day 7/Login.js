/*import React from "react";
import { Link } from "react-router-dom";
function Login(){
    return(
<div className="container">
        
        <form id="form">
          
          <h3>login</h3>
          
          <fieldset>
            <label htmlFor="phone">Email address:</label>
            <input type="email" name="email" id="email" required />
          </fieldset>
          <fieldset>
            <label htmlFor="phone">Password:</label>
            <input type="password" name="password" id="password" required />
          </fieldset>
          <fieldset>
            <button name="submit" type="submit" id="submit">Login</button>
          </fieldset>
          
          <div>
          <p className="copyright">Don't have an account?  <Link to="/Reg">
              Signup
            </Link></p>
            
          <a href='#' className="copyright">forgot password?</a>
          
        </div>
        </form>
      </div>
    );
}
export default Login;*/
import React, { useState } from 'react';
import './Login.css';
import { connect } from 'react-redux';
import { loginUser } from './actions';
import { Link } from 'react-router-dom';

function Login({ loginUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    loginUser(email, password);
  };

  return (
    <div className='log'>
    <div className="con">
      <form id="frm" onSubmit={handleLogin}>
        <h3>login</h3>
        <fieldset>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </fieldset>
        <fieldset>
        <Link to="/Home"><button name="submit" type="submit" id="submit">
            Login
          </button>
          </Link>
        </fieldset>
        <div>
          <p>
            Don't have an account? <Link to="/Reg">Signup</Link>
          </p>
          <a href="#" className="forgot-password">
            Forgot password?
          </a>
        </div>
      </form>
    </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  loginUser: (email, password) => dispatch(loginUser(email, password)),
});

export default connect(null, mapDispatchToProps)(Login);

