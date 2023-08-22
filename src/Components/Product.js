import React from "react";

export default function Product(props) {
  
  
  return (
    <div className="row mt-5">
      <div className="col-5">
        <h4>
          {props.product.name}{" "}
          <span class="badge bg-secondary" >₹{props.product.price}</span>
        </h4>
      </div>
        
        <div className="col-3">
        <div class="btn-group" role="group" aria-label="Basic mixed styles example">
     <button type="button" class="btn btn-info" onClick= {() => {props.decrementQuantity (props.index)}}>-</button>
     <button type="button" class="btn btn-success">{props.product.quantity}</button>
     <button type="button" class="btn btn-info" onClick={() => {props.incrementQuantity (props.index)}}>+</button>
      </div>
        </div>
       
       <div className="col-4">
        {props.product.quantity* props.product.price}
       </div>
       <button className="col-1 btn btn-info" onClick={() => {props.removeItem(props.index)}}>
        Remove
       </button>
    </div>
  );
}
