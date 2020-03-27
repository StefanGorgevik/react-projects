import React from 'react'
import './ToolsContent.css'

function ToolsContent(props) {
    var selectSort =
            <select id="sort" className="type-select" onChange={props.selectFilterHandler}>
                <option defaultChecked value='default' > Select sort</option>
                {props.sorts.map((sort, index) => {
                    return <option key={`sort${index}`} value={sort}>{sort}</option>
                })}
            </select>
            
    return (
        <div className="table-tools-content">
            <h1>Tools</h1>
            <p className="price-p">Total price: <span>{props.totalPrice}</span></p>
            <button onClick={props.deleteProducts} className="table-tools-btn">Delete selected items</button>
            {props.addTypeClicked ?
                <div className="add-type-div">
                    <input onChange={props.handleInputValue} type='text' id="type" placeholder="Enter a new type" />
                    <button onClick={props.addTypeHandler} className="add-type-btn">Add type</button>
                </div>
                :
                <button onClick={props.addTypeClickedHandler} className="table-tools-btn">Add a new type of product</button>}
            <div className="filter-div">
                {selectSort}
            </div>
        </div>
    )
}

export default ToolsContent;