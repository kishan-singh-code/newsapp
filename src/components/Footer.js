import React from "react";
import { Link } from "react-router-dom";

const Footer = (props) => {
    // const [change, changeAbout] = useState(false);
    // function props.changeFun(i) {
    //     // let i = 0;
    //     if (i === 0) { changeAbout(true); }
    //     else { changeAbout(false); }
    // }

    // <li><Link to="/business" onClick={() => props.changeFun(1)}>Business</Link></li>
    // <li><Link to="/entertainment" onClick={() => props.changeFun(1)}>Entertainment</Link></li>
    // <li><Link to="/health" onClick={() => props.changeFun(1)}>Health</Link></li>
    // <li><Link to="/science" onClick={() => props.changeFun(1)}>Science</Link></li>
    // <li><Link to="/sports" onClick={() => props.changeFun(1)}>Sports</Link></li>
    // <li><Link to="/technology" onClick={() => props.changeFun(1)}>Technology</Link></li>
    // <li><Link to="/about" onClick={() => props.changeFun(0)}>About</Link></li>  
    return (
        <div>
            <div className={`footer-dark text-${props.mode === "light" ? "dark" : "white"}`} style={{
                backgroundColor: props.mode === "dark" ? "#262b30" : "#d7e6f5",
            }}>
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-6 col-sm-6 col-md-3 item">
                                {/* <h3>Services</h3> */}
                                <ul>
                                    <li><Link to="/" onClick={() => props.changeFun(1)}>Home</Link></li>
                                    <li><Link to="/business" onClick={() => props.changeFun(1)}>Business</Link></li>
                                    <li><Link to="/entertainment" onClick={() => props.changeFun(1)}>Entertainment</Link></li>
                                    <li><Link to="/health" onClick={() => props.changeFun(1)}>Health</Link></li>
                                </ul>
                            </div>
                            <div className="col-6 col-sm-6 col-md-3 item">
                                {/* <h3>About</h3> */}
                                <ul>
                                    <li><Link to="/about" onClick={() => props.changeFun(0)}>About</Link></li>
                                    <li><Link to="/sports" onClick={() => props.changeFun(1)}>Sports</Link></li>
                                    <li><Link to="/technology" onClick={() => props.changeFun(1)}>Technology</Link></li>
                                    <li><Link to="/science" onClick={() => props.changeFun(1)}>Science</Link></li>
                                </ul>
                            </div>
                            <div className="col-md-6 item text">
                                <h3>Company Name</h3>
                                <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
                            </div>
                            <div className="col item social">
                                <Link onClick={() => props.changeFun(1)} to="/" style={{ boxShadow: props.mode === "light" ? "0 2px 20px rgb(0 0 0 / 70%)" : "0 2px 15px rgb(242 243 245 / 30%)" }}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" style={{
                                        color: props.mode === "dark" ? "white" : "black",
                                    }} />
                                </svg></Link>
                                <Link onClick={() => props.changeFun(1)} to="/" style={{ boxShadow: props.mode === "light" ? "0 2px 20px rgb(0 0 0 / 70%)" : "0 2px 15px rgb(242 243 245 / 30%)" }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                                    <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" style={{
                                        color: props.mode === "dark" ? "white" : "black",
                                    }} />
                                </svg></Link>
                                <Link onClick={() => props.changeFun(1)} to="/" style={{ boxShadow: props.mode === "light" ? "0 2px 20px rgb(0 0 0 / 70%)" : "0 2px 15px rgb(242 243 245 / 30%)" }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" style={{
                                        color: props.mode === "dark" ? "white" : "black",
                                    }} />
                                </svg></Link>
                                <Link onClick={() => props.changeFun(1)} to="/" style={{ boxShadow: props.mode === "light" ? "0 2px 20px rgb(0 0 0 / 70%)" : "0 2px 15px rgb(242 243 245 / 30%)" }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" style={{
                                        color: props.mode === "dark" ? "white" : "black",
                                    }} />
                                </svg></Link>
                                <Link onClick={() => props.changeFun(1)} to="/" style={{ boxShadow: props.mode === "light" ? "0 2px 20px rgb(0 0 0 / 70%)" : "0 2px 15px rgb(242 243 245 / 30%)" }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-discord" viewBox="0 0 16 16">
                                    <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" style={{
                                        color: props.mode === "dark" ? "white" : "black",
                                    }} />
                                </svg></Link>
                            </div>
                        </div>
                        <p className="copyright">Kishan Singh © 2021</p>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Footer
