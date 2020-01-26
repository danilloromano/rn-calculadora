import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';


export default class FirstColButtons extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const col1Buttons = [['7', '8', '9'],['4', '5', '6'],['1', '2', '3'],[',', '0', '=']];

        return (
          <View style={styles.buttons_col1}>
            {col1Buttons.map((line, index) =>
              <View key={index} style={styles.line}>
                {line.map((item, index) =>
                  <TouchableOpacity key={index} style={styles.btnNumber} onPress={() => this.props.handleChange(item)}>
                    <Text style={styles.number}>{item}</Text>
                  </TouchableOpacity>)
                }
              </View>)
            }
          </View>
        )
    }
}

const styles = StyleSheet.create({
  
    buttons_col1: {
      flex: 3,
      backgroundColor: '#0d0d0d',
    },
  
    line: {
      flex: 1,
      flexDirection: 'row'
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