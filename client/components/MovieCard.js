import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import { FlatList } from 'react-native-web';

const MovieCard = ({id, backdropPath, posterPath, genreIds, title, overview, voteAverage, releaseDate, popularity, userRating}) => {

    const baseUrl = {uri: "https://image.tmdb.org/t/p/w500/" + posterPath};

    return (
        <View style={{flexDirection: 'row', width: 160, padding: 10, backgroundColor: 'aquamarine'}}>
            <View>
            <Image source={baseUrl} style={styles.image}></Image>
            </View>
            <View style={{margin: 10}}>
                <Text style={{fontSize:20}}>{title}</Text>
                <Text style={{fontSize:20, marginBottom: 10}}>({releaseDate.substring(0, 4)})</Text>
                <Text style={{marginBottom: 10}}>{overview.substring(0, 100) + "..."}</Text>
                <Text>{voteAverage} {userRating}</Text>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: 'contain',
        height: 300,
        width: 200,
        borderRadius: 10
      }

});

export default MovieCard;