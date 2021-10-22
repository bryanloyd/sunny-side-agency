import React from "react";
import emily from "../images/image-emily.jpg";
import thomas from "../images/image-thomas.jpg";
import jennie from "../images/image-jennie.jpg";

const TestimonialsComponent = () => {
  return (
    <>
      <h1 className="heading">Client Testimonials</h1>
      <section className="testimonials">
        <div className="testimonials_emily">
          <img src={emily} alt="" />
          <p>
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>
          <h1>Emily R.</h1>
          <small>Marketing Director</small>
        </div>

        <div className="testimonials_thomas">
          <img src={thomas} alt="" />
          <p>
            Sunnyside’s enthusiasm coupled with their keen interest in our
            brand’s success made it a satisfying and enjoyable experience.
          </p>
          <h1>Thomas S.</h1>
          <small>Chief Operating Officer</small>
        </div>

        <div className="testimonials_jennie">
          <img src={jennie} alt="" />
          <p>
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </p>
          <h1>Jennie F.</h1>
          <small>Business Owner</small>
        </div>
      </section>
    </>
  );
};

export default TestimonialsComponent;
