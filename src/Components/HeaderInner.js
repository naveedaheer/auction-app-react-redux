import React from "react"
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import { Link, browserHistory } from "react-router"
import * as firebase from "firebase"

var styles = {
  appBar: {
    // backgroundColor: '#009688',
    backgroundColor: '#E53935',
    minHeight: 50,
    //height:300
  },

  buttonInAppBar: {
    margin: 12,
    backgroundColor: "transparent"
  },

  tabs: {
    width: '100%',
  },
}

export default class HeaderInner extends React.Component {

  logoutBtn() {
    firebase.auth().signOut().then(function () {
      console.log("Sign-out successful.")
      browserHistory.replace("/login");
    }).catch(function (error) {
      console.log("Error", error)
    });

  }

  render() {
    return (
      <div>
        <AppBar
          style={styles.appBar}
          showMenuIconButton={false}
          title="App Title"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        >
          <Link to="/home" >   <RaisedButton style={styles.buttonInAppBar} label="HOME" primary={false} /></Link>
          <RaisedButton style={styles.buttonInAppBar} onClick={this.logoutBtn.bind(this)} label="Logout" primary={false} />
        </AppBar >
        {this.props.children}
      </div>
    )
  }
}

