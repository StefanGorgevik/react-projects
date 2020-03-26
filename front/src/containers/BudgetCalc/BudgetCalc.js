import React from 'react'
import './BudgetCalc.css'

class BudgetCalc extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            properties: ["name", "type", "price", "date"],
            name: '',
            type: '',
            price: '',
            date: '',
            products: [
                {
                    name: "Burger",
                    type: "Fast-food",
                    price: 150,
                    date: 2
                }
            ]
        }
    }

    handleInputValue = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    saveProduct = (e) => {
        e.preventDefault()
        var prods = this.state.products
        var product = {
            name: this.state.name,
            type: this.state.type,
            price: this.state.price,
            date: this.state.date
        }
        prods.push(product)
        this.setState({
            products: prods
        })

    }

    handleCheckboxChange =(e) => {
        let isChecked = e.target.checked;
      }

    productToEdit = (prod) => {
        this.setState({
            name: prod.name,
            type: prod.type,
            price: prod.price,
            date: prod.date
        })
    }

    render() {
        const products = this.state.products.map((prod, i) => {
            return (
                <tr key={prod + i} className="product-tr">
                    <td id="checkbox-td"><input onChange={this.handleCheckboxChange} className="checkbox" type="checkbox"/></td>
                    <td>{prod.name}</td>
                    <td>{prod.type}</td>
                    <td>{prod.price}</td>
                    <td>{prod.date}</td>
                    <td id="edit-td">
                        <button onClick={() => this.productToEdit(prod)} className="budg-edit-btn">Edit</button>
                    </td>
                </tr>
            )
        })

        const inputs = this.state.properties.map((prop, i) => {
            return (
                <div className="budget-calc-input-div" key={prop + i}>
                    <label htmlFor={prop}>{prop + ": "}</label>
                    <input onChange={this.handleInputValue} type={prop === "date" ? "date" : "text"} id={prop} defaultValue={this.state[prop]} />
                </div>
            )
        })
        return (
            <main className="budget-calc-main">
                <h1 className="budget-calc-h1">Budget Calc</h1>
                <form onSubmit={this.saveProduct} className="budget-calc-inputs">
                    {inputs}
                    <button onClick={this.saveProduct} className="budget-calc-submit-btn">Submit</button>
                </form>
                <div className="budget-calc-content-div">
                    <div className="products-div">
                        <table className="budg-table">
                            <thead>
                                <tr className="thead-tr">
                                    <th className="empty-th"></th>
                                    <th>Name</th>
                                    <th>Type</th>
                                    <th>Price</th>
                                    <th>Date</th>
                                    <th className="empty-th"></th>
                                </tr>
                            </thead>
                            <tbody>
                            <td></td>
                                {products}
                            </tbody>
                        </table>
                    </div>
                    <div className="filters-div">

                    </div>
                </div>

            </main>
        )
    }
}

export default BudgetCalc;