import React, { useState } from 'react';
import "./Styles/Home.css"
import { IoMdArrowDropdown } from "react-icons/io";
import Info from "../../src/Images/info.svg"
import Ticket from "../../src/Images/OprnTicket.svg"
import WhatsApp from "../../src/Images/whatsapp.svg"
import LinkedIn from "../../src/Images/LinkedIn.svg"
import Setting from "../../src/Images/Setting.svg"
import SignIn from "../../src/Images/SignIn.svg"
import LogoText from "../../src/Images/logo-robot-monkey.svg"
import Logo from "../../src/Images/logo.svg"
import ShoppingCart from "../../src/Images/shopping-cart.svg"


const Navbar = () => {

    const [isContactUsHovered, setContactUsHovered] = useState(false);
    const [isOpenTicketHovered, setOpenTicketHovered] = useState(false);
    const [isWhatsAppHovered, setWhatsAppHovered] = useState(false);
    const [isProductsDropdownOpen, setProductsDropdownOpen] = useState(false);
    const [isServicesDropdownOpen, setServicesDropdownOpen] = useState(false);
    const [isAboutUsDropdownOpen, setAboutUsDropdownOpen] = useState(false);

    const toggleProductsDropdown = () => {
      setProductsDropdownOpen(!isProductsDropdownOpen);
      setServicesDropdownOpen(false);
      setAboutUsDropdownOpen(false);
    };

    const toggleServicesDropdown = () => {
      setServicesDropdownOpen(!isServicesDropdownOpen);
      setProductsDropdownOpen(false);
      setAboutUsDropdownOpen(false);
    };

    const toggleAboutUsDropdown = () => {
      setAboutUsDropdownOpen(!isAboutUsDropdownOpen);
      setProductsDropdownOpen(false);
      setServicesDropdownOpen(false);
    };
  
    const underlineStyle = {
      borderBottom: '2px solid',
      borderBottomColor: '#000',
      transition: 'border-bottom-color 0.9s ease-in-out',
    };


    return(
        <>
        <div className="navbar">
        <div className="infos">
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "8px", position: "relative", ...(isContactUsHovered && underlineStyle) }}
        onMouseEnter={() => setContactUsHovered(true)}
        onMouseLeave={() => setContactUsHovered(false)}
      >
        <img src={Info} alt="" />
        <h5 className="contact" style={{ cursor: "pointer", textDecoration: "none" }}>Contact Us</h5>
      </div>

      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "8px", position: "relative", ...(isOpenTicketHovered && underlineStyle) }}
        onMouseEnter={() => setOpenTicketHovered(true)}
        onMouseLeave={() => setOpenTicketHovered(false)}
      >
        <img src={Ticket} alt="" />
        <h5 className="texts" style={{ cursor: "pointer", textDecoration: "none" }}>Open Ticket</h5>
      </div>

      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "8px", position: "relative", ...(isWhatsAppHovered && underlineStyle) }}
        onMouseEnter={() => setWhatsAppHovered(true)}
        onMouseLeave={() => setWhatsAppHovered(false)}
      >
        <img src={WhatsApp} alt="" />
        <h5 className="texts" style={{ cursor: "pointer", textDecoration: "none" }}>WhatsApp</h5>
      </div>
    </div>

            <div className="icons" style={{}}>
                <img style={{cursor:"pointer"}} src={LinkedIn} alt="" />
                <img src={Setting} style={{marginTop:"0%", height:"24%",backgroundColor:"black",borderRadius:"100%",padding:"5px",cursor:"pointer"}} alt="" />
                <img src={SignIn} style={{marginTop:"0%", height:"24%",backgroundColor:"black",borderRadius:"100%",padding:"5px",cursor:"pointer"}} alt="" />
             </div>  

        </div>

        <div style={{display:"flex",flexDirection:"row",backgroundColor:"black",padding:"5px 40px"}}>
            <div style={{display:"flex",alignItems:"center",gap: "8px",cursor:"pointer"}}>
                <img src={Logo} alt=""  />
                <img src={LogoText} alt=""  />
            </div>

            <div className="parts">
                <h5 className="NavbarMiddle">Home</h5>
                <h5 className="NavbarMiddle">Blog</h5>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center",cursor:"pointer" }} onClick={toggleProductsDropdown}>
          <h5 className="NavbarMiddle" >Products</h5>
          <IoMdArrowDropdown style={{ color: "white" }} />
          {isProductsDropdownOpen && (
            <div className="DropDownContainer">
              <h5 className="DropdownItem">Product 1</h5>
              <h5 className="DropdownItem">Product 2</h5>
              <h5 className="DropdownItem">Product 3</h5>
            </div>
          )}
        </div>

       
                <div style={{display:"flex",flexDirection:"row",alignItems:"center",cursor:"pointer"}} onClick={toggleServicesDropdown}>
                <h5 className="NavbarMiddle">Services</h5>
                <IoMdArrowDropdown style={{color:"white"}} />
                {isServicesDropdownOpen && (
            <div className="DropDownContainer">
              <h5 className="DropdownItem">Services 1</h5>
              <h5 className="DropdownItem">Services 2</h5>
              <h5 className="DropdownItem">Services 3</h5>
            </div>
                )}
                </div>
                <div style={{display:"flex",flexDirection:"row",alignItems:"center",cursor:"pointer"}} onClick={toggleAboutUsDropdown}>
                <h5 className="NavbarMiddle">About Us</h5>
                <IoMdArrowDropdown style={{color:"white"}} />
                {isAboutUsDropdownOpen && (
            <div className="DropDownContainer">
              <h5 className="DropdownItem">About us 1</h5>
              <h5 className="DropdownItem">About us 2</h5>
              <h5 className="DropdownItem">About us 3</h5>
            </div>
                )}
                </div>
            </div>

            <div className="shopping">
                <button className="ShopProductButton"> Shop Product</button>
                <img src={ShoppingCart} alt="" style={{cursor:"pointer"}} />
            </div>


            </div>   
        
        </>
    )
}

export default Navbar;