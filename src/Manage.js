import React, { Component } from 'react'
import './test.css'
export default class Manage extends Component {
    constructor(){
        super();  
        this.myRef = React.createRef(); 
        this.myRef1 = React.createRef();
        this.add= this.add.bind(this);
        this.delete= this.delete.bind(this);
        this.deleteall= this.deleteall.bind(this);
 
        this.state={
            data:[],
            group:[],
            user:[]
          
        };
    }

    
 

    fetchGroup(){
         fetch('http://localhost:8000/group/')
         .then(response=>response.json())
         .then((data)=>{
             this.setState({
                 group:data
             });
             console.log(data)

         });
     
     }

    fetchData(){
       var id=this.props.match.params.id;
      
        fetch('http://localhost:8000/group/'+id)
        .then(response=>response.json())
        .then((data)=>{
            this.setState({
                data:data
            });
            console.log(data)

        });
    
    }
    
   
    componentDidMount(){
 
        this.fetchData();
        this.fetchGroup();
        this.users();

      }


    deleteall(){
for(var i=0;i<this.state.group.length;i++){
    fetch('http://127.0.0.1:8000/group/'+this.state.group[i].id+"/",{
              method:'DELETE',
              headers:{
                  'Content-type': 'application/json; charset=UTF-8',
              },
          })
          .then(response=>response.json())
          .then((data)=>console.log(data))
          .catch(error=>console.log(error))

}
window.location.replace('/Dashboard');
    }


      delete(){
            fetch('http://127.0.0.1:8000/group/'+this.myRef1.current.value+"/",{
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
users(){
    
    fetch('http://localhost:8000/user/')
    .then(response=>response.json())
    .then((data)=>{
        this.setState({
            user:data
        });
        console.log(data)

    });
}

      add(){        
        fetch('http://127.0.0.1:8000/group/',{
            method:'POST',
            body:JSON.stringify({"gpName":this.state.data.gpName,"subscribe":this.myRef.current.value,"role":"user"}),
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(response=>response.json())
        .then((data)=>console.log(data))
       

        
      }

    render() {
        const dlt=this.state.group.map((grp)=>{
            if(grp.gpName==this.state.data.gpName){
                return(
                    <option value={grp.id}>{grp.subscribe}</option>
                )

            }
        })
        
        const add=this.state.user.map((grp)=>{
            
            return(
                <option>{grp.full_name}</option>
            )

        
    })

        return (
            <>
  
            <div className="card mx-auto mt-3" style={{width:'400px'}} >
            <div className="card-body">
              <div className="d-flex">
      <h5 className="card-title">{this.state.data.gpName}</h5>
    
      <button onClick={this.deleteall} className="btn btn-danger btn-sm pt-0 pb-1 ml-1" style={{height:'20px',fontSize:'12px'}}>Delete</button>
      <p className="ml-auto">Admin</p>
  
      </div>
      
      <div className="row d-flex">
      <select  className="form-control" ref={this.myRef} style={{width:"220px"}} >
        {add}
      </select>
      <button type="button" value="id" onClick={this.add} className="btn btn-primary ml-3">Add Member</button>
      </div>
      <div className="row d-flex mt-3">
      <select className="form-control" ref={this.myRef1}  style={{width:"220px"}}  placeholder="Full Name">
          {dlt}
      </select>
      <button type="button" value="id" onClick={this.delete} className="btn btn-danger ml-3">Remove Member</button>
      </div>
   </div>
    </div>
    </>
        )
    }
}
