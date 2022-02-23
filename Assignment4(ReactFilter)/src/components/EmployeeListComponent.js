import EmployeeDetailsComponent from "./EmployeeDetailsComponent";

import { Component } from "react";
import { render } from "react-dom";
debugger;
export default class EmployeeListComponent extends Component {
    
    constructor() {
        super();
       
        this.state = {
            searchname:""
        };
    }
    debugger;
    nameChange = (event) => {
        this.setState({
            searchname: event.target.value
        })
    }

    // chec=(employee)=> {
    //     debugger;
    //     if ((employee.name).includes(this.state.searchname)) {
    //         return (


    //             <EmployeeDetailsComponent {...employee}></EmployeeDetailsComponent>
    //         )
    //     }
        


    // }
    
    render() {
        return (
            <div>





                <label>Enter name</label>
                <input id="name" onChange={this.nameChange} />


                

                <div>
                  


                    {this.props.EmpList.map( (employee)=>{
                     
                          debugger;
                         
                        //this.chec(employee)
                      
                          
                        

                           if(this.state.searchname==="")
                           {
                           return(


                               <EmployeeDetailsComponent {...employee}></EmployeeDetailsComponent>
                           )
                            }
                           if((employee.name.toLowerCase()).includes(this.state.searchname.toLowerCase()))
                           {

                           return(


                               <EmployeeDetailsComponent {...employee}></EmployeeDetailsComponent>
                           )
                           }
                    })
                    }
                </div>
            </div>
        )

    }
}
debugger;