import React, { useEffect, useState } from "react";

const NewsItem = (props) => {

  let { title, description, imageUrl, newsUrl, author, name, time } = props;

  const [spa, setSpa] = useState(120)
  const [spa2, setSpa2] = useState(70)


  const updateSpace = () => {
    let j = 119;

    if (description.length > 120) {
      for (j = 119; j > 10; j--) {
        if (description[j] === ' ') {
          break;
        }
      }
    }
    else {
      j = description.length;
    }
    setSpa(j);
    // console.log(description.length)
    let i = 69;

    if (title.length > 70) {
      for (i = 69; i > 10; i--) {
        if (title[i] === ' ') {
          break;
        }
      }
    }
    else {
      i = title.length;
    }
    setSpa2(i);
  }

  useEffect(() => {
    updateSpace();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <div>
      <div className={`card h-100 card_hover_${props.mode === "light" ? "white" : "black"} text-${props.mode === "light" ? "dark" : "white"} bg-${props.mode === "light" ? "light" : "dark"
        }`} >


        <div className="pill_red">
          <span className="badge rounded-pill bg-danger">{name}</span>
        </div>
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <span className="badge rounded-pill bg-primary mb-3">{name}</span>
          <h6 className=" card-title">{title.slice(0, spa2)}...</h6>
          <p className="card-text mb-4" id="p_desc">{description.slice(0, spa)}...</p>



          {/* <div className="user">
            <img
              src={imageUrl}
              alt="user"
            />
            <div className="user-info">
              <h6>{author}</h6>
              <small className={`text-${props.mode === "light" ? "dark" : "light"
                }`} style={{ fontSize: "0.75rem" }}>{(new Date(time).toGMTString()).slice(0, -13)}</small>
            </div>
            <div id="flex_beta" className="container-contact100-form-btn">
              <div className="wrap-contact100-form-btn">
                <div className="contact100-form-bgbtn"></div>
                <form action={newsUrl} target="_blank">
                  <button type="submit" className="contact100-form-btn">
                    Read More
                  </button>
                </form>
              </div>
            </div>
          </div> */}

          <div className="row row-cols-md-1 row-cols-lg-1 row-cols-xl-3">
            <div className="col-2 col-xl-2 " style={{ backgroundColor: "", alignSelf: "center", textAlign: (props.winsiz < 1200 && props.winsiz > 767) ? "center" : "end" }}>
              <div className=""><img className="but_img" src={imageUrl} alt="user" /></div>
            </div>
            <div className={`col-5 col-xl-5 ${(props.winsiz < 1200 && props.winsiz > 767) ? "my-2" : ""}`} style={{ backgroundColor: "", textAlign: (props.winsiz < 1200 && props.winsiz > 767) ? "center" : "start" }}>
              <div className="row" style={{ backgroundColor: "" }}>
                <h6 className="but_h6">{props.winsiz < 390 ? author.slice(0, 12) : author.slice(0, 14)}</h6>
              </div>
              <div className="row" style={{ backgroundColor: "" }}>
                <small className={`text-${props.mode === "light" ? "dark" : "light"}`} style={{ fontSize: "0.75rem" }}>{(new Date(time).toGMTString()).slice(0, -13)}</small>
              </div>
            </div>
            <div className="col-5 col-xl-5 " style={{ backgroundColor: "", alignSelf: "center" }}>

              <div className="container-contact100-form-btn">
                <div className="wrap-contact100-form-btn">
                  <div className="contact100-form-bgbtn"></div>
                  <form action={newsUrl} target="_blank">
                    <button type="submit" className="contact100-form-btn" style={{ paddingTop: "0.25rem", paddingBottom: "0.25rem" }}>
                      Read More
                    </button>
                  </form>
                </div>
              </div>

            </div>
          </div>
























        </div>
      </div>
    </div>
  );

}

export default NewsItem;
