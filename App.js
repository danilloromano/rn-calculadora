import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FirstCol from './components/FirstCol';
import SecondCol from './components/SecondCol'

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state  = { result:'', display:'' };
    this.handleOP = this.handleOP.bind(this);
  }

  handleOP(operation) {
    if (operation === 'C') this.setState({result:'', display:''});
    else if (operation === '=') this.setState({result:'', display: this.state.result});
    else  {
      const display = this.state.display + operation;
      let result = this.state.result;
      
      try {
        let fixOperation = display.split(',').join('.');
        result = new String(eval(fixOperation)).toString();
      } catch(error) {}
      this.setState({ display, result});
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.display}>{this.state.display}</Text>
        <Text style={styles.result}>{this.state.result}</Text>
        <View style={styles.buttons_container}>
          <FirstCol handleChange={this.handleOP}/>
          <SecondCol handleChange={this.handleOP}/>
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
  }
});
