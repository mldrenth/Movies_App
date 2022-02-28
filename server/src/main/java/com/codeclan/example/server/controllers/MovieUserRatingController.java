package com.codeclan.example.server.controllers;

import com.codeclan.example.server.models.Movie;
import com.codeclan.example.server.models.MovieUserRating;
import com.codeclan.example.server.models.User;
import com.codeclan.example.server.repositories.MovieRepository;
import com.codeclan.example.server.repositories.MovieUserRatingRepository;
import com.codeclan.example.server.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class MovieUserRatingController {

    @Autowired
    MovieUserRatingRepository movieUserRatingRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    MovieRepository movieRepository;

    @GetMapping(value = "/movieuserratings")
    public ResponseEntity<List<MovieUserRating>> getAllMovieRatings(@RequestParam(required = false, name= "movieId") Long movieId, @RequestParam(required = false, name= "userId") Long userId){
        if (movieId != null && userId != null){
            return new ResponseEntity(movieUserRatingRepository.findRatingByMovieIdAndUserId(movieId, userId), HttpStatus.OK);
        }
        return new ResponseEntity<>(movieUserRatingRepository.findAll(), HttpStatus.OK);
    }

    @PostMapping(value = "/movieuserratings")
    public ResponseEntity<MovieUserRating> postRating(@RequestBody MovieUserRating rating) {
        User userToMakeRating = rating.getUser();
        Movie movieToRate = rating.getMovie();
        if (movieUserRatingRepository.findRatingByMovieIdFromApiAndUserId(movieToRate.getIdFromApi(), userToMakeRating.getId()) != null) {
            Movie movieToUpdate = movieRepository.findMovieByidFromApi(movieToRate.getIdFromApi());
            MovieUserRating ratingToEdit = movieUserRatingRepository.findRatingByMovieIdAndUserId(movieToUpdate.getId(), userToMakeRating.getId());
            ratingToEdit.setRating(rating.getRating());
            movieRepository.save(movieToUpdate);
            movieUserRatingRepository.save(ratingToEdit);
        }
        else if (movieRepository.existsMovieByidFromApi(movieToRate.getIdFromApi())) {
            Movie movieToUpdate = movieRepository.findMovieByidFromApi(movieToRate.getIdFromApi());
            rating.setMovie(movieToUpdate);
            movieRepository.save(movieToUpdate);
            movieUserRatingRepository.save(rating);
        }
        else {
            movieRepository.save(movieToRate);
            movieUserRatingRepository.save(rating);
        }

        return new ResponseEntity<>(rating, HttpStatus.CREATED);

    } }
