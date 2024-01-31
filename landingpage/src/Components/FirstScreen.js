import React from 'react';
import "./Styles/Home.css";
import FirstScreenImage from "../Images/Frame.png";

const FirstScreen = () => {

    return(
        <>
        <div style={{display:"flex",width:"auto",flexDirection:"row",backgroundColor:"rgba(240, 222, 0, 1)",padding:"40px 40px 80px 40px",justifyContent:"center",alignItems:"center",gap:"66px"}}>

            <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"flex-start",gap:"8px",flex:"1 0 0",textAlign:"start",marginBottom:"0%"}}>
                <h1 className="FirstScreenText1"> Providing Compelete IT solutions, Globally</h1>
                <h5 className="FirstScreenText2">Reboot Monkey covers the full lifecycle of technology solutions and works across various ITdisciplines toadvance  digital business globally to manage and simplify technology.</h5>
                <button className="Quote"> Get A Qoute</button>
            </div>

            <div style={{display: 'flex',justifyContent:"flex-end",alignItems: "center",gap:"10px",flex:"1 0 0"}}>
                <img src={FirstScreenImage} alt="" />
            </div>

        </div>
        </>
    )
}

export default FirstScreen;
