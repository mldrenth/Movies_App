import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import { FlatList } from 'react-native-web';

const MovieCard = ({id, backdropPath, posterPath, genreIds, title, overview, voteAverage, releaseDate, popularity, userRating}) => {

    const baseUrl = {uri: "https://image.tmdb.org/t/p/w500/" + posterPath};

    return (
        <View style={{flexDirection: 'row', marginRight:10, marginLeft:10, marginTop:10, backgroundColor: '#10161d', borderRadius: 10}}>
            <View>
                <Image source={baseUrl} style={styles.image}></Image>
            </View>
            <View style={{margin: 10, width: 130}}>
                <Text style={{fontSize:20, color:"#fcfdfd", fontWeight:'bold'}}>{title}</Text>
                <Text style={{fontSize:20, color:"#b5b7b9", marginBottom: 10}}>({releaseDate.substring(0, 4)})</Text>
                <Text style={{marginBottom:10, color:"#575c61"}}>{overview.substring(0, 100) + "..."}</Text>
                <Text style={{marginBottom:10, fontSize:17}}> 
                    <FontAwesome name="imdb" size={24} color="#f5c517"/> <Text style={{color:"#fcfdfd"}}> {voteAverage}</Text>
                </Text>
                <Text style={{fontSize:17}}>
                    <FontAwesome name="star" size={24} color="#f5c517"/> <Text style={{color:"#fcfdfd"}}> {userRating}</Text> 
                </Text>
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
        borderBottomLeftRadius: 7,
        borderTopLeftRadius: 7
      }

});

export default MovieCard;