import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state  = { result:'', display:'' };
  }

  handleOP(operation) {
    if (operation === 'C') this.setState({result:'', display:''});
    else if (operation === '=') this.setState({result:'', display: this.state.result});
    else  {
      const display = this.state.display + operation;
      let result = this.state.result;
      
      try {
        let fixOperation = display.split('x').join('*')
        fixOperation = display.split('%').join('/')
        fixOperation = display.split(',').join('.')

        result = new String(eval(fixOperation)).toString()
      } catch(error) {}
      this.setState({ display, result});
    }
  }

  render() {

    const col1Buttons = [
      ['7', '8', '9'],
      ['4', '5', '6'],
      ['1', '2', '3'],
      [',', '0', '='],
    ];

    const col2Buttons = ['C', '+', '-', '%', 'x'];

    return (
      <View style={styles.container}>
        <Text style={styles.display}>{this.state.display}</Text>
        <Text style={styles.result}>{this.state.result}</Text>
        <View style={styles.buttons_container}>
          <View style={styles.buttons_col1}>
            {col1Buttons.map((line, index) =>
              <View key={index} style={styles.line}>
                {line.map((item) =>
                  <TouchableOpacity key={item} style={styles.btnNumber} onPress={() => this.handleOP(item)}>
                    <Text style={styles.number}>{op}</Text>
                  </TouchableOpacity>)
                }
              </View>)
            }
          </View>
          <View style={styles.buttons_col2}>
            {col2Buttons.map((item, index) =>
              <TouchableOpacity key={index} style={styles.btnNumber} onPress={() => this.handleOP(item)}>
                <Text style={styles.number}>{item}</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'stretch',
    justifyContent: 'center',
  },

  display: {
    flex: 1,
    backgroundColor: '#efefef',
    fontSize: 80,
    textAlign: 'right',
    paddingTop: 30,
    paddingRight: 10
  },

  result: {
    flex: 0.4,
    backgroundColor: '#efefef',
    fontSize: 40,
    textAlign: 'right',
    paddingTop: 10,
    paddingRight: 10
  },

  buttons_container: {
    flex: 5,
    flexDirection: 'row'
  },

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

  buttons_col2: {
    flex: 1,
    backgroundColor: '#0b0b0b',
  },
});
