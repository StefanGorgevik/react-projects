import React from 'react'
import './NewGroup.css'
import Inputs from '../Inputs-NG/Inputs'
import Table from '../Table-NG/Table'
import Button from '../Button-NG/Button'
import store from '../../../../redux/store'
import { addNewGroupClicked, saveGroup } from '../../../../redux/actions/actions'

class NewGroup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstProductAdded: false,
            date: '',
            type: '',
            newGroupProducts: [
                {
                    id: 30,
                    name: "Burger",
                    type: "Groceries",
                    price: 150,
                    quantity: 2
                },
                {
                    id: 228,
                    name: "Burger",
                    type: "Groceries",
                    price: 150,
                    quantity: 2
                }
            ],
            product: {
                name: '',
                type: '',
                price: 0,
                quantity: 0
            }
        }
    }

    handleProductInputValue = (event) => {
        this.setState({
            ...this.state,
            product: { ...this.state.product, [event.target.id]: event.target.value },
            [event.target.id]: event.target.value
        })

        console.log(this.state)
    }

    handleGroupDateInputValue = (event) => {
        this.setState({ [event.target.id]: event.target.value })
    }

    addProductToGroup = () => {
        if (!this.state.firstProductAdded) {
            this.setState({ firstProductAdded: true })
        }
        const prods = this.state.newGroupProducts
        var product = this.state.product
        product.id = Math.floor(Math.random() * 1000)
        prods.push(product)
        this.setState({
            newGroupProducts: prods,
            product: { name: '', type: '', price: 0, quantity: 0 }
        })
    }

    saveGroupOfProducts = () => {
        const productGroup = {
            id: Math.floor(Math.random() * 1000),
            groupDate: this.state.date,
            type: this.state.type,
            products: this.state.newGroupProducts
        }
        this.setState({ newGroupProducts: [], type: '', date: '' })
        store.dispatch(addNewGroupClicked(false))
        store.dispatch(saveGroup(productGroup))
    }

    closeNewGroup = () => {
        store.dispatch(addNewGroupClicked(false))
    }

    render() {
        var totalPrice = 0
        for (var i = 0; i < this.state.newGroupProducts.length; i++) {
            if (this.state.newGroupProducts[i].quantity >= 1) {
                totalPrice += (this.state.newGroupProducts[i].quantity * Number(this.state.newGroupProducts[i].price))
            } else if (this.state.newGroupProducts[i].quantity < 1) {
                totalPrice += Number(this.state.newGroupProducts[i].price)
            }
        }

        return (
            <main className="ng-main">
                <div className="ng-div">
                    <h3>You are creating a new group of products</h3>
                    <Inputs addProductToGroup={this.addProductToGroup}
                        handleGroupDateInputValue={this.handleGroupDateInputValue}
                        handleProductInputValue={this.handleProductInputValue}
                        product={this.state.product} />
                    <div className="ng-prods-dv">
                        {this.state.firstProductAdded ?
                            <Table products={this.state.newGroupProducts}
                                totalPrice={totalPrice} /> : null}
                        <Button click={this.closeNewGroup}
                            content='Close'
                            name='ng-btn ng-close-btn' />
                        {this.state.firstProductAdded ?
                            <Button click={this.saveGroupOfProducts}
                                content='Save group'
                                name='ng-btn' /> : null}


                    </div>
                </div>
            </main>
        )
    }
}

export default NewGroup; 