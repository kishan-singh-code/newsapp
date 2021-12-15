import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
    render() {
        return (
            <div class="container">
                <h2 class="my-3">Top News</h2>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    {/* <div class="col"> */}
                    <NewsItem
                        title="IndiaTV"
                        description="kishan singh best"
                        imageUrl="https://media.wired.com/photos/61ba01725d74af6a6a505e32/191:100/w_1280,c_limit/Sec_NSO_GettyImages-1236496545.jpg"
                        newsUrl="lol"
                    />
                    <NewsItem
                        title="IndiaTV"
                        description="kishan singh best"
                        imageUrl="https://s.yimg.com/os/creatr-uploaded-images/2021-09/f42439e0-1eed-11ec-8b73-9a109939072e"
                        newsUrl="lol"
                    />
                    <NewsItem
                        title="IndiaTV"
                        description="kishan singh best"
                        imageUrl="https://media.wired.com/photos/61ba01725d74af6a6a505e32/191:100/w_1280,c_limit/Sec_NSO_GettyImages-1236496545.jpg"
                        newsUrl="lol"
                    />
                    <NewsItem
                        title="IndiaTV"
                        description="kishan singh best"
                        imageUrl="https://s.yimg.com/os/creatr-uploaded-images/2021-09/f42439e0-1eed-11ec-8b73-9a109939072e"
                        newsUrl="lol"
                    />
                    {/* </div> */}
                </div>
            </div>
        );
    }
}

export default News;
