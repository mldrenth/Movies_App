import {React, useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, ScrollView, Image, TouchableHighlight} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const MovieDetailScreen = () => {

    
    const route = useRoute();
    const {backdropPath, posterPath, genreIds, title, overview} =  route.params;
    const posterUrl = {uri: "https://image.tmdb.org/t/p/w500/" + (posterPath)}
    const backdropUrl = {uri: "https://image.tmdb.org/t/p/w500/" + (backdropPath)}
    


    return (
        <View style={{flex:1, alignItems:'center'}}>
        <Image source={backdropUrl} style={styles.backdrop}></Image>
        <Text style={{fontSize:20}}>{title}</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly', width: '100%'}}>
        <Ionicons name="bookmark" size={32} color="black" />
        <Ionicons name="heart" size={32} color="black" />
        </View>
        
        <Text>OVERVIEW</Text>
        <Text>{overview}</Text>
            </View>
    
    )
    
}

export default MovieDetailScreen;

const styles = StyleSheet.create({
    item: {
        padding: 0,
        marginVertical: 8,
        marginHorizontal: 0,
       
        
      },image: {
        
        resizeMode: 'contain',
        height: 100,
        width: 200
    
      }, backdrop: {
        resizeMode: 'cover',
        height: 200,
        width: 400,

      }

});