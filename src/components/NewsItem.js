import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div>
        <div className="card">
          <div className="pill_red">
            <span className="badge rounded-pill bg-danger"> kishan singh</span>
          </div>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <span className="badge rounded-pill bg-primary mb-3">Primary</span>
            <h5 className="card-title">{title}</h5>
            <p className="card-text mb-4">{description}</p>
            <div className="user">
              <img
                src="https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo"
                alt="user"
              />
              <div className="user-info">
                <h6>July Dec</h6>
                <small style={{ fontSize: "0.75rem" }}>2h ago</small>
              </div>
              <button
                href={newsUrl}
                target="_blank"
                type="button"
                className="btn btn-primary btn-sm"
              >
                read more
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
