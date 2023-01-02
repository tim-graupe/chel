import React from "react";

export const Recap = (props) => {
    const media = props.props
    if (media.content === null) {
        return <></>
    }
    return (
        <div id="recap-container">
            <h2>{media.content.editorial.recap.items[0].headline}</h2>
            <h4>{media.content.editorial.recap.items[0].subhead}</h4>
            <p>By {media.content.editorial.recap.items[0].contributor.contributors[0].name} / {media.content.editorial.recap.items[0].contributor.source}</p>
            <video width={media.content.editorial.recap.items[0].media.playbacks[2].width} height={media.content.editorial.recap.items[0].media.playbacks[2].height} controls>
                <source src={media.content.editorial.recap.items[0].media.playbacks[2].url} title="recap" />
            </video>
        <p id="recap-blurb">
        {media.content.editorial.recap.items[0].seoDescription}

        </p>

        <div id="recap-highlights">
        {media.content.highlights.scoreboard.items.map((highlight) => {
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