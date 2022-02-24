package com.codeclan.example.server;
import com.codeclan.example.server.models.Movie;
import com.codeclan.example.server.repositories.MovieRepository;
import com.codeclan.example.server.repositories.UserRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import java.util.List;

import static org.junit.Assert.assertFalse;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
class ServerApplicationTests {


	@Autowired
	UserRepository userRepository;

	@Autowired
	MovieRepository movieRepository;

	@Test
	void contextLoads() {
	}

	@Test
	public void canFindMoviesUsersFavouritesById(){
		List<Movie> foundMoviesFavourites = movieRepository.findMoviesUsersFavouritesById(1L);
		assertEquals(1, foundMoviesFavourites.size());
	}

	@Test
	public void canCheckIfIdFromApiExistsInDB(){
		assertTrue(movieRepository.existsMovieByidFromApi(634649));
		Assertions.assertFalse(movieRepository.existsMovieByidFromApi(1111));

	}

	@Test
	public void canFindByIdFromApi(){
		Movie movieToFind = movieRepository.findMovieByidFromApi(634649);
		assertEquals("Spider-Man: No Way Home", movieToFind.getTitle());
	}

	@Test
	public void canFindUsersWatchlist(){
		List<Movie> foundMovies = movieRepository.findMoviesUsersWatchlistById(1L);
		assertEquals(1, foundMovies.size());
	}

}
