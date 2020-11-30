import React, { useEffect, useState } from 'react'
//View é um container - parecido com a div do html
import { View, SafeAreaView, FlatList, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native'

import api from './services/api'

export default function App() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    api.get('projects').then(response => {
      console.log(response.data)
      setProjects(response.data)
    })
  }, [])

  async function handAddProject() {
    const response = await api.post('projects', {
      title: `Mobile React-Native ${Date.now()}`,
      owner: "Daniel Carvalho",
    })

    setProjects([...projects, response.data])
  }

  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#7159c1' />
      <SafeAreaView style={styles.container}>
        <FlatList
          style={styles.container}
          data={projects}
          keyExtractor={project => project.id}
          renderItem={({ item: project }) => (
            <Text style={styles.project}>{project.title}</Text>
          )}
        />
        <TouchableOpacity 
        activeOpacity={0.6} 
        style={styles.button} 
        onPress={handAddProject}
        >
          <Text style={styles.buttonText}>Adicionar Projeto</Text>
        </TouchableOpacity>

        {/* <View style={styles.container}>
        {projects.map(project => (
        <Text key={project.id} style={styles.project}>{project.title}</Text>
        ))}
      </View> */}
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
  },

  project: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold'
  },

  button: {
    backgroundColor: '#fff',
    margin: 20,
    height: 50,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    color: '#7159c1',
    fontSize: 20,
  }
})
