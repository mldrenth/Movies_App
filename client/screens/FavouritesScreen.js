import {React, useState, useEffect} from 'react';
import { getUserData } from '../services/UserServices';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, ScrollView} from 'react-native';
import MovieCardList from '../components/MovieCardList';
import { useIsFocused } from "@react-navigation/native";
import { useIsMounted } from '../components/Mounthelper';

const FavouritesScreen = () => {

    const [moviesFavourites, setMoviesFavourites] = useState([]);
    const [onFavouriteScreen, setOnFavouriteScreen] = useState("Favourites");

    const isFocused = useIsFocused();
    const isMounted = useIsMounted();

    const removeMovieState = (idToDelete) => {
        const newMoviesFavourites = [...moviesFavourites]
        const result = newMoviesFavourites.filter((movie) => movie.id !== idToDelete)
        setMoviesFavourites(result)
      };

    useEffect(() => {
        getUserData()
        .then((userData) => {
            if (isMounted.current){
            setMoviesFavourites(userData.moviesFavourites)}
        })
    }, [isFocused])


    
    return (
        <View>
            <MovieCardList removeMovieState={removeMovieState} movies={moviesFavourites} onScreen={onFavouriteScreen}/>
        </View>
    )
    
}

export default FavouritesScreen;