/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text} from 'react-native';

class App extends React.Component {
  // https://reactnative.dev/docs/flexbox?language=typescript#align-content
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}>
        <View style={{width: 50, height: 50, backgroundColor: 'black'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'blue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'yellow'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'pink'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'violet'}} />
      </View>
    );
  }
}

export default App;
