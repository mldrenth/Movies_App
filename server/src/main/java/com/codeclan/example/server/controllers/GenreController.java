package com.codeclan.example.server.controllers;

import com.codeclan.example.server.models.Genre;
import com.codeclan.example.server.repositories.GenreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class GenreController {

    @Autowired
    GenreRepository genreRepository;

    @GetMapping(value = "/genres")
    public ResponseEntity<List<Genre>> getAllGenres(){
        return new ResponseEntity<>(genreRepository.findAll(), HttpStatus.OK);
    }
}
