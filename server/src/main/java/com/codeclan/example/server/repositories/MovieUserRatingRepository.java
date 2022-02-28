package com.codeclan.example.server.repositories;

import com.codeclan.example.server.models.MovieUserRating;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MovieUserRatingRepository extends JpaRepository<MovieUserRating, Long> {

    MovieUserRating findRatingByMovieIdAndUserId(Long movieId, Long userId);
}
