import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default class PetList extends React.Component {
    render () {
    return (
      <View>
        <Text>List of Pets</Text>
      </View>
    );
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
    fontSize: 20,
   color: 'teal',
  },
});