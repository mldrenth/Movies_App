import {React, useState, useEffect} from 'react';
import { getUserData } from '../services/UserServices';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, ScrollView} from 'react-native';

const FavouritesScreen = () => {

    const [username, setUsername] = useState("");

    useEffect(() => {
        getUserData()
        .then((userData) => {
            setUsername(userData.username)
        })
    }, [])

    return (
        <View>
            <Text>{username}</Text>
            <Text> Favourites Screen</Text>
        </View>
    )
    
}

export default FavouritesScreen;