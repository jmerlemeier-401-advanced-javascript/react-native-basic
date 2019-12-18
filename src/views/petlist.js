import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button, FlatList } from 'react-native';

const useFetch = (url, options) => {
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, options)
        const json = await res.json()
        setResponse(json)
      } catch (e) {
        setError(e)
      }
    }
    fetchData()
  }, [])
  return { response, error }
}

const PetList = () => {

  const res = useFetch("https://swapi.co/api/people/")
  if (!res.response) return <Text>loading...</Text>


  return (
    <View style={styles.list}>
      <Text style={styles.title}>List of Pets</Text>
      
      <FlatList 
        keyExtractor={item => item.name}
        data={res.response.results}
        renderItem={({ item }) => {
          return (
            <Text style={styles.textStyle}>
              {item.name} - {item.species}
            </Text>
          )
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50
  },
  textStyle: {
    fontSize: 20,
    color: 'teal',
    marginVertical: 25
  },
  title: {
    fontSize: 50,
    color: 'orange',
  }

});

export default PetList;