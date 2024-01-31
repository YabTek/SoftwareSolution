import React from 'react';
import "./Styles/Home.css";
import FifthScreenImage from "../Images/FifthScreenImage.png"

const FifthScreen = () => {

    return(
        <>
        <div style={{ display: "flex", width: "auto", height: "535px", alignItems: "center", gap: "80px",backgroundColor:"black",paddingLeft:"5%",paddingRight:"7%"}}>

            <div style={{display:"flex",flexDirection:"column",width:"65%",alignItems:"flex-start",gap:"8px"}}>
                <h1 style={{width:"90%", color: "var(--3, #FFF)", fontFamily: "Avenir LT Std", fontSize: "48px", fontStyle: "normal", fontWeight: 750, lineHeight: "normal",textAlign:"start",marginLeft:"0%" }}> What makes Reboot Monkey unique?</h1>
                <h5 style={{width:"75%",alignSelf:"stretch", color: "#FFF", fontFamily: "Avenir LT Std", fontSize: "22px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal",textAlign:"start" }}
> Reboot Monkey is a purpose-driven company that considers our team our most important asset. We are looking for talented professionals with a deep understanding of IT solutions and a passion for customer service and support. 
<br/><br/><br/>
The ideal candidate wants to invest in the company's future and be part of  an
energetic team. Join a team that motivates you to excellence and take your career to new heights.
</h5> 
 <h5 style={{ color: "var(--primary-color, #F0DE00)", fontFamily: "Avenir LT Std", fontSize: "24px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal", textDecorationLine: "underline",marginTop:"0%" }}>See More</h5>

            </div>

            <div className="image-container">
              <img className="up-and-down-motion" style={{marginRight:"10%",marginTop:"0%"}} src={FifthScreenImage} alt="" />
            </div>

        </div>
        </>
    )
}

export default FifthScreen;