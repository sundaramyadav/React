import React from 'react';
import Axios from "axios"
// import EmployeeDetailsComponent from "../components/ApiSbaccountdetails"

export default class PostToApi extends React.Component {
    constructor() {
        super();
        this.state = {
            employeeList:[],
            accountNumber:0,
            customerName:'',
            customerAddress:'',
            currentBalance:0

        }
    }
changeHandler=(event)=>{
this.setState({
    [event.target.id]:event.target.value
})
}
    render() {
        return (
            <div>
            <form onSubmit={this.AddEmployee}>
                <label>AccountNumber:</label>
            <input type="number" id="accountNumber"  onChange={this.changeHandler}/><br></br><br></br>
            <label>Customer Name:</label>
            <input  type="text" id="customerName" onChange={this.changeHandler}/><br></br><br></br>
            <label>customerAddress:</label>
            <input  type="text"id="customerAddress" onChange={this.changeHandler}/><br></br><br></br>
            <label>CurrentBalance:</label>
            <input type="number" id="currentBalance" onChange={this.changeHandler}/>
            <input type="submit" id="submit" value="Submit" />
            </form>
            </div>
        )
    }

   

debugger;
    AddEmployee = (event) => {
        event.preventDefault();
        
      let data1={
        accountNumber:parseInt(this.state.accountNumber,10),
        customerName:this.state.customerName,
        customerAddress:this.state.customerAddress,
        currentBalance:parseInt(this.state.currentBalance, 10)

      };
     
      debugger;
        Axios.post("https://localhost:5001/api/SundaramSbaccount/Addacc",data1).then((response) => {
            alert("Employee is Added");
            this.getData();
        })
        
    }

   

   
    
}
debugger;