import React from 'react';
import './Navigation.css';
import 'tachyons';

const Navigation=({onLC})=>
{
return(
    
    <nav style={{display:'flex',justifyContent : 'flex-end',marginRight :'1rem',fontSize :'1em'}}>
    <p  onClick={()=>onLC("Signin",false)} >Sign Out</p>
    </nav>
   
	);
}
export default Navigation;







