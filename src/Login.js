import React from 'react';
import './Login.css';


class Login extends React.Component {

    constructor(){
        super();

        this.myRef = React.createRef();
        this.myRef1 = React.createRef();
        this.myRef2 = React.createRef()
        this.myRef3=React.createRef();
        this.myRef4=React.createRef();
        this.myRef5=React.createRef();
        this.myRef6=React.createRef();
        this.myRef7=React.createRef();
        this.registerfn = this.registerfn.bind(this);
        this.loginfn = this.loginfn.bind(this);
        this.state={
            data:[]
        };
    }
 

     
    componentDidMount(){
        const signUpButton = document.getElementById('signUp');
      const signInButton = document.getElementById('signIn');
      const container1= document.getElementById('container1');
      
      if(signInButton){
      signUpButton.addEventListener('click', () => {
          container1.classList.add("right-panel-active");
      });
      }
      
      if(signUpButton){
      signInButton.addEventListener('click', () => {
          container1.classList.remove("right-panel-active");
      });
      }
      }
      registerfn(){
        const formData = new FormData();
      
      formData.append( "username",this.myRef5.current.value);
      formData.append( "full_name",this.myRef2.current.value);
      formData.append("password",this.myRef3.current.value);
      formData.append("email",this.myRef4.current.value);
       //formData.append( "first_name",this.myRef5.current.value);
       //formData.append( "last_name",this.myRef6.current.value);
        //formData.append( "avatar",this.myRef7.current.files[0]);
        
      
          fetch('http://localhost:8000/user/',{
              method:'Post',
             body: formData
             
          })
          .then(response=>response.json())
          .then((data)=>console.log(data))
          .catch(error => console.error('Error:', error))
          window.location.replace("/Login");
      
      }


    loginfn(){

        fetch('http://localhost:8000/user/')
        .then(response=>response.json())
        .then((data)=>{
            this.setState({
                data:data
            });
for(var i=0; i<this.state.data.length; i++){
if(this.state.data[i].email===this.myRef.current.value&&this.state.data[i].password===this.myRef1.current.value){
    localStorage.setItem("username",this.state.data[i].full_name)
    localStorage.setItem("id",this.state.data[i].id)
  
    this.props.history.push('/UserDashboard')
    break
}
}

            
        });
    }


    render() {
        return (
            <div style={{marginLeft:"25%"}}>
    
<div className="container1" id="container1">
	<div className="form-container1 sign-up-container1">
		<form  className="form1" >
			<h1>Register</h1>

            <input type="text" className="input1" ref={this.myRef5} placeholder="UserName" />
      
			<input type="text" className="input1" ref={this.myRef2} placeholder="FullName" />

      <input type="email"  className="input1" ref={this.myRef4} placeholder="Email" />
      

      <input type="password" className="input1" ref={this.myRef3} placeholder="Password" />
     {/* 
      <input class="input1" type="text" ref={this.myRef5} placeholder="FirstName" />
      
      <input type="text"  class="input1" ref={this.myRef6} placeholder="LastName" />
   
     
			
      <br></br>
       <input  style={{marginLeft:"30px"}} type="file"   ref={this.myRef7} placeholder="Chhose File" />
      <br></br>
        */ }
			<button  className="button1" type="button" onClick={this.registerfn}>Submit</button>
		</form>
	</div>
	<div className="form-container1 sign-in-container1">
		<form  className="form1">
			<h1>Sign in</h1>
			<input type="email" className="input1" ref={this.myRef} placeholder="Email" />
			<input type="password"  className="input1" ref={this.myRef1} placeholder="Password" />
      <br></br>
			
			<button   className="button1" type="button" onClick={this.loginfn}>Submit</button>
<br></br>
      <a href="Admin">Are you Admin?</a>
		</form>
	</div>
	<div className="overlay-container1">
		<div className="overlay">
			<div className="overlay-panel overlay-left">
				<h1>Welcome Back!</h1>
				<p>To keep connected with us please login with your personal info</p>
				<button    className="ghost button1"  id="signIn">Sign In</button>
			</div>
			<div className="overlay-panel overlay-right">
				<h1>Hello, Friend!</h1>
				<p>Enter your personal details and start journey with us</p>
				<button    className="ghost button1" id="signUp">Sign Up</button>
			</div>
		</div>
	</div>
</div>

    </div>
        )
    }
}
export default Login