import React, { useState } from "react";
// import img_1 from "./img/nj1.gif";
import { Link } from "react-router-dom";

const NavBar = (props) => {

  const [contcon, changeCon] = useState("Country/in");
  function changeCountrytag(nm) {
    changeCon(nm);
  }

  // changeCountrytag("Country/in")




  return (
    // {`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    <nav className={`navbar navbar-expand-lg fixed-top love ${props.change ? ("bg-dark navbar-dark") : (props.winsiz > 991 ? (props.offset > 100 ? (props.mode === "light" ? "navbar-light stick_nav" : "navbar-dark stick_nav") : "navbar-dark") : "navbar-dark")}`}
      style={{
        background: props.mode === "dark" ? (props.offset > 100 ? "#000000" : "") : "",
        boxShadow: props.offset > 100 ? (props.mode === "dark" ? "0px 1px 10px 0px rgba(255, 255, 255, 0.2)" : "0px 3px 15px 0px rgba(0, 0, 0, 0.3)") : ""
      }}
    >






      <div className="container-fluid">
        {/* <div className="container-fluid">
          <div className="row">
            <div className="col-10 text-center"> */}
        <Link className={`navbar-brand ${props.winsiz > 991 ? "ms-4" : ""} fw-bold`} to="/" style={{ marginLeft: (props.winsiz - 161) / 2 }}>

          {/* <img src={img_1} width={`${props.offset > 100 ? "35" : "60"}`} height={`${props.offset > 100 ? "35" : "60"}`} className="mx-2" alt="..." style={{ transition: "all 0.3s ease" }} /> */}
          News Express
        </Link>
        {/* </div> */}
        {/* <div className="col-2 text-end"> */}
        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="toggler-icon top-bar"></span>
          <span className="toggler-icon middle-bar"></span>
          <span className="toggler-icon bottom-bar"></span>
        </button>
        {/* </div>
          </div>
        </div> */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 menu-list">
            <li className="nav-item dropdown">
              <button className="nav-link dropdown-toggle" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                {contcon}
              </button>
              <ul className={`dropdown-menu dropdown-menu-${props.mode === "light" ? "light" : "dark"}`} aria-labelledby="navbarDropdown">
                <li>
                  <div className="container">
                    <div className="row row_drop">
                      <div className="col-6">
                        <Link className={`dropdown-item dropdown-item-${props.mode === "light" ? "light" : "dark"}`} onClick={() => { changeCountrytag("Country/in"); props.changeFun(1); props.changeCountry("in"); }} to="/general_1">India</Link>
                      </div>
                      <div className="col-6">
                        <Link className={`dropdown-item dropdown-item-${props.mode === "light" ? "light" : "dark"}`} onClick={() => { changeCountrytag("Country/ru"); props.changeFun(1); props.changeCountry("ru"); }} to="/general_2">Russia</Link>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="container">
                    <div className="row row_drop">
                      <div className="col-6 ">
                        <Link className={`dropdown-item dropdown-item-${props.mode === "light" ? "light" : "dark"}`} onClick={() => { changeCountrytag("Country/uk"); props.changeFun(1); props.changeCountry("gb"); }} to="/general_3">UK</Link>
                      </div>
                      <div className="col-6">
                        <Link className={`dropdown-item dropdown-item-${props.mode === "light" ? "light" : "dark"}`} onClick={() => { changeCountrytag("Country/us"); props.changeFun(1); props.changeCountry("us"); }} to="/general_4">USA</Link>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="container">
                    <div className="row row_drop">
                      <div className="col-6">
                        <Link className={`dropdown-item dropdown-item-${props.mode === "light" ? "light" : "dark"}`} onClick={() => { changeCountrytag("Country/cn"); props.changeFun(1); props.changeCountry("cn"); }} to="/general_5">China</Link>
                      </div>
                      <div className="col-6">
                        <Link className={`dropdown-item dropdown-item-${props.mode === "light" ? "light" : "dark"}`} onClick={() => { changeCountrytag("Country/jp"); props.changeFun(1); props.changeCountry("jp"); }} to="/general_6">Japan</Link>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="container">
                    <div className="row row_drop">
                      <div className="col-6">
                        <Link className={`dropdown-item dropdown-item-${props.mode === "light" ? "light" : "dark"}`} onClick={() => { changeCountrytag("Country/fr"); props.changeFun(1); props.changeCountry("fr"); }} to="/general_7">France</Link>
                      </div>
                      <div className="col-6">
                        <Link className={`dropdown-item dropdown-item-${props.mode === "light" ? "light" : "dark"}`} onClick={() => { changeCountrytag("Country/uae"); props.changeFun(1); props.changeCountry("ae"); }} to="/general_8">UAE</Link>
                      </div>
                    </div>
                  </div>
                </li>

                {/* <li><button className={`dropdown-item dropdown-item-${props.mode === "light" ? "light" : "dark"}`} href="#">Something else here</button></li> */}
                {/* <li><button className={`dropdown-item dropdown-item-${props.mode === "light" ? "light" : "dark"}`} href="#">Something else here</button></li>
                <li><button className={`dropdown-item dropdown-item-${props.mode === "light" ? "light" : "dark"}`} href="#">Something else here</button></li>
                <li><button className={`dropdown-item dropdown-item-${props.mode === "light" ? "light" : "dark"}`} href="#">Something else here</button></li>
                <li><button className={`dropdown-item dropdown-item-${props.mode === "light" ? "light" : "dark"}`} href="#">Something else here</button></li>
                <li><button className={`dropdown-item dropdown-item-${props.mode === "light" ? "light" : "dark"}`} href="#">Something else here</button></li> */}
              </ul>

            </li>
            <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/business" onClick={() => props.changeFun(1)}>Business</Link></li>
            <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/entertainment" onClick={() => props.changeFun(1)}>Entertainment</Link></li>
            <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/health" onClick={() => props.changeFun(1)}>Health</Link></li>
            <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/science" onClick={() => props.changeFun(1)}>Science</Link></li>
            <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/sports" onClick={() => props.changeFun(1)}>Sports</Link></li>
            <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/technology" onClick={() => props.changeFun(1)}>Technology</Link></li>
            <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/about" onClick={() => props.changeFun(0)}>About</Link></li>
            <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/contact" onClick={() => props.changeFun(0)}>Contact</Link></li>
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
              <span className="star star--7"></span>
              <span className="star star--8"></span>
            </label>
          </div>



        </div>

      </div>

    </nav>


  );

}

export default NavBar;
