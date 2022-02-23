import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

const MovieCard = ({id, backdropPath, posterPath, genreIds, title, overview, voteAverage, releaseDate, popularity, userRating}) => {

    const baseUrl = {uri: "https://image.tmdb.org/t/p/w500/" + posterPath};

    return (
        <View>
            <Image source={baseUrl} style={styles.image}></Image>
            <View>
                <Text>{title}</Text>
            </View>
        </View>
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

export default MovieCard;