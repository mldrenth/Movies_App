import {React, useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, ScrollView} from 'react-native';
import { getPopularMovies, getTopRatedMovies, getUpcomingMovies } from '../services/MovieApiServices';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreenList from './HomeScreenList';
import MovieDetailScreen from './MovieDetailScreen';


const HomeScreen = () => {

const Stack = createNativeStackNavigator();
    
  
    return (
     <Stack.Navigator>
         <Stack.Screen name="HomeScreenList" component={HomeScreenList} options={{ headerShown: false }}/>
         <Stack.Screen name="MovieDetailScreen" component={MovieDetailScreen} options={({ route }) => ({ title: route.params.title })}/>


     </Stack.Navigator>
    );
    
}


export default HomeScreen