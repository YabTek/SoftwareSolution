import React from 'react';
import "./Styles/Home.css";
 import FourthScreenImage from "../Images/Image2.png"
 import Integrity from "../Images/Integrity & Ethics.svg"
 import Monitoring1 from "../Images/monitoring1.svg"
 import Expert from "../Images/it expert.svg"
 import Support from "../Images/Certified support.svg"
 import Services from "../Images/services.svg"


const FourthScreen = () => {

    const list =[
        {image:"Integrity", title:"One partner for all your data center needs"},
        {image:"Monitoring1", title:"Fast, accurate, reliable and passionate technicians"},
        {image:"Expert", title:"Full supply chain service from A to Z"},
        {image:"Support", title:"Team of professionals with passion for IT & Hardware"},
        {image:"Services", title:"Wide range of products, services and support"}
     ]


    return(
        <>
        <div className="FourthScreen">
            <div >
                <h1 className="choose" > Why Choose Reboot Monkey?</h1>
                <h5 className="desc" > Working with hardware is what we do best. And what we love most. Ever since 1996, we started and sold multiple IT companies and helped a lot of other startups and enterprises flourish. Now, over almost three decades later, we’ve combined our knowledge and experience to lift your data center burden.</h5>
              
              <div style={{marginLeft:"0%"}}>
              <ul style={{padding:"0%",marginTop:"1%"}}>
        {list.map((item, index) => (
          <li className="ListItem" key={index}>
            <img className="listImages" style={{width:"60px",height:"58px",marginLeft:"2%"}}  src={
              item.image === "Integrity" ? Integrity :
              item.image === "Monitoring1" ? Monitoring1 :
              item.image === "Expert" ? Expert :
              item.image === "Support" ? Support :
              item.image === "Services" ? Services : null
            } alt={item.title} />
            <p className="listDesc" style={{ color: "#FFF", fontFamily: "Avenir LT Std", fontSize: "22px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal",marginLeft:"2%" }}>{item.title}</p>
          </li>
        ))}
      </ul>
              </div>
            </div>

            <div >
                <img class="FourthScreenImage" style={{marginTop:"20%",height:"60%"}} src={FourthScreenImage} alt="" />

            </div>

        </div>
        </>
    )
}

export default FourthScreen;