import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
    articles = [
        {
            "source": {
                "id": null,
                "name": "Lifehacker.com"
            },
            "author": "Khamosh Pathak",
            "title": "How to Pass on Your iPhone Data After You Die",
            "description": "Our digital lives are heavily intertwined with our “real” lives, and Apple is finally starting to acknowledge that. The data that lives in our iCloud accounts is not only important to us, but also to our family members. Now, there's a way for our loved ones t…",
            "url": "https://lifehacker.com/how-to-pass-on-your-iphone-data-after-you-die-1848213939",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/0cceaec5cf979f0d20fd295e6555f8b0.png",
            "publishedAt": "2021-12-15T14:00:00Z",
            "content": "Our digital lives are heavily intertwined with our real lives, and Apple is finally starting to acknowledge that. The data that lives in our iCloud accounts is not only important to us, but also to o… [+2162 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Jon Fingas",
            "title": "Apple removes mentions of controversial child abuse scanning from its site",
            "description": "Apple has hinted it might not revive its controversial effort to scan for CSAM (child sexual abuse material) photos any time soon. MacRumorsnotes Apple has removed all mentions of the scanning feature on its Child Safety website. Visit now and you'll only see…",
            "url": "https://www.engadget.com/apple-removes-csam-mentions-on-website-151958410.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-09/f42439e0-1eed-11ec-8b73-9a109939072e",
            "publishedAt": "2021-12-15T15:19:58Z",
            "content": "Apple has hinted it might not revive its controversial effort to scan for CSAM (child sexual abuse material) photos any time soon. MacRumorsnotes Apple has removed all mentions of the scanning featur… [+1005 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Jon Fingas",
            "title": "SiriusXM sued over lack of podcast transcripts for the hard of hearing",
            "description": "SiriusXM has been accused of doing too little to make its podcasts accessible. The National Association of the Deaf and Disability Rights Advocates have filed a lawsuit against SiriusXM (including its Pandora and Stitcher brands) accusing it of excluding the …",
            "url": "https://www.engadget.com/national-association-of-the-deaf-siriusxm-podcast-lawsuit-151509090.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-12/bf3dc550-5dab-11ec-bb77-e3d5315789dd",
            "publishedAt": "2021-12-15T15:35:09Z",
            "content": "SiriusXM has been accused of doing too little to make its podcasts accessible. The National Association of the Deaf and Disability Rights Advocates have filed a lawsuit against SiriusXM (including it… [+1200 chars]"
        },
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Lily Hay Newman",
            "title": "Google Warns That NSO Hacking Rivals Elite Nation State Spies",
            "description": "ForcedEntry is “one of the most technically sophisticated exploits” Project Zero security researchers have ever seen.",
            "url": "https://www.wired.com/story/nso-group-forcedentry-pegasus-spyware-analysis/",
            "urlToImage": "https://media.wired.com/photos/61ba01725d74af6a6a505e32/191:100/w_1280,c_limit/Sec_NSO_GettyImages-1236496545.jpg",
            "publishedAt": "2021-12-15T18:00:00Z",
            "content": "The Israeli spyware developer NSO Group has shocked the global security community for years with aggressive and effectivehacking tools that can target both Android and iOS devices. The company's prod… [+3397 chars]"
        },
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Eric Ravenscraft",
            "title": "52 Last-Minute Christmas Gifts on Sale Now",
            "description": "You can blame the supply chain for late packages, but there's still time to get some in before New Years.",
            "url": "https://www.wired.com/story/last-minute-deals-and-christmas-gifts-2021/",
            "urlToImage": "https://media.wired.com/photos/60e45f329c0558467e693ce0/191:100/w_1280,c_limit/Culture_Games_NintendoSwitchOLEDmodel_02.jpg",
            "publishedAt": "2021-12-16T12:00:00Z",
            "content": "This year is more challenging than most to get presents for your loved ones on time. Fortunately, even if you've waited till the last minute to start shopping, you still have some options. We've gath… [+15912 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Reuters Editorial",
            "title": "New wave of COVID-19 brings global disruption - Reuters",
            "description": "A growing number of U.S. colleges and universities moved final exams online, Apple shut down some of its stores temporarily and major North American sports leagues scrambled to control outbreaks as cases climb and the threat from the new Omicron coronavirus v…",
            "url": "https://www.reuters.com/video/watch/idPB9g?now=true",
            "urlToImage": "https://ajo.prod.reuters.tv/api/v2/img/61ba768ae4b09631b0e44528-1639609994164?location=LANDSCAPE",
            "publishedAt": "2021-12-16T00:58:39Z",
            "content": "Posted \r\nA growing number of U.S. colleges and universities moved final exams online, Apple shut down some of its stores temporarily and major North American sports leagues scrambled to control outbr… [+81 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Intel to invest $7 bln in new plant in Malaysia, creating 9000 jobs - Reuters",
            "description": "Intel Corp <a href=\"https://www.reuters.com/companies/INTC.O\" target=\"_blank\">(INTC.O)</a> will invest more than $7 billion to build a new chip-packaging and testing factory in Malaysia, Chief Executive Pat Gelsinger said on Thursday, expanding production in …",
            "url": "https://www.reuters.com/technology/intel-invest-7-bln-new-plant-malaysia-creating-9000-jobs-2021-12-16/",
            "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=63",
            "publishedAt": "2021-12-16T02:16:00Z",
            "content": "KUALA LUMPUR, Dec 16 (Reuters) - Intel Corp (INTC.O) will invest more than $7 billion to build a new chip-packaging and testing factory in Malaysia, Chief Executive Pat Gelsinger said on Thursday, ex… [+1775 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Futures rise as Fed wages war on inflation - Reuters",
            "description": "U.S. stock index futures climbed on Thursday after the Federal Reserve announced a faster wind-down of its pandemic-era stimulus, calming some nerves around surging price pressures.",
            "url": "https://www.reuters.com/markets/europe/futures-rise-fed-wages-war-inflation-2021-12-16/",
            "urlToImage": "https://www.reuters.com/resizer/lhQ-twC7TbvohxHs3yV8paIBCi8=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/RWHGSYQEHNJCJNZULMENPMFYNA.jpg",
            "publishedAt": "2021-12-16T12:27:00Z",
            "content": "Dec 16 (Reuters) - U.S. stock index futures climbed on Thursday after the Federal Reserve announced a faster wind-down of its pandemic-era stimulus, calming some nerves around surging price pressures… [+2421 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Guardian staff reporter",
            "title": "From irresistible nibbles to decadent desserts: our best recipes for Christmas Day",
            "description": "A festive collection from our archive of favourite starters, main courses and puddingsA decadent starter and a godsend for cooks who like to get ahead. Continue reading...",
            "url": "https://amp.theguardian.com/food/2021/dec/16/best-christmas-day-recipes-dinner-starter-dessert-leftovers",
            "urlToImage": "https://i.guim.co.uk/img/media/fd55ca4aeeeb43941e4dab87039271904c13c8de/0_2779_5792_3475/master/5792.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=b666024a7955ff1145f6871dc2d8e000",
            "publishedAt": "2021-12-16T12:00:04Z",
            "content": "A decadent starter and a godsend for cooks who like to get ahead.\r\nPhotograph: Louise Hagger/The Guardian.\r\nA set of festive snacks: caraway, spelt and parmesan grissini with aleppo chilli, to dip in… [+5920 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNET"
            },
            "author": "Sareena Dayaram",
            "title": "iPhone 14 release date: When could we see Apple's next iPhone? - CNET",
            "description": "We have some educated guesses based on Apple's iPhone launch history.",
            "url": "https://www.cnet.com/tech/mobile/iphone-14-release-date-rumors/",
            "urlToImage": "https://www.cnet.com/a/img/MeWswNPS3PlvngqR3HNot0jsV9M=/1200x630/2021/11/01/c6aaf7a5-b82d-4f35-a11e-7c7da348eec6/ogi-iphone.jpg",
            "publishedAt": "2021-12-16T11:00:02Z",
            "content": "Stephen Shankland/CNET\r\nThe iPhone 14 (or whatever Apple decides to call it) is still early in its development cycle, and a number of leaks doing the rounds should probably be taken with a grain of s… [+2298 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNET"
            },
            "author": "Lisa Eadicicco",
            "title": "2022 smartphones people are already getting excited about - CNET",
            "description": "If rumors are true, the OnePlus 10 Pro, Samsung Galaxy S22 Ultra and Galaxy S21 FE, as well as Apple's iPhone 14 Max and iPhone SE 3 are coming in 2022.",
            "url": "https://www.cnet.com/tech/mobile/2022-smartphones-people-already-excited-about/",
            "urlToImage": "https://www.cnet.com/a/img/QAayciBKF3PFmtl7lZIlIVsWIio=/1200x630/2021/11/05/55cbcd72-f211-412b-ba1d-1eac95c1da02/phone-with-bow-wrapped-gift-cnet-2021-013.jpg",
            "publishedAt": "2021-12-16T08:00:06Z",
            "content": "We're looking forward to what Apple and Samsung have in store for 2022. \r\nSarah Tew/CNET\r\nWe are only a few weeks away from the new year, and many of the smartphones that debuted this fall easily mad… [+9209 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Siasat Daily"
            },
            "author": "IANS",
            "title": "Disney Plus adds support for Apple's new SharePlay feature - The Siasat Daily",
            "description": "<ol><li>Disney Plus adds support for Apple's new SharePlay feature  The Siasat Daily\r\n</li><li>Disney+ Now Supports Apple's SharePlay on iPhone, iPad, Apple TV  iPhone in Canada\r\n</li><li>iOS 15.1 SharePlay support finally makes its way to Disney+  MobileSyru…",
            "url": "https://www.siasat.com/disney-plus-adds-support-for-apples-new-shareplay-feature-2242300/",
            "urlToImage": "https://cdn.siasat.com/wp-content/uploads/2021/12/Disney-1.jpg",
            "publishedAt": "2021-12-16T05:37:00Z",
            "content": "San Francisco: Disney has updated its subscription video on demand (SVOD) mobile app Disney Plus streaming with support for Apple's SharePlay feature.\r\nWith support for SharePlay, Disney Plus subscri… [+1250 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Freakonomics.com"
            },
            "author": "Stephen J. Dubner",
            "title": "“The Art Market Is in Massive Disruption.” (Ep. 486)",
            "description": "Is art really meant to be an “asset class”? Will the digital revolution finally democratize a market that just keeps getting more elitist? And what will happen to the last painting Alice Neel ever made? (Part 3 of “The Hidden Side of the Art Market.”)\nThe pos…",
            "url": "https://freakonomics.com/podcast/art-market-part-3/",
            "urlToImage": "https://freakonomics.com/wp-content/uploads/2020/08/fr.fbthumbnail.png",
            "publishedAt": "2021-12-16T04:00:22Z",
            "content": "Is art really meant to be an asset class? Will the digital revolution finally democratize a market that just keeps getting more elitist? And what will happen to the last painting Alice Neel ever made… [+38607 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Xataka.com"
            },
            "author": "Javier Pastor",
            "title": "Europa no quiere que Google, Amazon, Facebook o Apple se pasen de la raya y aprueba la Digital Markets Act para limitar su poder",
            "description": "La Digital Markets Act (DMA) está más cerca de entrar en acción. La nueva serie de medidas fue desvelada por Magrethe Vestager en diciembre de 2020 y planteaba una serie de medidas para restringir el radio de acción de las grandes empresas tecnológicas.\n<!-- …",
            "url": "https://www.xataka.com/empresas-y-economia/europa-no-quiere-que-google-amazon-facebook-apple-se-pasen-raya-aprueba-digital-markets-act-para-limitar-su-poder",
            "urlToImage": "https://i.blogs.es/c23377/captura-de-pantalla-2021-12-16-a-las-9.58.59/840_560.jpeg",
            "publishedAt": "2021-12-16T12:00:31Z",
            "content": "La Digital Markets Act (DMA) está más cerca de entrar en acción. La nueva serie de medidas fue desvelada por Magrethe Vestager en diciembre de 2020 y planteaba una serie de medidas para restringir el… [+3997 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Xataka.com"
            },
            "author": "Javier Marquez",
            "title": "Microsoft y Dell quieren hacer los portátiles más reparables, y esa es una buena noticia para toda la industria",
            "description": "Cada año se generan en el mundo más de 53 millones de toneladas de residuos electrónicos. Si en lugar de reemplazar los dispositivos cada vez que se rompen o necesitan nuevas características pudiéramos repararlos o actualizarlos para seguir utilizándolos logr…",
            "url": "https://www.xataka.com/ordenadores/microsoft-dell-quieren-hacer-portatiles-reparables-esa-buena-noticia-para-toda-industria",
            "urlToImage": "https://i.blogs.es/66a694/dell-luna-1/840_560.jpeg",
            "publishedAt": "2021-12-16T07:31:24Z",
            "content": "Cada año se generan en el mundo más de 53 millones de toneladas de residuos electrónicos. Si en lugar de reemplazar los dispositivos cada vez que se rompen o necesitan nuevas características pudiéram… [+5420 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Atlantic"
            },
            "author": "The Atlantic",
            "title": "The Experiment Podcast: In Between Pro-life and Pro-choice",
            "description": "Rebecca Shrader had always thought of abortion as a black-and-white issue. But when she became pregnant, she started to see the gray.",
            "url": "https://www.theatlantic.com/podcasts/archive/2021/12/pro-life-christian-changed-views-abortion/621028/?utm_source=feed",
            "urlToImage": null,
            "publishedAt": "2021-12-16T09:00:00Z",
            "content": "Listen and subscribe: Apple Podcasts | Spotify | Stitcher | Google Podcasts\r\nRebecca Shrader had always thought that abortion was morally wrong. As a devout Baptist Christian, she volunteered at a cl… [+1194 chars]"
        }
    ]
    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false
        }
    }



    render() {
        return (
            <div className="container">
                <h2 className="my-3">Top News</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4">

                    {this.state.articles.map((element) => {
                        return <NewsItem
                            key={element.url}
                            title={element.title}
                            description={element.description}
                            imageUrl={element.urlToImage}
                            newsUrl={element.url}
                            author={element.author}
                            name={element.source.name}
                        />
                    })}


                </div>
            </div>
        );
    }
}

export default News;
