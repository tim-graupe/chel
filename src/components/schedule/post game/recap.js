import React, { useContext, useEffect, useState } from "react";
import { GameCenterContext } from "../../../dispatch/dispatch";

export const Recap = () => {
  const media = useContext(GameCenterContext);
  const [recapVideo, setRecapVideo] = useState();
  const [autoPlay, setAutoPlay] = useState(false);

  useEffect(() => {
    if (media.content && !recapVideo) {
      initializeVideo();
    }
  }, [media.content]);

  const initializeVideo = () => {
    if (!autoPlay) {
      setRecapVideo(
        media.content.content.editorial.recap.items[0].media.playbacks[2].url
      );
    }
  };

  if (media.content === null) {
    return <></>;
  }
  if (
    media.content.content.editorial.recap.items[0] === undefined ||
    media.content.content.editorial === undefined ||
    media.content.content.editorial.recap.items[0].media.playbacks === undefined
  ) {
    return (
      <div id="gamecenter-team-stats-container">
        {media.content.content.editorial.recap.items.map((item) => {
          return (
            <div key={item.headline} id="recap-container">
              <h1>{item.headline}</h1>
              <p>{item.seoDescription}</p>
              <img
                id="recap-img"
                src={item.media.image.cuts["768x432"].src}
                alt="recap"
              />
              <a href={`http://www.nhl.com/${item.url}`}>Read More</a>
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div id="recap-container">
        {media.content.content.editorial.recap.items.map((headline) => {
          return (
            <div key={headline.headline}>
              <h1>
                <strong>{headline.headline}</strong>
              </h1>
              <h2>{headline.subhead}</h2>
              <div>
                {headline.contributor.contributors.map((contributor) => {
                  return (
                    <p key={contributor.name}>
                      {contributor.name} / {headline.contributor.source}
                    </p>
                  );
                })}
              </div>
            </div>
          );
        })}

        <video
          controls
          id="recap-video"
          key={recapVideo}
          width={
            media.content.content.editorial.recap.items[0].media.playbacks[1]
              .width
          }
          height={
            media.content.content.editorial.recap.items[0].media.playbacks[1]
              .height
          }
          loop
          poster={
            media.content.content.editorial.recap.items[0].media.image.cuts[
              "320x180"
            ].src
          }
          autoPlay={autoPlay}
          playsInline
        >
          <source src={recapVideo} title="recap" type="video/mp4" />
        </video>
        <p id="recap-blurb">
          {media.content.content.editorial.recap.items[0].seoDescription}
          <a
            href={`http://www.nhl.com/${media.content.content.editorial.recap.items[0].url}`}
          >
            Read More
          </a>
        </p>

        <div id="recap-highlights">
          {media.content.content.highlights.scoreboard.items.map(
            (highlight) => {
              return (
                <div className="highlight-div" key={highlight.id}>
                  <video
                    key={highlight.playbacks[0].url}
                    poster={highlight.image.cuts['768x432'].src}
                    width={highlight.playbacks[0].width}
                    height={highlight.playbacks[0].height}
                    onClick={() => {
                      setAutoPlay(true);
                      setRecapVideo(highlight.playbacks[2].url);
                    }}
                    // controls
                    // playsInline
                  >
                    <source
                      src={highlight.playbacks[2].url}
                      title={highlight.title}
                    />
                  </video>
                  <p>{highlight.title}</p>
                  <p>{highlight.duration}</p>
                </div>
              );
            }
          )}
        </div>
      </div>
    );
  }
};
