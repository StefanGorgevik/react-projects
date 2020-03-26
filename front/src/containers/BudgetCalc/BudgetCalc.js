import React from 'react'
import './BudgetCalc.css'
import Inputs from '../../components/BudgetCalc/Inputs/Inputs'
import TableTools from '../../components/BudgetCalc/TableTools/TableTools'
import Table from '../../components/BudgetCalc/BudgetTable/Table/Table'


class BudgetCalc extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            properties: ["name", "type", "price", "date"],
            product: {
                id: '',
                name: '',
                type: '',
                price: '',
                date: ''
            },
            products: [
                {
                    id: 0,
                    name: "Cheese",
                    type: "Food",
                    price: 150,
                    date: "2020-01-01"
                },
                {
                    id: 1,
                    name: "Burger",
                    type: "Fast-food",
                    price: 150,
                    date: "2019-01-01"
                },
                {
                    id: 2,
                    name: "Coca cola",
                    type: "Drink",
                    price: 60,
                    date: "2020-01-01"
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
            console.log(product)
            prods.push(product)
            this.setState({
                products: prods,
                product: { id: '', name: '', type: '', price: '', date: '' }
            })
        }
    }

    handleCheckboxChange = (e, prod) => {
        var dltProds = this.state.productsToDelete
        dltProds.push(prod)
        this.setState({ isChecked: e.target.checked, productsToDelete: dltProds })
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
        console.log('prod edited')
        event.preventDefault()
        var prods = this.state.products
        var editedProd = this.state.product
        prods.push(editedProd)
        this.setState(prevState => ({
            editClicked: !prevState.editClicked,
            products: prods,
            product: { id: '', name: '', type: '', price: '', date: '' }
        }))

    }

    deleteProducts = () => {
        var array1 = this.state.products;
        var array2 = this.state.productsToDelete;
        var index;
        for (var i = 0; i < array2.length; i++) {
            index = array1.indexOf(array2[i]);
            if (index > -1) {
                array1.splice(index, 1);
            }
        }
        this.setState({
            products: array1,
            productsToDelete: []
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
            totPrice += this.state.products[i].price
        }
        return (
            <main className="budget-calc-main">
                <h1 className="budget-calc-h1">Budget Calculator</h1>
                <Inputs saveProduct={this.saveProduct}
                    properties={this.state.properties}
                    handleInputValue={this.handleInputValue}
                    product={this.state.product}
                    editClicked={this.state.editClicked}
                    editProduct={this.editProduct}
                />
                <div className="budget-calc-content-div">
                    <Table
                        properties={this.state.properties}
                        products={this.state.products}
                        productToEdit={this.productToEdit}
                        handleCheckboxChange={this.handleCheckboxChange}
                    />
                    <TableTools
                        deleteProducts={this.deleteProducts}
                        totalPrice={totPrice}
                        selectFilterHandler={this.selectFilterHandler}
                    />
                </div>
            </main>
        )
    }
}

export default BudgetCalc;