import React from "react";
import { StyleSheet, View, Button, Text } from "react-native";
import Pushbots from "pushbots-react-native";


Pushbots.registerForRemoteNotifications();

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            dynamicText: ""
        }
    }

    execClick() {
        this.setState({
            dynamicText: "Hello World!"
        });
    }

    render() {
        return (
            <View style={ styles.container }>
                <View style={ styles.btn }>
                    <Button
                        style={ styles.bigfont }
                        onPress={ this.execClick.bind( this ) }
                        title="Click here" />
                </View>
                <Text>{ this.state.dynamicText }</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff"
    },
    btn: {
        width: "100%",
        height: 60,
        margin: 20,
        fontSize: 44
    },
    bigfont: {
        fontSize: 44
    }
});