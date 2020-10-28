import React from 'react';
import './InsertImage.css';

const ImageInsert=({onInputChange,onButtonClick})=>
{

return(
	<div className="gp">
	<div className='pa'>
     <div className='ig'>
    <p style={{color:'lightblue'}}>{'This magic brain will detect faces in your image .Give it a try'}</p>
      <input className='in' type='text' placeholder='Enter image adress'  onChange={onInputChange}  />     
       <button className='bt' onClick={onButtonClick}>Detect</button>
     </div>
     </div>
     </div>
	);

}

export default ImageInsert;