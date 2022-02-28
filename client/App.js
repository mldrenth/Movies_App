import * as React from 'react';
import { useState, useEffect} from 'react';
import { getUserData } from './services/UserServices';
import { Text, View, useColorScheme, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, createMaterialTopTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import WatchlistScreen from './screens/WatchlistScreen';
import FavouritesScreen from './screens/FavouritesScreen';
import SearchScreen from './screens/SearchScreen';
import { DefaultTheme, DarkTheme} from '@react-navigation/native';
import UserScreen from './screens/UserScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import mt_logo from './assets/mt_logo.png'
import { HeaderLogo, HeaderTitle } from './header/TopNavigator';
import LoginScreen from './login/LoginScreen';


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


const Tab = createBottomTabNavigator();

export default function App() {

  const [user, setUser] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
      getUserData()
      .then((userData) => {
          setUser(userData)
      })
  }, [])

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
  }

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
            } else if (route.name === "User") {
              iconName = focused ? "person" : "person-outline";
            }  else if (route.name === "Search") {
              iconName = focused ? "search" : "search-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          // tabBarActiveTintColor: "#f5c517",
          // tabBarInactiveTintColor: "gray",
        })}>
          
        {isLoggedIn ? 
        <>
        <Tab.Screen name="Home" component={HomeScreen} options={{ headerTitle: (props) => <HeaderTitle {...props} />, headerLeft: (props) => <HeaderLogo {...props} /> }}/>
        <Tab.Screen name="Search" component={SearchScreen}  options={{ headerTitle: (props) => <HeaderTitle {...props} />, headerLeft: (props) => <HeaderLogo {...props} /> }}/>
        <Tab.Screen name="Watchlist" component={WatchlistScreen} options={{ headerTitle: (props) => <HeaderTitle {...props} />, headerLeft: (props) => <HeaderLogo {...props} /> }}/>
        <Tab.Screen name="Favourites" component={FavouritesScreen} options={{ headerTitle: (props) => <HeaderTitle {...props} />, headerLeft: (props) => <HeaderLogo {...props} /> }}/>
        <Tab.Screen name="User" children={() => <UserScreen user={user} setUser={setUser} handleLogout={handleLogout}/>}  options={{ headerTitle: (props) => <HeaderTitle {...props} />, headerLeft: (props) => <HeaderLogo {...props} /> }}/>
        </>  :
        <Tab.Screen name="Login" children={() => <LoginScreen handleLogin={handleLogin}/>}/>
        }
      </Tab.Navigator>
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: "#f5c517",
    fontSize: 16,
    paddingLeft: 10,
    fontWeight:"bold"
}
});