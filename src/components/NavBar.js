import React from "react";
// import img_1 from "./img/nj1.gif";
import { Link } from "react-router-dom";

const NavBar = (props) => {




  return (
    // {`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    <nav className={`navbar navbar-expand-lg fixed-top love ${props.winsiz > 991 ? (props.offset > 100 ? (props.mode === "light" ? "navbar-light stick_nav" : "navbar-dark stick_nav") : "navbar-dark") : "navbar-dark"}`}
      style={{
        background: props.mode === "dark" ? (props.offset > 100 ? "#000000" : "") : "",
        boxShadow: props.offset > 100 ? (props.mode === "dark" ? "0px 3px 15px 0px rgba(255, 255, 255, 0.3)" : "0px 3px 15px 0px rgba(0, 0, 0, 0.3)") : ""
      }}

    // box-shadow: 0px 3px 15px 0px rgba(255, 255, 255, 0.3);
    >
      {/* className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} */}
      {/* className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`} */}



      <div className="container-fluid">
        <Link className="navbar-brand ms-4 fw-bold" to="/">

          {/* <img src={img_1} width={`${props.offset > 100 ? "35" : "60"}`} height={`${props.offset > 100 ? "35" : "60"}`} className="mx-2" alt="..." style={{ transition: "all 0.3s ease" }} /> */}
          News Express
        </Link>
        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="toggler-icon top-bar"></span>
          <span className="toggler-icon middle-bar"></span>
          <span className="toggler-icon bottom-bar"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 menu-list">

            <li className="nav-item" ><Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
            {/* <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">About</Link></li> */}
            <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/business">Business</Link></li>
            <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/entertainment">Entertainment</Link></li>
            <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/general">General</Link></li>
            <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/health">Health</Link></li>
            <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/science">Science</Link></li>
            <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/sports">Sports</Link></li>
            <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/technology">Technology</Link></li>
          </ul>
          {/* <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label text-light" htmlFor="flexSwitchCheckDefault">Enable Dark mode</label>
            </div> */}

          <div className="poggleWrapper ">
            <input type="checkbox" className="dn" id="dn" onClick={props.toggleMode} />
            <label htmlFor="dn" className="poggle">
              <span className="poggle__handler">
                <span className="crater crater--1"></span>
                <span className="crater crater--2"></span>
                <span className="crater crater--3"></span>
              </span>
              <span className="star star--1"></span>
              <span className="star star--2"></span>
              <span className="star star--3"></span>
              <span className="star star--4"></span>
              <span className="star star--5"></span>
              <span className="star star--6"></span>
            </label>
          </div>



        </div>

      </div>

    </nav>


  );

}

export default NavBar;
