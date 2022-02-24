import {React, useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, ScrollView} from 'react-native';
import { getUserData } from '../services/UserServices';
import MovieCardList from '../components/MovieCardList';
import { useIsFocused } from "@react-navigation/native";

const WatchlistScreen = () => {

    const [moviesWatchlist, setMoviesWatchlist] = useState([]);
    const isFocused = useIsFocused();

    useEffect(() => {
        getUserData()
        .then((userData) => {
            setMoviesWatchlist(userData.moviesWatchlist)
        })
    }, [isFocused])
    
    return (
        <View>
            <Text style={{ color:"#f5c517", paddingLeft:10, fontWeight:"bold" }}> Watchlist Screen</Text>
            <MovieCardList movies={moviesWatchlist}/>
        </View>

    )
    
}

export default WatchlistScreen;