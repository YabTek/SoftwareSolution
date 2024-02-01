import React from 'react';
import "./Styles/Home.css";

const FormComponent = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
      };

    return(
        <div className='FormComponent'>
        <div style={{ display: "flex", width: "auto", alignItems: "flex-start",justifyContent:"space-between", flexDirection: "row",backgroundColor:"black",paddingLeft:"5%" }}>
            <div style={{display:"flex",flexDirection:"column",width:"50%",marginLeft:"0px",textAlign:"start"}}>
                <h1 style={{ display: "flex", width: "auto",textAlign:"start", color: "#FFF", fontFamily: "Avenir LT Std", fontSize: "48px", fontStyle: "normal",marginBottom:"0%"}}> Meet with an Expert.</h1>
                <div style={{ width: '11%', borderBottom: '2px solid #F0DE00', marginTop: '0%',marginLeft:"0%" }} />
                <h4 style={{ display: "flex", width: "auto", color: "var(--grey-typing, #E0DEDE)", fontFamily: "Avenir LT Std", fontSize: "28px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal",marginTop:"3%" }}> Book a call to see if we are the right partner to help you grow.</h4>
                <h4 style={{ display: "flex", width: "auto", color: "var(--grey-typing, #E0DEDE)", fontFamily: "Avenir LT Std", fontSize: "28px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal",marginTop:"0%" }}> We will assess the situation and determine if we can help. Then
we will craft a tailored plan for you.</h4>
                <h6 style={{ display: "flex", width: "auto",color: "var(--grey-typing, #E0DEDE)", fontFamily: "Avenir LT Std", fontSize: "16px", fontStyle: "normal", fontWeight: 350, lineHeight: "normal",marginTop:"0%" }}> *After completing the form,you will be prompted to pick a meeting time.</h6>
            </div>

            <div className="Form" style={{ display: "flex", flexDirection: "column",width:"auto",marginRight:"13%",marginTop:"3%" }}>
          <form onSubmit={handleSubmit}>
          <div className="Contactus" style={{marginLeft:"0px", marginBottom: '10px' }} htmlFor="contactUs">Contact us</div>
    
          
            <label className="NameField" htmlFor="name">Name:</label>
            <input className="InputField" type="text" id="name" name="name" required />

            <label className="NameField" htmlFor="email">E-Mail:</label>
            <input className="InputField" type="email" id="email" name="email" required />

            <label className="NameField"  htmlFor="subject">Subject:</label>
            <input className="InputField" type="text" id="subject" name="subject" required />

            <label className="NameField"  htmlFor="message">Message:</label>
            <textarea className="MessageInputField" id="message" name="message" rows="8" required></textarea>

            <button className="SubmitButton" type="submit">Submit</button>
          </form>
        </div>

        </div>
        </div>
    )
}

export default FormComponent;