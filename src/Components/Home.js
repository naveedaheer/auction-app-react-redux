import React, { Component } from 'react';
import { connect } from 'react-redux'

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
                        {this.props.children}
                    </center>
                </div>
            </div>
        );
    }
}

export default Home;

