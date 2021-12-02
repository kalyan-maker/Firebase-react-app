import React, { useRef } from "react";
import classes from "../../Styles/miniplayer.css";
import ReactPlayer from "react-player/youtube";

function Miniplayer({ id, title }) {
  const buttonRef = useRef();
  const videoUrl = `https://www.youtube.com/watch?v=${id}`;

  return (
    <>
      <div className={classes.miniPlayer} ref={buttonRef}>
        <ReactPlayer
          className={classes.player}
          url={videoUrl}
          width="300px"
          height="168px"
          controls
        />
        <p>{title}</p>
      </div>
    </>
  );
}

export default Miniplayer;
