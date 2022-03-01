import { React, useState, useEffect, useRef, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, ScrollView, Image, TouchableHighlight, Button, TextInput, Modal, Pressable } from 'react-native';
import Slider from '@react-native-community/slider';
import YoutubePlayer from "react-native-youtube-iframe";
import { useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { getVideoKey } from '../services/MovieApiServices';
import { addMovie } from '../services/MovieServices';
import { addMovieToFavourites, addMovieToWatchlist, removeMovieFromWatchlist, removieMovieFromFavourites } from '../services/UserServices';
import { useIsFocused } from "@react-navigation/native";
import { getUserData } from '../services/UserServices';
import { getAllGenres } from '../services/GenreServices';
import { addNewRating } from '../services/RatingServices';


const MovieDetailScreen = () => {

  const [currentUser, setCurrentUser] = useState({});
  const [rating, setRating] = useState(null);
  const [youtubeKey, setYoutubeKey] = useState("");
  const route = useRoute();
  const { id, backdropPath, posterPath, genreIds, title, overview, voteAverage, releaseDate, popularity, userRating } = route.params;
  const [userMoviesWatchlist, setUserMoviesWatchlist] = useState([]);
  const [userMoviesFavourites, setUserMoviesFavourites] = useState([]);
  const [movieGenres, setMovieGenres] = useState([]);
  const backdropUrl = { uri: "https://image.tmdb.org/t/p/w500/" + (backdropPath) }
  const [modalVisible, setModalVisible] = useState(false);

  const [playing, setPlaying] = useState(false);
  const [userHasMovieWatchlist, setUserHasMovieWatchlist] = useState(false);
  const [userHasMovieFavourites, setUserHasMovieFavourites] = useState(false);
  const [idFromDb, setIdFromDb] = useState(0)
  const isFocused = useIsFocused();

  useEffect(() => {
    getUserData()
      .then((userData) => {
        setCurrentUser(userData);
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
  }, [isFocused])

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

  const handleRating = () => {
    addNewRating({
      movie: {
        posterPath: posterPath,
        backdropPath: backdropPath,
        title: title,
        genres: movieGenres,
        overview: overview,
        voteAverage: voteAverage,
        releaseDate: releaseDate,
        popularity: popularity,
        idFromApi: id,
        video: youtubeKey
      },
      user: {
        id: currentUser.id,
        username: currentUser.username,
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        phoneNumber: currentUser.phoneNumber,
        email: currentUser.email,
        password: currentUser.password
      },
      rating: rating
    })
    setModalVisible(!modalVisible)

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
            <Pressable  onPress={() => setModalVisible(true)}>
            <Ionicons name="star" size={32} color="#8a8d98" />
            </Pressable>


        </View>
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
              <Text style={{ color: "#f5c517", alignSelf: 'center' }}>{rating}</Text>
        <View style={styles.container}>
          <Slider minimumValue={0}
            style={{ width: 200, height: 40 }}
            maximumValue={10}
            value={rating}
            minimumTrackTintColor="#f5c517"
            maximumTrackTintColor="#8a8d98"
            onValueChange={setRating}
            step={1}
            thumbTintColor="#f5c517"></Slider>
          <TouchableHighlight style={[styles.buttonOpen, styles.button]} onPress={handleRating}>
            <Text style={styles.textStyle} >Leave a Rating</Text>
          </TouchableHighlight>
        </View>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyle}>Cancel</Text>
                </Pressable>
              </View>
            </View>
          </Modal>

        </View>
        {youtubeKey ? <View style={{ flex: 1 }}>
          <Text style={{ color: "#f5c517" }}>Trailer</Text>
          <YoutubePlayer height={220}
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
  input: {
    backgroundColor: '#151D30',
    width: '10%',
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    borderColor: '#f5c517',
    color: '#b5b7b9',
    marginRight: 10,
    marginLeft: 20
  },
  container: {
    marginTop: 10,
    flexDirection: 'row',
    padding: 10,
    alignSelf: 'center',
    alignItems: 'center'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#151D30',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#f5c517',
  },
  buttonClose: {
    backgroundColor: '#f5c517',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },

});