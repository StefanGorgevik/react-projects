import React from 'react'
import './Inputs.css'
import { connect } from 'react-redux'

function Inputs(props) {
    var selectType = <select onChange={props.handleInputValue} name="select-type" id="type" className="select-type">
        <option defaultChecked value='default' > Select type</option>
        {props.types.map((type, i) => {
            return <option key={type + i} value={type}>{type}</option>
        })}
    </select>
    return (
        <form onSubmit={props.saveProduct}
            className="budget-calc-inputs">
            <div className="bcalc-bigger-inputs">
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        onChange={props.handleInputValue}
                        type="text"
                        id="name"
                        placeholder="product name"
                        value={props.product.name}
                    />
                </div>
                <div>
                    <label htmlFor="date">date</label>
                    <input
                        onChange={props.handleInputValue}
                        type="date"
                        id="date"
                        value={props.product.date}
                    />
                </div>
            </div>

            <div className="bcalc-smaller-inputs">
                <div className="budget-calc-type-div">
                    {selectType}
                </div>

                <div className="budget-calc-price-div">
                    <label htmlFor="quantity-input">Price</label>
                    <input
                        onChange={props.handleInputValue}
                        type="number"
                        id="price"
                        placeholder="price"
                        value={props.product.price}
                    />
                </div>
                <div className="budget-calc-quantity-div">
                    <label id="quantity-label" htmlFor="quantity-input">Quantity</label>
                    <input
                        onChange={props.handleInputValue}
                        type="number"
                        id="quantity"
                        placeholder="quantity"
                        value={props.product.quantity}
                    />
                </div>
            </div>

            {props.editClicked ?
                <button onClick={props.editProduct}
                    className="budget-calc-submit-btn">Edit</button> :
                <button onClick={props.saveProduct}
                    className="budget-calc-submit-btn">Submit</button>}
        </form>
    )
}

function mapStateToProps(state) {
    return {
        types: state.budgetCalcTypes
    }
}

export default connect(mapStateToProps)(Inputs);