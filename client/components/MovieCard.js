import React from 'react';
import {Text, Image, StyleSheet} from 'react-native';

const MovieCard = ({title, posterPath}) => {

    const baseUrl = {uri: "https://image.tmdb.org/t/p/w500/" + posterPath};


    console.log("title", title);
    return (
        // <View>
            <Text>I am here</Text>
        // // <Text style={{height: 200}}>Title{title}</Text>
        // <Image source={baseUrl} style={styles.image}>
            
        // </Image>
        // </View>
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