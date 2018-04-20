import React, {Component} from 'react'
import {
	Text,
	View,
	StyleSheet,
	TouchableOpacity
} from 'react-native'

export default class Navbar extends Component {
	render(){
		return(
			<View style={styles.navegacion} >
				<TouchableOpacity style={styles.botones} onPress={null}>
					<Text>Nuevo</Text>
				</TouchableOpacity>
				<Text style={styles.titulo}>RECORDARME</Text>
			</View>

			)
	}
}

const styles = StyleSheet.create({
	navegacion: {
		paddingTop: 10,
		backgroundColor: 'skyblue',
		flexDirection: 'row',
		paddingBottom: 10

	},
	botones: {
		position: 'absolute',
		top: 10,
		left: 8,
		zIndex: 1
	},
	titulo: {
		flex: 1,
		textAlign: 'center',
		fontWeight: 'bold'
	}


})