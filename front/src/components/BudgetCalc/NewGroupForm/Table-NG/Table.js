import React from 'react'
import './Table.css'
import TableInfo from '../TableInfo/TableInfo'

function Table(props) {
    var products = props.newGroupProducts
    if (products.length !== 0) {
        var prods = products.map((prod, i) => {
            return (
                <tr key={prod + i}
                    className="ng-new-prod-tr">
                    <td>{prod.name}</td>
                    <td>{prod.type}</td>
                    <td>{prod.quantity >= 1 ? (prod.price * prod.quantity) : prod.price}
                        {prod.quantity >= 1 ? <span>{"(" + prod.price + ")"}</span> : null}</td>
                    <td>{prod.quantity}</td>
                </tr>
            )
        })
    }

    return (
        <>
            <TableInfo productsLength={props.newGroupProducts.length}
                totalPrice={props.totalPrice}
            />
            <table className="ng-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody className="ng-table-body">
                    {prods}
                </tbody>
            </table>
        </>
    )
}

export default Table