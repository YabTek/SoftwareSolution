import React from 'react';
import "./Styles/Home.css";
import FifthScreen from "./FifthScreen";
import FirstScreen from "./FirstScreen";
import Footer from "./Footer";
import FormComponent from "./Form";
import FourthScreen from "./FourthScreen";
import Navbar from "./Navbar";
import SecondScreen from "./SecondScreen";
import SixthScreen from "./SixthScreen";
import CardSliderComponent from "./Slider";
import CardSliderComponent2 from "./Slider2";
import ThirdScreen from "./ThirdScreen";



const Home = () => {


    return(
        <>
        <div className="" style={{display:"flex", flexDirection:"column",width:"auto"}}>
          <Navbar />
          <FirstScreen />
          <SecondScreen />
          <ThirdScreen />
          <CardSliderComponent />
          <FourthScreen />
          <FifthScreen />
          <SixthScreen />
          <FormComponent />
          <Footer />
       </div>
        </>
    )
}

export default Home;