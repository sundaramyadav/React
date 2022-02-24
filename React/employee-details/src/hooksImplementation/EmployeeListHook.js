import Axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import EmployeeDetailsComponent from "../components/EmployeeDetailsComponent"

export default function EmployeeListHook () {
  
    var [Emp, SetEmp] = useState([]);
    debugger;
        useEffect(() => {
            var dataPromise = Axios.get("https://5a530e1477e1d20012fa066a.mockapi.io/login");
            dataPromise.then((response) => {
  
                SetEmp(response.data);
            })
        }, [])
 
        return (
            <div>
                <h1>Employee List is given Below:</h1>
                {Emp.map((employee) => {
                    return <EmployeeDetailsComponent key={employee.id} {...employee} ></EmployeeDetailsComponent>
                })}
            </div>
        )
    }

  
   
   


