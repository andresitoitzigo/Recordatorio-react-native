import React, {Component} from 'react'
import {
	Text,
	View,
	StyleSheet,
	ListView,
	TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class Items extends Component {
	render(){
		return(
			<View style={styles.lis}>
				<ListView
					enableEmptySections
					dataSource={this.props.dataSource}
					renderRow={({key, ...value}) => {
						const deleteRow = (
							<TouchableOpacity>
								<Icon
									name="delete"
									size={20}
									color="skyblue"
								

								/>
							</TouchableOpacity>
						)

						return (
							<View style={styles.row}>
								<Text>{value.title}</Text>
								<Text>{value.date}</Text>
								<TouchableOpacity onPress={()=> this.props.onRemoveItems(key)}>
									{deleteRow}
								</TouchableOpacity>

							</View>

							)
					}}
					/>
            </View>

			)
	}
}

const styles = StyleSheet.create({
	lis: {
		marginTop: 5,
		flex: 1
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical:10,
		backgroundColor: '#fff',
		marginBottom: 5,
		marginHorizontal: 5,
		paddingHorizontal: 5,
		borderRadius: 4
	}

})