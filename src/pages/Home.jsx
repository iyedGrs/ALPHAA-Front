import React, { useState } from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "../index.css"; // Custom CSS for transitions

const fadeImages = [
  {
    url: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    caption: "First Slide",
    text: "This is a description for the first slide.",
  },
  {
    url: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    caption: "Second Slide",
    text: "This is a description for the second slide.",
  },
  {
    url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    caption: "Third Slide",
    text: "This is a description for the third slide.",
  },
];

const Home = () => {
  const [visible, setVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = () => {
    setVisible(false);
  };

  const handleSlideChange = (newIndex) => {
    setVisible(true); // Make the paragraph reappear when the slide changes
    setCurrentSlide(newIndex);
  };

  return (
    <div className="slide-container">
      <Fade
        duration={40000}
        transitionDuration={1100}
        onChange={(prev, next) => handleSlideChange(next)}
      >
        {fadeImages.map((fadeImage, index) => (
          <div key={index} className="each-fade">
            <div
              className={`image-container ${
                currentSlide % 2 === 0 ? "zoom-in" : "zoom-out"
              }`}
            >
              <img
                className="fade-image"
                src={fadeImage.url}
                alt={fadeImage.caption}
              />
              <h2>{fadeImage.caption}</h2>
              <p
                className={`slide-paragraph ${
                  visible ? "fade-in" : "fade-out"
                }`}
                onClick={handleClick}
              >
                {fadeImage.text}
              </p>
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default Home;
