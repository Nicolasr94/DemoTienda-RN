
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UseCamera from './src/components/UseCamera';
import HomeScreen from './src/components/HomeScreen';
import Lista from './src/components/Lista';


const Stack = createNativeStackNavigator();
const [list, setlist] = useState(products=[nameProduct=[],price=[],codg=[]])
const setProduct = (product,priceP,codgP) => {
    setlist(products.nameProduct += product, products.price +=priceP, products.codg += codgP)
};
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home">
          {(list) => <HomeScreen {...list}></HomeScreen>}</Stack.Screen> 
        <Stack.Screen name="UseCamera">
        {(setProduct) => <UseCamera {setProduct}></UseCamera>} </Stack.Screen>
        <Stack.Screen name="Lista" component={Lista} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

// component Text => EL UNICO PARA TEXTO
// component View => PARA CREAR CUALQUIER INTERFAZ, COMPORTAMIENTO COMO CONTENEDOR FLEXBOX
// component Touch => COMPONENTES/BUTTONS PARA APRETAR 