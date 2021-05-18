import React from 'react';
import "./vendor/fontawesome-free/css/all.min.css";
import "./vendor/bootstrap/css/bootstrap.min.css";
import "./css/ruang-admin.css";
import "./css/new.css";
//import "./css/style1.css";


//import "https://fonts.gstatic.com";

class UserDashboard extends React.Component{
    constructor(){
        super();
        this.state={
            data:[]
        };
    }

    registerfn(){

   

      
        fetch('http://localhost:8000/group/')
        .then(response=>response.json())
        .then((data)=>{
            this.setState({
                data:data
            });
            console.log(data)
            console.log(localStorage.getItem("username"))
            
        });

       
  }


  
delete(e){
    fetch('http://127.0.0.1:8000/group/'+e.currentTarget.value+"/",{
      method:'DELETE',
      headers:{
          'Content-type': 'application/json; charset=UTF-8',
      },
  })
  .then(response=>response.json())
  .then((data)=>console.log(data))
  .catch(error=>console.log(error))
  window.location.reload();
   
  }

  componentDidMount(){
    this.registerfn();
}

logout(){

  localStorage.clear();
  window.location.replace("/LoginForm");
}


  
   render(){


    const rows=this.state.data.map((grp)=>{

        if(grp.subscribe==localStorage.getItem("username")){
          if(grp.role=="user"){
        return (  <div className="card mx-auto mt-3" style={{width:'18rem'}} >
          <div className="card-body">
            <div className="d-flex">
    <h5 className="card-title">{grp.gpName}</h5>
  
    <p className="ml-auto">{grp.role}</p>

    </div>

    <a href={"Chat/"+grp.gpName+"/"+localStorage.getItem("username")} className="btn btn-primary">Chat Now</a>
    <button type="button" value={grp.id} onClick={this.delete} className="btn btn-danger ml-3">Unsubscribe</button>
 
 </div>
  </div>

        )}
        else{
          
          return (  <div className="card mx-auto mt-3" style={{width:'18rem'}} >
          <div className="card-body">
            <div className="d-flex">
    <h5 className="card-title">{grp.gpName}</h5>
  
    <a href={"/Manage/"+grp.id}><button className="btn btn-success btn-sm pt-0 pb-1 ml-1" style={{height:'20px',fontSize:'12px'}}>Manage</button></a>
    <p className="ml-auto">{grp.role}</p>

    </div>

    <a href={"Chat/"+grp.gpName+"/"+localStorage.getItem("username")} className="btn btn-primary">Chat Now</a>
    <button type="button" value={grp.id} onClick={this.delete} className="btn btn-danger ml-3">Unsubscribe</button>
 
 </div>
  </div>

        )
        }
       } });
        
        return (
     
  
<div id="page-top">
  <div id="wrapper">
    
   
    <ul className="navbar-nav sidebar sidebar-light accordion" id="accordionSidebar">
      <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
        <div className="sidebar-brand-icon">
          <img src="https://realcoderz.com/img/cropped-logowhitetexttransparent.png"/>
        </div>

      </a>
      
      <hr className="sidebar-divider"></hr>
      <div className="sidebar-heading">
        Features
      </div>
      <li className="nav-item">
        <a className="nav-link" href="/UserDashboard">
          <i className="fas fa-fw fa-palette"></i>
          <span>Home</span>
        </a>
      </li>
      
      <li className="nav-item">
        <a className="nav-link" href="/CreateGroup">
          <i className="fas fa-fw fa-palette"></i>
          <span>Create Group</span>
        </a>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="Update/">
          <i className="fas fa-fw fa-palette"></i>
          <span>Update Profile</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="AllGroup/">
          <i className="fas fa-fw fa-palette"></i>
          <span>All Group</span>
        </a>
      </li>
      
      <li className="nav-item">
        <div className="nav-link" >
         
          <span className="badge badge-danger">
            
        <input className ="btn btn -danger"  type="button"  value="Log Out" onClick={this.logout} />
        
          </span>
        </div>
      </li>

      


     

      <hr className="sidebar-divider"></hr>
     
     
      <li className="nav-item">
        
         
        
      </li>
      <hr className="sidebar-divider"></hr>
      <div className="version" id="version-ruangadmin"></div>
    </ul>



    
   
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">

        
     
              <nav className="navbar navbar-expand navbar-light bg-navbar topbar mb-4 static-top">
             <button id="sidebarToggleTop" className="btn btn-link rounded-circle mr-3">
               <i className="fa fa-bars"></i>
             </button>

             <ul className="navbar-nav ml-auto">
   
               <li className="nav-item dropdown no-arrow">
                 <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown"
                   aria-haspopup="true" aria-expanded="false">
                   <img className="img-profile rounded-circle" src={localStorage.getItem("avatar")} style={{ maxwidth: '60px'}}/>
                   <span className="ml-2 d-none d-lg-inline text-white small"><h4 ><button className="btn btn-primary" > { localStorage.getItem('username')} </button><button className="btn btn-primary ml-2" > { localStorage.getItem('email')} </button></h4></span>
                   
                 </a>
                 
               </li>
             </ul>
           </nav>
    



  
 <div className="row mx-auto" style={{width:'70%'}}>
{rows}</div>
             
            </div>
    

            </div>


   
  </div>

  <script src="vendor/jquery/jquery.min.js"></script>
 
  
 
</div>



    
    );
  }
};
export default UserDashboard;