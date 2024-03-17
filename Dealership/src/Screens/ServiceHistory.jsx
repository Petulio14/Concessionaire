import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const ServicesHistory = () => {
  const [registros, setRegistros] = useState([]);
  const [vehiculo, setVehiculo] = useState('');
  const [fecha, setFecha] = useState('');
  const [tipoServicio, setTipoServicio] = useState('');

  const agregarRegistro = () => {
    const nuevoRegistro = {
      vehiculo: vehiculo,
      fecha: fecha,
      tipoServicio: tipoServicio,
    };
    setRegistros((prevRegistros) => [...prevRegistros, nuevoRegistro]);
    
    setVehiculo('');
    setFecha('');
    setTipoServicio('');
  };

  return (
    <View>
      <Text>Historial de Servicio</Text>
      <View>
        <Text>Vehículo:</Text>
        <TextInput
          value={vehiculo}
          onChangeText={setVehiculo}
        />
        <Text>Fecha de ingreso:</Text>
        <TextInput
          value={fecha}
          onChangeText={setFecha}
        />
        <Text>Tipo de servicio:</Text>
        <TextInput
          value={tipoServicio}
          onChangeText={setTipoServicio}
        />
        <Button
          title="Agregar Registro"
          onPress={agregarRegistro}
        />
      </View>
      <View>
        {registros.map((registro, index) => (
          <Text key={index}>
            Vehículo: {registro.vehiculo}, Fecha: {registro.fecha}, Tipo de Servicio: {registro.tipoServicio}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default ServicesHistory;
