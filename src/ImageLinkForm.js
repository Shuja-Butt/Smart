import React from 'react';
import './ImageLinkform.css'



const  ImageLinkForm=({im,boxy})=>//alternate {im}//same as in props as they are immutable
{

   return(
   	<div className='center ma'>     
        <div className='absolute'>  
          <img     id='myImg' alt='' height='auto'   width='500px' src={im}/>{/*im*/}
          <div className='bounding-box'  style={{bottom:boxy.bottomRow,top:boxy.topRow,left:boxy.leftCol,right:boxy.rightCol} }> </div>
        </div>
     </div>
   	);

} 
export default ImageLinkForm;


