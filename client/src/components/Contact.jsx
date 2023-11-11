import React from "react";
import contact from '../images/contact.jpg'
import Navbar from "./Navbar";
const Contact = (props) => {
  document.title = "Sharmita Mondal | Contact";
  return (

    <>
    <div className="ccontact">
      <Navbar/>
      <div className="container  contact d-flex justify-content-between col-lg-8 col-sm-12 p-3">
          <div className="image">
            <img src={contact} alt=""  className="col-sm-4 col-lg-8" />
          </div>
          <div className="contactform col-sm-12 col-lg-6">
          <form className="mt-5 col-sm-12" action="https://formspree.io/f/mbjvbypz"
  method="POST">
   <div className="mb-3 col-sm-12">
    <label for="Name" className="form-label">Name</label>
    <input name="name" type="text" className="form-control" id="Name" autoComplete="off"/>
  </div>
  <div className="mb-3">
    <label for="email" className="form-label">Email</label>
    <input name="email" type="email" className="form-control" id="email" autoComplete="off"/>
  </div>
  <div className="form-floating">
  <textarea name="message" className="form-control mb-3" placeholder="Leave a comment here" id="floatingTextarea2">{props.data}</textarea>
  <label for="floatingTextarea2">send message...</label>
</div>
  <input type="submit" className="submit" id="submit" value="Send"/>
</form>
          </div>
      </div>
      </div>
    </>

  );
}
export default Contact;