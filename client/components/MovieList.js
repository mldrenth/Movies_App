import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import MovieItem from './MovieItem';

const MovieList = ({movies}) => {
    
  

    const renderItem = ({item}) => (<MovieItem
        backdropPath={item.backdrop_path} 
        posterPath={item.poster_path}
        genreIds={item.genre_ids}  
        title={item.title}
        overview={item.overview}/>)
    
    return (
        
          
            <FlatList style={{height: 300}} horizontal={true} data={movies} renderItem={renderItem}  >
            
            </FlatList>
    )
}

export default MovieList;

  