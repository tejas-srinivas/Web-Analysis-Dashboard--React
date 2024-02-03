import React, { useState } from 'react'
import LandingPage from '../Images/LandingPage.jpg'
import LandingLogo from '../Images/LandingLogo.png'
import VgstLogo from '../Images/VGST.png'
import Image1 from '../Images/hydroponic_garden.jpg'
import Collage from '../Images/CollageAll.png'

const Landing = () => {

  const [color, setColor] = useState(false)
  const aboutVGST = "The Vision Group on Science and Technology (VGST) was constituted by the Government in 2008 under the Chairmanship of Distinguished Scientist Bharat Ratna Prof. C.N.R. Rao, F.R.S., National Research Professor, Honorary President, JNCSAR. VGST serves as an apex body monitoring VGST programs specifically dovetailed to Karnataka."
  const projectDetails = "VGST, RGS/F scheme,  GRD - 1081"
  const hydroponicDetails = "Hydroponics is the process of growing plants in the absence of soil with the help of added nutrients. Apart from the nutrient solution, pH values, lighting conditions, regulating the artificial atmospheric conditions, etc. are contributing factors in ensuring the growth of the plant, which is generally 25-30% faster with higher yield. Another factor in farming is the natural environment, which is an external factor such as soil, water, light, room temperature, water temperature, humidity in the air, relative humidity, alkalinity of soil and water, and essential nutrients required for plant growth."
  const whyUseHydroponics = "water conservation, faster growth, fewer pesticides, space saving, higher yields, and other benefits. Hydroponics uses 98% less water than traditional soil-based agriculture. This is because the water is recirculated and reused, rather than being lost to evaporation or runoff. Hydroponic plants also grow faster than soil-based plants, often by 25% or more as they have direct access to the nutrients they need. Finally, hydroponics can produce higher yields than soil-based agriculture. This is because the hydroponic environment is more controlled, and it is easier to provide plants with the optimal conditions for growth."

  const handleScroll = () => {
    if (window.scrollY >= 80) {
      setColor(true);
    } else
      setColor(false)
  }

  window.addEventListener('scroll', handleScroll)
  return (
    <div className="wrapper-landing">
      <div className='nav-wrapper'>
        <nav className={color ? "landing-nav bg" : "landing-nav"} >
          <img src={LandingLogo} className='landing-logo' alt="landing-logo" />
          <div className="nav-contents">
            <ul className='nav-menu'>
              <li className='nav-item'><a href="#home" className='nav-link'>Home</a></li>
              <li className='nav-item'><a href="#about" className='nav-link'>About</a></li>
              <li className='nav-item'><a href="#features" className='nav-link'>Features</a></li>
              <li className='nav-item'><a href="/login" className='nav-link'>Login</a></li>
              <li className="nav-item"><a href="/signup" className='nav-link' style={{ color: "#f5f5f5", backgroundColor: "#00d411", padding: "5px 30px 5px 30px", borderRadius: "12px", boxShadow: "0 2px 15px rgba(80,64,80,.9)" }}>Sign Up</a></li>
            </ul>
          </div>
        </nav>
      </div>
      <div className='filter' id="home">
        <img src={LandingPage} className='landing-image' alt="background" />
      </div>
      <span style={{ position: "absolute", fontSize: "20px", fontWeight: "600", transform: "translate(30%,-2100%)", color: "#fff" }}>A VGST Initiative Project...</span>
      <div classname="landing-description" style={{ position: "absolute", transform: "translate(15%,-175%)", color: "#fff" }}>
        <span style={{ fontSize: "45px", fontWeight: "800" }}>Modern Agriculture</span>
        <p style={{ width: "445px", textTransform: "none" }} className='description'>Creating a web application that is useful helps farmers, especially to improve the quality of agriculture as well as accelerate the process of agriculture. A method conserves water and space, offering a sustainable solution for urban agriculture.</p>
        <br />
        <a className='get-started' href="#about" style={{ fontSize: "20px", color: "#f5f5f5", backgroundColor: "#00d411", padding: "15px 30px 15px 30px", borderRadius: "20px", boxShadow: "rgb(154 149 154 / 29%) 0px 2px 15px"}}>Get Started</a>
      </div>
      {/* =================================== About Project =========================================== */}
      <div className="about-section" id="about">
        <h2 className='headings' style={{ height: "30vh", color:"#5c2a03"}}>Vision Group of Science and Technology (VGST)</h2>
        <div className="content">
          <img src={VgstLogo} alt="vgstLogo" />
          <div className="vertical-line"></div>
          <div className="project-details">
            <h3>Project ID : {projectDetails}</h3>
            <p style={{color:"gray"}}>{aboutVGST}</p>
          </div>
        </div>
      </div>
    {/* =================================== feautures =========================================== */}
      <div className="about-section" id="features">
      <h2 className='headings' style={{ height: "30vh", color:"#5c2a03"}}>Hydroponics using Deep Flow Technique</h2>
        <div className="content">
          <img src={Image1} alt="vgstLogo" width="400px" height="300px" />
          <div className="hydro-content" style={{display:"flex",flexDirection:"column"}}>
            <h2 style={{fontSize:"32px",color:"#00d411"}}>About Hydroponics</h2>
            {/* <div className="vertical-line"></div> */}
            <p style={{color:"gray"}}>{hydroponicDetails}</p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="content" style={{flexDirection:"row-reverse"}}>
          <img src={Collage} alt="collage" width="1000px" height="600px" />
          <div className="hydro-content" style={{display:"flex",flexDirection:"column"}}>
            <h2 style={{fontSize:"32px",color:"#00d411"}}>Why use Hydroponics ?</h2>
            {/* <div className="vertical-line"></div> */}
            <p style={{color:"gray"}}>{whyUseHydroponics}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
