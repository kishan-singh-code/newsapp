import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import Place from "./Place";
import Carousel from "./Carousel";
import img_1 from "./img/1.gif";
import img_4 from "./img/1.webp";



const News = (props) => {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    const [arr1, setarr1] = useState([])
    const [arr4, setarr4] = useState([])
    const [arr2, setarr2] = useState([img_1])
    const [arr3, setarr3] = useState([])
    // const [r, setr] = useState([])
    // const [r2, setr2] = useState(70)
    // const [r3, setr3] = useState(70)




    const updateNews = async () => {
        props.setProgress(10)
        // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
        // let url = `http://localhost:3000/in&page=${page}`;
        let url = `https://kishan-singh-code.github.io/jasonapi/page-${page - 1 + 1}/${props.country}.json`;
        setLoading(true)
        // console.log(props.category);
        let data = await fetch(url);
        props.setProgress(40)
        let parsedData = await data.json();
        parsedData = parsedData[props.category];
        // console.log(parsedData);
        props.setProgress(70)
        // setTimeout(() => {
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        // }, 500);

        props.setProgress(100)
        let arrt1 = [];
        let arrt2 = [];
        let arrt3 = [];
        let arrt4 = [];
        let rsiz = [];
        for (let i = 0; i < 3; i++) {
            arrt1[i] = parsedData.articles[i].title;
            arrt4[i] = parsedData.articles[i].title;
        }
        setarr1(arrt1);
        // ----shotner-----
        let j = 69;
        for (let i = 0; i < 3; i++) {

            if (arrt1[i].length > 70) {
                for (j = 69; j > 10; j--) {
                    if (arrt1[i][j] === ' ') {
                        break;
                    }
                }
            }
            else {
                j = arrt1[i].length;
            }
            rsiz[i] = j;
        }
        // setr(rsiz);

        for (let i = 0; i < 3; i++) {
            arrt4[i] = arrt4[i].slice(0, rsiz[i]);
        }

        setarr4(arrt4);

        // console.log(arrt);
        for (let i = 0; i < 3; i++) {
            arrt2[i] = parsedData.articles[i].urlToImage;
        }
        setarr2(arrt2);
        // console.log(arrt);
        for (let i = 0; i < 3; i++) {
            arrt3[i] = parsedData.articles[i].url;
        }
        setarr3(arrt3);
        // console.log(arrt);


        // let i = 0;
        // console.log(arrt);
    }

    useEffect(() => {
        document.title = `${props.category.charAt(0).toUpperCase() + props.category.slice(1)} - News`;
        updateNews();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])




    const fetchMoreData = async () => {
        // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page + 1}&pageSize=${props.pageSize}`;
        // let url = `http://localhost:3000/in&page=${page + 1}`;
        let url = `https://kishan-singh-code.github.io/jasonapi/page-${page + 1}/${props.country}.json`;
        setPage(page + 1);
        let data = await fetch(url);
        let parsedData = await data.json();
        parsedData = parsedData[props.category];
        // setTimeout(() => {
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)

        // }, 500);
    };



    return (<>

        <Carousel winsiz={props.winsiz} arr1={arr1} arr2={arr2} arr3={arr3} arr4={arr4} />

        <div className="container mb-5 pb-5 cont_size">
            <h2 className={`mt-3 ${props.winsiz > 991 ? "" : "text-center"}`} style={{
                color: props.mode === "dark" ? "white" : "black",
                marginBottom: props.winsiz > 991 ? "" : "-0.1rem"
            }}>
                Top News from{" "}
                {props.category.charAt(0).toUpperCase() +
                    props.category.slice(1)}
            </h2>
            {loading && <Place i={3} spin={true} />}

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Place i={6} spin={false} />}

            >
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-3 g-4 mar_top">
                        {articles.map((element, index) => {
                            return (

                                index > 2 && <NewsItem
                                    mode={props.mode}
                                    key={element.url}
                                    title={element.title ? element.title : ""}
                                    description={element.description ? (element.description.length < 85 ? (element.description + element.content + "...").slice(0, 130) : element.description.slice(0, 130)) : (element.description + element.content + "...").slice(0, 130)}
                                    imageUrl={
                                        element.urlToImage
                                            ? element.urlToImage
                                            : img_4
                                    }
                                    newsUrl={element.url}
                                    author={
                                        element.author ? element.author.slice(0, 25) : "Unknown"
                                    }
                                    name={element.source.name ? element.source.name : "Unknown"}
                                    time={element.publishedAt ? element.publishedAt : "Sun, 26 Dec 2021"}
                                    winsiz={props.winsiz}
                                />

                            );
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </div>
    </>
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
