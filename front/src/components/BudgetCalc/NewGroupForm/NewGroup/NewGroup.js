import React from 'react'
import './NewGroup.css'
import Inputs from '../Inputs-NG/Inputs'
import Table from '../Table-NG/Table'
import Button from '../../Button/Button'
import store from '../../../../redux/store'
import { addNewGroupClicked, saveGroup, editGroupClicked, updateGroup } from '../../../../redux/actions/actions'
import { connect } from 'react-redux'

class NewGroup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: '',
            type: '',
            newGroupProducts: [],
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
        var prods = [];
        if(!this.props.editGroupClicked) {
            prods = this.state.newGroupProducts
        } else {
            prods = this.props.productToEdit[0].products
        }
        var product = this.state.product
        product.id = Math.floor(Math.random() * 1000)
        prods.push(product)
        this.setState({
            newGroupProducts: prods,
            product: { name: '', type: '', price: 0, quantity: 0 }
        })
    }

    removeProductFromGroup = (id) => {
        var products = this.state.newGroupProducts
        var dlt = products.filter((prod, i) => prod.id === id)
        products.splice(products.indexOf(dlt[0]), 1)
        this.setState({ newGroupProducts: products })
    }

    saveGroupOfProducts = () => {
        if(!this.props.editGroupClicked) {
            const productGroup = {
                id: Math.floor(Math.random() * 1000),
                groupDate: this.state.date,
                type: this.state.type,
                products: this.state.newGroupProducts
            }
            this.setState({ newGroupProducts: [], type: '', date: '' })
            store.dispatch(addNewGroupClicked(false))
            store.dispatch(saveGroup(productGroup))
        } else if(this.props.editGroupClicked) {
            const productGroup = {
                id: this.props.productToEdit[0].id,
                groupDate: this.state.date,
                type: this.state.type,
                products: this.state.newGroupProducts
            }
            this.setState({ newGroupProducts: [], type: '', date: '' })
            store.dispatch(updateGroup(productGroup))
        }
    }

    closeNewGroup = () => {
        store.dispatch(addNewGroupClicked(false))
        store.dispatch(editGroupClicked(false))  
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
                        <Table products={this.state.newGroupProducts}
                            totalPrice={totalPrice}
                            removeProductFromGroup={this.removeProductFromGroup}
                        />
                        <Button click={this.closeNewGroup}
                            content='Close'
                            name='ng-btn ng-close-btn' />
                        <Button click={this.saveGroupOfProducts}
                            content='Save group'
                            name='ng-btn' />

                    </div>
                </div>
            </main>
        )
    }
}

function mapStateToProps(state) {
    return {
        productToEdit: state.productToEdit,
        editGroupClicked: state.editGroupClicked
    }
}

export default connect(mapStateToProps)(NewGroup); 