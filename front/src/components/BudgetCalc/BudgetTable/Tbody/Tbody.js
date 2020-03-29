import React from 'react'
import './Tbody.css'

function Tbody(props) {
    const products = props.products.map((prod, i) => {
        return (
            <tr key={prod + i} className="product-tr">
                <td id="checkbox-td"><input onClick={(e, prod) => props.handleCheckboxChange(e, props.products[i])} 
                className="checkbox" type="checkbox" /></td>
                <td>{prod.name}</td>
                <td>{prod.type}</td>
                <td className="number-td">{prod.quantity >= 1 ? (prod.price * prod.quantity) : prod.price}
                {prod.quantity >= 1 ? <span>{ "(" + prod.price + ")"}</span> : null}</td>
                <td className="number-td">{prod.quantity}</td>
                <td>{prod.date}</td>
                <td id="edit-td">
                    <button onClick={() => props.productToEdit(prod)} className={props.editClicked ? "budg-edit-btn budg-edit-btn-disabled " : "budg-edit-btn"}>Edit</button>
                </td>
            </tr>
        )
    })
    return (
        <tbody>
            {products}
        </tbody>
    )
}

export default Tbody;