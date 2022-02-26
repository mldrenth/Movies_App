import {React, useState, useEffect} from 'react';
import { getUserData } from '../services/UserServices';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, ScrollView} from 'react-native';
import MovieCardList from '../components/MovieCardList';
import { useIsFocused } from "@react-navigation/native";

const FavouritesScreen = () => {

    const [username, setUsername] = useState("");
    const [moviesFavourites, setMoviesFavourites] = useState([]);

    const isFocused = useIsFocused();

    useEffect(() => {
        getUserData()
        .then((userData) => {
        
            setUsername(userData.username)
        })
        // console.log(username)
    }, [])


    useEffect(() => {
        getUserData()
        .then((userData) => {
            setMoviesFavourites(userData.moviesFavourites)
        })
    }, [isFocused, moviesFavourites])

    return (
        <View>
            <MovieCardList movies={moviesFavourites}/>
        </View>
    )
    
}

export default FavouritesScreen;