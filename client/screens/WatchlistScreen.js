import {React, useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, ScrollView} from 'react-native';
import { getUserData } from '../services/UserServices';
import MovieCardList from '../components/MovieCardList';
import { useIsFocused } from "@react-navigation/native";

const WatchlistScreen = () => {

    const [moviesWatchlist, setMoviesWatchlist] = useState([]);
    const isFocused = useIsFocused();

    const removeMovieState = (idToDelete) => {
        const newMoviesWatchlist = [...moviesWatchlist]
        const result = newMoviesWatchlist.filter((movie) => movie.id !== idToDelete)
        setMoviesWatchlist(result)
      };

    useEffect(() => {
        getUserData()
        .then((userData) => {
            setMoviesWatchlist(userData.moviesWatchlist)
        })
    }, [isFocused])
    
    return (
        <View>
            <MovieCardList removeMovieState={removeMovieState} movies={moviesWatchlist}/>
        </View>

    )
    
}

export default WatchlistScreen;