import React from 'react'
import './Table.css'
import Tbody from '../Tbody/Tbody'
import Thead from '../Thead/Thead'

function Table(props) {
    return (
        <div className="table-div">
            <Thead properties={props.properties} />
            <div className="products-div">
                <table className="budg-table">
                    <Tbody products={props.products}
                        productToEdit={props.productToEdit}
                        handleCheckboxChange={props.handleCheckboxChange}
                        editClicked={props.editClicked}
                    />
                </table>
            </div>
        </div>
    )
}

export default Table