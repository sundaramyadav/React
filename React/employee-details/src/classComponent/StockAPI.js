import React from 'react';
import Axios from "axios"
import APIStockComponent from "../components/APIStockComponent"

export default class StockApi extends React.Component {
    constructor() {
        super();
        this.state = {
            Sbi: []
            
        }
    }

    render() {
        return (
            <div>
                <h1>Details about stock is given below:</h1>
                
                
                     <APIStockComponent  {...this.state.Sbi} ></APIStockComponent>
                
                )
            </div>
        )
    }

    componentDidMount() {
        var dataPromise = Axios.get("https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/SBI");
        debugger;
        dataPromise.then((response) => {
            this.setState({
                Sbi: response.data
            })
        })
    }
}