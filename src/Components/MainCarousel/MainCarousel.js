import React from "react";

//Assets
import Video1 from "../../Assets/Video1.mp4";
import Video2 from "../../Assets/Video2.mp4";
import Video3 from "../../Assets/Video3.mp4";

// Components
import Carousel from "./Carousel";

const MainCarousel = () => {
  const slides = [
    "https://foyr.com/learn/wp-content/uploads/2021/08/design-your-dream-home.jpg",
  ];
  return (
    <>
      <div className="max-w-full">
        <Carousel autoSlide={true}>
          {[
            ...slides.map((s) => <img src={s} />),
            <video src={Video1} autoPlay muted loop />,
            <video src={Video2} autoPlay muted loop />,
            <video src={Video3} autoPlay muted loop />,
          ]}
        </Carousel> 
      </div>
    </>
  );
};

export default MainCarousel;
