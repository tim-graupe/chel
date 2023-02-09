import React from "react";

export const EPG = (props) => {
    return (
        <div>
        <img
                  src={
                    props.media.content.content.media.epg[2].items[0].image.cuts["320x180"]
                      .src
                  }
                  alt="extended highlights"
                  width={
                    props.media.content.content.media.epg[2].items[0].image.cuts["320x180"]
                      .width
                  }
                  height={
                    props.media.content.content.media.epg[2].items[0].image.cuts["320x180"]
                      .height
                  }
                  onClick={() => {
                    props.setHighlight(
                      props.media.content.content.media.epg[2].items[0].playbacks[3].url
                    );
                  }}
                />
                <p>{props.media.content.content.media.epg[2].items[0].blurb}</p>
                <p>{props.media.content.content.media.epg[2].items[0].duration}</p>
        </div>
    )
}