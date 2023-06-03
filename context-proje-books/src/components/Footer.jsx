import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="container">
        <footer className="py-3 my-4 bg-dark">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item ">
              <Link to="#" className="nav-link px-2 text-white">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link px-2 text-white">
                Features
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link px-2 text-white">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link px-2 text-white">
                FAQs
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link px-2 text-white">
                About
              </Link>
            </li>
          </ul>
          <p className="text-center text-white">© 2022 Company, Inc</p>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
