import {React, useState, useEffect} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FlatList } from 'react-native-web';
import { getUserData, removeMovieFromWatchlist, removieMovieFromFavourites } from '../services/UserServices';
import { useIsFocused } from "@react-navigation/native";
import { useIsMounted } from './Mounthelper';
import { getRatingByMovieAndUserId } from '../services/RatingServices';


const MovieCard = ({id, idFromApi, backdropPath, posterPath, genreIds, title, overview, voteAverage, releaseDate, popularity, userRating, genres, video, removeMovieState, item, onScreen}) => {

    const [userHasMovieWatchlist, setUserHasMovieWatchlist] = useState(false);
    const [userHasMovieFavourites, setUserHasMovieFavourites] = useState(false);
    const isFocused = useIsFocused();

    const isMounted = useIsMounted();

    const [specificRating, setSpecificRating] = useState(null)

    const baseUrl = {uri: "https://image.tmdb.org/t/p/w500/" + posterPath};

    useEffect(() => {
        getRatingByMovieAndUserId(id,1)
        .then((ratingInfo) => { 
            if (ratingInfo != null) {
            setSpecificRating(ratingInfo.rating)}
        } )

    }, [isFocused])

    useEffect(() => {
        getUserData()
        .then((userData) => {
            if (isMounted.current) {
            if (userData.moviesWatchlist.map((movie) => movie.idFromApi).includes(idFromApi) ) {
              setUserHasMovieWatchlist(true);
            }
  
            if(userData.moviesFavourites.map((movie) => movie.idFromApi).includes(idFromApi)){
              setUserHasMovieFavourites(true);
            }}
            
        })
        
    }, [isFocused])

    

    const handleRemoveWatchlist = () => {
        removeMovieFromWatchlist(id)
        if (onScreen === "Favourites") {
            setUserHasMovieWatchlist(false)
        }
        if (onScreen === "Watchlist") {
            removeMovieState(id)
        }
        
    }

    const handleRemoveFavourites = () => {
        removieMovieFromFavourites(id)
        if (onScreen === "Favourites") {
            removeMovieState(id)
        }
        if (onScreen === "Watchlist") {
            setUserHasMovieFavourites(false)
        }
        
    
    }

    

    return (
        <View style={{flexDirection: "row", marginRight:10, marginLeft:10, marginTop:10, backgroundColor: "#10161d", borderRadius: 10}}>
            <View>
                <Image source={baseUrl} style={styles.image}></Image>
            </View>
            <View style={{margin: 10, width: 130}}>
                <Text style={{fontSize:20, color:"#fcfdfd", fontWeight:"bold"}}>{title}</Text>
                <Text style={{fontSize:20, color:"#b5b7b9", marginBottom: 10}}>({releaseDate.substring(0, 4)})</Text>
                <Text style={{marginBottom:10, color:"#575c61"}}>{overview.substring(0, 100) + "..."}</Text>
                
                <View style={styles.rating}>
                    <Text style={{marginBottom:10, fontSize:17}}> 
                        <FontAwesome name="imdb" size={24} color="#f5c517"/> <Text style={{color:"#fcfdfd"}}> {voteAverage}    </Text>
                    </Text>
                
                    {specificRating? 

                    <Text style={{fontSize:17}}>
                        <FontAwesome name="star" size={24} color="#f5c517"/> <Text style={{color:"#fcfdfd"}}> {specificRating}</Text> 
                    </Text> : null}
                </View>

                <View style={{flexDirection: "row", justifyContent: "flex-end"}}>
                {userHasMovieWatchlist ? <MaterialCommunityIcons name="bookmark-remove-outline" size={30} color="#f5c517" onPress={handleRemoveWatchlist} /> : null}
                {userHasMovieFavourites ? <MaterialCommunityIcons name="heart-remove-outline" size={30} color="#f5c517" onPress={handleRemoveFavourites} /> : null }
                </View>
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
    },
    rating: {
        flexDirection: 'row'
    }
});

export default MovieCard;