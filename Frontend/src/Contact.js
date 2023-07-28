import React from "react";
import './Contact.css';
function Contact(){
    return(
        <section className="contact">
        <div className="cont container">
          <div className="contact-text">
            <p className="conp">Contact Us</p>
            <h6 className="conh6">Phone number</h6>
            <p className="address">
              +913217765234
            </p>
            <h6 className="conh6">Email</h6>
            <p className="mail">ebooks@gmail.com</p>
          </div>
          <div className="contact-form">
            <form>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" required />
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" required />
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" cols={30} rows={5} required defaultValue={""} />
              <button className="sub">Submit</button>
            </form>
          </div>
        </div>
      </section>
    );
}
export default Contact;