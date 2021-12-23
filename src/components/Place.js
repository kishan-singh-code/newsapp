import React from "react";
import img_1 from "./img/test.webp";

const Place = (props) => {
    const mystyle_last = {
        width: "6rem",
        height: "1.9rem",
        borderRadius: "25px",
        backgroundImage: "linear-gradient(270deg, #00dbde, #fc00ff)",
    };

    const i = props.i;
    const numbers = [i];
    for (let j = 0; j < i; j++) {
        numbers[j] = j;
    }
    // console.log(numbers);

    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-3 g-4 mar_top">
                {numbers.map((number) => {
                    return (
                        <div key={number + "1"}>
                            <div
                                key={number + "2"}
                                className="card h-100"
                                aria-hidden="true"
                                style={{ cursor: "wait" }}
                            >
                                <div
                                    key={number + "3"}
                                    className="pill_red"
                                    style={{ zIndex: "1", cursor: "wait" }}
                                >
                                    <span
                                        key={number + "4"}
                                        className="badge rounded-pill pill_light bg-danger"
                                    >
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </span>
                                </div>
                                <img
                                    key={number + "5"}
                                    src={img_1}
                                    className="card-img-top"
                                    alt="..."
                                />
                                <div key={number + "6"} className="card-body">
                                    <span
                                        key={number + "7"}
                                        className="placeholder col-2 bg-primary mb-3"
                                    ></span>
                                    <h5
                                        key={number + "8"}
                                        className="card-title placeholder-glow"
                                    >
                                        <span
                                            key={number + "9"}
                                            className="placeholder col-4 mt-1"
                                        ></span>
                                        <span
                                            key={number + "10"}
                                            className="placeholder col-7 mt-1 ms-1"
                                        ></span>
                                        <span
                                            key={number + "11"}
                                            className="placeholder col-7 mt-2"
                                        ></span>
                                    </h5>
                                    <p
                                        key={number + "12"}
                                        className="card-text  placeholder-wave mt-3"
                                    >
                                        <span
                                            key={number + "13"}
                                            className="placeholder col-7"
                                        ></span>
                                        <span
                                            key={number + "14"}
                                            className="placeholder col-4 ms-1"
                                        ></span>
                                        <span
                                            key={number + "15"}
                                            className="placeholder col-4 mt-1"
                                        ></span>
                                        <span
                                            key={number + "16"}
                                            className="placeholder col-6 mt-1 ms-1"
                                        ></span>
                                        <span
                                            key={number + "17"}
                                            className="placeholder col-8 mt-1"
                                        ></span>
                                    </p>
                                    <div
                                        key={number + "18"}
                                        className="user placeholder-wave"
                                        style={{ marginTop: "2rem" }}
                                    >
                                        <img key={number + "19"} src={img_1} alt="user" />
                                        <div
                                            key={number + "20"}
                                            className="user-info"
                                            style={{ width: "5rem" }}
                                        >
                                            <span
                                                key={number + "21"}
                                                className="placeholder col-12"
                                            ></span>
                                            <span
                                                key={number + "22"}
                                                className="placeholder col-12 mb-2"
                                            ></span>
                                        </div>
                                        <div
                                            key={number + "23"}
                                            id="flex_beta"
                                            className="container-contact100-form-btn"
                                        >
                                            <button
                                                key={number + "24"}
                                                tabIndex="-1"
                                                className="btn btn-primary disabled placeholder-g"
                                                aria-hidden="true"
                                                style={mystyle_last}
                                            ></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {props.spin && (
                <div className="d-flex justify-content-center mt-5">
                    <div
                        className="spinner-border text-info"
                        role="status"
                        style={{ width: "3rem", height: "3rem" }}
                    ></div>
                </div>
            )}
        </div>
    );
};

export default Place;
