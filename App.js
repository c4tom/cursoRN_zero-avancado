import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nomeMsg: '',
    };
    this.onPressButton = this.onPressButton.bind(this);
  }

  onPressButton(textoInput){
    if(textoInput === '') {
      this.setState({nomeMsg: ''});
    } else {
      this.setState({nomeMsg: 'Bem vindo: ' + textoInput});
    }
    
  }

  render() {
    return (
      <View>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          underlineColorAndroid="transparent"
          onChangeText={textoInput => this.onPressButton(textoInput)}
        />
        <Text> {this.state.nomeMsg} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DFDFDF',
  },
  input: {
    backgroundColor: 'yellow',
    borderColor: 'black',
    borderWidth: 2,
  },
});

export default App;
