import { React, useState, useEffect, useRef, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, ScrollView, Image, TouchableHighlight, Button } from 'react-native';
import YoutubePlayer from "react-native-youtube-iframe";
import { useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { getVideoKey } from '../services/MovieApiServices';
import { addMovie } from '../services/MovieServices';
import { addMovieToFavourites, addMovieToWatchlist, removeMovieFromWatchlist, removieMovieFromFavourites } from '../services/UserServices';
import { useIsFocused } from "@react-navigation/native";
import { getUserData } from '../services/UserServices';
import { getAllGenres } from '../services/GenreServices';


const MovieDetailScreen = () => {

  const [youtubeKey, setYoutubeKey] = useState("");
  const route = useRoute();
  const { id, backdropPath, posterPath, genreIds, title, overview, voteAverage, releaseDate, popularity, userRating } = route.params;
  const [userMoviesWatchlist, setUserMoviesWatchlist] = useState([]);
  const [userMoviesFavourites, setUserMoviesFavourites] = useState([]);
  const [movieGenres, setMovieGenres] = useState([]);
  const backdropUrl = { uri: "https://image.tmdb.org/t/p/w500/" + (backdropPath) }

  const [playing, setPlaying] = useState(false);
  const [userHasMovieWatchlist, setUserHasMovieWatchlist] = useState(false);
  const [userHasMovieFavourites, setUserHasMovieFavourites] = useState(false);
  const [idFromDb, setIdFromDb] = useState(0)
  const isFocused = useIsFocused();

  useEffect(() => {
    getUserData()
      .then((userData) => {
        setUserMoviesWatchlist(userData.moviesWatchlist)
        setUserMoviesFavourites(userData.moviesFavourites)
        if (userData.moviesWatchlist.map((movie) => movie.idFromApi).includes(id)) {
          setUserHasMovieWatchlist(true);
          const movieFromDb = userData.moviesWatchlist.find((movie) => movie.idFromApi === id)
          setIdFromDb(movieFromDb.id);


        }
        else {
          setUserHasMovieWatchlist(false);
        }

        if (userData.moviesFavourites.map((movie) => movie.idFromApi).includes(id)) {
          setUserHasMovieFavourites(true);
          const movieFromDb = userData.moviesFavourites.find((movie) => movie.idFromApi === id)
          setIdFromDb(movieFromDb.id);

        }
        else {
          setUserHasMovieFavourites(false)
        }

      })

  }, [isFocused])

  useEffect(() => {
    getAllGenres()
      .then((genres) => {
        const genresToAdd = genres.filter((genre) => genreIds.includes(genre.idFromApi))
        setMovieGenres(genresToAdd)
      }

      )

  }, [isFocused])


  const genreBadges = movieGenres.map((genre) => {
    return (<View key={genre.id} style={{ borderRadius: 10, backgroundColor: '#151D30', padding: 5, marginBottom: 5 }}>
      <Text style={{ color: "#b5b7b9" }} key={genre.id}>{genre.name}</Text></View>)

  })


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
  }, [])

  const handleSaveFavourites = () => {
    addMovieToFavourites({
      posterPath: posterPath,
      backdropPath: backdropPath,
      title: title,
      genres: movieGenres,
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
      genres: movieGenres,
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

  const handleRemoveWatchlist = () => {
    removeMovieFromWatchlist(idFromDb)
    setUserHasMovieWatchlist(false)
  }

  const handleRemoveFavourites = () => {
    removieMovieFromFavourites(idFromDb)
    setUserHasMovieFavourites(false)
  }


  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <ScrollView style={{ maxWidth: '100%' }}>
        <Image source={backdropUrl} style={styles.backdrop}></Image>
        <Text style={{ fontSize: 20, color: "#b5b7b9", fontWeight: "bold" }}>{title}</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: '100%' }}>
          {userHasMovieWatchlist ?
            <TouchableHighlight onPress={handleRemoveWatchlist}>
              <Ionicons name="bookmark" size={32} color="#f5c517" />
            </TouchableHighlight> :
            <TouchableHighlight onPress={handleSaveWatchlist}>

              <Ionicons name="bookmark" size={32} color="#8a8d98" />
            </TouchableHighlight>}
          {userHasMovieFavourites ?
            <TouchableHighlight onPress={handleRemoveFavourites}>
              <Ionicons name="heart" size={32} color="#f5c517" />
            </TouchableHighlight> :
            <TouchableHighlight onPress={handleSaveFavourites}>
              <Ionicons name="heart" size={32} color="#8a8d98" />
            </TouchableHighlight>}
        </View>
        {youtubeKey ? <View style={{ flex: 1 }}>
          <Text style={{ color: "#f5c517" }}>Trailer</Text>
          <YoutubePlayer height={250}
            play={playing}
            videoId={youtubeKey}
            onChangeState={onStateChange}></YoutubePlayer>
        </View> : null}
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginHorizontal: 5 }}>
          {genreBadges}
        </View>
        <Text style={{ color: "#f5c517" }}>Overview</Text>
        <Text style={{ color: "#b5b7b9" }}>{overview}</Text>

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


  }, image: {

    resizeMode: 'contain',
    height: 100,
    width: 200

  }, backdrop: {
    resizeMode: 'cover',
    height: 200,
    width: 400,

  }, video: {
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