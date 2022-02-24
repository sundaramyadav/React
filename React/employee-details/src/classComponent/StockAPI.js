import React from 'react';
import Axios from "axios"
import APIStockComponent from "../components/APIStockComponent"

export default class StockApi extends React.Component {
    constructor() {
        super();
        this.state = {
            Stock: []
            
        }
    }

    render() {
        return (
            <div>
               
                
                
                     <APIStockComponent  {...this.state.Stock} ></APIStockComponent>
                
                )
            </div>
        )
    }

    componentDidMount() {
        setInterval(() => {
            Axios.get(this.props.apiUrl).then((response) => {

                this.setState({ Stock: response.data.data })
                //console.log(this.state.stockPrice)
            });
        }, 1000);
    }
}