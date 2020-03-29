import React from 'react'
import './TableTools.css'
import store from '../../../redux/store'
import { addType, addNewGroupClicked, changeMode } from '../../../redux/actions/actions'
import { connect } from 'react-redux'
import ToolsContent from './ToolsContent/ToolsContent'

class TableTools extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hovered: false,
            addTypeClicked: false,
            sorts: ["name", "type", "price", "quantity", "date"],
            addedType: '',
            addNewGroupClicked: false
        }
    }

    handleInputValue = (e) => {
        this.setState({ addedType: e.target.value })
    }

    handleHover = () => {
        this.setState({ hovered: true })
    }

    handleHoverLeave = () => {
        this.setState({ hovered: false })
    }

    addTypeClickedHandler = () => {
        this.setState({ addTypeClicked: true })
    }

    addTypeHandler = () => {
        store.dispatch(addType(this.state.addedType))
        this.setState({ addTypeClicked: false })
    }

    addNewGroupHandler = () => {
        store.dispatch(addNewGroupClicked(!this.state.addNewGroupClicked))
    }

    selectModeHandler = (event) => {
        store.dispatch(changeMode(event.target.value))
    }

    render() {


        return (
            <div className={this.state.hovered ? "table-tools-div table-tools-div-active" : "table-tools-div"} 
                onMouseEnter={this.handleHover}
                onMouseLeave={this.handleHoverLeave} >
                
                {this.state.hovered ?
                    <ToolsContent deleteProducts={this.props.deleteProducts}
                        totalPrice={this.props.totalPrice}
                        selectFilterHandler={this.props.selectFilterHandler}
                        handleInputValue={this.handleInputValue}
                        addTypeHandler={this.addTypeHandler}
                        addTypeClickedHandler={this.addTypeClickedHandler}
                        addTypeClicked={this.state.addTypeClicked}
                        sorts={this.state.sorts}
                        addNewGroupHandler={this.addNewGroupHandler}
                        selectModeHandler={this.selectModeHandler}
                    />
                    :
                    <div className="before-hover-div">
                        <p><i className="fas fa-tools"></i></p>
                    </div>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        types: state.budgetCalcTypes
    }
}

export default connect(mapStateToProps)(TableTools);