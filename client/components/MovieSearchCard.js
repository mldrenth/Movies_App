import { React } from 'react';
import { Text, View, Image, TouchableHighlight } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from './MovieSearchCardStyle';

const MovieSearchCard = ({ id, backdropPath, posterPath, genreIds, title, overview, voteAverage, releaseDate, popularity, userRating }) => {
    const navigation = useNavigation();

    const baseUrl = { uri: "https://image.tmdb.org/t/p/w500/" + posterPath };

    return (

        <View>
            <TouchableHighlight onPress={() => navigation.navigate('MovieDetailScreen', { id: id, backdropPath: backdropPath, posterPath: posterPath, genreIds: genreIds, title: title, overview: overview, voteAverage: voteAverage, releaseDate: releaseDate, popularity: popularity, userRating: userRating })}>
                <View style={styles.container}>
                    <View>
                        <Image source={baseUrl} style={styles.image}></Image>
                    </View>
                    <View style={{ margin: 10, width: 130 }}>
                        <Text style={styles.movieTitle}>{title}</Text>
                        {releaseDate ? <Text style={styles.releaseDate}>({releaseDate.substring(0, 4)})</Text> : null}
                        <Text style={styles.overview}>{overview.substring(0, 100) + "..."}</Text>
                        <Text style={{ marginBottom: 10, fontSize: 17 }}>
                            <FontAwesome name="imdb" size={24} color="#f5c517" /> <Text style={{ color: "#fcfdfd" }}> {voteAverage}</Text>
                        </Text>
                    </View>
                </View>
            </TouchableHighlight>
        </View>
    )

}



export default MovieSearchCard;