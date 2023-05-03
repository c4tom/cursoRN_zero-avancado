import React, { Component } from "react";
import { View, Text } from "react-native";

class App extends React.Component {
    render() {
        return(
            <View>
                <Text>Ola Mundo</Text>
                <Text>Componentização</Text>
                <Text style={{ color: 'red', fontSize: 50, margin: 20}}>Estilo com Cor</Text>
            </View>
        )
    }
}

export default App;
