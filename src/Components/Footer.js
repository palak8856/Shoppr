import React from 'react'

function Footer(props) {
  return (
   <div className="row fixed-bottom" >
         <button type="button" className='btn btn-primary' onClick={()=> {props.resetQuantity()}} style={{width: '50%'}}>Reset</button>
         <div className='bg-dark text-white text-center' style={{width: '50%'}}>
            {props.totalAmount}
         </div>
   </div>
  )
} 

export default Footer;
