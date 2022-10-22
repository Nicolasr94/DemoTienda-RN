import React from 'react'
import { View, Text, Button } from 'react-native';


export default function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home</Text>

        <Button
          title="Escanear!"
          onPress={() => navigation.navigate('UseCamera')}
        />
          <Button
          title="Lista de productos"
          onPress={() => navigation.navigate('Lista')}
        />

          <Button
          title="Detalle de producto"
          onPress={() => navigation.navigate('ProductDetail')}
        />

      </View>

      )}

