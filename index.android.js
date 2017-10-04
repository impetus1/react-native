import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Splash from './Splash';
import Login from './src/components/Login/Login';

export default class TestProject extends Component {
  render() {
/* let pic = {
        uri: 'http://i.imgur.com/0BUEcxo.jpg'
      };*/
    return (
      <Login />
      /*<View style={styles.container}>
            <Image source={pic} style={{width: 163, height: 220}}/>
              <Text style={styles.welcome}>
                Quo pues parce!!!        </Text>
              <Text style={styles.instructions}>
                To get started, don't edit index.android.js
              </Text>
              <Text style={styles.instructions}>
                Double tap R on your keyboard to reload,{'\n'}
                Shake or press menu button for dev menu
              </Text>
            </View>*/
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('TestProject', () => TestProject);