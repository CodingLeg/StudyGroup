import React from 'react';
import './Login.css';


class Admin extends React.Component {
    constructor(){
        super();

        this.myRef = React.createRef();
        this.myRef1 = React.createRef();
        this.registerfn = this.registerfn.bind(this);
        this.state={
            data:[]
        };
    }


 
    registerfn(){
// eslint-disable-next-line
        if(this.myRef.current.value=='admin'&&this.myRef1.current.value=='admin'){
          localStorage.setItem("admin","admin")
            window.location.replace("/AdminDashboard")
        }
        else{
          console.log("fail")
        }
    }

    render() {
  return (
    <div>
      <div className="container1" style={{marginLeft:"25%"}} id="container1">
	<div className="form-container1 sign-up-container1">
	</div>
	<div className="form-container1 sign-in-container1">
		<form  className="form1" >
			<h1>Sign in</h1>
			<input type="text" ref={this.myRef}  className="input1" placeholder="UserName" />
			<input type="password" ref={this.myRef1}   className="input1" placeholder="Password" />
			<button  type="button"  className="button1" onClick={this.registerfn} >Sign In</button>
		</form>
	</div>
	<div className="overlay-container1">
		<div className="overlay">
			<div className="overlay-panel overlay-right">
				<h1>Hello, Admin!</h1>
				<p> Welcome Back,Please login with your personal info</p>
			</div>
		</div>
	</div>
</div>
  </div>

    )
}
}
export default Admin;