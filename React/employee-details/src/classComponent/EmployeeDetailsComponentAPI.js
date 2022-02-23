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
                    return <EmployeeDetailsComponent key={employee.id} {...employee}></EmployeeDetailsComponent>
                })}
            </div>
        )
    }

    componentDidMount() {
        var dataPromise = Axios.get("https://localhost:5001/api/SundaramSbaccount/Allacc");
        dataPromise.then((response) => {
            this.setState({
                employeeList: response.data
            })
        })
    }
}