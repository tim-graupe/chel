import React, { useContext } from "react";
import { GameCenterContext } from "../../dispatch/dispatch";
import { Link } from "react-router-dom";

export const Recap = () => {
    const media = useContext(GameCenterContext)
    if (media.content === null || media.content.content.editorial.recap.items[0] === undefined || media.content.content.editorial === undefined) {
        return <></>
    }
    return (
        <div id="recap-container">
            {media.content.content.editorial.recap.items.map((headline) => {
                return (
                    <>
                    <h1><strong>{headline.headline}</strong></h1>
                    <h2>{headline.subhead}</h2>
                    <p>{headline.contributor.contributors.map((contributor) => {
                        return <>{contributor.name} / {headline.contributor.source}</>
                    })}</p>
                    </>
                )
            })}

            <video controls id="recap-video">
                <source src={media.content.content.editorial.recap.items[0].media.playbacks[2].url} title="recap" />
            </video>
        <p id="recap-blurb">
        {media.content.content.editorial.recap.items[0].seoDescription}
        <a href={`http://www.nhl.com/${media.content.content.editorial.recap.items[0].url }`}>Read More</a>
        </p>

         <div id="recap-highlights">
        {media.content.content.highlights.scoreboard.items.map((highlight) => {
            return (
                <div className="highlight-div">
                                        <video width={highlight.playbacks[0].width} height={highlight.playbacks[0].height} controls >
                    <source src={highlight.playbacks[0].url} title={highlight.title} />
                    </video>
                    <p>{highlight.title}</p>
                    <p>{highlight.duration}</p>
                    </div>
            )
        })}
        </div>
        </div>
    )
}