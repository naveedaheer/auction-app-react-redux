import React from "react"
import AppBar from 'material-ui/AppBar';

var styles = {
    appBar: {
        backgroundColor: '#E53935',
        minHeight: 50,
        color: "black"
    },
    tabs: {
        width: '100%',
    },
}

export default class HeaderBidder extends React.Component {
    render() {
        return (
            <div>
                <h2>Hello Bidder</h2>
                <br /><br />
                {this.props.children}
            </div>
        )
    }
}

