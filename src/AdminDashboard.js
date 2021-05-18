import React from 'react'
import './adminstyle.css'
class Dashboard extends React.Component{
    constructor(){
        super();
        this.state={
            data:[]
        };
    }

   
    registerfn(){



      fetch('http://127.0.0.1:8000/user/',{
          method:'GET',
          
          
      })
    
      .then(response=>response.json())
      .then((data)=>{
          this.setState({
              data:data
          });
      });
}


componentDidMount() { 
    
  
    
    this.interval = setInterval(() => this.registerfn(), 1000); } 

componentWillUnmount() { clearInterval(this.interval); }



    componentDidMounts(){
        if(localStorage.getItem("admin")!=="admin"){
            window.location.replace("/AdminForm");
       }
        this.registerfn();
    }

    handleClick({currentTarget}) {    
        //console.log(currentTarget.value) 
        localStorage.setItem( 'userid',currentTarget.value)
        window.location.replace("/AdminUpdateForm");
         
        // e.currentTarget.value would be equivalent
      }
      logout(){

        localStorage.clear();
        window.location.replace("/AdminForm");
    }
  
 
    delete({currentTarget}) {    
        
        fetch('http://127.0.0.1:8000/user/'+currentTarget.value + '/',{
            method:'DELETE',
              
            
        })

        console.log(currentTarget.value);
       
       // window.location.reload();
      //  window.location.replace("/Dasshboard");
      }

    render() {

        const groupData=this.state.data;
        //   var  ist=1;
           const rows=groupData.map((gp)=>


                                      <tr>
                                            <td>{gp.id}</td>
                                            <td className="txt-oflo">{gp.username}</td>
                                           <td className="txt-oflo">{gp.full_name}</td>
                                           <td className="txt-oflo">{gp.email}</td>
                                           <td > 
                                           <button  type="button" className="btn btn-warning" value={gp.id} onClick={this.handleClick}>                                              Edit
                                          </button> </td>

                                          <td > 
                                           <button  type="button" className="btn btn-danger" value={gp.id} onClick={this.delete}>                                              Delete
                                          </button> </td>
                                          

                                        </tr>
           );

        return (
          
        
        <div>
            <div className="body">
                <div className="preloader">
                    <div className="lds-ripple">
                        <div className="lds-pos"></div>
                        <div className="lds-pos"></div>
                    </div>
                </div>
                <nav className="navbar navbar-dark bg-primary" style={{minHeight:"2px"}}>
 

                <div className="container-fluid">
    <a className="navbar-brand"  href="Dashboard" style={{paddingTop:"8px"}}>Dashboard</a>
    <a className="navbar-brand" onClick={this.logout} >Logout</a>
    


  </div>
  </nav>

                <div id="main-wrapper" data-layout="vertical" data-navbarbg="skin5" data-sidebartype="full"
                    data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full">

                    <header className="topbar" data-navbarbg="skin5">
                       
                    </header>
                 </div>
               
       <div className="page-wrapper">

            <div className="page-breadcrumb bg-white">
                <div className="row align-items-center">
                     <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                          
                     </div>
      
                </div>
 
            </div>
        </div>

<div className="container-fluid">

    <div className="row justify-content-center">
        <div className="col-lg-4 col-md-12">
            <div className="white-box analytics-info">
                
                <ul className="list-inline two-part d-flex align-items-center mb-0">
                    <li>
                        <div id="sparklinedash"><canvas width="67" height="30"
                            
                             style={{display: "inline-block", width: "67px", height: "30px", verticalAlign: "top"}}></canvas>
                        </div>
                    </li>
                    
                </ul>
            </div>
        </div>
        <div className="col-lg-4 col-md-12">
            <div className="white-box analytics-info">
              
                <ul className="list-inline two-part d-flex align-items-center mb-0">
                    <li>
                        <div id="sparklinedash2"><canvas width="67" height="30"
                                style={{display: "inline-block", width: "67px", height: "30px", verticalAlign: "top"}}></canvas>
                        </div>
                    </li>
                    
                </ul>
            </div>
        </div>
      
    </div>
        </div>
            
        <div className="row">
                    <div className="col-md-12 col-lg-12 col-sm-12">
                        <div className="white-box">
                        
                                <h3 style={{display:"flex" , justifyContent:"center" ,alignItems:"center"}}> REAL CODERZ PHILOMATS </h3>
                            <br></br>
                           
                            <div className="table-responsive">
                                <table className="table table-hover table-striped mx-auto"style ={{width:"800px"}}>
                                   
                                    <thead className="thead-dark">
                                        
                                        <tr>
                                            <th className="border-top-0">Id</th>
                                            <th className="border-top-0">User</th>
                                            <th className="border-top-0">Full Name</th>
                                            <th className="border-top-0">Email</th>
                                            <th className="border-top-0">Edit</th>
                                            <th className="border-top-0">Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        
                                     {rows}
                                       
                                    </tbody>
                                </table>
                            </div>
                           
                            

                        </div>
                    </div>
                </div>

             
                <script src="plugins/bower_components/jquery/dist/jquery.min.js"></script>


<script src="bootstrap/dist/js/bootstrap.bundle.min.js"></script>
<script src="js/app-style-switcher.js"></script>
<script src="plugins/bower_components/jquery-sparkline/jquery.sparkline.min.js"></script>

<script src="js/waves.js"></script>

<script src="js/sidebarmenu.js"></script>

<script src="js/custom.js"></script>

<script src="plugins/bower_components/chartist/dist/chartist.min.js"></script>
<script src="plugins/bower_components/chartist-plugin-tooltips/dist/chartist-plugin-tooltip.min.js"></script>
<script src="js/pages/dashboards/dashboard1.js"></script>


            </div>
            </div>

    

           );
    }
}

    export default Dashboard ;