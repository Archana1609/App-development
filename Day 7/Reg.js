import React from "react";
import { Link } from "react-router-dom";
function Reg(){
    return(
      <div className="time">
 <div className="container">
        {/* form */}
        <form id="form" action method>
          {/* form heading */}
          <h3>signup</h3>
          {/* form inputs */}
          <fieldset>
            <label htmlFor="name">Your name:</label>
            <input type="text" id="name" tabIndex={1} required />
          </fieldset>
          <fieldset>
            <label htmlFor="phone">Email address:</label>
            <input type="email" required />
          </fieldset>
          <fieldset>
            <label htmlFor="phone">Password:</label>
            <input type="password" name="password" id="password" required />
          </fieldset>
          <fieldset>
            <label htmlFor="phone">Confirm password:</label>
            <input type="password" name="confirm_password" id="confirm_password" required />
          </fieldset>
          <fieldset>
            <button name="submit" type="submit" id="submit">Signup</button>
          </fieldset>
          {/* attribution */}
          <p className="copyright">Already have an account?
              <Link to="/Login">Login</Link></p>
        </form>
        
      </div>
      </div>
    );
}
export default Reg;