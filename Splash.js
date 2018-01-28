import React, {Component } from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class Splash extends Component {
	render(){
		return (
            <View style={styles.wrapper}>
                <Text>'Basic splash page written in react native'</Text>
                <View style={styles.TopLeftIcon}>
                    <Image source={require('./ffap-tiny1.png')} />
                </View>
            </View>
		);
	}
}
const styles = StyleSheet.create({
	wrapper: {
		backgroundColor:'#3a7ce8',
		flex: 1,
		justifyContent: 'center',
		alignItems:'center'
	},
	TopLeftIcon: {
		alignItems:'flex-end',
		flex: 2
	}
});
