import React from 'react';
import { FlatList, Text, View } from 'react-native';
import MovieCard from './MovieCard';

const MovieCardList = ({movies}) => {

    const renderItem = ({item}) => (<MovieCard 
        id={item.id}
        backdropPath={item.backdropPath} 
        posterPath={item.posterPath}
        genreIds={item.genre_ids}  
        title={item.title}
        overview={item.overview}
        voteAverage={item.voteAverage}
        releaseDate={item.releaseDate}
        popularity={item.popularity}
        userRating={item.voteAverage}/>)
    
    return (
        <FlatList data={movies} renderItem={renderItem}></FlatList>
    )

}

export default MovieCardList;