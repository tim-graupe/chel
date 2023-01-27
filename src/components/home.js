import React, { useContext, useEffect, useState } from "react";
import { TopScoreBoard } from "./topBarScoreBoard";

export const Home = () => {
  const [news, setNews] = useState([]);
  const [renderedGamesArray, setRenderedGamesArray] = useState([]);
  useEffect(() => {
    const todaysGames = () => {
      fetch(
        //add limit=x extension for sidebar headlines, then map/slice articles from there
        "https://site.api.espn.com/apis/site/v2/sports/hockey/nhl/news?limit=15",
        {
          mode: "cors",
        }
      )
        .then((response) => response.json())
        .then((response) => setNews(response.articles))
        .catch((err) => console.error(err));
    };

    todaysGames();
  }, []);

  if (news === null || news === undefined) {
    return <></>;
  } else
    return (
      <div>
        <div id="home-page">
          <div id="news-container">
            {news.map((article) => {
              return (
                <div className="homepage-links-cards" key={article.headline}>
                  {" "}
                  <a href={article.links.web.short.href}>
                    <img
                      src={article.images[0].url}
                      alt={article.images[0].alt}
                      className="home-article-images"
                    />
                    <h2>{article.headline}</h2>
                    <p>{article.description}</p>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
};
