import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import {AddNewSale, ViewProducts, ViewStores} from '../../Store/Actions/MiddleWare'

const style = {
    padding: '10px',
    textAlign: 'center'
};

class AddSaleOrder extends Component {
    constructor(props) {
        super();
        this.state = {
            productId: '',
            productName: '',
            description: '',
            qty: 0,
            unitPrice: 0,
            storeName: '',
            storeId: '',
            saleDate: ''
        }
     //   props.ViewProducts();
     //   props.ViewStores();
        this.submit = this.submit.bind(this);
        this.inputHandler = this.inputHandler.bind(this);
    }
    
    inputHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submit(e) {
        e.preventDefault();
        let productDetails = {
            productName: '',
            storeName: '', 
            productId: this.state.productId,
            storeId: this.state.storeId,
            description: this.state.description,
            qty: this.state.qty,
            unitPrice: this.state.unitPrice,
            saleDate: this.state.saleDate
        }
        console.log(productDetails)
       // this.props.addSaleRequest(productDetails);     
    }



    render() {
        return (
            <div ><center>
                <h1>Add Sale Order</h1>
                <form onSubmit={this.submit} >
                    <br />
                    <br />

                    
                    <br />
                    <br />

                    <TextField
                        type="number"
                        hintText="qty"
                        name="qty"
                        value={this.state.qty}
                        floatingLabelText="qty"
                        onChange={this.inputHandler}
                    /><br />
                    <br />

                        <TextField
                        type="number"
                        hintText="unitPrice"
                        name="unitPrice"
                        value={this.state.unitPrice}
                        floatingLabelText="unitPrice"
                        onChange={this.inputHandler}
                    /><br />
                    <br />
                    <DatePicker
                        hintText="Purchase Date"
                        mode="landscape"
                        name="purchaseDate"
                        value={this.state.saleDate}
                        onChange={this.handleDateChange}
                        maxDate={new Date()}
                    />
                    <br /><br />
                      <TextField
                        type="text"
                        hintText="description"
                        name="description"
                        value={this.state.description}
                        floatingLabelText="description"
                        onChange={this.inputHandler}
                    /><br /><br />

                    <RaisedButton type="submit" label="Add Product" primary={false} secondary={true} /> <br /><br />
                </form>
            </center>
            </div>
        );
    }
}

// const mapStateToProps = (state) => {
//     console.log("state", state)
//     return {
//        allProducts: state.productReducer.products,
//        allStores: state.storeReducer.stores
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addSaleRequest: (data) => {
//             dispatch(AddNewSale(data));
//         },
//         ...bindActionCreators({ ViewProducts, ViewStores }, dispatch)
//     }
// }

//export default connect(mapStateToProps, mapDispatchToProps)(AddSaleOrder);
export default AddSaleOrder;