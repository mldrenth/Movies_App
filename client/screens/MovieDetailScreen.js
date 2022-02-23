import {React, useState, useEffect, useRef, useCallback} from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, ScrollView, Image, TouchableHighlight, Button} from 'react-native';
import YoutubePlayer from "react-native-youtube-iframe";
import { useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { getVideoKey } from '../services/MovieApiServices';
import { addMovie } from '../services/MovieServices';

const MovieDetailScreen = () => {

    const [youtubeKey, setYoutubeKey] = useState("");
    const route = useRoute();
    const {id, backdropPath, posterPath, genreIds, title, overview, voteAverage, releaseDate, popularity, userRating} =  route.params;
    const backdropUrl = {uri: "https://image.tmdb.org/t/p/w500/" + (backdropPath)}

    const [playing, setPlaying] = useState(false);

    const onStateChange = useCallback((state) => {
      if (state === "ended") {
        setPlaying(false);
        Alert.alert("video has finished playing!");
      }
    }, []);
  
    const togglePlaying = useCallback(() => {
      setPlaying((prev) => !prev);
    }, []);

    useEffect(() => {
        getVideoKey(id).then((moviekeys) => setYoutubeKey(moviekeys.results[0].key))
    },[])

    const handleSave = () => {
      addMovie({
        imageVerticalUrl: posterPath,
        imageHorizontalUrl: backdropPath,
        title: title,
        overview: overview,
        averageRating: voteAverage,
        releaseDate: releaseDate,
        popularity: popularity,
        userRating: voteAverage,
        idFromApi: id,
        video: youtubeKey
        
      })
    }
    


    return (
        <View style={{flex:1, alignItems:'center'}}>
        <ScrollView>
        <Image source={backdropUrl} style={styles.backdrop}></Image>
        <Text style={{fontSize:20}}>{title}</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly', width: '100%'}}>
        <TouchableHighlight onPress={handleSave}>
        <Ionicons name="bookmark" size={32} color="black" />
        </TouchableHighlight>
        <TouchableHighlight onPress={handleSave}>
        <Ionicons name="heart" size={32} color="black" />
        </TouchableHighlight>
        </View>
        {youtubeKey?<View style={{flex:1}}>
            <Text>Trailer</Text>
            <YoutubePlayer height={300}
        play={playing}
        videoId={youtubeKey}
        onChangeState={onStateChange}></YoutubePlayer>
             <Button title={playing ? "pause" : "play"} onPress={togglePlaying} />

        
        </View> : null}
        
        <Text>OVERVIEW</Text>
        <Text>{overview}</Text>
        </ScrollView>
            </View>
    
    )
    
}

export default MovieDetailScreen;

const styles = StyleSheet.create({
    item: {
        padding: 0,
        marginVertical: 8,
        marginHorizontal: 0,
       
        
      },image: {
        
        resizeMode: 'contain',
        height: 100,
        width: 200
    
      }, backdrop: {
        resizeMode: 'cover',
        height: 200,
        width: 400,

      },video: {
        alignSelf: 'center',
        width: 350,
        height: 220,
      },
      buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },

});