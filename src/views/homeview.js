import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';


export default class Homeview extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../../assets/black_cat.png')}
          />
        <Text style={styles.textStyle}>Monster Cat</Text>
        <Button 
          title='Enter'
          onPress={() => navigate('Name')}
         />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#272E41',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 30,
   color: '#272E41',
  },
  image: {
    width: 200,
    height:200,
    resizeMode: 'stretch',
    justifyContent: 'center',
  }
});

