import React, { Component } from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";

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
            <View style={styles.container}>
                <Button color={'blue'} title="Trocar Estado" onPress={() => this.trocarEstado('Beltrano da Silva')} />
                <Button color={'red'} title="Reset" onPress={() => this.trocarEstado('')} />
                <Text style={styles.nome}>{this.state.nome}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40
    },
    nome: {
        fontSize: 35
    }
});

export default App;
