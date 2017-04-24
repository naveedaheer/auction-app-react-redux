import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from "react-router";
import Paper from 'material-ui/Paper';

const styles = {
  height: 250,
  width: 500,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
}

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div >
               <center> 
                   <h1>Aheer Auction</h1>
                   <h3>50% OFF Today, BID on your desired product before it expired</h3>
                </center>
                <br /><br /><br /><br />
                <div>
                    <center>
       <Link to ="/home/auctioneer-home" > <Paper style={styles} zDepth={5} circle={false} ><br /><br /><br /><br /><h1> Auctioneer </h1> </Paper> </Link>
       <Link to ="/home/bidder-home" > <Paper style={styles} zDepth={5} circle={false} ><br /><br /><br /><br /><h1> Bidder </h1> </Paper></Link>

                        {this.props.children}
                    </center>
                </div>
            </div>
        );
    }
}

export default Home;

