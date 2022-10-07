import React from 'react';
import { Text, View, StyleSheet} from 'react-native';


// component Text => EL UNICO PARA TEXTO
// component View => PARA CREAR CUALQUIER INTERFAZ, COMPORTAMIENTO COMO CONTENEDOR FLEXBOX
// component Touch => COMPONENTES/BUTTONS PARA APRETAR 


const Main = () => { 
    return (
        <View style={{flex:1,flexDirection:"row",height:1,top:0}}>
        <View style={stlyes.firstItem}></View>
        <View style={stlyes.secondItem} />
        <View style={stlyes.thirdItem} />
        </View>
    )
}
export default Main  

const stlyes = StyleSheet.create({
    firstItem:{flex: 1, backgroundColor: "powderblue"},
    secondItem:{flex: 2, backgroundColor: "skyblue"},
    thirdItem:{flex: 3, backgroundColor: "steelblue"}
 })