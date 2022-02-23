import {React, useState, useEffect} from 'react';
import { getUserData } from '../services/UserServices';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, ScrollView} from 'react-native';
import MovieCardList from '../components/MovieCardList';

const FavouritesScreen = () => {

    const [username, setUsername] = useState("");
    const [moviesFavourites, setMoviesFavourites] = useState([]);

    useEffect(() => {
        getUserData()
        .then((userData) => {
            setUsername(userData.username)
        })
    }, [])


    useEffect(() => {
        getUserData()
        .then((userData) => {
            setMoviesFavourites(userData.moviesFavourites)
        })
    }, [])

    // console.log("moviesFavourites", moviesFavourites);

    return (
        <View>
            <Text>{username}</Text>
            <Text> Favourites Screen</Text>
            <MovieCardList movies={moviesFavourites} style={{backgroundColor: 'red', height: 200}}/>
        </View>
    )
    
}

export default FavouritesScreen;