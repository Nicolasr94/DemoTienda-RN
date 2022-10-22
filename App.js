import {React,useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UseCamera from './src/components/UseCamera';
import HomeScreen from './src/components/HomeScreen';
import Lista from './src/components/Lista';
import ProductDetail from './src/components/ProductDetail';

const Stack = createNativeStackNavigator();

function App() {
  const [list, setlist] = useState([])
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen}/> 
        <Stack.Screen name="UseCamera" component={UseCamera}/>
        <Stack.Screen name="Lista" component={Lista}/>
        <Stack.Screen name="ProductDetail" component={ProductDetail}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App

// component Text => EL UNICO PARA TEXTO
// component View => PARA CREAR CUALQUIER INTERFAZ, COMPORTAMIENTO COMO CONTENEDOR FLEXBOX
// component Touch => COMPONENTES/BUTTONS PARA APRETAR 