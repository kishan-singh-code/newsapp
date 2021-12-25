import React from "react";
import img_1 from "./img/5.jpg";
import img_2 from "./img/2.jpg";
import img_3 from "./img/3.jpg";
const Carousel = (props) => {

  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide carousel-fade"
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
        <div className="carousel-item active" data-bs-interval="1800">
          <img
            // id="imageidi"
            src={img_1}
            className="d-block w-100"
            alt="..." style={{
              objectFit: 'cover',
              height: (props.winsiz > 990 ? Math.ceil(props.winsiz / 2.5) : (props.winsiz > 500 ? Math.ceil(props.winsiz / 2) : Math.ceil(props.winsiz / 1.7))).toString() + 'px',
            }}
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>
              Some representative placeholder content for the first slide.
            </p>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2800">
          <img src={img_2} className="d-block w-100"
            alt="..." style={{
              objectFit: 'cover',
              height: (props.winsiz > 990 ? Math.ceil(props.winsiz / 2.5) : (props.winsiz > 500 ? Math.ceil(props.winsiz / 2) : Math.ceil(props.winsiz / 1.7))).toString() + 'px',
            }} />
          <div className="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>
              Some representative placeholder content for the second slide.
            </p>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="3900">
          <img src={img_3} className="d-block w-100"
            alt="..." style={{
              objectFit: 'cover',
              height: (props.winsiz > 990 ? Math.ceil(props.winsiz / 2.5) : (props.winsiz > 500 ? Math.ceil(props.winsiz / 2) : Math.ceil(props.winsiz / 1.7))).toString() + 'px',
            }} />
          <div className="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>
              Some representative placeholder content for the third slide.
            </p>
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
