import React from "react"
import AppBar from 'material-ui/AppBar';
import { Link, browserHistory } from "react-router";
import Paper from 'material-ui/Paper';

const styles = {
  height: 100,
  width: 250,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
}

export default class HeaderAuctioneer extends React.Component {
    render() {
        return (
            <div><center>
                <h1>Hello Auctioneer</h1>
                                       
       <Link to ="/home/auctioneer-home/add-product" > <Paper style={styles} zDepth={5} circle={false} ><br /><h3> Add Product </h3> </Paper> </Link>
       <Link to ="/home/bidder-home/view-products" > <Paper style={styles} zDepth={5} circle={false} ><br /><h3> View Products </h3> </Paper></Link>
                <Link to ="/home/auctioneer-home/view-sales" > <Paper style={styles} zDepth={5} circle={false} ><br /><h3> View Sales </h3> </Paper> </Link>
                {this.props.children}
           </center> 
            </div>
        )
    }
}

