import React from 'react';
import { FlatList, Text, View } from 'react-native';
import MovieCard from './MovieCard';

const MovieCardList = ({movies}) => {

    const renderItem = ({item}) => {
        (<MovieCard title={item.title} posterPath={item.poster_path}/>)
    }

    return (
        <View>
        <Text>MovieCardList</Text>
        {/* <FlatList data={movies} renderItem={renderItem}></FlatList> */}
        </View>
    )
}

export default MovieCardList;