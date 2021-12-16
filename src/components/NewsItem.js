import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, name } = this.props;
    return (
      <div>
        <div className="card border-info">
          <div className="pill_red">
            <span className="badge rounded-pill bg-danger">{name}</span>
          </div>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <span className="badge rounded-pill bg-primary mb-3">{name}</span>
            <h5 className="card-title">{title}</h5>
            <p className="card-text mb-4">{description}</p>
            <div className="user">
              <img
                src={imageUrl}
                alt="user"
              />
              <div className="user-info">
                <h6>{author}</h6>
                <small style={{ fontSize: "0.75rem" }}>2h ago</small>
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
}

export default NewsItem;
