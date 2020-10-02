import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

export default function App() {
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')

  function handleSubmit() {
    const alt = altura / 100
    const imc = peso / (alt ** 2)

    if(imc < 18.6) {
      alert(`Você está abaixo do peso ideal. ${imc.toFixed(2)}`)
    }else if (imc < 24.9) {
      alert(`Você está no peso ideal. ${imc.toFixed(2)}`)
    }else if (imc < 34.9) {
      alert(`Sobre peso. ${imc.toFixed(2)}`)
    }else if(imc > 40) {
      alert(`Cuidado! Obesidade!!! ${imc.toFixed(2)}`)
    }
  }

  return(
    <View style = {styles.container}>
        <Text style = {styles.titulo}>Calcule seu IMC</Text>

        <TextInput
          style = {styles.input}
          value = {peso}
          onChangeText = { (peso) => setPeso(peso) }
          placeholder = "Peso em KG"
          keyboardType = 'numeric'
        />
        
        <TextInput
          style = {styles.input}
          value = {altura}
          onChangeText = { (altura) => setAltura(altura) }
          placeholder = "Altura em cm"
          keyboardType = 'numeric'
        />

        <TouchableOpacity 
        style = {styles.button}
        onPress = {handleSubmit}
        >
          <Text style = {styles.buttonText}> 
            Calcular
          </Text>
        </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#000'
  },
  titulo:{
    textAlign: 'center',
    marginTop: 35,
    fontSize: 30,
    color: '#FFF'
  },
  input:{
    backgroundColor: '#8F8988',
    borderRadius: 10,
    margin: 15,
    padding: 10,
    fontSize: 25,
    color: '#FFFFFF',
    textAlign: 'center'
  },
  button:{
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    backgroundColor: '#8F8988',
    marginRight: 20,
    marginLeft: 20,
    padding: 10
  },
  buttonText:{
    color: '#000',
    fontSize: 35
  }
})