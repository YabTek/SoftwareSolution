import React from 'react';
import "./Styles/Home.css";
import RackUnitIcon from "../Images/Rack-unit-icon.svg"
import RemoteHands from "../Images/Remote-hands.svg"
import SmartHands from "../Images/HANDS.svg"
import Monitoring from "../Images/monitoring.svg"
import Destroying from "../Images/Data-Destroying.svg"
import CardSlider from './Slider';
import CardSliderComponent from './Slider';


const ThirdScreen = () => {

    return(
        <>
        <div style={{display:"flex",flexDirection:"column",backgroundColor:"black"}}>
            <h1 style={{color: 'var(--3, #FFF)',textAlign: 'center',fontFamily: 'Avenir LT Std',fontSize: '42px',fontStyle: 'normal',fontWeight: 750,lineHeight: 'normal',}}> Colocation Server Hosting Solutions </h1>

        <div style={{display:"flex",flexDirection:"row",gap:"3%",marginLeft:"10%"}}>

            <div className="RackUnitContainer">
                <img src={RackUnitIcon} alt="" />
                <h1 style={{color: 'var(--primary-color, #F0DE00)',fontFamily: 'Avenir LT Std',fontSize: '24px',fontStyle: 'normal',fontWeight: 750,lineHeight: 'normal'}}> Rack Unit</h1>
                <h5 style={{ color: 'var(--3, #FFF)', textAlign: 'center', fontFamily: 'Avenir LT Std', fontSize: '16px', fontStyle: 'normal', fontWeight: 400, lineHeight: 'normal' }}> If you don’t have the time, knowledge or engineers to install servers or a network patch,We have the right engineers for your needs who simply love getting their hands dirty for the job.</h5>
                <h5 style={{ color: 'var(--3, #FFF)', fontFamily: 'Avenir LT Std', fontSize: '20px', fontStyle: 'normal', fontWeight: 400, lineHeight: 'normal' }}> Starting from</h5>
                <h5 style={{ color: 'var(--3, #FFF)', fontFamily: 'Avenir LT Std', fontSize: '24px', fontStyle: 'normal', fontWeight: 750, lineHeight: 'normal' }}> $99.49</h5>
                <button className="RackUnitButton" > Explore units</button>
            </div>

            <div className="FullRackContainer">
                <img src={RackUnitIcon} alt="" />
                <h1 style={{color: 'var(--primary-color, #F0DE00)',fontFamily: 'Avenir LT Std',fontSize: '24px',fontStyle: 'normal',fontWeight: 750,lineHeight: 'normal'}}> Full Rack</h1>
                <h5 style={{ color: 'var(--3, #FFF)', textAlign: 'center', fontFamily: 'Avenir LT Std', fontSize: '16px', fontStyle: 'normal', fontWeight: 400, lineHeight: 'normal' }}>If you don’t have the time, knowledge or engineers to install servers or a network patch,We have the right engineers for your needs who simply love getting their hands dirty for the job.</h5>
                <h5 style={{ color: 'var(--3, #FFF)', fontFamily: 'Avenir LT Std', fontSize: '20px', fontStyle: 'normal', fontWeight: 400, lineHeight: 'normal' }}> Starting from</h5>
                <h5 style={{ color: 'var(--3, #FFF)', fontFamily: 'Avenir LT Std', fontSize: '24px', fontStyle: 'normal', fontWeight: 750, lineHeight: 'normal' }}> $99.49</h5>
                <button className="RackUnitButton" > Explore racks</button>
            </div>

            <div className="CageContainer">
                <img src={RackUnitIcon} alt="" />
                <h1 style={{color: 'var(--primary-color, #F0DE00)',fontFamily: 'Avenir LT Std',fontSize: '24px',fontStyle: 'normal',fontWeight: 750,lineHeight: 'normal'}}> Cage</h1>
                <h5 style={{ color: 'var(--3, #FFF)', textAlign: 'center', fontFamily: 'Avenir LT Std', fontSize: '16px', fontStyle: 'normal', fontWeight: 400, lineHeight: 'normal' }}>If you don’t have the time, knowledge or engineers to install servers or a network patch,We have the right engineers for your needs who simply love getting their hands dirty for the job.</h5>
                <h5 style={{ color: 'var(--3, #FFF)', fontFamily: 'Avenir LT Std', fontSize: '20px', fontStyle: 'normal', fontWeight: 400, lineHeight: 'normal' }}> By Request</h5>
                <h5 style={{ color: 'var(--3, #FFF)', fontFamily: 'Avenir LT Std', fontSize: '24px', fontStyle: 'normal', fontWeight: 750, lineHeight: 'normal' }}> $99.49</h5>
                <button className="RackUnitButton" > Explore racks</button>
            </div>
        </div>

        <div style={{display:"flex",flexDirection:"column",marginTop:"3%",paddingLeft:"11%"}}>
           <h1 style={{marginLeft:"0%",width:"85%",color: '#FFF', fontFamily: 'Avenir LT Std', fontSize: '38px', fontStyle: 'normal', fontWeight: 750, lineHeight: 'normal',marginBottom:"0%" }}> We Also Provide</h1>
           <div style={{ width: '4%', borderBottom: '2px solid #F0DE00', marginTop: '0%',marginLeft:"33%" }} />
                
           <h5 style={{width: "1095px", color: '#FFF', textAlign: 'center', fontFamily: 'Avenir LT Std', fontSize: '22px', fontStyle: 'normal', fontWeight: 750, lineHeight: '130.8%' }}> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
The point of using Lorem Ipsum is that it has a more-or-less normal distribution</h5>


{/* <CardSliderComponent  /> */}



        </div>
           
        </div>
        
        </>
    )
}

export default ThirdScreen;