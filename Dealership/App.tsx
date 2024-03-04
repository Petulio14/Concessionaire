import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const HelloWorld = () => {
  return (
    <View style={styles.contains}>
        <Text style = {styles.title}> 
          Buen dia a todos 😁
        </Text>
      </View>
  )
}

const styles = StyleSheet.create({
    contains:{
        flex:1,
        backgroundColor: '#5f431e',
        justifyContent: 'center',
    },
    title:{
        color: 'white',
          fontWeight: 'bold',
          fontSize: 65,
          textAlign:'center',
          fontFamily:'georgia'
    }
})

export default HelloWorld