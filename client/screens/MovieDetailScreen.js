import {React, useState, useEffect, useRef, useCallback} from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, ScrollView, Image, TouchableHighlight, Button} from 'react-native';
import YoutubePlayer from "react-native-youtube-iframe";
import { useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { getVideoKey } from '../services/MovieApiServices';
import { addMovie } from '../services/MovieServices';
import { addMovieToFavourites, addMovieToWatchlist } from '../services/UserServices';
import { useIsFocused } from "@react-navigation/native";
import { getUserData } from '../services/UserServices';


const MovieDetailScreen = () => {

    const [youtubeKey, setYoutubeKey] = useState("");
    const route = useRoute();
    const {id, backdropPath, posterPath, genreIds, title, overview, voteAverage, releaseDate, popularity, userRating} =  route.params;
    const [userMoviesWatchlist, setUserMoviesWatchlist] = useState([]);
    const [userMoviesFavourites, setUserMoviesFavourites] = useState([]);
    const backdropUrl = {uri: "https://image.tmdb.org/t/p/w500/" + (backdropPath)}

    const [playing, setPlaying] = useState(false);
    const [userHasMovieWatchlist, setUserHasMovieWatchlist] = useState(false);
    const [userHasMovieFavourites, setUserHasMovieFavourites] = useState(false);
    const isFocused = useIsFocused();

    useEffect(() => {
      getUserData()
      .then((userData) => {
          setUserMoviesWatchlist(userData.moviesWatchlist)
          setUserMoviesFavourites(userData.moviesFavourites)   
          if (userData.moviesWatchlist.map((movie) => movie.idFromApi).includes(id) ) {
            setUserHasMovieWatchlist(true);
          }

          if(userData.moviesFavourites.map((movie) => movie.idFromApi).includes(id)){
            setUserHasMovieFavourites(true);
          }
          
      })
      
  }, [isFocused])
  


    const onStateChange = useCallback((state) => {
      if (state === "ended") {
        setPlaying(false);
        Alert.alert("video has finished playing!");
      }
    }, []);
  
    const togglePlaying = useCallback(() => {
      setPlaying((prev) => !prev);
    }, []);

    useEffect(() => {
        getVideoKey(id).then((moviekeys) => setYoutubeKey(moviekeys.results[0].key))
    },[])

    const handleSaveFavourites = () => {
      addMovieToFavourites({
        posterPath: posterPath,
        backdropPath: backdropPath,
        title: title,
        overview: overview,
        voteAverage: voteAverage,
        releaseDate: releaseDate,
        popularity: popularity,
        userRating: voteAverage,
        idFromApi: id,
        video: youtubeKey
        
      })
      setUserHasMovieFavourites(true)
    }

    const handleSaveWatchlist = () => {
      addMovieToWatchlist({
        posterPath: posterPath,
        backdropPath: backdropPath,
        title: title,
        overview: overview,
        voteAverage: voteAverage,
        releaseDate: releaseDate,
        popularity: popularity,
        userRating: voteAverage,
        idFromApi: id,
        video: youtubeKey
        
      })
      setUserHasMovieWatchlist(true)
    }
    


    return (
        <View style={{flex:1, alignItems:'center'}}>
        <ScrollView>
        <Image source={backdropUrl} style={styles.backdrop}></Image>
        <Text style={{fontSize:20}}>{title}</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly', width: '100%'}}>
        {userHasMovieWatchlist ?
        <Ionicons name="bookmark" size={32} color="#f5c517" /> :
        <TouchableHighlight onPress={handleSaveWatchlist}>
          
        <Ionicons name="bookmark" size={32} color="black" />
        </TouchableHighlight>}
        {userHasMovieFavourites ?
        <Ionicons name="heart" size={32} color="#f5c517" /> :
        <TouchableHighlight onPress={handleSaveFavourites}>
        <Ionicons name="heart" size={32} color="black" />
        </TouchableHighlight> }
        </View>
        {youtubeKey?<View style={{flex:1}}>
            <Text>Trailer</Text>
            <YoutubePlayer height={300}
        play={playing}
        videoId={youtubeKey}
        onChangeState={onStateChange}></YoutubePlayer>
             <Button title={playing ? "pause" : "play"} onPress={togglePlaying} />

        
        </View> : null}
        
        <Text>OVERVIEW</Text>
        <Text>{overview}</Text>
        </ScrollView>
            </View>
    
    )
    
}

export default MovieDetailScreen;

const styles = StyleSheet.create({
    item: {
        padding: 0,
        marginVertical: 8,
        marginHorizontal: 0,
       
        
      },image: {
        
        resizeMode: 'contain',
        height: 100,
        width: 200
    
      }, backdrop: {
        resizeMode: 'cover',
        height: 200,
        width: 400,

      },video: {
        alignSelf: 'center',
        width: 350,
        height: 220,
      },
      buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },

});