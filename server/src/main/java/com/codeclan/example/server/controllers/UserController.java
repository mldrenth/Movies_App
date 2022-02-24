package com.codeclan.example.server.controllers;
import com.codeclan.example.server.models.Movie;
import com.codeclan.example.server.models.User;
import com.codeclan.example.server.repositories.MovieRepository;
import com.codeclan.example.server.repositories.UserRepository;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@RestController
public class UserController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    MovieRepository movieRepository;

    @GetMapping(value = "/users")
    public ResponseEntity<List<User>> getAllUsers() {
        return new ResponseEntity<>(userRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/users/{id}")
    public ResponseEntity getUserById(@PathVariable Long id) {
        return new ResponseEntity(userRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/users")
    public ResponseEntity<User> postUser(@RequestBody User user) {
        userRepository.save(user);
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }

    @PutMapping(value = "/users/{id}")
    public ResponseEntity<User> putUser(@RequestBody User user, @PathVariable Long id) {
        User userToUpdate = userRepository.findById(id).get();
        userToUpdate.setUsername(user.getUsername());
        userToUpdate.setEmail(user.getEmail());
        userToUpdate.setPassword(user.getPassword());
        userToUpdate.setMoviesFavourites(user.getMoviesFavourites());
        userToUpdate.setMoviesWatchlist(user.getMoviesWatchlist());
        userRepository.save(userToUpdate);
        return new ResponseEntity<>(userToUpdate, HttpStatus.OK);
    }

    @DeleteMapping(value = "/users/{id}")
    public ResponseEntity<Long> deleteUser(@PathVariable Long id) {
        userRepository.deleteById(id);
        return new ResponseEntity<>(id, HttpStatus.OK);
    }


    @GetMapping(value = "users/{id}/watchlist")
    public ResponseEntity<List<Movie>> getAllMoviesInUsersWatchlist(@PathVariable Long id){

        return new ResponseEntity<>(movieRepository.findMoviesUsersWatchlistById(id), HttpStatus.OK);
    }

    @PostMapping(value = "users/{id}/watchlist")
    public ResponseEntity<Movie> addMovieToWatchlist(@RequestBody Movie movie, @PathVariable Long id) {
        User userToAddMovieTo = userRepository.findById(id).get();
        if(movieRepository.existsMovieByidFromApi(movie.getIdFromApi())){
            Movie movieToEdit = movieRepository.findMovieByidFromApi(movie.getIdFromApi());
            userToAddMovieTo.addMovieToWatchlist(movieToEdit);
            userRepository.save(userToAddMovieTo);

        }
        else {
//
            movieRepository.save(movie);
            userToAddMovieTo.addMovieToWatchlist(movie);
            userRepository.save(userToAddMovieTo);
        }
        return new ResponseEntity<>(movie, HttpStatus.CREATED);
    }

    @PostMapping(value = "users/{id}/favourites")
    public ResponseEntity<Movie> addMovieToFavourites(@RequestBody Movie movie, @PathVariable Long id ){
        User userToAddMovieTo = userRepository.findById(id).get();
        if(movieRepository.existsMovieByidFromApi(movie.getIdFromApi())){
            Movie movieToEdit = movieRepository.findMovieByidFromApi(movie.getIdFromApi());
            userToAddMovieTo.addMovieToFavourites(movieToEdit);
            userRepository.save(userToAddMovieTo);

        }
        else {
//
            movieRepository.save(movie);
            userToAddMovieTo.addMovieToFavourites(movie);
            userRepository.save(userToAddMovieTo);
        }
        return new ResponseEntity<>(movie, HttpStatus.CREATED);
    }

//    @GetMapping(value = "/users/{userId}/")

    // post request to add movie to watchlist / favourites
    // "/users/{userId}/watchlist". If movie exist in database, then add it to my fav If this does not exist in movie database, then create one
    // "/users/{userId}/favourites"
}
