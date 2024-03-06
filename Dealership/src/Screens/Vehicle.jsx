import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const vehicle = ({imageUrl, description, price}) => {
  return (
    <View>
        <Image
            source={{uri:imageUrl}}
            style={styles.img}
        />
        <Text>{description}</Text>
        <Text>$ {price}</Text>
      
    </View>
  )
}

const styles = StyleSheet.create({
    img:{
        width:200,
        height:200
    }
})




export default vehicle
