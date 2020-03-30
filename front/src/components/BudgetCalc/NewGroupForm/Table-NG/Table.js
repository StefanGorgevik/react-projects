import React from 'react'
import './Table.css'
import TableInfo from '../TableInfo/TableInfo'
import { connect } from 'react-redux'

function Table(props) {
    var products=[];
    if(!props.editGroupClicked) {
        products = props.products
    } else {
        products = props.productToEdit[0].products
    }
    if (products.length !== 0) {
        var prods = products.map((prod, i) => {
            return (
                <tr key={prod + i}
                    className="ng-new-prod-tr">
                    <td>{prod.name}</td>
                    <td>{prod.quantity >= 1 ? (prod.price * prod.quantity) : prod.price}
                        {prod.quantity >= 1 ? <span>{"(" + prod.price + ")"}</span> : null}</td>
                    <td>{prod.quantity}</td>
                    {props.mode === 'products' ? null :
                        <td className="x-td" onClick={() => props.removeProductFromGroup(prod.id)}>X</td>}
                </tr>
            )
        })
    }

    return (
        <>
            <TableInfo productsLength={props.products.length}
                totalPrice={props.totalPrice}
            />
            <table className="ng-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        {props.mode === 'products' ? null :
                            <th></th>}
                    </tr>
                </thead>
                <tbody className="ng-table-body">
                    {prods}
                </tbody>
            </table>
        </>
    )
}

function mapStateToProps(state) {
    return {
        mode: state.mode,
        productToEdit: state.productToEdit,
        editGroupClicked: state.editGroupClicked
    }
}

export default connect(mapStateToProps)(Table)