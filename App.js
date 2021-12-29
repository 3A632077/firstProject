import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';

export default function App() {
  const [food, setFood ] = useState('candy')
  const [count, setCount ] = useState(0)
  const changeFood=()=>{
    setFood('noodles')
    console.log('按到noodles按鈕了')
  }
  const Counter=()=>{
    setCount(count+1)
    console.log('按到計數器了')
  }
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Open up App.js to start working on your react!</Text>
      <Text>{food}</Text>
      <Text>計數器有{count}個</Text>
      <Button 
        title='change food' 
        onPress={() => changeFood()}
      />
      <Button 
        title='change count' 
        onPress={() => Counter()}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText:{
    fontSize:20,
    textAlign: 'center',
    color:'red',
  },
  SecText:{
    color:'green'
  }
});
