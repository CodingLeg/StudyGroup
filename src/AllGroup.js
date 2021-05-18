import React, { Component } from 'react'

export default class AllGroup extends Component {
    constructor(){
        super();      
        this.state={
            data:[]
        };
    }
    
    subscribe(e){
        
        fetch('http://127.0.0.1:8000/group/',{
                method:'POST',
                body:JSON.stringify({"gpName":e.currentTarget.value,"subscribe":localStorage.getItem("username")}),
                headers:{
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then(response=>response.json())
            .then((data)=>console.log(data))
            .catch(error=>console.log(error))
            window.location.replace('/UserDashboard')
        
    }
    
    
      fetchGroup(){
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
   
    
    componentDidMount(){
     
      this.fetchGroup();
     
    }
    
        render() {
        let unique = [...new Set(this.state.data.map(gpname => gpname.gpName))];
        console.log(unique)
          const rows=unique.map((grp)=>{
    
            return (  <div className="card mx-auto mt-3" style={{width:'18rem'}} >
              <div className="card-body">
        <h5 className="card-title">{grp}</h5>
    
        <button type="button" value={grp} onClick={this.subscribe} className="btn btn-primary ml-3">Subscribe</button>
      </div>
      </div>
    
            )
          });
            return (
    <>        
              <div className="row mx-auto" style={{width:'70%'}}>
    {rows}</div>
              </>
            )
        }
}
