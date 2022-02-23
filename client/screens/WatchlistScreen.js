import {React, useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, ScrollView} from 'react-native';
import { getUserData } from '../services/UserServices';
import MovieCardList from '../components/MovieCardList';

const WatchlistScreen = () => {

    const [moviesWatchlist, setMoviesWatchlist] = useState([]);

    useEffect(() => {
        getUserData()
        .then((userData) => {
            setMoviesWatchlist(userData.moviesWatchlist)
        })
    }, [])
    
    return (
        <View>
            <Text> Watchlist Screen</Text>
            <MovieCardList movies={moviesWatchlist}/>
        </View>

    )
    
}

export default WatchlistScreen;