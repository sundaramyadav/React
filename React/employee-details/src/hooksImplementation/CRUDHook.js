import React from 'react';
import Axios from "axios";
import { useEffect, useState } from 'react';

import EmployeeDetailsComponent from "../components/ApiSbaccountdetails"

export default function CRUDHook() {
    var [employeeList, setEmployeeList] = useState([]);


    useEffect(() => {
        var dataPromise = Axios.get("https://localhost:5001/api/SundaramSbaccount/Allacc");
        dataPromise.then((response) => {
            setEmployeeList(response.data);
        })
    }, [])


    const GetData = () => {

        var dataPromise = Axios.get("https://localhost:5001/api/SundaramSbaccount/Allacc");
        dataPromise.then((response) => {
            setEmployeeList(response.data);
        })
    }
    function DeleteEmployee(event) {
        Axios.delete("https://localhost:5001/api/SundaramSbaccount/DeleteAcc?id=" + event.target.id).then(() => {
            alert("Employee is Deleted");
            GetData();
        })
    }
    var [accountNumber, setaccountNumber] = useState(0);
    var [customerName, setcustomerName] = useState('');
    var [customerAddress, setcustomerAddress] = useState('');
    var [currentBalance, setcurrentBalance] = useState(0);
    
    // var changeHandler1 = (event) => {
    //     setaccountNumber  (
    //         event.target.value
    //     )
    // }
    // var changeHandler2 = (event) => {
    //     setcustomerName(
    //         event.target.value
    //     )
    // }

    // var changeHandler3 = (event) => {
    //     setcustomerAddress(
    //         event.target.value
    //     )
    // }

    // var changeHandler4 = (event) => {
    //     setcurrentBalance(
    //         event.target.value
    //     )
    // }

    var data={
        accountNumber:parseInt(accountNumber,10),
        customerName:customerName,
        customerAddress:customerAddress,
        currentBalance:parseInt(currentBalance,10)
    }
function AddEmployee(event)
{
    Axios.post("https://localhost:5001/api/SundaramSbaccount/Addacc",data).then((response) => {
            alert("Employee is Added")
            GetData();
        })

}

//  function UpdateEmployee(event)
//  {
//     const [account, updateaccount] = useState([]);
// useEffect(function effectFunction() {
//      Axios.put("https://localhost:5001/api/SundaramSbaccount/EditAcc/"+event.target.id,data)
//     .then((response) => {
//        alert("update is done")
//     })
// }, []);

//  }

 

    return (
        <div>
            <div>
                <form onSubmit={AddEmployee}>
                    <label>AccountNumber:</label>
                    <input type="number" id="setaccountNumber" onChange={(e) => setaccountNumber(e.target.value)} /><br></br><br></br>
                    <label>Customer Name:</label>
                    <input type="text" id="setcustomerName" onChange={(e) => setcustomerName(e.target.value)} /><br></br><br></br>
                    <label>customerAddress:</label>
                    <input type="text" id="setcustomerAddress" onChange={(e) => setcustomerAddress(e.target.value)} /><br></br><br></br>
                    <label>CurrentBalance:</label>
                    <input type="number" id="setcurrentBalance" onChange={(e) =>setcurrentBalance(e.target.value)} />
                    <input type="submit" id="submit" value="Submit" />
                </form>
            </div>
            <h2>Employee List is given Below:</h2>

            {employeeList.map((employee) => {
                return <EmployeeDetailsComponent key={employee.eid}  deleteEmployee={DeleteEmployee}{...employee}></EmployeeDetailsComponent>
            })}
        </div>
    )
}
