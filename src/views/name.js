import React, { useState } from 'react';
import { StyleSheet, Input, Button, KeyboardAvoidingView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function Name() {
  const [value, onChangeText] = React.useState('Useless Placeholder');
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <TextInput 
        style={styles.textStyle}
        placeholder="What is the name of your cat?"
        onChangeText={text => onChangeText(text)}
        value={value}
        />
      </KeyboardAvoidingView>
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
    fontSize: 30,
   color: 'teal',
  },
});

