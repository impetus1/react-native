/**
 * Created by meistro on 5/7/2017.
 */
import React, { Component } from 'react';
import {StyleSheet, View, Image, Text, ScrollView} from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component {
	render() {
		return(
		<ScrollView behavior= "padding" style={styles.container}>
			<View style={styles.logoContainer}>
				<Image
					style={styles.logo}
					source={require('../../Images/ffap-tiny1.png')}/>
				
				<Text style={styles.title}>Florida Free Appliance Pickup</Text>
			</View>
			<View >
				<LoginForm />
			</View>
		</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#3498db'
	},
	logoContainer: {
		paddingVertical: 10,
		alignItems: 'center',
		flexGrow: 1,
		justifyContent:'center'
	},
	logo:{
		width:100,
		height:100
	},
	title:{
		color:'#FFF',
		marginTop:10,
		width:160,
		textAlign:'center',
		opacity: 0.9
	}
	}
)