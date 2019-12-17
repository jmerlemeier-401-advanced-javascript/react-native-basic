import React, { useState } from 'react';
import { StyleSheet, Input, Button, KeyboardAvoidingView, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


export default (props) => {
  const [value, onChangeText] = React.useState('');
  const {navigate} = props.navigation;
  console.log(value);
    return (
      <>
        <KeyboardAvoidingView 
          style={styles.container} 
          behavior="padding" enabled>
            <TextInput 
            style={styles.textStyle}
            placeholder="What is the name of your cat?"
            onChangeText={text => onChangeText(text)}
            value={value}
            />
        </KeyboardAvoidingView>
        <Button 
            title='Go to Pet List'
            onPress={() => navigate('PetList')}
        />
      </>
    );
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

