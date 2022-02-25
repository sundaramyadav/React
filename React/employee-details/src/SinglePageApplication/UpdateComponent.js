import Axios from 'axios';
import React from 'react';

export default class UpdateComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            accountNumber:0,
            customerName:'',
            customerAddress:'',
            currentBalance:0
        }
    }

    changeHandler=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    render() {
        debugger;
        return (
            <div>
                <form onSubmit={this.updateEmployee}>
                        <label>AccountNumber: </label>
                        <input type="number" name="accountNumber" placeholder={this.state.accountNumber} /><br></br><br></br>
                        <label>customerName: </label>
                        <input type="text" name="customerName" placeholder={this.state.customerName} onChange={this.changeHandler} /><br></br><br></br>
                        <label>CustomerAddress: </label>
                        <input type="text" name="customerAddress" placeholder={this.state.customerAddress} onChange={this.changeHandler} /><br></br><br></br>
                        <label>CurrentBalance: </label>
                        <input type="number" name="currentBalance" placeholder={this.state.currentBalance} onChange={this.changeHandler} /><br></br><br></br>
                        <input type="submit" value="Update" /><br></br><br></br>
                    </form>
            </div>
        )
    }

    updateEmployee = () => {
        var putdata={
            accountNumber:this.state.accountNumber,
            customerName:this.state.customerName,
            customerAddress:this.state.customerAddress,
            currentBalance:this.state.currentBalance
        }
        Axios.put("https://localhost:5001/api/SundaramSbaccount/EditAcc/"+this.state.accountNumber,putdata).then(()=>{
            alert(putdata.accountNumber);   
        })   
    }

    componentDidMount() {
        debugger;
        alert(this.props.match.params.userId);
        Axios.get("https://localhost:5001/api/SundaramSbaccount/byid/" +this.props.match.params.userId).then((response) => {
            this.setState({
                accountNumber: response.data.accountNumber,
                customerName: response.data.customerName,
                customerAddress: response.data.customerAddress,
                currentBalance: response.data.currentBalance
            })
        })       
    }
}