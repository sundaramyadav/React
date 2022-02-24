
// import Axios from "axios"

// import React, { useState, useEffect } from 'react';

// export default function StockApi (props)
// {
//     debugger;
//     var [Stock, setCounter] = useState(0);

//     useEffect(() => {
//         debugger;
//         Axios.get(props.url).then((response) => {

//             setCounter({ Stock: response.data.data })
//       })});
//         return (
//             <div>
               
               
//                Before Changed Price : {Stock.pricecurrent}
                     
                
                
//             </div>
//         )
    
       
// //    function componentDidMount() {
// //         setInterval(() => {
// //             Axios.get(props.url).then((response) => {

// //                 setCounter({ Stock: response.data.data })
// //                 //console.log(this.state.stockPrice)
// //             });
// //         }, 1000);
// //     }
// }
// debugger;








import Axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

export default function Stockexchange()
{
    var [price, setPrice] = useState(0);
debugger;
    useEffect(() => {
        var dataPromise = Axios.get("https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/SBI");
        dataPromise.then((response) => {
            setPrice(response.data.data);
        })
    }, [])

    return(
        <div>
            <h1>Current Price:{price.pricecurrent}</h1>   
        </div>
    )
   
}