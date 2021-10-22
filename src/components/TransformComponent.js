import React from "react";
import transform from "../images/mobile/image-transform.jpg";

const TransformComponent = () => {
  return (
    <>
      <div className="transform">
        <div className="transform_img">
          <img src={transform} alt="" />
        </div>
        <div className="transform_content">
          <h1>Transform your brand</h1>
          <p>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <button>learn more</button>
        </div>
      </div>
    </>
  );
};

export default TransformComponent;
