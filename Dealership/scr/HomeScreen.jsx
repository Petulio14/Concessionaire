import * as React from 'react';
import {  View, Text, StyleSheet, ScrollView, Image,  } from 'react-native';
import { Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';




function HomeScreen({ navigation }) {
    return (
     
      <ScrollView style={{backgroundColor:'#fcfcfc'}}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-star' }}>
          <Text style={styles.subHeader}>CONSESIONARIOS AUTOSTOP</Text>
        </View>
        
        <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('./Images/loco-autostop.png')} style ={{width: 320,height: 440,borderRadius: 18, resizeMode: 'center'}}/>
        </View>

        <View style={{ flex: 3, alignItems: 'center', justifyContent: 'flex-end' }}>
          <Button icon='car' mode="contained" buttonColor='red' onPress={() => navigation.navigate('CATALOGO')} >
            <Text >CATÁLOGO</Text>
          </Button>
        </View>

        <Text style ={styles.hole} />

        <View style={{ flex: 3, alignItems: 'center', justifyContent: 'flex-end' }}>
          <Button icon='tools' mode="contained" buttonColor='red' onPress={() => navigation.navigate('TECNICO')} >
            <Text  >SERVICIO MECÁNICP</Text>
          </Button>
        </View>

        <Text style ={styles.hole} />

        <View style={{ flex: 3, alignItems: 'center', justifyContent: 'flex-end' }}>
          <Button icon='calendar-multiple-check' mode="contained" buttonColor='red'  onPress={() => navigation.navigate('ASESORIA')} >
            <Text>¿MÁS INFORMACIÓN?</Text>
          </Button>
        </View>

      </ScrollView> 
    
    );
  }

  const styles = StyleSheet.create({
    subHeader: {
      fontSize: 23,
      backgroundColor : "#ff0a0a",
      color : "white",
      textAlign : "center",
      paddingVertical : 10,
      marginBottom : 10,
      paddingHorizontal: 106,
    },
    hole: {
      paddingVertical: 13

  },
    
  });




  export default HomeScreen;