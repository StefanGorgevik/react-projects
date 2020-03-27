import React from 'react'
import './Inputs.css'

function Inputs(props) {
    return (
        <form onSubmit={props.saveProduct}
            className="budget-calc-inputs">
           <div className="budget-calc-biginput-div">
                <label htmlFor="name">Name</label>
                <input
                    onChange={props.handleInputValue}
                    type="text"
                    id="name"
                    placeholder="Enter product name"
                    value={props.product.name}
                />
            </div>
           <div className="budget-calc-type-div">
                <select onChange={props.handleInputValue} name="select-type" id="type" className="select-type">
                    <option value="type">Select type</option>
                    <option value="food">Food</option>
                    <option value="drinks">Drinks</option>
                    <option value="clothing">Clothing</option>
                </select>
            </div>
           
           <div className="budget-calc-price-div">
                <label htmlFor="quantity-input">Price</label>
                <input
                    onChange={props.handleInputValue}
                    type="number"
                    id="price"
                    placeholder="Enter price"
                    value={props.product.price}
                />  
            </div>
           <div className="budget-calc-quantity-div">
                <label htmlFor="quantity-input">Quantity</label>
                <input
                    onChange={props.handleInputValue}
                    type="number"
                    id="quantity"
                    placeholder="Enter quantity"
                    value={props.product.quantity}
                />  
            </div>
           <div className="budget-calc-biginput-div">
                <label htmlFor="date">date</label>
                <input
                    onChange={props.handleInputValue}
                    type="date"
                    id="date"
                    placeholder="Enter date"
                    value={props.product.date}
                />  
            </div>
            {props.editClicked ?
                <button onClick={props.editProduct}
                    className="budget-calc-submit-btn">Edit</button> :
                <button onClick={props.saveProduct}
                    className="budget-calc-submit-btn">Submit</button> }
        </form>
    )
}

export default Inputs