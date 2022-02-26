import { assertStatusValuesInBounds } from 'expo-av/build/AV';
import * as React from 'react';
import { Text, View, useColorScheme, Image, StyleSheet } from 'react-native';
import mt_logo from '../assets/mt_logo.png'

export const HeaderLogo = () => {
  return (
   
    <Image
      style={{ width: 40, height: 30, alignSelf: 'center' }}
      source={mt_logo}
    />
   
  );
}

export const HeaderTitle = () => {
  return (
    <Text style={styles.text}>Movie Time</Text>
  )
}

const styles = StyleSheet.create({
  text: {
    color: "#f5c517",
    fontSize: 30,
    
    fontWeight:"bold"
}
});