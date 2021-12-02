import React from "react";
import "../../Styles/Video.css";

const Videos = ({ title, id, noq }) => {
  return (
    <div className="videos">
      <img
        src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`}
        className="card-img-top"
        alt={title}
      />
      <p>{title}</p>
      <div className="qmeta">
        <p>{noq} Questions</p>
        <p>Total points : {noq * 1}</p>
      </div>
    </div>
  );
};

export default Videos;
