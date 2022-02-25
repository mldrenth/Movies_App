import * as React from 'react';
import { Text, View, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, createMaterialTopTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import WatchlistScreen from './screens/WatchlistScreen';
import FavouritesScreen from './screens/FavouritesScreen';
import { DefaultTheme, DarkTheme} from '@react-navigation/native';
import UserScreen from './screens/UserScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';



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

// const TabTop = createMaterialTopTabNavigator();


const Tab = createBottomTabNavigator();

export default function App() {

  const colorScheme = useColorScheme();

  return (
    <NavigationContainer theme={myTheme}>
    {/* <NavigationContainer theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}> */}

      <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
      
                  if (route.name === "Home") {
                    iconName = focused ? "home" : "home-outline";
                  } else if (route.name === "Watchlist") {
                    iconName = focused ? "bookmark" : "bookmark-outline";
                  } else if (route.name === "Favourites") {
                    iconName = focused ? "heart" : "heart-outline";
                  }
      
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: "#f5c517",
                tabBarInactiveTintColor: "gray",
              })}>

        <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <Tab.Screen name="Watchlist" component={WatchlistScreen} />
        <Tab.Screen name="Favourites" component={FavouritesScreen}/>
        <Tab.Screen name="User" component={UserScreen}/>
      </Tab.Navigator>

      {/* <TabTop.Navigator>
      <TabTop.Screen name="Home" />
      <TabTop.Screen name="Settings"/>
    </TabTop.Navigator> */}

    </NavigationContainer>
  );
}