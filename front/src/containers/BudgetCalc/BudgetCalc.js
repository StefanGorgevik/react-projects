import React from 'react'
import './BudgetCalc.css'
import Inputs from '../../components/BudgetCalc/Inputs/Inputs'
import TableTools from '../../components/BudgetCalc/TableTools/TableTools'
import Table from '../../components/BudgetCalc/BudgetTable/Table/Table'
import Groups from '../../components/BudgetCalc/Groups/Groups'
import {connect} from 'react-redux'


class BudgetCalc extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            product: {
                id: '',
                name: '',
                type: '',
                price: '',
                quantity: '',
                date: ''
            },
            products: [
                {
                    id: 0,
                    name: "cheese",
                    type: "food",
                    price: 150,
                    quantity: 1,
                    date: "2020-01-01",
                    isChecked: false
                },
                {
                    id: 1,
                    name: "burger",
                    type: "food",
                    price: 120,
                    quantity: 2,
                    date: "2019-01-01",
                    isChecked: false
                },
                {
                    id: 3,
                    name: "coca cola",
                    type: "drinks",
                    price: 60,
                    quantity: 5,
                    date: "2020-06-01",
                    isChecked: false
                }
            ],
            isChecked: false,
            productsToDelete: [],
            editClicked: false,
            filter: 'name'
        }
    }

    handleInputValue = (event) => {
        this.setState({ ...this.state, product: { ...this.state.product, [event.target.id]: event.target.value } })
    }

    saveProduct = (e) => {
        if (!this.state.editClicked) {
            e.preventDefault()
            var prods = this.state.products
            var product = this.state.product
            product.id = Math.floor(Math.random() * 1000)
            prods.push(product)
            this.setState({
                products: prods,
                product: { id: '', name: '', type: '', price: '', quantity: '', date: '' }
            })
        }
    }

    handleCheckboxChange = (e, prod) => {
        let products = this.state.products
        products.forEach(prod => {
            if(prod.name === e.target.value) {
                prod.isChecked = e.target.checked
            }
        })
        console.log(products)
        this.setState({ products: products })
    }

    productToEdit = (prod) => {
        var prods = this.state.products
        prods.splice(prods.indexOf(prod), 1)
        this.setState(prevState => ({
            editClicked: !prevState.editClicked,
            products: prods,
            product: prod
        }))
    }

    editProduct = (event) => {
        event.preventDefault()
        var prods = this.state.products
        var editedProd = this.state.product
        prods.push(editedProd)
        this.setState(prevState => ({
            editClicked: !prevState.editClicked,
            products: prods,
            product: { id: '', name: '', type: '', price: '', quantity: '', date: '' }
        }))
    }

    deleteProducts = () => {
        var products = this.state.products
        var prodToDlt = []
        for(var i = 0; i < products.length; i++) {
            if(products[i].isChecked) {
                prodToDlt.push(products[i])
            }
        } 
        var index;
        for (var j = 0; j < prodToDlt.length; j++) {
            index = products.indexOf(prodToDlt[j]);
            if (index > -1) {
                products.splice(index, 1);
            }
        }
        this.setState({
            products: products
        })
    }

    selectFilterHandler = (e) => {
        var val = e.target.value
        var prods = this.state.products
        prods.sort((a, b) =>
            (a[val] > b[val]) ? 1 : ((b[val] > a[val]) ? -1 : 0))
        this.setState({
            products: prods,
        })
    }

    render() {
        var totPrice = 0;
        for (var i = 0; i < this.state.products.length; i++) {
            if (this.state.products[i].quantity >= 1) {
                totPrice += (this.state.products[i].quantity * Number(this.state.products[i].price))
            } else if (this.state.products[i].quantity < 1) {
                totPrice += Number(this.state.products[i].price)
            }
        }
        return (
            <main className="budget-calc-main">
                <h1 className="budget-calc-h1">Budget Calculator</h1>
                {this.props.mode === "products" ? 
                <Inputs saveProduct={this.saveProduct}
                    handleInputValue={this.handleInputValue}
                    product={this.state.product}
                    editClicked={this.state.editClicked}
                    editProduct={this.editProduct}
                    types={this.state.types}
                /> : null }
                <div className="budget-calc-content-div">
                {this.props.mode === "products" ? 
                    <Table
                        properties={this.state.properties}
                        products={this.state.products}
                        productToEdit={this.productToEdit}
                        handleCheckboxChange={this.handleCheckboxChange}
                        editClicked={this.state.editClicked}
                        totalPrice={totPrice}
                    />  : <Groups /> }
                    <TableTools
                        deleteProducts={this.deleteProducts}
                        selectFilterHandler={this.selectFilterHandler}
                    />
                </div>
            </main>
        )
    }
}

function mapStateToProps(state) {
    return {
        mode: state.mode
    }
}

export default connect(mapStateToProps)(BudgetCalc)