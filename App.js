import React, { Component } from "react";
import { View, Text } from "react-native";

class App extends React.Component {
    render() {
        let nome = 'Fulano de Tal';

        return(
            <View>
                <Text>Ola Mundo</Text>
                <Text>Componentização</Text>
                <Text style={{ color: 'red', fontSize: 50, margin: 20}}>Estilo com Cor</Text>

                <Text>{nome}</Text>
            </View>
        )
    }
}

export default App;
