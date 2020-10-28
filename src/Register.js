
import React from 'react';
import 'tachyons';

class Register extends React.Component
{

  constructor(props)
  {
    super(props)
   this.state={
      name:'',
      pass:'',
      email:''
    }
  }

  onName=(event)=>
  {

   this.setState({name:event.target.value});


  }
  onEmail=(event)=>
  {
 this.setState({email:event.target.value});



  }
  onPass=(event)=>
  {
 this.setState({pass:event.target.value});

  }


Request= async()=>
{
  try{
 let res=await fetch('https://floating-ravine-14006.herokuapp.com/register', {
  method: 'post', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
  email:this.state.email,
  name:this.state.name,
  pass:this.state.pass
  })
})
 if(res.status===200)
 {
 res=await res.json()
   console.log(res);
   this.props.setUser(res[0].name,res[0].entries,res[0].id);
  this.props.onLocationChange("home",true);
}
}
catch(Err)
{
  console.log(Err);
}

 //.then(console.log).catch(err=>console.log(err));
}
  render()
  {
  return(
     <main className="pa4 black-80 ">
  <div className="measure center">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0 ">
      <legend className="f4 fw6 ph0 mh0 center">Register</legend>

    <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
        <input  onChange={this.onName} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="Name"/>
      </div>

      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="email">Email</label>
        <input    onChange={this.onEmail} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email"  id="email"/>
      </div>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
        <input  onChange={this.onPass} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
      </div>
      <br/>
      <div  >
   <div className="center">
      <input  onClick={this.Request}   className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register"/>
    </div>
  
    </div>
    </fieldset>
    
  </div>
</main>


  	);


}
}
export default Register;

