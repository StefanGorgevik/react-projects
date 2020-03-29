import React from 'react'
import './Inputs.css'
import Button from '../Button-NG/Button'

function Inputs(props) {
    return (
        <>
            <div className="ng-date-div">
                <div>
                    <label htmlFor="date">Date</label>
                    <input onChange={props.handleGroupDateInputValue} type="date" id="date" placeholder="Enter the date of shopping" />
                </div>
                <div>
                    <select onChange={props.handleProductInputValue} id="type">
                        <option value="default">Select type of products</option>
                        <option value="grocery">Grocery</option>
                        <option value="electronics">Electronics</option>
                    </select>
                </div>
            </div>
            <input onChange={props.handleProductInputValue}
                type="text" id="name" placeholder="Enter product name"
                value={props.product.name} />

            <div className="ng-price-quantity-div">
                <label htmlFor="price">Price:</label>
                <input type="number" id="price"
                    onChange={props.handleProductInputValue}
                    placeholder="Enter product price"
                    value={props.product.price} />
                <label htmlFor="quantity">Quantity:</label>
                <input type="text" id="quantity"
                    onChange={props.handleProductInputValue}
                    placeholder="Enter product quantity"
                    value={props.product.quantity} />
            </div>
            <Button click={props.addProductToGroup}
                content='Add product to group'
                name="ng-btn"
            />

        </>
    )
}

export default Inputs