
import React from 'react';
import 'tachyons';

class Signin extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={
         pass:'',
         email:'',
    }
  }


   onEmailChange=(event)=>
   {
     this.setState({email:event.target.value});
    // console.log(event.target.value);
   }
  onPasswordChange=(event)=>
  {
   this.setState({pass:event.target.value});
  }

   validateInfo=  async ()=>
   {

   try{
   let res=await fetch('https://floating-ravine-14006.herokuapp.com/signin', {
  method: 'post', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
  email:this.state.email,
  pass:this.state.pass
  }),
})
  if(res.status===200)
  {
 res= await res.json()
  this.props.setUser(res[0].name,res[0].entries,res[0].id);
  this.props.onLocationChange("home",true);
}
}
catch(Err)
{
  console.log(Err);
}
}

   
  // {
     // /* await*/ fetch("http://localhost:3000/signup",{
     //    method:"POST",
     //    headers:{"Content-Type":"application/json"},
     //    body:JSON.stringify({
     //     email:this.state.email,
     //     pass:this.state.pass
     //    })
     //    )


  // }



 //      }).then(res=>res.json()).then((data)=>
 //                 {
 //                   v=data;
 //              }


 // )

 //    let found=false;
 //     console.log("i haved authenticated")
 //      Object.keys(v).forEach(user=>
 //      {
 //            if(user.pass===this.state.pass && user.email===this.state.email)
 //            {
 //              found=true;
 //              this.props.onLocationChange("home",true);
             
 //            }

 //      })
 //      if(!found)
 //      {

 //        this.props.onLocationChange("home",false);
 //      }



 //      // console.log(Object.entries(v))
 //      // console.log(Object.values(v))
    
 // //  }

   onRegisterClick=()=>
   {
    this.props.onLocationChange("Register",true);
   }

    
  render()
  {
  return(
     <main className="pa4 black-80 ">
  <div className="measure center">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0 ">
      <legend className="f4 fw6 ph0 mh0 center">Sign In</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="email">Email</label>
        <input    onChange={this.onEmailChange}   className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email"  id="email"/>
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
        <input   onChange={this.onPasswordChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
      </div>
      <div  >
   <div className="center">
      <input     onClick={this.validateInfo}   className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in"/>
    </div>
    <div className="lh-copy mt3 center">
      <a href="#0"   onClick={this.onRegisterClick} className="f6 link dim black db">Register</a>
    </div>
    </div>
    </fieldset>
    
  </div>
</main>


  	);


}
}
export default Signin;

