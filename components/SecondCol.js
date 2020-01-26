import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';


export default class FirstColButtons extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const col2Buttons = ['C', '+', '-', '/', '*'];

        return (
            <View style={styles.buttons_col2}>
            {col2Buttons.map((item, index) =>
              <TouchableOpacity key={index} style={styles.btnNumber} onPress={() => this.props.handleChange(item)}>
                <Text style={styles.number}>{item}</Text>
              </TouchableOpacity>
            )}
          </View>
        )
    }
}

const styles = StyleSheet.create({
  
    buttons_col2: {
        flex: 1,
        backgroundColor: '#0b0b0b',
    },
  
    btnNumber: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
  
    number: {
      fontSize: 50,
      color: 'white'
    },
  });