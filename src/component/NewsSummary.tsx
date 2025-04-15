import "../assets/newsSummary.css"

type Article = {
    title: string;
    url: string;
    image: string;
}

function NewsSummary({title, url, image}: Article){
    return(
        <a href={url}>
            <div className="news">
                <img className="news-image" src={image}/>

                <div className="news-content">
                    <h1 className="news-content-title">{title}</h1>
                </div>
            </div>
        </a>
    )
}

export default NewsSummary