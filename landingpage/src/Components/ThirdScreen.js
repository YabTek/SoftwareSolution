import React from 'react';
import "./Styles/Home.css";
import RackUnitIcon from "../Images/Rack-unit-icon.svg"


const ThirdScreen = () => {

    return(
        <>
        <div style={{display:"flex",flexDirection:"column",backgroundColor:"black"}}>
            <h1 style={{color: 'var(--3, #FFF)',textAlign: 'center',fontFamily: 'Avenir LT Std',fontSize: '42px',fontStyle: 'normal',fontWeight: 750,lineHeight: 'normal',}}> Colocation Server Hosting Solutions </h1>

        <div className="cards">

            <div className="RackUnitContainer">
                <img src={RackUnitIcon} alt="" />
                <h1 style={{color: 'var(--primary-color, #F0DE00)',fontFamily: 'Avenir LT Std',fontSize: '24px',fontStyle: 'normal',fontWeight: 750,lineHeight: 'normal'}}> Rack Unit</h1>
                <h5 style={{ color: 'var(--3, #FFF)', textAlign: 'center', fontFamily: 'Avenir LT Std', fontSize: '16px', fontStyle: 'normal', fontWeight: 400, lineHeight: 'normal' }}> If you don’t have the time, knowledge or engineers to install servers or a network patch,We have the right engineers for your needs who simply love getting their hands dirty for the job.</h5>
                <h5 style={{ color: 'var(--3, #FFF)', fontFamily: 'Avenir LT Std', fontSize: '24px', fontStyle: 'normal', fontWeight: 750, lineHeight: 'normal' }}> $99.49</h5>
                <button className="RackUnitButton" > Explore units</button>
            </div>

            <div className="FullRackContainer">
                <img src={RackUnitIcon} alt="" />
                <h1 style={{color: 'var(--primary-color, #F0DE00)',fontFamily: 'Avenir LT Std',fontSize: '24px',fontStyle: 'normal',fontWeight: 750,lineHeight: 'normal'}}> Full Rack</h1>
                <h5 style={{ color: 'var(--3, #FFF)', textAlign: 'center', fontFamily: 'Avenir LT Std', fontSize: '16px', fontStyle: 'normal', fontWeight: 400, lineHeight: 'normal' }}>If you don’t have the time, knowledge or engineers to install servers or a network patch,We have the right engineers for your needs who simply love getting their hands dirty for the job.</h5>
                <h5 style={{ color: 'var(--3, #FFF)', fontFamily: 'Avenir LT Std', fontSize: '24px', fontStyle: 'normal', fontWeight: 750, lineHeight: 'normal' }}> $99.49</h5>
                <button className="RackUnitButton" > Explore racks</button>
            </div>

            <div className="CageContainer">
                <img src={RackUnitIcon} alt="" />
                <h1 style={{color: 'var(--primary-color, #F0DE00)',fontFamily: 'Avenir LT Std',fontSize: '24px',fontStyle: 'normal',fontWeight: 750,lineHeight: 'normal'}}> Cage</h1>
                <h5 style={{ color: 'var(--3, #FFF)', textAlign: 'center', fontFamily: 'Avenir LT Std', fontSize: '16px', fontStyle: 'normal', fontWeight: 400, lineHeight: 'normal' }}>If you don’t have the time, knowledge or engineers to install servers or a network patch,We have the right engineers for your needs who simply love getting their hands dirty for the job.</h5>
                <h5 style={{ color: 'var(--3, #FFF)', fontFamily: 'Avenir LT Std', fontSize: '24px', fontStyle: 'normal', fontWeight: 750, lineHeight: 'normal' }}> $99.49</h5>
                <button className="RackUnitButton" > Explore racks</button>
            </div>
        </div>

        <div style={{display:"flex",flexDirection:"column",marginTop:"3%",justifyContent:"center"}}>
           <h1 style={{marginLeft:"0%",color: '#FFF', fontFamily: 'Avenir LT Std', fontSize: '35px', fontStyle: 'normal', fontWeight: 750, lineHeight: 'normal',marginBottom:"0%",textAlign:"center" }}> We are a team of passionate engineers</h1>
                
           <h5 style={{ color: '#FFF', fontFamily: 'Avenir LT Std', fontSize: '22px', fontStyle: 'normal', fontWeight: 750, lineHeight: '130.8%', textAlign:"center" }}> From custom software development to web and mobile application design, 
            we have the expertise to bring your vision to life.</h5>


        </div>
           
        </div>
        
        </>
    )
}

export default ThirdScreen;