export default function EmployeeDetailsComponent(props) {
    debugger;
        
    
        return (
          
                
                <div class="card" style={{width: "18rem", margin: "50px" ,display:"inline-block"}}>
                <img src="https://www.insureon.com/-/media/blog/posts/2021/photo_group-of-employees-working-on-project.png?h=370&iar=0&w=750&rev=3faabd3c0f7c4e11966caaa037fa4fc8" className="card-img-top" alt={props.name}/>
                <div className="card-body">
                <h5 className="card-title">{props.customerName}</h5>
                <p className="card-text">
                   <b> Id: </b>{props.accountNumber}<br></br>
                   <b> currentBalance: </b>{props.currentBalance}<br></br>
                   <b>Address: </b>{props.customerAddress}
                </p>
                <input type="button" id={props.accountNumber} class="btn btn-primary" value="Delete" onClick={props.deleteEmployee} />
                
                </div>
                </div>
    
    
            
        )
    }