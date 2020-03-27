import React from 'react'
import './TableTools.css'

class TableTools extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hovered: false,
            addTypeClicked: false
        }
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

    render() {
        return (
            <div className={this.state.hovered ? "table-tools-div table-tools-div-active" : "table-tools-div"}onMouseEnter={this.handleHover}
                onMouseLeave={this.handleHoverLeave}>
                {this.state.hovered ?
                    <div className="table-tools-content">
                        <h1>Tools</h1>
                        <p className="price-p">Total price: <span>{this.props.totalPrice}</span></p>
                        <button onClick={this.props.deleteProducts} className="table-tools-btn">Delete selected items</button>
                        {this.state.addTypeClicked ? 
                        <div className="add-type-div">
                            <input type='text' id="type" />
                            <button className="add-type-btn">Add type</button>
                        </div>
                       
                        : 
                        <button onClick={this.addTypeClickedHandler} className="table-tools-btn">Add type of product</button>}
                        <div className="filter-div">
                            <select onChange={this.props.selectFilterHandler} id="sort">
                                <option value="default">Select sort</option>
                                <option value="name">Name descending</option>
                                <option value="price">Price ascending</option>
                                <option value="quantity">Quantity ascending</option>
                                <option value="type">Type descending</option>
                                <option value="date">Date descending</option>
                            </select>
                        </div>
                    </div>
                    :
                    <div className="before-hover-div">
                        <p><i className="fas fa-tools"></i></p>
                    </div>}
            </div>
        )
    }
}

export default TableTools;