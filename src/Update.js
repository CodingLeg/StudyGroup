import React from 'react';

class Update extends React.Component{
    constructor(){
        super();
        this.state={
            name:'',
            email:'',
            contact:'',
            password:''
        }
        this.changeHandler=this.changeHandler.bind(this);
        this.submitForm=this.submitForm.bind(this);
    }

    // Input Change Handler
    changeHandler(event){
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    // Submit Form
    submitForm(){

        fetch('http://127.0.0.1:8000/user/'+localStorage.getItem("id")+'/',{
            method:'PUT',
            body:JSON.stringify(this.state),
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
            },
            
        })
        .then(response=>response.json())
        .then((data)=>console.log(data));
        this.props.history.push('/UserDashboard')
         }

    fetchData(){

        fetch('http://127.0.0.1:8000/user/'+localStorage.getItem("id"))
        .then(response=>response.json())
        .then((data)=>{
            this.setState({
                full_name:data.full_name,
                email:data.email,
                password:data.password
            });
        });
    }

    componentDidMount(){
        this.fetchData();
    }

    render(){
        return (
            <>
    
            <div className="card mx-auto mt-5" style={{width:'400px'}} >
              <table className="table table-bordered">
                <tbody>
                    <tr>
                        <th>Full Name</th>
                        <td>
                            <input value={this.state.full_name} name="name" onChange={this.changeHandler} type="text" className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>
                            <input value={this.state.email} name="email" onChange={this.changeHandler} type="text" className="form-control" />
                        </td>
                    </tr>
                    
                    <tr>
                        <th>Password</th>
                        <td>
                            <input value={this.state.password} name="password" onChange={this.changeHandler} type="text" className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <input type="submit" onClick={this.submitForm} className="btn btn-dark ml-5" />
                           <a href="/Dashboard" ><button type="button" className="btn btn-danger ml-3">Cancel</button></a>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
            </>
        );
    }
}

export default Update;