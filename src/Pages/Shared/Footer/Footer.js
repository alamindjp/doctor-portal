import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="max-w-4xl p-5 mx-auto bg-cover bg-[url('/src/assets/images/footer.png')]">
      <div className="justify-center md:justify-between footer">
        <div>
          <span className="footer-title">SERVICES</span>
          <Link to="/" className="link link-hover">
            Emergency Checkup
          </Link>
          <Link to="/" className="link link-hover">
            Monthly Checkup
          </Link>
          <Link to="/" className="link link-hover">
            Weekly Checkup
          </Link>
          <Link to="/" className="link link-hover">
            Deep Checkup
          </Link>
        </div>
        <div>
          <span className="footer-title">ORAL HEALTH</span>
          <Link to="/" className="link link-hover">
            Fluoride Treatment
          </Link>
          <Link to="/" className="link link-hover">
            Cavity Filling
          </Link>
          <Link to="/" className="link link-hover">
            Teath Whitening
          </Link>
        </div>
        <div>
          <span className="footer-title">OUR ADDRESS</span>
          <Link to="/" className="link link-hover">
            New York - 101010 Hudson
          </Link>
        </div>
      </div>
      <div className="my-5 text-center">
        <p>Copyright {date} All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
