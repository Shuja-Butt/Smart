import Navigation from './Navigation';
import React from 'react';
import Logo from './Logo';
import ImageInsert from './ImageInsert';
import './App.css';
import Rank from './Rank';
import Register from './Register';
import './App.css';
import  Signin from './Signin';
import ImageLinkForm from './ImageLinkForm';
import Particles from 'react-particles-js';
const party={
   particles:{
   	line_linked:{
     shadow:{
     enable:true,
     color:"#3CA9D1",
     blur:5
     }
     }
 
   }

}

class App extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state={
		input:'',
		image:'',
     box:[],
     location:'Signin',
     user:{
     name:'',
     rank:'',
     id:''

     }
		}

	}

  // componentDidMount()
  // {  fetch("http://localhost:3000/"
  //      // {
  //      //  method:"POST",
  //      //  headers:{
  //      //      "Content-Type":"application\json"
  //      //  },
  //      //  body:JSON.stringify(data)
  //      // }
  //     ).then(res=>res.json()).then(console.log)


  // }

   setUser= (name,rank,id)=>
   {
//    console.log(name,"namw")
// console.log(rank)
  //this.setState({user:{name:name}},()=>console.log(this.state.user.name));
this.setState({user:{rank:rank,
                     name:name ,
                     id:id }});
// console.log(this.state.user.name)
// console.log(this.state.user.rank)

   }

   onLocationChange=(requiredPage,b)=>
   {
    if(!b)
    {
    this.setState({input:''});
    this.setState({image:''});
    this.setState({box:[]}); 
  }


    this.setState({location:requiredPage})
   }

   onInputChange=(event)=>
   {
   this.setState({input:event.target.value,image:event.target.value});


   }



   onButtonClick=  (event)=>
   {
   // this.setState({image:this.state.input});
    console.log(this.state.image)
    fetch('https://floating-ravine-14006.herokuapp.com/clarifai',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({

      input:this.state.image

      })
    }).then(response=>response.json())
    .then(response=>
    {
      console.log(response)
      if(response.status.description==='Ok')
       fetch(`https://floating-ravine-14006.herokuapp.com/image`,{method:'PUT',
         headers:{'Content-Type':'application/json'},
         body:JSON.stringify({
          id:this.state.user.id
         })

      }).then(res=>res.json()).then(data=>this.setState({user:{...this.state.user,rank:data}}))//(this.state.user.name,data,this.state.user.id))
     //=>this.setUser(res[0].name,res[0].entries,res[0].id))
     console.log(this.state.user);
      this.getBox(response)
    }
      ).catch(Err=>console.log("incorect image url"))
     
 
}

  getBox=(response)=>
  {

    // let values=(response.outputs[0].data.regions[0].region_info.bounding_box);
    let values = response.outputs[0].data.regions.map(data=>{

       return data.region_info.bounding_box;
     })
      let imageData=document.getElementById('myImg');
      let height=Number(imageData.height);
     let width=Number(imageData.width);
      console.log(height,"  ",width);

   values=values.map(val=>{
         return {
          leftCol:val.left_col*width,
          topRow : val.top_row*height,
          rightCol:width-(val.right_col*width),
          bottomRow:height-(val.bottom_row*height),

      }
     

 



   }
     )
         this.setState({box:values});
  

  }

  render()
  {
   return(
   	<div >
       <Particles className="tp"
         params={party}//dont kow what the hell  are params   
       />
    
      { this.state.location==="Signin" ? 
      <div>
     
       <Signin setUser={this.setUser}  onLocationChange={this.onLocationChange} />
       </div> 
      :
      <div>    
       <div>
       {
        this.state.location==='Register' ?
       <Register  setUser={this.setUser} onLocationChange={this.onLocationChange}/>
       :
       <div>
       <Navigation onLC={this.onLocationChange}/>
       <Logo/>
       <Rank   user={this.state.user}    />
       <ImageInsert onInputChange={this.onInputChange} onButtonClick={this.onButtonClick}  />
       <ImageLinkForm im={this.state.image}  boxy={this.state.box}/>
       </div>
     }
       </div>
       </div>
     }
     </div>
   	);
  }
}

export default App;


















