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

export default class HeaderOuter extends React.Component {
    render() {
        return (
            <div>
                <AppBar
                    style={styles.appBar}
                    title="App Title"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    showMenuIconButton={false}
                />

                {this.props.children}
            </div>
        )
    }
}

