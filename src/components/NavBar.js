import React, { Component } from "react";
import img_1 from "./img/nj1.gif";
import { Link } from "react-router-dom";

export class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={img_1} width="60" height="60" className="mx-2" alt="..." />
            News Express
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>

              {/* <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">About</Link></li> */}
              <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/business">Business</Link></li>
              <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/entertainment">Entertainment</Link></li>
              <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/general">General</Link></li>
              <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/health">Health</Link></li>
              <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/science">Science</Link></li>
              <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/sports">Sports</Link></li>
              <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/technology">Technology</Link></li>
            </ul>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label text-light" htmlFor="flexSwitchCheckDefault">Enable Dark mode</label>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
