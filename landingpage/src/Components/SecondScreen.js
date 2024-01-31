import React from 'react';
import "./Styles/Home.css";
import Line from "../Images/Line.svg"

const SecondScreen = () => {


    return(
        <>
        <div className="SecondScreen">
            <div style={{display: "flex",flexDirection: "column",alignSelf: "stretch"}}>
            <h1 className="SecondScreenText1">Your Growth Goals. Our Priority.</h1>
            <div style={{ width: '4%', borderBottom: '2px solid #F0DE00', marginTop: '0%',marginLeft:"30%",alignItems:"start" }} />
            <h5 className="SecondScreenText2"> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
The point of using Lorem Ipsum is that it has a more-or-less normal distribution</h5>
<div style={{display:"flex",flexDirection:"row",alignItems:"center",width:"100%"}}> 
<h5 className="SecondScreenText2" style={{width:"64%",marginLeft:"17%"}}> Results from Clari after 9 months of partnership with Refine Labs. See full story </h5>
          <h5 className="SecondScreenText3"> here</h5> 
          </div>
        </div>

        <div style={{display:"flex",justifyContent:"space-between",width:"auto",marginLeft:"0%"}}>

            <div style={{display:"flex",flexDirection:"column",width:"25%",paddingLeft:"0%"}}>
             <h1 className="SecondScreenNumberText" style={{marginRight:"2%"}}> 300+</h1>
             <h5 style={{marginTop:"2%",color:"var(--3, #FFF)",textAlign: "center",fontFamily: "Avenir LT Std",fontSize: "28px",fontStyle: "normal",fontWeight: "400",lineHeight: "normal"}}> Avalible reboot monkey at your services</h5>
            </div>
 
            <div style={{ width: '2%',height: '80%', borderRight: '2px solid white', marginTop: '2%', marginLeft: '0%' }} />
  
            <div style={{display:"flex",flexDirection:"column"}}>
             <h1 className="SecondScreenNumberText"> 290+</h1>
             <h5 style={{marginTop:"11%",color:"var(--3, #FFF)",fontFamily: "Avenir LT Std",fontSize: "28px",fontStyle: "normal",fontWeight: "400",lineHeight: "normal"}}> Saving datacenters</h5>
            </div>

            <div style={{ width: '2%',height: '80%', borderRight: '2px solid white', marginTop: '2%', marginLeft: '0%' }} />
  
            <div style={{display:"flex",flexDirection:"column"}}>
             <h1 className="SecondScreenNumberText"> 440+</h1>
             <h5 style={{marginTop:"11%",color:"var(--3, #FFF)",fontFamily: "Avenir LT Std",fontSize: "28px",fontStyle: "normal",fontWeight: "400",lineHeight: "normal"}}> CO2 m2 saved</h5>
            </div>
  
         </div>
        </div>
        </>
    )
}

export default SecondScreen;