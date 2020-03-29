import React from 'react'
import "./SelectMode.css"
import {connect} from 'react-redux'

function SelectMode(props) {
    return (
        <div className="select-mode-div" >
            <label htmlFor="select-mode">Select view mode</label>
            <select id="select-mode" className="select-mode" onChange={props.selectModeHandler}>
                <option selected={props.mode === 'products' ? "selected" : ''} defaultValue="products" value="products">Products </option>
                <option selected={props.mode === 'groups' ? "selected" : ''} defaultValue="groups" value="groups">Product groups</option>
            </select>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        mode: state.mode
    }
}

export default connect(mapStateToProps)(SelectMode);