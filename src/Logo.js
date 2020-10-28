import React from 'react';
import Tilt from 'react-tilt'
import './Logo.css';
const Logo=()=>
{

  return(


 
      <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 150, width: 150,backgroundColor:'green',marginLeft :'3em'}} >
      <div className="Tilt-inner"> <img alt='Nothing' src='./logo.png'/> </div>{/* /imagename means in thesrc folder*/}
      </Tilt>



  	);


}

export default Logo;