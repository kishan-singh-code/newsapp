import React from "react";

const NewsItem = (props) => {

  let { title, description, imageUrl, newsUrl, author, name, time } = props;
  return (
    <div>
      <div className="card h-100">
        <div className="pill_red">
          <span className="badge rounded-pill bg-danger">{name}</span>
        </div>
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <span className="badge rounded-pill bg-primary mb-3">{name}</span>
          <h6 className=" card-title">{title}</h6>
          <p className="card-text mb-4" id="p_desc">{description}</p>
          <div className="user">
            <img
              src={imageUrl}
              alt="user"
            />
            <div className="user-info">
              <h6>{author}</h6>
              <small style={{ fontSize: "0.75rem" }}>{(new Date(time).toGMTString()).slice(0, -7)}</small>
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

          </div>
        </div>
      </div>
    </div>
  );

}

export default NewsItem;
