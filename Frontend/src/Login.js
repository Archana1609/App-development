/*import React, { useState } from 'react';
import './Login.css';
import { connect } from 'react-redux';
import { loginUser } from './actions';
import { useNavigate, Link } from 'react-router-dom';*/

/*function Login({ loginUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (isValid(email, password)) {
      loginUser(email, password);
      navigate('/Home'); // Use navigate('/Home') to navigate to the "Home" screen after successful login
    } else {
      // Handle validation error (e.g., show an error message to the user)
      alert('Invalid email or password');
    }
    
  };

  // Sample validation function, you can replace it with your own validation logic
  const isValid = (email, password) => {
    // Perform your validation checks here and return true or false
    // For example, check if the email and password are not empty
    return email.trim() !== '' && password.trim() !== '';
  };*/

/*import axios from 'axios'; // Import Axios

function Login({ loginUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the backend API endpoint using Axios
      const response = await axios.post('http://localhost:8081/api/v1/auth/authenticate', { email, password });

      if (response.status === 200) {
        // Successful login
        loginUser(email, password);
        navigate('/Home');
      } else {
        // Handle validation error (e.g., show an error message to the user)
        alert('Invalid email or password');
      }
    } catch (error) {
      // Handle other errors (e.g., network error)
      console.error('Error during login:', error);
    }
  };
  

  return (
    <div className='log'>
      <div className="logcon">
        <form id="frm" onSubmit={handleLogin}>
          <h3 className='logh3'>Login</h3>
          <fieldset className='logfield'>
            <label className='loglabel'>Email address:</label>
            <input className='loginput'
              type="email"
              placeholder="Enter Your email"
              name="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </fieldset>
          <fieldset className='logfield'>
            <label className='loglabel'>Password:</label>
            <input className='loginput'
              type="password"
              placeholder="Enter Your password"
              name="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </fieldset>
          <fieldset className='logfield'>
            <button className='logbutton'>
              Login
            </button>
          </fieldset>
          <div>
            <p className='logp'>
              Don't have an account? <Link to="/Reg" ><button className='logsi'>Signup</button></Link>
            </p>
            <a href="#" className="logforgot-password">
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

export default connect(null, mapDispatchToProps)(Login);*/
import React, { useState } from 'react';
import './Login.css';
import axios from 'axios'; // Import Axios
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the backend API endpoint using Axios
      const response = await axios.post('http://localhost:8081/api/v1/auth/authenticate', { email, password });

      if (response.status === 200) {
        // Successful login
        navigate('/Home');
      } else {
        // Handle validation error (e.g., show an error message to the user)
        alert('Invalid email or password');
      }
    } catch (error) {
      // Handle other errors (e.g., network error)
      console.error('Error during login:', error);
    }
  };

  return (
    <div className='log'>
      <div className="logcon">
        <form id="frm" onSubmit={handleLogin}>
          <h3 className='logh3'>Login</h3>
          <fieldset className='logfield'>
            <label className='loglabel'>Email address:</label>
            <input className='loginput'
              type="email"
              placeholder="Enter Your email"
              name="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </fieldset>
          <fieldset className='logfield'>
            <label className='loglabel'>Password:</label>
            <input className='loginput'
              type="password"
              placeholder="Enter Your password"
              name="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </fieldset>
          <fieldset className='logfield'>
            <button className='logbutton'>
              Login
            </button>
          </fieldset>
          <div>
            <p className='logp'>
              Don't have an account? <Link to="/Reg" ><button className='logsi'>Signup</button></Link>
            </p>
            <a href="#" className="logforgot-password">
              Forgot password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
