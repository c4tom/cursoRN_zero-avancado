import React, { Component } from "react";
import { View, Text } from "react-native";

class App extends React.Component {
    // https://reactnative.dev/docs/flexbox?language=typescript#align-content
    render() {
        return(
            <View style={{flex:1}}>
                <View style={{flex:3, backgroundColor:'black'}}>
                    <Text style={{color: 'white'}}>Ola mundo, estou aqui</Text>
                    <Text style={{color: 'white'}}>Ola mundo, estou aqui</Text>
                    <Text style={{color: 'white'}}>Ola mundo, estou aqui</Text>
                    <Text style={{color: 'white'}}>Ola mundo, estou aqui</Text>
                    <Text style={{color: 'white'}}>Ola mundo, estou aqui</Text>
                    <Text style={{color: 'white'}}>Ola mundo, estou aqui</Text>
                    <Text style={{color: 'white'}}>Ola mundo, estou aqui</Text>
                    <Text style={{color: 'white'}}>Ola mundo, estou aqui</Text>
                    <Text style={{color: 'white'}}>Ola mundo, estou aqui</Text>
                    <Text style={{color: 'white'}}>Ola mundo, estou aqui</Text>
                    <Text style={{color: 'white'}}>Ola mundo, estou aqui</Text>
                    <Text style={{color: 'white'}}>Ola mundo, estou aqui</Text>
                    <Text style={{color: 'white'}}>Ola mundo, estou aqui</Text>
                    <Text style={{color: 'white'}}>Ola mundo, estou aqui</Text>
                    <Text style={{color: 'white'}}>Ola mundo, estou aqui</Text>
                    <Text style={{color: 'white'}}>Ola mundo, estou aqui</Text>
                    <Text style={{color: 'white'}}>Ola mundo, estou aqui</Text>
                    <Text style={{color: 'white'}}>Ola mundo, estou aqui</Text>
                    <Text style={{color: 'white'}}>Ola mundo, estou aqui</Text>
                    <Text style={{color: 'white'}}>Ola mundo, estou aqui</Text>

                </View>
                <View style={{flex:1, backgroundColor:'blue'}}/>
                <View style={{flex:1, backgroundColor:'yellow'}}/>
            </View>
        )
    }
}

export default App;
