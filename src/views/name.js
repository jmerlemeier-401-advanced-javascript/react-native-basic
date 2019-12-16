import React from 'react';
import { StyleSheet, Text, View, Input } from 'react-native';

export default class Name extends React.Component {
  constructor(props){
    super(props);
    this.state = {text: 'Placeholder Text'}
  }

  render () {
    const inputAccessoryViewID = 'uniqueID';
      return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>Please enter the name of your cat:</Text>
        {/* <Input type='text'/> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 30,
   color: 'teal',
  },
});

