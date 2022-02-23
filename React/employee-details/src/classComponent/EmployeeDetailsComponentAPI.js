import React from 'react';
import Axios from "axios"
import EmployeeDetailsComponent from "../components/ApiSbaccountdetails"

export default class EmployeeListComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            employeeList: []
        }
    }

    render() {
        return (
            <div>
                <h1>Employee List is given Below:</h1>
                {this.state.employeeList.map((employee) => {
                    return <EmployeeDetailsComponent key={employee.AccountNumber} deleteEmployee={this.deleteEmployee} {...employee}></EmployeeDetailsComponent>
                })}
            </div>
        )
    }

   


    deleteEmployee = (event) => {
        debugger;
       
        Axios.delete("https://localhost:5001/api/SundaramSbaccount/DeleteAcc?id=" +event.target.id).then(() => {
            alert("Employee is Deleted");
            this.getData();
        })
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        var dataPromise = Axios.get("https://localhost:5001/api/SundaramSbaccount/Allacc");
        dataPromise.then((response) => {
            this.setState({
                employeeList: response.data
            })
        })
    }
}