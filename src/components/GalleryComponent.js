import React from "react";
import img1 from "../images/mobile/image-gallery-milkbottles.jpg";
import img2 from "../images/mobile/image-gallery-orange.jpg";
import img3 from "../images/mobile/image-gallery-cone.jpg";
import img4 from "../images/mobile/image-gallery-sugar-cubes.jpg";

const GalleryComponent = () => {
  return (
    <>
      <section className="gallery">
        <div className="gallery_img1">
          <img src={img1} alt="" />
        </div>
        <div className="gallery_img2">
          <img src={img2} alt="" />
        </div>
        <div className="gallery_img3">
          <img src={img3} alt="" />
        </div>
        <div className="gallery_img4">
          <img src={img4} alt="" />
        </div>
      </section>
    </>
  );
};

export default GalleryComponent;
