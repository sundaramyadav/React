import React from 'react';
import Axios from "axios";
import { useEffect, useState } from 'react';

import post from "CRUDHook"
export default function CRUDHook() {


    var [accountNumber, setaccountNumber] = useState(0);
    var [customerName, setcustomerName] = useState('');
    var [customerAddress, setcustomerAddress] = useState('');
    var [currentBalance, setcurrentBalance] = useState(0);
    
    var changeHandler1 = (event) => {
        setaccountNumber  (
            event.target.value
        )
    }
    var changeHandler2 = (event) => {
        setcustomerName(
            event.target.value
        )
    }

    var changeHandler3 = (event) => {
        setcustomerAddress(
            event.target.value
        )
    }

    var changeHandler4 = (event) => {
        setcurrentBalance(
            event.target.value
        )
    }

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
    return (
        
            <div>
                <form onSubmit={AddEmployee}>
                    <label>AccountNumber:</label>
                    <input type="number" id="setaccountNumber" onChange={changeHandler1} /><br></br><br></br>
                    <label>Customer Name:</label>
                    <input type="text" id="setcustomerName" onChange={changeHandler2} /><br></br><br></br>
                    <label>customerAddress:</label>
                    <input type="text" id="setcustomerAddress" onChange={changeHandler3} /><br></br><br></br>
                    <label>CurrentBalance:</label>
                    <input type="number" id="setcurrentBalance" onChange={changeHandler4} />
                    <input type="submit" id="submit" value="Submit" />
                </form>
            </div>
            )
}

