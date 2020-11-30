import React from 'react'
//View é um container - parecido com a div do html
import { View, Text, StyleSheet, StatusBar } from 'react-native'

export default function App() {
  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#7159c1'/>
      <View style={styles.container}>
        <Text style={styles.title}>Hello World</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold'
  }
})
