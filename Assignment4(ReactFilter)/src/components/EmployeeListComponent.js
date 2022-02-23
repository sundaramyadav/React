import EmployeeDetailsComponent from "./EmployeeDetailsComponent";

import { Component } from "react";
import { render } from "react-dom";

export default class EmployeeListComponent extends Component {
    constructor() {
        super();
        //this. nameChange = this. nameChange.bind(this);
        this.state = {
            searchname: ""
        };
    }
    debugger;
    nameChange = (event) => {
        this.setState({
            searchname: event.target.value
        })
    }

    chec(employee) {
        debugger;
        if (this.state.searchname ==="") {
            return (


                <EmployeeDetailsComponent {...employee}></EmployeeDetailsComponent>
            )
        }


    }
    // nameChange(event){

    //     this.setState({
    //         searchname: event.target.value
    //     })
    // }

    render() {
        return (
            <div>





                <label>Enter name</label>
                <input id="name" onChange={this.nameChange} />


                <p>{this.state.searchname}</p>

                <div>
                    <p>{this.state.searchname}</p>


                    {this.props.EmpList.map( (employee)=>{
                     
                          debugger;
                         
                         {this.chec(employee)} 
                        // if(employee.name==="Bernita Fadel")
                        // return(


                        //           <EmployeeDetailsComponent {...employee}></EmployeeDetailsComponent>
                        //        )

                        //    if(this.state.searchname==="")
                        //    {
                        //    return(


                        //        <EmployeeDetailsComponent {...employee}></EmployeeDetailsComponent>
                        //    )
                        //     }
                        //    if((employee.name).includes(this.state.searchname))
                        //    {

                        //    return(


                        //        <EmployeeDetailsComponent {...employee}></EmployeeDetailsComponent>
                        //    )
                        //    }
                    })
                    }
                </div>
            </div>
        )

    }
}
debugger;