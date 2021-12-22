import React, { useState } from "react";
// import img_1 from "./img/nj1.gif";
import { Link } from "react-router-dom";

const NavBar = props => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light rounded">
            <Link class="navbar-brand text-info font-weight-bolder" to="/">
                {/* <img src={Logo} alt="Logo" width="36" height="36" className="vertical-align-middle" /> */}
                <span className="">Discounter</span>
            </Link>
            <button class="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarsExample09">
                <li className="nav-item"> <Link className="nav-link text-info" to="/">Support</Link></li>
                {/* <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/business">Business</Link></li> */}
                <li className="nav-item"> <Link className="nav-link text-info" to="/sports" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>Login</Link></li>
                <li className="nav-item"> <Link to="/business" className="btn btn-sm btn-info nav-link text-white" >Request demo</Link></li>
            </div>
        </nav>
    );
}

export default NavBar;
