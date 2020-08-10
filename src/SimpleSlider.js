import React from 'react'
import Slider from 'infinite-react-carousel';

import Fade from 'react-reveal/Fade';


import './App.css';
import { isProperty } from '@babel/types';



export default function SimpleSlider() {
  const seetings={
    slidesToShow:1,
    autoplayScroll:1,
    pauseOnHover:true,
    autoplay:true,
    autoplaySpeed:"5000",
    dots:true,
    
  
    appendDots: dots => (
      <div
        style={{
         
          borderRadius: "10px",
          padding: "10px",
          margin:"-50px",
          position:"absolute",
          top:"85%",
          zIndex:"10"
         
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    )

  }
    return (
        <div>
            fgfgfgf

            <Slider {...seetings}
           
             
            
            
            
           
            >
    <div className="box">
      <img src="https://cdn.pizap.com/pizapfiles/images/photo_backgrounds_textures_app05.jpg" alt=""/>
       
       
       <Fade left>
       <h3 style={{textAlign:"center"}}>image 1</h3>
       </Fade>
      

        
           
        
       
        
     
     

    </div>
    <div className="box">
     <img src="https://i.ytimg.com/vi/zgg1xGSGw0s/maxresdefault.jpg" alt=""/>
     <Fade right>
      
       </Fade>
    </div>
    <div className="box">
      <img src="https://mejorfaucet.files.wordpress.com/2019/02/klg.jpg" alt=""/>


      

      <Fade top>
       <h3 style={{textAlign:"center"}}>image 1</h3>
       </Fade>

    
    </div>
    <div className="box">
    <img src="https://mejorfaucet.files.wordpress.com/2019/02/klg.jpg" alt=""/>
    <h3 style={{textAlign:"center"}}>image4</h3>
    </div>
    <div className="box">
    <img src="https://mejorfaucet.files.wordpress.com/2019/02/klg.jpg" alt=""/>
    <h3 style={{textAlign:"center"}}>image 5</h3>
    </div>
  </Slider>


        </div>
    )
}
