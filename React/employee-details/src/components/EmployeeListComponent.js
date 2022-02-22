import EmployeeDetailsComponent from "./EmployeeDetailsComponent";

export default function EmployeeListComponent(props)
{

    return(
<div>
       
          {props.EmpList.map(function(employee)
           {
               return(
               
               
                   <EmployeeDetailsComponent {...employee}></EmployeeDetailsComponent>
               )
           })
       }
       </div>
    )
}
debugger;