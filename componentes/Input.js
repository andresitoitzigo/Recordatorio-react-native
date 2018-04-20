import React, {Component} from 'react'
import {
	Text,
	View,
	StyleSheet,
	TextInput,
	TouchableHighlight,
	TouchableOpacity
} from 'react-native'
import DatePicker from 'react-native-datepicker'

export default class Input extends Component {
	render(){
		return(
			<View style={styles.contenfecha} >
				<TextInput
					value={this.props.title}
					placeholder="Title"
					style={styles.input} 
					onChangeText={(title) => this.props.onChangeTitle(title)}


				/>
				<DatePicker
					date={this.props.date}
					style={{width: 300}}
					androidMode="spinner"
					mode="datetime"
					placeholder="Seleciona La Fecha"
					format="YYYY/MM/DD HH:mm"
					minDate="2018-01-01"
       			    maxDate="2020-06-01"
					onDateChange={(date) => this.props.onChangeDate(date)}

				 />

				<TouchableOpacity style={styles.boton} onPress={this.props.onHandleItems}
				>
					<Text style={styles.botontexto}>Guardar</Text>
				</TouchableOpacity>
			</View>

			)
	}
}

const styles = StyleSheet.create({
	contenfecha: {
		marginTop: 30,
	},
	input: {
		marginBottom: 5,
		borderColor: '#CCC',
		width: 263
	},
	boton: {
		backgroundColor: 'skyblue',
		paddingTop: 15,
		paddingBottom: 15,
		marginTop: 5
	},
	botontexto: {
		textAlign: 'center'
	}
})