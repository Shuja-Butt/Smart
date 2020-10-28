import React from 'react';
import './App.js';
const Rank=(props)=>
{
   //console.log(props.user)
	return(
         <div className='center'>
       <p style={{color :'white',fontSize :'4vw'}}>{`${props.user.name}, your rank is....`}
       <br/>{props.user.rank} </p>
         </div>
		);

}
export default Rank;