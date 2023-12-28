import React from "react";
import myImage1 from "./AVINYA_BANNER1.jpg";
import myImage2 from "./AVINYA_BANNER2.jpg";
import myImage3 from "./AVINYA_FINAL_NAME.png";
import "./banner.css";

const MyImageComponent = () => {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
}, []);

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  paddingTop : '10%',
  
};

const buttonStyle = {
  height: '44px',
  width: '312px',
 
};
  return (
    <div className="banner-container">
      <img
        src={window.innerWidth >= 432 ? myImage1 : myImage2}
        alt="banner"
        className="banner-image flex  justify-center items-center w-screen h-screen bg-cover mb-10 bg-center"
        id="banner-image"
      />
     
      <div className="text-overlay">
      <img src={myImage3} alt="Avinya" className="avinya_name"/>
        <div>
          <div className="centered font-[drummer]" id="age">
            18 - 21
          </div>
          <div className="centered font-[drummer]" id="month">
            January
          </div>
        
        </div>
        

        <div style={containerStyle}>
              <div
                className="apply-button"
                data-hackathon-slug="innovatensut24"
                data-button-theme="dark"
                style={{ ...buttonStyle, margin: 'auto' }}
              >
                HELLO
              </div>
        </div>
      </div>
      
    </div>
  );
};



export default MyImageComponent;
