import {React, useState, useEffect} from 'react';
import {Text, View, Image, StyleSheet, TouchableHighlight} from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

const MovieSearchCard = ({id, backdropPath, posterPath, genreIds, title, overview, voteAverage, releaseDate, popularity, userRating}) => {
    const navigation = useNavigation();
    
    const baseUrl = {uri: "https://image.tmdb.org/t/p/w500/" + posterPath};

    return (
        
        <View>
            <TouchableHighlight onPress={() => navigation.navigate('MovieDetailScreen', {id: id,backdropPath: backdropPath,posterPath: posterPath, genreIds: genreIds, title:title, overview: overview, voteAverage: voteAverage, releaseDate: releaseDate, popularity: popularity, userRating: userRating}) }>
            <View style={{flexDirection: "row", marginRight:10, marginLeft:10, marginTop:10, backgroundColor: "#10161d", borderRadius: 10}}>
                <View>
                    <Image source={baseUrl} style={styles.image}></Image>
                </View>
                <View style={{margin: 10, width: 130}}>
                    <Text style={{fontSize:20, color:"#fcfdfd", fontWeight:"bold"}}>{title}</Text>
                    {releaseDate?<Text style={{fontSize:20, color:"#b5b7b9", marginBottom: 10}}>({releaseDate.substring(0, 4)})</Text> : null}
                    <Text style={{marginBottom:10, color:"#575c61"}}>{overview.substring(0, 100) + "..."}</Text>
                    <Text style={{marginBottom:10, fontSize:17}}> 
                        <FontAwesome name="imdb" size={24} color="#f5c517"/> <Text style={{color:"#fcfdfd"}}> {voteAverage}</Text>
                    </Text>
                </View>
            </View>
            </TouchableHighlight>
        </View>
    )

}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: 'contain',
        height: 300,
        width: 200,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10
      }

});

export default MovieSearchCard;