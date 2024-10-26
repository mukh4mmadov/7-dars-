import React from "react";
import "../App.css";
import img1 from "../assets/logo.png";

function Home() {
  return (
    <div className="Container-1">
      <nav className="nav-list">
        <div className="logo">
          <img className="logo-img" src={img1} alt="" />
          <h1 className="logo-title">Brave</h1>
        </div>
        <ul className="nav-list1">
          <li className="nav-item">Templates</li>
          <li className="nav-item">Features</li>
          <li className="nav-item">Pricing</li>
          <li className="nav-item">Resources</li>
        </ul>
        <button className="nav-btn">Start Free Trial</button>
      </nav>

      <div className="container-2">
        <h2 className="site-title">Contact Us</h2>
        <h1 className="site-titleh">Say Hello! We’re always here to help.</h1>
        <p className="site-p">
          Interested in learning more about SmartMoving? Give us a call or send
          an email and one of our team members will be happy to assist you.
        </p>
        <div className="contact-cards">
          <div className="card">
            <div className="card-icon">📞</div>
            <h3 className="card-title">Call Us</h3>
            <p className="cart-p">+1 (214) 960 4130</p>
          </div>
          <div className="card">
            <div className="card-icon">📧</div>
            <h3 className="card-title">Email Us</h3>
            <p className="cart-p">hello@aiinfo.com</p>
          </div>
          <div className="card">
            <div className="card-icon">📍</div>
            <h3 className="card-title">Headquarters</h3>
            <p className="cart-p">
              12720 Hillcrest Road Suite 980, Dallas, TX 75230
            </p>
          </div>
        </div>
      </div>

      <footer className="footer">
        <h2 className="footer-title">
          Sign up for your free 14-day trial now!
        </h2>
        <button className="footer-btn">Get Started for free</button>
      </footer>
    </div>
  );
}

export default Home;
