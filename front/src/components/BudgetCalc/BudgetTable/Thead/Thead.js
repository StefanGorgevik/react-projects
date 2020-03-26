import React from 'react'
import './Thead.css'

function Thead(props) {
    return (
        <table className="top-table">
            <thead className="thead-tr">
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Price</th>
                    <th>Date</th>
                </tr>
            </thead>
        </table>
    )
}

export default Thead;