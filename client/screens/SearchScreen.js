import {React, useEffect, useState, useCallback} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TextInput } from 'react-native';
import MovieSearchList from '../components/MovieSearchList';
import { getMoviesByName } from '../services/MovieApiServices';
import debounce from 'lodash.debounce';


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

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#151D30',
    width: '70%',
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    borderColor: '#f5c517',
    color: '#b5b7b9'
  },
  container: {
    marginTop: 10
  }
})

export default SearchScreen;