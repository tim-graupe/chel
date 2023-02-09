import React, { useContext } from "react";
import { GameCenterContext } from "../../../dispatch/dispatch";
import { useState } from "react";

export const Recap = () => {
  const media = useContext(GameCenterContext);
  const [auto, setAuto] = useState(false)
  const highlights = media.content.content.highlights.scoreboard.items;
  const [highlight, setHighlight] = useState(
    media.content.content.editorial.recap.items[0].media.playbacks[2].url
  );
  if (media.content === null) {
    return <></>;
  }
  if (
    media.content.content.editorial.recap.items[0] === undefined ||
    media.content.content.editorial === undefined ||
    media.content.content.editorial.recap.items[0].media.playbacks === undefined
  ) {
    return (
      <>
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
              <a href={`https://www.nhl.com/${item.url}`}>Read More</a>
            </div>
          );
        })}
      </>
    );
  }
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


      {/* thumbnail for video below poster={media.content.content.editorial.recap.items[0].media.image.cuts["320x180"].src} */}
      <video controls id="highlight-video" key={highlight} autoPlay={auto}>
        <source
          src={highlight}
          title="highlight"
          type="video/mp4"
          height={highlight.height}
          width={highlight.width}
        />
      </video>
      <p id="recap-blurb">
        {media.content.content.editorial.recap.items[0].seoDescription}
        <a
          href={`https://www.nhl.com/${media.content.content.editorial.recap.items[0].url}`}
        >
          Read More
        </a>
      </p>

      <div id="recap-highlights">
        {highlights.map((video) => {
          return (
            <li key={video.title}>
              <video
                className="video-thumbnail"
                src={video.playbacks[0].url}
                onClick={() => {
                  setHighlight(video.playbacks[3].url);
                  setAuto(true)
                }}
                playsInline
              />
              <p>{video.title}</p>
              <p>{video.duration}</p>
            </li>
          );
        })}
<div>
<img
          src={
            media.content.content.media.epg[2].items[0].image.cuts["320x180"]
              .src
          }
          alt="extended highlights"
          width={
            media.content.content.media.epg[2].items[0].image.cuts["320x180"]
              .width
          }
          height={
            media.content.content.media.epg[2].items[0].image.cuts["320x180"]
              .height
          }
          onClick={() => {
            setHighlight(
              media.content.content.media.epg[2].items[0].playbacks[3].url
            );
          }}
        />
        <p>{media.content.content.media.epg[2].items[0].blurb}</p>
        <p>{media.content.content.media.epg[2].items[0].duration}</p>
</div>
      </div>
    </div>
  );
};
