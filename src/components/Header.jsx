import React from 'react'
import { StyleSheet,View,Text } from 'react-native';

const style = StyleSheet.create({
    header:{
        flex:1},
        center:{alignSelf:center},
        left:{alignSelf:left},
        right:{alignSelf:right}
})
const LayoutHome = () => {
  return (
    <View style={style.header}>
        <View style={style.header}></View>
        <View style={style.header}></View>
        <View style={style.header}> </View>
    </View>
  )
}

export default LayoutHome;
