import React from "react";
import { VideoSection } from "./Styles/Videos";

const Video = () => {
  return (
    // <VideoSection>
    //   <img src="" alt="title" />
    //   <p>Questions</p>
    //   <div className="qmeta">
    //     <p> Questions</p>
    //     <p>Total points : 20</p>
    //   </div>
    // </VideoSection>
    <div class="row row-cols-1 row-cols-md-2 g-4">
      <div class="col">
        <VideoSection>
          <img src="..." class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </VideoSection>
      </div>

      <div class="col">
        <VideoSection>
          <img src="..." class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </VideoSection>
      </div>
      <div class="col">
        <VideoSection>
          <img src="..." class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content.
            </p>
          </div>
        </VideoSection>
      </div>
      <div class="col">
        <VideoSection>
          <img src="..." class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </VideoSection>
      </div>
    </div>
  );
};

export default Video;
