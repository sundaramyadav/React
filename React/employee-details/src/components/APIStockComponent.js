export default function APIStockComponent(props) {
    debugger;
        
        return (
          
                <div>
                    
                
                <div className="card" style={{width: "18rem", margin: "50px" ,display:"inline-block"}}>
                <img src="https://www.insureon.com/-/media/blog/posts/2021/photo_group-of-employees-working-on-project.png?h=370&iar=0&w=750&rev=3faabd3c0f7c4e11966caaa037fa4fc8" className="card-img-top" alt={props.name}/>
                <div className="card-body">
                <h5 className="card-title">{props.message}</h5>
                <p className="card-text">
                   <b> StockName: </b>{props.HN}<br></br>
                   <b>OpeningPrice: </b>{props.HP}<br></br>
                   <b>Current Price:</b>{props.pricecurrent}<br></br>
                   <b>LastUpdated:</b>{props.lastupd}<br></br>
                </p>
                <input type="button" class="btn btn-primary" value="More details"/>
                
                </div>
                </div>
                </div>
    
    
            
        )
    }