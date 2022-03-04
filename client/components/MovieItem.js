import React from 'react';
import { Image, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './MovieItemStyle';

const MovieItem = ({ id, backdropPath, posterPath, genreIds, title, overview, voteAverage, releaseDate, popularity, userRating }) => {

  const navigation = useNavigation();


  const baseUrl = { uri: "https://image.tmdb.org/t/p/w500/" + posterPath };

  return (

    <TouchableHighlight onPress={() => navigation.navigate('MovieDetailScreen', { id: id, backdropPath: backdropPath, posterPath: posterPath, genreIds: genreIds, title: title, overview: overview, voteAverage: voteAverage, releaseDate: releaseDate, popularity: popularity, userRating: userRating })}>
      <Image source={baseUrl} style={styles.image}>

      </Image>
    </TouchableHighlight>

  )
}

export default MovieItem;