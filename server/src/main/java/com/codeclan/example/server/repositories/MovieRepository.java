package com.codeclan.example.server.repositories;
import com.codeclan.example.server.models.Movie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {

    List<Movie> findMoviesUsersFavouritesById(Long id);
    boolean existsMovieByidFromApi(int id);
    Movie findMovieByidFromApi(int id);

    List<Movie> findMoviesUsersWatchlistById(Long id);

}
