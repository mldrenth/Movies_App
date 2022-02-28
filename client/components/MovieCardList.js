import {React, useState, useEffect} from 'react';
import { FlatList, Text, View } from 'react-native';
import { useIsFocused } from "@react-navigation/native";
import MovieCard from './MovieCard';

const MovieCardList = ({movies, removeMovieState}) => {

    const renderItem = ({item}) => (<MovieCard 
        id={item.id}
        idFromApi={item.idFromApi}
        backdropPath={item.backdropPath} 
        posterPath={item.posterPath}
        genreIds={item.genre_ids}  
        title={item.title}
        overview={item.overview}
        voteAverage={item.voteAverage}
        releaseDate={item.releaseDate}
        popularity={item.popularity}
        userRating={item.ratings}
        genres={item.genres}
        video={item.video}
        item={item}
        removeMovieState={removeMovieState}/>)

       
    
    return (
        <FlatList removeMovieState={removeMovieState} data={movies} renderItem={renderItem}></FlatList>
    )

}

export default MovieCardList;