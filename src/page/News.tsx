import { JSX, useEffect, useState } from "react";
import NewsSummary from "../component/NewsSummary";
import { NavLink } from "react-router";
import "../assets/news.css";

function News(){
    const [news, setNews] = useState<JSX.Element[]>([]);

    const VITE_REACT_APP_API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;

    useEffect(() => {
        fetch(`https://newsapi.org/v2/top-headlines?category=sports&pageSize=6&apiKey=${VITE_REACT_APP_API_KEY}`)
            .then(response => response.json())  // convertir a json
            .then(json => {
                if(json["status"] === "ok"){
                    var articles = []
                    for(var article of json["articles"]){
                        articles.push(<NewsSummary title={article["title"]} url={article["url"]} image={article["urlToImage"]} />)
                    }
                    setNews(articles)
                }
            })
            .catch(err => console.log('Solicitud fallida', err));
    },[])

    return(
        <>
        <NavLink to="/" className="navLink">
            <button className="go-back-button"/>
        </NavLink>

        <div id="news-root">
            <header className="news-header">
                <h1>
                    NOTICIAS
                </h1>
            </header>

            <div className="spacer2 layer2"/>
            
            <main className="news-articles">
                {
                    news.map((newSummary) => {
                        return(
                            newSummary
                        );
                    })
                }
            </main>
        </div>
        </>
    )
}

export default News