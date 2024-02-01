import React from 'react';
import "./Styles/Home.css";
import Line from "../Images/Line.svg"

const SecondScreen = () => {


    return(
        <>
        <div className="SecondScreen">
            <div style={{display: "flex",flexDirection: "column",alignSelf: "stretch"}}>
            <h1 className="SecondScreenText1">Your Growth Goals. Our Priority.</h1>
            <h5 className="SecondScreenText2"> We provide cutting-edge software solutions tailored to meet 
            the diverse needs of modern businesses. We are dedicated to delivering innovative technology that 
            empowers our clients to thrive in an ever-evolving digital landscape.</h5>
<h5 className="SecondScreenText2" style={{display:"flex",justifyContent:"center"}}>We have a lot of data and cloud centers</h5>
        </div>

        <div className="priority" style={{display:"flex",justifyContent:"space-between",width:"auto",marginLeft:"0%"}}>

            <div className="first">
             <h1 className="SecondScreenNumberText" style={{marginRight:"2%"}}> 300+</h1>
             <h5 style={{marginTop:"11%",color:"var(--3, #FFF)",textAlign: "center",fontFamily: "Avenir LT Std",fontSize: "28px",fontStyle: "normal",fontWeight: "400",lineHeight: "normal"}}> different services</h5>
            </div>
 
            <div className="border" style={{ width: '2%',height: '80%', borderRight: '2px solid white', marginTop: '2%', marginLeft: '0%' }} />
  
            <div className="second" style={{display:"flex",flexDirection:"column"}}>
             <h1 className="SecondScreenNumberText"> 290+</h1>
             <h5 style={{marginTop:"11%",color:"var(--3, #FFF)",fontFamily: "Avenir LT Std",fontSize: "28px",fontStyle: "normal",fontWeight: "400",lineHeight: "normal"}}> data centers</h5>
            </div>

            <div style={{ width: '2%',height: '80%', borderRight: '2px solid white', marginTop: '2%', marginLeft: '0%' }} />
  
            <div className="third" >
             <h1 className="SecondScreenNumberText"> 440+</h1>
             <h5 style={{marginTop:"11%",color:"var(--3, #FFF)",fontFamily: "Avenir LT Std",fontSize: "28px",fontStyle: "normal",fontWeight: "400",lineHeight: "normal"}}> Cloud centers</h5>
            </div>
  
         </div>
        </div>
        </>
    )
}

export default SecondScreen;