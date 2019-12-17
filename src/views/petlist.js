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
  // const [data, setData] = useState({});

  const res = useFetch("https://swapi.co/api/people/1/")
  if (!res.response) return <Text>no response</Text>


  // useEffect(() => {
  //   async function fetchData () {
  //     // setData({test: 'test'});
  //     try {
  //       const response = await fetch('https://swapi.co/api/people/1/')
  //       const result = await response.json();
  //       console.log('result was hit!', result)
  //       setData(result);
  //       console.log('data was updated', data)
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   }
  //   fetchData()
  // }, [])

  return (
    <View style={styles.list}>
      <Text style={styles.title}>List of Pets</Text>
      <Text>name: {res.response.name}</Text>
      <Text>species: {res.response.species}</Text>
      {/* <FlatList 
        keyExtractor={item => item.name}
        data={res.response}
        renderItem={({ item }) => {
          return (
            <Text style={styles.textStyle}>
              {item.name} - {item.species}
            </Text>
          )
        }}
      /> */}
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