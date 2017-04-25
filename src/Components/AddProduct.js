import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import firebase from 'firebase';
import FileUploader from 'react-firebase-file-uploader';
import {AddNewProduct} from '../Store/Actions/Middleware'

const style = {
    padding: '10px',
    textAlign: 'center'
};

class AddProduct extends Component {
    constructor(props) {
        super();
        this.state = {
            productName: '',
            description: '',
            qty: 0,
            unitPrice: 0,
            productCategory: null,
            auctionTime: '',

            username: '',
            avatar: '',
            isUploading: false,
            progress: 0,
            avatarURL: ''
        }

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
            productName: this.state.productName,
            description: this.state.description,
            qty: this.state.qty,
            unitPrice: this.state.unitPrice,
            productCategory: this.state.productCategory,
            auctionTime: this.state.auctionTime,
            imgUrl: this.props.avatarURL
        }

        console.log(productDetails)
       this.props.addProduct(productDetails);     
    }

    handleChangeUsername = (event) => this.setState({username: event.target.value});
  handleUploadStart = () => this.setState({isUploading: true, progress: 0});
  handleProgress = (progress) => this.setState({progress});
  handleUploadError = (error) => {
      this.setState({isUploading: false});
      console.error(error);
  }
  handleUploadSuccess = (filename) => {
      this.setState({avatar: filename, progress: 100, isUploading: false});
      firebase.storage().ref('images').child(filename).getDownloadURL().then(url => this.setState({avatarURL: url}));
  };

    render() {
        return (
            <div ><center>
                <h1>Add Product for Auction</h1>

                <form onSubmit={this.submit} >
                           
          <label>Produc Image:</label><br />
          {this.state.isUploading &&
            <p>Progress: {this.state.progress}</p>
          }
          {this.state.avatarURL &&
            <img src={this.state.avatarURL} />
          }<br/>
          <FileUploader
            accept="image/*"
            name="avatar"
            randomizeFilename
            storageRef={firebase.storage().ref('images')}
            onUploadStart={this.handleUploadStart}
            onUploadError={this.handleUploadError}
            onUploadSuccess={this.handleUploadSuccess}
            onProgress={this.handleProgress}
          />
                    <br />
                    <br />
               
                   <select style={style}
                        required
                        name="productCategory"
                        ref="productCategory"
                        onChange={this.inputHandler}
                        value={this.state.productCategory}
                    >
                        <option value="Select Category" > Select Category  </option>
                                    <option value={"mobile"}>Mobile</option>
                                     <option value={"laptop"}>Laptop</option>
                                      <option value={"camera"}>Camera</option>
                            
                    </select>
                    <br />
                    <TextField
                        type="text"
                        hintText="Product Title"
                        name="productName"
                        value={this.state.productName}
                        floatingLabelText="Product Title"
                        onChange={this.inputHandler}
                    />
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

       <select style={style}
                        required
                        name="auctionTime"
                        ref="auctionTime"
                        onChange={this.inputHandler}
                        value={this.state.auctionTime}
                    >
                        <option value="Select Time" > Select Time  </option>
                                    <option value={"3days"}>3 days</option>
                                     <option value={"5days"}>5 days</option>
                                      <option value={"7days"}>7 days</option>
                    </select>
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

const mapStateToProps = (state) => {
    console.log("state", state)
    return {
       //allProducts: state.productReducer.products,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addProduct: (data) => {
            dispatch(AddNewProduct(data));
        }      
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
