import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export class News extends Component {


    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount() {
        let url = "http://localhost:3000/in&page=1";
        let data = await fetch(url);
        let parsedData = await data.json()
        // console.log(parsedData);
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults })

    }

    preClick = async () => {
        let url = `http://localhost:3000/in&page=${this.state.page - 1}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        // console.log(parsedData);
        // this.setState({ articles: parsedData.articles })
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        })
    }

    nexClick = async () => {
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) { }
        else {
            let url = `http://localhost:3000/in&page=${this.state.page + 1}`;
            let data = await fetch(url);
            let parsedData = await data.json()
            // console.log(parsedData);
            // this.setState({ articles: parsedData.articles })
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles
            })
        }
    }


    render() {
        return (
            <div className="container">
                <h2 className="my-3">Top News</h2>
                <Spinner />
                <div className="row row-cols-1 row-cols-md-3 g-4">

                    {this.state.articles.map((element) => {
                        return <NewsItem
                            key={element.url}
                            title={element.title ? element.title : ""}
                            description={element.description ? element.description : ""}
                            imageUrl={element.urlToImage ? element.urlToImage : "https://akm-img-a-in.tosshub.com/indiatoday/Video_Extra_Large_Image/headlines_video_647_061016095604.jpg?l7jmx5Mxmn.85p9P1FUbCBn1z_BErMNw&size=1200:675"}
                            newsUrl={element.url}
                            author={element.author}
                            name={element.source.name}
                        />
                    })}


                </div>
                <div className="container d-flex justify-content-between my-4">
                    <button type="button" disabled={this.state.page <= 1} onClick={this.preClick} className="btn btn-dark">&#8606; Previous</button>
                    <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 20)} onClick={this.nexClick} className="btn btn-dark">Next &#8608;</button>
                </div>
            </div>
        );
    }
}

export default News;
