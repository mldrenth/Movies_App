import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import MovieItem from './MovieItem';
import MovieSearchCard from './MovieSearchCard';

const MovieSearchList = ({movies}) => {
    
  

    const renderItem = ({item}) => (<MovieSearchCard
        id={item.id}
        backdropPath={item.backdrop_path} 
        posterPath={item.poster_path}
        genreIds={item.genre_ids}  
        title={item.title}
        overview={item.overview}
        voteAverage={item.vote_average}
        releaseDate={item.release_date}
        popularity={item.popularity}
        userRating={item.vote_average}/>)
    
    return (
        
          
            <FlatList  data={movies} renderItem={renderItem}  >
            
            </FlatList>
    )
}

export default MovieSearchList;