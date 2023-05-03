import React, { Component } from "react";
import { View, Text, Image, Button } from "react-native";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nome: 'Fulano Beltrano'
        };

        this.trocarEstado = this.trocarEstado.bind(this);
    }

    trocarEstado(nome){
        this.setState({
            nome: nome
        })
    }

    render() {
        return(
            <View>
                <Button title="Trocar Estado" onPress={() => this.trocarEstado('Beltrano da Silva')} />
                <Text>{this.state.nome}</Text>
            </View>
        )
    }
}

export default App;
