import React from 'react';
import {Image, TouchableHighlight, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MovieItem = ({id, backdropPath, posterPath, genreIds, title, overview, voteAverage, releaseDate, popularity, userRating}) => {

  const navigation = useNavigation();

   
    const baseUrl = {uri: "https://image.tmdb.org/t/p/w500/" + posterPath};
    
    return (

        <TouchableHighlight style={styles.item}  onPress={() => navigation.navigate('MovieDetailScreen', {id: id,backdropPath: backdropPath,posterPath: posterPath, genreIds: genreIds, title:title, overview: overview, voteAverage: voteAverage, releaseDate: releaseDate, popularity: popularity, userRating: userRating}) }>
            <Image source={baseUrl} style={styles.image}>
            
            </Image>
            </TouchableHighlight>
           
           
        
    )
}
const styles = StyleSheet.create({
        item: {
            padding: 0,
            marginVertical: 8,
            marginHorizontal: 0,
            
          },image: {
            flex: 1,
            resizeMode: 'contain',
            height: 100,
            width: 200
        
          }
  
  });

export default MovieItem;