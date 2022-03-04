import React from 'react';
import { FlatList } from 'react-native';
import MovieItem from './MovieItem';

const MovieList = ({ movies }) => {



    const renderItem = ({ item }) => (<MovieItem
        id={item.id}
        backdropPath={item.backdrop_path}
        posterPath={item.poster_path}
        genreIds={item.genre_ids}
        title={item.title}
        overview={item.overview}
        voteAverage={item.vote_average}
        releaseDate={item.release_date}
        popularity={item.popularity}
        userRating={item.vote_average} />)

    return (


        <FlatList style={{ height: 300 }} horizontal={true} data={movies} renderItem={renderItem}  >

        </FlatList>
    )
}

export default MovieList;

