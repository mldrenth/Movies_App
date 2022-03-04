import {React, useState, useCallback} from 'react';
import { View, TextInput } from 'react-native';
import MovieSearchList from '../components/MovieSearchList';
import { getMoviesByName } from '../services/MovieApiServices';
import debounce from 'lodash.debounce';
import styles from './SearchScreenStyle';


const SearchScreen = () => {
    
    const [searchTerm, setSearchTerm] = useState("");
    const [searchedMovies, setSearchedMovies] = useState([]);
    
    //Reworked to optimize search

    const debouncedSave = useCallback(
      debounce(nextValue => getMoviesByName(nextValue).then((searchResults) => {
              setSearchedMovies(searchResults.results);
              console.log(searchTerm)
            }), 500),
      [], 
    );

    const handleSearch = (data) => {
      setSearchTerm(data)
      debouncedSave(data)
    }

    return (
        <View style={styles.container} >
        <TextInput style={styles.input} onChangeText={handleSearch} placeholder="Search" clearButtonMode='always'></TextInput>
        <MovieSearchList movies={searchedMovies}/>
        </View>

    )
}



export default SearchScreen;