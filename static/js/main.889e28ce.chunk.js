(this.webpackJsonpfinalproject=this.webpackJsonpfinalproject||[]).push([[0],{227:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(38),i=a.n(r),s=(a(73),a(39)),c=a(10),l=a(11),m=a(13),u=a(12),p=(a(74),a(28),function(e){var t=e.onLC;return o.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end",marginRight:"1rem",fontSize:"1em"}},o.a.createElement("p",{onClick:function(){return t("Signin",!1)}},"Sign Out"))}),h=a(67),g=a.n(h),d=(a(75),function(){return o.a.createElement(g.a,{className:"Tilt",options:{max:25},style:{height:150,width:150,backgroundColor:"green",marginLeft:"3em"}},o.a.createElement("div",{className:"Tilt-inner"}," ",o.a.createElement("img",{alt:"Nothing",src:"./logo.png"})," "))}),f=(a(76),function(e){var t=e.onInputChange,a=e.onButtonClick;return o.a.createElement("div",{className:"gp"},o.a.createElement("div",{className:"pa"},o.a.createElement("div",{className:"ig"},o.a.createElement("p",{style:{color:"lightblue"}},"This magic brain will detect faces in your image .Give it a try"),o.a.createElement("input",{className:"in",type:"text",placeholder:"Enter image adress",onChange:t}),o.a.createElement("button",{className:"bt",onClick:a},"Detect"))))}),b=(a(41),function(e){return o.a.createElement("div",{className:"center"},o.a.createElement("p",{style:{color:"white",fontSize:"4vw"}},"".concat(e.user.name,", your rank is...."),o.a.createElement("br",null),e.user.rank," "))}),v=a(14),E=a.n(v),w=a(27),k=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).onName=function(e){n.setState({name:e.target.value})},n.onEmail=function(e){n.setState({email:e.target.value})},n.onPass=function(e){n.setState({pass:e.target.value})},n.Request=Object(w.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://floating-ravine-14006.herokuapp.com/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n.state.email,name:n.state.name,pass:n.state.pass})});case 3:if(200!==(t=e.sent).status){e.next=11;break}return e.next=7,t.json();case 7:t=e.sent,console.log(t),n.props.setUser(t[0].name,t[0].entries,t[0].id),n.props.onLocationChange("home",!0);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])}))),n.state={name:"",pass:"",email:""},n}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement("main",{className:"pa4 black-80 "},o.a.createElement("div",{className:"measure center"},o.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0 "},o.a.createElement("legend",{className:"f4 fw6 ph0 mh0 center"},"Register"),o.a.createElement("div",{className:"mt3"},o.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"name"},"Name"),o.a.createElement("input",{onChange:this.onName,className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"Name"})),o.a.createElement("div",{className:"mt3"},o.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email"},"Email"),o.a.createElement("input",{onChange:this.onEmail,className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email",id:"email"})),o.a.createElement("div",{className:"mt3"},o.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),o.a.createElement("input",{onChange:this.onPass,className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"})),o.a.createElement("br",null),o.a.createElement("div",null,o.a.createElement("div",{className:"center"},o.a.createElement("input",{onClick:this.Request,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register"}))))))}}]),a}(o.a.Component),C=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).onEmailChange=function(e){n.setState({email:e.target.value})},n.onPasswordChange=function(e){n.setState({pass:e.target.value})},n.validateInfo=Object(w.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://floating-ravine-14006.herokuapp.com/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n.state.email,pass:n.state.pass})});case 3:if(200!==(t=e.sent).status){e.next=10;break}return e.next=7,t.json();case 7:t=e.sent,n.props.setUser(t[0].name,t[0].entries,t[0].id),n.props.onLocationChange("home",!0);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])}))),n.onRegisterClick=function(){n.props.onLocationChange("Register",!0)},n.state={pass:"",email:""},n}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement("main",{className:"pa4 black-80 "},o.a.createElement("div",{className:"measure center"},o.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0 "},o.a.createElement("legend",{className:"f4 fw6 ph0 mh0 center"},"Sign In"),o.a.createElement("div",{className:"mt3"},o.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email"},"Email"),o.a.createElement("input",{onChange:this.onEmailChange,className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email",id:"email"})),o.a.createElement("div",{className:"mv3"},o.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),o.a.createElement("input",{onChange:this.onPasswordChange,className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"})),o.a.createElement("div",null,o.a.createElement("div",{className:"center"},o.a.createElement("input",{onClick:this.validateInfo,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in"})),o.a.createElement("div",{className:"lh-copy mt3 center"},o.a.createElement("a",{href:"#0",onClick:this.onRegisterClick,className:"f6 link dim black db"},"Register"))))))}}]),a}(o.a.Component),N=(a(78),function(e){var t=e.im,a=e.boxy;return o.a.createElement("div",{className:"center ma"},o.a.createElement("div",{className:"absolute"},o.a.createElement("img",{id:"myImg",alt:"",height:"auto",width:"500px",src:t}),o.a.createElement("div",{className:"bounding-box",style:{bottom:a.bottomRow,top:a.topRow,left:a.leftCol,right:a.rightCol}}," ")))}),y=a(68),S=a.n(y),j={particles:{line_linked:{shadow:{enable:!0,color:"#3CA9D1",blur:5}}}},x=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).setUser=function(e,t,a){n.setState({user:{rank:t,name:e,id:a}})},n.onLocationChange=function(e,t){t||(n.setState({input:""}),n.setState({image:""}),n.setState({box:{}})),n.setState({location:e})},n.onInputChange=function(e){n.setState({input:e.target.value,image:e.target.value})},n.onButtonClick=function(e){console.log(n.state.image),fetch("https://floating-ravine-14006.herokuapp.com/clarifai",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({input:n.state.image})}).then((function(e){return e.json()})).then((function(e){console.log(e),"Ok"===e.status.description&&fetch("https://floating-ravine-14006.herokuapp.com/image",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:n.state.user.id})}).then((function(e){return e.json()})).then((function(e){return n.setState({user:Object(s.a)(Object(s.a)({},n.state.user),{},{rank:e})})})),console.log(n.state.user),n.getBox(e)})).catch((function(e){return console.log("incorect image url")}))},n.getBox=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,a=document.getElementById("myImg"),o=Number(a.height),r=Number(a.width);console.log(o,"  ",r);var i={leftCol:t.left_col*r,topRow:t.top_row*o,rightCol:r-t.right_col*r,bottomRow:o-t.bottom_row*o};console.log(i.rightCol),n.setState({box:i})},n.state={input:"",image:"",box:{},location:"Signin",user:{name:"",rank:"",id:""}},n}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(S.a,{className:"tp",params:j}),"Signin"===this.state.location?o.a.createElement("div",null,o.a.createElement(C,{setUser:this.setUser,onLocationChange:this.onLocationChange})):o.a.createElement("div",null,o.a.createElement("div",null,"Register"===this.state.location?o.a.createElement(k,{setUser:this.setUser,onLocationChange:this.onLocationChange}):o.a.createElement("div",null,o.a.createElement(p,{onLC:this.onLocationChange}),o.a.createElement(d,null),o.a.createElement(b,{user:this.state.user}),o.a.createElement(f,{onInputChange:this.onInputChange,onButtonClick:this.onButtonClick}),o.a.createElement(N,{im:this.state.image,boxy:this.state.box})))))}}]),a}(o.a.Component),O=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(o.a.createElement(o.a.StrictMode,null," ",o.a.createElement(x,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Smart",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/Smart","/service-worker.js");O?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):R(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):R(t,e)}))}}()},41:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},78:function(e,t,a){}},[[227,1,2]]]);
//# sourceMappingURL=main.889e28ce.chunk.js.map