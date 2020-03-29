import React from 'react'
import './Groups.css'
import { connect } from 'react-redux'
import Selected from './Selected/Selected'
import GroupsTable from './GroupsTable/GroupsTable'

class Groups extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: ''
        }
    }

    selectedGroupHandler = (group) => {
        this.setState({selected: group.products})
    }

    render() {
        var selectedGroup = this.state.selected
        var totalPrice = 0
        for (var i = 0; i < selectedGroup.length; i++) {
            if (selectedGroup[i].quantity >= 1) {
                totalPrice += (selectedGroup[i].quantity * Number(selectedGroup[i].price))
            } else if (selectedGroup[i].quantity < 1) {
                totalPrice += Number(selectedGroup[i].price)
            }
        }
        return (
            <main className="groups-main">
                <h1>Groups</h1>
                <div className="groups-content">
                <div className="groups-div">
                   <GroupsTable groups={this.props.groups} 
                       selectedGroupHandler={this.selectedGroupHandler}
                   />
                </div>
                    <Selected products={this.state.selected}
                        totalPrice={totalPrice}
                    />
                </div>
            </main>
        )
    }
}

function mapStateToProps(state) {
    return {
        groups: state.productGroups
    }
}

export default connect(mapStateToProps)(Groups)