import React, { useState } from 'react';
import "./Styles/Home.css";
import LogoText from "../Images/logo-robot-monkey.svg"
import Bulb from "../Images/Bulb.jpg"
// import LogoText from "../Images/logo-robot-monkey.svg"
import Logo from "../Images/logo.svg"
import LinkedIn from "../Images/LinkedIn (2).svg"
import Instagram from "../Images/Instagram.svg"
import SocialMedia from "../Images/x-social-media-round-icon 1.svg"
import Facebook from "../Images/facebook-round-color-icon 1.svg"
import { FiSend } from "react-icons/fi";

const Footer = () => {

  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isErrorMessageVisible, setIsErrorMessageVisible] = useState(false);


  const handleInputChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(inputEmail));
  };

  const handleSendClick = () => {
    if (!isValidEmail) {
      setIsErrorMessageVisible(true);
      setTimeout(() => {
        setIsErrorMessageVisible(false);
      }, 1000);
    } else {
     setIsErrorMessageVisible(false);
    }
  };

    return(
        <>
        <div style={{display:"flex",flexDirection:"column",width:"auto", backgroundColor:"black"}}>

            <div style={{ display: "flex",width:"auto", padding: "5px 173px 28px 40px", flexDirection: "row", justifyContent: "space-between", color: "var(--3, #FFF)",background:"var(--backround-drop, #434343)" }}>
               
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", paddingLeft: "3%",marginTop:"0%",width: "70%", justifyContent: "center", color: "var(--3, #FFF)", fontFamily: "Avenir LT Std", fontSize: "28px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal" }}>
                 <h5 style={{    width: "auto", justifyContent: "center", color: "var(--3, #FFF)", fontFamily: "Avenir LT Std", fontSize: "22px", fontStyle: "normal", fontWeight: 350, lineHeight: "normal",marginBottom:"0%" }}> Newsletter</h5>
                 <div style={{ width: '4%', borderBottom: '2px solid #F0DE00', marginTop: '0%',marginLeft:"0%" }} />
                 <h1 style={{  width: "69%", justifyContent: "center", color: "var(--3, #FFF)", fontFamily: "Avenir LT Std", fontSize: "32px", fontStyle: "normal", fontWeight: 750, lineHeight: "normal",textAlign:"start" }}> Reboot Monkey ! Sign Up To Get The Latest Catch Sent To Your Inbox.</h1>
                <div style={{display:"flex",flexDirection:"row",alignItems:"center",marginTop:"3%"}}>
                <input className="InputMailAddress" type="text" placeholder="Your mail address" value={email} onChange={handleInputChange} />   
                <FiSend className="SendIcon" onClick={handleSendClick}/>
                </div>
                {isErrorMessageVisible && <p className="ErrorMessage">Please enter a valid email address</p>}
               </div>

              
      <div style={{ display: "flex", flexDirection: "column", marginTop: "1%", width: "15%", height: "100%" }}>
        <img className="bulb-image" src={Bulb} alt="" style={{ height: "40%" }} />
        <img src={LogoText} alt="" style={{ marginTop: "5%" }} />
      </div>
   


            </div>

            <div style={{display:"flex",flexDirection:"row",backgroundColor:"black"}}>

              <div style={{display:"flex",flexDirection:"column",width:"30%",marginTop:"2%",marginLeft:"5%"}}>

                <div style={{display:"flex",flexDirection:"row",alignItems:"center",gap: "8px",marginBottom:"3%"}}>
                <img src={Logo} alt=""  />
                <img src={LogoText} alt=""  />
                </div>

                <h5 className="FooterText"> Providing Complete IT solutions, Globally.</h5>
                <h5 className="FooterText" style={{marginTop:"1%",marginLeft:"0px"}}> Reboot Monkey covers the full lifecycle of technology solutions and works across various IT disciplines to advance digital business globally to manage and simplify technology.</h5>
               
               <div style={{display:"flex",flexDirection:"row",gap:"2%",marginTop:"5%",marginBottom:"7%",cursor:"pointer"}}>
                <img src={LinkedIn} alt="" />
                <img src={Instagram} alt="" />
                <img src={SocialMedia} alt="" />
                <img src={Facebook} alt="" />
               </div>
             
              </div>

              <div style={{display:"flex",flexDirection:"column",width:"15%",marginTop:"1%",marginLeft:"5%"}}>
                 <h1 className="HeaderFooterText" > Company</h1>
                 <div style={{ width: '22%', borderBottom: '2px solid #F0DE00',marginBottom:"10%"}} />
                 <h5 className="FooterText"> About Us</h5>
                 <h5 className="FooterText"> Our Team</h5>
                 <h5 className="FooterText"> FAQs</h5>
                 <h5 className="FooterText"> Careers</h5>
              </div>

              <div style={{display:"flex",flexDirection:"column",width:"15%",marginTop:"1%",marginLeft:"1%"}}>
                 <h1 className="HeaderFooterText"> Products</h1>
                 <div style={{ width: '22%', borderBottom: '2px solid #F0DE00',marginBottom:"10%"}} />
                 <h5 className="FooterText"> Rack Servers</h5>
                 <h5 className="FooterText"> IP Transit</h5>
                 <h5 className="FooterText"> S.L.A</h5>
               </div>

               <div style={{display:"flex",flexDirection:"column",width:"20%",marginTop:"1%",marginLeft:"1%",marginRight:"10%"}}>
                 <div>
                 <h1 className="HeaderFooterText"> Services</h1>
                 </div> 

                 <div style={{ width: '22%', borderBottom: '2px solid #F0DE00',marginBottom:"10%"}} />

                 <div style={{display:"flex",flexDirection:"row"}}>
                 <div style={{display:"flex",flexDirection:"column",width:"40%",marginTop:"0%",marginRight:"7%"}}>
                 <h5 className="FooterText"> Rack & Network</h5>
                 <h5 className="FooterText"> Monitoring</h5>
                 <h5 className="FooterText"> Smart Hands</h5>
                 <h5 className="FooterText"> Data Destroying</h5>
                 <h5 className="FooterText"> Recycling</h5>
                </div>

                <div style={{display:"flex",flexDirection:"column",width:"40%",marginTop:"0%"}}>
                 <h5 className="FooterText"> Design</h5>
                 <h5 className="FooterText"> Rack and Stack</h5>
                 <h5 className="FooterText"> Remote Hands</h5>
                 <h5 className="FooterText"> Hardware</h5>
                </div>
                </div>
                
               </div>

            </div>

        </div>
        </>
    )
}

export default Footer;