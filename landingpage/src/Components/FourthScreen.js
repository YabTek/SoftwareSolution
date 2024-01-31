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
        <div className="" style={{display:"flex",flexDirection:"row",width:"auto",backgroundColor:"black",paddingLeft:"5%",paddingRight:"7%",paddingTop:"5%",paddingBottom:"5%"}}>
            <div style={{display:"flex",flexDirection:"column"}}>
                <h1  style={{width:"100%", color: '#FFF', fontFamily: 'Avenir LT Std', fontSize: '48px', fontStyle: 'normal', fontWeight: 750, lineHeight: 'normal',textAlign:"start",marginBottom:"0%" }}> Why Choose Reboot Monkey?</h1>
                <h5  style={{width:"88%", color: '#FFF', fontFamily: 'Avenir LT Std', fontSize: '18px', fontStyle: 'normal', fontWeight: 400, lineHeight: 'normal',alignSelf: "stretch",textAlign:"start",marginTop:"2%" }}> Working with hardware is what we do best. And what we love most. Ever since 1996, we started and sold multiple IT companies and helped a lot of other startups and enterprises flourish. Now, over almost three decades later, we’ve combined our knowledge and experience to lift your data center burden.</h5>
              
              <div style={{marginLeft:"0%"}}>
              <ul style={{padding:"0%",marginTop:"1%"}}>
        {list.map((item, index) => (
          <li className="ListItem" key={index}>
            <img style={{width:"60px",height:"58px",marginLeft:"2%"}}  src={
              item.image === "Integrity" ? Integrity :
              item.image === "Monitoring1" ? Monitoring1 :
              item.image === "Expert" ? Expert :
              item.image === "Support" ? Support :
              item.image === "Services" ? Services : null
            } alt={item.title} />
            <p style={{ color: "#FFF", fontFamily: "Avenir LT Std", fontSize: "22px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal",marginLeft:"2%" }}>{item.title}</p>
          </li>
        ))}
      </ul>
              </div>
            </div>

            <div >
                <img  style={{marginTop:"20%",height:"60%"}} src={FourthScreenImage} alt="" />

            </div>

        </div>
        </>
    )
}

export default FourthScreen;