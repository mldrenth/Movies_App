package com.codeclan.example.server.controllers;

import com.codeclan.example.server.models.MovieUserRating;
import com.codeclan.example.server.repositories.MovieUserRatingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MovieUserRatingController {

    @Autowired
    MovieUserRatingRepository movieUserRatingRepository;

    @GetMapping(value = "/movieuserratings")
    public ResponseEntity<List<MovieUserRating>> getAllMovieRatings(@RequestParam(required = false, name= "movieId") Long movieId, @RequestParam(required = false, name= "userId") Long userId){
        if (movieId != null && userId != null){
            return new ResponseEntity(movieUserRatingRepository.findRatingByMovieIdAndUserId(movieId, userId), HttpStatus.OK);
        }
        return new ResponseEntity<>(movieUserRatingRepository.findAll(), HttpStatus.OK);
    }


}
