import { Component } from "react";
import { render } from "react-dom";

export default class DataBinding extends Component {
    constructor() {
        super();
        
        this.state = {
            name: ""
        }
    }

    nameChange(event){
        this.setState({
            name: event.target.value
        })
    }


    nameChangechild(event){
        this.setState({
            val: event.target.value
        })
    }
   
    render() {
        return (
            <div>
                <label>Enter name</label>
                <input onChange={(event) => this.nameChange(event)} /><br />
                <p>The name entered is {this.state.name}</p>

                
                <label>Enter child name</label>
                <input onChange={(event) => this.nameChangechild(event)} /><br />
                <ChildComponent userName={this.state.val}></ChildComponent>
            </div>
             
        )
    }
}
//child component
function ChildComponent(props) {
    
    
    return <h3>Value in Child Component is {props.userName}</h3>
    
}

// class ChildComponent extends React.Component {
//     render() {
//         return <h3>Value in Child Component is {this.props.userName}</h3>
//     }
// }