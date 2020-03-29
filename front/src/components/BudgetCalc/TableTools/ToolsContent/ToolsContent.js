import React from 'react'
import './ToolsContent.css'
import Button from '../NewGroupForm/Button-NG/Button'

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
            <div className="filter-div">
                {selectSort}
            </div>
            <Button click={props.deleteProducts}
                content='Delete selected items' 
                    name='table-tools-btn'
                />

            {props.addTypeClicked ?
                <div className="add-type-div">
                    <input onChange={props.handleInputValue} type='text' id="type" placeholder="Enter a new type" />
                    <button onClick={props.addTypeHandler} className="add-type-btn">Add type</button>
                </div>
                :
                <Button click={props.addTypeClickedHandler}
                content='Add a new type of product' 
                    name='table-tools-btn'
                />}
                <Button click={props.addNewGroupHandler}
                content='Add a new group of products' 
                    name='table-tools-btn'
                />
            
        </div>
    )
}

export default ToolsContent;