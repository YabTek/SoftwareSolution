import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./Styles/Home.css";

import RemoteHands from "../Images/Remote-hands.svg"
import SmartHands from "../Images/HANDS.svg"
import Monitoring from "../Images/monitoring.svg"
import Destroying from "../Images/Data-Destroying.svg"

const Card = [
  { img: "RemoteHands", title: "Remote Hands", content: "24/7 Smart Hands: Your hardware's on-site support solution!" },
  { img: "SmartHands", title: "Smart Hands", content: "24/7 Smart Hands: Your hardware's on-site support solution!" },
  { img: "Monitoring", title: "Hardware Recycling", content: "24/7 Smart Hands: Your hardware's on-site support!" },
  { img: "Destroying", title: "Data Destroying", content: "24/7 Smart Hands: Your hardware's on-site support solution!" },
  { img: "RemoteHands", title: "Remote Hands", content: "24/7 Smart Hands: Your hardware's on-site support solution!" },
  { img: "SmartHands", title: "Smart Hands", content: "24/7 Smart Hands: Your hardware's on-site support solution!" }
];

const CardSliderComponent = () => {
  const carouselSettings = {
    responsive: {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 4
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    },
    arrows: true,
    showDots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    customTransition: "transform 500ms ease-in-out",
    containerClass: 'carousel-container',
    // itemClass: 'carousel-item',
    dotListClass: 'custom-dot-list',
  };

  if (!Card || Card.length === 0) {
    return <p>No cards to display</p>;
  }

  return (
    <div style={{ backgroundColor: "black", width: "auto", paddingLeft: "0.5%", paddingRight: "1%" }}>
      <Carousel {...carouselSettings} className="carousel-container">
        {Card.map((card) => (
          <div className="Slider" key={card.title}>
            <img className='CardImage'
              src={
                card.img === "RemoteHands" ? RemoteHands :
                  card.img === "SmartHands" ? SmartHands :
                    card.img === "Monitoring" ? Monitoring :
                      card.img === "Destroying" ? Destroying : null
              }
              alt={""}
              style={{ display:"flex", width: "40%", height: "40%", borderRadius: "50%"}}
            />
            <div style={{ textAlign: "center", color: "white" }}>
              <h3 className='CardTitle'>{card.title}</h3>
              <p className='CardContent'>{card.content}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CardSliderComponent;


