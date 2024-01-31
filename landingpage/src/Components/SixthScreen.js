import React from 'react';
import "./Styles/Home.css";
import CardSliderComponent2 from "./Slider2";


const SixthScreen = () => {

    return(
        <>
        <div style={{display:"inline-flex",flexDirection:"column",backgroundColor:"black",paddingBottom:"5%",paddingLeft:"5%"}}>
            <h6 style={{ color: "var(--3, #FFF)",textAlign:"start", fontFamily: "Avenir LT Std", fontSize: "20px", fontStyle: "normal", fontWeight: 350, lineHeight: "normal",marginBottom:"0%",paddingLeft:"43%" }}> Testimonials</h6>
            <div style={{ width: '2%', borderBottom: '2px solid #F0DE00', marginTop: '0%',marginLeft:"43%",marginBottom:"0%"}} />
                 
            <h1 style={{width:"609px",height:"46px", color: "var(--3, rgba(255, 255, 255, 0.87))", fontFamily: "Avenir LT Std", fontSize: "42px", fontStyle: "normal", fontWeight: 750, lineHeight: "normal",marginLeft:"27%",marginTop:"2%",marginBottom:"0%" }}> Loved by Thousands of Clients</h1>
            <h5 style={{width:"1016px",height:"73px", color: "var(--3, #FFF)", textAlign: "center", fontFamily: "Avenir LT Std", fontSize: "28px", fontStyle: "normal", fontWeight: 350, lineHeight: "normal",marginLeft:"15%",marginTop:"2%" }}> We place  huge value on strong relashionships and have seen the benifit they bring to our business.customer feedback is vital in helping us to get it right. </h5>
            <CardSliderComponent2 />
            <button style={{ display: "flex", width: "214px", height: "48px", padding: "8px 10px", justifyContent: "center", alignItems: "center", gap: "10px", borderRadius: "6px", background: "var(--primary-color, #F0DE00)",marginLeft:"43%",marginTop:"2%",cursor:"pointer"}}> See More</button>
        </div>
        </>
    )
}

export default SixthScreen;