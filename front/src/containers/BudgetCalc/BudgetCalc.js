import React from 'react'
import './BudgetCalc.css'
import Inputs from '../../components/BudgetCalc/Inputs/Inputs'
import TableTools from '../../components/BudgetCalc/TableTools/TableTools'
import Table from '../../components/BudgetCalc/BudgetTable/Table/Table'
import Groups from '../../components/BudgetCalc/Groups/Groups'
import { connect } from 'react-redux'
import store from '../../redux/store'
import { sortGroups, sortProducts, saveProduct, editProduct, handleIsChecked } from '../../redux/actions/actions'
import Alert from '../../components/BudgetCalc/Alert/Alert'

class BudgetCalc extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            product: {
                id: '',
                name: '',
                type: '',
                price: 0,
                quantity: 1,
                date: ''
            },
            products: props.products,
            isChecked: false,
            productsToDelete: [],
            editClicked: false,
            selectedValue: 'name',
            error: false
        }
    }

    handleInputValue = (event) => {
        this.setState({ ...this.state, product: { ...this.state.product, [event.target.id]: event.target.value } })
    }

    saveProduct = (e) => {
        var product = this.state.product
        e.preventDefault()
        if (product.name !== '' && product.type !== '' && product.price !== 0 && product.quantity >= 1 && product.date !== '') {
            product.id = Math.floor(Math.random() * 1000)
            product.isChecked = false
            store.dispatch(saveProduct(product))
            this.setState({
                product: { id: '', name: '', type: '', price: 0, quantity: 1, date: '' },
                editClicked: false
            })
        } else {
            this.setState({ error: true })
        }
    }

    closeErrorAlert = () => {
        this.setState({ error: false })
    }

    handleCheckboxChange = (e) => {
        let val = e.target.value
        let checked = e.target.checked
        store.dispatch(handleIsChecked(val, checked))
    }

    productToEdit = (prod) => {
        store.dispatch(editProduct(prod))
        this.setState({
            editClicked: true,
            product: prod
        })
    }

    selectFilterHandler = (e) => {
        var val = e.target.value
        if (this.props.mode === 'products') {
            store.dispatch(sortProducts(val))
        } else {
            store.dispatch(sortGroups(val))
        }
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
                {this.state.error ? <Alert click={this.closeErrorAlert} 
                    text="Please fill up every field!"
                /> : null}
                <h1 className="budget-calc-h1">Budget Calculator</h1>
                {this.props.mode === "products" ?
                    <Inputs saveProduct={this.saveProduct}
                        handleInputValue={this.handleInputValue}
                        product={this.state.product}
                        editClicked={this.state.editClicked}
                        editProduct={this.editProduct}
                        types={this.state.types}
                    /> : null}
                <div className="budget-calc-content-div">
                    {this.props.mode === "products" ?
                        <Table
                            properties={this.state.properties}
                            products={this.props.products}
                            productToEdit={this.productToEdit}
                            handleCheckboxChange={this.handleCheckboxChange}
                            editClicked={this.state.editClicked}
                            totalPrice={totPrice}
                        /> : <Groups />}
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
        mode: state.mode,
        products: state.products,
        groups: state.productGroups
    }
}

export default connect(mapStateToProps)(BudgetCalc)