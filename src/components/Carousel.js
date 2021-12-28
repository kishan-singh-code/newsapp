import React from "react";
// import img_1 from "./img/5.jpg";
// import img_2 from "./img/2.jpg";
// import img_3 from "./img/3.jpg";
import img_4 from "./img/1.webp";
const Carousel = (props) => {


  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide carousel-fade mtop"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators ola lol">
        <button
          type="button"
          className="active chiku"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          className="chiku"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          className="chiku"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="2000">
          <div className={`${props.winsiz > 990 ? "vignette" : "vignette"}`}>
            <img
              src={props.arr2[0] ? props.arr2[0] : img_4}
              className="d-block w-100"
              alt="..." style={{
                objectFit: 'cover',
                height: (props.winsiz > 990 ? Math.ceil(props.winsiz / 2.3) : (props.winsiz > 500 ? Math.ceil(props.winsiz / 2) : Math.ceil(props.winsiz / 1.6))).toString() + 'px',
              }}
            />
          </div>
          <div className="carousel-caption" style={{ paddingBottom: props.winsiz > 990 ? "" : "0rem" }}>
            <h5 className="chotu" style={{ textShadow: "2px 2px 4px #000000", marginBottom: props.winsiz > 990 ? "2rem" : "0.5rem" }}>{props.arr4[0] + "..."}</h5>
            <form action={props.arr3[0]} target="_blank">
              <button type="submit" className={`btn btn-outline-light ${props.winsiz > 990 ? "px-4" : "btn-sm px-2"} rounded-pill`} style={{ marginBottom: props.winsiz > 990 ? "1.5rem" : "0.2rem", padding: props.winsiz > 990 ? "" : ".1rem .4rem", fontSize: props.winsiz > 990 ? "1.1rem" : "0.75rem", border: props.winsiz > 990 ? "2px solid white" : " 2px solid white" }}>Read More</button>
            </form>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <div className={`${props.winsiz > 990 ? "vignette" : "vignette"}`}>
            <img
              src={props.arr2[1] ? props.arr2[1] : img_4}
              className="d-block w-100"
              alt="..." style={{
                objectFit: 'cover',
                height: (props.winsiz > 990 ? Math.ceil(props.winsiz / 2.3) : (props.winsiz > 500 ? Math.ceil(props.winsiz / 2) : Math.ceil(props.winsiz / 1.6))).toString() + 'px',
              }}
            />
          </div>
          <div className="carousel-caption" style={{ paddingBottom: props.winsiz > 990 ? "" : "0rem" }}>
            <h5 className="chotu" style={{ textShadow: "2px 2px 4px #000000", marginBottom: props.winsiz > 990 ? "2rem" : "0.5rem" }}>{props.arr4[1] + "..."}</h5>
            <form action={props.arr3[1]} target="_blank">
              <button type="submit" className={`btn btn-outline-light ${props.winsiz > 990 ? "px-4" : "btn-sm px-2"} rounded-pill`} style={{ marginBottom: props.winsiz > 990 ? "1.5rem" : "0.2rem", padding: props.winsiz > 990 ? "" : ".1rem .4rem", fontSize: props.winsiz > 990 ? "1.1rem" : "0.75rem", border: props.winsiz > 990 ? "2px solid white" : " 2px solid white" }}>Read More</button>
            </form>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <div className={`${props.winsiz > 990 ? "vignette" : "vignette"}`}>
            <img
              src={props.arr2[2] ? props.arr2[2] : img_4}
              className="d-block w-100"
              alt="..." style={{
                objectFit: 'cover',
                height: (props.winsiz > 990 ? Math.ceil(props.winsiz / 2.3) : (props.winsiz > 500 ? Math.ceil(props.winsiz / 2) : Math.ceil(props.winsiz / 1.6))).toString() + 'px',
              }}
            />
          </div>
          <div className="carousel-caption" style={{ paddingBottom: props.winsiz > 990 ? "" : "0rem" }}>
            <h5 className="chotu" style={{ textShadow: "2px 2px 4px #000000", marginBottom: props.winsiz > 990 ? "2rem" : "0.5rem" }}>{props.arr4[2] + "..."}</h5>
            <form action={props.arr3[2]} target="_blank">
              <button type="submit" className={`btn btn-outline-light ${props.winsiz > 990 ? "px-4" : "btn-sm px-2"} rounded-pill`} style={{ marginBottom: props.winsiz > 990 ? "1.5rem" : "0.2rem", padding: props.winsiz > 990 ? "" : ".1rem .4rem", fontSize: props.winsiz > 990 ? "1.1rem" : "0.75rem", border: props.winsiz > 990 ? "2px solid white" : " 2px solid white" }}>Read More</button>
            </form>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );

}

export default Carousel;
