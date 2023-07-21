import React from "react";
import { Link } from "react-router-dom";
function Profile(){
    return(
        <div>
        <div className="navbar navbar-inverse navbar-fixed-top" role="navigation">
          
        </div>
        <div className="wrapper">
          <div className="profile">
            <div className="content">
              <h1>Edit Profile</h1>
              <form action>
                <fieldset>
                  <div className="grid-35">
                    <label htmlFor="avatar">Your Photo</label>
                  </div>
                  <div className="grid-65">
                    <span className="photo"/>
                    <input type="file" className="btn" />
                  </div>
                </fieldset>
                <fieldset>
                  <div className="grid-35">
                    <label htmlFor="fname">First Name</label>
                  </div>
                  <div className="grid-65">
                    <input type="text" id="fname" tabIndex={1} />
                  </div>
                </fieldset>
                <fieldset>
                  <div className="grid-35">
                    <label htmlFor="lname">Last Name</label>
                  </div>
                  <div className="grid-65">
                    <input type="text" id="lname" tabIndex={2} />
                  </div>
                </fieldset>
               
              
                <fieldset>
                  <div className="grid-35">
                    <label htmlFor="email">Email Address</label>
                  </div>
                  <div className="grid-65">
                    <input type="email" id="email" tabIndex={6} />
                  </div>
                </fieldset>
                <fieldset>
                  <div className="grid-35">
                    <label htmlFor="location">Location</label>
                  </div>
                  <div className="grid-65">
                    <input type="text" id="location" tabIndex={4} />
                  </div>
                </fieldset>
             
                <fieldset>
                  <div className="grid-35">
                    <label htmlFor="country">Country</label>
                  </div>
                  <div className="grid-65">
                    <input type="text" id="country" tabIndex={5} />
                  </div>
                </fieldset>
                
                
               
                
               
                <fieldset>
                  <Link to="/Home">Cancel</Link> 
                  <input type="submit" className="Btn" defaultValue="Save Changes" />
                </fieldset>
              </form>
            </div>
          </div>
        </div>
        {/* http://www.smashingmagazine.com/2013/08/08/release-livestyle-css-live-reload/ */}
      </div>
    );
}
export default Profile;