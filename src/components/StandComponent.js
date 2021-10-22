import React from "react";
import standout from "../images/mobile/image-stand-out.jpg";

const StandComponent = () => {
  return (
    <>
      <div className="stand">
        <div className="stand_img">
          <img src={standout} alt="" />
        </div>
        <div className="stand_content">
          <h1>Stand out to the right audience</h1>
          <p>
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <button>learn more</button>
        </div>
      </div>
    </>
  );
};

export default StandComponent;
