/**
 * Created by meistro on 5/7/2017.
 */
import React, { Component } from 'react';
import {StyleSheet, View, TextInput, Text } from 'react-native';

export default class LoginForm extends Component {
	render() {
		return (
			<View style={styles.container}>
				<TextInput
					placeholder="username or email"
					placeholderTextColor="rgba(255,255,255,0.7)"
					returnKeyType="next"
					onSubmitEditing={() => this.passwordInput.focus()}
					keyboardType="email-address"
					style={styles.input}/>
				<TextInput
					placeholder="password"
					placeholderTextColor="rgba(255,255,255,0.7)"
					returnKeyType="go"
					secureTextEntry
					style={styles.input}
					ref={(input) => this.passwordInput= input}/>
				

			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		padding:20
	},
	input:{
		height: 40,
		marginBottom:10,
		color:'#FFF',
		paddingHorizontal: 10,
		backgroundColor:'rgba(255,255,255,0.7)'
	},
	buttonContainer: {
		backgroundColor: '#2980b9',
		paddingVertical: 15,
	},
	buttonText: {
		textAlign:'center',
		color: '#FFFFFF',
		fontWeight:'700'
	}
});