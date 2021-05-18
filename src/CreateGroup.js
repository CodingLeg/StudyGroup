import React, { Component } from 'react'

export default class CreateGroup extends Component {

    constructor(){
        super();    

        this.myRef = React.createRef();
        this.FetchGroup = this.FetchGroup.bind(this);   
        this.state={
            data:[]
        };
    }

    FetchGroup(){
        var bool = 1;
        fetch('http://127.0.0.1:8000/group/')
        .then(response=>response.json())
        .then((data)=>{
            this.setState({
                data:data
            });
            console.log(data)
            
            console.log(this.myRef.current.value);
            this.state.data.map((grp)=>{
                
                if(grp.gpName==this.myRef.current.value){
                    bool=0;
                    
                }
                
            }
            );
           console.log(bool)
           if(bool==0){
alert("Group Already Present, Please Enter New Name")
           }
           else{
               this.createGroup();
           }
            
        });

    }


    createGroup(){
         fetch('http://127.0.0.1:8000/group/',{
            method:'POST',
            body:JSON.stringify({"gpName":this.myRef.current.value,"subscribe":localStorage.getItem("username"),"role":"admin"}),
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(response=>response.json())
        .then((data)=>console.log(data))
        alert("group created")
        window.location.replace("/UserDashboard");
    }

    render() {
        return (
            <div className="card mx-auto mt-5" style={{width:'18rem'}} >
          <div className="card-body">
    <h5 className="card-title">Create Your Group</h5>
    <form>
 
  <div class="form-group">
    <label for="exampleInputPassword1">Enter Group Name</label>
    <input ref={this.myRef} type="text" class="form-control" id="exampleInputPassword1" placeholder="Group Name"/>
    <small id="emailHelp" class="form-text text-muted">Enter new group name to create a new group.</small>
  </div>
  <div class="form-group form-check">
  </div>
  <button type="button" onClick={this.FetchGroup} class="btn btn-primary">Submit</button>
</form>
  </div>
  </div>

        )
    }
}
