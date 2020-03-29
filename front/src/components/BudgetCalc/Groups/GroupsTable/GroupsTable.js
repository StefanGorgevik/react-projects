import React from 'react'
import './GroupsTable.css'

function GroupsTable(props) {
    var groups = props.groups.map((group, i) => {
        return (
            <tr key={group + i} className="group-tr">
                <td>{group.groupDate}</td>
                <td>{group.type}</td>
                <td> 600</td>
                <td onClick={() => props.selectedGroupHandler(group)} className="expand-td"> <i className="fas fa-long-arrow-alt-right"></i></td>
            </tr>
        )
    })
    return (
        <table className="groups-table">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Total Price</th>
                    <th>Products</th>
                </tr>
            </thead>
            <tbody>
                {groups}
            </tbody>
        </table>
    )
}

export default GroupsTable;