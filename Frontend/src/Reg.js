import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Reg.css'; // Assuming you have a CSS file named "Reg.css" for styling

function Reg() {
    const navigate = useNavigate();
    const [signupName, setSignupName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSignup = (e) => {
        e.preventDefault();
        if (signupName.trim() === '') {
          alert('Please enter a  name.');
          return;
        }
        if (email.trim() === '' || password.trim() === '') {
            alert('Please enter valid signup credentials.');
            return;
          }
          navigate('/Login');
        };

  return (
    <div className="signup">
      <div className="sign">
      
        <form id="form" onSubmit={handleSignup}>
         
          <h3 className="signh3">Signup</h3>
         
          <fieldset className="signfield">
            <label className="signlabel">Your name:</label>
            <input
            className="signinput"
            type="text"
            placeholder="Enter Your Name"
            value={signupName}
            onChange={(e) => setSignupName(e.target.value)}
            required
          />
          </fieldset>
          <fieldset className='signfield'>
            <label className='signlabel'>Email address:</label>
            <input className='signinput'
              type="email"
              placeholder="Enter Your email"
              name="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </fieldset>
          <fieldset className='signfield'>
            <label className='signlabel'>Password:</label>
            <input className='signinput'
              type="password"
              placeholder="Enter Your password"
              name="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </fieldset>
          
          <fieldset className="signfield">
            <button className="signbutton">Signup</button>
          </fieldset>
         
          <p className="signp">Already have an account? <Link to="/Login"><button className="buttonl">Login</button></Link></p>
        </form>
      </div>
    </div>
  );
}

export default Reg;

/*import React, { useState } from 'react';
import './Reg.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
function Reg () {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage,setErrorMessage]=useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!name) {
      setErrorMessage('Please enter your name.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (password.length < 6) {
      setErrorMessage('Password should be at least 6 characters long.');
      return;
    }
    try {
      const response = await axios.post("http://localhost:8081/api/v1/auth/register", {
        name,
        email,
        password,
      });

      if (response.status === 200) {
       
        setName('');
        setEmail('');
        setPassword('');
      }
      navigate('/Login');
    } catch (error) {
      console.error('Error: ', error);
    }
    
  };


  return (
    <div className='signup'>
      <div className='sign'>
        <form id="form" onSubmit={handleSignup}>

          <h3 className='signh3'>Sign Up</h3>
          <div className='in'>
 {errorMessage && <p className="error-message">{errorMessage}</p>}


          <fieldset className="signfield">
            <label className="signlabel">Name</label>
            <input
   className="in"
   type="text"
   placeholder="Name"
   value={name}
   onChange={(e) => setName(e.target.value)}
   required
 />

          </fieldset>
          <br></br>
            <fieldset className="signfield">
            <label className="signlabel">Email Address</label>
            <input
   className="in"
   type="email"
   placeholder="Email"
   value={email}
   onChange={(e) => setEmail(e.target.value)}
   required
 />

            </fieldset>
            <br></br>
            <fieldset className="signfield">
            <label className="signlabel">Password</label>
            <input
   className="in"
   type="password"
   placeholder="Password"
   value={password}
   onChange={(e) => setPassword(e.target.value)}
   required
 />

            </fieldset>
            <br></br>
            </div>
            <div className='up'>

          <button className="signbutton" type='submit'>Sign Up</button></div>
          <p className="signp">
          Already registered <Link to="/Login"><button className="buttonl">Login</button></Link></p>
        </form>
      </div>
    </div>
  );

}
export default Reg;*/
