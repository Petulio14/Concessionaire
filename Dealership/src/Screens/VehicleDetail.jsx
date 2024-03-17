import React, { useState } from 'react';
import { Dimensions, Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import CarouselImages from '../components/CarouselImages';
import Catalog from './Catalog';
import Solicitar from './Solicitar';

const widthScreen = Dimensions.get('window').width;

const VehicleDetail = ({ images, specifications, name }) => {
  const [catalogView, setCatalogView] = useState(false);
  const [requestView, setRequestView] = useState(false);
  const imageUrls = images.map(image => Object.values(image)[0]);

  return (
    <ScrollView style={styles.viewBody}>
      <Pressable onPress={() => setCatalogView(true)} style={styles.goBackButton}>
        <Text style={styles.goBackText}>Volver</Text>
      </Pressable>

      <Text style={styles.title}>{name}</Text>
      <CarouselImages images={imageUrls} height={250} width={widthScreen} />
      <View style={styles.specificationsContainer}>
        <Text style={styles.subtitle}>Especificaciones:</Text>
        <Text style={styles.specText}>Motor: {specifications.engine}</Text>
        <Text style={styles.specText}>Potencia: {specifications.power}</Text>
        <Text style={styles.specText}>Caja de cambios: {specifications.gearbox}</Text>
        <Text style={styles.specText}>Transmisión: {specifications.transmission}</Text>
      </View>
      <Pressable onPress={() => setRequestView(true)} style={styles.goBackButton}>
        <Text style={styles.goBackText}>Solicitar</Text>
      </Pressable>

      <Modal animationType="slide" visible={catalogView}>
        <Catalog />
      </Modal>
      <Modal animationType="slide" visible={requestView}>
        <Solicitar imageUrls={ images} specifications={specifications} name={name} />
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
  },
  goBackButton: {
    marginLeft: 10,
    marginTop: 10,
  },
  goBackText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'blue', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  specificationsContainer: {
    marginLeft: 10,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  specText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default VehicleDetail;
