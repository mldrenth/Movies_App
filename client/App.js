import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import WatchlistScreen from './screens/WatchlistScreen';
import FavouritesScreen from './screens/FavouritesScreen';
import { StyleSheet, useColorScheme } from 'react-native';
import { DefaultTheme, DarkTheme} from '@react-navigation/native';
import UserScreen from './screens/UserScreen';

const myTheme = {
  dark: false,
  colors: {
    primary: '#f5c517',
    background: '#060d17',
    card: '#151d30', // '#242c40'
    text: 'white',
    border: 'black',
    notification: 'rgb(255, 69, 58)',
  },
};

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {

  const colorScheme = useColorScheme();

  return (
    <NavigationContainer theme={myTheme}>
    {/* <NavigationContainer theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}> */}

      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <Tab.Screen name="Watchlist" component={WatchlistScreen} />
        <Tab.Screen name="Favourites" component={FavouritesScreen}/>
        <Tab.Screen name="User" component={UserScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}