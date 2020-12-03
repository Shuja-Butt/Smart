import React from 'react';
import './ImageLinkform.css'



const  ImageLinkForm=({im,boxy})=>//alternate {im}//same as in props as they are immutable
{

   return(
   	<div className='center ma'>     
        <div className='absolute'>  
          <img     id='myImg' alt='' height='auto'   width='500px' src={im}/>{/*im*/}
         {boxy.map(box =>
          <div key={`box${box.topRow}${box.rightCol}`}
              className='bounding-box'
              style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}>
          </div>
        )}
        </div>
     </div>
   	);

} 
export default ImageLinkForm;


