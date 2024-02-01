import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./Styles/Home.css";
import { FaQuoteLeft } from "react-icons/fa";
import UserImage from "../Images/UserImage.svg"

const Card = [
  { image: "UserImage", title: "Excellent Support", content: "survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of",UserName:"Alexy Sily",UserDesignation:"Ceo& Cto" },
  { image: "UserImage", title: "Excellent Support", content: "survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of",UserName:"Alexy Sily",UserDesignation:"Ceo& Cto" },
  { image: "UserImage", title: "Excellent Support", content: "survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of",UserName:"Alexy Sily",UserDesignation:"Ceo& Cto" },
  { image: "UserImage", title: "Excellent Support", content: "survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of",UserName:"Alexy Sily",UserDesignation:"Ceo& Cto" },
  { image: "UserImage", title: "Excellent Support", content: "survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of",UserName:"Alexy Sily",UserDesignation:"Ceo& Cto" },
  { image: "UserImage", title: "Excellent Support", content: "survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of",UserName:"Alexy Sily",UserDesignation:"Ceo& Cto" },
  { image: "UserImage", title: "Excellent Support", content: "survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of",UserName:"Alexy Sily",UserDesignation:"Ceo& Cto" },
  { image: "UserImage", title: "Excellent Support", content: "survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of",UserName:"Alexy Sily",UserDesignation:"Ceo& Cto" }
];

const CardSliderComponent2 = () => {

  const carouselSettings = {
    responsive: {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 3
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
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
    itemClass: 'carousel-item',
    itemClassOut: 'carousel-item-out',
    itemClassActive: 'carousel-item-active',
  };

  if (!Card || Card.length === 0) {
    return <p>No cards to display</p>;
  }

  return (
    <div style={{ backgroundColor: "black", width: "95%", paddingLeft: "0.5%", paddingRight: "1%",paddingBottom:"1%" }}>
      <Carousel {...carouselSettings} className="">
        {Card.map((card) => (
          <div className="carousel-item" key={card.title}>
            <div className="Card">
            <FaQuoteLeft className="QoutedIcon"/>
            <h3 className='CardTitle2'>{card.title}</h3>
            <h3 className='CardContent2'> {card.content}</h3>
            <div style={{display:"flex", felxDirection:"row", alignItems:"center",marginLeft:"2%",marginTop:"10%"}}> 
            <img className='UserImage2'
              src={
                card.image === "UserImage" ? UserImage :""
              }
              alt={""}
            />
            <div style={{ textAlign: "center", color: "white",marginLeft:"4%",marginTop:"0%"}}>
              <h3 className='UserName'>{card.UserName}</h3>
              <p className='UserDesignation'>{card.UserDesignation}</p>
            </div>
            </div>
            </div>
          </div>
        ))}
      </Carousel>

      </div>
  
  );
};

export default CardSliderComponent2;


