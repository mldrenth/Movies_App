package com.codeclan.example.server.controllers;
import com.codeclan.example.server.models.Movie;
import com.codeclan.example.server.repositories.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@RestController
public class MovieController {

    @Autowired
    MovieRepository movieRepository;

    @GetMapping(value = "/movies")
    public ResponseEntity<List<Movie>> getAllMovies() {
        return new ResponseEntity<>(movieRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/movies/{id}")
    public ResponseEntity getMovieById(@PathVariable Long id) {
        return new ResponseEntity(movieRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/movies")
    public ResponseEntity<Movie> postMovie(@RequestBody Movie movie) {
        movieRepository.save(movie);
        return new ResponseEntity<>(movie, HttpStatus.CREATED);
    }

    @PutMapping(value = "/movies/{id}")
    public ResponseEntity<Movie> putMovie(@RequestBody Movie movie, @PathVariable Long id) {
        Movie movieToUpdate = movieRepository.findById(id).get();
//        movieToUpdate.setImageVerticalUrl(movie.getImageVerticalUrl());
//        movieToUpdate.setImageHorizontalUrl(movie.getImageHorizontalUrl());
//        movieToUpdate.setTitle(movie.getTitle());
//        movieToUpdate.setGenres(movie.getGenres());
//        movieToUpdate.setOverview(movie.getOverview());
//        movieToUpdate.setAverageRating(movie.getAverageRating());
//        movieToUpdate.setReleaseDate(movie.getReleaseDate());
//        movieToUpdate.setPopularity(movie.getPopularity());
//        movieToUpdate.setIdFromApi(movie.getIdFromApi());
//        movieToUpdate.setVideo(movie.getVideo());
//        movieToUpdate.setUsersFavourites(movie.getUsersFavourites());
//        movieToUpdate.setUsersWatchlist(movie.getUsersWatchlist());
        movieRepository.save(movieToUpdate);
        return new ResponseEntity<>(movieToUpdate, HttpStatus.OK);
    }

    @DeleteMapping(value = "/movies/{id}")
    public ResponseEntity<Long> deleteMovie(@PathVariable Long id) {
        movieRepository.deleteById(id);
        return new ResponseEntity<>(id, HttpStatus.OK);
    }

}
