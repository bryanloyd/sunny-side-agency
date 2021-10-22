import React from "react";
import "./App.css";
import FooterComponent from "./components/FooterComponent";
import GalleryComponent from "./components/GalleryComponent";
import ServicesComponent from "./components/ServicesComponent";
import ShowcaseComponent from "./components/ShowcaseComponent";
import StandComponent from "./components/StandComponent";
import TestimonialsComponent from "./components/TestimonialsComponent";
import TransformComponent from "./components/TransformComponent";

const App = () => {
  return (
    <div className="App">
      <ShowcaseComponent />
      <TransformComponent />
      <StandComponent />
      <ServicesComponent />
      <TestimonialsComponent />
      <GalleryComponent />
      <FooterComponent />
    </div>
  );
};

export default App;
