import React from 'react'

class AddItem extends React.Component {
         constructor(props){
            super(props);
            this.state = {
                productName: "",
                productPrice: 0,
            }
         }
    render() { 
        return ( <form className='row mb-5' onSubmit={this.props.addItem.bind(this, {name: this.state.productName, price: this.state.productPrice})}>
          
            <div className="mb-3 col-4">
              <label htmlFor="exampleInputName" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputName"
                aria-describedby="nameHelp"
                name="productName"
                onChange= {(e) => {this.setState({productName: e.currentTarget.value})}}
                value={this.state.productName}  /*value ko bhi update kr denge sath sath */
              />
            </div>
            <div className="mb-3 col-4">
              <label htmlFor="exampleInputPrice" className="form-label">
                Price
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleInputPrice"
                price="productPrice"
                onChange= {(e) => {this.setState({productPrice: e.currentTarget.value})}}
                value={this.state.productPrice}
              />
            </div>                               
         
            <button type="submit" className="btn btn-primary col-2 " style={{maxHeight: '3rem', marginTop: '1.5rem'}}>
              Add Item 
            </button>
          </form>);
    }
}
 
export default AddItem;