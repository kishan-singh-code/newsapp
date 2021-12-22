import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
// import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
// import Circle from "./Circle";
import Place from "./Place";
import ButtomPlace from "./ButtomPlace";


const News = (props) => {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)



    const updateNews = async () => {
        props.setProgress(10)
        // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}`;
        let url = `http://localhost:3000/in&page=${page}`;
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(40)

        let parsedData = await data.json();
        props.setProgress(70)

        setTimeout(() => {
            setArticles(parsedData.articles)
            setTotalResults(parsedData.totalResults)
            setLoading(false)
        }, 5000);

        props.setProgress(100)
    }

    useEffect(() => {
        document.title = `${props.category.charAt(0).toUpperCase() + props.category.slice(1)} - News`;
        updateNews();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])




    const fetchMoreData = async () => {

        // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page + 1}`;
        let url = `http://localhost:3000/in&page=${page + 1}`;
        setPage(page + 1)
        let data = await fetch(url);
        let parsedData = await data.json();
        setTimeout(() => {
            setArticles(articles.concat(parsedData.articles))
            setTotalResults(parsedData.totalResults)

        }, 5000);
    };


    return (
        <div className="container mb-5 pb-5 cont_size">
            <h2 className="my-3 ">
                Top News from{" "}
                {props.category.charAt(0).toUpperCase() +
                    props.category.slice(1)}
            </h2>
            {loading && <Place />}

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<ButtomPlace />}
            >
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-3 g-4 mar_top">
                        {articles.map((element) => {
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


News.defaultProps = {
    country: "in",
    category: "general",
};

News.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
};


export default News;
