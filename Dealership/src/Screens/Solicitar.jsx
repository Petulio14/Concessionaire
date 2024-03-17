import React, { useState } from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Modal,
  Button,
  Pressable,
} from 'react-native';
import VehicleDetail from './VehicleDetail';

const Solicitar = ({imageUrls, specifications,name}) => {
  const[vehicleDetailView,setVehicleDetailView]=useState(false)

  return (
    <View>
      <Pressable  onPress={() => setVehicleDetailView(true)}>
          <Text>Volver</Text>
        </Pressable>
      <Modal animationType="slide" visible={vehicleDetailView}>
        <VehicleDetail images={imageUrls} specifications={specifications} name={name}/>
      </Modal>
    </View>
  );
};

export default Solicitar;
