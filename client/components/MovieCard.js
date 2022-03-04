import {React, useState, useEffect} from 'react';
import {Text, View, Image} from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'; 
import { getUserData, removeMovieFromWatchlist, removieMovieFromFavourites } from '../services/UserServices';
import { useIsFocused } from "@react-navigation/native";
import { useIsMounted } from './Mounthelper';
import { getRatingByMovieAndUserId } from '../services/RatingServices';
import styles from './MovieCardStyle';


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
        <View style={styles.container}>
            <View>
                <Image source={baseUrl} style={styles.image}></Image>
            </View>
            <View style={{margin: 10, width: 130}}>
                <Text style={styles.movieTitle}>{title}</Text>
                <Text style={styles.releaseDate}>({releaseDate.substring(0, 4)})</Text>
                <Text style={styles.overview}>{overview.substring(0, 100) + "..."}</Text>
                
                <View style={styles.rating}>
                    <Text style={{marginBottom:10, fontSize:17}}> 
                        <FontAwesome name="imdb" size={24} color="#f5c517"/> <Text style={{color:"#fcfdfd"}}> {(voteAverage).toFixed(1) + "   "} </Text>
                    </Text>
                
                    {specificRating? 

                    <Text style={{fontSize:17}}>
                        <FontAwesome name="star" size={24} color="#f5c517"/> <Text style={{color:"#fcfdfd"}}> {specificRating} </Text> 
                    </Text> : null}
                </View>

                <View style={styles.iconsContainer}>
                {userHasMovieWatchlist ? <MaterialCommunityIcons name="bookmark-remove-outline" size={30} color="#f5c517" onPress={handleRemoveWatchlist} /> : null}
                {userHasMovieFavourites ? <MaterialCommunityIcons name="heart-remove-outline" size={30} color="#f5c517" onPress={handleRemoveFavourites} /> : null }
                </View>
            </View>
        </View>
    )

}



export default MovieCard;