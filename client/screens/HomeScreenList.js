import {React, useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, ScrollView} from 'react-native';
import { getPopularMovies, getTopRatedMovies, getUpcomingMovies, getRecommendedMovies } from '../services/MovieApiServices';
import { getUserData } from '../services/UserServices';
import MovieList from '../components/MovieList';
import { useIsFocused } from "@react-navigation/native";


const HomeScreenList = ({}) => {

    const [popularMovies, setPopularMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [moviesFavourites, setMoviesFavourites] = useState([]);
    const [recommendedMovies, setRecommendedMovies] = useState([]);
    const [randomFavourite, setRandomFavourite] = useState(null);
    const [randomId, setRandomId] = useState(null);

    const isFocused = useIsFocused();

    useEffect(() => {
      getUserData()
      .then((userData) => {
          setMoviesFavourites(userData.moviesFavourites)
          const favouriteLength = userData.moviesFavourites.length;
          const randomIndex = Math.floor(Math.random() * favouriteLength);
          console.log(randomIndex)
          if (favouriteLength !== 0) {
          setRandomFavourite(userData.moviesFavourites[randomIndex])
          getRecommendedMovies(userData.moviesFavourites[randomIndex].idFromApi).then((movies) => setRecommendedMovies(movies.results))
          }
      })
     
  }, [isFocused])
  
  
  
    useEffect(() => {
      getPopularMovies().then((popularMovies) => {
        setPopularMovies(popularMovies.results);
      });
      
    },[])
  
    useEffect(() => {
      getTopRatedMovies().then((topRatedMovies) => {
        setTopRatedMovies(topRatedMovies.results);
      });
      
    },[])
  
    useEffect(() => {
      getUpcomingMovies().then((upcomingMovies) => {
        setUpcomingMovies(upcomingMovies.results);
      });
      
    },[])

  
    return (
      <SafeAreaView style={styles.container}>
      <ScrollView >  
        <View >
       <Text style={styles.text}>Popular Movies</Text>
        <MovieList movies={popularMovies} ></MovieList>
        </View>
        {recommendedMovies && randomFavourite?
        <View >
        <Text style={styles.text}>Because you like "{randomFavourite.title}"</Text>
        <MovieList movies={recommendedMovies} ></MovieList>
        </View> : null}
        <View>
        <Text style={styles.text}>Top Rated Movies</Text>
        <MovieList movies={topRatedMovies}></MovieList>
        </View>
        <View>
        <Text style={styles.text}> Upcoming Movies</Text>
        <MovieList movies={upcomingMovies}></MovieList>
        </View>
        </ScrollView>
      
        <StatusBar style="auto" />
      </SafeAreaView>
    );
    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: "#f5c517",
      fontSize: 16,
      paddingLeft: 10,
      fontWeight:"bold"
  }
  });

export default HomeScreenList