import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import Circle from "./Circle";

export class News extends Component {
    static defaultProps = {
        country: "in",
        category: "general",
    };

    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
    };

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0,
        };
        // .charAt(0).toUpperCase() + string.slice(1)
        document.title = `${this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)
            } - News`;
    }

    async updateNews() {
        this.props.setProgress(10);
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}`;
        let url = `http://localhost:3000/in&page=${this.state.page}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        this.props.setProgress(40);

        let parsedData = await data.json();
        this.props.setProgress(70);

        // console.log(parsedData);
        setTimeout(() => {
            this.setState({
                articles: parsedData.articles,
                totalResults: parsedData.totalResults,
                loading: false,
            });
        }, 5000);
        this.props.setProgress(100);

    }

    async componentDidMount() {
        this.updateNews();
    }

    fetchMoreData = async () => {
        this.setState({
            page: this.state.page + 1,
        });
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}`;
        let url = `http://localhost:3000/in&page=${this.state.page}`;
        // this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        // console.log(parsedData);

        setTimeout(() => {
            this.setState({
                articles: this.state.articles.concat(parsedData.articles),
                totalResults: parsedData.totalResults,
            });
        }, 5000);
    };

    render() {
        return (
            <div className="container mb-5">
                <h2 className="my-3">
                    Top News from{" "}
                    {this.props.category.charAt(0).toUpperCase() +
                        this.props.category.slice(1)}
                </h2>
                {this.state.loading && <Spinner />}

                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Circle />}
                >
                    <div className="container">
                        <div className="row row-cols-1 row-cols-md-3 g-4 mar_top">
                            {this.state.articles.map((element) => {
                                return (
                                    <NewsItem
                                        key={element.url}
                                        title={element.title ? element.title : ""}
                                        description={element.description ? element.description : ""}
                                        imageUrl={
                                            element.urlToImage
                                                ? element.urlToImage
                                                : "https://akm-img-a-in.tosshub.com/indiatoday/Video_Extra_Large_Image/headlines_video_647_061016095604.jpg?l7jmx5Mxmn.85p9P1FUbCBn1z_BErMNw&size=1200:675"
                                        }
                                        newsUrl={element.url}
                                        author={
                                            element.author ? element.author.slice(0, 6) : "Unknown"
                                        }
                                        name={element.source.name}
                                        time={element.publishedAt}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </div>
        );
    }
}

export default News;
