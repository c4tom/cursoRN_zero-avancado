import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nomeMsg: '',
      nomeInput: '',
    };
    this.onPressButton = this.onPressButton.bind(this);
  }

  onPressButton(){
    if(this.state.nomeInput === ''){
      alert('Digite seu nome!');
      return;
    }
    this.setState({nomeMsg: 'Bem vindo: ' + this.state.nomeInput});
  }

  render() {
    return (
      <View>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          underlineColorAndroid="transparent"
          onChangeText={textoInput => this.setState({nomeInput: textoInput})}
        />
        <Button title="Enviar" onPress={this.onPressButton} />
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
