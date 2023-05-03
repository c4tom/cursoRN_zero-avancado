import React, { Component } from "react";
import { View, Text, Image } from "react-native";

class App extends React.Component {
    render() {
        let nome = 'Fulano de Tal';

        return(
            <View>
                <Text>Ola Mundo</Text>
                <Text>Componentização</Text>
                <Text style={{ color: 'red', fontSize: 50, margin: 20}}>Estilo com Cor</Text>

                <Text>{nome}</Text>

                <ShowImage largura={300} altura={300} />
            </View>
        )
    }
}

class ShowImage extends Component {
    render() {
        let image = 'https://img.freepik.com/fotos-gratis/foto-de-grande-angular-de-uma-unica-arvore-crescendo-sob-um-ceu-nublado-durante-um-por-do-sol-cercado-por-grama_181624-22807.jpg?w=1380&t=st=1683144273~exp=1683144873~hmac=a6cef9a00c745f6b31d77db90387d24bcde2cd1c6b4ab47b25a0c70cd41e9d90';
        return(
            <Image 
            source={{ uri: image}} 
            style={{ width: this.props.largura, height: this.props.altura }}
            />
        );
    }
}


export default App;
