import React from 'react'
import './Inputs.css'

function Inputs(props) {
    const inputs = props.properties.map((prop, i) => {
        return (
            <div className="budget-calc-input-div" key={prop + i}>
                <label htmlFor={prop}>{prop + ": "}</label>
                <input
                    onChange={props.handleInputValue}
                    type={prop === "date" ? "date" : "text"}
                    id={prop}
                    value={props.product[prop]}
                />
            </div>
        )
    })
    return (
        <form onSubmit={props.saveProduct}
            className="budget-calc-inputs">
            {inputs}
            {props.editClicked ?
                <button onClick={props.editProduct}
                    className="budget-calc-submit-btn">Edit</button> :
                <button onClick={props.saveProduct}
                    className="budget-calc-submit-btn">Submit</button> }
        </form>
    )
}

export default Inputs