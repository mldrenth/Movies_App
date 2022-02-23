import React from 'react';
import { FlatList, Text, View } from 'react-native';
import MovieCard from './MovieCard';

const MovieCardList = ({movies}) => {

    const renderItem = ({item}) => (<MovieCard 
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
        <FlatList data={movies} renderItem={renderItem}></FlatList>
    )

}

export default MovieCardList;