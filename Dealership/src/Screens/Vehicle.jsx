import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const vehicle = ({imageUrl, description, price}) => {
  return (
    <View style={styles.contains}>
        <Image
            source={{uri:imageUrl}}
            style={styles.img}
        />
        <Text
        style={styles.descrption}>{description}</Text>
        <Text
        style={styles.price}>$ {price}</Text>
      
    </View>
  )
}

const styles = StyleSheet.create({
  contains:{
    flex:1,
    backgroundColor: '#00d9ff',
    justifyContent: 'center',
  },
    img:{
      width: 200,
      height: 200,
      borderradius: 15,
      marginVertical: 8,
      alignSelf:"center",
      borderWidth: 2, 
      borderColor: 'blue',
    },
    descrption:{
      fontSize: 16,
      color:'#333',
      lineHeight: 24,
      paddingHorizontal: 16,
      textAlign: "justify",
      marginBottom: 8,
      alignSelf:"center"
    },
    price:{
      fontWeight: "bold",
      fontSize: 18,
      color: "#00177e",
      marginBottom: 4,
      alignSelf:"center"
    }
}); 




export default vehicle
