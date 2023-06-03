import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/GlobalContext";

function Navbar() {
  const { favoriler, favorilereEkle, favorilerdenCikar } =
    useContext(AppContext);

  return (
    <div>
      <nav className="navbar  fixed-top  navbar-dark navbar-expand-lg bg-dark">
        <div className="container ">
          <Link className="navbar-brand" to="/">
            BAU BOOKS
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Kitap Listesi
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/favoriler">
                  Favoriler{" "}
                  <span className="position-absolute top-10 start-90 translate-middle badge rounded-pill bg-danger">
                    {favoriler.length}
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="falan" style={{ height: "50px" }}></div>
    </div>
  );
}

export default Navbar;
