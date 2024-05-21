import React from 'react'
import './Bg.css'
import myImage from './images/imgleaf.png'
import motion from './images/motionimg.png'
import wiki from './images/motionarteffect-img3.png'
import myq from './images/motionarteffect-img1.png'
import stars from './images/motionarteffect-img4.png'
import wand from './images/motionarteffect-img5.png'
import mybox from './images/motionarteffect-img11.png'
import mybox2 from './images/motionarteffect-img10.png'
import Box  from './Box'
import SmalBox from './SmalBox'

import spark from './images/motionarteffect-img9.png'
import moon from './images/motionarteffect-img7.png'
import thumb from './images/motionarteffect-img6.png'


export default function Bg2() {
  return (
    <div className='main-div'>
        <div class="relative ps-2">
            
            <img src={myImage}/>
            <div style={{display:"flex"}}>
                 <p className=' en-div outfit-main'>envato</p>
                 <p  className='mar-div sora-hell'>market</p> 
            </div>
            <button className='buy-div'>Buy Now</button>
        </div>
   
        
    <div className='container'>

        <div style={{width:'200px', height:"120px"}} className='motion-img'>

            <img src={motion} height="55px" width="250px" />
            <button className='pur-btn ps-5 pe-5 pt-3 pb-3'>Purchase Now</button>

        </div>


        <div className='d-flex m-3 col attract-div' >
           <div className='col-3'>
             <p className='soratrans'>Transform <br></br> Your Website</p><p style={{color:'white'}}>With Motion Art <br></br>Effect</p>
           </div>
           <div className='col-6'> 
             <h1 className='attract-txt'>Attract Your <br></br> Visitors Attention <br></br> With Colorful <br></br>
             <p className='motionart'> Motion Art Effect</p></h1>
              
             <p style={{color:'grey', fontSize:"20px"}}>Unleash the power of creativity with Motion Art for Elementor - your ultimate solution for seamlessly integrating captivating animations into your website. </p>
           </div>
        </div>
        
        <br></br><br></br>

        <p style={{textAlign:"center", color:"white", fontSize:"20px", fontWeight:"25px"}}>Trusted by thousands of users around the world</p>

        <br></br>
        
        <div className='d-flex flex-wrap col justify-content-center align-items-center '>
            <div className='d-flex col-4 '>
              <img src={myImage} height={90} width={90}></img>
              <div>
                <img src={stars} height={19} className='mt-4 ms-2'></img> <br></br>
                <p style={{color:"grey"}} className='mt-3 ms-2'><b>4.5</b> Score, 9 Reviews</p>
              </div>
            </div>

            <div className='d-flex  col-4 justify-content-center'>
            <img src={myq} height={90} width={90}></img>
              <div>
                <img src={stars} height={19} className='mt-4 ms-2'></img> <br></br>
                <p style={{color:"grey"}} className='mt-3 ms-2'><b>4.5</b> Score, 9 Reviews</p>
              </div>
            </div>

            <div className='d-flex col-4 justify-content-end'>
            <img src={wiki} height={90} width={90}></img>
              <div>
                <img src={stars} height={19} className='mt-4 ms-2'></img> <br></br>
                <p style={{color:"grey"}} className='mt-3 ms-2'><b>4.5</b> Score, 9 Reviews</p>
              </div>
            </div>

        </div>

       <br></br><br></br><br></br>

       <div className='d-flex flex-wrap col'>
        <div className='col-7'>
           <h2 className='turn-text'>Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors</h2>
           <p style={{color:'grey', fontSize:'17px'}}>Motion Art for Elementor is a groundbreaking plugin that empowers you to 
            effortlessly infuse your website with visually stunning motion art elements.</p>
            <button className='ps-5 pe-5 pt-3 pb-3 purchase-btn'>Purchase from Envato <i class="fa fa-long-arrow-right ms-3" ></i></button>
        </div>
        <div className='ms-5'></div> <div className='ms-5'></div> <div className='ms-5'></div>
        <div className='col-3 d-flex ms-5 justify-content-end'>
            <img src={wand} height={280} width={280}></img>
        </div>
       </div>

       <br></br><br></br><br></br><br></br>

      <h2 className='apply-text'>Apply On Any Section Or Enable <br></br>For  Whole Page</h2>

      <br></br>
      
      <div className='d-flex'>
        <Box title="Apply On Section" body="Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website. "
        myimg={mybox}/>
        
        <div className='mt-5 ms-3'>
        <Box title="Apply On Page" body="Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation."
        myimg={mybox2}  /></div>
      </div>

      <br></br><br></br><br></br>

      <h1 style={{color:"white", textAlign:"center"}}>An All-Round Plugin With <br></br>Powerful Features</h1><br></br>
      <h5 style={{color:"grey", textAlign:"center", fontSize:"17px", lineHeight:"30px"}}>Whether you're a seasoned web designer or just starting out, Motion Art for<br></br> Elementor seamlessly integrates with the Elementor platform, providing you<br></br> with a seamless and intuitive experience.</h5>

      <br></br><br></br>
      <div className='d-flex flex-wrap justify-content-center'>
        <div className='ps-3'>
         <SmalBox imgs={spark} title="Light Weight" body="Motion Art for Elementor is designed to be lightweight."/>
        </div>
        <div className='ps-3'>
         <SmalBox imgs={thumb} title="100% Responsive" body="Create a consistent visual experience across all devices."/>
        </div>
        <div className='ps-3'>
         <SmalBox imgs={moon} title="User Friendly Interface" body="Ensure a smooth experience for both applicants and administrators" />
        </div>
         </div>

         <br></br><br></br> <br></br><br></br>
      
    </div> 

    <div className='footer'>

    </div>


    </div>
  )
}
